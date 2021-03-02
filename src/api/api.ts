import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY

const instance = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/forecast"
})

export const weatherAPI = {
    async getWeatherData(cityName: string, units: string) {
        const res = await instance.get(
            `?q=${cityName}&appid=${API_KEY}&units=${units}`
        );
        return res;
    },
};