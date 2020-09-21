import connection from "../database/connection";
import bcrypt from "bcrypt";

class UserController {
    async create(req, res) {
        const { username, email, password } = req.body;

        const hashPassword = await bcrypt.hash(password, 10);

        try {
            await connection("users").insert({
                username,
                email,
                password: hashPassword,
            });

            return res.json({ message: "OK" });
        } catch (error) {
            return res.status(404).json({ message: { status: 404, message: error } });
        }
    }

    async index(req, res) {
        try {
            const id = req.params.id;

            const userRequest = await connection("users").where("id", id);
            const userData = userRequest[0];

            userData.password = undefined;

            if (!userRequest[0]) {
                return res
                    .status(404)
                    .json({ message: { status: 404, message: "user not found" } });
            }

            return res.json({
                data: {
                    userData,
                },
            });
        } catch (error) {
            return res
                .status(404)
                .json({ message: { status: 404, message: error } });
        }
    }
}

export default new UserController();