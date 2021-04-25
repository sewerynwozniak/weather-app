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
  
    }



      async getInput(){
          console.log('input działa');
       let city = this.cityInput.value;    
       await this.getData(city);
       this.saveData(city)

    }

     async getData(city:string): Promise<any>{
        console.log(city);
        let apiCall = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`;
        let resposnse = await fetch(apiCall);
        let weatherData = await resposnse.json();
        
        this.displayWeather(weatherData)
    }


    displayWeather(weatherData){
        console.log('name', weatherData.name);
    }

    saveData(city:string){
        console.log('save działa', city);
        localStorage.setItem('city', city);
        console.log(localStorage)
    }


}



const app = new App();