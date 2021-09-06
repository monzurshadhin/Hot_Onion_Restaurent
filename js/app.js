// global variable 
const cartArray = [];
const cart = localStorage.getItem('cart');
let cartObj ;

if(cart){
cartObj = JSON.parse(cart);
const localCartData = cartObj.cartArray;
for(const data of localCartData){
  cartArray.push(data);
}
console.log(cartArray);
}


// link active
const links = document.getElementsByClassName("item-link");

for (const link of links) {
  link.addEventListener("click", (e) => {
    for (const link of links) {
      link.classList.remove("active");
    }
    e.target.classList.add("active");
  });
}

document.getElementById("break-fast").addEventListener("click", () => {
  // console.log('breakfast clicked')

  const foodItemField = document.getElementById("food-item");
  foodItemField.innerHTML = ``;

  for (let i = 0; i < 6; i++) {
    const price = [6.99, 9.99, 10.99, 8.99, 17.99, 3.99];
    const itemName = [
      "Begel and Cream cheese",
      "Breakfast samdwich",
      "Baked Chicken",
      "Egg Bendict",
      "Toast Crossant",
      "Full Breakfast Egg Toast Brunch",
    ];

    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `<div class="food-card h-100 rounded">
        
        <img
          src="Breakfast/breakfast${i + 1}.png"
          class="card-img-top img-fluid p-5"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title text-center">${itemName[i]}</h5>
          <p class="card-text text-center">Eat Healthy.Stay Healthy</p>
          <h3 class="text-center">$<span>${price[i]}</span></h3>
        </div>
        <div class="d-flex justify-content-center">
             <button
                 id="details-button"
                 onclick="getDetails()"
                 type="button"
                class="btn btn-danger my-3"
                  >
                  Order Now
             </button>
         </div>
      </div>`;
    console.log(div);
    foodItemField.appendChild(div);
  }
});

document.getElementById("lunch").addEventListener("click", () => {
  // console.log('lunch clicked')

  const foodItemField = document.getElementById("food-item");
  foodItemField.innerHTML = ``;

  for (let i = 0; i < 6; i++) {
    const price = [23.99, 9.99, 6.99, 8.99, 15.99, 7.99];
    const itemName = [
      "Healthy Meal Plan",
      "Fried Chicken Bento",
      "Taragon-Rubbed-Salmon",
      "Indian Lunch",
      "Beef Steak",
      "Honey soy Glazed",
    ];

    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `<div class="food-card h-100 rounded">
        
        <img
          src="lunch/lunch${i + 1}.png"
          class="card-img-top img-fluid p-5"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title text-center">${itemName[i]}</h5>
          <p class="card-text text-center">Eat Healthy.Stay Healthy</p>
          <h3 class="text-center">$<span>${price[i]}</span></h3>
        </div>
        <div class="d-flex justify-content-center">
             <button
                 id="details-button"
                 onclick="getDetails()"
                 type="button"
                class="btn btn-danger my-3"
                  >
                  Order Now
             </button>
         </div>
      </div>`;
    // console.log(div);
    foodItemField.appendChild(div);
  }
});

document.getElementById("dinner").addEventListener("click", () => {
  // console.log('dinner clicked')
  const foodItemField = document.getElementById("food-item");
  foodItemField.innerHTML = ``;

  for (let i = 0; i < 6; i++) {
    const price = [9.99, 10.99, 12.99, 8.99, 6.99, 9.99];
    const itemName = [
      "Salmon with Grapefruit and Lenti Salad",
      "Lemon Salmon Piccata",
      "Beef Tenderloin",
      "Freench frice with cheese",
      "Garlic Butter Baked Salmon",
      "Baked Chiken",
    ];

    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `<div  class="food-card h-100 rounded">
        
        <img
          src="Dinner/dinner${i + 1}.png"
          class="card-img-top img-fluid p-5"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title text-center">${itemName[i]}</h5>
          <p class="card-text text-center">Eat Healthy.Stay Healthy</p>
          <h3 class="text-center">$<span>${price[i]}</span></h3>
        </div>
        <div class="d-flex justify-content-center">
             <button
                 id="details-button"
                 onclick="getDetails()"
                 type="button"
                class="btn btn-danger my-3"
                  >
                    Order Now
             </button>
         </div>
      </div>`;
    // console.log(div);
    foodItemField.appendChild(div);
  }
});

// search part

