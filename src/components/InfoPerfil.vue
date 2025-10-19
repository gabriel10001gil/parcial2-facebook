<template>
  <div class="perfil-info">
    <h2>{{ nombre }}</h2>
    <p>📘 Estudia {{ carrera }} en {{ universidad }}</p>
    <p>🏡 Vive en {{ ciudad }}</p>
    <p>💞 En una relación con {{ pareja }}</p>
  </div>
</template>

<script>
export default {
  name: "InfoPerfil",
  props: {
    nombre: String,
    carrera: String,
    universidad: String,
    ciudad: String,
    pareja: String
  }
};
</script>

<style scoped>
.perfil-info {
  text-align: left;
  margin-left: 20px;
}
h2 {
  color: #1c1c1c;
  margin-bottom: 5px;
}
p {
  margin: 3px 0;
  color: #555;
}
</style>
