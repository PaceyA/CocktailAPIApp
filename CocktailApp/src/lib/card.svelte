<script lang="ts">

export let drinkName : string;
export let drinkImage : string;

</script>

<div class="card" style="width: 20rem;">
    <img class="card-img-top" src="{drinkImage}" alt="Card image cap">
    <h1 class="card-title">{drinkName}</h1> 
  </div>




<style>

.card:hover{
    cursor: pointer;
    transform: scale(1.1);
}

.card-img-top{
    width: 100%;
    height: auto;
    border-radius: 20px;
    
}

.card{
    border-radius: 20px;
    text-align: center;
    position: relative;
    transition: transform .2s;
    box-shadow: 10px 10px 5px 5px rgb(219, 219, 219);
}

.card-title{
    z-index: 100;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
}

</style>