import jwt from 'jsonwebtoken'

export default function decodeToken(token) {
    const tokenDecoded = jwt.decode(token);

    return tokenDecoded;
}