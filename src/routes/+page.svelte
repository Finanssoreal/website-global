<script>
    import ProductCard from "$lib/components/Card.svelte"

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

<section>
    <div class="flex flex-col bg-primary">
        <div class="flex flex-row w-full justify-center mt-5">
            <p
                class="text-black font-bold text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                Nuestras marcas
            </p>
        </div>

        <div class="flex flex-row w-full justify-around mt-5">
            <div
                class="h-40 w-40 sm:h-60 sm:w-60 md:h-80 md:w-80 lg:h-100 lg:w-100 xl:h-120 xl:w-120">
                <img src="images/Inicio/logo_suzuki.png" alt="Suzuki" />
            </div>
            <div
                class="h-40 w-40 sm:h-60 sm:w-60 md:h-80 md:w-80 lg:h-100 lg:w-100 xl:h-120 xl:w-120">
                <img src="images/Inicio/Bajaj-Logo.png" alt="Bajaj" />
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
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 pt-4 mb-8 md:pl-30 md:pr-30 lg:pl-50 lg:pr-50 xl:pl-70 xl:pr-70 place-items-center">
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
