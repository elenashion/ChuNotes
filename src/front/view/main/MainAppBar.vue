<template>
    <div class="app-bar-items-wrapper">
      <v-app-bar
      width="100%" 
      flat
      fixed
      class="app-bar-items"
      >
      <input class="input-files-search" type="text" id="inputForSearch" placeholder="Search">
      <button class="button-add-new-file" @click="addNewFile"></button>
      </v-app-bar>
    </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
  name: "MainAppBar",
  setup() {
    const addNewFile = () => {

    };
    return {
      addNewFile
    };
  }
  });
</script>

<style>
@import "./styles.css";
</style>
