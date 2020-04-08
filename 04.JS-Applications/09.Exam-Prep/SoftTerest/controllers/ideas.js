import extend from '../utils/context.js';
import models from '../models/index.js';

export default {
    get: {
        createPage(context) {
            extend(context).then(function () {
                this.partial('../views/ideas/create.hbs');
            });
        },
        detailsPage(context) {
            localStorage.setItem("ideaID", context.params.id);
            context.id = context.params.id;
            models.ideas.get(context.params.id)
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
                        this.partial('../views/ideas/details.hbs');
                    });
                })
                .catch(err => console.error(err));
        }
    },
    post: {
        create(context) {
            let data = {
                ...context.params,
                likes: 0,
                comments: [],
                creator: localStorage.getItem("userEmail")
            };
            models.ideas.create(data)
                .then(() => {
                    context.redirect('#/home');
                });
        }
    },
    del: {
        close(context) {
            const id = localStorage.getItem("ideaID");
            models.ideas.delete(id)
                .then(() => {
                    context.redirect('#/home');
                })
                .catch(e => console.error(e));
        }
    },
    put: {
        like(context) {
            let id = context.params.id;

            models.ideas.get(id)
                .then(res => {
                    let data = res.data();
                    data.likes++;
                    models.ideas.put(id, data)
                        .then(() => {
                            context.redirect(`#/details/${id}`);
                        });
                })
                .catch(err => console.error(err));
        },
        comment(context) {
            let { newComment, id } = context.params;
            let user = localStorage.getItem("userEmail");

            models.ideas.get(id)
                .then(res => {
                    let data = res.data();
                    data.comments.push({ user, newComment });
                    models.ideas.put(id, data)
                        .then(() => {
                            context.redirect(`#/details/${id}`);
                        });
                })
                .catch(err => console.error(err));
        }
    }
};