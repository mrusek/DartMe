<script lang="ts">
	import Textfield from '@smui/textfield';
	import Checkbox from '@smui/checkbox';
	import Icon from '@smui/textfield/icon';
	import HelperText from '@smui/textfield/helper-text';
	import Slider from '@smui/slider';
	import Radio from '@smui/radio';
	import FormField from '@smui/form-field';
	import Button, { Label } from '@smui/button';

	let newGameName: string = '';
	let gameVariants: Array<string> = ['301', '501'];
	let isRankedGame: boolean = true;
	let selectedGameVariant: string = '';
	let isStartGameDisabled: boolean = true;
	let playerNumbers: number = 1;
	let players: Array<string> = Array<string>(playerNumbers);
</script>

<div>
	<div>
		<Textfield class="shaped-filled" variant="filled" bind:value={newGameName} label="Nazwa gry" />
		<div class="radio-demo">
			{#each gameVariants as option}
				<FormField>
					<Radio bind:group={selectedGameVariant} value={option} touch />
					<span slot="label">{option}</span>
				</FormField>
			{/each}
		</div>
		<FormField>
			<Checkbox bind:isRankedGame touch />
			<span slot="label">Gra rankingowa</span>
		</FormField>
		<FormField align="end" style="display:flex">
			<Slider
			style="flex-grow: 1;"
			bind:value={playerNumbers}
			min={1}
			max={12}
			step={1}
			discrete
			tickMarks
			input$aria-label="Liczba graczy"
		/>
		<span slot="label">Liczba graczy</span>
		</FormField>
		{#each Array(playerNumbers) as _, index}
			<Textfield
				class="shaped-filled"
				variant="filled"
				bind:value={newGameName}
				label={`Gracz numer ${index+1}`}
			/>
		{/each}
		<Button on:click={() => {}} bind:disabled={isStartGameDisabled} touch variant="unelevated">
			<Label>Rozpocznij grę!</Label>
		</Button>
	</div>
</div>

<style>
	* :global(.shaped-filled) {
		border-radius: 16px 16px 0 0;
	}
	.radio-demo > :global(*) {
		margin: 0 0.2em;
	}

		/*
    Dodać stylowanie do pliku
    */
</style>
