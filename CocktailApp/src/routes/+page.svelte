<script lang="ts">
    import type {drinklist} from "../lib/drink.model"
    import Card from "../lib/card.svelte";

        async function callApi() {
        drinks = [];
         try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic');
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

    let drinks : drinklist[] = [];
    
</script>

<h1>Random Cocktail</h1>
<button on:click={callApi}>Generate Cocktails</button>
{#each drinks as drink}
    <Card drinkName={drink.strDrink} drinkImage={drink.strDrinkThumb}/>
{/each}