document.getElementById("button-addon2").addEventListener("click", () => {
  const inputField = document.getElementById("input-field");
  const inputValue = inputField.value;
  //   console.log(inputValue);
  inputField.value = "";
  if (inputValue.length == 1) {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${inputValue}`;
    // console.log(url);

    getFetchData(url).then((data) => {
      displayFood(data.meals);
    });
  } else if (inputValue.length > 1) {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;

    getFetchData(url).then((data) => {
      displayFood(data.meals);
    });
  } else {
    window.scrollTo(0, 600);

    const errorMessageField = document.getElementById("food-item");
    errorMessageField.innerHTML = ``;
    errorMessageField.innerHTML = `
      <div class="alert-position alert alert-danger alert-dismissible fade show w-75 mx-auto  mt-5" role="alert">
      <strong>Please Enter Value!</strong> 
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
     </div>
          `;
  }
});

// fetch data function
const getFetchData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

// display food
const displayFood = (data) => {
  window.scrollTo(0, 600);

  console.log(data);
  if (data !== null) {
    const foodItemField = document.getElementById("food-item");
    foodItemField.innerHTML = ``;

    data.forEach((element) => {
      const div = document.createElement("div");
      div.classList.add("col");
      div.innerHTML = `<div class="food-card h-100 rounded">
        
        <img
          src="${element.strMealThumb}"
          class="card-img-top img-fluid "
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title text-center">${element.strMeal}</h5>
          <h6 class="text-center"><b>Category: </b>${element.strCategory}</h6>
          
          <p class="card-text text-center">Eat Healthy.Stay Healthy</p>
        </div>
        <div class="d-flex justify-content-center">
        <button
        id="details-button"
        
        type="button"
        class="btn btn-danger my-3"
        data-bs-toggle="modal"
        data-bs-target="#detailsModal"
        onclick="getDetails('${element.idMeal}')"
      >
        See Details
      </button>
      </div>
      </div>`;
      // console.log(div);
      foodItemField.appendChild(div);
    });
  } else {
    console.log("No Items Found");
    const errorMessageField = document.getElementById("food-item");
    errorMessageField.innerHTML = ``;
    errorMessageField.innerHTML = `
      <div class="alert-position alert alert-danger alert-dismissible fade show w-75 mx-auto  mt-5" role="alert">
      <strong>No Items Found!</strong> 
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
     </div>
          `;
  }
};

// get details
const getDetails = (mealID) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`;

  console.log(url);

  getFetchData(url).then((data) => {
    displayDetails(data.meals[0]);
  });
};

// display details
const displayDetails = (data) => {
  const modalBody = document.getElementById('modal-body');
  modalBody.innerHTML=``;
  modalBody.innerHTML =`
  <div class="modal-header">
                  <h3 class="modal-title" id="exampleModalLabel">
                    <b>Food Details</b>
                  </h3>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <div class=" h-100 rounded ">
        
        <img
          src="${data.strMealThumb}"
          class="card-img-top img-fluid "
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title text-center">${data.strMeal}</h5>
          <h6 class="text-center"><b>Category: </b>${data.strCategory}</h6>
          
          <p class="card-text text-center">Eat Healthy.Stay Healthy</p>
        </div>
      
      </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" id="add-to-cart"
                   class="btn btn-danger" onclick="addToCart(${data.idMeal})">
                    Add to cart
                  </button>
                </div>
  `;


};

// get locat storage data 
const getCart = () =>{
  const cart = localStorage.getItem('cart');
  let cartObj ;
  if(cart){
      cartObj = JSON.parse(cart);
     
  }
  else{
      cartObj = {};

  }
  return cartObj;
}

// add to cart button 
const addToCart = (mealID) =>{
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`;

  console.log(url);

  getFetchData(url).then((data) => {
    const {strMealThumb,strMeal,idMeal} = data.meals[0];
    // console.log(data.meals[0]);
    const obj = {strMealThumb,strMeal,idMeal};
    console.log(obj);
    obj.quantity = 1;
    // console.log(obj);
    const isAlreadyAdded = cartArray.find(e=> e.idMeal===obj.idMeal);
    if(isAlreadyAdded!== undefined){
      isAlreadyAdded.quantity = isAlreadyAdded.quantity+1;

    }
    else{
      cartArray.push(obj);

    }

 

    
  // add to cart local storage 

    let cart = getCart();
    console.log(cartArray);
   
    cart = {cartArray}
    
     console.log(cart);
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringify);

setTotalItem();
   
  });



 
}
const setTotalItem = () =>
{
   // set total number of item add to cart 

   let cart = getCart();
   const localData= cart.cartArray
   let item=0;
   for(const data in localData){
     item++;
     console.log(item);
   }
   const totalOrderField = document.getElementById("total-item");
   
   totalOrderField.innerText=item;
}
setTotalItem();
  


// cart modal 
document.getElementById('cart').addEventListener('click',()=>{
  const cartModal = document.getElementById('cart-modal');
  cartModal.innerHTML= ``;
  console.log('cart click');

  const cart = getCart();
  const localData= cart.cartArray
  for(const data in localData){
    console.log(localData[data]);

    console.log(data);
    const cartModal = document.getElementById('cart-modal');
    const div = document.createElement('div');
    div.classList.add('card','mb-3');
    div.style.maxWidth='540px';
    div.innerHTML=`
    <div class="row g-0">
    <div class="col-md-4">
      <img src="${localData[data].strMealThumb}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${localData[data].strMeal}</h5>
        <p>Quantity:<span id="quantity">${localData[data].quantity}</span></p>
      </div>
    </div>
  </div>
    `;
    cartModal.appendChild(div);


  }
  
});

// place order 
document.getElementById('order').addEventListener('click',()=>{
  document.getElementById('cart-modal').textContent='';
  localStorage.removeItem('cart');
  setTotalItem();
})