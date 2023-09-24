<template>
    <div>
      <div :class="{'parent': isParent, 'child': isChild}">
        <component
          :is="getComponentName(data.shape.toLowerCase())"
          :data="data.text"
          :name="data.name"
          :size="data.size"
        />
  
        <ul class="children-container">
          <li v-for="(nested, childIndex) in data.children" :key="'child-' + childIndex" class="diagram-object">
            <RecursiveDiagram :data="nested.child" />
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import Square from './objects/square.vue';
  import Circle from './objects/circle.vue';
  
  export default {
    props: {
      data: Object, // Data for the diagram object
    },
    components: {
      Square,
      Circle,
    },
    computed: {
      isParent() {
        return this.data.children && this.data.children.length > 0;
      },
      isChild() {
        return !this.isParent;
      },
    },
    methods: {
      getComponentName(shape) {
        switch (shape) {
          case 'square':
            return 'Square';
          case 'circle':
            return 'Circle';
          default:
            return 'div';
        }
      },
    },
  };
  </script>
  
  <style scoped>
/* Style for parent diagrams */
.parent {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  width: 100%; /* Set the width of the parent element */
  height: 100%; /* Set the height of the parent element */
}

.child {
  padding: 10px; /* Padding for the child content */
}
/* Style for the children container */
.children-container {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
  </style>
  