<template>

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

</template>


<script>

export default {
  props: {
    data: Object,
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