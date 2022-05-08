<script lang=ts>
import Table from "src/components/table.svelte";
import type ITableHeader from "src/interfaces/ITableHeader";
import type Archive from "src/models/Archive";

     let handleClick = function(event:CustomEvent<string>){
         console.log(`clicked: ${event.detail}`);
     }
     let headers:ITableHeader[] = [
        {id: 'id', label: 'ID', isSortable: true},
        {id: 'gameDate', label: 'Data meczu', isSortable: true},
        {id: 'playerNames', label: 'Gracze', isSortable: false},
        {id: 'winner', label: 'Zwycięzca', isSortable: true},
        {id: 'gameVersion', label: 'Wersja gry', isSortable: true},
        {id: 'throws', label: 'Liczba oddanych rzutów', isSortable: true}

    ];

     let items: Archive;
</script>
<div>
    <Table
    on:click={handleClick}
    headers = {headers}
    items = {items.games}
    
    />
</div>
<style>

</style>