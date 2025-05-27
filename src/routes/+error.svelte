<script>
    export let error
    export let status
</script>

<svelte:head>
    <title>{status} - GLOBAL</title>
</svelte:head>
<section class="w-full h-auto items-center justify-center p-5">
    <div
        class="flex flex-col items-center justify-center text-center select-none">
        <h1
            class="text-[80px] sm:text-[130px] md:text-[130px] font-extrabold text-success/30 select-none">
            GLOBAL
        </h1>

        <h1
            class="text-[40px] sm:text-[60px] md:text-[60px] font-extrabold text-success/70 select-none">
            404
        </h1>

        {#if status === 404}
            <p class="text-info text-xl sm:text-2xl select-none">
                ¡Ups! La ruta que estás buscando no existe.
            </p>
        {:else}
            <p class="text-info text-xl sm:text-2xl select-none">
                Ha ocurrido un error: {error?.message}
            </p>
        {/if}

        <a
            href="/"
            class="btn bg-success text-white font-semibold py-2 px-6 rounded-full">
            Volver al inicio
        </a>
    </div>
</section>
