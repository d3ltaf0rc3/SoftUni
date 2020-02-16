module.exports = function request(httpReq) {
    const methods = ["GET", "POST", "DELETE", "CONNECT"];
    const uriRegExp = /^[A-Za-z0-9.]+$|\*/;
    let messageRegExp = /^[^<>\\\&'"]+$|^\s*$/;
    const versions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];

    if (methods.includes(httpReq.method)) {
        if (uriRegExp.test(httpReq.uri) && httpReq.uri !== undefined) {
            if (versions.includes(httpReq.version)) {
                if (messageRegExp.test(httpReq.message) && httpReq.message !== undefined) {
                    return httpReq;
                } else {
                    throw new Error("Invalid request header: Invalid Message");
                }
            } else {
                throw new Error("Invalid request header: Invalid Version");
            }
        } else {
            throw new Error("Invalid request header: Invalid URI");
        }
    } else {
        throw new Error("Invalid request header: Invalid Method");
    }
};