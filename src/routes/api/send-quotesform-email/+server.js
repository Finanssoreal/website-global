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

    const { name, lastname, phone, email, cui, nit, payment_method,contact_type,
        contact_hours,department,municipality,motorcycle_model } = await request.json()


        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: GMAIL_USER,
                pass: GMAIL_APP_PASSWORD,
            },
        })

    const info = await transporter.sendMail({
        from: `"Formulario de cotizaciones" <${GMAIL_USER}>`,
        to: `${RECIPIENT_EMAIL}`,
        replyTo: email,
        subject: "Cotización de motocicleta",
        text: `
            Nombre: ${name}
            Apellido: ${lastname}
            Correo electrónico: ${email}
            Teléfono: ${phone}
            CUI: ${cui}
            NIT: ${nit}
            Método de pago: ${payment_method}
            Forma de contacto: ${contact_type}
            Horario de contacto: ${contact_hours}
            Departamento: ${department}
            Municipio: ${municipality}
            Modelo de motocicleta: ${motorcycle_model}


`.trim(),
        html: `
    <p><strong>Nombre:</strong> ${name}</p>
    <p><strong>Apellido:</strong> ${lastname}</p>
    <p><strong>Correo electrónico:</strong> ${email}</p>
    <p><strong>Teléfono:</strong> ${phone}</p>
    <p><strong>CUI:</strong> ${cui}</p>
    <p><strong>NIT:</strong> ${nit}</p>
    <p><strong>Método de pago:</strong> ${payment_method}</p>
    <p><strong>Forma de contacto:</strong> ${contact_type}</p>
    <p><strong>Horario de contacto:</strong> ${contact_hours}</p>
    <p><strong>Departamento:</strong> ${department}</p>
    <p><strong>Municipio:</strong> ${municipality}</p>
    <p><strong>Modelo de motocicleta:</strong> ${motorcycle_model}</p>

`,
    })

    // api
    return json({ success: true })
}
