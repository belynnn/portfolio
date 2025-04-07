//#region //! BOUTON POUR REMONTER EN HAUT DU SITE
// Récupèrer le bouton
var myButton = document.getElementById("scrollToTopBtn");
// Affiche ou cache le bouton en fonction du défilement
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";  // Affiche le bouton quand on descend
  } else {
    myButton.style.display = "none";   // Cache le bouton quand on est en haut
  }
};
// Revenir en haut de la page
function scrollToTop() {
  document.body.scrollTop = 0; // Pour Safari
  document.documentElement.scrollTop = 0; // Pour les autres navigateurs
}
//#endregion

//#region //! NAVIGATION MOBILE
// Mobile menu handling
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.querySelector('#mobileMenu .mobile-menu-container');
const mobileLinks = document.querySelectorAll('#mobileMenu .mobile-link');
// Toggle menu state
function toggleMenu() {
  mobileMenu.classList.toggle('open'); // Ajoute/retire la classe 'open' pour afficher/masquer le menu
  menuBtn.classList.toggle('active');  // Ajoute/retire la classe 'active' au bouton hamburger
}
// Menu button click handler
menuBtn.addEventListener('click', toggleMenu);
// Fermer le menu quand un lien mobile est tapé
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    toggleMenu(); // Ferme le menu
    // Attendre la fin de l'animation avant de faire défiler
    setTimeout(() => {
      const targetId = link.getAttribute('href'); // Récupérer l'ID de la section
      const targetSection = document.querySelector(targetId); // Trouver la section cible
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' }); // Défilement fluide
      }
    }, 300); // Attendre 300ms (durée de l'animation) avant de défiler
  });
});
// Fermer le menu si on clique en dehors
mobileMenu.addEventListener('click', (e) => {
  if (e.target === mobileMenu) { // Si on clique en dehors du menu
    toggleMenu(); // Ferme le menu
  }
});
// Fermer le menu lors du redimensionnement de l'écran
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768 && menuBtn.classList.contains('active')) {
    toggleMenu(); // Ferme le menu si l'écran est large
  }
});
//#endregion

//#region //! CHANGEMENT DE LANGUE
function switchLanguage() {
  // Si la langue actuelle est français (fr)
  if (document.documentElement.lang === 'fr') {
      document.documentElement.lang = 'en';  // Changer la langue en anglais
      document.getElementById('switchLang').textContent = 'FR';  // Mettre à jour le texte du bouton
      // Redirection vers la version anglaise de la page
      window.location.href = '/portfolio/pages/en/index.html';  // Rediriger vers l'URL anglaise
  } else {
      document.documentElement.lang = 'fr';  // Changer la langue en français
      document.getElementById('switchLang').textContent = 'EN';  // Mettre à jour le texte du bouton
      // Redirection vers la version française de la page
      window.location.href = '/portfolio/pages/fr/index.html';  // Rediriger vers l'URL française
  }
}
//#endregion