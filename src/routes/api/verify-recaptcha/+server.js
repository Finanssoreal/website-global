import { json } from "@sveltejs/kit"


const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ request }) {
    const body = await request.json()
    const { token } = body

    const verifyURL = "https://www.google.com/recaptcha/api/siteverify"
    const params = `secret=${RECAPTCHA_SECRET_KEY}&response=${token}`

    const response = await fetch(verifyURL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params,
    })

    const data = await response.json()
    // api
    return json(data)
}
