import React, { useEffect, useRef } from "react";

const ConsoleText = ({ words, colors }) => {
  const textRef = useRef(null);
  const consoleRef = useRef(null);

  useEffect(() => {
    if (!colors) colors = ["#fff"];
    let visible = true;
    const con = consoleRef.current;
    let letterCount = 1;
    let x = 1;
    let waiting = false;
    const target = textRef.current;
    target.style.color = colors[0];

    const typingInterval = setInterval(() => {
      if (letterCount === 0 && !waiting) {
        waiting = true;
        target.innerHTML = words[0].substring(0, letterCount);
        setTimeout(() => {
          const usedColor = colors.shift();
          colors.push(usedColor);
          const usedWord = words.shift();
          words.push(usedWord);
          x = 1;
          target.style.color = colors[0];
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (letterCount === words[0].length + 1 && !waiting) {
        waiting = true;
        setTimeout(() => {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (!waiting) {
        target.innerHTML = words[0].substring(0, letterCount);
        letterCount += x;
      }
    }, 100);

    const blinkInterval = setInterval(() => {
      if (visible) {
        con.className = "console-underscore hidden";
        visible = false;
      } else {
        con.className = "console-underscore";
        visible = true;
      }
    }, 400);

    return () => {
      clearInterval(typingInterval);
      clearInterval(blinkInterval);
    };
  }, [words, colors]);

  return (
    <div class="console-container">
      <span id="text" ref={textRef}></span>
      <div class="console-underscore" id="console" ref={consoleRef}>
        &#95;
      </div>
    </div>
  );
};

export default ConsoleText;
