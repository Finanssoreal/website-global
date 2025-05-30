<script>
	import { createEventDispatcher } from "svelte";
	export let imageSrc = "";

	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch("select", { imageSrc });
	}
</script>

<div
	class="bg-white w-30 h-30 shadow-xl flex flex-column justify-center pt-4 pb-4 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200"
	on:click={handleClick}>
	<img src={imageSrc} alt="" class="mx-auto max-h-full object-contain" />
</div>
