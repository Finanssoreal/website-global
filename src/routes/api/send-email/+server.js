import nodemailer from "nodemailer"
import {
    MAILTRAP_HOST,
    MAILTRAP_PORT,
    MAILTRAP_USER,
    MAILTRAP_PASS,
} from "$env/static/private"
import { json } from "@sveltejs/kit"
import { isRateLimited } from "$lib/rate-limiter" // <--- importar aquí

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ request, getClientAddress }) {
    const ip = getClientAddress()
    if (isRateLimited(ip)) {
        console.warn(`⛔ IP bloqueada temporalmente por rate limit: ${ip}`)
        return json(
            { error: "Demasiadas solicitudes. Intenta más tarde." },
            { status: 429 },
        )
    }

    const { name, surname, email, phone, company, position, message } =
        await request.json()

    console.log("📥 Datos recibidos:", {
        name,
        surname,
        email,
        phone,
        company,
        position,
        message,
    })

    if (!name || !email || !message) {
        console.warn("⚠️ Faltan campos requeridos")
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
        from: `"Formulario Web" <${email}>`,
        to: "destinatario@dominio.com",
        subject: "Nuevo mensaje desde el formulario",
        text: `
Nombre: ${name}
Apellido: ${surname}
Correo: ${email}
Teléfono: ${phone}
Empresa: ${company}
Cargo: ${position}
Mensaje:
${message}
`.trim(),
        html: `
    <p><strong>Nombre:</strong> ${name}</p>
    <p><strong>Apellido:</strong> ${surname}</p>
    <p><strong>Correo:</strong> ${email}</p>
    <p><strong>Teléfono:</strong> ${phone}</p>
    <p><strong>Empresa:</strong> ${company}</p>
    <p><strong>Puesto:</strong> ${position}</p>
    <p><strong>Mensaje:</strong><br>${message}</p>
`,
    })

    console.log("📤 Correo enviado:", info.messageId)

    return json({ success: true })
}
