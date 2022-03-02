const error = document.getElementById('error');
const searchPhones = () => {
    const input = document.getElementById('search-box');
    const inputValue = input.value;
    // -------error handling----------//
    if(inputValue === typeof 'number' || inputValue==''){
        error.innerText='please search by phone name...!';
        input.value='';
        mainDiv.innerHTML="";
    }
    else if(inputValue<0){
      error.innerText='please only search by phone name...!';
    }
    else{
    fetch(`https://openapi.programming-hero.com/api/phones?search=${inputValue}`)
        .then(res => res.json())
        .then(data =>{
          // -------error handling----------//
          if(data.data.length===0){
            error.innerText="No result found...!"
            // display clear
            document.getElementById('main').innerHTML='';
            document.getElementById('phone-details').innerHTML='';
          }
          else{
            phoneDisplay(data.data.slice(0,20))
            error.innerText = "";
          }
        })
        // display clear
        input.value='';
        error.innerHTML = "";
    } 
}
const phoneDisplay = (phones) =>{
    const mainDiv = document.getElementById('main');
    // display clear
    document.getElementById('main').innerHTML='';
    document.getElementById('phone-details').innerHTML='';
    phones.forEach(phone =>{
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="col style-cards">
              <div class="card h-100 border-0 p-3">
                <img src="${phone.image}" class="card-img-top w-50 mx-auto" alt="...">
                <div class="card-body text-center">
                  <h5 class="card-title">Brand : ${phone.brand}</h5>
                  <p class="card-text">Model : ${phone.phone_name}</p>
                  <button onclick="phoneDetails('${phone.slug}')" href="#" class="btn-slide">Details</button>
                </div>
              </div>
            </div>
        `
        mainDiv.appendChild(div);
    })
}
// -------Details button data lode------------//
const phoneDetails = (phoneId) => {
    const url = (`https://openapi.programming-hero.com/api/phone/${phoneId}`)
    fetch(url)
    .then(res => res.json())
    .then(data => showDetail(data.data))
}
const showDetail = (info)=>{
  // console.log(info);
    const phoneDetails = document.getElementById('phone-details');
    const div = document.createElement('div');
    div.classList.add('col')
    phoneDetails.innerHTML="";
    div.innerHTML = `
        <div class="col style-cards">
          <div class="card h-100 border-0 p-3">
            <img src="${info.image}" class="card-img-top w-50 mx-auto" alt="...">
            <div class="card-body text-center">
              <h2 class="card-title fw-bold"> ${info.brand}</h2>
              <h5 class="card-text fw-bold"> ${info.name} Full Specifications</h5>
              <p class="card-text"> <span class="">First Release:</span> ${info.releaseDate? info.releaseDate:"no releas date found"}</p>
            </div>
            <div class="p-4 info-bg mb-3">
            <h5 class="text-center card-title fw-bold mb-4">MAIN FEATURES</h5>
            <p class="card-text"> <span class="fw-bold">Chip Set :</span> ${info.mainFeatures.chipSet }</p>
            <p class="card-text"> <span class="fw-bold">Display Size :</span> ${info.mainFeatures.displaySize }</p>
            <p class="card-text"> <span class="fw-bold">Memory :</span> ${info.mainFeatures.memory }</p>
            <p class="card-text"> <span class="fw-bold">Storage :</span> ${info.mainFeatures.storage }</p>
            </div>
            <div class="info-bg mb-3 p-4">
            <p class="card-text"> <span class="fw-bold">Sensors :</span> ${info.mainFeatures.sensors}</p>
            </div>
            <div class="p-4 info-bg">
            <h5 class="text-center card-title fw-bold mb-4">OTHERS INFORMATION</h5>
            <p class="card-text"> <span class="fw-bold">GPS :</span> ${info ?.others ?.GPS ? info.others.GPS:"Info not found"}</p>
            <p class="card-text"> <span class="fw-bold">Bluetooth :</span> ${info ?.others ?.Bluetooth ? info.others.Bluetooth:"Info not found" }</p>
            <p class="card-text"> <span class="fw-bold">WLAN :</span> ${info ?.others ?.WLAN ? info.others.WLAN:"Info not found" }</p>
            <p class="card-text"> <span class="fw-bold">NFC :</span> ${info ?.others ?.NFC ? info.others.NFC: "Info not found" }</p>
            <p class="card-text"> <span class="fw-bold">Radio :</span> ${info ?.others ?.Radio ? info.others.Radio : 'Info not found'}</p>
            </div>
          </div>
        </div>
    `
    phoneDetails.appendChild(div);
}
