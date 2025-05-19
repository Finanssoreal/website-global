<script>
    import { PUBLIC_RECAPTCHA_SITE_KEY } from "$env/static/public"

    async function handleSubmit(event) {
        event.preventDefault()
        const form = event.target

        const token = grecaptcha.getResponse()
        console.log("🔐 Token reCAPTCHA:", token) // Verificar si se obtiene el token

        if (!token) {
            alert("Por favor completa el reCAPTCHA")
            return
        }

        const formData = new FormData(form)
        const name = formData.get("name")?.trim()
        const email = formData.get("email")?.trim()
        const message = formData.get("message")?.trim()

        console.log("📨 Formulario:", { name, email, message }) // Verificar los valores

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!name || !email || !message) {
            alert("Completa todos los campos")
            return
        }
        if (!emailRegex.test(email)) {
            alert("Correo no válido")
            return
        }

        const res = await fetch("/api/verify-recaptcha", {
            method: "POST",
            body: JSON.stringify({ token }),
            headers: { "Content-Type": "application/json" },
        })

        const data = await res.json()
        console.log("📡 Respuesta del backend:", data) // Verificar respuesta del backend

        if (!data.success) {
            alert("Verificación reCAPTCHA fallida")
            grecaptcha.reset()
            return
        }

        //  Aquí va la llamada al endpoint que envía el correo
        const emailResponse = await fetch("/api/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message }),
        })
        console.log("datos del formulario:", { name }, { email }, { message })

        const emailData = await emailResponse.json()
        console.log(" Respuesta del envío de correo:", emailData)

        if (!emailData.success) {
            alert("No se pudo enviar el correo. Intenta más tarde.")
            return
        }

        alert("Formulario enviado correctamente ")
        form.reset()
        grecaptcha.reset()
    }
</script>

<svelte:head>
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
</svelte:head>

<section>
    <div class="flex items-center justify-center p-10 bg-black">
        <form
            on:submit={handleSubmit}
            class="grid grid-cols-2 gap-4 w-full max-w-xl">
            <input
                required
                name="name"
                type="text"
                placeholder="Nombre"
                class="input input-bordered w-full col-span-2 bg-transparent text-white border-white placeholder-white" />

            <input
                required
                name="email"
                type="email"
                placeholder="Correo"
                class="input input-bordered w-full col-span-2 bg-transparent text-white border-white placeholder-white" />

            <textarea
                required
                name="message"
                placeholder="Escribe el motivo de tu mensaje"
                class="textarea textarea-bordered w-full col-span-2 h-20 bg-transparent text-white border-white placeholder-white">
            </textarea>

            <div class="col-span-2 flex justify-center">
                <div
                    class="g-recaptcha"
                    data-sitekey={PUBLIC_RECAPTCHA_SITE_KEY}>
                </div>
            </div>

            <div class="col-span-2 flex justify-center">
                <button
                    type="submit"
                    class="bg-black text-white font-bold rounded-full shadow-lg px-6 py-2 mt-4">
                    Enviar
                </button>
            </div>
        </form>
    </div>
</section>
