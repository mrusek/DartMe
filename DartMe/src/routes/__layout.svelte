<script lang="ts">
	import Drawer, { AppContent, Content } from '@smui/drawer';
	import List, { Item, Text } from '@smui/list';

	let clicked = 'nothing yet';
</script>

<header />
<div class="drawer-container">
	<Drawer>
		<Content>
			<List>
				<Item href="/newGame" on:click={() => (clicked = 'NewGame')}>
					<Text>New Game</Text>
				</Item>
				<Item href="/loadGame" on:click={() => (clicked = 'LoadGame')}>
					<Text>Load Game</Text>
				</Item>
				<Item href="/archive" on:click={() => (clicked = 'Archive')}>
					<Text>Archive</Text>
				</Item>
				<Item href="/gameView" on:click={() => (clicked = 'GameView')}>
					<Text>Game View</Text>
				</Item>
			</List>
		</Content>
	</Drawer>

	<AppContent class="app-content">
		<main class="main-content">
			<slot />
		</main>
	</AppContent>
</div>
<footer>
	<p>Copyright 2022 Mateusz Rusek</p>
</footer>

<style>
	main {
		max-width: 960px;
		margin: 20px auto;
	}
	footer {
		text-align: center;
		position: fixed;
		bottom: 0;
		z-index: 99;
	}

	.drawer-container {
		display: flex;
		overflow: hidden;
		position: fixed;
		z-index: 99;
		width: 100vw;
		height: 100vh;
		top: 0;
		bottom: 0;
		left: 0;
	}

	* :global(.app-content) {
		flex: auto;
		overflow: auto;
		position: relative;
		flex-grow: 1;
	}

	.main-content {
		overflow: auto;
		height: 100vh;
		box-sizing: border-box;
	}
</style>
