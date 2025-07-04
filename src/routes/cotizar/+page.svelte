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

        const formData = new FormData(form)

        const name = formData.get("name")?.trim()
        const lastname = formData.get("lastname")?.trim()
        const phone = formData.get("phone")?.trim()
        const email = formData.get("email")?.trim()
        const cui = formData.get("cui")?.trim()
        const nit = formData.get("nit")?.trim()
        const payment_method = formData.get("payment_method")?.trim()
        const contact_type = formData.get("contact_type")?.trim()
        const contact_hours = formData.get("contact_hours")?.trim()
        const department = formData.get("department")?.trim()
        const municipality = formData.get("municipality")?.trim()
        const motorcycle_model = formData.get("motorcycle_model")?.trim()

        const phoneRegex = /^[0-9]{8}$/
        if (!phoneRegex.test(phone)) {
            alert("Por favor ingrese un número de teléfono válido")
            return
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            alert(
                "Por favor ingrese una dirección de correo electrónico válida",
            )
            return
        }

        const cuiRegex = /^[0-9]{13}$/
        if (!cuiRegex.test(cui)) {
            alert("Por favor ingrese un código único de identificación válido")
            return
        }

        //const nitRegex = /^[0-9]{9}$/
        const nitRegex = /^$|^[0-9]{9}$/
        if (!nitRegex.test(nit)) {
            alert(
                "Por favor ingrese un número de identificación tributaria válido",
            )
            return
        }

        //  Aquí va la llamada al endpoint que envía el correo
        const emailResponse = await fetch("/api/send-quotesform-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name,
                lastname,
                phone,
                email,
                cui,
                nit,
                payment_method,
                contact_type,
                contact_hours,
                department,
                municipality,
                motorcycle_model,
            }),
        })

        const emailData = await emailResponse.json()

        if (!emailData.success) {
            alert("No se pudo enviar el correo. Intenta más tarde.")
            return
        }

        alert("Formulario enviado correctamente ")

        form.reset()
    }
</script>

<svelte:head>
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
</svelte:head>

