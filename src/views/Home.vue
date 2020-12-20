<template>
    <section id="top">
      <img id="camp-nos-logo" :src="campNosLogo" />
    </section>
    <section id="bottom">
      <div id="title-and-social">
        <h1 id="site-title">@CAMPNOS</h1>
        <div id="social-media-fonts">
          <a href="https://www.facebook.com/campnos" target="_blank" noreferrer>
            <i class="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/campnos/"
            target="_blank"
            noreferrer
          >
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com/campnos" target="_blank" noreferrer>
            <i class="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UCUMITF9_Ry63dg7dC6v1TyA"
            target="_blank"
            noreferrer
          >
            <i class="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </section>
</template>

<script>
// @ is an alias to /src
import campNosLogo from '../assets/images/CampNosLogo.png';

export default {
  name: 'Home',
  setup() {
    return { campNosLogo };
  },
};
</script>

<style scoped>

#bottom{
    flex: 1;
    background-color: rgb(25,25,25);
    background-size: cover;
    display:flex;
    align-items: center;
    justify-content: center;
    color:white;
    flex-direction: column;
    width:100vw;
    height:40vh;
}

#top{
    flex: 1.5;
    background-image:url(../assets/images/campNosBg.png);
    background-size: 200%;
    display:flex;
    align-items: center;
    justify-content: center;
    height:60vh;
}
</style>
