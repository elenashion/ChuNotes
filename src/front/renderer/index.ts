import { createApp } from "vue";
import App from "@/front/view/App.vue";
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import * as labs from 'vuetify/labs/components';

const vuetify = createVuetify({
  components,
  directives,
});

const anotherVuetify = createVuetify({
  components: {
    ...labs
  }
})

createApp(App)
  .use(vuetify)
  .use(anotherVuetify)
  .mount('#app');