
<script>

import { createEventDispatcher } from 'svelte';


const dispatch = createEventDispatcher();

     let min = 500;
    let max = 90000;
    let minGap = 100;

    let rangeMin = min;
    let rangeMax = max;

    let selectedBrand = "";
    //let selectedType = "";

    $: minDisplay = `Q ${rangeMin.toLocaleString("es-GT")}`;
    $: maxDisplay = `Q ${rangeMax.toLocaleString("es-GT")}`;

    function handleMinChange(event) {
      const value = parseInt(event.target.value);
      if (value > rangeMax - minGap) {
        rangeMin = rangeMax - minGap;
      } else {
        rangeMin = value;
      }
    }

    function handleMaxChange(event) {
      const value = parseInt(event.target.value);
      if (value < rangeMin + minGap) {
        rangeMax = rangeMin + minGap;
      } else {
        rangeMax = value;
      }
    }

    function applyFilters(e) {
    e.preventDefault();
    dispatch('filter', {
      brand: selectedBrand,
      //type: selectedType,
      minPrice: rangeMin,
      maxPrice: rangeMax
    });
  }


    $: leftPercent = ((rangeMin - min) / (max - min)) * 100;
    $: widthPercent = ((rangeMax - rangeMin) / (max - min)) * 100;
</script>


<form on:submit={applyFilters} class="bg-black shadow-md rounded-md p-6 w-72 font-sans text-gray-900 mt-20 ml-5">
    <h2 class="font-extrabold text-lg mb-4 text-white">Filtros</h2>

    <div class="mb-6">
      <label class="block mb-1 font-semibold text-base cursor-pointer text-white">Marca</label>
      <select bind:value={selectedBrand} class="select select-bordered w-full text-sm text-white" style="background-color:#fe0606;">
        <option disabled selected>Seleccione una marca</option>
        <option>Suzuki</option>
        <option>Bajaj</option>
        <option value="">Todas las marcas</option>

      </select>
    </div>

    <div class="mb-6">
      <p class="font-semibold text-base mb-3 text-white">Precio</p>
      <div class="flex justify-between mb-3">


        <div class="w-1/2 pr-2">
          <label class="block text-xs text-white mb-1">Mín</label>
          <input
            type="text"
            class="input input-bordered w-full input-xs text-white"
            style="background-color:#fe0606;"
            readonly
            bind:value={minDisplay}
          />
        </div>


        <div class="w-1/2 pl-2">
          <label class="block text-xs text-white mb-1">Máx</label>
          <input
            type="text"
            class="input input-bordered w-full input-xs text-white"
            style="background-color:#fe0606;"
            readonly
            bind:value={maxDisplay}
          />
        </div>
      </div>

      <div class="relative h-6 mb-6">

        <div
          class="absolute h-1 bg-white rounded-full top-1/2 transform -translate-y-1/2 z-0"
          style="left: {leftPercent}%; width: {widthPercent}%"
        ></div>

        <!--[&::-webkit-slider-thumb]:bg-black-->

        <input
          type="range"
          min={min}
          max={max}
          step="100"
          bind:value={rangeMin}
          on:input={handleMinChange}
          class="absolute w-full h-1 appearance-none bg-transparent pointer-events-none top-1/2 transform -translate-y-1/2 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full       [&::-webkit-slider-thumb]:bg-[var(--thumb-color)]         [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:shadow [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-black [&::-moz-range-thumb]:pointer-events-auto"
         style="--thumb-color: #fe0606;"
          />


        <input
          type="range"
          min={min}
          max={max}
          step="100"
          bind:value={rangeMax}
          on:input={handleMaxChange}
          class="absolute w-full h-1 appearance-none bg-transparent pointer-events-none top-1/2 transform -translate-y-1/2 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[var(--thumb-color)] [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:shadow [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-black [&::-moz-range-thumb]:pointer-events-auto"
          style="--thumb-color: #fe0606;"

          />
      </div>
    </div>

    <!--
    <div class="mb-6">
      <label class="block mb-1 font-semibold text-base cursor-pointer">Tipo</label>
      <select class="select select-bordered w-full text-sm text-gray-700">
        <option disabled selected>Seleccione un tipo</option>
        <option>Tipo 1</option>
        <option>Tipo 2</option>
        <option>Tipo 3</option>
      </select>
    </div>
    -->

    <button type="submit" class="btn btn-neutral bg-white text-black btn-block rounded-full text-sm shadow-lg">
      Filtrar
    </button>
  </form>
