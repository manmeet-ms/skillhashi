/* actions.js */
import { redirect } from "react-router-dom";
import { register, login, addRole } from "./firebase";

export const registerAction = async ({ request }) => {
    const data = Object.fromEntries(await request.formData());
    console.log(data);
    const skillsArray = data.skills?.split(",") || [];
    try {
        console.log({
            email: data.email.toString(),
            password: data.password.toString(),
            targetRole: data.targetRole.toString(),
            isCompany: data.isCompany.toString() === "true",
            skills: skillsArray,
        });
        await register(
            data.email.toString(),
            data.password.toString(),
            data.targetRole.toString(),
            data.isCompany.toString() === "true",
            skillsArray
        );
        return redirect("/");
    } catch (error) {
        console.log(error);
        alert(error.message);
        return null;
    }
};

export const loginAction = async ({ request }) => {
    const data = Object.fromEntries(await request.formData());
    try {
        await login(data.email.toString(), data.password.toString());
        return redirect("/");
    } catch (error) {
        console.log(error);
        alert(error.message);
        return null;
    }
};

export const newRoleAction = async ({ request }) => {
    const data = Object.fromEntries(await request.formData());
    try {
        await addRole(
            data.email.toString(),
            data.role.toString(),
            data.skills.toString()
        );
        return redirect("/");
    } catch (error) {
        console.log(error);
        alert(error.message);
        return null;
    }
};
