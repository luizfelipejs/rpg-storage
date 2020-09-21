import connection from "../database/connection";
import bcrypt from 'bcrypt';

import generateToken from "../token/generateKey";


class authController {
    async login(req, res) {
        const { email, password } = req.body;

        try {
            const userRequest = await connection("users").where("email", email).select();
            const userData = userRequest[0];
            const comparePassword = await bcrypt.compare(password, userData.password);

            const token = generateToken(userData.id);

            if (!userData) {
                return res
                    .status(404)
                    .json({ message: { status: 404, message: "user not found" } });
            }

            if (comparePassword == false) {
                return res
                    .status(404)
                    .json({ message: { status: 404, message: "password invalid" } });
            }

            return res.json({ message: { status: 200, token: token } });
        } catch (error) {
            return res.status(404).json({ message: { status: 404, message: error } })
        }
    }

   
}

export default new authController();