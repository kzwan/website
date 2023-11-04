import React, { useEffect } from "react";
import "./circle.css"; // Import the CSS file with the animation styles

const CircleText = () => {
  useEffect(() => {
    const circle = document.querySelector('.circle');
    const text = circle.innerHTML.trim();
    circle.innerHTML = '';
    circle.style.setProperty('--numchs', text.length);

    for (let i = 0; i < text.length; i++) {
      circle.innerHTML += `<div class="char" style="--char-index: ${i};">${text.charAt(i)}</div>`;
    }
  }, []);

  return (
    <div className="circle">
      {/* Content will be generated dynamically */}
    </div>
  );
};

export default CircleText;