<template>
  <v-card
  width="350"
  class="mx-auto lists-container"
  >
  <v-virtual-scroll
  :items="items"
  :item-height="70"
  :height="filesListHeight"
  max-width="350"
  >
  <template v-slot="{ item }">
    <v-list-item
    :key="item.title"
    @click="openFile(item.title)"
    >
    <div class="div-in-files-list"> 
      <v-list-item-content>
        <v-list-item-title> {{ item.title }}  </v-list-item-title>
        <v-list-item-subtitle> {{ item.shortPreview }} </v-list-item-subtitle>
        <v-divider></v-divider>
      </v-list-item-content>
    </div>
    </v-list-item>
  </template>
  </v-virtual-scroll>
  </v-card>
</template>



<script lang="ts">
  import { defineComponent, onMounted, PropType } from "vue"
  import { Item } from "@/background/entities";

  export default defineComponent({
  name: "FileListLayout",
  props: {
    checkedItem: {
      type: Object as PropType<Item>,
      require: false,
      default: null,
    },
    filesListHeight: {
      type: Number,
      require: true,
      default: 400,
    },
    items: {
      type: Object as PropType<Item[]>,
      require: true,
      default: []
    }

  },
  setup(props) {

    onMounted(() => {
        // window.addEventListener('resize', this.onResize, { passive: true });
    });
    
    const setCheckedItem = (id: number) => {
    };
    const getCheckedItem = () => {
        return props.checkedItem;
    };
    const openFile = (id: number) => {
      const checkedItem = new Item(1, "", "");

    }
    return {
        setCheckedItem,
        getCheckedItem,
        openFile
    }
  }
});

</script>
