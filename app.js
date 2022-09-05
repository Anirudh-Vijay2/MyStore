fetch('https://fakestoreapi.com/products/').then((data)=>{
    return data.json();
}).then((final)=>{

    let data1="";
    final.map((values)=>{
        data1+=`<div class="card" style="width: 18rem;">
        <img src="${values.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${values.title}</h5>
          <p class="card-text">${values.description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">$ ${values.price}</li>
          <li class="list-group-item">${values.category}</li>
          <li class="list-group-item">${values.rating.rate}   ${values.rating.count}</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Buy Now</a>
          <a href="#" class="card-link">Add to cart</a>
        </div>
      </div>`;
   });
   document.getElementById('main').innerHTML=data1

}).catch((err)=>{
    console.log(err)
})