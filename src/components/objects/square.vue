<template>
  <div :class="{'square-diagram small': computedSize === 'small', 'square-diagram medium': computedSize === 'medium', 'square-diagram big': computedSize === 'big'}">
    <div class="square">
      <!-- Anchor point (dot) -->
      <div class="anchor-point" :id="name"></div>
      <p class="data-text">{{ data }}</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {},
  props: {
    data: String, // Data for the diagram object
    name: String,
    size: String
  },
  computed: {
    computedSize() {
      // Use 'medium' as the default size if 'size' prop is not provided
      return this.size || 'small';
    }
  }
};
</script>

<style scoped>
.square-diagram {
  position: relative; /* Make the container relative for positioning */
  padding: 5%;
}

.data-text {
  position: absolute; /* Position the text absolutely within the square */
  top: 50%; /* Vertically center the text */
  left: 50%; /* Horizontally center the text */
  transform: translate(-50%, -50%); /* Center the text both horizontally and vertically */
  font-size: 0.5vw; /* Adjust the font size based on the container's width */
  color: hsl(0, 0%, 96%);
}

.square {
  position: relative; /* Ensure that the square is a positioned element */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(171, 100%, 41%);
  /* Add other square styles as needed */
}

/* Specific selectors for each size */
.square-diagram.small {
  width: 3vw; /* Adjust the width as needed */
  height: 3vw; /* Adjust the height as needed */
}

.square-diagram.medium {
  width: 5vw; /* Adjust the width as needed */
  height: 5vw; /* Adjust the height as needed */
}

.square-diagram.big {
  width: 7vw; /* Adjust the width as needed */
  height: 7vw; /* Adjust the height as needed */
}

.anchor-point {
  width: 8px; /* Adjust the size of the anchor point as needed */
  height: 8px;
  background-color: hsl(0, 0%, 21%);
  border-radius: 50%; /* Makes it a circular dot */
  position: absolute;
  bottom: -4px; /* Adjust the position relative to the square */
  left: 50%; /* Position it in the center horizontally */
  transform: translateX(-50%); /* Center it horizontally */
}
</style>
