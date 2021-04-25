class App{

    cityInput :HTMLInputElement;
    btnAdd :HTMLButtonElement;
    apiKey :string;
    weatherWrapper: HTMLDivElement;
    

    

    constructor(){
        this.cityInput = document.querySelector('.cityInput');
        this.btnAdd = document.querySelector('.btnAdd');
        this.weatherWrapper = document.querySelector('.weatherWrapper');
        this.btnAdd.addEventListener('click', ()=>{this.getInput()});
        this.apiKey = '4c97ef52cb86a6fa1cff027ac4a37671';
        this.loadCityFromLocalStore();
    }



      async getInput(){
       let city = this.cityInput.value;    
       await this.getData(city);
       this.saveData(city);
       

    }

     async getData(city:string): Promise<any>{
        let apiCall = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`;
        let resposnse = await fetch(apiCall);
        let weatherData = await resposnse.json();
        this.displayWeather(weatherData)
    }



    saveData(city:string){
        
        let cityId = localStorage.length;
        localStorage.setItem(`city${cityId}`, city);
       
    }

    loadCityFromLocalStore(){

       for(let i=0;i<localStorage.length;i++){
           let key = `city${i}`;
           this.getData(localStorage[key])
       }

    }

    displayWeather(weatherData){

        let city = weatherData.name;
        let weather = weatherData.weather[0]['main'];
        let temp = Math.round(weatherData.main['temp']);
        let pressure = weatherData.main['pressure'];
        let humidity = weatherData.main['humidity'];

     
  
       let weatherTemplate= `
        <div class="singleWeatherWrapper">
        <h3 class="city">${city}</h3>
        <span class="data">${weather}</span>
        <div class="innerSingleWrapper">
            <div class="wrapperLeft">
                <h6 class="temp">${temp}°C</h6>
            </div>
            <div class="wrapperRight">
                <div class="wrapperUpper">
                    <span class="data">Ciśnienie</span>
                    <span class="data">${pressure}</span>
                </div>
                <div class="wrapperLower">
                    <span class="data">Wilgotność</span>
                    <span class="data">${humidity}</span>
                </div>
            </div>
        </div>
        </div>
        `


        this.weatherWrapper.innerHTML += weatherTemplate;
    }


}




const app = new App();