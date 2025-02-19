// useInView.js
import { useState, useEffect } from 'react';

const useInView = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 1 }
    );

    const placeholder = document.getElementById('placeholder');
    if (placeholder) {
      observer.observe(placeholder);
    }

    return () => {
      if (placeholder) {
        observer.unobserve(placeholder);
      }
    };
  }, []);

  return inView;
};

export default useInView;
