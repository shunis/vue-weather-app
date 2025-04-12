<script setup>
import Navbar from "./components/Navbar.vue";
import MainComp from "./components/MainComp.vue";
import About from "./components/About.vue";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

// 날씨 데이터 상태변수
const store = useStore();
// const weatherData = ref({
//     icon: "icon",
//     temp: 0,
//     text: "text",
//     location: "location",
//     city: "seoul",
// });
// 앱이 실행되면 날씨 데이터 가져오기
// const getWeather = () => {
//     let appId = "cd09dad7f1e3f5b2a816523725ce6072";
//     const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${weatherData.value.city}&appid=${appId}`;
//     fetch(API_URL)
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data);
//             weatherData.value.icon = data.weather[0].icon;
//             weatherData.value.temp = data.main.temp;
//             weatherData.value.text = data.weather[0].description;
//             weatherData.value.location = data.sys.country;
//             weatherData.value.city = data.name;
//             console.log(weatherData.value);
//         })
//         .catch((err) => {
//             console.error(err);
//         });
// };

onMounted(() => {
    console.log("onMounted");
    // getWeather();
    store.dispatch("getWeather");
});

const onSearchCity = (city) => {
    console.log("city : app ", city);
    weatherData.value.city = city;
    getWeather();
};
</script>

<template>
    <!-- <button @click="$store.dispatch('getWeather')">getWeather</button> -->
    <h1>APP</h1>
    <Navbar />
    <div v-if="!$store.state.toggle">
        <MainComp />
    </div>
    <div v-else>
        <About />
    </div>
</template>

<style scoped lang="scss">
.navbar {
    background: #fff;
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: end;
}
</style>
