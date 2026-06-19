// ===== 1. HAMBURGER MENU TOGGLE =====
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', function () {
  navLinks.classList.toggle('open');
  if (navLinks.classList.contains('open')) {
    menuBtn.textContent = '✕';
  } else {
    menuBtn.textContent = '☰';
  }
});

// ===== 2. SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(
      this.getAttribute('href')
    );
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      navLinks.classList.remove('open');
      menuBtn.textContent = '☰';
    }
  });
});

// ===== 3. CONTACT FORM VALIDATION =====
const submitBtn = document.getElementById('submitBtn');
const formMsg = document.getElementById('formMsg');

submitBtn.addEventListener('click', function () {
  const name = document.getElementById('nameInput').value;
  const email = document.getElementById('emailInput').value;
  const message = document.getElementById('messageInput').value;

  if (name === '' || email === '' || message === '') {
    formMsg.style.color = 'red';
    formMsg.textContent = '⚠️ Please fill all fields!';
  } else {
    formMsg.style.color = 'green';
    formMsg.textContent = 
      '✅ Message sent successfully! Thank you ' + name + '!';
    document.getElementById('nameInput').value = '';
    document.getElementById('emailInput').value = '';
    document.getElementById('messageInput').value = '';
  }
});

// ===== 4. SCROLL ANIMATION FOR CARDS =====
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

window.addEventListener('scroll', function () {
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < window.innerHeight - 100) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  });
});

// ===== 5. ACTIVE NAV LINK ON SCROLL =====
window.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('section');
  const navA = document.querySelectorAll('.nav-links a');

  sections.forEach((section, i) => {
    const top = section.offsetTop - 80;
    const bottom = top + section.offsetHeight;
    if (window.scrollY >= top && window.scrollY < bottom) {
      navA.forEach(a => a.classList.remove('active'));
      if (navA[i]) navA[i].classList.add('active');
    }
  });
});