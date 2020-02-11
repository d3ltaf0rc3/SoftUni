function createArticle() {
	let title = document.getElementById("createTitle");
	let content = document.getElementById("createContent");
	let section = document.getElementById("articles");

	if (title.value.length > 0 && content.value.length > 0) {
		let h3 = document.createElement("h3");
		h3.innerHTML = title.value;

		let p = document.createElement("p");
		p.innerHTML = content.value;

		let article = document.createElement("article");
		article.appendChild(h3);
		article.appendChild(p);
		section.appendChild(article);
	}
	title.value = "";
	content.value = "";
}