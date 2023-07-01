<script lang="ts">

export let drinkName : string;
export let drinkImage : string;

</script>

<div id="card">
<p>{drinkName}</p>
<img src="{drinkImage}">
</div>

<style>
#card{
    border: 1px solid black;
    margin: 1px;
    text-align: center;
}
#card:hover{
    background-color: aqua;
}
img{
    height: 100px;
    width: auto;
}
</style>