<script context="module" lang="ts">
	import type { LoadInput } from '@sveltejs/kit';
	import type GameView from 'src/models/GameView';
	import fetchConfigPromise from 'src/services/configManager';
	import { mainStore } from '../../stores/stores';

	let model: GameView;
	export async function load(input: LoadInput) {
		fetchConfigPromise().then((config) => {
			mainStore.getGameView(input.params['id'], config.archiveId).then((gameView) => {
				model = gameView;
			});
		});
	}
</script>

<div>
	{#if model}
		<div>
			<span>Data rozegrania</span>
			<span>{model.gameDate.toDateString()}</span>
		</div>
		<div>
			<span>Gracze</span>
			<pre>{model.getPlayersString()}</pre>
		</div>
		<div>
			<span>Zwycięzca</span>
			<span>{model.winner}</span>
		</div>
		<div>
			<span>Liczba rzutów</span>
			<span>{model.scores.get(model.winner)}</span>
		</div>
		<div>
			<span>Wariant gry</span>
			<span>{model.gameType}</span>
		</div>
	{/if}
</div>

<style>
</style>
