import Vue from 'vue';

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      showContent: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.showContent = true;
    }, 800); // Durée de l'animation en millisecondes
  }
});
