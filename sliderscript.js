 // testimonials slider


      document.addEventListener("DOMContentLoaded", function () {
        const slider = document.querySelector(".testimonial-slider");
        const cards = document.querySelectorAll(".testimonial-card");
        const prevBtn = document.querySelector(".prev-btn");
        const nextBtn = document.querySelector(".next-btn");
        const dotsContainer = document.querySelector(".slider-dots");
        let currentIndex = 0;
        const cardCount = cards.length;

        // Create dots
        function renderDots() {
          dotsContainer.innerHTML = "";
          for (let i = 0; i < cardCount; i++) {
            const dot = document.createElement("div");
            dot.className = "dot" + (i === 0 ? " active" : "");
            dot.setAttribute("data-index", i);
            dot.addEventListener("click", () => {
              currentIndex = i;
              updateSlider();
            });
            dotsContainer.appendChild(dot);
          }
        }

        function updateSlider() {
          slider.style.transform = `translateX(-${currentIndex * 100}%)`;
          // Update active dot
          const dots = dotsContainer.querySelectorAll(".dot");
          dots.forEach((dot, idx) => {
            dot.classList.toggle("active", idx === currentIndex);
          });
        }

        nextBtn.addEventListener("click", () => {
          currentIndex = (currentIndex + 1) % cardCount;
          updateSlider();
        });

        prevBtn.addEventListener("click", () => {
          currentIndex = (currentIndex - 1 + cardCount) % cardCount;
          updateSlider();
        });

        // Auto-rotate every 6 seconds
        let slideInterval = setInterval(() => {
          currentIndex = (currentIndex + 1) % cardCount;
          updateSlider();
        }, 6000);

        // Pause on hover
        const container = document.querySelector(".testimonial-container");
        container.addEventListener("mouseenter", () => {
          clearInterval(slideInterval);
        });
        container.addEventListener("mouseleave", () => {
          slideInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % cardCount;
            updateSlider();
          }, 6000);
        });

        // Keyboard navigation
        document.addEventListener("keydown", (e) => {
          if (e.key === "ArrowRight") {
            currentIndex = (currentIndex + 1) % cardCount;
            updateSlider();
          } else if (e.key === "ArrowLeft") {
            currentIndex = (currentIndex - 1 + cardCount) % cardCount;
            updateSlider();
          }
        });

        renderDots();
        updateSlider();
      });
   


















          // Custom JavaScript for auto-sliding carousel with pause on hover
    document.addEventListener('DOMContentLoaded', function() {
        const carousel = document.getElementById('brandsCarousel');
        const bsCarousel = new bootstrap.Carousel(carousel, {
            interval: 3000, // 3 seconds
            pause: 'hover', // pause on hover
            wrap: true // infinite loop
        });
        
        // Add animation class when section comes into view
        const brandSection = document.getElementById('trusted-brands-carousel');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    brandSection.classList.add('animated');
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(brandSection);
        
        // Brand click handlers
        const brandCards = document.querySelectorAll('.brand-card');
        brandCards.forEach(card => {
            card.addEventListener('click', function() {
                const brand = this.getAttribute('data-brand');
                console.log('Brand clicked:', brand);
                // Add your custom click handling here
            });
        });
    });