<template>
  <div class="language-switcher">
    <button class="lang-button es mr-2 bg-opacity-10" @click="switchLanguage('es')">ES</button>
    <button class="lang-button en" @click="switchLanguage('en')">EN</button>
  </div>
</template>

<script>
export default {
  methods: {
    switchLanguage(lang) {
      this.$i18n.locale = lang;
    },
  },
};
</script>

<style scoped>
.language-switcher {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}

.lang-button {
  position: relative;
  /* Para el pseudo-elemento */
  padding: 8px 16px;
  font-weight: bold;
  color: white;
  /* Texto en blanco */
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.lang-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* Opacidad del fondo */
  border-radius: 4px;
  /* Coincide con el borde del botón */
}

.lang-button.es::before {
  opacity: 0.3;
  background-image: url('@/assets/col.svg');
  /* Bandera de Colombia */
}

.lang-button.en::before {
  opacity: 0.3;
  background-image: url('@/assets/eeuu.svg');
  /* Bandera de Estados Unidos */
}
</style>