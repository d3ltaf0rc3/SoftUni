export default function extend(context) {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            context.isLoggedIn = true;
            context.userId = user.uid;
            context.username = user.email;

            localStorage.setItem('userId', user.uid);
            localStorage.setItem('userEmail', user.email);
            // ...
        } else {
            // User is signed out.
            context.isLoggedIn = false;
            context.userId = null;
            context.username = null;

            localStorage.removeItem('userId');
            localStorage.removeItem('userEmail');
        }
    });

    return context.loadPartials({
        loginForm: '../templates/login/loginForm.hbs',
        registerForm: '../templates/register/registerForm.hbs',
        team: '../templates/catalog/team.hbs',
        teamMember:'../templates/catalog/teamMember.hbs',
        teamControls: '../templates/catalog/teamControls.hbs',
        createForm: '../templates/create/createForm.hbs',
        editForm:'../templates/edit/editForm.hbs',
        header: '../templates/common/header.hbs',
        footer: '../templates/common/footer.hbs'
    });
}