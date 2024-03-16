import { useState } from "react"

export default function FormsUser() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handlinputs = (e) => {
        e.preventDefault()
        if (e.target.id == "name")
            setName(document.querySelector("#name").value)
        if (e.target.id == "email")
            setEmail(document.querySelector("#email").value)
        else
            setPass(document.querySelector("#pass").value)

        console.log({ name, email, pass })

    }
    return (

        <form >
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input
                    type="text"
                    class="form-control"
                    name="name"
                    id="name"
                    aria-describedby="helpId"
                    placeholder=""
                    onChange={handlinputs}
                />
                <small id="helpId" class="form-text text-muted">Your name</small>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">E-mail</label>
                <input
                    type="email"
                    class="form-control"
                    name="email"
                    id="email"
                    aria-describedby="helpId"
                    placeholder=""
                    onChange={handlinputs}
                />
                <small id="helpId" class="form-text text-muted">Your email</small>
            </div>
            <div class="mb-3">
                <label for="pass" class="form-label">Password</label>
                <input
                    type="password"
                    class="form-control"
                    name="pass"
                    id="pass"
                    aria-describedby="helpId"
                    placeholder=""
                    onChange={handlinputs}
                />
                <small id="helpId" class="form-text text-muted">Your password</small>
            </div>
            <button type="submit" class="btn btn-primary" onClick={handlinputs}>Send</button>
        </form>

    )
}