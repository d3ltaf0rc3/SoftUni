import models from "../models/index.js";

export default {
    get: {
        register(context) {
            context.loadPartials({
                header: "../views/common/header.hbs",
                footer: "../views/common/footer.hbs"
            }).then(function () {
                this.partial("../views/register/register.hbs");
            });
        },
        loginPage(context) {
            context.loadPartials({
                header: "../views/common/header.hbs",
                footer: "../views/common/footer.hbs"
            }).then(function () {
                this.partial("../views/login/login.hbs");
            });
        },
        logOut(context) {
            models.user.logout().then(() => {
                localStorage.removeItem("uID");
                localStorage.removeItem("username");
                context.redirect("#/home");
            });
        }
    },
    post: {
        register(context) {
            let { username, password, rePassword } = context.params;
            if (password === rePassword) {
                models.user.register(username, password).then(res => {
                    localStorage.setItem("uID", res.user.uid);
                    localStorage.setItem("username", username);
                    context.redirect("#/home");
                });
            }
        },
        login(context) {
            let { username, password } = context.params;
            models.user.login(username, password).then(res => {
                localStorage.setItem("uID", res.user.uid);
                localStorage.setItem("username", username);
                context.redirect("#/home");
            });
        }
    }
};