
export const load = ({fetch, params}) => 
{



    const fetchDrink = async (name:string) => {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
        const data = await response.json();
        return data
    }

    return {
        drink: fetchDrink(params.drinkname)
    }
}