import controllers from "../controllers/index.js";

var app = Sammy('#main', function () {
    this.use('Handlebars', 'hbs');

    this.get('#/home', controllers.home.get.home);
    this.get('#/login', controllers.user.get.login);
    this.post('#/login', controllers.user.post.login);
    this.get('#/register', controllers.user.get.register);
    this.post('#/register', controllers.user.post.register);
    this.get('#/logout', controllers.user.get.logout);
    this.get('#/create', controllers.ideas.get.createPage);
    this.post('#/create', controllers.ideas.post.create);
    this.get('#/details/:id', controllers.ideas.get.detailsPage);
    this.get('#/delete/:id', controllers.ideas.del.close);
    this.get('#/like/:id', controllers.ideas.put.like);
    this.put('#/comment/:id', controllers.ideas.put.comment);
});
app.run('#/home');
