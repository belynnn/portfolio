// Récupère le bouton
var myButton = document.getElementById("scrollToTopBtn");

// Fonction qui montre ou cache le bouton en fonction du défilement
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";  // Affiche le bouton quand on descend
  } else {
    myButton.style.display = "none";   // Cache le bouton quand on est en haut
  }
};

// Fonction pour revenir en haut de la page
function scrollToTop() {
  document.body.scrollTop = 0; // Pour Safari
  document.documentElement.scrollTop = 0; // Pour les autres navigateurs
}

// Mobile menu handling
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.querySelector('#mobileMenu .mobile-menu-container');
const mobileLinks = document.querySelectorAll('#mobileMenu .mobile-link');

// Toggle menu state
function toggleMenu() {
  console.log('Toggle menu called'); // Vérifie si cette ligne s'affiche dans la console
  mobileMenu.classList.toggle('open'); // Ajoute/retire la classe 'open' pour afficher/masquer le menu
  menuBtn.classList.toggle('active');  // Ajoute/retire la classe 'active' au bouton hamburger
}

// Menu button click handler
menuBtn.addEventListener('click', toggleMenu);

// Fermer le menu quand un lien mobile est cliqué
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