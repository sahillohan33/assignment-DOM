window.addEventListener('DOMContentLoaded', (event) => {
    const paragraph = document.getElementById('myParagraph');
    const words = paragraph.innerText.split(' ');
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (word.length > 8) {
        words[i] = `<span class="highlight">${word}</span>`;
      }
    }
  
    paragraph.innerHTML = words.join(' ');
  });
  