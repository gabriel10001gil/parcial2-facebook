<template>
  <div class="amigos">
    <div class="card">
      <h2>Mis Amigos</h2>

      <!-- Contador -->
      <p class="contador">
        Tienes {{ amigos.length }} amigo{{ amigos.length !== 1 ? 's' : '' }}
      </p>

      <ul class="lista-amigos">
        <li v-for="(amigo, index) in amigos" :key="index">
          <div class="info-amigo">
            <img
              class="foto-amigo"
              :src="amigo.foto"
              :alt="`Foto de ${amigo.nombre}`"
            />
            <span class="nombre">{{ amigo.nombre }}</span>
          </div>
          <button class="btn-eliminar" @click="eliminarAmigo(index)">✕</button>
        </li>
      </ul>

      <!-- Agregar nuevo amigo -->
      <div class="form-agregar">
        <input
          v-model="nuevoAmigo"
          type="text"
          placeholder="Agregar nuevo amigo"
          @keyup.enter="agregarAmigo"
        />
        <button @click="agregarAmigo">Agregar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AmigosView",
  data() {
    return {
      nuevoAmigo: "",
      amigos: [
        { nombre: "Juan Pérez", foto: "https://randomuser.me/api/portraits/men/11.jpg" },
        { nombre: "María Gómez", foto: "https://randomuser.me/api/portraits/women/22.jpg" },
        { nombre: "Carlos López", foto: "https://randomuser.me/api/portraits/men/33.jpg" },
      ],
    };
  },
  methods: {
    agregarAmigo() {
      if (this.nuevoAmigo.trim() !== "") {
        const nuevo = {
          nombre: this.nuevoAmigo.trim(),
          // 🔄 Foto aleatoria
          foto: `https://randomuser.me/api/portraits/${
            Math.random() > 0.5 ? "men" : "women"
          }/${Math.floor(Math.random() * 80)}.jpg`,
        };
        this.amigos.push(nuevo);
        this.nuevoAmigo = "";
      }
    },
    eliminarAmigo(index) {
      this.amigos.splice(index, 1);
    },
  },
};
</script>

<style scoped>
/* Fondo con degradado blanco-azul */
.amigos {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: linear-gradient(180deg, #e4efff 0%, #f8fbff 100%);
  min-height: 90vh;
  padding-top: 40px;
  font-family: "Poppins", sans-serif;
  color: #1c1e21;
}

/* Tarjeta principal */
.card {
  background: #ffffff;
  width: 500px;
  border-radius: 14px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 25px;
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-3px);
}

h2 {
  text-align: center;
  color: #1c1e21;
  margin-bottom: 8px;
}

.contador {
  text-align: center;
  color: #555;
  font-size: 15px;
  margin-bottom: 20px;
}

/* Lista de amigos */
.lista-amigos {
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
}

.lista-amigos li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.info-amigo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.foto-amigo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #1877f2;
  background-color: #fff;
}

.nombre {
  color: #1c1e21;
  font-weight: 600;
  font-size: 15px;
}

/* Botón eliminar */
.btn-eliminar {
  background: none;
  border: none;
  color: #888;
  font-size: 18px;
  cursor: pointer;
  transition: color 0.2s;
}

.btn-eliminar:hover {
  color: #e74c3c;
}

/* Formulario agregar amigo */
.form-agregar {
  display: flex;
  gap: 10px;
}

input {
  flex: 1;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  outline: none;
  font-size: 14px;
  color: #1c1e21;
  background-color: #fff;
  transition: border 0.2s, box-shadow 0.2s;
}

input:focus {
  border-color: #1877f2;
  box-shadow: 0 0 4px rgba(24, 119, 242, 0.3);
}

button {
  background-color: #1877f2;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.2s, transform 0.1s;
}

button:hover {
  background-color: #0e63d9;
  transform: scale(1.03);
}
</style>
