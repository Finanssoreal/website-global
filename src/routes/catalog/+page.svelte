<script>
    import ProductCard from "$lib/components/Card.svelte"
    import FilterPanel from "$lib/components/Filters.svelte"
    import products from "$lib/data/motos.json"


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
    <div class="w-full h-70 sm:h-100 md:h-118 bg-primary">
        <div class="flex items-center justify-center w-full">
            <div class="flex flex-col items-center justify-center">
                <h1
                    class="text-[80px] sm:text-[130px] md:text-[170px] lg:text-[200px] font-extrabold text-success/30 text-center">
                    GLOBAL
                </h1>
                <div
                    class="h-100 w-80 md:w-180 relative items-center justify-center flex">
                    <img
                        src="/images/Inicio/moto.png"
                        alt="Foto izquierda"
                        class="absolute h-50 w-auto sm:h-60 sm:w-100 sm:bottom-65 md:h-80 md:w-140 bottom-65 md:bottom-60" />
                </div>
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
