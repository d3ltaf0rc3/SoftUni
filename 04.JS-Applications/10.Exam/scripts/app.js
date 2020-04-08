import controllers from "../controllers/index.js";

var app = Sammy('#main', function () {
    this.use('Handlebars', 'hbs');

    this.get('#/home', controllers.home.get.home);
    this.get('#/login', controllers.user.get.login);
    this.get('#/register', controllers.user.get.register);
    this.post('#/login', controllers.user.post.login);
    this.post('#/register', controllers.user.post.register);
    this.get('#/logout', controllers.user.get.logout);
    this.get('#/create', controllers.articles.get.createPage);
    this.post('#/create', controllers.articles.post.create);
    this.get('#/details/:id', controllers.articles.get.detailsPage);
    this.get('#/edit/:id', controllers.articles.get.editPage);
    this.put('#/edit/:id', controllers.articles.put.edit);
    this.get('#/delete/:id', controllers.articles.del.close);
});
app.run('#/login');
