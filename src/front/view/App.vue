<template>
    <div class="root">
      <h1>Some text</h1>
        <MainAppBar/>
    </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import MainAppBar from "./main/MainAppBar.vue";

  export default defineComponent({
    name: "App",
    components: {
        MainAppBar
    }
  })

</script>