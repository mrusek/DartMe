<script lang="ts">
	import { mainStore } from '../stores/stores';
	import Button, { Label } from '@smui/button';
	import JSONSerializer from 'src/services/JSONSerializer';
	import {goto} from '$app/navigation';
	import Game from 'src/models/Game';
	let files: FileList;
	let jsonSerializer = new JSONSerializer<Game>();
	function handleLoadGame(): void {
		if (files) {
			files[0].text().then((json) => {
				let game = jsonSerializer.fromSerialized<Game>(json, Game);
				mainStore.saveGame(game);
				goto('/game');
			});
		}
	}
</script>

<div>
	<input type="file" accept=".json" bind:files />

	{#if files && files[0]}
		<p>
			{files[0].name}
		</p>
		<Button on:click={() => handleLoadGame} touch variant="unelevated">
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
