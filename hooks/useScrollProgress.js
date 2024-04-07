import { useState, useEffect } from "react";

export default function useScrollProgress() {
  const [completion, setCompletion] = useState();

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        setCompletion(Number(currentProgress / scrollHeight).toFixed(2) * 100);
      }
    };

    //event
    window.addEventListener('scroll', updateScrollProgress);
    //clear event
    return () => window.removeEventListener('scroll', updateScrollProgress);

  }, []);

  return completion;
}