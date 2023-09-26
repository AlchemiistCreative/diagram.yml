
<script setup>
import Editor from '../components/editor.vue';
import Diagram from '../components/diagram.vue';
import Nav from '../components/nav.vue'
</script>

<template>
   <Nav />
<div class="diagram-container">
 
  <div class="columns">
    <div class="column is-half">
      <Editor @parsedYamlChanged="handleParsedYamlChange" />
    </div>
    <div class="column is-half">
      <Diagram :parsedData="parsedData" />
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      parsedData: null, 
    };
  },
  methods: {
    handleParsedYamlChange(parsedData) {
  
      console.log('Parsed YAML Data:', parsedData);

      this.parsedData = parsedData;
    },
  },
};
</script>



<style scoped>
.diagram-container {
  width: 100%; 
  height: 100vh; 
  overflow: hidden;
  margin-top: 4vw;
}
@media (max-width: 768px) {
  .columns {
    flex-direction: column; /* Change to column layout on smaller screens */
  }

  .diagram-container {
    min-height: 30vh; /* Adjust minimum height for smaller screens */
    overflow: auto;
  }
}
</style>
