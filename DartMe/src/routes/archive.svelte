<script lang="ts" context="module">
	import Table from 'src/components/table.svelte';
	import type ITableHeader from 'src/interfaces/ITableHeader';
	import type Archive from 'src/models/Archive';
	import fetchConfigPromise from 'src/services/configManager';
	import { mainStore } from 'src/stores/stores';

	let items: Archive;
	let handleClick = function (event: CustomEvent<string>) {
		console.log(`clicked: ${event.detail}`);
	};
	export async function load() {
		fetchConfigPromise().then((config) => {
			mainStore.getArchive(config.archiveId).then((archive) => {
				items = archive;
			});
		});
	}
	let headers: ITableHeader[] = [
		{ id: 'id', label: 'ID', isSortable: true },
		{ id: 'gameDate', label: 'Data meczu', isSortable: true },
		{ id: 'playerNames', label: 'Gracze', isSortable: false },
		{ id: 'winner', label: 'Zwycięzca', isSortable: true },
		{ id: 'gameVersion', label: 'Wersja gry', isSortable: true },
		{ id: 'throws', label: 'Liczba oddanych rzutów', isSortable: true }
	];
</script>

<div>
	{#if items}
		<Table on:click={handleClick} {headers} items={items.games} />
	{/if}
</div>

<style>
</style>
