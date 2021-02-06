fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
  .then((res) => res.json())
  .then(data => {
      const foods = data.meals[0]
     // console.log(food.strIngredient);
  })
  const displayFoods = 



