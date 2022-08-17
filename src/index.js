const url = "https://api.spoonacular.com/recipes/716429/information?apiKey=5f51aa6b837e450d9e17ee709b954584"
const recipeList = document.getElementById("recipeList")
const form = document.getElementById("abc")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const value = e.target.calorie.value
    fetch(`https://api.spoonacular.com/recipes/findByNutrients?maxCalories=${value}&apiKey=5e710ca264ed4c81a06f3bd19998d74c`)
        .then(r => r.json())
        .then(data => renderList(data))

}) 

function renderList(data) {
    recipeList.innerHTML = ''
    data.forEach(recipe => {
        console.log(recipe)
        const recipeName = recipe.title
        const pTag = document.createElement("p")
        pTag.textContent = recipeName
        recipeList.append(pTag)
    })
}



