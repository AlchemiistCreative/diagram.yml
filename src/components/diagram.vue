<template>
 
<section>
  <div>
    <div class="container is-widescreen ">
      
      <div class="box-right">
        <button @click="exportDiagram()" class="button is-primary is-rounded  is-outlined">Export as PNG</button>
        <h1 class="title has-text-centered">Diagram</h1>
        <Renderer :data="parsedDataArray" />
      </div>
    </div>
  </div>
</section>
  </template>
  
  <script>
  import Renderer from './renderer.vue';
  import html2canvas from 'html2canvas'
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
    },
    methods: {
    async exportDiagram() {
      const diagramContainer = this.$el.querySelector('.diagram-object');

      const canvas = await html2canvas(diagramContainer);

      const imageDataUrl = canvas.toDataURL('image/png');

      const downloadLink = document.createElement('a');
      downloadLink.href = imageDataUrl;
      downloadLink.download = 'diagram.png';
      downloadLink.textContent = 'Download Diagram';

      downloadLink.click();
    },
  },
  };
  </script>

<style scoped>
.button {
  float: right;
  margin: 10px;
  position: absolute;
}
.box-right {
  min-height: 36vw;
  background-color: white;
  box-shadow: 30%;
  border-radius: 6px;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
}
</style>