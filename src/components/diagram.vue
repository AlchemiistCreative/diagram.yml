<template>
 
<section class="hero is-fullheight">
  <div class="hero-body has-text-centered">
    <div class="container is-fluid ">
      <div class="box">
    
        <h1 class="title">Diagram</h1>
        <Renderer :data="parsedDataArray" />
      </div>
    </div>
  </div>
</section>
  </template>
  
  <script>
  import Renderer from './renderer.vue';
  
  export default {
    components: {
      Renderer
    },
    props: {
      parsedData: {
        type: Object,
        required: false
      }
    },
    computed: {
      parsedDataArray() {
        if (this.parsedData) {
          return this.parsedData;
        } else {
          return [];
        }
      }
    }
  };
  </script>

<style scoped>

.box {
  min-height: 40vw;
  padding: 1.5rem; /* Add some padding to the box for spacing */
}
</style>