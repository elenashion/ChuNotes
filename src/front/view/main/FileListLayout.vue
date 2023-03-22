<template>
  <v-card
  width="35%"
  class="mx-auto lists-container"
  >
  <v-virtual-scroll
  :items="items"
  :item-height="70"
  max-width="350"
  >
  <template v-slot="{ item }">
    <v-list-item
    :key="item.title"
    @click="$emit('openedDialogChanged', item.id, '')"
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
  import { defineComponent, PropType } from "vue"
  import type { Item } from "@/background/entities";

  export default defineComponent({
  name: "FileListLayout",
  props: {
    items: {
      type: Object as PropType<Array<Item>>,
      require: true,
      default: [
        {id: 0, title: "Uwuw", shortPreview: "Ehehehehe"}, 
        {id: 1, title: "Ara-ara", shortPreview: "Fu-fu-fu"}]
    }

  },
  emits: ['openedDialogChanged'],
  setup(props) {

    return {
        items: props.items
    }
  }
});

</script>
