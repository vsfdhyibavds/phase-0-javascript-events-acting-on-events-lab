// Your code here
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  const GAME_WIDTH = 400; // Define the width of the game area

  function moveDodgerRight() {
      const dodger = document.getElementById("dodger"); // Ensure you have an element with id="dodger"
      let left = parseInt(dodger.style.left.replace("px", ""), 10);

      if (left < GAME_WIDTH - dodger.offsetWidth) { // Prevent moving beyond GAME_WIDTH
          dodger.style.left = `${left + 10}px`;
      }
  }
