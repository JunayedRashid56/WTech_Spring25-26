let btn = document.querySelector(".btn");

btn.onclick = () => {
   let text = document.getElementById("textInput").value;

   // Handle empty input
   if (text.trim() === "") {
      document.getElementById("output").innerHTML =
         "<p style='color:red;'>Please enter some text!</p>";
      return;
   }

   // Character count
   let charCount = text.length;

   // Word count (handle multiple spaces)
   let words = text.trim().split(/\s+/);
   let wordCount = words.length;

   // Reverse text
   let reversedText = text.split("").reverse().join("");

   // Display result
   document.getElementById("output").innerHTML = `
                <h3>Analysis Result:</h3>
                <p><strong>Total Characters:</strong> ${charCount}</p>
                <p><strong>Total Words:</strong> ${wordCount}</p>
                <p><strong>Reversed Text:</strong><br>${reversedText}</p>
            `;
};
