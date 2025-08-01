// Script para cambiar filtros activos (simulación)
document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
    button.classList.add("active");

    // Aquí puedes cargar dinámicamente productos según filtro
    // Por ahora, no cambia nada. Solo la clase activa.
  });
});
document.addEventListener('DOMContentLoaded', () => {
  console.log('Página "Nosotros" cargada correctamente.');
  alert('¡Bienvenido a nuestra historia! Descubre nuestra visión y misión 🔥');
});
