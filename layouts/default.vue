<template>
  <div v-bind:class="$route.name">
    <header>
        <div class="container">
            <div class="row">
                <div class="column col-12">
                    <NuxtLink class="logo" to="/">
                        <img src="~/assets/images/svg/logo_music_release_club.svg" width="466" alt="SENSE" />
                    </NuxtLink>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSc833ZxiyQkrIhwhCApd8hUKXuK60NLWcMWnwrJSUI6r9q5WA/viewform" class="email" target="_blank">join the club</a>
                </div>
                
            </div>
        </div>
    </header>
    <Nuxt />
  </div>
  
</template>

<script>
   
</script>