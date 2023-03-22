<template>
    <div class="app-bar-items-wrapper">
      <v-app-bar
      flat
      fixed
      class="app-bar-items"
      >
      <input class="input-files-search" type="text" id="inputForSearch" placeholder="Search">
      <button class="button-add-new-file" @click="addNewFile"></button>
      <v-divider vertical></v-divider>
      <v-card class="opened-dialog-title-card" v-if="openedDialog.dialog">
        <div class="checked-item-title">{{ openedDialog.dialog.title }}</div>
      </v-card>
      </v-app-bar>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainAppBar",
  props: ['openedDialog'],
  setup() {
    const addNewFile = () => {
      let a = 0;
    };

    return {
      addNewFile,
    };
  }
  });
</script>
