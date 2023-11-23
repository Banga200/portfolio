<script setup>
import { ref } from 'vue';
import codeEagerIMG from '../assets/images/code_eager.jpg';
import ecommerceIMG from '../assets/images/ecommerce.jpg';
import jubileeglassIMG from '../assets/images/jubileeglass.jpg';
const projects = ref([
    { id: 1,image: codeEagerIMG, title: 'Code Eager', description: 'projects.codeEagerDescription', skills: ['HTML', "CSS", 'JavaScript'], link: 'https://www.codeeager.com', category: 'Real'},
    { id: 2,image: ecommerceIMG, title: 'E-commerce Advertisement', description: 'projects.ecommerceDescription', skills: ['HTML', "CSS", 'JavaScript', 'VueJs', 'Vuetify'], category: 'Real', link: 'https://ecommerce-ads.netlify.app/' },
    { id: 3,image: jubileeglassIMG, title: 'Jubilee Glass', description: 'projects.jubileeGlassDescription', skills: ['HTML', "CSS", 'JavaScript', 'jQuery', 'Bootstrap'], link: '', category: 'Design'},
])
</script>
<template>
    <!-- Portfolio  -->
    <section class="projects" id="Portfolio">
        <h1 class="title" data-lang="en">{{ $t('projects.title') }}</h1>
        <div class="projects_container">
            <div class="projects_tags">
                <span onclick="Filter_grid('All')" data-active="All" class="active" data-lang="en">{{ $t('all') }}</span>
                <span onclick="Filter_grid('Real')" data-active="Real" data-lang="en">{{ $t('real') }}</span>
                <span onclick="Filter_grid('Design')" data-active="Design" data-lang="en">{{ $t('design') }}</span>
            </div>
            <div class="grid">
                <!-- Card Here rendering -->
                <div class="card" :data-card="project.category" v-for="project in projects" :key="project.id">
                    <img :src="project.image" />
                    <h3>{{project.title}}</h3>
                    <p>{{ $t(project.description) }}</p>
                    <div class="skills">
                        <span v-for="(skill, i) in project.skills" :key="i">{{ skill }}</span>
                    </div>
                    <div class="link">
                        <a :href="project.link" target="_blank">{{ $t('projects.visit') }} <i class="fa-solid fa-link"></i></a>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
</template>