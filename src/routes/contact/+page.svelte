<script>
    import { PUBLIC_RECAPTCHA_SITE_KEY } from "$env/static/public"

    async function handleSubmit(event) {
        event.preventDefault()
        const form = event.target

        const token = grecaptcha.getResponse()


        if (!token) {
            alert("Por favor completa el reCAPTCHA")
            return
        }

        const formData = new FormData(form)
        const name = formData.get("name")?.trim()
        const surname = formData.get("surname")?.trim()
        const email = formData.get("email")?.trim()
        const phone = formData.get("phone")?.trim()
        const message = formData.get("message")?.trim()



        // Validación básica
        if (
            !name ||
            !surname ||
            !email ||
            !phone ||
            !message
        ) {
            alert("Completa todos los campos")
            return
        }


        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            alert("Por favor ingrese una dirección de correo electrónico válida")
            return
        }

        const phoneRegex = /^[0-9]{8}$/
        if (!phoneRegex.test(phone)) {
            alert("Por favor ingrese un número de teléfono válido")
            return
        }





        const res = await fetch("/api/verify-recaptcha", {
            method: "POST",
            body: JSON.stringify({ token }),
            headers: { "Content-Type": "application/json" },
        })

        const data = await res.json()


        if (!data.success) {
            alert("Verificación reCAPTCHA fallida")
            grecaptcha.reset()
            return
        }

        //  Aquí va la llamada al endpoint que envía el correo
        const emailResponse = await fetch("/api/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name,
                surname,
                email,
                phone,
                message
            }),
        })


        const emailData = await emailResponse.json()

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

<!-- section one -->
<section>
    <div class="w-full h-70 sm:h-100 md:h-118 bg-primary select-none">
        <div class="flex items-center justify-center w-full">
            <div class="flex flex-col items-center justify-center">
                <h1
                    class="text-[80px] sm:text-[130px] md:text-[170px] lg:text-[200px] font-extrabold text-success/30 text-center">
                    GLOBAL
                </h1>
                <div
                    class="h-100 w-80 md:w-180 relative items-center justify-center flex">
                    <img
                        src="/images/Inicio/moto.png"
                        alt="Foto izquierda"
                        class="absolute h-50 w-auto sm:h-60 sm:w-100 sm:bottom-65 md:h-80 md:w-140 bottom-65 md:bottom-60" />
                </div>
            </div>
        </div>
    </div>
</section>

<!-- section two -->
<section class=" ">
    <div
        class=" bg-[url('/images/Contact/motocontact.webp')] bg-cover bg-center select-none">
        <div class="w-full h-full bg-black/80 p-10">
            <h1 class=" text-white text-3xl lg:text-5xl font-black text-center">
                Conversemos
            </h1>
            <div class="flex items-center justify-center p-10">
                <form
                    on:submit={handleSubmit}
                    class="grid grid-cols-2 gap-4 w-100">
                    <input
                        required
                        name="name"
                        type="text"
                        maxlength="100"
                        placeholder="Nombre"
                        class="input input-bordered w-full lg:w-48 lg:h-9 bg-transparent text-white border-white placeholder-white" />
                    <input
                        required
                        name="surname"
                        type="text"
                        maxlength="100"
                        placeholder="Apellidos"
                        class="input input-bordered w-full lg:w-48 lg:h-9 bg-transparent text-white border-white placeholder-white" />
                    <input
                        required
                        name="email"
                        type="email"
                        maxlength="100"
                        placeholder="Email"
                        class="input input-bordered w-full lg:w-48 lg:h-9 bg-transparent text-white border-white placeholder-white" />
                    <input
                        required
                        name="phone"
                        type="tel"
                        minlength="8"
                        maxlength="8"
                        placeholder="Teléfono"
                        class="input input-bordered w-full lg:w-48 lg:h-9 bg-transparent text-white border-white placeholder-white" />

                    <input
                        required
                        name="message"
                        maxlength="500"
                        type="text"
                        placeholder="Escribe el motivo de tu mensaje"
                        class="textarea textarea-bordered w-58 h-20 sm:w-100 sm:h-30 bg-transparent text-xs sm:text-base text-white border-white placeholder-white" />
                    <div class="col-span-2 flex justify-center">
                        <div
                            class="g-recaptcha"
                            data-sitekey={PUBLIC_RECAPTCHA_SITE_KEY}>
                        </div>
                    </div>

                    <div class="col-span-2 flex justify-center">
                        <button
                            type="submit"
                            class="bg-black border-white text-white font-bold text-base md:text-xl md:w-[150px] lg:text-2xl xl:text-xl mt-2
                                           w-24 h-9 lg:w-32 lg:h-10 rounded-full shadow-lg">
                            <!-- <span -->
                            <!--     class="loading loading-spinner loading-lg text-warning -"> -->
                            <!-- </span> -->
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
