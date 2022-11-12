class UI {
  constructor() {
    this.uiContainer = document.getElementById("content");
    this.city;
    this.defaultCity = "London";
  }

  populateUI(data) {
    //de-structure vars
    
    //add them to inner HTML

    this.uiContainer.innerHTML = `
        
        
        <div class="app-top-bar location button">

        ${data.name}
        </div>

        <div class="button button-dial">
        <span class="button-dial-spoke"></span>
        <span class="button-dial-spoke"></span>
        <span class="button-dial-spoke"></span>
        <span class="button-dial-spoke"></span>
        <span class="button-dial-spoke"></span>
        <span class="button-dial-spoke"></span>
        <div class="button-dial-top"></div>
        <div class="button button-dial-label">
            <i class="fas fa-light fa-temperature-half"></i>
            ${(data.main.temp - 273.15).toFixed(2)}&deg;C
           
        </div>
    </div>


          <div class="flex-button-container">
          <button class="button button-large">
          <i class="fas fa-light fa-temperature-half" style="color:#1885ffe3"></i>Min:${(data.main.temp_min - 273.15).toFixed(2)}
       
          </button>
          <button class="button button-large">
          <i class="fas fa-light fa-temperature-half" style="color: #e53511;"></i>Max:${(data.main.temp_max  - 273.15).toFixed(2)}
          </button>
         </div> <br>
         <div class="flex-button-container">
          <button class="button button-large">
            <i class="fa-solid fa-cloud" fa-2x1" style="color:#1885ffe3"></i>${data.clouds.all} %
            <p>${data.weather[0].description}</p>
          </button>
          <button class="button button-large">
            <i class="fas fa-light fa-cloud-rain fa-2x1" style="color:#1885ffe3"></i>Humidity: <br>${data.main.humidity} %
            
          </button> 
         </div><br>
         <div class="flex-button-container">
          <button class="button button-large">
            <i class="fa-solid fa-eye fa-2x1" style="color:#1885ffe3"></i>${data.visibility} %
          
          </button>
          <button class="button button-large">
              <i class="fas fa-light fa-wind fa2xl" style ="color: #0f345fe3;" id="wind"></i>Speed:<br>${data.wind.speed} m/s 
              
          </button>
         </div>
        `;
  }

  clearUI() {
    uiContainer.innerHTML = "";
  }

  saveToLS(data) {
    localStorage.setItem("city", JSON.stringify(data));
  }

  getFromLS() {
    if (localStorage.getItem("city" == null)) {
      return this.defaultCity;
    } else {
      this.city = JSON.parse(localStorage.getItem("city"));
    }

    return this.city;
  }

  clearLS() {
    localStorage.clear();
  }
}



console.log("'")