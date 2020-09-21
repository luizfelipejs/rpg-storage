function isAuth () {
    const token = localStorage.getItem("token")
    if (token == null) {
        return false
    } else {
        return true
    }
}

function getToken () {
    const token = localStorage.getItem("token");
    return token;
}

function login (token) {
    localStorage.setItem("token", token)
}

function logout () {
    localStorage.removeItem("token")
}

export {
    isAuth, 
    login, 
    logout,
    getToken
}