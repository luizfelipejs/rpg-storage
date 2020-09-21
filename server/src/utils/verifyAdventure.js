import connection from '../database/connection'
import getToken from '../token/getToken';
import getTokenDecoded from '../token/getTokenDecoded'

export default async function verifyAdventure(functionToUpdate, req, res) {
    const id = req.params.id

    const adventureRequest = await connection("adventures")
        .where("id", id)
        .select();

    const adventureData = adventureRequest[0];

    const userID = getTokenDecoded(getToken(req))

    if (userID == adventureData.user_id) {
        await functionToUpdate();

        res.json({ message: { status: 200, message: "aventura atualizada com sucesso!" } })
    } else {
        return res
            .status(404)
            .json({ message: { status: 404, message: "seu request foi recusado" } })
    }
}