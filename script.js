document.addEventListener('DOMContentLoaded', () => {
  
  document.addEventListener('click', (event) => {
    const anchor = event.target.closest('a[href^="#"]');
    if (anchor) {
      const href = anchor.getAttribute('href');
      if (href && href !== '#') {
        event.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  });

  const header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');

  if (menuToggle && mobileMenu && iconOpen && iconClose) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      iconOpen.classList.toggle('hidden');
      iconClose.classList.toggle('hidden');
    });
    
    mobileMenu.addEventListener('click', (e) => {
        if(e.target.tagName === 'A') {
            mobileMenu.classList.add('hidden');
            iconOpen.classList.remove('hidden');
            iconClose.classList.add('hidden');
        }
    });
  }

  const articles = document.querySelectorAll('article');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  articles.forEach(article => {
    observer.observe(article);
  });
});
