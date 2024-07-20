document.addEventListener('DOMContentLoaded', () => {
  const userName = '@Zaynn Tech';

  const socialLinks = [
    { href: 'https://', icon: 'fa-solid fa-house', name: 'Website' },
    { href: 'https://github.com/', icon: 'fa-brands fa-github', name: 'GitHub' },
    { href: 'https://twitter.com/', icon: 'fa-brands fa-twitter', name: 'Twitter' },
    { href: 'https://linkedin.com/in/', icon: 'fa-brands fa-linkedin', name: 'LinkedIn' },
    { href: 'https://instagram.com/', icon: 'fa-brands fa-instagram', name: 'Instagram' },
    { href: 'https://facebook.com/', icon: 'fa-brands fa-facebook', name: 'Facebook' },
    { href: 'https://youtube.com/', icon: 'fa-brands fa-youtube', name: 'YouTube' }
  ];

  // Set the username in the header
  document.querySelector('header h1').textContent = userName;

  // Generate the social links list
  const ul = document.querySelector('main ul');
  ul.innerHTML = socialLinks.map(link => `
    <li>
      <a href="${link.href}" target="_blank" rel="noreferrer noopener">
        <i class="${link.icon}"></i>
        ${link.name}
      </a>
    </li>
  `).join('');

  // Initialize Vanta.js
  VANTA.BIRDS({
    el: '#vanta',
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    backgroundAlpha: 0.0,
    color2: 0xff00f0,
    wingSpan: 40.0,
    separation: 100.0,
    alignment: 77.0,
    cohesion: 5.0,
    quantity: 2.0,
  });

  // Fade in the main content
  setTimeout(() => {
    const main = document.querySelector('main');
    main.style.opacity = 1;
    main.style.filter = 'blur(0px)';
  }, 1000);
});
