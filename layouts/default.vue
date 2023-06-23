<template>
  <div v-bind:class="$route.name">
    <header>
        <div class="container">
            <div class="row">
                <div class="column col-12">
                    <NuxtLink class="logo" to="/">
                        <img src="~/assets/images/svg/logo.svg" width="466" alt="SENSE" />
                        <span>music release club</span>
                    </NuxtLink>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSc833ZxiyQkrIhwhCApd8hUKXuK60NLWcMWnwrJSUI6r9q5WA/viewform" class="email" target="_blank" title="join">join</a>
                </div>
                
            </div>
        </div>
    </header>
    <Nuxt />
  </div>
  
</template>

<script>
   
</script>