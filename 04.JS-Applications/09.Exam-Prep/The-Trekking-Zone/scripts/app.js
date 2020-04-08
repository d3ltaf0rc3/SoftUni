import controllers from "../controllers/index.js";

var app = Sammy('#main', function () {
    this.use('Handlebars', 'hbs');

    this.get('#/home', controllers.home.get.home);
    this.get('#/register', controllers.user.get.register);
    this.post('#/register', controllers.user.post.register);
    this.get('#/login', controllers.user.get.login);
    this.post('#/login', controllers.user.post.login);
    this.get('#/logout', controllers.user.get.logout);
    this.get('#/create', controllers.treks.get.createPage);
    this.post('#/create', controllers.treks.post.create);
    this.get('#/profile', controllers.user.get.profile);
    this.get('#/details/:id', controllers.treks.get.detailsPage);
    this.get('#/edit/:id', controllers.treks.get.edit);
    this.post('#/edit/:id', controllers.treks.put.edit);
    this.get('#/close/:id', controllers.treks.del.close);
    this.get('#/like/:id', controllers.treks.put.like);
});
app.run('#/home');
