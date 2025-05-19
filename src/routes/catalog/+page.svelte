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
    <div class="flex flex-row w-full justify-center mt-5 mb-5">
        <p
            class="text-black font-bold text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Encuentra las mejores motocicletas del mercado
        </p>
    </div>
    <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 pt-4 mb-8 md:pl-30 md:pr-30  lg:pl-50 lg:pr-50 xl:pl-70 xl:pr-70  place-items-center">
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


<section>

</section>
