const loadPhones=()=>{
    const searchField=document.getElementById('search-phone');
    searchPhone=searchField.value;
    fetch(`https://openapi.programming-hero.com/api/phones?${searchPhone}`)
    .then(res=>res.json())
    .then(data=>console.log(data));
}