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

<section>
    <div class="flex flex-col mt-2 items-center">
        <div class=" border-b border-gray-300">
            <h4 class="text-left font-bold">Motor</h4>
            <p>4 tiempos, refregerando por aire, soch , SI, motor</p>
        </div>
        <div class=" border-b border-gray-300">
            <h4>cilindraje</h4>
            <p>102 cc</p>
        </div>
        <div class=" border-b border-gray-300">
            <h4>Máxima potencia</h4>
            <p>7,7 HP @ 5500 rpm</p>
        </div>
        <div class=" border-b border-gray-300">
            <h4>Torque maximo</h4>
            <p>8,24 Nm @ 5500 rpm</p>
        </div>
        <div class=" border-b border-gray-300">
            <h4>Embrague</h4>
            <p>Húmedo, placa múltiple</p>
        </div>
        <div class=" border-b border-gray-300">
            <h4>Embrague</h4>
            <p>Carburador</p>
        </div>
    </div>
</section>
