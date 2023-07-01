<script lang="ts">
    import type {drinkrecipe} from "../../lib/recipe.model";
    export let data;
    console.log(data.drink.drinks[0])

    let drink : drinkrecipe =
    {
        strDrink : data.drink.drinks[0].strDrink,
        idDrink : data.drink.drinks[0].idDrink,
        strInstructions : data.drink.drinks[0].strInstructions
    }
</script>

<a href="/">Back</a>

<h1>{drink.strDrink}</h1>
<h2>Instructions</h2>
<p>{drink.strInstructions}</p>