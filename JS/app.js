const searchPhones = () => {
    const input = document.getElementById('search-box');
    const inputValue = input.value;
    // -------error handling----------//
    if(inputValue === typeof 'number' || inputValue==''){
        error.innerText='please search by phone name.';
        input.value='';
    }

    else{
    fetch(`https://openapi.programming-hero.com/api/phones?search=${inputValue}`)
        .then(res => res.json())
        .then(data => phoneDisplay(data.data))

        // error handling
        input.value='';
        error.innerHTML = "";
    } 
}
const phoneDisplay = (phones) =>{
    // console.log(phones)
    const mainDiv = document.getElementById('main')
    phones.forEach(phone =>{
        console.log(phone)
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="col style-cards">
              <div class="card h-100 border-0 p-3">
                <img src="${phone.image}" class="card-img-top w-50 mx-auto" alt="...">
                <div class="card-body text-center">
                  <h5 class="card-title">Brand : ${phone.brand}</h5>
                  <p class="card-text">Model : ${phone.phone_name}</p>
                  <button onclick="phoneDetails('${phone.slug}')" href="#" class="btn btn-primary">Details</button>
                </div>
              </div>
            </div>
        `
        mainDiv.appendChild(div);
    })
}
// -------Details button data lode------------//
const phoneDetails = (phoneId) => {
    // console.log(phoneId)
    const url = (`https://openapi.programming-hero.com/api/phone/${phoneId}`)
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => showDetail(data.data))
}
const showDetail = (info)=>{
    const phoneDetails = document.getElementById('phone-details');
    const div = document.createElement('div');
    div.classList.add('col')
    div.innerHTML = `
    <div class="col style-cards">
          <div class="card h-100 border-0 p-3">
            <img src="${info.image}" class="card-img-top w-50 mx-auto" alt="...">
            <div class="card-body text-center">
              <h5 class="card-title">Brand : ${info.brand}</h5>
              <p class="card-text">Model : ${info.phone_name}</p>
            </div>
          </div>
        </div>
    `
    phoneDetails.appendChild(div);
}


// {brand: 'Apple ', phone_name: 'iPhone 13 mini', slug: 'apple_iphone_13_mini-11104', image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-mini.jpg'}
// brand: "Apple "
// image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-mini.jpg"
// phone_name: "iPhone 13 mini"
// slug: "apple_iphone_13_mini-11104"
// [[Prototype]]: Object

// {status: true, data: Array(15)}
// data: (15) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// status: true
// [[Prototype]]: Object
// meals.forEach(meal =>

/* <div class="card d-flex" style="width: 18rem;">
            <div>
            <img class="card-img-top" src="${phone.image}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${phone.brand}</h5>
                <p class="card-text">${phone.phone_name}</p>
                <button onclick="phoneDetails('${phone.slug}')" href="#" class="btn btn-primary">Details</button>
            </div>
            </div>
        </div> */

   