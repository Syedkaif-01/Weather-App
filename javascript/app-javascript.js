const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b153154d18mshd242022aa9d6bb6p142409jsnc466f8507907',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};



const formSubmit=()=>{
    if (input.value != "") {
        get(input.value.toUpperCase());
        input.value = "";
    }
    return false;
}

const get = async (city) => {
    try {
        const response = await fetch(url + city, options);
        const data = await response.json();
        console.log(data);
        set_html(data,city);

    } catch (error) {
        console.error(error);
    }

}




let input = document.querySelector("input");
let submit = document.querySelector(".header-right button");

const set_html = (data,city) => {

    let section = document.querySelector(".weather-app");
    

    let template = `

<h1>Weather For <span>${city}</span></h1>
<div class="weather-main">
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3">
                    <h4 class="my-0 fw-normal">Temperature info</h4>
                </div>

                <div class="card-body" id="card-1">
                    <h1 class="card-title pricing-card-title"><span>${data.temp}</span><small
                            class="text-body-secondary fw-light">°C</small></h1>
                    <ul class="list-unstyled mt-3 mb-4">
                    <li>Temperature : <span>${data.temp}</span>°C</li>
                    <li>Max Temperature : <span>${data.max_temp}</span>°C </li>
                    <li>Min Temperature : <span>${data.min_temp}</span>°C </li>


                    </ul>

                </div>
            </div>
        </div>
        <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3">
                    <h4 class="my-0 fw-normal">Wind Info</h4>
                </div>
                <div class="card-body" id="card-1">
                    <h1 class="card-title pricing-card-title"><span>${data.wind_speed}</span><small
                            class="text-body-secondary fw-light">Km/hr</small></h1>
                    <ul class="list-unstyled mt-3 mb-4">
                    <li>Wind Speed : <span>${data.wind_speed}</span>Km/hr</li>
		  
                    <li>Wind Direction (in Degrees) :    <span>${data.wind_degrees}</span>°C </li>

                    </ul>

                </div>
            </div>
        </div>





        <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3">
                    <h4 class="my-0 fw-normal">Humidity and Sun info</h4>
                </div>

                <div class="card-body" id="card-1">
                    <h1 class="card-title pricing-card-title"><span>${data.humidity}</span><small
                            class="text-body-secondary fw-light">%</small></h1>
                    <ul class="list-unstyled mt-3 mb-4">
                    <li>Humidity :   <span>${data.humidity}</span>%</li>
                    <li>Sunrise :         <span>${data.sunrise}</span> </li>
                    <li>Sunset :          <span>${data.sunset}</span> </li>


                    </ul>

                </div>
            </div>
        </div>





    </div>


</div>
</div>`;
    section.innerHTML = template;
}



