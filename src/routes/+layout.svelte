<script>
    import "../app.css"
    import Navbar from "$lib/components/Navbar.svelte"
    import Footer from "$lib/components/Footer.svelte"

    import { afterNavigate } from "$app/navigation"
    import { onMount } from "svelte"

    export let children

    // Registrar vistas de página
    onMount(() => {
        afterNavigate((nav) => {
            if (typeof gtag === "function") {
                gtag("event", "page_view", {
                    page_path: nav.to?.url.pathname,
                    page_location: window.location.href,
                    page_title: document.title,
                })
            }
        })
    })
</script>

<!-- {@render children()} -->
<div class="min-h-screen flex flex-col bg-base-100">
    <Navbar />
    <main class="flex-grow">
        {@render children()}
    </main>
    <Footer />
</div>
