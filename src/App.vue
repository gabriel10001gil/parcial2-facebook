<template>
  <div id="app">
    <!-- 🔵 Barra principal -->
    <header class="navbar">
      <div class="navbar-content">
        <h1 class="logo">facebook</h1>
        <nav>
          <router-link to="/">Inicio</router-link>
          <router-link to="/perfil">Perfil</router-link>
          <router-link to="/amigos">Amigos</router-link>
          <router-link to="/publicaciones">Publicaciones</router-link>
        </nav>
      </div>
    </header>

    <!-- 🌐 Contenido dinámico -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  margin: 0;
  background-color: #f0f2f5;
  font-family: Arial, sans-serif;
}

#app {
  min-height: 100vh;
}

/* 🔵 Navbar */
.navbar {
  background-color: #1877f2;
  padding: 12px 30px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1000px;
  margin: 0 auto;
}

/* Logo estilo Facebook */
.logo {
  color: white;
  font-size: 30px;
  font-weight: bold;
  text-transform: lowercase;
  letter-spacing: -1px;
  cursor: default;
  margin: 0;
}

/* Links */
nav a {
  color: white;
  text-decoration: none;
  margin-left: 25px;
  font-weight: bold;
  transition: opacity 0.2s;
}

nav a:hover {
  opacity: 0.85;
}

.router-link-active {
  text-decoration: underline;
}
</style>
