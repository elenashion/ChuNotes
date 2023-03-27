<template>
<!-- Temporary hardcoded height, add resizing later -->
  <v-card
  width="30%"
  max-width="350"
  height="650px"
  class="mx-auto lists-container"
  >
  <v-virtual-scroll
  :items="items"
  :item-height="70"
  >
  <template v-slot="{ item }">
    <v-list-item
    :key="item.id"
    @click="$emit('openedDialogChanged', item.id)"
    >
    <div class="div-in-files-list"> 
      <v-list-item-title> {{ item.title }}  </v-list-item-title>
      <v-list-item-subtitle> {{ item.shortPreview }} </v-list-item-subtitle>
      <v-divider></v-divider>
    </div>
    </v-list-item>
  </template>
  </v-virtual-scroll>
  </v-card>
</template>



<script lang="ts">
  import { api } from "@/background/renderer/ipc/api"
  import { defineComponent, onMounted, Ref, ref } from "vue"

  export default defineComponent({
  name: "FileListLayout",
  emits: ['openedDialogChanged', 'itemsUpdated'],
  props: ['needUpdateItemsList'],
  setup() {
    const items: Ref = ref ([]);

    onMounted (async () => {
      reloadList();
    });

    const reloadList = () => {
      api.getListOfDialogs().then((dialogs) => {
        items.value = dialogs;
      });
    };

    return {
        items,
        reloadList
    }
  },
  watch: {
    needUpdateItemsList(isNeed: boolean) {
      if (isNeed)
      {
        this.reloadList();
        this.$emit('itemsUpdated');
      }
    }

  }
});

</script>


<style>
.v-theme--light.v-card.lists-container {
  background-color: var(--v-background-base, rgb(254, 253, 255)) !important;
  display: flex !important;
  justify-content: flex-start !important;
  margin-left: 5px !important;
  overflow-y: hidden;
}

.row-main-items-wrapper {
  height: 100%;
  margin-top: 10px;
}

.div-in-files-list {
  text-decoration: none;
  outline: none;
  display: block;
  padding: 6px 0; 
  letter-spacing: 1px;
  font-weight: 300;
  margin-left: 10px;
  color: #815b5b;
  transition: .3s linear;
}
</style>