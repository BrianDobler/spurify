<script lang="ts">
  const tiempoActual = new Date();
  const horaActual = tiempoActual.getHours();

  let saludo = "";

  if (horaActual < 12) {
    saludo = "Buenos Días! 🌞";
  } else if (horaActual < 18) {
    saludo = "Buenas Tardes! 🌇";
  } else {
    saludo = "Buenas Noches! 🌙";
  }
</script>

<h1 class="text-white text-4xl font-bold">{saludo}</h1>
