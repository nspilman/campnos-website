<template>
  <div id="bios-page">
   <a href="/"> <img id="camp-nos-logo" :src="campNosLogo" /></a>
    <section id="bios">
      <Bio v-for="bio in bios" :key="bio.name" :bio="bio" />
    </section>
  </div>
</template>

<script>
import campNosLogo from '../assets/images/CampNosLogo.png';
import leeroyBio from '../assets/images/bio-leeroy.jpg';
import murdockBio from '../assets/images/bio-murdock.jpeg';

import Bio from '../components/Bio.vue';
import bios from '../data/theCollective';

export default {
  name: 'Bios',
  components: {
    Bio,
  },
  setup() {
    return {
      campNosLogo,
      leeroyBio,
      murdockBio,
      bios,
      Bio,
    };
  },
};
</script>
