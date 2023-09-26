<template>
  <div class="container" id="viewport_">
    <!-- Loop through diagrams to create elements -->
    <div class="columns">
      <!-- Diagram Column -->
      <div class="column is-full">
        <div class="diagram-object has-text-centered">
            <ul>
              <li v-for="(diagram, index) in data.diagrams" :key="'diagram-' + index" class="">
                <RecursiveDiagram :data="diagram.parent" />
                <Links :data="data" />
              </li>
            </ul>            
          </div>

      </div>
    </div>
  </div>
</template>

<script>
import RecursiveDiagram from './RecursiveDiagram.vue';
import Links from './links.vue';
export default {
  props: {
    data: Object,
  },
  components: {
    RecursiveDiagram,
    Links,
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
  max-width: 80vw; /* Set a maximum width for the diagram content */
  max-height: 80vh; /* Set a maximum height for the diagram content */
}

.inner-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Add your CSS styles for the inner content here */
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
