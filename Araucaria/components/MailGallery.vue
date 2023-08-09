<script setup>
import { ref } from 'vue';
import { useMailGallery } from '@/composables/mail';

const { mailGallery, deleteImageFromMailGallery, sendMailContent } = useMailGallery();
const mailGalleryMenu = ref(false);
const email = ref(null);
const btnAction = async () => {
  sendMailContent(email.value, [...mailGallery.value.map((el) => el.base64)]);
  mailGalleryMenu.value = !mailGalleryMenu.value;
};
</script>

<template>
  <v-container
    max-height="95vh"
    height="95vh"
    class="pa-0"
  >
    <v-card
      height="7vh"
      class="mt-0"
    >
      <v-card-text class="d-flex justify-center">
        <v-dialog v-model="mailGalleryMenu">
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
      max-height="88vh"
      height="88vh"
      class="overflow-y-auto"
    >
      <v-row class="m-1">
        <v-col
          v-for="(el, n) in mailGallery"
          :key="n"
          cols="12"
        >
          <v-card>
            <v-img :src="el.img" />
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="surface-variant"
                icon="mdi:mdi-delete"
                size="small"
                @click="deleteImageFromMailGallery(n)"
              />
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>
