/**
 * BOOM App - Sistema de Navegación Simple (SPA)
 */
document.addEventListener("DOMContentLoaded", () => {
  const mainSite = document.getElementById("main-site");
  const privacySection = document.getElementById("privacy-section");

  // Función que maneja la ruta según el Hash de la URL
  const handleRoute = () => {
    const currentHash = window.location.hash;

    if (currentHash === "#politica") {
      // Ocultamos la Home y mostramos Privacidad
      mainSite.style.display = "none";
      privacySection.style.display = "block";
      window.scrollTo(0, 0); // Nos aseguramos de estar arriba
      document.title = "Política de Privacidad | BOOM App";
    } else {
      // Mostramos la Home y ocultamos Privacidad
      privacySection.style.display = "none";
      mainSite.style.display = "block";
      window.scrollTo(0, 0);
      document.title = "BOOM App | Exclusividad y Comercio Local";
    }
  };

  // Escuchamos cuando el usuario cambia el Hash (hace clic en el enlace)
  window.addEventListener("hashchange", handleRoute);

  // Ejecutamos la función al cargar la página por primera vez
  handleRoute();
});
