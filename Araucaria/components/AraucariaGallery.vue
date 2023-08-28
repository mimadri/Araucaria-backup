<script setup>

const { gallery, deleteImageFromGallery, sendMailContent } = useGallery();
const { setCanvasImage } = useCanvas();
const mailMenu = ref(false);
const email = ref(null);
const btnAction = async () => {
  sendMailContent(email.value, [...gallery.value.map((el) => el.base64)]);
  mailMenu.value = !mailMenu.value;
};
</script>

<template>
  <v-container
    max-height="95vh"
    height="95vh"
    class="pa-0"
  >
    <v-card
      height="8vh"
      class="d-flex justify-center align-center mt-0"
    >
      <v-card-text class="d-flex justify-center align-center">
        <v-dialog v-model="mailMenu">
          <template #activator="{ props }">
            <v-btn
              color="primary"
              v-bind="props"
            >
              Enviar imágenes
            </v-btn>
          </template>
          <v-card>
            <v-card-text>
              <v-text-field
                v-model="email"
                label="Email*"
                hint="Necesitamos tu correo para enviarte las imágenes."
                type="email"
                required
              />
            </v-card-text>
            <v-card-actions class="d-flex justify-center align-center">
              <v-btn
                color="primary"
                @click="btnAction"
              >
                Enviar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card-text>
    </v-card>
    <v-responsive
      max-height="87vh"
      height="87vh"
      class="overflow-y-auto"
    >
      <v-row>
        <v-col
          v-for="({ img }, n) in [...gallery].reverse()"
          :key="n"
          cols="12"
        >
          <v-card>
            <v-img
              :src="img"
              @click="setCanvasImage(img)"
            />
            <v-card-actions>
              <v-spacer />
              <v-btn
                size="small"
                color="surface-variant"
                icon="mdi:mdi-delete"
                @click="deleteImageFromGallery(n)"
              />
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>
