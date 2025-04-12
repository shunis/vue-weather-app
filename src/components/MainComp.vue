<template>
    <div class="container">
        <!-- <SearchBar @onSearchCity="onSearchCity" /> -->
        <SearchBar />
        <!-- <WeatherInfo :weatherData="props.weatherData" /> -->
        <WeatherInfo />
    </div>
</template>
<script setup>
import SearchBar from "./SearchBar.vue";
import WeatherInfo from "./WeatherInfo.vue";

// const emits = defineEmits(["onSearchCity"]);

// const props = defineProps({
//     weatherData: Object,
// });
// console.log("weatherData 1: ", props.weatherData);
// const onSearchCity = (city) => {
//     console.log("city : main ", city);
//     emits("onSearchCity", city);
// };
</script>

<style lang="scss"></style>
