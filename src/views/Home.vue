<template>
    <section id="top">
      <img id="camp-nos-logo" :src="campNosLogo" />
    </section>
    <section id="bottom">
      <div id="title-and-social">
        <h1 id="site-title">@CAMPNOS</h1>
        <a href="collective"><h3 id="collective-link"> See the Collective </h3></a>
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

#camp-nos-logo{
  max-height:40vh;
  width:auto;
  max-width: 70vw;
}

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
    height:50vh;
}

#top{
    flex: 1.5;
    background-image:url(../assets/images/campNosBg.png);
    background-size: 200%;
    display:flex;
    align-items: center;
    justify-content: center;
    height:50vh;
}

#site-title{
    font-size:2.5rem;
    font-weight: 100;
    margin:0;
}

#title-and-social{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding:3rem;
    height:100%;
}

.fab,
#collective-link{
    color:rgb(0,244,161);
    cursor: pointer;
    transition: 200ms;
    margin:0;
}

.fab:hover,
#collective-link:hover{
    color:rgb(222,0,247);
}

</style>
