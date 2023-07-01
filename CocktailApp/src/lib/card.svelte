<script lang="ts">

export let drinkName : string;
export let drinkImage : string;

</script>

<div class="card">
    <p>{drinkName}</p>
<img src="{drinkImage}">

</div>

<style>
.card{
    
    border: 1px solid black;
    margin: 1px;
    width: 40%;
    text-align: center;
    border-radius: 25px;
}
.card:hover{
    background-color: rgb(246, 246, 246);
    cursor: pointer;
}
img{
    height: 100px;
    width: auto;
}
</style>