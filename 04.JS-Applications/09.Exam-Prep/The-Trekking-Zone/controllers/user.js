import models from '../models/index.js';
import extend from '../utils/context.js';

export default {
    get: {
        login(context) {
            extend(context).then(function () {
                this.partial('../views/login/login.hbs');
            });
        },
        register(context) {
            extend(context).then(function () {
                this.partial('../views/register/register.hbs');
            });
        },
        logout(context) {
            models.user.logout().then(() => {
                extend(context).then(() => {
                    context.redirect('#/home');
                });
            });
        },
        profile(context) {
            extend(context).then(function () {
                this.partial('../views/user.hbs');
            });
        }
    },
    post: {
        login(context) {
            const { email, password } = context.params;
            models.user.login(email, password)
                .then(response => {
                    context.user = response;
                    extend(context).then(() => {
                        context.redirect('#/home');
                    });
                })
                .catch(e => console.error(e));

        },
        register(context) {
            const { email, password, rePassword } = context.params;
            if (password === rePassword) {
                models.user.register(email, password)
                    .then(() => {
                        context.redirect('#/home');
                    })
                    .catch(e => console.error(e));
            }
        }
    }
};