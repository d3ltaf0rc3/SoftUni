function getArticleGenerator(articles) {
    let content = document.getElementById("content");
    let index = 0;
    
    function displayArticle() {
        if (articles[index] !== undefined) {
            let article = document.createElement("article");
            article.textContent = articles[index];
            content.appendChild(article);
            index++;
        }
    }
    return displayArticle;
}
