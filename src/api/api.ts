import axios from 'axios'

const API_KEY = "82f8ae70e0e158de1f8d15a9b6987f50"

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