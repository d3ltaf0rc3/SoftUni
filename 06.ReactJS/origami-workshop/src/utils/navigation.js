const getNavigation = (userId) => {
    const links = [
        {
            title: "Home",
            link: "/"
        },{
            title: "Add Post",
            link: "/post"
        },{
            title: "Login",
            link: "/login"
        },{
            title: "Register",
            link: "/register"
        },{
            title: "Profile",
            link: `/profile/${userId}`
        },
    ]

    return links;
}

export default getNavigation;