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
                localStorage.clear();
                context.redirect('#/login');
            });
        }
    },
    post: {
        login(context) {
            const { email, password } = context.params;
            models.user.login(email, password)
                .then(response => {
                    context.user = response;
                    context.redirect('#/home');
                })
                .catch(e => console.error(e));

        },
        register(context) {
            const { email, password, rePass } = context.params;

            if (password === rePass) {
                models.user.register(email, password)
                    .then(() => {
                        context.redirect('#/home');
                    })
                    .catch(e => console.error(e));
            }

        }
    }
}