import React, { useRef, useState, useEffect } from "react";

export default function LazyImage({ src, alt="", className="" }){
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(()=>{
    if(!ref.current) return;
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){ setVisible(true); obs.unobserve(e.target); }
      });
    }, { rootMargin: "100px" });
    obs.observe(ref.current);
    return ()=>obs.disconnect();
  }, []);

  return (
    <img
      ref={ref}
      src={visible ? src : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="}
      alt={alt}
      className={className + (visible ? " loaded" : " loading")}
      loading="lazy"
    />
  );
}
