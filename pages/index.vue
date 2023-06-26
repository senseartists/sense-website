<template>
  <div>
     <div class="pink-screen" :class="{ 'hide': showContent}" >
       <img src="~/assets/images/svg/logo.svg" class="logo-image" />
     </div>
 
     <section class="_intro" :class="{ 'hide': !showContent, 'show': showContent }">
       <a href="https://menaceparis.bandcamp.com">
         <img src="~/assets/images/og/label.png" class="og-image only-desktop" style="left:5%;bottom:1%;" />
       </a>
       <img src="~/assets/images/og/publishing.png" class="og-image only-desktop" style="left:32.66%;bottom:1%;" />
       <img src="~/assets/images/og/web3.png" class="og-image only-desktop" style="left:60.33%;bottom:1%;" />
       <img src="~/assets/images/og/creative.png" class="og-image only-desktop" style="left:88%;top:9%;" />
       <img src="~/assets/images/og/distrib.png" class="og-image only-desktop" style="left:88%;top:53.5%;top:calc(53.5% - 0.04 * (100vh - 120px));" />
       <img src="~/assets/images/og/management.png" class="og-image only-desktop" style="left:88%;bottom:1%;" />
       <div class="intro-block" style="position:relative">
         
         <h1>
         <!--<span class="svg">-->
           SENSE
           <!--<img class="paris" src="~/assets/images/svg/circled_1.svg" width="0" alt="">
         </span>-->
         is a music release club,<br />
         an international network who<br />
         provides support
         <!--<span class="svg">
           empower
           <img class="empower" src="~/assets/images/svg/underline_3.svg" width="0" alt="">
         </span>-->
         for independent<br />
         artists, labels and music initiatives.<br />
       <!--  <span class="only-desktop">Currently soft-launching.</span> -->
 
         <!-- <span class="inline-image">
           <img src="~/assets/images/img-5.jpg" alt="">
         </span> -->
         <!-- Deeply committed to independence 
         and <span class="svg">
           creativity.
           <img class="creativity" src="~/assets/images/svg/underline_1.svg" width="0" alt="">
           </span> -->
         <!-- <span class="inline-image">
           <img src="~/assets/images/img-8.jpg" alt="">
         </span> -->
 
       </h1>
     </div>
   </section> 
 
   <!-- <section class="_inter">
     <img class="not-mobile" src="~/assets/images/gradient.jpg" alt="">
     <img class="only-mobile" src="~/assets/images/gradient_mobile.jpg" alt="">
   </section> -->
 
   <!-- <section class="_workwith">
     <h2>we work with</h2>
     <img src="~/assets/images/svg/smiley.svg" width="0" alt="">
     <div class="row">
       
       <div class="column col-3">
         <div class="img-block _1x1" style="background-color: #FFDAFF">
           <img src="~/assets/images/grid/alphapup.jpg" alt="">
           <span class="name">Alpha <br>Pup</span>
         </div>
       </div>
       <div class="column col-3">
         <div class="img-block _1x1" style="background-color: #B9DAFF">
           <img src="~/assets/images/grid/menace.jpg" alt="">
           <span class="name">Menace</span>
         </div>
       </div>
       <div class="column col-3">
         <div class="img-block _1x1" style="background-color: #FFDAAF">
           <img src="~/assets/images/grid/horarecords.png" alt="">
           <span class="name">Hora <br> records</span>
         </div>
       </div>
       <div class="column col-3">
         <div class="img-block _1x1" style="background-color: #93DAAF">
           <img src="~/assets/images/grid/toshio.jpg" alt="">
           <span class="name">Toshio <br> Matsuura</span>
         </div>
       </div>
       <div class="column col-3">
         <div class="img-block _1x1" style="background-color: #FFDAFF">
           <img src="~/assets/images/grid/fufu.jpg" alt="">
           <span class="name">Fufu</span>
         </div>
       </div>
       <div class="column col-3">
         <div class="img-block _1x1" style="background-color: #B9DAFF">
           <img src="~/assets/images/grid/jazzysports.jpg" alt="">
           <span class="name">Jazzy <br> Sport</span>
         </div>
       </div>
       <div class="column col-3">
         <div class="img-block _1x1" style="background-color: #FFDAAF">
           <img src="~/assets/images/grid/martasanchez.jpg" alt="">
           <span class="name">Marta <br> Sanchez</span>
         </div>
       </div>
       <div class="column col-3">
         <div class="img-block _1x1" style="background-color: #93DAAF">
           <img src="~/assets/images/grid/jazzycouscous.jpg" alt="">
           <span class="name">Jazzy <br> Couscous</span>
         </div>
       </div>
       <div class="column col-3">
         <div class="img-block _1x1" style="background-color: #FFDAFF">
           <img src="~/assets/images/grid/hugolx.jpg" alt="">
           <span class="name">Hugo lX</span>
         </div>
       </div>
       <div class="column col-3">
         <div class="img-block _1x1" style="background-color: #B9DAFF">
           <img src="~/assets/images/grid/bluestaeb.jpg" alt="">
           <span class="name">Bluestaeb</span>
         </div>
       </div>
       <div class="column col-3">
         <div class="img-block _1x1" style="background-color: #FFDAAF">
           <img src="~/assets/images/grid/enzogarniel.jpg" alt="">
           <span class="name">Enzo <br> Garniel</span>
         </div>
       </div>
       <div class="column col-3">
         <div class="img-block _1x1" style="background-color: #93DAAF">
           <img src="~/assets/images/grid/manymore.jpg" alt="">
           <span class="name">& many <br> more</span>
         </div>
       </div>
     </div>
   </section> -->
 
   <!-- <section class="_moveus">
     <div class="container">
       <div class="row">
          <div class="column col-6 only-mobile">
           <img class="glimps" src="~/assets/images/svg/glimps.png" alt="">
         </div>
         <div class="column col-6">
           <span class="fix"></span>
           <iframe src="https://open.spotify.com/embed/playlist/095cXh14FXmEIhfjW5xlzf?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
         </div>
         <div class="column col-6 not-mobile">
           <img class="latest" src="~/assets/images/svg/latest_release.svg" alt="">
           <img class="glimps" src="~/assets/images/svg/glimps.png" alt="">
         </div>
       </div>
     </div>
   </section> -->
 
   <!--<section class="_gif">
     <img src="~/assets/images/01_GIF_OG_transparent.gif" width="600" alt="">
   </section>-->
 
   <!-- <section class="_emailus">
     <div class="intro-block">
       <p>
 
        If you're <span class="svg">
           an artist, 
           <img class="artist" src="~/assets/images/svg/circled_3.svg" width="0" alt="">
          </span>
          a band, a collective,
       or if you just want to say hello,
       <span class="svg">
           drop us a line
           <img class="feelfree" src="~/assets/images/svg/underline_2.svg" width="0" alt="">
         </span> :
       </p>
 
       <a href="mailto:contact@senseartists.com" target="_blank" title="e-mail us">e-mail us</a>
 
       <img src="~/assets/images/svg/spam.svg" width="0" alt="" class="spam">
     </div>
   </section>-->
 
   <footer>
     <div class="container">
 
       <span class="footer-line">
         <img src="~/assets/images/svg/footer_line.svg" width="600" alt="">
       </span>
 
       <div>
         <div>
           <nav class="links">
             <!--<a href="https://docs.google.com/document/d/10Z-vPzywWOAae3DTENmcWiVupeo73sbYyjb2EHIgq_Q/edit?usp=sharing" target="_blank" title="about">About</a>-->
             <a href="https://senseartists.disco.ac/lib/6196" target="_blank" title="sync">Sync</a>
             <a href="https://docs.google.com/document/d/18xcWoAGDfnXQ00mfO4ADtklw7D6CsgNmxIzwXbb0DYk/edit?usp=sharing" target="_blank" title="about">About</a>
             <a href="http://eepurl.com/h0CllP" target="_blank" title="newsletter">Newsletter</a>
           </nav>
         </div>
 
         <!--<div class="og-images">
           <img src="~/assets/images/og/label.png" class="og-image" />
           <img src="~/assets/images/og/publishing.png" class="og-image" />
           <img src="~/assets/images/og/web3.png" class="og-image" />
           <img src="~/assets/images/og/creative.png" class="og-image" />
           <img src="~/assets/images/og/management.png" class="og-image" />
           <img src="~/assets/images/og/distrib.png" class="og-image" />
         </div>-->
 
         <!--<img src="~/assets/images/mini-logo-white.png" style="width:4em" />-->
 
         <div>
           <!--<span class="logo-footer">
             <img src="~/assets/images/svg/logo.svg" width="250" alt="">
             <span>music release club</span>
           </span>-->
           <!--<img class="mini-logo" src="~/assets/images/mini-logo.png" />-->
           <!--<span class="copyright">
             SENSE, all rights reserved ©2022
           </span>-->
           <!--<nav class="social">
             <a href="https://open.spotify.com/playlist/095cXh14FXmEIhfjW5xlzf" target="_blank" title="spotify">
               <img src="~/assets/images/svg/spotify.svg" width="30" alt="spotify" title="spotify">
             </a>
             <a href="https://twitter.com/senseartists" target="_blank" title="twitter">
               <img src="~/assets/images/svg/twitter.svg" width="30" alt="twitter" title="twitter">
             </a>
             <a href="https://www.instagram.com/senseartists/" target="_blank" title="instagram">
               <img src="~/assets/images/svg/instagram.svg" width="30" alt="instagram">
             </a>
             <a href="https://discord.gg/uvmEkf55vx" target="_blank" title="discord">
               <img src="~/assets/images/svg/discord.svg" width="30" alt="discord">
             </a>
             <a href="https://liinks.co/senseartists" target="_blank" title="liikns">
               <img src="~/assets/images/svg/liinks.svg" width="30" alt="liinks">
             </a>
           </nav>-->
           <nav class="links right">
             <a href="https://open.spotify.com/playlist/095cXh14FXmEIhfjW5xlzf" target="_blank" title="spotify">Playlists</a>
             <a href="https://twitter.com/senseartists" target="_blank" title="twitter">Socials</a>
             <a href="https://liinks.co/senseartists" target="_blank" title="liinks">Links</a>
           </nav>
         </div>
       </div>
 
     </div>
       
   </footer>
   <div class="hr"></div>
 
 
 
   </div>
 
 </template>
 
 <script src="./script.js" lang="ts"></script>

 <style src="./style.css" scoped></style>
