import { useEffect } from "react";

export default function useIntersectionObserver(selector = ".fade-up", options = { threshold: 0.15 }) {
  useEffect(()=>{
    const nodes = Array.from(document.querySelectorAll(selector));
    if(!nodes.length) return;
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.classList.add("visible");
          obs.unobserve(e.target);
        }
      });
    }, options);
    nodes.forEach(n=>obs.observe(n));
    return ()=>obs.disconnect();
  }, [selector, JSON.stringify(options)]);
}
