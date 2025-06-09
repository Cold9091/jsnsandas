import { useEffect } from 'react';

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalResources = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
        '/images/hero-jsn-sanda.jpg',
        '/images/logo.png'
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        if (resource.includes('.css')) {
          link.as = 'style';
        } else if (resource.includes('.jpg') || resource.includes('.png')) {
          link.as = 'image';
        }
        link.href = resource;
        document.head.appendChild(link);
      });
    };

    // Implement lazy loading for images
    const implementLazyLoading = () => {
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
              }
            }
          });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
          imageObserver.observe(img);
        });
      }
    };

    // Optimize font loading
    const optimizeFontLoading = () => {
      const fontDisplay = document.createElement('style');
      fontDisplay.textContent = `
        @font-face {
          font-family: 'Inter';
          font-display: swap;
          src: url('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2') format('woff2');
        }
      `;
      document.head.appendChild(fontDisplay);
    };

    // Service Worker for caching
    const registerServiceWorker = () => {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').catch(() => {
          // Service worker registration failed, but continue without it
        });
      }
    };

    // Critical CSS inlining
    const inlineCriticalCSS = () => {
      const criticalCSS = `
        body { margin: 0; font-family: 'Inter', sans-serif; }
        .apple-headline { font-weight: 600; line-height: 1.1; }
        .apple-subheadline { font-weight: 400; line-height: 1.4; }
        .apple-button-primary { 
          background: linear-gradient(135deg, #ebbb04 0%, #f4c430 100%);
          border: none;
          padding: 16px 32px;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
        }
      `;
      
      const style = document.createElement('style');
      style.textContent = criticalCSS;
      document.head.appendChild(style);
    };

    // Resource hints for better performance
    const addResourceHints = () => {
      const hints = [
        { rel: 'dns-prefetch', href: '//www.google-analytics.com' },
        { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true }
      ];

      hints.forEach(hint => {
        const existing = document.querySelector(`link[rel="${hint.rel}"][href="${hint.href}"]`);
        if (!existing) {
          const link = document.createElement('link');
          link.rel = hint.rel;
          link.href = hint.href;
          if (hint.crossorigin) link.crossOrigin = 'anonymous';
          document.head.appendChild(link);
        }
      });
    };

    // Web Vitals optimization
    const optimizeWebVitals = () => {
      // Reduce CLS by setting dimensions for images
      document.querySelectorAll('img').forEach(img => {
        if (!img.width && !img.height) {
          img.style.aspectRatio = '16/9';
          img.style.width = '100%';
          img.style.height = 'auto';
        }
      });

      // Optimize LCP by prioritizing hero image
      const heroImage = document.querySelector('img[data-hero]');
      if (heroImage) {
        heroImage.setAttribute('fetchpriority', 'high');
        heroImage.setAttribute('loading', 'eager');
      }
    };

    // Execute optimizations
    preloadCriticalResources();
    implementLazyLoading();
    optimizeFontLoading();
    registerServiceWorker();
    inlineCriticalCSS();
    addResourceHints();
    optimizeWebVitals();

    // Monitor Core Web Vitals manually
    const monitorWebVitals = () => {
      // Monitor LCP
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime);
      }).observe({entryTypes: ['largest-contentful-paint']});

      // Monitor FID
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          console.log('FID:', entry.processingStart - entry.startTime);
        }
      }).observe({type: 'first-input', buffered: true});

      // Monitor CLS
      let clsValue = 0;
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            console.log('CLS:', clsValue);
          }
        }
      }).observe({type: 'layout-shift', buffered: true});
    };

    try {
      monitorWebVitals();
    } catch (error) {
      // Silently fail if performance monitoring is not supported
    }

  }, []);

  return null;
}