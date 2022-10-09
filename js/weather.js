const API_KEY = "1528d5dbfdb74a9498c8d9745d740d16";

// 위치를 얻는데 성공했을 시 실행되는 함수.
// JS는 navigator.geolocation.getCurrentPosition에서 위치를 얻는데 성공했을 때 실행되는 함수의 파라미터로 유저의 위치를 넘겨준다.
function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weatherTag = document.querySelector('.weather');
            const city = data.name;
            const weather = data.weather[0].main;
            weatherTag.innerHTML = `${city} ${weather}`;
        })
}

function onGeoFail(){
    alert("Can't get your location. No weather to show you.")
}

// navigator.geolocation.getCurrentPosition은 두개의 파라미터를 받는데,
// 2개의 파라미터는 긱긱 위치를 얻는데 성공했을 때 실행되는 함수, 위치를 얻는데 실패했을 때 실행되는 함수를 나타낸다.
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail);