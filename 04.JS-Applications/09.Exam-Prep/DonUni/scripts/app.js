import controllers from "../controllers/index.js";

const app = Sammy('#main', function () {
    this.use('Handlebars', 'hbs');
    this.get('#/home', controllers.home.get);
    this.get('#/register', controllers.user.get.register);
    this.post('#/register', controllers.user.post.register);
    this.get('#/create', controllers.cause.get.createPage);
    this.post('#/create', controllers.cause.post.create);
    this.get('#/dashboard', controllers.cause.get.dashboardPage);
    this.get('#/login', controllers.user.get.loginPage);
    this.post('#/login', controllers.user.post.login);
    this.get('#/logout', controllers.user.get.logOut);
    this.get('#/cause/details/:id', controllers.cause.get.detailsPage);
    this.get('#/cause/delete/:id', controllers.cause.delete.cause);
    this.put('#/cause/donate/:id', controllers.cause.put.donation);
});

(() => {
    app.run('#/home');
})();