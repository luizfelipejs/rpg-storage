import connection from "../database/connection";
import getToken from "../token/getToken";
import getTokenDecoded from "../token/getTokenDecoded";
import verifyAdventureAndUpdate from "../utils/verifyAdventure";

class adventureController {
    async create(req, res) {
        try {
            const {
                name_adventure,
                adventure_location,
                adventure_history,
                npcs, // [{name, skills, objective}]
            } = req.body;

            const user_id = getTokenDecoded(getToken(req));

            const adventure = {
                user_id,
                name_adventure,
                adventure_location,
                adventure_history,
            };

            const insertedAdventure = await connection("adventures").insert(
                adventure
            );
            const insertedAdventureID = insertedAdventure[0];

            const formattedNPCS = npcs.map(({ name, objective, age }) => {
                const adventureFormatted = {
                    name: name,
                    objective: objective,
                    age: age,
                    adventure_id: insertedAdventureID,
                };

                return adventureFormatted;
            });

            await connection("npcs").insert(formattedNPCS);

            return res.json({
                message: { status: 200, message: "Adventure created" },
            });
        } catch (error) {
            return res.status(404).json({ message: { status: 404, message: error } });
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;

            const requestToDB = async() => {
                await connection("adventures").where("id", id).delete();
                await connection("npcs").where("adventure_id", id).delete();
            }

            await verifyAdventureAndUpdate(requestToDB, req, res);
        } catch (error) {
            return res
                .status(404)
                .json({ message: { status: 404, message: error } })
        }
    }

    async update(req, res) {
        try {
            const {
                adventure_history,
            } = req.body

            const id = req.params.id

            const requestToDB = async() => await connection("adventures").where("id", id).update({
                adventure_history
            })

            await verifyAdventureAndUpdate(requestToDB, req, res)
        } catch (error) {
            return res
                .status(404)
                .json({ message: { status: 404, message: error } })
        }
    }

    async index(req, res) {
        try {
            const id = req.params.id;

            const getAdventure = await connection("adventures")
                .where("adventures.id", "=", id)
                .select(["adventures.*"]);

            const adventureData = getAdventure[0];

            const npcs = await connection("npcs")
                .where("adventure_id", adventureData.id)
                .select();

            console.log(adventureData);

            return res
                .json({ message: { status: 200, adventureData: { adventure: adventureData, npcs } } })
        } catch (error) {
            return res
                .status(404)
                .json({ message: { status: 404, message: `erro aventura não encontrada = ${error}` } })
        }
    }

    async list(req, res) {
        try {
            const userID = req.params.id;

            const user_id = getTokenDecoded(getToken(req));

            const adventures = await connection("adventures").where("user_id", user_id).select("*");

            return res.json({ message: { status: 200, adventures: adventures } })
        } catch (error) {
            return res
                .status(404)
                .json({ message: { status: 404, message: error } })
        }
    }
}


export default new adventureController();