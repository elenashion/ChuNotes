import { createApp } from "vue";
import App from "@/front/view/App.vue";
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import * as labs from 'vuetify/labs/components';
import { api } from "@/background/renderer/ipc/api"

const vuetify = createVuetify({
  components: {
    ...labs,
    ...components,
    ...directives
  }
});

createApp(App)
  .use(vuetify)
  .mount('#app');