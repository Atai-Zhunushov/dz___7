const cityName = document.querySelector('.cityName')
const temp = document.querySelector('.temp')
const cityNameInput = document.querySelector('.cityNameInput')
const cloud = document.querySelector('.cloud')
const wind = document.querySelector('.wind')
const img = document.querySelector('.img')

cityNameInput.addEventListener('input' , (e) => {
     fetch(`http://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=e417df62e04d3b1b111abeab19cea714`)
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            cityName.innerHTML = data?.name
            const temperature = Math.round(data?.main?.temp - 273)
            if (temperature < 10) {
                img.src = 'img/sun_.png'
            } else if (temperature >= 10 && temperature <= 30) {
                img.src = 'img/sun____.png'
            } else if (temperature > 30) {
                img.src = 'img/sun__.png'
            } else  {
                img.src = ''
            }

            temp.innerHTML = temperature + '&deg' + 'C'
            cloud.innerHTML = data?.clouds?.all + '%'
            wind.innerHTML = data?.wind?.speed + 'м/с'
            if (cityNameInput.value === '') {
                cityName.innerHTML = ''
                temp.innerText = ''
                cloud.innerText = ''
                wind.innerText = ''
            }
        })
})


