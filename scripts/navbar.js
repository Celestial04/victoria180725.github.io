document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu");
  menu.innerHTML = `
    <a href="/"><img src="/images/logo.svg" alt="Logo"></a>
    <div class="links">
      <a href="/" class="item">Accueil</a>
      <a href="/projects" class="item">Projets</a>
      <a href="/pictures" class="item">Galerie de photos</a>
      <a href="contact.html" class="item">Contact</a>
    </div>
  `;
});