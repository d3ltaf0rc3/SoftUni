function solve() {
   function sortList(list) {
      Array.from(list.children)
         .sort((a, b) => a.textContent
            .localeCompare(b.textContent))
         .forEach(li => {
            list.appendChild(li);
         });
   }

   let name = document.getElementById("creator");
   let category = document.getElementById("category");
   let title = document.getElementById("title");
   let content = document.getElementById("content");

   let createButton = document.getElementsByTagName("button")[0];
   let articles = document.getElementsByTagName("section")[1];

   createButton.addEventListener("click", (e) => {
      e.preventDefault();
      let article = document.createElement("article");

      let heading = document.createElement("h1");
      heading.innerHTML = title.value;
      article.appendChild(heading);

      let categoryP = document.createElement("p");
      categoryP.innerHTML = `Category: <strong>${category.value}</strong>`;
      article.appendChild(categoryP);

      let creatorP = document.createElement("p");
      creatorP.innerHTML = `Creator: <strong>${name.value}</strong>`;
      article.appendChild(creatorP);

      let contentP = document.createElement("p");
      contentP.innerHTML = content.value;
      article.appendChild(contentP);

      let buttonsDiv = document.createElement("div");
      buttonsDiv.setAttribute("class", "buttons");

      let deleteButton = document.createElement("button");
      deleteButton.innerHTML = "Delete";
      deleteButton.setAttribute("class", "btn delete");
      buttonsDiv.appendChild(deleteButton);

      let archiveButton = document.createElement("button");
      archiveButton.innerHTML = "Archive";
      archiveButton.setAttribute("class", "btn archive");
      buttonsDiv.appendChild(archiveButton);

      article.appendChild(buttonsDiv);
      articles.appendChild(article);
   });

   articles.addEventListener("click", (e) => {
      e.preventDefault();

      let article = e.target.parentNode.parentNode;
      if (e.target.innerHTML === "Delete") {
         article.remove();
      } else if (e.target.innerHTML === "Archive") {
         let archiveUL = document.getElementsByTagName("section")[3].children[1];
         let title = article.children[0].innerHTML;
         let li = document.createElement("li");
         li.innerHTML = title;
         archiveUL.appendChild(li);
         sortList(archiveUL);
         article.remove();
      }
   });
}