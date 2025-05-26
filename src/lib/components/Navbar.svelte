<script>
    import { goto } from "$app/navigation"
    import { page } from "$app/stores"
    import { get } from "svelte/store"

    let isOpen = false

    const links = {
        Inicio: "/",
        Catálogo: "/catalog",
        Contacto: "/contact",
    }

    function handleLinkClick(path) {
        isOpen = false
        goto(path)
    }

    $: currentPath = $page.url.pathname
</script>

<div class="navbar bg-primary w-full z-50 h-20 md:w-full md:h-20">
    <div class="navbar-start">
        <!-- Botón móvil -->
        <div class="dropdown">
            <button
                aria-label="boton amburguesa"
                on:click={() => (isOpen = !isOpen)}
                class="btn btn-ghost lg:block lg:mt-5 lg:ml-2 xl:hidden h-10 w-full">
                <i class="fa-solid fa-bars text-3xl text-info"></i>
            </button>

            {#if isOpen}
                <ul
                    class="absolute left-0 mt-3 w-52 p-2 bg-base-100 text-black rounded-box shadow-md z-50">
                    {#each Object.entries(links) as [label, path]}
                        <li>
                            <a
                                href={path}
                                on:click|preventDefault={() =>
                                    handleLinkClick(path)}>
                                {label}
                            </a>
                        </li>
                    {/each}
                </ul>
            {/if}
        </div>

        <!-- Logo grande -->
        <a class="hidden ml-4 lg:hidden xl:block" href="/">
            <img
                src="/images/Navbar/LOGOGLOBAL.png"
                alt="logo"
                width="80"
                height="80" />
        </a>
    </div>

    <!-- Logo móvil -->
    <div class="navbar-end xl:hidden flex lg:mr-4 mr-4 animate-none">
        <a href="/">
            <img
                src="/images/Navbar/LOGOGLOBAL.png"
                alt="logo"
                width="60"
                height="60" />
        </a>
    </div>
    <!-- Menú grande -->
    <div class="navbar-end hidden xl:flex">
        <ul class="menu menu-horizontal px-1">
            {#each Object.entries(links) as [label, path]}
                <li class="text-xl">
                    <a
                        href={path}
                        class:text-red-600={currentPath === path}
                        class:text-black={currentPath !== path}>
                        {label}
                    </a>
                </li>
            {/each}
        </ul>
    </div>
</div>
