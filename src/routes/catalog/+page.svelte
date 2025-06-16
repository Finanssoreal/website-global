<script>
    import ProductCard from "$lib/components/Card.svelte"
    import FilterPanel from "$lib/components/Filters.svelte"
    import products from "$lib/data/especificacionesmoto.json"
   // import products from "$lib/data/motos.json"


    function parsePrice(priceString) {
    // Elimina la "Q", espacios, comas y convierte a número
     return parseFloat(priceString.replace(/[Q,\s]/g, ''));
    }


    let filteredProducts = products;
    let showFilters = false;

    function handleFilter(event) {
  const { brand, minPrice, maxPrice } = event.detail;
        console.log({ brand, minPrice, maxPrice })

  filteredProducts = products.filter(p => {
    const parsedPrice = parsePrice(p.price);

    const matchesBrand = brand ? p.brand === brand : true;
    const matchesPrice = parsedPrice >= minPrice && parsedPrice <= maxPrice;

    return matchesBrand && matchesPrice;
  });

   showFilters = false;
}





</script>

<section>
    <div class="w-full h-75 sm:h-100 md:h-125 bg-amber-300 bg-cover bg-center grid xl:grid-cols-2 xl:pl-6 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2  place-items-center  "
    style="background-image: url('images/Banner-Catalog/FONDO-BANNER.png');" >

        <!--Contenedor moto  bg-amber-500 -->
        <div class=" xl:h-93 xl:w-140 xl:mt-20 xl:order-1   lg:h-80 lg:w-120 lg:mt-25 lg:order-1    md:h-60 md:w-90 md:mt-20 md:order-1    sm:h-46 sm:w-75 sm:mt-15 sm:ml-1 sm:order-1   h-30 w-50 mb-12 mt-5   order-2">
            <img src="images/Banner-Catalog/MOTOCICLETAS.png" alt="Motocicleta ">
        </div>

         <!--Contenedor mensaje  bg-blue-700    bg-amber-300-->
         <div class=" xl:h-43 xl:w-130 xl:mb-10 xl:ml-10 xl:order-2   lg:h-37 lg:w-105 lg:mb-6 lg:ml-10 lg:order-2   md:h-30 md:w-80 md:mb-5 md:ml-6 md:order-2   sm:h-17 sm:w-65 sm:mb-11 sm:ml-3 sm:order-2   h-17 w-65 mt-10 ml-0 order-1 ">

            <img src="images/Banner-Catalog/Texto.png" alt="Texto">

            <div class=" flex flex-row w-full pt-2 pl-8 pr-8   xl:pl-20 xl:pr-20 xl:pt-7   lg:pl-15 lg:pr-15 lg:pt-7  md:pl-10 md:pr-10 md:pt-5  sm:pl-6 sm:pr-6 sm:pt-5">
            <img src="images/Banner-Catalog/LOGOS.png" alt="Logos">
            </div>
         </div>

    </div>
</section>

   <!-- Botón solo visible en pantallas pequeñas -->
   <div class="flex flex-row justify-center w-full pl-30 pr-30 sm:pl-60 sm:pr-60 md:pl-70 md:pr-70 pt-10 lg:hidden p-4">
    <button
      on:click={() => (showFilters = true)}
      class="btn btn-neutral bg-black w-full text-white rounded-full mb-4 z-10"
    >
      Filtrar
    </button>
  </div>


<div class="flex flex-row ">

<section>

<!-- Solo se muestra en pantallas grandes -->
<div class="hidden lg:block mt-20 ml-5">
    <FilterPanel on:filter={handleFilter} />
  </div>



  <!-- Panel flotante encima del contenido en móviles -->
  {#if showFilters}
    <!-- Fondo oscuro -->
    <div class="fixed inset-0 bg-opacity-500 z-40 lg:hidden" on:click={() => (showFilters = false)}></div>

    <!-- Panel lateral -->
    <div
      class="fixed top-0 left-0 h-full w-80 bg-white z-50 pt-5 shadow-lg overflow-y-auto lg:hidden"
    >
      <div class="flex justify-end mb-4 pr-4">
        <button
          on:click={() => (showFilters = false)}
          class="btn btn-sm btn-outline "
        >
          ✕
        </button>
      </div>
      <FilterPanel on:filter={handleFilter} />

    </div>
  {/if}

</section>


<section>
    <div class="flex flex-row w-full justify-center pl-4 sm:pl-16 md:pl-34 lg:pr-0 lg:pl-10 xl:pl-42  mt-5 mb-5">
        <p
            class="text-black font-bold text-center text-sm sm:text-base  md:text-lg lg:text-xl xl:text-2xl">
            Encuentra las mejores motocicletas del mercado
        </p>
    </div>

    <!--md:pl-30 md:pr-30  lg:pl-50 lg:pr-50 xl:pl-70 xl:pr-70 -->
    <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:gap-15 gap-4 pt-4 mb-8 pl-4 sm:pl-18 md:pl-34 lg:pl-30 lg:pr-20 xl:pl-40 xl:pr-20 2xl:grid-cols-4 2xl:ml-15 place-items-center">
        {#each filteredProducts as product}
            <ProductCard
                brand={product.brand}
                model={product.model}
                price={product.price}
                imageSrc={product.imageSrc}
                alt={product.alt} />
        {/each}
    </div>
</section>


</div>
