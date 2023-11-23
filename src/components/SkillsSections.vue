<script setup>
import {ref} from 'vue';
 
const skills = ref([
    {id: 1,title: 'skills.designSkills', skills:['Figma', 'AdobeXD', "UX Design"], animation: 'up' },
    {id: 2,title: "skills.websiteSkills", skills:['HTML', 'CSS', "JavaScript", "VueJS", "NuxtJS"],animation: 'down' },
    {id: 3,title: "skills.desktopSkills", skills:['XAML'], animation: 'right' },
])
</script>
<template>
     <!-- My Portfolio -->
   <section class="about">
        <h1 class="title big_name" data-lang="en" >{{ $t("about") }}</h1>
        <p data-lang="en" data-banga="up">{{ $t("whoAmIText") }}</p>
        <p data-lang="en" data-banga="down">
            {{ $t("myNameIs") }} <b>{{ $t("firstName") }} </b>, {{ $t("skillPargraph") }}  <span>VueJs</span> {{ $t("skillPargraph2") }} 
        </p>
        <!-- Skills  --> 
        <div class="grid">
            <!-- Websites  -->
            <div class="container" v-for="skill in skills" :key="skill.id">
                <h3 data-lang="en">{{ $t(skill.title)}} </h3>
                <div>
                    <div class="medium_bubble bubble" :data-banga="skill.animation" v-for="subSkill in skill.skills " :key="subSkill">{{ subSkill }}</div>
                </div>
            </div>

        </div>
   </section>
</template>