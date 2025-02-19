import { useEffect } from "react";

const useLettering = (refs) => {
  useEffect(() => {
    refs.forEach((ref, index) => {
      if (ref) {
        const element = ref;
        const words = element.textContent.trim().split(" ");
        element.textContent = "";

        words.forEach((word, wordIndex) => {
          const wordSpan = document.createElement("span");
          wordSpan.className = `word${wordIndex + 1}`;
          wordSpan.style.display = 'inline-block';

          word.split("").forEach((letter, letterIndex) => {
            const outerCharSpan = document.createElement("span");
            outerCharSpan.className = `char${letterIndex + 1}`;
            outerCharSpan.style.display = 'inline-block';

            const innerCharSpan = document.createElement("span");
            innerCharSpan.className = `char${letterIndex + 1}`;
            innerCharSpan.textContent = letter;
            innerCharSpan.style.display = 'inline-block';

            outerCharSpan.appendChild(innerCharSpan);
            wordSpan.appendChild(outerCharSpan);
          });

          element.appendChild(wordSpan);
          element.appendChild(document.createTextNode(" ")); // Preserve spaces between words
        });

        // Apply animation to the spans
       
      }
    });
  }, [refs]);
};

export default useLettering;
