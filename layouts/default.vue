<template>
    <div :class="$route.name">
      <header>
        <div class="container">
          <div class="row">
            <div class="column col-12" style="z-index: 1;">
              <NuxtLink v-if="!showPinkScreen" class="logo" to="/">
                <img src="~/assets/images/svg/logo.svg" width="466" alt="SENSE" />
                <span>music release club</span>
              </NuxtLink>
              <a v-if="!showPinkScreen" href="https://docs.google.com/forms/d/e/1FAIpQLSc833ZxiyQkrIhwhCApd8hUKXuK60NLWcMWnwrJSUI6r9q5WA/viewform" class="email" target="_blank" title="join">join</a>
            </div>
          </div>
        </div>
      </header>
      <div class="pink-screen" :class="{ 'hide': showContent, 'show': showPinkScreen }">
        <!-- Contenu de la div pink-screen -->
      </div>
      <Nuxt />
    </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
          showContent: false,
          showPinkScreen: true
        };
      },
      mounted() {
        // Simule l'animation de disparition de la div pink-screen
        setTimeout(() => {
          this.showContent = true;
          this.showPinkScreen = false;
        }, 800); 
      }
    }
  </script>
  