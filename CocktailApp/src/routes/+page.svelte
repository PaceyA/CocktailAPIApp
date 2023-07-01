<script lang="ts">
    import type {drinklist} from "../lib/drink.model"
    import Card from "../lib/card.svelte";

        async function callApi() {
        drinks = [];
         try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${isAlcholic}`);
      const data = await response.json();

      for(let i = 0; i < 5; i++){
        let rand = await Math.floor(Math.random()*data.drinks.length)
        drinks = [...drinks, data.drinks[rand]]
      }
      console.log(drinks); 
    } catch (error) {
      console.error(error);
    }
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

<h1>Random Cocktails</h1>
<button on:click={callApi}>Generate Cocktails</button>
<button on:click={toggleAlcohol}>Alcoholic: {isAlcholic == "Alcoholic"}</button>
{#each drinks as drink}
    <Card drinkName={drink.strDrink} drinkImage={drink.strDrinkThumb}/>
{/each}