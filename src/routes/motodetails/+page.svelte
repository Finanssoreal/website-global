<script>
    import ProductZoom from "$lib/components/ZoomCard.svelte"
    const especificaciones = [
        {
            titulo: "MOTOR",
            valor: "4 Tiempos",
            imagen: "/images/Especificaciones/motor.png",
            alt: "Motor",
        },
        {
            titulo: "POTENCIA",
            valor: "7.7PH@7500",
            imagen: "/images/Especificaciones/integracion.png",
            alt: "Potencia",
        },
        {
            titulo: "PISTONES",
            valor: "102 C.C",
            imagen: "/images/Especificaciones/pistones.png",
            alt: "Pistones",
        },
        {
            titulo: "COMBUSTIBLE",
            valor: "2.77 GALONES",
            imagen: "/images/Especificaciones/conbustible.png",
            alt: "Combustible",
        },
    ]

    const especificacionesMotor = [
        {
            titulo: "MOTOR",
            valor: "4 tiempos, refrigerado por aire, SOHC, SI, motor",
            imagen: "/images/Especificaciones/motor.png",
            alt: "Motor",
        },
        {
            titulo: "CILINDRAJE",
            valor: "102 cc",
            imagen: "/images/Especificaciones/Cilindraje.png",
            alt: "Cilindraje",
        },
        {
            titulo: "POTENCIA",
            valor: "7.7 Hp @ 7500 rpm",
            imagen: "/images/Especificaciones/integracion.png",
            alt: "Potencia",
        },
        {
            titulo: "TORQUE",
            valor: "8.24 Nm @ 5500 rpm",
            imagen: "/images/Especificaciones/Torque.png",
            alt: "Torque",
        },
        {
            titulo: "EMBRAGUE",
            valor: "Húmedo, placa múltiple",
            imagen: "/images/Especificaciones/Embrague.png",
            alt: "Embrague",
        },
        {
            titulo: "ALIMENTACIÓN",
            valor: "Carburador",
            imagen: "/images/Especificaciones/Alimentacion.png",
            alt: "Alimentación",
        },
        {
            titulo: "CAJA",
            valor: "4 Velocidades",
            imagen: "/images/Especificaciones/Caja.jpg",
            alt: "Caja",
        },
        {
            titulo: "Diámetro y Carrera",
            valor: " 47 mm x 58.8 mm",
            imagen: "/images/Especificaciones/Diametro.png",
            alt: "Diámetro",
        },
        {
            titulo: "Arranque",
            valor: "Eléctrico y arranque a patada",
            imagen: "/images/Especificaciones/Arranque.png",
            alt: "Arranque",
        },
    ]
</script>

<section>
    <ProductZoom
        titulo="BOXER 100"
        descripcion="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar..."
        subtitulo="*Precio de promoción"
        precio="Q,899.00"
        parrafoInferior="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."
        imagenSrc="/images/Inicio/moto.png"
        imagenAlt="Moto Boxer"
        botones={[
            { texto: "Quiero cotizar", tipo: "btn-success" },
            { texto: "Simular Crédito", tipo: "btn-info" },
        ]} />
</section>

<!-- section two -->
<section>
    <div class="flex flex-wrap border-t border-b border-gray-300 mt-2">
        {#each especificaciones as { titulo, valor, imagen, alt }, i}
            <div
                class="basis-full sm:basis-1/2 lg:basis-1/4 text-center p-4 {i !==
                0
                    ? 'border-l border-gray-300'
                    : ''}">
                <h3 class="font-bold">{titulo}</h3>
                <p>{valor}</p>
                <div class="relative items-center justify-center flex mt-4 p-3">
                    <img src={imagen} {alt} class="absolute h-10 w-auto" />
                </div>
            </div>
        {/each}
    </div>
</section>

<section class="flex items-center justify-center min-h-screen bg-gray-50">
    <div class="max-w-4xl w-full px-6 py-12">
        <!-- Título principal -->
        <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900">
                ESPECIFICACIONES DEL MOTOR
            </h2>
            <div class="w-auto md:w-100 h-1 bg-red-500 mx-auto mt-2"></div>
        </div>

        <!-- Grid de especificaciones -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {#each especificacionesMotor as item}
                <div
                    class="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={item.imagen}
                        alt={item.alt}
                        class="w-18 h-18 mx-auto mb-4" />
                    <h3 class="text-lg font-semibold text-gray-800">
                        {item.titulo}
                    </h3>
                    <p class="text-gray-600">{item.valor}</p>
                </div>
            {/each}
        </div>
    </div>
</section>
