<script setup>
import HeroSection from '../components/HeroSection.vue';
import SocialMedia from '../components/SocialMedia.vue';
import SkillsSection from '../components/SkillsSections.vue';
import ServicesSection from '../components/ServicesSection.vue';
import PortfolioSection from '../components/ProtfolioSection.vue';
import ContactmeSection from '../components/ContactmeSection.vue';
import i18n from '../main';
import { onMounted } from 'vue';

onMounted(() => {
  i18n.global.locale.value === "ar" ? 
  document.getElementById('app').dir ="rtl": 
  document.getElementById('app').dir = 'ltr'
})

</script>

<template>
   <!-- social media  -->
   <SocialMedia/>
  <!-- Header and Hero Section  -->
  <HeroSection/>
  <!-- Skills Section  -->
  <SkillsSection/>
  <!-- Services Section  -->
  <ServicesSection/>
  <!-- Portfolio Section  -->
  <PortfolioSection/>
  <!-- Contact me Section  -->
  <ContactmeSection/>
</template>
