<script setup>
import { RouterView } from 'vue-router';
import './assets/app.js';
import { onMounted } from 'vue';


onMounted(() => {
  // Lazy animation 
  setTimeout(() => {
    let observe = new IntersectionObserver((entities) => {
      entities.forEach(entity => {
        if (entity.isIntersecting) {
          switch (entity.target.dataset.banga) {
            case "up":
              entity.target.classList.add("start-animation")
              break;
            case "down":
              entity.target.classList.add("start-animation")
              break;
            case "left":
              entity.target.classList.add("start-animation")
              break;
            case "right":
              entity.target.classList.add("start-animation")
              break
          }
        }
        else {
          entity.target.classList.remove("start-animation")
        }
      }, {
        
      })
    }, {
      threshold: 0.5,
    })
   // get all elements that have data-banga attrbuite
    let elements = document.querySelectorAll("[data-banga]");
    elements.forEach(element => {
      observe.observe(element)
    })
  }, 500)
})
</script>

<template >
  <RouterView />
</template>