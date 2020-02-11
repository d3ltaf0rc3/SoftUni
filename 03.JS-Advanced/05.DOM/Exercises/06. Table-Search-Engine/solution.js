function solve() {
   let input = document.getElementById("searchField");
   let button = document.getElementById("searchBtn");
   let table = Array.from(document.getElementsByTagName("tbody")[0].children);

   button.addEventListener("click", () => {
      let query = input.value.toLocaleLowerCase();
      input.value = "";

      table.forEach(element => {
         element.removeAttribute("class");
      });
      
      table.forEach(element => {
         let tableCells = Array.from(element.children);
         
         tableCells.forEach(el => {
            if (el.textContent.toLocaleLowerCase().includes(query)) {
               element.setAttribute("class", "select");
            }
         });
      });
   });
}