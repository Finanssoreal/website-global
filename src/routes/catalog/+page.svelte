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
    <FilterPanel />
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
      <FilterPanel />

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
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 pt-4 mb-8 pl-4 sm:pl-18 md:pl-34 lg:pl-30 lg:pr-20 xl:pl-60 xl:pr-20 place-items-center">
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
