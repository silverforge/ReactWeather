// @flow

import moment from 'moment';
import * as UrlBuilder from '../UrlBuilder';

export function map(element: Object): Object {
    let tempDay = moment.unix(element.dt).format("dddd");
    let tempDate = moment.unix(element.dt).format("YYYY-MM-DD")

    return ({
        icon: UrlBuilder.getWeatherIcon(element.weather[0].icon), 
        temperature: element.temp.day, 
        day: tempDay,
        date: tempDate,
        day_min: element.temp.min,
        day_max: element.temp.max,
        night: element.temp.night,
        evening: element.temp.eve,
        morning: element.temp.morn,
        pressure: element.pressure,
        humidity: element.humidity,
        wind_speed: element.speed
    });
}