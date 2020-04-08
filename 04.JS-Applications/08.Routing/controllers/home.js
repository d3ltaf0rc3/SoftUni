import extend from '../utils/context.js';
import models from "../models/index.js";

export default {
    get: {
        home(context) {
            models.teams.getAll().then(response => {
                const data = response.docs.map(function (d) {
                    return { ...d.data(), id: d.id };
                });
                
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