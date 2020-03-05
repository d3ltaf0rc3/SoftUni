function extendObject(template) {
    let myObj = {
        __proto__: {},
        extend: function (template) {
            for (const key in template) {
                if (typeof template[key] === "function") {
                    myObj.__proto__[key] = template[key];
                } else {
                    myObj[key] = template[key];
                }
            }
        }
    };
    return myObj;
}

console.log(extendObject({
    extensionMethod: function () {
        console.log("From extension method")
    }
}));