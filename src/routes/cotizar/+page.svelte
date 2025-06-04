
<script>
async function handleSubmit(event){
    event.preventDefault()
    const form = event.target

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



    console.log("Los datos enviados son: \n",
    {
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
        motorcycle_model

    })
}




</script>

<section>
    <div class=" w-full flex justify-center">
      <div class="w-full max-w-4xl px-6 py-12">
        <h1 class="text-2xl font-bold text-center mb-8">¡Déjanos tus datos!</h1>

        <form class="grid grid-cols-1 md:grid-cols-2 gap-6" on:submit={handleSubmit}>
          <!-- Nombre -->
          <div>
            <label class="block mb-2 text-sm font-medium">
              Nombres <span class="text-red-500">*</span>
            </label>
            <input type="text" name="name" required placeholder="Nombres" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400">
          </div>

          <div>
            <label class="block mb-2 text-sm font-medium">
              Apellidos <span class="text-red-500">*</span>
            </label>
            <input type="text" name="lastname" required placeholder="Apellidos" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400">
          </div>

          <!-- Número de celular y Correo -->
          <div>
            <label class="block mb-2 text-sm font-medium">
              Número de celular <span class="text-red-500">*</span>
            </label>
            <input type="tel" name="phone" required placeholder="(+502) 0000-0000" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400">
          </div>

          <div>
            <label class="block mb-2 text-sm font-medium">
              Correo electrónico <span class="text-red-500">*</span>
            </label>
            <input type="email" name="email" required placeholder="correo@ejemplo.com" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400">
          </div>

          <!-- DPI y NIT -->
          <div>
            <label class="block mb-2 text-sm font-medium">
              Documento de Identificación (DPI)
            </label>
            <input type="text" name="cui" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400">
          </div>

          <div>
            <label class="block mb-2 text-sm font-medium">
              Nro. Identificación Tributaria (NIT)
            </label>
            <input type="text" name="nit"  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400">
          </div>

          <!-- Método de pago y medio de contacto -->
          <div>
            <label class="block mb-2 text-sm font-medium">
              Método de pago <span class="text-red-500">*</span>
            </label>
            <select name="payment_method" required class="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-gray-400">
              <option value="" selected disabled>Seleccione</option>
              <option value="efectivo">Efectivo</option>
              <option value="financiamiento">Financiamiento</option>
              <option value="visa cuotas">Visa Cuotas</option>
              <option value="Tarjeta de crédito">Tarjeta de crédito</option>
            </select>
          </div>

          <div>
            <label class="block mb-2 text-sm font-medium">
              ¿Cómo deseas que te contactemos? <span class="text-red-500">*</span>
            </label>
            <select name="contact_type" required class="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-gray-400">
              <option value="" selected disabled>Seleccione</option>
              <option value="telefono">Teléfono</option>
              <option value="email">Correo electrónico</option>
              <option value="whatsapp">WhatsApp</option>
            </select>
            <!--
            <div class="flex items-center mt-1 text-xs text-red-600 bg-red-100 px-2 py-1 rounded">
              <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              This field is required.
            </div>-->
          </div>

          <!-- Horario -->
          <div>
            <label class="block mb-2 text-sm font-medium">
              ¿En qué horario te gustaría ser contactado? <span class="text-red-500">*</span>
            </label>
            <select name="contact_hours" required class="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-gray-400">
              <option value="" selected disabled>Seleccione</option>
              <option value="mañana">Mañana (8:00 - 12:00)</option>
              <option value="tarde">Tarde (12:00 - 17:00)</option>

            </select>
          </div>

          <!-- Departamento y Municipio -->
          <div>
            <label class="block mb-2 text-sm font-medium">
              Departamento <span class="text-red-500">*</span>
            </label>
            <select name="department" class="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-gray-400">
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
            <input name="municipality" type="text" placeholder="Ej. Mixco, Cobán, etc." class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400">
          </div>


          <div>
            <label class="block mb-2 text-sm font-medium">
              Modelo de motocicleta <span class="text-red-500">*</span>
            </label>
            <input name="motorcycle_model" type="text" placeholder="Ej. Bajaj Pulsar-NS-200" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400">
          </div>

          <!-- Botón de envío (colspan 2) -->
          <div class="md:col-span-2 flex justify-center mt-8">
            <button type="submit" class="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-16 rounded">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
