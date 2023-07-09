<script lang="ts">
    import type {drinklist} from "../lib/drink.model"
    import Card from "../lib/card.svelte";

        async function callApi() {
        drinks = [];
       

         try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${isAlcholic}`);
      const data = await response.json();

      for(let i = 0; i < 5; i++){
        
        populateArray(data)
      }
  
    } catch (error) {
      console.error(error);
    }
    
    }

    async function populateArray(data : any)
    {
        let rand = await Math.floor(Math.random()*data.drinks.length)
        drinks = [...drinks, data.drinks[rand]]
    }

    function toggleAlcohol()
    {
        if(isAlcholic == "Alcoholic")
        {
            isAlcholic = "Non_Alcoholic"
        }
        else{
            isAlcholic = "Alcoholic"
        }
    }

    let drinks : drinklist[] = [];
    let isAlcholic : string = "Alcoholic";
    
</script>
<body>
<div class="header">
    <div class="mainText2">
<h1>Random Cocktails</h1>
<button  on:click={callApi}>Generate Cocktails</button>
<button on:click={toggleAlcohol}>{isAlcholic === "Alcoholic" ? 'Alcholic' : 'Non-Alcholic'}</button>
    </div>
</div>

<div id="conatinerBody">
<div class="drinkscontainer">
{#each drinks as drink}
<a href="/{drink.strDrink}">
    <Card drinkName={drink.strDrink} drinkImage={drink.strDrinkThumb}/>
</a>
{/each}
</div>
</div>
</body>
<style>
    .drinkscontainer{
        display: flex;
        flex-wrap: wrap;
       justify-content: space-evenly;
       align-items: center;
       
        
    }
    #containerBody{
        height: 100vh;
    }

    .header{
        display: flex;
        justify-content: center;
    }

    button{
        background-color: white;
        border-radius: 5px;
        padding: 2%;
    }

    button:hover{
        background-color: rgb(236, 236, 236);
    }
    
   @media only screen and (max-width: 600px) {
  .drinkscontainer{
    flex-direction: column;
  }
  }

body{
    height: 100vh;
    width: 100vw;
    
}
</style>