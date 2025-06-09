import nodemailer from "nodemailer"
import {
    MAILTRAP_HOST,
    MAILTRAP_PORT,
    MAILTRAP_USER,
    MAILTRAP_PASS,
} from "$env/static/private"
import { json } from "@sveltejs/kit"
import { isRateLimited } from "$lib/rate-limiter"

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ request, getClientAddress }) {
    const ip = getClientAddress()
    if (isRateLimited(ip)) {
        console.warn(`IP bloqueada temporalmente por rate limit: ${ip}`)
        return json(
            { error: "Demasiadas solicitudes. Intenta más tarde." },
            { status: 429 },
        )
    }

    const { name, surname, email, phone, message } =
        await request.json()

    console.log("Datos recibidos:", {
        name,
        surname,
        email,
        phone,
        message
    })

    if (!name || !email || !message) {
        console.warn("Faltan campos requeridos")
        return json({ error: "Campos requeridos faltantes" }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
        host: MAILTRAP_HOST,
        port: parseInt(MAILTRAP_PORT),
        auth: {
            user: MAILTRAP_USER,
            pass: MAILTRAP_PASS,
        },
    })

    const info = await transporter.sendMail({
        from: `"Formulario de contacto de Global" <${email}>`,
        to: "destinatario@dominio.com",
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

    console.log(" Correo enviado:", info.messageId)
    // api
    return json({ success: true })
}
