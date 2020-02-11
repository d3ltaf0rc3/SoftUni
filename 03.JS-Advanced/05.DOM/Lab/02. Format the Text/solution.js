function solve() {
  let text = document.getElementById("input").textContent.split(".");
  let output = document.getElementById("output");

  for (let i = 0; i < text.length; i += 3) {
    let pContent = [];
    
    for (let j = 0; j < 3; j++) {
      if (text[i + j] !== undefined && text[i + j] !== "") {
        pContent.push(text[i + j] + ". ");
      }
    }
    
    let p = document.createElement("p");
    p.textContent = pContent.join("");
    output.appendChild(p);
  }
}