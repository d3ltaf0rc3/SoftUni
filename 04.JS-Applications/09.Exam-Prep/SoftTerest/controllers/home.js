import extend from '../utils/context.js';
import models from "../models/index.js";

export default {
    get: {
        home(context) {
            if (localStorage.getItem("userEmail")) {
                models.ideas.getAll().then(response => {
                    const data = response.docs.map(function (d) {
                        return { ...d.data(), id: d.id };
                    });
                    context.ideas = data;
                    extend(context).then(function () {
                        this.partial('../views/home/home.hbs');
                    });
                });
            } else {
                extend(context).then(function () {
                    this.partial('../views/home/home.hbs');
                });
            }
        }
    }
};