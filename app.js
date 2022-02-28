const loadPhones=()=>{
    const searchField=document.getElementById('search-phone');
    const searchPhone=searchField.value;
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchPhone}`)
    .then(res=>res.json())
    .then(data=>displayPhones(data.data));
}
const displayPhones= phones =>{
    console.log(phones);
   
    phones.forEach(phone=>{
        const searchResult= document.getElementById("search-result");
        const div=document.createElement('div');
        div.innerHTML=`
  <div class="card">
    <img class="w-25" src="${phone.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${phone.brand} </h5>
      <p class="card-text">${phone.phone_name}</p>
      <button onclick=loadDetails('${phone.slug}') class="btn-success">See details</button>
    </div>
        `;
        searchResult.appendChild(div);
    })
}
const loadDetails=(info)=>{
    fetch(`https://openapi.programming-hero.com/api/phone/${info}`)
    .then(res=>res.json())
    .then(data=>console.log(info))
}