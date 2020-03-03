function solve(){
   let table = document.getElementsByTagName("tbody")[0];

   table.addEventListener("click", (e) => {
      e.preventDefault();

      if (e.target.parentElement.style.background === "") {
         let rows = Array.from(document.getElementsByTagName("tbody")[0].children);
         rows.forEach(element => {
            element.style.background = "";
         });
         e.target.parentElement.style.background = "#413f5e";
      } else {
         e.target.parentElement.style.background = "";
      }
   });
}
