import extend from '../utils/context.js';
import models from "../models/index.js";
import articles from '../models/articles.js';

export default {
    get: {
        home(context) {
            models.articles.getAll().then(response => {
                context.jsArticles = [];
                context.csArticles = [];
                context.javaArticles = [];
                context.pythonArticles = [];
                
                const data = response.docs.map(function (d) {
                    return { ...d.data(), id: d.id };
                });
                
                data.forEach(article => {
                    let category = article.category.toLowerCase();
                    switch (category) {
                        case "javascript": context.jsArticles.push(article); break;
                        case "c#": context.csArticles.push(article); break;
                        case "java": context.javaArticles.push(article); break;
                        case "python": context.pythonArticles.push(article); break;
                    }
                });

                context.jsArticles.sort((a,b) => {
                    return b.title.localeCompare(a.title);
                });
                context.csArticles.sort((a,b) => {
                    return b.title.localeCompare(a.title);
                });
                context.javaArticles.sort((a,b) => {
                    return b.title.localeCompare(a.title);
                });
                context.pythonArticles.sort((a,b) => {
                    return b.title.localeCompare(a.title);
                });
                
                extend(context).then(function () {
                    this.partial('../views/home/home.hbs');
                });
            });
        }
    }
};