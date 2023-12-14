function updateWeather(resp, imgBox, grad, absWeather, humidity) {
    console.log(resp);
    imgBox.innerHTML = `<img src="https://openweathermap.org/img/wn/${resp.weather[0]['icon']}@4x.png">`;
    grad.innerHTML = `Temprature: ${Math.round(resp.main.temp - 273)}&deg;`;
    absWeather.textContent = resp.weather[0]['description'];
    humidity.innerHTML = `Humidity: ${Math.round(resp.main.humidity)}%`;
};

async function searchWeather() {
    let city = document.querySelector(".input-city").value;
    let adress = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=577b3bd2eec54e5a84a1ae825e746783`;

    const resp = await fetch(adress);
    const data = await resp.json();

    console.log(city);
    console.log(data);
    let ans = document.querySelector('.respons');
    ans.innerHTML = '';
    ans.classList.add("list-box");

    let imgBox = document.createElement("div");
    imgBox.classList.add("weather-img");
    ans.appendChild(imgBox);

    let grad = document.createElement("div");
    grad.classList.add("list");
    ans.appendChild(grad);

    let absWeather = document.createElement("div");
    absWeather.classList.add("list");
    ans.appendChild(absWeather);

    let humidity = document.createElement("div");
    humidity.classList.add("list");
    ans.appendChild(humidity);

    updateWeather(data, imgBox, grad, absWeather, humidity);

    let btnUpdate = document.createElement("a");
    btnUpdate.innerHTML = "Update";
    btnUpdate.addEventListener('click', async () => {
        let response = await new Promise(resolve => {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", adress, true);
            xhr.onload = function (e) {
                resolve(xhr.response);
            };
            xhr.onerror = function () {
                resolve(undefined);
                console.error("** An error occurred during the XMLHttpRequest");
            };
            xhr.send();
        })
        updateWeather(JSON.parse(response), imgBox, grad, absWeather, humidity);
    });
    ans.appendChild(btnUpdate);
};


