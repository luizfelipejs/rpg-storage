export default function getToken(req) {
    const tokenHeader = req.headers.authorization;

    const tokenSplited = tokenHeader.split(" ");

    const [barrer, token] = tokenSplited;

    return token;
}