function create(words) {
   let mainDiv = document.getElementById("content");
   
   words.forEach(element => {
      let div = document.createElement("div");
      let p = document.createElement("p");
      
      p.textContent = element;
      p.style.display = "none";
      
      div.appendChild(p);
      div.addEventListener("click", () => {
         p.style.display = "block";
      });
      
      mainDiv.appendChild(div);
   });
}