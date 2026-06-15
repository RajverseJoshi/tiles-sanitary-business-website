 const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');
  let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX; mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  });
  function animateFollower() {
    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;
    follower.style.left = followerX + 'px';
    follower.style.top = followerY + 'px';
    requestAnimationFrame(animateFollower);
  }
  animateFollower();
  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '18px'; cursor.style.height = '18px';
      follower.style.width = '52px'; follower.style.height = '52px';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '10px'; cursor.style.height = '10px';
      follower.style.width = '36px'; follower.style.height = '36px';
    });
  });
 
  // Nav scroll
  const nav = document.getElementById('mainNav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });
 
  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal, .cat-item, .testi-card');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => observer.observe(el));
 
  // Staggered categories
  const catItems = document.querySelectorAll('.cat-item');
  catItems.forEach((item, i) => {
    item.style.transitionDelay = (i * 0.08) + 's';
  });
const PRODUCTS = [

  /* ── TOILETS ─────────────────────────────────────────── */
  {
    id: "T001",
    name: "One piece",
    category: "toilets",
    image:"image1.png/image.png"  ,
    gallery: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80"
    ],
    description: "Elviro Rimless Ceramic Western Commode with S-Trap features an advanced siphonic vacuum flush system for powerful and efficient cleaning. This one-piece toilet comes with a soft-close seat for quiet and smooth use. Its rimless design ensures better hygiene",
    specs: { material: "Vitreous China", flush: "Dual 3/6L", finish: "Gloss White", warranty: "5 Years" },
    price: 18500,
    badge: "Bestseller",
    featured: true
  },
  {
    id: "T002",
    name: "EWC",
    category: "toilets",
    image: "image1.png/ewc.png",
    gallery: [
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80"
    ],
    description: "Elviro EWC (European Water Closet) is a modern ceramic toilet designed for comfort and hygiene. It features a smooth finish for easy cleaning and a powerful siphonic flush for efficient performance. Its ergonomic design ensures comfortable use, making it ideal for homes, hotels, and commercial bathrooms with long-lasting durability.",
    specs: { material: "Vitreous China", flush: "Single 6L", finish: "Gloss White", warranty: "3 Years" },
    price: 12800,
    badge: null,
    featured: false
  },
  
  /* ── WASHBASINS ──────────────────────────────────────── */
  {
    id: "W001",
    name: "Table top Wash Basin",
    category: "washbasins",
    image: "image1.png/table .png",
    gallery: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
    ],
    description: "Elviro countertop wash basin is a stylish and modern addition to any bathroom. Made from high-quality ceramic, it offers a smooth finish and easy cleaning. Its compact and elegant design saves space while enhancing décor. Elviro ensures durability, functionality, and a premium look for homes and commercial spaces.",
    specs: { material: "Vitreous China", size: "450 / 550mm", finish: "Gloss White", warranty: "5 Years" },
    price: 7200,
    badge: "Bestseller",
    featured: true
  },
  {
    id: "W002",
    name: "Wash Basin",
    category: "washbasins",
    image: "image1.png/wash.png",
    gallery: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80"
    ],
    description: "A beautiful and stylish wash basin is essential for every bathroom, and the Elviro Designer Wash Basin with pedestal is a perfect choice. This one-piece unit suits homes, hotels, offices, and guest spaces. Made from high-quality ceramic, it features a glossy finish and elegant shape. Elviro ensures easy cleaning, long-lasting shine, and resistance to yellowing.",
    specs: { material: "Solid Surface", size: "520 × 380mm", finish: "Matte White", warranty: "3 Years" },
    price: 11500,
    badge: "Designer",
    featured: true
  },
  
  ];