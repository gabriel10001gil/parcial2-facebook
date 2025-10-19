<template>
  <div class="perfil">
    <!-- PORTADA -->
    <div class="portada">
      <!-- foto-perfil posicionada sobre la portada -->
      <img class="foto-perfil" :src="fotoPrincipal" alt="Foto de perfil" />
    </div>

    <!-- INFO -->
    <div class="perfil-body">
      <div class="info">
        <h2>Jocelyn Sullivan</h2>
        <p class="det">💞 En una relación con Ben Bloom</p>
        <p class="det">🎓 Estudió Psicología en Stanford University</p>
        <p class="det">🏡 De Urbana, Illinois</p>
      </div>

      <!-- GALERÍA -->
      <div class="galeria" aria-label="Galería de fotos">
        <img
          v-for="(f, i) in fotos"
          :key="i"
          :src="f"
          :alt="'Foto ' + (i+1)"
          class="galeria-img"
        />
      </div>

      <!-- PUBLICACIÓN -->
      <div class="publicacion">
        <div class="publicacion-header">
          <img class="mini-foto" :src="fotoPrincipal" alt="Mini foto" />
          <div class="meta">
            <strong>Jocelyn Sullivan</strong>
            <p class="hora">Viernes a las 12:46pm</p>
          </div>
        </div>

        <p class="contenido">
          Estuvo en el Art Institute of Chicago con Ben Bloom.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
/*
  Importa la imagen desde assets para que Vite la procese correctamente.
  Si prefieres usar imágenes remotas, coloca sus URLs en `fotos` abajo.
*/
import foto from '../assets/vue.jpg'

export default {
  name: 'PerfilView',
  data() {
    return {
      fotoPrincipal: foto,
      fotos: [
        'https://via.placeholder.com/120?text=Foto+1',
        'https://via.placeholder.com/120?text=Foto+2',
        'https://via.placeholder.com/120?text=Foto+3',
        'https://via.placeholder.com/120?text=Foto+4',
        'https://via.placeholder.com/120?text=Foto+5'
      ]
    }
  }
}
</script>

<style scoped>
.perfil {
  max-width: 900px;
  margin: 30px auto;
  font-family: Arial, sans-serif;
  color: #1c1e21;
}

/* PORTADA */
.portada {
  position: relative;
  height: 200px;
  background: linear-gradient(180deg, #3b5998 0%, #1877f2 100%);
  border-radius: 10px 10px 0 0;
}

/* Foto de perfil sobre la portada */
.foto-perfil {
  position: absolute;
  left: 30px;
  bottom: -60px;            /* sobresale por debajo de la portada */
  width: 120px;
  height: 120px;
  border-radius: 6px;
  border: 4px solid white;
  object-fit: cover;
  background: #fff;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

/* CONTENIDO */
.perfil-body {
  background: #fff;
  border-radius: 0 0 10px 10px;
  padding: 80px 20px 20px 20px; /* padding-top para dejar espacio a la foto-perfil */
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

/* Info del perfil */
.info {
  margin-left: 10px;
  margin-bottom: 16px;
}
.info h2 {
  margin: 0 0 6px 0;
  font-size: 24px;
}
.det {
  margin: 3px 0;
  color: #555;
  font-size: 14px;
}

/* GALERÍA */
.galeria {
  display: flex;
  gap: 10px;
  margin: 12px 0 20px 0;
  flex-wrap: wrap;
}
.galeria-img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #e1e1e1;
}

/* PUBLICACIÓN */
.publicacion {
  background: #f5f6f7;
  padding: 12px;
  border-radius: 8px;
}
.publicacion-header {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 8px;
}
.mini-foto {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
}
.meta strong {
  display: block;
}
.hora {
  margin: 0;
  color: #65676b;
  font-size: 12px;
}
.contenido {
  margin: 0;
  color: #1c1e21;
  font-size: 14px;
}

/* Ajustes responsivos simples */
@media (max-width: 760px) {
  .perfil { padding: 0 8px; }
  .foto-perfil { left: 50%; transform: translateX(-50%); }
  .perfil-body { padding-top: 90px; }
  .galeria-img { width: 100px; height: 100px; }
}
</style>
