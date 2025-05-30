<script>
    import Colorvariant from "./ColorVariant.svelte";
    export let titulo = ""
    export let descripcion = ""
    export let subtitulo = ""
    export let precio = ""
    export let parrafoInferior = ""
    export let botones = []
    export let imagenSrc = ""
    export let imagenAlt = ""
    export let colorVariants =[]

    let container

    let selectedImage = imagenSrc;

    function handleMouseMove(event) {
        const img = container.querySelector("img")
        const rect = container.getBoundingClientRect()
        const x = ((event.clientX - rect.left) / rect.width) * 100
        const y = ((event.clientY - rect.top) / rect.height) * 100
        img.style.transformOrigin = `${x}% ${y}%`
    }

    function resetTransformOrigin() {
        const img = container.querySelector("img")
        img.style.transformOrigin = "center center"
    }

    function updateImage(event) {
		selectedImage = event.detail.imageSrc;
	}
</script>

<div class="w-full h-full">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 font-bold p-3">
        <div class="">
            <h1 class="text-xl select-none md:text-3xl text-left">{titulo}</h1>

            <p class="text-base md:text-lg font-medium mb-4">
                {descripcion}
            </p>

            <strong class="text-left text-xl md:text-2x">{subtitulo}</strong>
            <p class="text-left text-base md:text-xl font-black mt-2">
                {precio}
            </p>

            {#each botones as { texto, tipo }}
                <button
                    class="btn {tipo} text-white mt-2 w-35 md:w-40 ml-2 text-xs md:text-sm">
                    {texto}
                </button>
            {/each}

            <p class="text-base md:text-lg font-medium mt-5">
                {parrafoInferior}
            </p>


                <p class="text-xl mt-5">Colores Disponibles</p>

            <div class=" w-full grid grid-cols-2 pr-20 sm:grid-cols-4 md:grid-cols-5 md:pr-10 lg:grid-cols-3 lg:pr-28 xl:grid-cols-4 xl:pr-20 gap-2">

                {#each colorVariants as colorVariant}
                <Colorvariant imageSrc={colorVariant} on:select={updateImage} />
                {/each}


            </div>

        </div>

        <div
            class="hover-zoom p-5 overflow-hidden relative"
            bind:this={container}
            on:mousemove={handleMouseMove}
            on:mouseleave={resetTransformOrigin}>
            <img
                src={selectedImage}
                alt={imagenAlt}
                class="zoom-image relative z-10 w-auto h-50 sm:h-60 md:h-50 md:w-90 object-cover pointer-events-none" />
        </div>
    </div>
</div>

<style>
    .hover-zoom {
        position: relative;
        overflow: hidden;
    }

    .hover-zoom img {
        transition: transform 0.4s ease;
        will-change: transform;
        transform-origin: center center;
    }

    .hover-zoom:hover img {
        transform: scale(3); /* Aumenta este número si quieres más zoom */
    }

    .hover-zoom:hover {
        cursor: zoom-in;
    }
</style>
