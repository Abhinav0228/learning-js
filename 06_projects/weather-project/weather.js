const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', ()=> {
    console.log('clicked');
    const APIKey = '063d732b96e5f22ecaafbe99d5cf7bfc';
    const city = document.querySelector('.search-box input').value;

    if (city === '')
        return;

        fetch(`https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`).then(response => response.json()).then
        ( json => {
            if (json.cod === '404') {
                container.style.height = '400px';
                weatherBox.style.display = 'none'
                weatherDetails.style.display = 'none'
                error404.style.display = 'block'
                error404.classList.add('fadeIn');
                return
            }

            error404.style.display = 'none';
            error404.classList.remove('fadeIn');
            
            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = "images/clear.png";
                    break;
                
                case 'Rain':
                    image.src = "images/rain.png";
                    break;

                case 'Snow':
                    image.src = "images/snow.png";
                    break;

                case 'Clouds':
                    image.src = "images/cloud.png";
                    break;
                case 'Haze':
                    image.src = "images/mist.png";
                    break;
                
                default:
                    image.src = '';
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            container.style.height = '590px'

        });
});

// Function to fetch data from API
function fetchData() {
    // Replace 'https://api.example.com/data' with your API endpoint
    fetch('`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}')
      .then(response => {
        // Check if response is successful (status code 200-299)
        if (response.ok) {
          // Parse JSON data from the response
          return response.json();
        }
        // If response is not successful, throw an error
        throw new Error('Network response was not ok.');
      })
      .then(data => {
        // Data processing logic
        console.log(data); // Log the data to the console or do something else with it
      })
      .catch(error => {
        // Error handling logic
        console.error('Error fetching data:', error);
      });
  }
  
  // Call the fetchData function to initiate the API request
  fetchData();
  