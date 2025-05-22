<script>
    export let titulo = ""
    export let descripcion = ""
    export let subtitulo = ""
    export let precio = ""
    export let parrafoInferior = ""
    export let botones = []
    export let imagenSrc = ""
    export let imagenAlt = ""

    let container

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
</script>

<div class="w-full h-full p-10">
    <div class="grid grid-cols-2 gap-4 font-bold mt-5 p-3">
        <div>
            <h1 class="text-3xl text-left">{titulo}</h1>

            <p class="text-center text-base font-medium">{descripcion}</p>

            <strong class="text-left text-2xl">{subtitulo}</strong>
            <p class="text-left text-xl font-black mt-2">{precio}</p>

            {#each botones as { texto, tipo }}
                <button class="btn {tipo} text-white mt-2 ml-2">
                    {texto}
                </button>
            {/each}

            <p class="text-center text-base font-medium mt-5">
                {parrafoInferior}
            </p>
        </div>

        <div
            class="hover-zoom p-5 overflow-hidden relative"
            bind:this={container}
            on:mousemove={handleMouseMove}
            on:mouseleave={resetTransformOrigin}>
            <img
                src={imagenSrc}
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
