<script lang="ts">
	import DataTable, { Head, Body, Row, Cell, Label, SortValue } from '@smui/data-table';
	import IconButton from '@smui/icon-button';
	import Item from '@smui/list/src/Item.svelte';
	import type ITableHeader from 'src/interfaces/ITableHeader';
	import type ITableItem from 'src/interfaces/ITableItem';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	let sort: 'id';
	let sortDirection: Lowercase<keyof typeof SortValue> = 'ascending';
	export let items: Array<ITableItem> = [];
	export let headers: Array<ITableHeader> = [];
	function clickEvent(id: string) {
    dispatch('click',id);
  }
	function handleSort() {
		items.sort((a, b) => {
			const [aVal, bVal] = [a[sort], b[sort]][
				sortDirection === 'ascending' ? 'slice' : 'reverse'
			]();
			if (typeof aVal === 'string' && typeof bVal === 'string') {
				return aVal.localeCompare(bVal);
			}
			return Number(aVal) - Number(bVal);
		});
		items = items;
	}
</script>

<DataTable
	sortable
	bind:sort
	bind:sortDirection
	on:SMUIDataTable:sorted={handleSort}
	table$aria-label="Generic data table"
	style="width: 100%;"
>
	<Head>
		<Row>
			{#each headers as header}
				<Cell sortable={header.isSortable} columnId={header.id}>
					{#if header.isSortable}
						<IconButton class="material-icons">arrow_upward</IconButton>
					{/if}
					<Label>{header.label}</Label>
				</Cell>
			{/each}
		</Row>
	</Head>
	<Body>
		{#if items.length < 1}
			<span>No results...yet</span>
		{:else}
			{#each items as item}
				<Row on:click={() => clickEvent(item.id)}>
					{#each Array.from(item.getCols()) as col}
						<Cell>{col[1]}</Cell>
					{/each}
				</Row>
			{/each}
		{/if}
	</Body>
</DataTable>
