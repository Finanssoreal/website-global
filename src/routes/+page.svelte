<script>
    import ProductCard from "$lib/components/Card.svelte"
    import products from "$lib/data/destacadas.json"

</script>

<!--bg-contain bg-cover-->

<section>
    <div class="w-full h-75 sm:h-100 md:h-125 bg-cover bg-center grid xl:grid-cols-2 xl:pl-6 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2  place-items-center  "
    style="background-image: url('images/Inicio/FONDO-INICIO-BANNER.png');" >

        <!--Contenedor moto  bg-amber-500 -->
        <div class=" xl:h-90 xl:w-160 xl:mt-20 xl:order-1   lg:h-80 lg:w-140 lg:mt-25 lg:order-1    md:h-57 md:w-100 md:mt-20 md:order-1    sm:h-46 sm:w-80 sm:mt-15 sm:order-1   h-40 w-70 mb-12   order-2">
            <img src="images/Inicio/Moto-Portada.png" alt="Motocicleta ">
        </div>

         <!--Contenedor mensaje  bg-blue-700-->
         <div class=" xl:h-20 xl:w-130 xl:mb-20 xl:ml-10 xl:order-2   lg:h-20 lg:w-105 lg:mb-12 lg:ml-10 lg:order-2   md:h-17 md:w-80 md:mb-10 md:ml-6 md:order-2   sm:h-17 sm:w-65 sm:mb-10 sm:ml-4 sm:order-2   h-17 w-65 mt-10 ml-0 order-1 ">
            <img src="images/Inicio/Texto.png" alt="Domina cada ruta">
         </div>

    </div>
</section>


<section>
    <div
        class="w-full h-50 sm:h-70 md:h-95 lg:h-105 xl:h-125 bg-cover bg-center pt-10 md:pt-15"
        style="background-image: url('images/Recursos/banner-image.png');">
        <!--Contenedor del texto del banner-->
        <div class="flex flex-col">
            <div class="flex flex-row w-full pl-5">
                <p
                    class="text-white font-bold text-sm sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                    DURABILIDAD
                </p>
            </div>

            <div class="flex flex-row w-full pl-5">
                <p
                    class="text-white font-bold text-sm sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                    POTENCIA Y COMODIDAD
                </p>
            </div>

            <div class="flex flex-row w-full pl-5 pt-5 md:pt-10">
                <a
                    href="/catalog"
                    class="text-white text-sm sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl border p-1.5 md:p-3 rounded-4xl">
                    ¡Adquiérela ahora!
                </a>
            </div>
        </div>
    </div>
</section>
<!--bg-primary-->
<section>
    <div class="flex flex-col" style="background-color: #000000;">
        <div class="flex flex-row w-full justify-center mt-5">
            <p
                class="text-white font-bold text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                Nuestras marcas
            </p>
        </div>
        <!--h-40 w-40 sm:h-60 sm:w-60 md:h-80 md:w-80 lg:h-100 lg:w-100 xl:h-120 xl:w-120
h-40 w-40 sm:h-60 sm:w-60 md:h-80 md:w-80 lg:h-100 lg:w-100 xl:h-120 xl:w-120-->
        <div class="flex flex-row w-full justify-around mt-5">
            <div
                class="xl:h-28 xl:w-100 lg:h-25 lg:w-80 md:h-20 md:w-70 sm:h-20 sm:w-60 h-15 w-40">
                <img src="images/Inicio/SUZUKI-LOGO-BLANCO.gif" alt="Suzuki" />
            </div>
            <div
                class="xl:h-28 xl:w-100 lg:h-25 lg:w-80 md:h-20 md:w-70 sm:h-20 sm:w-60 h-15 w-40">
                <img src="images/Inicio/BAJAJ-LOGO-BLANCO.gif" alt="Bajaj" />
            </div>
        </div>
    </div>
</section>

<section>
    <div class="flex flex-row w-full justify-center mt-5 mb-5">
        <p
            class="text-black font-bold text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Encuentra las mejores motocicletas del mercado
        </p>
    </div>

    <!--md:pl-70 md:pr-70 lg:pl:10 lg:pr:10-->
    <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 xl:gap-70 gap-4 pt-4 mb-8 md:pl-30 md:pr-30 lg:pl-50 lg:pr-50 xl:pl-56 xl:pr-70 place-items-center">
        {#each products as product}
            <ProductCard
                brand={product.brand}
                model={product.model}
                price={product.price}
                imageSrc={product.imageSrc}
                alt={product.alt} />
        {/each}
    </div>

    <div class="flex flex-row w-full justify-center mt-15 mb-5">
        <a
            href="/catalog"
            class="text-white text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl border p-1.5 md:p-3 rounded-4xl p-2" style="background-color:#fe0606;">
            Ver Catálogo
        </a>
    </div>
</section>
