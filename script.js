const navLinks = document.querySelector('.nav-links');
const dropdowns = document.querySelectorAll('.dropdown');
const hamburger = document.querySelector('.hamburger');

// Har dropdown ke liye handler
function handleDropdown(e) {
  e.stopPropagation(); // Event bubbling rokne ke liye
  if (window.innerWidth < 768) {
    const currentDropdown = e.currentTarget;
    
    // Toggle current dropdown
    currentDropdown.classList.toggle('active');
    
    // Close other dropdowns
    dropdowns.forEach(drop => {
      if (drop !== currentDropdown) {
        drop.classList.remove('active');
      }
    });
  }
}

// Click outside handler update karein
document.addEventListener('click', (e) => {
  const isClickInside = e.target.closest('.dropdown'); // Better detection

  if (!isClickInside && window.innerWidth < 768) {
    dropdowns.forEach(dropdown => {
      dropdown.classList.remove('active');
    });
  }
});

// Hamburger menu handler update karein
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
  
  // Agar navbar close ho raha hai toh dropdowns bhi close karein
  if (!navLinks.classList.contains('active')) {
    dropdowns.forEach(dropdown => {
      dropdown.classList.remove('active');
    });
  }
});

// Har dropdown par event listener lagayein
dropdowns.forEach(dropdown => {
  dropdown.addEventListener('click', handleDropdown);
});

let lastScrollPosition = window.pageYOffset;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.pageYOffset;
    
    if (currentScrollPosition > lastScrollPosition) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }
    
    lastScrollPosition = currentScrollPosition;
});
