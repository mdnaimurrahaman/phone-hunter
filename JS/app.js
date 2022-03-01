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
        .then(data => console.log(data.data))

        // error handling
        input.value='';
        error.innerHTML = "";
    }
      
}


// {status: true, data: Array(15)}
// data: (15) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// status: true
// [[Prototype]]: Object