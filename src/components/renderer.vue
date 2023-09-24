<template>
    <div class="container" id="viewport_">
      <!-- Loop through diagrams to create elements -->
      <div class="columns"> 
        <!-- Diagram Column -->
        <div class="column is-full" >
            <ul class="diagram-list">
              <li v-for="(diagram, index) in data.diagrams" :key="'diagram-' + index" class="diagram-object">
                <RecursiveDiagram :data="diagram.parent"/>
              </li>
            </ul>
        </div>
        <!-- Loop through links to create connecting lines -->
        <svg class="link-container" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" />
            </marker>
          </defs>
          <line
          v-for="(link, index) in data.links"
          :key="'link-' + index"
          :x1="calculateXPosition(link.data.from, true)"
          :y1="calculateYPosition(link.data.from, true)"
          :x2="calculateXPosition(link.data.to, false)"
          :y2="calculateYPosition(link.data.to, false)"
          stroke="black"
          marker-end="url(#arrowhead)"
        />
        </svg>
          <!-- {{ data.links }}
          <div v-for="(link, index) in data.links" :key="'link-' + index" class="diagram-object">
            <div class="inner-content">
              {{ link.data.from }}
              {{ calculateYPosition(link.data.from) }} and {{ calculateXPosition(link.data.from) }}
              <svg class="point-container" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <circle :cx="calculateXPosition(link.data.to)" :cy="calculateYPosition(link.data.to)" r="5" fill="red" />
              </svg>
            </div>
          </div> -->
      </div>
    </div>
</template>

<script>
import RecursiveDiagram from './RecursiveDiagram.vue';

export default {
  props: {
    data: Object,
  },
  components: {
    RecursiveDiagram,
  },
  methods: {
    calculateXPosition(name, isFrom) {
      const container = document.getElementById('viewport_');
      const element = document.getElementById(name); // Replace with your element's ID
      const rect_container = container.getBoundingClientRect();
      if (element) {
        const rect = element.getBoundingClientRect();
        const offset = isFrom ? rect.left + rect.width / 2 - rect_container.left : rect.left + rect.width / 2 - rect_container.left;
        return offset; // Adjust for element width
      }
      return 0;
    },
    calculateYPosition(name, isFrom) {
      const container = document.getElementById('viewport_');
      const element = document.getElementById(name); // Replace with your element's ID
      const rect_container = container.getBoundingClientRect();
      if (element) {
        const rect = element.getBoundingClientRect();
        const offset = isFrom ? rect.top + rect.height / 2 - rect_container.top : rect.top + rect.height / 2 - rect_container.top;
        return offset; // Adjust for element height
      }
      return 0;
    },
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
  padding: 10px;
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