<script>
    import ProductCard from "$lib/components/Card.svelte"
    import FilterPanel from "$lib/components/Filters.svelte"

    const products = [
        {
            brand: "HONDA",
            model: "XR 190 L",
            price: "Q 13,000.00",
            imageSrc: "/images/Recursos/red-moto.png",
            alt: "Motocicleta Honda",
        },
        {
            brand: "HONDA",
            model: "XR 250 Tornado",
            price: "Q 16,500.00",
            imageSrc: "/images/Recursos/red-moto.png",
            alt: "Motocicleta Honda Tornado",
        },
        {
            brand: "HONDA",
            model: "CB190R",
            price: "Q 18,200.00",
            imageSrc: "/images/Recursos/red-moto.png",
            alt: "Motocicleta CB190R",
        },
        {
            brand: "HONDA",
            model: "DIO",
            price: "Q 10,800.00",
            imageSrc: "/images/Recursos/red-moto.png",
            alt: "Motocicleta Honda DIO",
        },
    ]

    // let min = 500;
    // let max = 30000;
    // let minGap = 100;

    // let rangeMin = min;
    // let rangeMax = max;

    // $: minDisplay = `Q ${rangeMin.toLocaleString("es-GT")}`;
    // $: maxDisplay = `Q ${rangeMax.toLocaleString("es-GT")}`;

    // function handleMinChange(event) {
    //   const value = parseInt(event.target.value);
    //   if (value > rangeMax - minGap) {
    //     rangeMin = rangeMax - minGap;
    //   } else {
    //     rangeMin = value;
    //   }
    // }

    // function handleMaxChange(event) {
    //   const value = parseInt(event.target.value);
    //   if (value < rangeMin + minGap) {
    //     rangeMax = rangeMin + minGap;
    //   } else {
    //     rangeMax = value;
    //   }
    // }

    // $: leftPercent = ((rangeMin - min) / (max - min)) * 100;
    // $: widthPercent = ((rangeMax - rangeMin) / (max - min)) * 100;

    let showFilters = false;
</script>


<div class="flex flex-row ">

<!--
<section>


      <form class="bg-white shadow-md rounded-md p-6 w-72 font-sans text-gray-900 mt-20 ml-5">
        <h2 class="font-extrabold text-lg mb-4">Filtros</h2>

        <div class="mb-6">
          <label class="block mb-1 font-semibold text-base cursor-pointer">Marca</label>
          <select class="select select-bordered w-full text-sm text-gray-700">
            <option disabled selected>Seleccione una marca</option>
            <option>Marca 1</option>
            <option>Marca 2</option>
            <option>Marca 3</option>
          </select>
        </div>

        <div class="mb-6">
          <p class="font-semibold text-base mb-3">Precio</p>
          <div class="flex justify-between mb-3">
            <div class="w-1/2 pr-2">
              <label class="block text-xs text-gray-700 mb-1">Mín</label>
              <input
                type="text"
                class="input input-bordered w-full input-xs text-gray-400"
                readonly
                bind:value={minDisplay}
              />
            </div>
            <div class="w-1/2 pl-2">
              <label class="block text-xs text-gray-700 mb-1">Máx</label>
              <input
                type="text"
                class="input input-bordered w-full input-xs text-gray-400"
                readonly
                bind:value={maxDisplay}
              />
            </div>
          </div>

          <div class="relative h-6 mb-6">

            <div
              class="absolute h-1 bg-black rounded-full top-1/2 transform -translate-y-1/2 z-0"
              style="left: {leftPercent}%; width: {widthPercent}%"
            ></div>


            <input
              type="range"
              min={min}
              max={max}
              step="100"
              bind:value={rangeMin}
              on:input={handleMinChange}
              class="absolute w-full h-1 appearance-none bg-transparent pointer-events-none top-1/2 transform -translate-y-1/2 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:shadow [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-black [&::-moz-range-thumb]:pointer-events-auto"
            />


            <input
              type="range"
              min={min}
              max={max}
              step="100"
              bind:value={rangeMax}
              on:input={handleMaxChange}
              class="absolute w-full h-1 appearance-none bg-transparent pointer-events-none top-1/2 transform -translate-y-1/2 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:shadow [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-black [&::-moz-range-thumb]:pointer-events-auto"
            />
          </div>
        </div>

        <div class="mb-6">
          <label class="block mb-1 font-semibold text-base cursor-pointer">Tipo</label>
          <select class="select select-bordered w-full text-sm text-gray-700">
            <option disabled selected>Seleccione un tipo</option>
            <option>Tipo 1</option>
            <option>Tipo 2</option>
            <option>Tipo 3</option>
          </select>
        </div>

        <button type="submit" class="btn btn-neutral bg-black btn-block rounded-full text-sm shadow-lg">
          Filtrar
        </button>
      </form>

</section>
-->

<section>

<!-- Solo se muestra en pantallas grandes -->
<div class="hidden md:block mt-20 ml-5">
    <FilterPanel />
  </div>

    <!-- Botón solo visible en pantallas pequeñas -->
<div class="md:hidden p-4">
    <button
      on:click={() => (showFilters = true)}
      class="btn btn-neutral bg-black w-full text-white rounded-full mb-4 z-10"
    >
      Mostrar filtros
    </button>
  </div>

  <!-- Panel flotante encima del contenido en móviles -->
  {#if showFilters}
    <!-- Fondo oscuro -->
    <div class="fixed inset-0 bg-opacity-500 z-40 md:hidden" on:click={() => (showFilters = false)}></div>

    <!-- Panel lateral -->
    <div
      class="fixed top-0 left-0 h-full w-72 bg-white z-50 p-6 shadow-lg overflow-y-auto md:hidden"
    >
      <div class="flex justify-end mb-4">
        <button
          on:click={() => (showFilters = false)}
          class="btn btn-sm btn-outline"
        >
          ✕
        </button>
      </div>
      <FilterPanel />

    </div>
  {/if}

</section>


<section>
    <div class="flex flex-row w-full justify-center mt-5 mb-5">
        <p
            class="text-black font-bold text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Encuentra las mejores motocicletas del mercado
        </p>
    </div>

    <!--md:pl-30 md:pr-30  lg:pl-50 lg:pr-50 xl:pl-70 xl:pr-70 -->
    <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 pt-4 mb-8 lg:pl-30 lg:pr-20 xl:pl-60 xl:pr-20 place-items-center">
        {#each products as product}
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
