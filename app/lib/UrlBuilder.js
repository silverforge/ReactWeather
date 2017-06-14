import appConfig from '../_config/app_config.json';

export function getCurrentWeatherUrl(cityName) {
    let data = {
        city: cityName, 
        apikey: appConfig.apikey, 
        unit: "metric"
    }
    console.log("::: DATA :::" + JSON.stringify(data));                        

    return `http://api.openweathermap.org/data/2.5/weather?q=${data.city}&units=${data.unit}&APPID=${data.apikey}`;
}

export function getForecastWeatherUrl(cityName) {
    let data = {
        city: cityName, 
        apikey: appConfig.apikey, 
        unit: "metric",
        count: 7
    }
    console.log("::: DATA :::" + JSON.stringify(data));                        
    
    return `http://api.openweathermap.org/data/2.5/forecast/daily?q=${data.city}&units=${data.unit}&APPID=${data.apikey}&cnt=${data.count}`;
}

export function getWeatherIcon(iconId) {
    return "http://openweathermap.org/img/w/" + iconId + ".png";
}