<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="Diagram.yml" />

  &#xa0;

  <!-- <a href="https://diagramyml.netlify.app">Demo</a> -->
</div>

<h1 align="center">Diagram.yml</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/AlchemiistCreative/diagram.yml?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/AlchemiistCreative/diagram.yml?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/AlchemiistCreative/diagram.yml?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/AlchemiistCreative/diagram.yml?color=56BEB8">

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/AlchemiistCreative/diagram-yml?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/AlchemiistCreative/diagram-yml?color=56BEB8" /> -->

  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/AlchemiistCreative/diagram-yml?color=56BEB8" /> -->
</p>

<!-- Status -->

<!-- <h4 align="center"> 
	🚧  Diagram Yml 🚀 Under construction...  🚧
</h4> 

<hr> -->

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-example">Example</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/AlchemiistCreative" target="_blank">Author</a>
</p>

<br>

## :dart: About ##

Build diagram using yaml.

## :sparkles: Example ##


``` yaml
# YAML
# Default YAML Content
diagrams:
  - parent:
      shape: square
      text: Parent 1
      name: parent-1
      size: big
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
            size: big
            children:
            - child:
                shape: square
                text: Child 1-1-2
                name: child-1-1-2
                size: big
        
                
links:
  - type: link
    data:
      from: child-1-1
      to: child-1-2
  - type: link
    data:
      from: child-1-1
      to: parent-1
  - type: link
    data:
      from: child-1-1-2
      to: child-1-2
```

## :rocket: Technologies ##

The following tools were used in this project:

- [Vue.js](https://vuejs.org/)
- [Bulma](https://bulma.io)

## :white_check_mark: Requirements ##

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [ViteJS](https://vitejs.dev/) installed.

## :checkered_flag: Starting ##

```bash
# Clone this project
$ git clone https://github.com/AlchemiistCreative/diagram.yml

# Access
$ cd diagram.yml

# Install dependencies
$ npm install

# Run the project
$ npm run dev

# The server will initialize in the <http://localhost:5173> depending your vite configuration.
```

## :memo: License ##

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.


Made with :heart: by <a href="https://github.com/AlchemiistCreative" target="_blank">Thomas François</a>

&#xa0;

<a href="#top">Back to top</a>
