<script lang=ts>
import Table from "src/components/table.svelte";

     let handleClick = function(id:string){
         console.log(`clicked: ${id}`);
     }
     let headers = new Array<
</script>
<div>
    <Table
    on:click={handleClick}
    headers = 
    />
</div>
<style>

</style>