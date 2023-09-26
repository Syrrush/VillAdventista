import modelUsers from "../../models/user.js"
import modelRequest from "../../models/request.js"

async function createUser(email, name, lastName, birthday, image, buyer, role, password) {
    try {
        const newUser = await modelUsers.create({
            email,
            name,
            lastName,
            birthday,
            role,
            password,
            image,
            buyer,
        });

        return "Account created";
    } catch (error) {
        console.error("Error in createUser:", error);
        throw error;
    }
}

async function findUser(name, lastName) {
    try {
        const user = await modelUsers.findOne({ name, lastName });
        if (!user) return { error: "User not found" };
        if (user.status === "disabled") return { warning: "User deleted" };
        return user;
    } catch (error) {
        console.error("Error in findUser:", error);
        throw error;
    }
}

async function findUserEmail(email) {
    const user = await modelUsers.findOne({ email });
    if (!user) return { error: "User not found" };
    if (user.status === "disabled") return { warning: "User deleted" };
    return user;
}

async function findUserId(id) {
    try {
        const user = await modelUsers.findById(id);
        if (!user) return { error: "User not found" };
        if (user.status === "disabled") return { warning: "User deleted" };
        return user;
    } catch (error) {
        console.error("Error in findUserId:", error);
        throw error;
    }
}

async function getUsers() {
    try {
        const users = await modelUsers.find({ status: "active" }).sort({ name: 1 });
        return users;
    } catch (error) {
        console.error("Error in getUsers:", error);
        throw error;
    }
}

async function updateUser(id, changes) {
    try {
        const user = await modelUsers.findByIdAndUpdate(id, changes, { new: true });
        return user;
    } catch (error) {
        console.error("Error in updateUser:", error);
        throw error;
    }
}

async function deleteUser(id) {
    try {
        const user = await findUserId(id);
        user.status = "disabled";
        await user.save();
        return user;
    } catch (error) {
        console.error("Error in deleteUser:", error);
        throw error;
    }
}

export {
    createUser,
    findUser,
    findUserEmail,
    findUserId,
    getUsers,
    updateUser,
    deleteUser,
};