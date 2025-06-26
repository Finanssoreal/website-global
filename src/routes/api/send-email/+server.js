import nodemailer from "nodemailer"
import {
    GMAIL_USER,
    GMAIL_APP_PASSWORD,
    RECIPIENT_EMAIL,
} from "$env/static/private"
import { json } from "@sveltejs/kit"
import { isRateLimited } from "$lib/rate-limiter"

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ request, getClientAddress }) {
    const ip = getClientAddress()
    if (isRateLimited(ip)) {
        //console.warn(`IP bloqueada temporalmente por rate limit: ${ip}`)
        return json(
            { error: "Demasiadas solicitudes. Intenta más tarde." },
            { status: 429 },
        )
    }

    const { name, surname, email, phone, message } =
        await request.json()



    if (!name || !email || !message) {
        return json({ error: "Campos requeridos faltantes" }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: GMAIL_USER,
                    pass: GMAIL_APP_PASSWORD,
                },
    })

    const info = await transporter.sendMail({
        from: `"Formulario de contacto de Global" <${GMAIL_USER}>`,
        to: `${RECIPIENT_EMAIL}`,
        replyTo: email,
        subject: "Mensaje de cliente de Global",
        text: `
            Nombre: ${name}
            Apellido: ${surname}
            Correo: ${email}
            Teléfono: ${phone}
            Mensaje:
            ${message}
            `.trim(),
                    html: `
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Apellido:</strong> ${surname}</p>
                <p><strong>Correo:</strong> ${email}</p>
                <p><strong>Teléfono:</strong> ${phone}</p>
                <p><strong>Mensaje:</strong><br>${message}</p>
            `,
                })
    // api
    return json({ success: true })
}
