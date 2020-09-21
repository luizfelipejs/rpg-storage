import jwt from 'jsonwebtoken'
import secretKey from '../token/secret.json'

const verifyToken = (req, res, next) => {
    try {
        const tokenHeader = req.headers.authorization

        const tokenSplited = tokenHeader.split(" ");
        const [barrer, token] = tokenSplited;


        if (tokenSplited.length != 2) {
            return res
                .status(404)
                .json({ message: { status: 404, message: "token format invalid" } })
        }

        if (barrer != "barrer") {
            return res
                .status(404)
                .json({ message: { status: 404, message: "token format invalid" } })
        }

        jwt.verify(token, secretKey.key);
        next();

    } catch (error) {
        return res
            .status(404)
            .json({ message: { status: 404, message: "token invalid" } })
    }
}

export default verifyToken;