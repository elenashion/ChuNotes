const app = new Vue({
  el: '#app',
  methods: {
    openfile: (title) => {
      window.api.openfile(title);
    },
    getListOfFiles: () => {
      window.api.getListOfFiles();
    },
    addNewFile: (title) => {
      window.api.addNewFile(title);
    },
    addTextIntoFile: (title, text) => {
      window.api.addTextIntoFile(title, text);
    },
  }
})