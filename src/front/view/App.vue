<template>
    <div id="app" >
      <v-app id="inspire">
        <MainAppBar 
        :openedDialog="openedDialog"/>

      <v-layout>
        <ItemsListLayout 
        @openedDialogChanged="reloadDialog" 
        @itemsUpdated = "itemsUpdated"
        :needUpdateItemsList="needUpdateItemsList"/>
        
        <DialogLayout 
        @messageSended="reloadThisDialogWithCheck" 
        :openedDialog="openedDialog"/>
      </v-layout>
      </v-app>
    </div>
</template>

<script lang="ts">
  import { api } from "@/background/renderer/ipc/api"
  import { Ref, defineComponent, ref } from "vue";
  import MainAppBar from "./main/MainAppBar.vue";
  import ItemsListLayout from "./main/ItemsListLayout.vue";
  import DialogLayout from "./main/DialogLayout.vue";

  export default defineComponent({
    name: "App",
    components: {
        MainAppBar,
        ItemsListLayout,
        DialogLayout
    },
    data() {
      const openedDialog: Ref = ref(null);
      const needUpdateItemsList: Ref = ref(false);

      return {
        openedDialog,
        needUpdateItemsList
      }
    },
    methods: {
      reloadThisDialogWithCheck(reload: boolean) {
        if (reload)
        {
          this.reloadDialog(this.openedDialog.id);
          this.openedDialog.temporaryMessage = '';
          this.needUpdateItemsList = true;
        }
      },

      itemsUpdated() {
        this.needUpdateItemsList = false;
      },

      reloadDialog(id: number) {
        api.openDialog(id).then((dialog) => {
          this.openedDialog = dialog;
        });
      }
    }
  })

</script>

<style>
@import "./styles/styles.css";
</style>