<section>
    <div class=" w-full flex justify-center select-none">
        <div class="w-full max-w-4xl px-6 py-12">
            <h1 class="text-2xl font-bold text-center mb-8">
                ¡Déjanos tus datos!
            </h1>

            <form
                class="grid grid-cols-1 sm:grid-cols-2 gap-6"
                on:submit={handleSubmit}>
                <!-- Nombre -->
                <div>
                    <label class="block mb-2 text-sm font-medium">
                        Nombres <span class="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Nombres"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400" />
                </div>

                <div>
                    <label class="block mb-2 text-sm font-medium">
                        Apellidos <span class="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="lastname"
                        required
                        placeholder="Apellidos"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400" />
                </div>

                <!-- Número de celular y Correo -->
                <div>
                    <label class="block mb-2 text-sm font-medium">
                        Número de celular <span class="text-red-500">*</span>
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        required
                        inputmode="numeric"
                        minlength="8"
                        maxlength="8"
                        placeholder="00000000"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400" />
                </div>

                <div>
                    <label class="block mb-2 text-sm font-medium">
                        Correo electrónico <span class="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="correo@ejemplo.com"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400" />
                </div>

                <!-- DPI y NIT -->
                <div>
                    <label class="block mb-2 text-sm font-medium">
                        Código Único de Identificación (CUI) <span
                            class="text-red-500">
                            *
                        </span>
                    </label>
                    <input
                        type="text"
                        name="cui"
                        inputmode="numeric"
                        required
                        minlength="13"
                        maxlength="13"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400" />
                </div>

                <div>
                    <label class="block mb-2 text-sm font-medium">
                        Nro. Identificación Tributaria (NIT)
                    </label>
                    <input
                        type="text"
                        name="nit"
                        inputmode="numeric"
                        minlength="9"
                        maxlength="9"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400" />
                </div>

                <!-- Método de pago y medio de contacto -->
                <div>
                    <label class="block mb-2 text-sm font-medium">
                        Método de pago <span class="text-red-500">*</span>
                    </label>
                    <select
                        name="payment_method"
                        required
                        class="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-gray-400">
                        <option value="" selected disabled>Seleccione</option>
                        <option value="efectivo">Efectivo</option>
                        <option value="financiamiento">Financiamiento</option>
                        <option value="visa cuotas">Visa Cuotas</option>
                        <option value="Tarjeta de crédito">
                            Tarjeta de crédito
                        </option>
                    </select>
                </div>

                <div>
                    <label class="block mb-2 text-sm font-medium">
                        ¿Cómo deseas que te contactemos? <span
                            class="text-red-500">
                            *
                        </span>
                    </label>
                    <select
                        name="contact_type"
                        required
                        class="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-gray-400">
                        <option value="" selected disabled>Seleccione</option>
                        <option value="teléfono">Teléfono</option>
                        <option value="email">Correo electrónico</option>
                        <option value="whatsapp">WhatsApp</option>
                    </select>
                </div>

                <!-- Horario -->
                <div>
                    <label class="block mb-2 text-sm font-medium">
                        ¿En qué horario te gustaría ser contactado? <span
                            class="text-red-500">
                            *
                        </span>
                    </label>
                    <select
                        name="contact_hours"
                        required
                        class="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-gray-400">
                        <option value="" selected disabled>Seleccione</option>
                        <option value="mañana (8:00 - 12:00)">
                            Mañana (8:00 - 12:00)
                        </option>
                        <option value="tarde">Tarde (12:00 - 17:00)</option>
                    </select>
                </div>

                <!-- Departamento y Municipio -->
                <div>
                    <label class="block mb-2 text-sm font-medium">
                        Departamento <span class="text-red-500">*</span>
                    </label>
                    <select
                        name="department"
                        required
                        class="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-gray-400">
                        <option value="" selected disabled>Seleccione</option>
                        <option value="Alta Verapaz">Alta Verapaz</option>
                        <option value="Baja Verapaz">Baja Verapaz</option>
                        <option value="Chimaltenango">Chimaltenango</option>
                        <option value="Chiquimula">Chiquimula</option>
                        <option value="El Progreso">El Progreso</option>
                        <option value="Escuintla">Escuintla</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Huehuetenango">Huehuetenango</option>
                        <option value="Izabal">Izabal</option>
                        <option value="Jalapa">Jalapa</option>
                        <option value="Jutiapa">Jutiapa</option>
                        <option value="Petén">Petén</option>
                        <option value="Quetzaltenango">Quetzaltenango</option>
                        <option value="Quiché">Quiché</option>
                        <option value="Retalhuleu">Retalhuleu</option>
                        <option value="Sacatepéquez">Sacatepéquez</option>
                        <option value="San Marcos">San Marcos</option>
                        <option value="Santa Rosa">Santa Rosa</option>
                        <option value="Sololá">Sololá</option>
                        <option value="Suchitepéquez">Suchitepéquez</option>
                        <option value="Totonicapán">Totonicapán</option>
                        <option value="Zacapa">Zacapa</option>
                    </select>
                </div>

                <div>
                    <label class="block mb-2 text-sm font-medium">
                        Municipio <span class="text-red-500">*</span>
                    </label>
                    <input
                        name="municipality"
                        required
                        type="text"
                        placeholder="Ej. Mixco, Cobán, etc."
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400" />
                </div>

                <div>
                    <label class="block mb-2 text-sm font-medium">
                        Modelo de motocicleta <span class="text-red-500">
                            *
                        </span>
                    </label>
                    <input
                        name="motorcycle_model"
                        required
                        type="text"
                        placeholder="Ej. Bajaj Pulsar-NS-200"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400" />
                </div>

                <div class="col-span-1 sm:col-span-2 flex justify-center">
                    <div
                        class="g-recaptcha"
                        data-sitekey={PUBLIC_RECAPTCHA_SITE_KEY}>
                    </div>
                </div>

                <!-- Botón de envío (colspan 2) -->
                <div class="sm:col-span-2 flex justify-center mt-8">
                    <button
                        type="submit"
                        class="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-16 rounded">
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    </div>
</section>
