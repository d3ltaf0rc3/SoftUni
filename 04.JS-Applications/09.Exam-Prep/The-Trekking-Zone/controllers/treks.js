import extend from '../utils/context.js';
import models from '../models/index.js';
import controllers from './index.js';

export default {
    get: {
        createPage(context) {
            extend(context).then(function () {
                this.partial('../views/treks/create.hbs');
            });
        },
        detailsPage(context) {
            extend(context)
                .then(function () {
                    localStorage.setItem("trekID", context.params.id);
                    context.id = context.params.id;
                    models.treks.get(context.params.id)
                        .then(res => {
                            let data = res.data();
                            localStorage.setItem("likes", data.likes);
                            for (const key in data) {
                                context[key] = data[key];
                            }
                            if (localStorage.getItem("userId") === data.uid) {
                                context.isOrganizer = true;
                            } else {
                                context.isOrganizer = false;
                            }
                            this.partial("../views/treks/details.hbs");
                        })
                        .catch(err => console.error(err));
                });
        },
        edit(context) {
            extend(context)
                .then(function () {
                    context.id = localStorage.getItem("trekID");
                    this.partial("../views/treks/edit.hbs");
                });
        }
    },
    post: {
        create(context) {
            let data = {
                ...context.params,
                uid: localStorage.getItem("userId"),
                likes: 0,
                organizer: localStorage.getItem("userEmail")
            };
            models.treks.create(data)
                .then(() => {
                    context.redirect('#/home');
                })
                .catch(err => console.error(err));
        }
    },
    del: {
        close(context) {
            let trekID = localStorage.getItem("trekID");
            models.treks.delete(trekID).then(response => {
                localStorage.removeItem("trekID");
                context.redirect('#/home');
            })
                .catch(e => console.error(e));
        }
    },
    put: {
        like(context) {
            extend(context)
                .then(() => {
                    models.treks.get(localStorage.getItem("trekID"))
                        .then(res => {
                            let data = res.data();
                            data.likes++;
                            return data;
                        })
                        .then(data => {
                            models.treks.put(localStorage.getItem("trekID"), data)
                                .then(function () {
                                    context.redirect(`#/details/${localStorage.getItem("trekID")}`);
                                })
                                .catch(err => console.error(err));
                        })
                        .catch(err => console.error(err));
                });
        },
        edit(context) {
            let data = {
                ...context.params,
            };
            data.organizer = localStorage.getItem("userEmail");
            data.likes = Number(localStorage.getItem("likes"));
            models.treks.put(localStorage.getItem("trekID"), data)
                .then(function () {
                    context.redirect("#/home");
                })
                .catch(err => console.error(err));
        }
    }
};