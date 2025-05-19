import { json } from "@sveltejs/kit"
import { RECAPTCHA_SECRET_KEY } from "$env/static/private"

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ request }) {
    const body = await request.json()
    const { token } = body

    console.log("Token recibido del frontend:", token)

    const verifyURL = "https://www.google.com/recaptcha/api/siteverify"
    const params = `secret=${RECAPTCHA_SECRET_KEY}&response=${token}`

    console.log("Enviando solicitud a:", verifyURL)
    console.log("Cuerpo de la solicitud:", params)

    const response = await fetch(verifyURL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params,
    })

    const data = await response.json()

    console.log("Respuesta de Google:", data)
    // api
    return json(data)
}
