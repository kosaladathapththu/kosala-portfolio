// 📂 hooks/useScrollAnimation.js
import { useState, useEffect } from 'react';

const useScrollAnimation = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
    setElements(animatedElements);

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return elements;
};

export default useScrollAnimation;
