<template>
    <div id="app" >
      <v-app id="inspire">
        <MainAppBar :openedDialog="openedDialog"/>

      <v-layout>
        <FileListLayout @openedDialogChanged="reloadDialog"/>
        <DialogLayout :openedDialog="openedDialog"/>
      </v-layout>
      </v-app>
    </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import MainAppBar from "./main/MainAppBar.vue";
  import FileListLayout from "./main/FileListLayout.vue";
  import DialogLayout from "./main/DialogLayout.vue";
  import { Dialog, OpenedDialog } from "@/background/entities";

  export default defineComponent({
    name: "App",
    components: {
        MainAppBar,
        FileListLayout,
        DialogLayout
    },
    data() {
      return {
        openedDialog: new OpenedDialog()
      }
    },
    methods: {
      reloadDialog(id: number, temporaryMessage: string) {
        this.openedDialog.dialog = new Dialog(id, "New dialog", new Date());
        this.openedDialog.dialog.addNewMessage("Test message 1");
        this.openedDialog.dialog.addNewMessage("Test message 2");
        this.openedDialog.dialog.addNewMessage("Test message 3");

      }
    }
  })

</script>

<style>
@import "./styles/styles.css";
</style>