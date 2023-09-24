box of editor and box of diagram components are not aligned, why? can you fix this?
<template>
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container is-fluid">
          <div class="box">
              
                <h1 class="title">YAML Editor</h1>
                <!-- Replace the textarea with vue-codemirror -->
                <codemirror
                    v-model="yamlContent"
                    placeholder="Code goes here..."
                    :style="{ height: '35vw;' }"
                    :autofocus="true"
                    :indent-with-tab="true"
                    :tab-size="2"
                    @ready="handleReady"
                    @change="log('change', $event)"
                    @focus="log('focus', $event)"
                    @blur="log('blur', $event)"
                />

          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { shallowRef } from 'vue'
  import { Codemirror } from 'vue-codemirror'
  import yaml from 'js-yaml';
  export default {
    components: {
        Codemirror,
    },
    setup() {

      // Codemirror EditorView instance ref
      const view = shallowRef()
      const handleReady = (payload) => {
        view.value = payload.view
      }

      return {
        handleReady,
        log: console.log
      }
    },
    data() {
      return {
        yamlContent: `# Default YAML Content
diagrams:
  - parent:
      shape: square
      text: Parent 1
      name: parent-1
      size: medium
      children:
        - child:
            shape: circle
            text: Child 1-1
            name: child-1-1
            size: small
        - child:
            shape: circle
            text: Child 1-2
            name: child-1-2
            size: small
`,
        parsedYaml: '',
      };
    },
    watch: {
      yamlContent: {
        handler(newYaml) {
          try {
            const parsed = yaml.load(newYaml);
            this.parsedYaml = JSON.stringify(parsed, null, 2);
            // Emit the parsed data to the parent component
            this.$emit('parsedYamlChanged', parsed);
          } catch (error) {
            this.parsedYaml = 'Syntax error YAML : ' + error.message;
          }
        },
        immediate: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Utilisez les classes Bulma ici pour personnaliser le style si nécessaire */

  .box {
    min-height: 40vw;
    padding: 1.5rem; /* Add some padding to the boxes for spacing */
  }

  </style>
  