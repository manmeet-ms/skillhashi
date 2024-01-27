/* actions.js */
import { redirect } from "react-router-dom";
import { register, login } from "./firebase";

export const registerAction = async ({ request }) => {
    const data = Object.fromEntries(await request.formData());
    try {
        await register(data.email.toString(), data.password.toString());
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