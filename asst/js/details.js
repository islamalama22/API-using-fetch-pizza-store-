const getDetails=async()=>{
 
    // this  will  get  from  the  url  all  the  para after  ?  
    const params= new URLSearchParams(window.location.search);
    //  stor  the  para  in  var 
    const pizzaId=params.get("pizzaId");


    const response=await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${pizzaId}`);
    const data=await response.json();


    console.log(data);


    //  hear  the  data  is  cons for  each  
    document.querySelector(".title").textContent=data.recipe.title;
    document.querySelector(".recipes_img").setAttribute("src",data.recipe.image_url);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //  here  the  data  its  array  must  disply  from  loop 
    const ingredients=data.recipe.ingredients;
    
    const result=ingredients.map((one_ingredi)=>{
        return`
        <li class="list-group-item">${one_ingredi}</li>
`
    }).join("");

    document.querySelector(".ingredients").innerHTML=result;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    document.querySelector(".publisher").textContent=data.recipe.publisher;
    document.querySelector(".publisher_url").setAttribute("href",data.recipe.publisher_url);




}

getDetails();