<script>
    import ProductZoom from "$lib/components/ZoomCard.svelte"
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
<section>
    <div class="flex flex-wrap border-t border-b border-gray-300 mt-2">
        <div class="basis-full sm:basis-1/2 lg:basis-1/4 text-center p-4">
            <h3 class="font-bold">MOTOR</h3>
            <p>4 Tiempos</p>
        </div>
        <div
            class="basis-full sm:basis-1/2 lg:basis-1/4 text-center p-4 border-l border-gray-300">
            <h3 class="font-bold">POTENCIA</h3>
            <p>7.7PH@7500</p>
        </div>
        <div
            class="basis-full sm:basis-1/2 lg:basis-1/4 text-center p-4 border-l border-gray-300">
            <h3 class="font-bold">PISTONES</h3>
            <p>102 C.C</p>
        </div>
        <div
            class="basis-full sm:basis-1/2 lg:basis-1/4 text-center p-4 border-l border-gray-300">
            <h3 class="font-bold">COMBUSTIBLE</h3>
            <p>2.77 GALONES</p>
        </div>
    </div>
</section>

<section>
    <div class=" mt-2">
        <h4>Motor</h4>
    </div>
</section>
