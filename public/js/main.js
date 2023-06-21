const submitBtn = document.getElementById("submitBtn")
const cityName = document.getElementById("cityName")
const city_name = document.getElementById("city_name")
const temp_realValue = document.getElementById("temp_realValue")
const tempStatus = document.getElementById("tempStatus")
const hideData = document.querySelector(".middleLayer")

const getInfo = async (evet)=>{
    evet.preventDefault();
    cityValue = cityName.value
    if(cityValue===""){
        city_name.innerHTML="Plz write name before search";
        hideData.classList.add("data_hide")
    }else{
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=227327ed766088223a5eeae4fececa4d`
            const response = await fetch(url)
            const data = await response.json()
            const arrData = [data]
            city_name.innerText = `${arrData[0].name} | ${arrData[0].sys.country}`;
            temp_realValue.innerText = arrData[0].main.temp
            const tempMood = arrData[0].weather[0].main
            // console.log(data)

            // temp condition
            if (tempMood == "Sunny") {
                tempStatus.innerHTML ="<i class='fas  fa-sun' style='color: #e08012;'></i>";
              } else if (tempMood == "Clouds") {
                tempStatus.innerHTML ="<i class='fas  fa-cloud' style='color: #0097e6;'></i>";
              } else if (tempMood == "Rainy") {
                tempStatus.innerHTML ="<i class='fas  fa-cloud-rain' style='color: #5a544d;'></i>";
              } else {
                tempStatus.innerHTML ="<i class='fas  fa-sun' style='color:#e08012;'></i>";
              }
              hideData.classList.remove("data_hide")
        } catch (error) {
            city_name.innerHTML="Plz write  city  name  properly";
            hideData.classList.add("data_hide")
        }
       
    }
}

submitBtn.addEventListener("click", getInfo)