<script lang="ts">
	import Button, { Label } from '@smui/button';
	let files: FileList;
	/*
Dodać handler do jsona i wrzucenie gry do store'a
    */
</script>

<div>
	<input type="file" accept=".json" bind:files />

	{#if files && files[0]}
		<p>
			{files[0].name}
		</p>
		<Button on:click={() => {}} touch variant="unelevated">
			<Label>Rozpocznij grę!</Label>
		</Button>
	{/if}
    <!--
        Dodać obsługę przycisku rozpocznij grę i ewentualnie komunikat w postacji snacka
        Przekierowanie na widok gry
    -->
    
</div>

<style>
	/*
    Dodać stylowanie do pliku
    */
</style>
