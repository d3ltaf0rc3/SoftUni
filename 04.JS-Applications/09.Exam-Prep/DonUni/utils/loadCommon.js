export default function (context) {
    if (localStorage.getItem("uID")) {
        context.isLoggedIn = true;
        context.username = localStorage.getItem("username");
    }
    return context.loadPartials({
        header: "../views/common/header.hbs",
        footer: "../views/common/footer.hbs"
    });
}