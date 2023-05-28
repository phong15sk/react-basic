import { redirect } from "react-router-dom";
import { deleteContact } from "./api-fake/Contacts"

export async function action({ params }) {
    await deleteContact(params.contactId);
    return redirect("/");
}