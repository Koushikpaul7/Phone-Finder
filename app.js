const loadPhones=()=>{
    document.getElementById("search-result").innerHTML='';
    const searchField=document.getElementById('search-phone');
    const searchPhone=searchField.value;
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchPhone}`)
    
    .then(res=>res.json())
    .then(data=>displayPhones(data.data));
    searchField.value='';
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
    .then(data=>dispayDetails(data.data))
}
const dispayDetails=data=>{
    console.log(data);
    document.getElementById("phone-details").innerHTML='';
    const phoneDetails=document.getElementById("phone-details");
    const div=document.createElement('div');
    div.innerHTML=`
    <div class="card w-50 mx-auto g-4 mb-4 p-3">
    <img class="w-25 mx-auto" src="${data.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Brand:${data.brand}</h5>
      <h5 class="card-title">Name:${data.name}</h5>
      <p class="card-text">Release Date:${data?.releaseDate}</p>
      <p class="card-text">Display:${data.mainFeatures.displaySize}</p>
      <p class="card-text"><strong>Memory:</strong>${data.mainFeatures.memory}</p>
      <p class="card-text">Chipset:${data.mainFeatures.chipSet}</p>
      <p class="card-text">Others:
      ${data?.others?.Bluetooth}, ${data?.others?.GPS},${data?.others?.WLAN}</p>
      <p class="card-text">Sensors:${data.mainFeatures.sensors[0]},${data.mainFeatures.sensors[1]},${data.mainFeatures.sensors[2]},${data.mainFeatures.sensors[3]},${data.mainFeatures.sensors[4]},${data.mainFeatures.sensors[5]}</p>
    </div>
    </div>
    `;
    phoneDetails.appendChild(div);
}