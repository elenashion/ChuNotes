<template>

  <v-card
  width="65%"
  >
    <v-list 
    v-if="openedDialog.dialog"
    style="overflow-y: scroll"
    width="100%"
    height="75%"
    class="lists-container"
    >
    <v-list-item
    v-for="item in openedDialog.dialog.getMessages()"
    :key="openedDialog.dialog.id"
    >
      <div class="message-content">
        <v-card>
          <div>
            <v-card-text class="single-message-text-content-style">{{ item.text }}</v-card-text>
          </div>
        </v-card>
      </div>
    </v-list-item>
    </v-list>

    <v-card
    v-if="openedDialog.dialog"
    height="25%"
    width="100%"
    class="message-container"
    >
      <v-layout
      fill-height
      align-center
      justify-center>
        <v-textarea
        :no-resize="true"
        :outlined="true"
        width="70%"
        background-color="white"
        placeholder="Enter the text..."
        v-model="openedDialog.dialog.temporaryMessage"
        class="message-input-textarea"
        ></v-textarea>
        <button class="button-add-text-into-file" 
        @click="addMessageIntoDialog(openedDialog.dialog.id, openedDialog.dialog.temporaryMessage)"
        ></button>
      </v-layout>
    </v-card>

  </v-card>
</template>

<script lang="ts">
  import { defineComponent } from "vue"
  import { trimTextBeforeSave } from "@/background/helpers"

  export default defineComponent({
  name: "DialogLayout",
  props: ['openedDialog'],
  setup() {
    const addMessageIntoDialog = (id: number, temporaryMessage: string) => {
      const message = trimTextBeforeSave(temporaryMessage);
      if (message === '')
      {
        return;
      }
      // await window.filesApi.addTextIntoFile(
        // id, message);
      // addedMessage = '';
    };

    return {
      addMessageIntoDialog,
    }
  }

  });
</script>