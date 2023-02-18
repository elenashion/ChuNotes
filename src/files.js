const app = new Vue({
  vuetify: new Vuetify({
  }),
  el: '#app',
  async mounted () {
    await this.fetchData();
  },
  methods: {
    async fetchData () {
      this.items = await window.filesApi.getListOfFiles();
    },

    async openFile (id) {
      this.checkedItem = await window.filesApi.openFile(id);
    },

    async addNewFile () {
      // TODO
    }
  },
  data: {
    items: null,
    checkedItem: null,
    color: 'rgb(232, 243, 247)',
  }
});