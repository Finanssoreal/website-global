<script>
    export let brand = "Marca"
    export let model = "Modelo"
    export let imageSrc = ""
    export let price = "Precio"
    export let alt = "Imagen del producto"
</script>

<a href={`/product/${model}`}>
    <div
        class="flex flex-col bg-white shadow-xl rounded-lg p-3 w-60 transition hover:scale-110">
        <p class="text-lg font-bold" style="color:#1b3984;">{brand}</p>

        <div class="flex flex-row justify-center">
            <div class=" h-40 w-50 flex items-center justify-center">
                <img
                    src={imageSrc}
                    {alt}
                    class="max-h-full max-w-full object-contain" />
            </div>
        </div>

        <div class="flex flex-row justify-end mt-3">
            <p class="text-gray-600">{model}</p>
        </div>

        <div class="flex flex-row justify-end mt-3">
            <p class="text-gray-600">{price}</p>
        </div>
    </div>
</a>
