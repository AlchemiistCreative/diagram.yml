<template>
    <div class="container" id="viewport_">
      <!-- Loop through diagrams to create elements -->
      <div class="columns"> 
        <!-- Diagram Column -->
        <div class="column is-full" >
            <ul class="diagram-list">
              <li v-for="(diagram, index) in data.diagrams" :key="'diagram-' + index" class="diagram-object">
                <RecursiveDiagram :data="diagram.parent"/>
                <Links :data="data"/>
              </li>
            </ul>
        </div>

      </div>
    </div>
</template>

<script>
import RecursiveDiagram from './RecursiveDiagram.vue';
import Links from './links.vue'
export default {
  props: {
    data: Object,
  },
  components: {
    RecursiveDiagram,
    Links
  },
};
</script>

<style scoped>
.renderer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
}

.diagram-object {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15%;
  overflow: hidden;
}

.inner-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.link-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.point-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

/* Add your CSS styles for the top-level diagram elements here */
</style>