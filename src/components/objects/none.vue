<template>
    <div class="none-diagram">
      <div class="none">
        <!-- Anchor point (dot) -->
        <div class="anchor-point" :id="name"></div>
        {{ data.text }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      data: Object, // Data for the diagram object
      name: String,
    },
  };
  </script>
  
  <style scoped>
  .none-diagram {
    position: relative; /* Make the container relative for positioning */
    width: 100px; /* Adjust the width as needed */
    height: 100px; /* Adjust the height as needed */
  }
  
  .anchor-point {
    width: 8px; /* Adjust the size of the anchor point as needed */
    height: 8px;
    background-color: orange;
    border-radius: 50%; /* Makes it a circular dot */
    position: absolute;
    bottom: -4px; /* Adjust the position relative to the box */
    left: 50%; /* Position it in the center horizontally */
    transform: translateX(-50%); /* Center it horizontally */
  }
  </style>
  