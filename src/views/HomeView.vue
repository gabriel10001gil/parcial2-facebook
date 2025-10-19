<template>
  <div class="home">
    <!-- SECCIÓN CENTRAL -->
    <main class="contenido">
      <div class="login-card">
        <h2>Inicia sesión en Facebook</h2>
        <input type="text" placeholder="Correo electrónico o teléfono" v-model="email" />
        <input type="password" placeholder="Contraseña" v-model="password" />
        <button class="btn-login" @click="iniciarSesion">Iniciar sesión</button>
        <p class="crear-cuenta">¿No tienes cuenta? <a href="#">Crea una nueva cuenta</a></p>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    iniciarSesion() {
      if (this.email && this.password) {
        alert(`Bienvenido, ${this.email}!`);
      } else {
        alert("Por favor ingresa tus datos para continuar.");
      }
    },
  },
};
</script>

<style scoped>
.home {
  background-color: #f0f2f5;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 🧍‍♂️ Sección central */
.contenido {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 85vh;
  width: 100%;
}

/* 🪪 Tarjeta de inicio de sesión */
.login-card {
  background: #fff;
  padding: 40px 30px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 360px;
}

h2 {
  color: #1c1e21;
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 12px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
}

input:focus {
  border-color: #1877f2;
}

.btn-login {
  width: 100%;
  background-color: #1877f2;
  color: white;
  border: none;
  padding: 12px;
  font-size: 16px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}

.btn-login:hover {
  background-color: #0e63d9;
}

.crear-cuenta {
  margin-top: 15px;
  color: #1c1e21;
}

.crear-cuenta a {
  color: #1877f2;
  text-decoration: none;
  font-weight: bold;
}

.crear-cuenta a:hover {
  text-decoration: underline;
}
</style>
