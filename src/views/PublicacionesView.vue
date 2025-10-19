<template>
  <div class="publicaciones">
    <div class="card">
      <h2>Mis Publicaciones</h2>

      <textarea
        v-model="nuevaPublicacion"
        placeholder="¿Qué estás pensando?"
      ></textarea>

      <button @click="publicar">Publicar</button>

      <ul class="lista-publicaciones">
        <li v-for="(post, index) in publicaciones" :key="index">
          <div class="post-header">
            <img
              class="foto-autor"
              src="https://randomuser.me/api/portraits/women/65.jpg"
              alt="Foto autor"
            />
            <div>
              <strong>Jocelyn Sullivan</strong>
              <p class="hora">Hace un momento</p>
            </div>
          </div>
          <p class="contenido">{{ post }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "PublicacionesView",
  data() {
    return {
      publicaciones: [],
      nuevaPublicacion: "",
    };
  },
  methods: {
    publicar() {
      if (this.nuevaPublicacion.trim() !== "") {
        this.publicaciones.unshift(this.nuevaPublicacion.trim());
        this.nuevaPublicacion = "";
      }
    },
  },
};
</script>

<style scoped>
.publicaciones {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #f0f2f5;
  min-height: 90vh;
  padding-top: 30px;
  font-family: Arial, sans-serif;
  color: #1c1e21;
}

.card {
  background: #fff;
  width: 600px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

/* Título */
h2 {
  text-align: center;
  color: #1c1e21;
  margin-bottom: 20px;
  font-size: 22px;
  font-weight: bold;
}

/* Caja de texto */
textarea {
  width: 100%;
  min-height: 80px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  resize: vertical;
  font-size: 14px;
  color: #1c1e21;
  background-color: #fff; /* ✅ fondo claro */
}

textarea::placeholder {
  color: #777;
}

textarea:focus {
  border-color: #1877f2;
}

/* Botón */
button {
  display: block;
  margin: 15px auto;
  background-color: #1877f2;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.2s;
}

button:hover {
  background-color: #0e63d9;
}

/* Lista de publicaciones */
.lista-publicaciones {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

.lista-publicaciones li {
  background: #f5f6f7;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
}

.post-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
}

.foto-autor {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
}

.hora {
  color: #65676b;
  font-size: 12px;
  margin: 0;
}

.contenido {
  color: #1c1e21;
  margin: 0;
}
</style>
