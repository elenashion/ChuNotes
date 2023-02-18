const app = new Vue({
  el: '#app',
  methods: {
    openfile: (id) => {
      window.api.openfile(id);
    },
    getListOfFiles: () => {
      window.api.getListOfFiles();
    }
  }
})