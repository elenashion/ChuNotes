<template>
<!-- Temporary hardcoded height, add resizing later -->
  <v-card
  width="90%"
  height="650px"
  >
    <v-list 
    v-if="openedDialog"
    width="100%"
    height="75%"
    class="lists-container"
    >
    <v-list-item
    v-for="item in openedDialog.messages"
    :key="item.date"
    >
      <div class="message-content">
        <v-card>
          <div>
            <v-card-item class="single-message-time-style">{{ formatDate(item.date) }}</v-card-item>
            <v-card-text class="single-message-text-content-style">{{ item.text }}</v-card-text>
          </div>
        </v-card>
      </div>
    </v-list-item>
    </v-list>

    <v-card
    v-if="openedDialog"
    height="25%"
    width="100%"
    class="message-container"
    >
      <v-textarea
      no-resize
      width="70%"
      variant="outlined"
      hide-details="auto"
      placeholder="Enter the text..."
      v-model="openedDialog.temporaryMessage"
      @keydown.enter.prevent.exact="$emit('messageSended', addMessageIntoDialog(openedDialog.id, openedDialog.temporaryMessage))"
      @keyup.ctrl.enter.prevent="newLine"
      class="message-input-textarea"
      ></v-textarea>
      <button class="button-add-text-into-file" 
      @click="$emit('messageSended', addMessageIntoDialog(openedDialog.id, openedDialog.temporaryMessage))"
      ></button>
    </v-card>

  </v-card>
</template>

<script lang="ts">
import { api } from "@/background/renderer/ipc/api"
import { defineComponent } from "vue"
import { trimTextBeforeSave, formatDate } from "@/background/helpers"

export default defineComponent({
  name: "DialogLayout",
  props: ['openedDialog'],
  emits: ['messageSended'],
  setup() {
    // Refactor this later
    const addMessageIntoDialog = (dialogId: number, temporaryMessage: String) => {
      const message = trimTextBeforeSave(temporaryMessage.normalize());
      if (message === '')
      {
        return;
      }
      try {
        api.addMessage(dialogId, message);
      } catch (e) {
        return false;
      }

      return true;
    };

    // TODO this function after refactoring
    const newLine = (e: Event) => {
      // let caret = e.target.selectionStart;
      // e.target.setRangeText("\n", caret, caret, "end");
      // this.text = e.target.value;
    }

    return {
      addMessageIntoDialog,
      formatDate,
      newLine
    }
  }

});
</script>


<style>
.v-theme--light.v-card.message-container {
  background-color: var(--v-background-base, rgb(247, 243, 250)) !important;
  display: flex;
  align-items: center;
}

.v-theme--light.v-list.lists-container {
  background-color: var(--v-background-base, rgb(254, 253, 255)) !important;
}

.message-content {
  margin-left: 10px;
  margin-bottom: 10px;
}

.single-message-time-style {
  font-size: small;
  color: gainsboro;
}

.single-message-text-content-style {
  white-space: pre-line !important;
  letter-spacing: 0.5px;
  font-size: medium;
  color: rgb(97, 73, 73);
  margin-left: 10px;
  margin-right: 10px;
}

.v-input.message-input-textarea:before {
  border-style: none !important;

}

.v-input.message-input-textarea {
  background-color: var(--v-background-base, rgb(254, 253, 255)) !important;
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 5px;
  border-radius: 0%;
  grid-template-areas: none !important;
  grid-template-columns: none !important;
  --v-input-padding-top: 0px;
  --v-input-control-height: 0px;
}


.button-add-text-into-file {
  display: block;
  width: 30px;
  height: 30px;
  margin-right: 5px;
  background: url(../../../../sources/add-file-icon-2.png) no-repeat;
  background-size: 100%;
  border-color:#212529;
  border-width: 1px;
}

.button-add-text-into-file:hover {
  background-color: rgb(238, 235, 241);
}
</style>