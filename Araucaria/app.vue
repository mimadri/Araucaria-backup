<script setup>
const { prompt } = usePrompt();

if (typeof window !== 'undefined'){
  console.log("si existe")
}
</script>

<template>
  <v-app
    ref="el"
    class="d-flex justify-center mx-8"
    max-height="95vh"
  >
    <v-container class="mt-10">
      <v-responsive height="95vh">
        <v-row no-gutters>
          <v-col class="d-flex flex-column justify-space-around h-100 mx-1">
            <v-layout>
              <AraucariaCanvasTools />
              <AraucariaCanvas />
            </v-layout>
            <v-container
              fluid
              class="d-flex h-100 justify-space-around"
            >
              <v-textarea
                v-model="prompt"
                clearable
                clear-icon="mdi:mdi-close-circle"
                label="¿Qué quieres generar?"
                :value="prompt"
              />
              <AraucariaGenerateButton />
            </v-container>
          </v-col>
          <v-col
            class="h-100"
            cols="3"
          >
            <AraucariaGallery />
          </v-col>
        </v-row>
      </v-responsive>
      <AraucariaLoader />
    </v-container>
  </v-app>
</template>
