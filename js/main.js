    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const servicesMenu = document.querySelector(".services-menu");

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

      navLinks.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("is-open");
          menuToggle.setAttribute("aria-expanded", "false");
          menuToggle.setAttribute("aria-label", "Abrir menú");
          if (servicesMenu) servicesMenu.open = false;
        });
      });
    }

    if (servicesMenu) {
      document.addEventListener("click", (event) => {
        if (!servicesMenu.contains(event.target)) servicesMenu.open = false;
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
        const subject = encodeURIComponent(`Consulta de ${form.get("nombre")}`);
        const body = encodeURIComponent(
          `Nombre: ${form.get("nombre")}\nTeléfono: ${form.get("telefono") || "No indicado"}\nCorreo: ${form.get("correo")}\n\nMensaje:\n${form.get("mensaje")}`
        );
        window.location.href = `mailto:info@clinicaejemplo.com?subject=${subject}&body=${body}`;
      });
    }

    const year = document.querySelector("#year");
    if (year) year.textContent = new Date().getFullYear();
