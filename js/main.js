    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealElements = document.querySelectorAll([
      ".section-heading",
      ".identity-card",
      ".service-detail-grid > *",
      ".contact-grid > *",
      ".contact-item",
      ".footer-inner > *"
    ].join(", "));

    if (!reduceMotion && "IntersectionObserver" in window) {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -32px 0px" });

      revealElements.forEach((element, index) => {
        element.classList.add("reveal-on-scroll");
        element.style.setProperty("--reveal-delay", `${(index % 3) * 90}ms`);
        revealObserver.observe(element);
      });
      document.body.classList.add("motion-enabled");
    }

    if (menuToggle && navLinks) {
      menuToggle.addEventListener("click", () => {
        const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", String(!isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
        navLinks.classList.toggle("is-open", !isOpen);
      });

      navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("is-open");
          menuToggle.setAttribute("aria-expanded", "false");
          menuToggle.setAttribute("aria-label", "Abrir menú");
        });
      });
    }

    document.querySelectorAll("[data-carousel]").forEach((carousel) => {
      const slides = Array.from(carousel.querySelectorAll(".hero-slide"));
      const dots = Array.from(carousel.querySelectorAll(".carousel-dot"));
      const interval = 3000;
      let timer;
      const showSlide = (index) => {
        const activeIndex = (index + slides.length) % slides.length;
        slides.forEach((slide, slideIndex) => {
          const isActive = slideIndex === activeIndex;
          slide.classList.toggle("is-active", isActive);
          slide.setAttribute("aria-hidden", String(!isActive));
        });
        dots.forEach((dot, dotIndex) => {
          const isActive = dotIndex === activeIndex;
          dot.classList.toggle("is-active", isActive);
          if (isActive) dot.setAttribute("aria-current", "true");
          else dot.removeAttribute("aria-current");
        });
      };
      const stopAutoplay = () => {
        window.clearInterval(timer);
        timer = undefined;
      };
      const startAutoplay = () => {
        if (timer || document.hidden || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        timer = window.setInterval(() => {
          const activeIndex = slides.findIndex((slide) => slide.classList.contains("is-active"));
          showSlide(activeIndex + 1);
        }, interval);
      };
      const showManually = (index) => {
        showSlide(index);
        stopAutoplay();
        startAutoplay();
      };

      dots.forEach((dot, index) => dot.addEventListener("click", () => showManually(index)));
      carousel.addEventListener("mouseenter", stopAutoplay);
      carousel.addEventListener("mouseleave", startAutoplay);
      carousel.addEventListener("focusin", stopAutoplay);
      carousel.addEventListener("focusout", (event) => {
        if (!carousel.contains(event.relatedTarget)) startAutoplay();
      });
      document.addEventListener("visibilitychange", () => {
        if (document.hidden) stopAutoplay();
        else startAutoplay();
      });
      startAutoplay();
    });

    const contactForm = document.querySelector("#contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const message = encodeURIComponent(
          `Hola, quiero comunicarme con Guzman Medical Center.\n\nNombre: ${form.get("nombre")}\nTeléfono: ${form.get("telefono") || "No indicado"}\nCorreo: ${form.get("correo")}\nMotivo: ${form.get("motivo")}\nServicio de interés: ${form.get("servicio")}\n\nMensaje:\n${form.get("mensaje")}`
        );
        window.location.href = `https://wa.me/18095766335?text=${message}`;
      });
    }

    const serviceSearch = document.querySelector("#service-search");
    const serviceSearchClear = document.querySelector("#service-search-clear");
    const serviceSearchStatus = document.querySelector("#service-search-status");
    const serviceCards = Array.from(document.querySelectorAll("#services-list .service-card"));
    if (serviceSearch && serviceSearchClear && serviceSearchStatus && serviceCards.length) {
      const normalizeText = (text) => text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLocaleLowerCase("es")
        .trim();

      const getEditDistance = (left, right) => {
        const distances = Array.from(
          { length: left.length + 1 },
          () => Array(right.length + 1).fill(0)
        );
        for (let row = 0; row <= left.length; row += 1) distances[row][0] = row;
        for (let column = 0; column <= right.length; column += 1) distances[0][column] = column;

        for (let row = 1; row <= left.length; row += 1) {
          for (let column = 1; column <= right.length; column += 1) {
            const substitutionCost = left[row - 1] === right[column - 1] ? 0 : 1;
            distances[row][column] = Math.min(
              distances[row - 1][column] + 1,
              distances[row][column - 1] + 1,
              distances[row - 1][column - 1] + substitutionCost
            );
            if (
              row > 1 &&
              column > 1 &&
              left[row - 1] === right[column - 2] &&
              left[row - 2] === right[column - 1]
            ) {
              distances[row][column] = Math.min(
                distances[row][column],
                distances[row - 2][column - 2] + 1
              );
            }
          }
        }

        return distances[left.length][right.length];
      };

      const matchesSearchToken = (token, text, words) => {
        if (text.includes(token) || words.some((word) => word.includes(token))) return true;
        if (token.length < 4) return false;

        const allowedDistance = token.length >= 9 ? 2 : 1;
        return words.some((word) =>
          Math.abs(word.length - token.length) <= allowedDistance &&
          getEditDistance(token, word) <= allowedDistance
        );
      };

      const filterServices = () => {
        const query = normalizeText(serviceSearch.value);
        const queryTokens = query.split(/\s+/).filter(Boolean);
        let visibleCount = 0;
        serviceCards.forEach((card) => {
          const cardText = normalizeText(card.textContent || "");
          const cardWords = cardText.split(/[^a-z0-9]+/).filter(Boolean);
          const matches = queryTokens.every((token) =>
            matchesSearchToken(token, cardText, cardWords)
          );
          card.hidden = !matches;
          if (matches) visibleCount += 1;
        });

        serviceSearchClear.disabled = serviceSearch.value.length === 0;
        serviceSearchStatus.textContent = visibleCount === 0
          ? "No encontramos servicios que coincidan. Prueba con otra búsqueda."
          : `Se muestran ${visibleCount} ${visibleCount === 1 ? "servicio" : "servicios"}.`;
      };

      serviceSearch.addEventListener("input", filterServices);
      serviceSearchClear.addEventListener("click", () => {
        serviceSearch.value = "";
        filterServices();
        serviceSearch.focus();
      });
    }

    const year = document.querySelector("#year");
    if (year) year.textContent = new Date().getFullYear();
