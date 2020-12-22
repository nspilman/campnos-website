<template>
  <div class="bio">
    <img :src="image" class="bio-image" />
    <div class="bio-body">
      <span class="bio-name">{{ name }}</span>
      <span class="bio-text">
          {{ text }}
      </span>
      <div id="bio-social-media">
        <a v-if="socials.facebook" :href="socials.facebook" target="_blank" noreferrer>
          <i class="fab fa-facebook"></i>
        </a>
        <a v-if="socials.instagram"  :href="socials.instagram" target="_blank" noreferrer>
          <i class="fab fa-instagram"></i>
        </a>
        <a v-if="socials.twitter" :href="socials.twitter" target="_blank" noreferrer>
          <i class="fab fa-twitter"></i>
        </a>
        <a
        v-if="socials.youtube"
          :href="socials.youtube"
          target="_blank"
          noreferrer
        >
          <i class="fab fa-youtube"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { toRefs } from 'vue';

export default {
  props: {
    bio: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const {
      image, name, text, socials,
    } = toRefs(props.bio);
    return {
      image, name, text, socials,
    };
  },
};
</script>

<style scoped>
.bio{
    background-color:rgb(25,25,25);
    color:white;
    padding:2rem;
    display:flex;
    flex-direction: row;
    margin:1rem;
    align-items: center;
}

.bio-image{
    width:250px;
    height:250px;
    padding:1rem;
}

.bio-body{
    padding:3rem;
    display: flex;
    flex-direction: column;
}

.bio-text{
    font-weight: 200;
}

.bio-name{
    color:rgb(0,244,161);
}

@media only screen and (max-width: 800px) {
.bio-text{
    font-weight: 200;
}
.bio{
  flex-direction: column;
}
}

</style>
