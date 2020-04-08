export default {
    get: function(context) {
        if (localStorage.getItem("uID")) {
            context.isLoggedIn = true;
            context.username = localStorage.getItem("username");
        }
        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs"
        }).then(function () {
            this.partial("../views/home/home.hbs");
        });
    },
    post: {}
};