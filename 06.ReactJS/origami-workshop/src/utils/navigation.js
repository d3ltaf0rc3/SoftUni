const getNavigation = (isLoggedIn, user) => {
    const authLinks = [
        {
            title: "Home",
            link: "/"
        },{
            title: "Add Post",
            link: "/post"
        },{
            title: "Profile",
            link: `/profile/${user && user._id}`
        }
    ]

    const guestLinks = [
        {
            title: "Home",
            link: "/"
        },{
            title: "Login",
            link: "/login"
        },{
            title: "Register",
            link: "/register"
        }
    ]

    return isLoggedIn ? authLinks : guestLinks;
}

export default getNavigation;