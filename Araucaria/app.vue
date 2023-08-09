<!-- // app.vue
<template>
  <v-btn>Hello Sass Changes</v-btn>
</template>

<style lang="scss">
@use './settings';
</style> -->

<script setup>
import Canvas from "components/Canvas.vue";
import CanvasTools from "components/CanvasTools.vue";
import Gallery from "components/Gallery.vue";
import GenerateButton from "components/GenerateButton.vue";
import Loader from "components/Loader.vue";
import { usePrompt } from "composables/prompt";

const { prompt } = usePrompt();
</script>

<template>
  <v-app ref="el" class="d-flex justify-center mx-8" max-height="95vh">
    <v-container class="mt-10">
      <v-responsive height="95vh">
        <v-row no-gutters>
          <v-col class="d-flex flex-column justify-space-around h-100 mx-1">
            <v-layout>
              <CanvasTools />
              <Canvas />
            </v-layout>
            <v-container fluid class="d-flex h-100 justify-space-around">
              <v-textarea
                v-model="prompt"
                clearable
                clear-icon="mdi:mdi-close-circle"
                label="¿Qué quieres generar?"
                :value="prompt"
              />
              <GenerateButton />
            </v-container>
          </v-col>
          <v-col class="h-100" cols="3">
            <Gallery />
          </v-col>
        </v-row>
      </v-responsive>
      <Loader />
    </v-container>
  </v-app>
</template>
