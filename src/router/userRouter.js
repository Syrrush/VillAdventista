import Router from "express";
import { createUser, findUser, getUsers, updateUser, findUserEmail, deleteUser, findUserId } from "../daos/users/user.controllers.js";
const routerUser = Router();
routerUser.post("/userRegister", async (req, res) => {
    const { email, name, lastName, birthday, image, role, password, buyer } = req.body;
    const newUser = await createUser(
        email,
        name,
        lastName,
        birthday,
        image,
        role,
        password,
        buyer
    );

    return res.status(200).send(newUser);
});

export default routerUser