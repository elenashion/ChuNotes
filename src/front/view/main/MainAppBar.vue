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
      <v-card class="opened-dialog-title-card" v-if="openedDialog">
        <div class="checked-item-title">{{ openedDialog.title }}</div>
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


<style>
.app-bar-items-wrapper {
  height: 64px;
}

.v-theme--light.v-app-bar.app-bar-items {
  background-color: rgb(217, 207, 240) !important;
}

.input-files-search {
  display: block;
  width: 27%;
  max-width: 300px;
  padding: 0.375rem 0.75rem;
  margin-top: 10px;
  margin-left: 5px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: rgb(243, 239, 248);
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.375rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.button-add-new-file {
  display: block;
  width: 30px;
  height: 30px;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 10px;
  background: url(../sources/add-file-icon-2.png) no-repeat;
  background-size: 100%;
  border-color:#212529;
  border-width: 1px;
}

.button-add-new-file:hover {
  background-color: rgb(197, 215, 243);
}

.v-theme--light.v-card.opened-dialog-title-card {
  height: 50px;
  width: 50%;
  margin-left: 20px;
  background-color: var(--v-background-base, rgb(241, 238, 243)) !important;
}

.checked-item-title {
  margin-left: 15px;
  margin-right: 15px;
  text-decoration: none;
  outline: none;
  display: block;
  padding: 10px 0; 
  letter-spacing: 0.7px;
  font-weight: 300;
  font-size: large;
  color: #815b5b;
  transition: .3s linear;
}
</style>