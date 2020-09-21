import jwt from 'jsonwebtoken';
import secretKey from './secret.json';

const generateToken = id => {
    return jwt.sign(id, secretKey.key);
};

export default generateToken;