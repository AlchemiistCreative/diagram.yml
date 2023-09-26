<template>
 
<section>
  <div>
    <div class="container is-widescreen ">
      <div class="box-right">
    
        <h1 class="title has-text-centered">Diagram</h1>
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

.box-right {
  min-height: 36vw;
  background-color: white;
  box-shadow: 30%;
  border-radius: 6px;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
}
</style>