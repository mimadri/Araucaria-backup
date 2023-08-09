<script setup>

const { canvas, strokeColor, backgroundColor, lineWidth, undo, redo, reset } =
  useCanvas();

const lineWidthMenu = ref(false);
const strokeColorMenu = ref(false);
const backgroundColorMenu = ref(false);

const backgroundColorUpdate = () => canvas.value.redraw();
</script>

<template>
  <v-navigation-drawer location="left" rail>
    <v-list-item>
      <v-menu
        v-model="strokeColorMenu"
        location="start"
        :close-on-content-click="false"
      >
        <template #activator="{ props }">
          <v-btn icon v-bind="props" :rounded="0">
            <v-icon icon="mdi:mdi-circle" :color="strokeColor" />
          </v-btn>
        </template>
        <v-color-picker v-model="strokeColor" hide-inputs />
      </v-menu>
    </v-list-item>
    <v-list-item>
      <v-menu
        v-model="backgroundColorMenu"
        location="start"
        :close-on-content-click="false"
      >
        <template #activator="{ props }">
          <v-btn icon v-bind="props" :rounded="0">
            <v-icon icon="mdi:mdi-circle" :color="backgroundColor" />
          </v-btn>
        </template>
        <v-color-picker
          v-model="backgroundColor"
          hide-inputs
          @update:model-value="backgroundColorUpdate"
        />
      </v-menu>
    </v-list-item>
    <v-list-item>
      <v-menu
        v-model="lineWidthMenu"
        :close-on-content-click="false"
        location="start"
      >
        <template #activator="{ props }">
          <v-btn icon="mdi:mdi-lead-pencil" v-bind="props" :rounded="0" />
        </template>
        <v-card min-width="300" min="5" max="100">
          <v-slider v-model="lineWidth" />
        </v-card>
      </v-menu>
    </v-list-item>
    <v-list density="comfortable" nav>
      <v-list-item>
        <v-btn icon="mdi:mdi-undo-variant" :rounded="0" @click="undo" />
      </v-list-item>
      <v-list-item>
        <v-btn icon="mdi:mdi-redo-variant" :rounded="0" @click="redo" />
      </v-list-item>
      <v-list-item>
        <v-btn icon="mdi:mdi-delete" :rounded="0" @click="reset" />
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
