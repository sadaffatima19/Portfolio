/* ============================================================
   LOADER
============================================================ */
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('hidden'), 2000);
});

/* ============================================================
   CUSTOM CURSOR
============================================================ */
const cursor = document.getElementById('cursor');
const trail  = document.getElementById('cursor-trail');
let tx = 0, ty = 0;

document.addEventListener('mousemove', e => {
  tx = e.clientX;
  ty = e.clientY;
  cursor.style.left = tx + 'px';
  cursor.style.top  = ty + 'px';
});

setInterval(() => {
  trail.style.left = tx + 'px';
  trail.style.top  = ty + 'px';
}, 60);

document.querySelectorAll('a, button, .project-card, .skill-tag').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('link-hover'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('link-hover'));
});

/* ============================================================
   THREE.JS 3D BACKGROUND
============================================================ */
(function () {
  const canvas   = document.getElementById('bg-canvas');
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200);
  camera.position.z = 50;

  function resize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  resize();
  window.addEventListener('resize', resize);

  /* ── Particle field ── */
  const COUNT     = 1800;
  const positions = new Float32Array(COUNT * 3);
  const colors    = new Float32Array(COUNT * 3);
  const sizes     = new Float32Array(COUNT);

  const palette = [
    new THREE.Color('#00f5c4'),
    new THREE.Color('#7c5cfc'),
    new THREE.Color('#ff6b6b'),
    new THREE.Color('#ffffff'),
  ];

  for (let i = 0; i < COUNT; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 200;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 200;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 120;
    const c = palette[Math.floor(Math.random() * palette.length)];
    colors[i * 3]     = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
    sizes[i] = Math.random() * 0.4 + 0.1;
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('color',    new THREE.BufferAttribute(colors, 3));
  geo.setAttribute('size',     new THREE.BufferAttribute(sizes, 1));

  const mat = new THREE.PointsMaterial({
    size: 0.5,
    vertexColors: true,
    transparent: true,
    opacity: 0.6,
    sizeAttenuation: true,
  });

  const particles = new THREE.Points(geo, mat);
  scene.add(particles);

  /* ── Wireframe torus knot ── */
  const knotGeo = new THREE.TorusKnotGeometry(14, 3.5, 180, 20);
  const knotMat = new THREE.MeshBasicMaterial({
    color: new THREE.Color('#00f5c4'),
    wireframe: true,
    transparent: true,
    opacity: 0.04,
  });
  const knot = new THREE.Mesh(knotGeo, knotMat);
  knot.position.set(30, 0, -20);
  scene.add(knot);

  /* ── Wireframe icosahedron ── */
  const icoGeo = new THREE.IcosahedronGeometry(8, 1);
  const icoMat = new THREE.MeshBasicMaterial({
    color: new THREE.Color('#7c5cfc'),
    wireframe: true,
    transparent: true,
    opacity: 0.05,
  });
  const ico = new THREE.Mesh(icoGeo, icoMat);
  ico.position.set(-35, 15, -15);
  scene.add(ico);

  /* ── Mouse parallax ── */
  let mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', e => {
    mouseX = (e.clientX / window.innerWidth  - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  /* ── Animation loop ── */
  let t = 0;
  function animate() {
    requestAnimationFrame(animate);
    t += 0.003;

    particles.rotation.y = t * 0.08;
    particles.rotation.x = t * 0.02;

    knot.rotation.x = t * 0.4;
    knot.rotation.y = t * 0.3;

    ico.rotation.x = t * 0.2;
    ico.rotation.z = t * 0.15;

    camera.position.x += (mouseX * 4  - camera.position.x) * 0.02;
    camera.position.y += (-mouseY * 3 - camera.position.y) * 0.02;

    renderer.render(scene, camera);
  }
  animate();
})();

/* ============================================================
   SCROLL REVEAL
============================================================ */
const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => revealObserver.observe(el));

/* ============================================================
   SKILL BARS
============================================================ */
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-card').forEach(card => barObserver.observe(card));

/* ============================================================
   PROJECT FILTER
============================================================ */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');

    const filter = this.dataset.filter;

    document.querySelectorAll('.project-card').forEach(card => {
      const cat  = card.dataset.category || '';
      const show = filter === 'all' || cat.includes(filter);
      card.style.opacity       = show ? '1' : '0.2';
      card.style.pointerEvents = show ? '' : 'none';
    });
  });
});

/* ============================================================
   ACTIVE NAV HIGHLIGHT + NAV SHRINK ON SCROLL
============================================================ */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const mainNav  = document.getElementById('main-nav');

window.addEventListener('scroll', () => {
  /* Highlight active nav link */
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--accent)' : '';
  });

  /* Shrink nav on scroll */
  mainNav.style.padding = window.scrollY > 60 ? '.9rem 3rem' : '1.5rem 3rem';
});

/* ============================================================
   GLITCH EFFECT ON HERO NAME HOVER
============================================================ */
const heroName = document.querySelector('.hero-name');

if (heroName) {
  heroName.addEventListener('mouseenter', () => {
    const frames = [
      '2px 0 #ff6b6b, -2px 0 #00f5c4',
      '-3px 0 #00f5c4, 3px 0 #ff6b6b',
      '0px 0 transparent, 0px 0 transparent',
      '2px 0 #7c5cfc, -2px 0 #ff6b6b',
    ];
    frames.forEach((shadow, i) => {
      setTimeout(() => { heroName.style.textShadow = shadow; }, i * 60);
    });
    setTimeout(() => { heroName.style.textShadow = ''; }, frames.length * 60 + 60);
  });
}