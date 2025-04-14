import { defineStore } from "pinia";

// store 만들기
export const useStore = defineStore("main", {
    state: () => ({
        // initial state
        // 상태 변수 정의
        count: 0,
        weatherData: {
            icon: "icon",
            temp: 0,
            text: "text",
            location: "location",
            city: "seoul",
        },
        toggle: false, // true일때 about
    }),
    actions: {
        // mutation (데이터 변경)
        addCount(payload) {
            this.count += 1 + payload;
        },
        updateWeather(payload) {
            this.weatherData.icon = payload.weather[0].icon;
            this.weatherData.temp = payload.main.temp;
            this.weatherData.text = payload.weather[0].description;
            this.weatherData.location = payload.sys.country;
            this.weatherData.city = payload.name;
        },
        onSearchCity(payload) {
            this.weatherData.city = payload;
        },
        toggleButton() {
            this.toggle = !this.toggle;
        },
        // 비동기 함수 async 방식
        async getWeather() {
            const API_KEY = import.meta.env.VITE_API_KEY;
            const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.weatherData.city}&appid=${API_KEY}`;
            await fetch(API_URL)
                .then((res) => res.json())
                .then((data) => {
                    // console.log(data);
                    // context.commit("updateWeather", data);
                    this.updateWeather(data);
                })
                .catch((err) => {
                    console.error(err);
                });
        },
    },
});

// useStore 내보낵;
