<script>
    export let error
    export let status
</script>

<svelte:head>
    <title>{status} - Error</title>
</svelte:head>

<main
    class="min-h-screen flex flex-col items-center justify-center text-center p-8">
    <h1 class="text-6xl font-bold mb-4">{status}</h1>

    {#if status === 404}
        <p class="text-xl">Lo sentimos, la página que buscas no existe.</p>
    {:else}
        <p class="text-xl">Ha ocurrido un error: {error?.message}</p>
    {/if}

    <a href="/" class="mt-8 text-blue-500 underline">Volver al inicio</a>
</main>
