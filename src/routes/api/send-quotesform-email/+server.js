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

    const { name, lastname, phone, email, cui, nit, payment_method,contact_type,
        contact_hours,department,municipality,motorcycle_model } = await request.json()

   /* console.log("Datos recibidos:", {
        name,
        surname,
        email,
        phone,
        company,
        position,
        message,
    })*/

   /* if (!name || !email || !message) {
        console.warn("Faltan campos requeridos")
        return json({ error: "Campos requeridos faltantes" }, { status: 400 })
    }*/

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
        subject: "Cotización de motocicleta",
        text: `
            Nombre: ${name}
            Apellido: ${lastname}
            Correo: ${email}
            Teléfono: ${phone}
            cui: ${cui}
            nit: ${nit}
            metodo de pago: ${payment_method}
            Forma de contacto: ${contact_type}
            Horario de contacto: ${contact_hours}
            Departamento: ${department}
            Municipio: ${municipality}
            Modelo de motocicleta: ${motorcycle_model}


`.trim(),
        html: `
    <p><strong>Nombre:</strong> ${name}</p>

`,
    })

    console.log(" Correo enviado:", info.messageId)
    // api
    return json({ success: true })
}
