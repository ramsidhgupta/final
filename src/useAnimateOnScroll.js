import { useEffect } from 'react';
import gsap from 'gsap';
import Textify from "textify.js";

const useAnimateOnScroll = (selector, from, to, repeat = true) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;

          gsap.fromTo(target,
            from,
            {
              ...to,
              onComplete: () => {
                if (!repeat) {
                  observer.unobserve(target);
                }
              },
            }
          );
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    elements.forEach(el => observer.observe(el));

    // Cleanup function to disconnect the observer
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, [selector, from, to, repeat]);
};

export default useAnimateOnScroll;
