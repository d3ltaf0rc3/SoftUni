import models from "../models/index.js";
import loadCommon from "../utils/loadCommon.js";

export default {
    get: {
        createPage(context) {
            loadCommon(context).then(function () {
                this.partial("../views/cause/create.hbs");
            });
        },
        dashboardPage(context) {
            loadCommon(context).then(function () {
                let causes = [];
                models.cause.getAll().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        let cause = doc.data();
                        cause.id = doc.id;
                        causes.push(cause);
                    });
                }).then(() => {
                    context.causes = { causes };
                    this.partial("../views/cause/dashboard.hbs");
                });
            });
        },
        detailsPage(context) {
            models.cause.get(context.params.id).then(res => {
                let cause = res.data();
                context.id = context.params.id;
                localStorage.setItem("causeID", context.params.id);

                if (localStorage.getItem("uID") === cause.uid) {
                    context.isCreator = true;
                } else {
                    context.isCreator = false;
                }

                for (const key in cause) {
                    context[key] = cause[key];
                }

                loadCommon(context).then(function () {
                    this.partial("../views/cause/details.hbs");
                });
            });

        }
    },
    post: {
        create(context) {
            models.cause.createCause({ ...context.params }).then(() => {
                context.redirect("#/dashboard");
            }).catch(err => console.error(err));
        }
    },
    delete: {
        cause(context) {
            models.cause.delete(localStorage.getItem("causeID"))
                .then(() => {
                    localStorage.removeItem("causeID");
                    context.redirect("#/dashboard");
                })
                .catch(err => console.error(err));
        }
    },
    put: {
        donation(context) {
            let donation = context.params.currentDonation;
            let causeID = localStorage.getItem("causeID");
            models.cause.get(causeID)
                .then(res => {
                    let data = res.data();
                    data.collectedFunds += Number(donation);
                    if (!data.donors.includes(localStorage.getItem("username"))) {
                        data.donors.push(localStorage.getItem("username"));
                    }
                    models.cause.donate(causeID, data)
                        .then(() => {
                            this.redirect(`#/cause/details/${causeID}`);
                        })
                        .catch(err => console.error(err));
                });
        }
    }
};