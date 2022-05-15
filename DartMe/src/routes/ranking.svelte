<script lang="ts" context="module">
	import Table from 'src/components/table.svelte';
	import type ITableHeader from 'src/interfaces/ITableHeader';
	import type Ranking from 'src/models/Ranking';
	import fetchConfigPromise from 'src/services/configManager';
	import { mainStore } from 'src/stores/stores';

	let items: Ranking;
	export async function load() {
		fetchConfigPromise().then((config) => {
			mainStore.getRanking(config.rankingId).then((ranking) => {
				items = ranking;
			});
		});
	}
	let headers: ITableHeader[] = [
		{ id: 'id', label: 'ID', isSortable: true },
		{ id: 'name', label: 'Gracz', isSortable: true },
		{ id: 'gamesPlayed', label: 'Rozegrane gry', isSortable: true },
		{ id: 'wins', label: 'Zwycięstwa', isSortable: true },
		{ id: 'losses', label: 'Porażki', isSortable: true },
		{ id: 'lastGamePlayed', label: 'Ostatnia rozegrana gra', isSortable: true }
	];
</script>

<div>
	{#if items}
		<Table {headers} items={items.players} />
	{/if}
</div>

<style>
</style>