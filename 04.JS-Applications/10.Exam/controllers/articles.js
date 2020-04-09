import extend from '../utils/context.js';
import models from '../models/index.js';

export default {
    get: {
        createPage(context) {
            extend(context).then(function () {
                this.partial('../views/articles/create.hbs');
            });
        },
        detailsPage(context) {
            localStorage.setItem("articleID", context.params.id);
            context.id = context.params.id;
            models.articles.get(context.params.id)
                .then(res => {
                    let data = res.data();
                    if (data.creator === localStorage.getItem("userEmail")) {
                        context.isCreator = true;
                    } else {
                        context.isCreator = false;
                    }
                    for (const key in data) {
                        context[key] = data[key];
                    }
                    extend(context).then(function () {
                        this.partial('../views/articles/details.hbs');
                    });
                })
                .catch(err => console.error(err));
        },
        editPage(context) {
            extend(context)
                .then(function () {
                    context.id = localStorage.getItem("articleID");
                    this.partial("../views/articles/edit.hbs");
                });
        }
    },
    post: {
        create(context) {
            let data = {
                ...context.params,
                creator: localStorage.getItem("userEmail")
            };
            models.articles.create(data)
                .then(() => {
                    context.redirect('#/home');
                });
        }
    },
    del: {
        close(context) {
            const { id } = context.params;

            models.articles.delete(id).then(() => {
                context.redirect('#/home');
            })
                .catch(e => console.error(e));
        }
    },
    put: {
        edit(context) {
            let data = {
                ...context.params,
                creator:localStorage.getItem("userEmail")
            };
            
            models.articles.put(localStorage.getItem("articleID"), data)
                .then(function () {
                    context.redirect("#/home");
                })
                .catch(err => console.error(err));
        }
    }
};
