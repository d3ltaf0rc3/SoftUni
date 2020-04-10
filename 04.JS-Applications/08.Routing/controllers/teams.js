import extend from '../utils/context.js';
import models from '../models/index.js';

export default {
    get: {
        allDataPage(context) {
            models.teams.getAll().then(response => {
                const data = response.docs.map(function (d) {
                    return { ...d.data(), id: d.id };
                });
                context.teams = data;
                for (let i = 0; i < data.length; i++) {
                    let team = data[i];
                    for (let j = 0; j < team.members; j++) {
                        let current = team.members[j];
                        if (current.username === localStorage.getItem("userEmail")) {
                            context.hasNoTeam = false;
                            break;
                        } else {
                            context.hasNoTeam = true;
                        }
                    }
                }
                extend(context).then(function () {
                    this.partial('../templates/catalog/teamCatalog.hbs');
                });
            });
        },
        createPage(context) {
            extend(context).then(function () {
                this.partial('../templates/create/createPage.hbs');
            });
        },
        detailsPage(context) {
            extend(context)
                .then(function () {
                    localStorage.setItem("teamID", context.params.id);
                    context.id = context.params.id;
                    models.teams.get(context.params.id)
                        .then(res => {
                            let data = res.data();
                            for (const key in data) {
                                context[key] = data[key];
                            }
                            for (const user of data.members) {
                                if (user.username === localStorage.getItem("userEmail")) {
                                    context.isOnTeam = true;
                                    break;
                                } else {
                                    context.isOnTeam = false;
                                }
                            }
                            if (localStorage.getItem("userId") === data.uid) {
                                context.isAuthor = true;
                            } else {
                                context.isAuthor = false;
                            }

                            this.partial("../templates/catalog/details.hbs");
                        })
                        .catch(err => console.error(err));
                });
        },
        editPage(context) {
            extend(context).then(function () {
                context.id = localStorage.getItem("teamID");
                this.partial("../templates/edit/editPage.hbs");
            });
        }
    },
    post: {
        create(context) {
            let data = {
                ...context.params,
                uid: localStorage.getItem("userId"),
                members: [{ username: localStorage.getItem("userEmail") }]
            };
            models.teams.create(data)
                .then(() => {
                    context.redirect('#/catalog');
                })
                .catch(err => console.error(err));
        }
    },
    del: {
        close(context) {
            const { causeId } = context.params;
            models.cause.close(causeId).then(response => {
                context.redirect('#/cause/dashboard');
            })
                .catch(e => console.error(e));
        }
    },
    put: {
        edit(context) {
            let { name, comment } = context.params;
            models.teams.get(localStorage.getItem("teamID"))
                .then(res => {
                    let data = res.data();
                    data.name = name;
                    data.comment = comment;
                    models.teams.put(localStorage.getItem("teamID"), data)
                        .then(() => {
                            extend(context)
                                .then(function () {
                                    this.redirect("#/catalog");
                                });
                        });
                })
                .catch(err => console.error(err));
        },
        leave(context) {
            models.teams.get(localStorage.getItem("teamID"))
                .then(res => {
                    let data = res.data();
                    let index = data.members.findIndex(obj => obj.username === localStorage.getItem("userEmail"));
                    data.members.splice(index, 1);
                    if (data.members === [] || data.uid === localStorage.getItem("userId")) {
                        models.teams.delete(localStorage.getItem("teamID"))
                        .then(() => {
                            extend(context)
                                .then(function () {
                                    context.redirect("#/catalog");
                                });
                        });
                    } else {
                        models.teams.put(localStorage.getItem("teamID"), data)
                        .then(() => {
                            extend(context)
                                .then(function () {
                                    context.redirect("#/catalog");
                                });
                        });
                    }
                })
                .catch(err => console.error(err));
        }
    }
};