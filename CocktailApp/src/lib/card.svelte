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
    
    height: auto;
    border-radius: 20px;
    
}

.card{
    border-radius: 20px;
    text-align: center;
    position: relative;
    transition: transform .2s;
    box-shadow: 10px 10px 5px 5px rgb(219, 219, 219);
    animation: fadeInAnimation ease 3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    margin-top: 40px;
}

.card-title{
    z-index: 100;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    background-color: rgba(41, 41, 41, 0.343);
    padding: 5px;
    border-radius: 20px;
}
@keyframes fadeInAnimation {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
     }
    }

</style>