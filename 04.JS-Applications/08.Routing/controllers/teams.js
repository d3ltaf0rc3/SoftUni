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
                            if (localStorage.getItem("userId") === data.uid) {
                                context.isOrganizer = true;
                            } else {
                                context.isOrganizer = false;
                            }
                            this.partial("../templates/catalog/details.hbs");
                        })
                        .catch(err => console.error(err));
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
        donate(context) {

        }
    }
};