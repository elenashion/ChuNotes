const app = new Vue({
  vuetify: new Vuetify({
  }),
  el: '#app',
  async beforeDestroy () {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize, { passive: true })
    }
  },
  async mounted () {
    await this.onResize();
    await this.fetchData();
    window.addEventListener('resize', this.onResize, { passive: true });
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
    },

    async onResize () {
      // Minus app-bar and margins
      this.windowsHeights.filesListHeight = window.innerHeight - 75;
      this.windowsHeights.filesEditPanelHeight = this.windowsHeights.filesListHeight / 4;
      this.windowsHeights.filesContentHeight = this.windowsHeights.filesEditPanelHeight * 3;
      // Minus fixed-sized files list card and margins
      this.filesEditPanelWeight = window.innerWidth - 350 - 20;
    }
  },
  data: {
    items: [],
    checkedItem: null,
    color: 'rgb(232, 243, 247)',
    filesEditPanelWeight: 100,
    windowsHeights: {filesListHeight: 400, filesEditPanelHeight: 400, filesContentHeight: 100},
  }
});