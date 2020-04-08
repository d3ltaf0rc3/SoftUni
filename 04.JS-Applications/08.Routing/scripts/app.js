import controllers from "../controllers/index.js";

var app = Sammy('#main', function () {
    this.use('Handlebars', 'hbs');

    this.get('#/home', controllers.home.get.home);
    this.get('#/about', controllers.home.get.about);
    this.get('#/login', controllers.user.get.login);
    this.post('#/login', controllers.user.post.login);
    this.get('#/register', controllers.user.get.register);
    this.post('#/register', controllers.user.post.register);
    this.get('#/logout', controllers.user.get.logout);
    this.get('#/catalog', controllers.teams.get.allDataPage);
    this.get('#/create', controllers.teams.get.createPage);
    this.post('#/create', controllers.teams.post.create);
    this.get('#/catalog/:id', controllers.teams.get.detailsPage);
});
app.run('#/home');