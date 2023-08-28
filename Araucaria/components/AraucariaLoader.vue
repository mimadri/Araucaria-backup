<script setup>

const { loading } = useLoading();
</script>

<template>
  <v-dialog
    v-model="loading"
    hide-overlay
    persistent
  >
    <v-card
      class="d-flex justify-center"
      color="darken-1"
    >
      <v-card-text class="d-flex justify-center text-h3">
        Generando imagen... 🖌️🖼️😊
      </v-card-text>
      <v-progress-linear
        indeterminate
        color="white"
        class="mb-0"
      />
    </v-card>
  </v-dialog>
</template>
