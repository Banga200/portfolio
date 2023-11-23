<script setup>
import {ref} from 'vue';

const services = ref([
    {id:1, title: 'services.websitesDesign', description: 'services.webDesignParagraph',icon: 'fa-solid fa-pen-nib', animation: 'left'},
    {id:2, title: 'services.websitesDevelopment', description: 'services.webDevelopmentParagraph',icon: 'fa-solid fa-code', animation: 'down'},
    {id:3, title: 'services.mobileDesign', description: 'services.mobileParagraph',icon: 'fa-solid fa-mobile-screen-button', animation: 'up'},
    {id:4, title: 'services.uxDesign', description: 'services.uxDesignParagraph',icon: 'fa-solid fa-computer', animation: 'right'},
])
</script>
<template>
    <!-- Services  -->
   <section class="services">
    <h1 class="title" data-lang="en" >{{$t('services.title')}}</h1>
    <p data-lang="en" data-banga="down">{{ $t('whatIDo') }}</p>
    <div class="grid">
        <div class="card " :data-banga="service.animation" v-for="(service, i) in services" :key="i">
            <div><i :class="service.icon"></i></div>
            <h3 data-lang="en">{{$t(service.title)}}</h3>
            <p data-lang="en">{{ $t(service.description) }}</p>
        </div>
    </div>
   </section>
</template>