const getPizza = async () => {
  // طلب البيانات
  const response = await fetch(
    "https://forkify-api.herokuapp.com/api/search?q=pizza"
  );
  const data = await response.json();

  const count = data.count;
  const recipes = data.recipes;

  console.log(recipes);

  const result = recipes
    .map((recipe) => {
      return `
             <div class="col-md-4 ">
                    <div class="card mb-3">
                        <img src=${recipe.image_url} class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${recipe.title}</h5>
                            <p class="card-text">${recipe.publisher}</p>
                            <a class=" btn btn-dark " href="./details.html?pizzaId=${recipe.recipe_id}"> Details</a>
                        </div>
                    </div>
              </div>
        
        `;
    })
    .join("");

  document.querySelector(".recipes .row").innerHTML = result;
};

getPizza();
