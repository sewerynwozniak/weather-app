class App{

    cityInput :HTMLInputElement;
    btnAdd :HTMLButtonElement;
    apiKey :string;
    

    constructor(){
        this.cityInput = document.querySelector('.cityInput');
        this.btnAdd = document.querySelector('.btnAdd');
        this.btnAdd.addEventListener('click', this.getInput);
        this.apiKey = '4c97ef52cb86a6fa1cff027ac4a37671';
    }



     async getInput(){
       const weather =  this.getData(this.cityInput.value);

    }

    async getData(city:string){
        console.log(city);
        let apiCall = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`;
        let resposnse = await fetch(apiCall);
        const weatherData = await resposnse.json();
        console.log(resposnse);
    }


}




const app = new App();