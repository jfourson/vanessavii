// Fashion Portfolio Website JavaScript

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', () => {
  // Add smooth scrolling behavior for navigation links
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');

      if (targetId && targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Add parallax effect to hero background
  const heroBackground = document.querySelector('.hero-background') as HTMLElement;

  if (heroBackground) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallax = scrolled * 0.5;

      if (scrolled < window.innerHeight) {
        heroBackground.style.transform = `translateY(${parallax}px)`;
      }
    });
  }


  
  // Add loading animation delay for stats
  const statItems = document.querySelectorAll('.stat-item');

  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        (entry.target as HTMLElement).style.animation = 'fadeInUp 0.6s ease-out forwards';
      }
    });
  }, observerOptions);

  statItems.forEach((item, index) => {
    const htmlItem = item as HTMLElement;
    htmlItem.style.opacity = '0';
    htmlItem.style.transform = 'translateY(20px)';
    htmlItem.style.animationDelay = `${index * 0.1}s`;
    observer.observe(item);
  });

  // Add hover effect for portrait images
  const portraitImages = document.querySelectorAll('.portrait-image img');

  portraitImages.forEach(img => {
    const htmlImg = img as HTMLImageElement;
    htmlImg.addEventListener('mouseenter', () => {
      htmlImg.style.filter = 'brightness(1.1) contrast(1.1)';
    });

    htmlImg.addEventListener('mouseleave', () => {
      htmlImg.style.filter = 'brightness(1) contrast(1)';
    });
  });

    // --- NEW CODE: Portfolio Filtering ---
  const filterLinks = document.querySelectorAll('.nav-link[data-filter]');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const filter = (link as HTMLElement).dataset.filter;

      portfolioItems.forEach(item => {
        if (filter === 'all' || item.classList.contains(filter!)) {
          (item as HTMLElement).style.display = 'block';
        } else {
          (item as HTMLElement).style.display = 'none';
        }
      });
    });
  });

  console.log('Fashion Portfolio website loaded successfully! 💫');


  // Add click to copy email functionality
  const contactLink = document.querySelector('.contact-link') as HTMLElement;

  if (contactLink) {
    contactLink.addEventListener('click', (e) => {
      const email = contactLink.textContent;

      if (email && navigator.clipboard) {
        e.preventDefault();
        navigator.clipboard.writeText(email).then(() => {
          // Show temporary feedback
          const originalText = contactLink.textContent;
          contactLink.textContent = 'Email copied!';
          contactLink.style.color = '#10b981';

          setTimeout(() => {
            contactLink.textContent = originalText;
            contactLink.style.color = '';
          }, 2000);
        }).catch(() => {
          // Fallback to default mailto behavior
          window.location.href = `mailto:${email}`;
        });
      }
    });
  }

  console.log('Fashion Portfolio website loaded successfully! 💫');
});

// Add CSS animation styles dynamically
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);
// Translation dictionary
const translations = {
  en: {
    heroSubtitle1: "FASHION MODEL",
    heroSubtitle2: "NEW YORK",
    statsTitle: "MY STATS",
    height: "Height",
    weight: "Weight",
    shoe: "Shoe",
    bwh: "BWH",
    hair: "Hair",
    eyes: "Eyes",
    dress: "Dress Size",
    nationality: "Ukrainian",
    all: "ALL",
    book: "BOOK",
    shows: "SHOWS",
    advertising: "ADVERTISING",
    photoshoots: "PHOTOSHOOTS",
    contact: "CONTACT:"
  },
  jp: {
    heroSubtitle1: "ファッションモデル",
    heroSubtitle2: "ニューヨーク",
    statsTitle: "スタッツ",
    height: "身長",
    weight: "体重",
    foot: "靴サイズ",
    bwh: "バスト・ウエスト・ヒップ",
    hair: "髪の色",
    eyes: "目の色",
    dress: "ドレスサイズ",
    nationality:"ナショナリティー",
    all: "すべて",
    book: "ブック",
    shows: "ショー",
    advertising: "広告",
    photoshoots: "写真撮影",
    contact: "連絡先:"
  }
};

// Language switch function
function setLanguage(lang: "en" | "jp") {
  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n!;
    el.textContent = translations[lang][key];
  });

  // Update <html lang="...">
  document.documentElement.lang = lang;
}

// Run after DOM loads
document.addEventListener("DOMContentLoaded", () => {
  // Check URL for ?lang=jp
  const params = new URLSearchParams(window.location.search);
  const lang = (params.get("lang") as "en" | "jp") || "en";
  setLanguage(lang);

  // Hook up buttons
  document.getElementById("lang-en")?.addEventListener("click", () => setLanguage("en"));
  document.getElementById("lang-jp")?.addEventListener("click", () => setLanguage("jp"));
});


//new filtering
// document.addEventListener("DOMContentLoaded", () => {
//   const filterLinks = document.querySelectorAll<HTMLAnchorElement>(".nav-link");
//   const portfolioItems = document.querySelectorAll<HTMLElement>(".portfolio-item");

//   filterLinks.forEach(link => {
//     link.addEventListener("click", (e) => {
//       e.preventDefault(); // stop the page from jumping

//       const filter = link.getAttribute("data-filter");

//       portfolioItems.forEach(item => {
//         if (filter === "all" || item.classList.contains(filter!)) {
//           item.style.display = "block"; // show
//         } else {
//           item.style.display = "none"; // hide
//         }
//       });
//     });
//   })})