<template>
  <div class="perfil-fotos">
    <img v-for="(foto, index) in fotos" :key="index" :src="foto" alt="foto perfil" />
  </div>
</template>

<script>
export default {
  name: "FotosPerfil",
  props: {
    fotos: Array
  }
};
</script>

<style scoped>
.perfil-fotos {
  display: flex;
  gap: 8px;
  margin-top: 10px;
}
.perfil-fotos img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 5px;
}
</style>
