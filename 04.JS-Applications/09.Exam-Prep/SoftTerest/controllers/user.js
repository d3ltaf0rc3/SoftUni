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
            models.user.logout().then(function () {
                localStorage.removeItem("userEmail");
                context.redirect('#/home');
            });
        }
    },
    post: {
        login(context) {
            const { username, password } = context.params;
            models.user.login(username, password)
                .then(response => {
                    context.user = response;
                    localStorage.setItem("userEmail", response.user.email);
                    context.redirect('#/home');
                })
                .catch(e => console.error(e));

        },
        register(context) {
            const { username, password, repeatPassword } = context.params;

            if (password === repeatPassword) {
                models.user.register(username, password)
                    .then(() => {
                        extend(context).then(() => {
                            context.redirect('#/home');
                        });
                    })
                    .catch(e => console.error(e));
            }
        }
    }
};