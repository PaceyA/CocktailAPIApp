
<script lang="ts">
    
    import type {drinkrecipe} from "../../lib/recipe.model";
    export let data;
    let drinkData = data.drink.drinks[0];
    console.log(drinkData)

    let instructions : string[] = drinkData.strInstructions.split(/\./)
    let drink : drinkrecipe =
    {
        strDrink : drinkData.strDrink,
        idDrink : drinkData.idDrink,
        strInstructions :  [...instructions.slice(0,instructions.length-1)],
        //Surely better way of doing this
        strIngredients : [drinkData.strIngredient1,drinkData.strIngredient2,drinkData.strIngredient3,drinkData.strIngredient4,drinkData.strIngredient5,
        drinkData.strIngredient6,drinkData.strIngredient7,drinkData.strIngredient8,drinkData.strIngredient9,drinkData.strIngredient10,drinkData.strIngredient11,
        drinkData.strIngredient12,drinkData.strIngredient13,drinkData.strIngredient14,drinkData.strIngredient15],
        //Again, surely cleaner way
        strMeasures : [drinkData.strMeasure1,drinkData.strMeasure2,drinkData.strMeasure3,drinkData.strMeasure4,drinkData.strMeasure5,drinkData.strMeasure6,drinkData.strMeasure7,
        drinkData.strMeasure8,drinkData.strMeasure9,drinkData.strMeasure10,drinkData.strMeasure11,drinkData.strMeasure12,drinkData.strMeasure13,drinkData.strMeasure14,
        drinkData.strMeasure15]
    }
    
    
</script>
<body>
<div id="containerMain">
    <a href="/">Back</a>
    <hr>
    <h1>{drink.strDrink}</h1>

<div class="containerBody">

    <img src="{drinkData.strDrinkThumb}" alt="drink" style="margin: 20px;"/>
<div style="margin: 20px;">
<h2>Ingredients</h2>
{#each drink.strIngredients as ingredient,i}
    {#if ingredient != null && drink.strMeasures[i] != null}
    <p>{ingredient} - {drink.strMeasures[i]}</p>    
    {:else if ingredient != null}
    <p>{ingredient}</p>
    {/if}

    
{/each}
<h2>Instructions</h2>
<ol>
{#each drink.strInstructions as instruction,i}
    <li>{instruction}.</li>
{/each}
</ol>
</div>
</div>
</div>

</body>

<style>
    img{
        height: 300px;
        width: auto;
        border-radius: 25px;
    }

    #containerMain{
        
       margin: 20px;
       padding: 20px;
       border-radius: 20px;
       background-color: rgb(247, 247, 247);
       height: 75%;
       width: 60%;
    }

   .containerBody{
    display: flex;
    justify-content: flex-start;
   }

   @media only screen and (max-width: 800px) {
  .containerBody{
    flex-direction: column;
  }
  body{
    align-items: flex-start;    
  }

  img{
    width: 300px;
  }
  #containerMain{
    width: 100%;
    height: 100%;
  }
  }

   body{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: rgb(229, 229, 229);
    
   }

    button{
        background-color: white;
        border-radius: 5px;
       
    }

    h1{
        margin-left: 20px;
        padding-left: 10px;
    }
</style>