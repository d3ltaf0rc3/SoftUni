import extend from '../utils/context.js';
import models from "../models/index.js";

export default {
    get: {
        home(context) {
            models.teams.getAll().then(response => {
                const data = response.docs.map(function (d) {
                    return { ...d.data(), id: d.id };
                });
                context.teams = data;
                for (let i = 0; i < data.length; i++) {
                    if (data[i].uid === localStorage.getItem("userId")) {
                        context.hasTeam = true;
                        context.id = data[i].id;
                        break;
                    } else {
                        context.hasTeam = false;
                    }
                }
                extend(context).then(function () {
                    this.partial('../templates/home/home.hbs');
                });
            });
        },
        about(context) {
            extend(context).then(function () {
                this.partial('../templates/about/about.hbs');
            });
        }
    }
};