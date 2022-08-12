const url = "https://api.spoonacular.com/recipes/716429/information?apiKey=5f51aa6b837e450d9e17ee709b954584"

fetch(url)
 .then(r => r.json())
 .then(data => console.log(data))