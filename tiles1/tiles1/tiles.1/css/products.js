/* ============================================================
   PRODUCTS.JS — Central Product Data System
   Terrazo Tiles & Bathware
   ============================================================ */

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
  {
    id: "T003",
    name: "Wall Hung",
    category: "toilets",
    image: "image1.png/wallmount.png",
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80"
    ],
    description: "The Aquant Rimless Wall-Hung WC SG-1851 in seafoam green is a modern and stylish toilet designed for hygiene and easy cleaning. Its rimless bowl ensures better cleanliness, while the slim soft-close UF seat provides comfort and durability. The elegant color adds a fresh, contemporary look to any bathroom space.",
    specs: { material: "Vitreous China", flush: "Dual 3/6L", finish: "Matte White", warranty: "5 Years" },
    price: 15200,
    badge: "New",
    featured: true
  },
  {
    id: "T004",
    name: "Orissa  Pan",
    category: "toilets",
    image: "image1.png/orissa.png",
    gallery: [],
    description: "Elviro squatting pan toilets are designed for easy use and better hygiene. Their concave sides help in quick and simple cleaning. Installed at floor level, users sit in a squatting position with bent knees. The drain outlet is at ground level for efficient flow. Elviro offers both floor-level and slightly raised platform options. Suitable for men and women, but not ideal for elderly people, very heavy users, or those with balance issues.",
    specs: { material: "Vitreous China + ABS", flush: "Auto/Manual 4.5L", finish: "Gloss White", warranty: "2 Years" },
    price: 42000,
    badge: "Premium",
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
  {
    id: "W003",
    name: "Pedestial Set",
    category: "washbasins",
    image: "image1.png/pedestial.png",
    gallery: [],
    description: "Elviro is a trusted manufacturer, exporter, and wholesale supplier of pedestal wash basins in India. Elviro offers premium-quality basins made with advanced manufacturing and strict quality control. Designed by skilled experts, these basins are stylish, durable, scratch-resistant, and easy to maintain, making them ideal for modern bathrooms.",
    specs: { material: "Vitreous China", size: "580 × 420mm", finish: "Gloss White", warranty: "5 Years" },
    price: 8900,
    badge: null,
    featured: false
  },
  {
    id: "W004",
    name: "Bath Cabinet",
    category: "washbasins",
    image: "image1.png/bath.png",
    gallery: [],
    description: "Elviro vanity units combine modern design, smart functionality, and everyday comfort to suit all styles and storage needs. Elviro offers a wide range of options, including Uniks with base unit and basin, and complete Packs with base unit, basin, mirror, and lighting. Designed for convenience and elegance, these units help organize your bathroom while enhancing its overall look with a stylish and practical touch.",
    specs: { material: "Resin Stone", size: "380mm Diameter", finish: "Stone Beige", warranty: "2 Years" },
    price: 9800,
    badge: "New",
    featured: false
  },

  /* ── KITCHEN SINKS ───────────────────────────────────── */
  {
    id: "K001",
    name: "Granite Double Bowl Sink",
    category: "kitchensinks",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80"
    ],
    description: "Premium granite composite double bowl sink in matte black. Scratch and heat resistant. Includes stainless steel waste fittings and overflow.",
    specs: { material: "Granite Composite", size: "800 × 500mm", finish: "Matte Black", warranty: "10 Years" },
    price: 22000,
    badge: "Bestseller",
    featured: true
  },
  {
    id: "K002",
    name: "Stainless Single Bowl Undermount",
    category: "kitchensinks",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&q=80",
    gallery: [],
    description: "16-gauge stainless steel undermount sink. Brushed finish resists fingerprints. Deep 220mm bowl handles large pots with ease.",
    specs: { material: "304 Stainless Steel", size: "550 × 450mm", finish: "Brushed Satin", warranty: "Lifetime" },
    price: 14500,
    badge: null,
    featured: false
  },
  {
    id: "K003",
    name: "Fireclay Farmhouse Sink",
    category: "kitchensinks",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80",
    gallery: [],
    description: "Classic apron-front fireclay farmhouse sink. Hand-crafted with chip and stain-resistant finish. The signature piece of a country or modern kitchen.",
    specs: { material: "Fireclay", size: "760 × 510mm", finish: "Gloss White", warranty: "5 Years" },
    price: 28000,
    badge: "Premium",
    featured: true
  },
  {
    id: "K004",
    name: "Slim Drainer Inset Sink",
    category: "kitchensinks",
    image: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=600&q=80",
    gallery: [],
    description: "Compact inset sink with integrated drainer. Ideal for smaller kitchens. Easy-clip undermount system for quick installation.",
    specs: { material: "Stainless Steel", size: "600 × 450mm", finish: "Mirror Polish", warranty: "5 Years" },
    price: 9500,
    badge: null,
    featured: false
  },

  /* ── BATH FITTINGS ───────────────────────────────────── */
  {
    id: "B001",
    name: "Matte Black Tapware Set",
    category: "bathfittings",
    image: "https://images.unsplash.com/photo-1504652517000-ae1068478c59?w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1504652517000-ae1068478c59?w=800&q=80"
    ],
    description: "Complete matte black tapware set — basin mixer, shower mixer, and bath filler. Brass body with PVD matte black coating. Drip-free ceramic disc cartridge.",
    specs: { material: "Solid Brass", finish: "PVD Matte Black", flow: "12 L/min", warranty: "5 Years" },
    price: 31000,
    badge: "Designer",
    featured: true
  },
  {
    id: "B002",
    name: "Rose Gold Rain Shower Set",
    category: "bathfittings",
    image: "https://images.unsplash.com/photo-1595514535215-7443c27d3fb4?w=600&q=80",
    gallery: [],
    description: "300mm overhead rain shower with matching handheld and 1.5m hose. Brushed rose gold finish. Built-in flow regulator for water efficiency.",
    specs: { material: "Brass + SS Head", finish: "Brushed Rose Gold", spray: "Rain + Handheld", warranty: "3 Years" },
    price: 18700,
    badge: "Trending",
    featured: true
  },
  {
    id: "B003",
    name: "Chrome Basin Mixer Tap",
    category: "bathfittings",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80",
    gallery: [],
    description: "Single-lever basin mixer with 150mm spout. Chrome finish with ceramic disc cartridge. Easy temperature and flow control.",
    specs: { material: "Brass", finish: "Polished Chrome", flow: "10 L/min", warranty: "5 Years" },
    price: 4800,
    badge: null,
    featured: false
  },
  {
    id: "B004",
    name: "Brushed Nickel Towel Rail Set",
    category: "bathfittings",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80",
    gallery: [],
    description: "Heated towel rail with matching toilet roll holder and robe hook. Brushed nickel finish. 600W heating element with timer.",
    specs: { material: "Stainless Steel", finish: "Brushed Nickel", wattage: "600W", warranty: "3 Years" },
    price: 12400,
    badge: null,
    featured: false
  },

  /* ── FURNITURE ───────────────────────────────────────── */
  {
    id: "F001",
    name: "Floating Vanity Unit 900mm",
    category: "furniture",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80"
    ],
    description: "Wall-mounted floating vanity with two soft-close drawers and concealed plumbing. Available in White Oak, Charcoal, and Linen finishes. Basin not included.",
    specs: { material: "Moisture-Resistant MDF", size: "900 × 460 × 550mm", finish: "White Oak", warranty: "2 Years" },
    price: 26500,
    badge: "Bestseller",
    featured: true
  },
  {
    id: "F002",
    name: "Mirror Cabinet with LED",
    category: "furniture",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80",
    gallery: [],
    description: "Illuminated mirror cabinet with built-in LED demister, shaver socket, and adjustable shelves. Touch-sensor lighting. Recessed or surface mount.",
    specs: { material: "Aluminium + Glass", size: "800 × 700mm", finish: "Anodised Aluminium", warranty: "2 Years" },
    price: 15800,
    badge: "New",
    featured: false
  },
  {
    id: "F003",
    name: "Freestanding Bathtub",
    category: "furniture",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=80",
    gallery: [],
    description: "Oval freestanding acrylic bathtub with glossy white finish. Ergonomic backrest angle for ultimate comfort. Includes waste and overflow fitting.",
    specs: { material: "Acrylic", size: "1700 × 800mm", finish: "Gloss White", warranty: "5 Years" },
    price: 38000,
    badge: "Premium",
    featured: true
  },
  {
    id: "F004",
    name: "Storage Tower Cabinet",
    category: "furniture",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=600&q=80",
    gallery: [],
    description: "Tall floor-standing storage tower with four shelves and two-door lower cabinet. Perfect for linen, towels, and toiletries. Moisture-resistant finish.",
    specs: { material: "MDF", size: "350 × 350 × 1800mm", finish: "Gloss White", warranty: "2 Years" },
    price: 19200,
    badge: null,
    featured: false
  }

  ];

/* ── CATEGORY METADATA ───────────────────────────────── */
const CATEGORIES = {
  toilets:      { label: "Toilets",        icon: "🚽", description: "Wall-hung, close-coupled & smart toilets for every bathroom style." },
  washbasins:   { label: "Wash Basins",    icon: "🪣", description: "Under-counter, vessel & semi-recessed basins in ceramic and stone." },
  kitchensinks: { label: "Kitchen Sinks",  icon: "🍽️", description: "Granite, stainless & fireclay sinks built to last a lifetime." },
  bathfittings: { label: "Bath Fittings",  icon: "🚿", description: "Tapware, showers, rails & accessories in premium finishes." },
  furniture:    { label: "Furniture",      icon: "🪞", description: "Vanities, mirror cabinets, bathtubs & storage for a complete bathroom." }
};

/* ── HELPER FUNCTIONS ────────────────────────────────── */

function getAllProducts() {
  return PRODUCTS;
}

function getProductsByCategory(categoryKey) {
  return PRODUCTS.filter(p => p.category === categoryKey.toLowerCase());
}

function getProductById(id) {
  return PRODUCTS.find(p => p.id === id) || null;
}

function getFeaturedProducts(limit = 4) {
  return PRODUCTS.filter(p => p.featured).slice(0, limit);
}

function formatPrice(price) {
  if (!price) return "Price on Request";
  return "₹" + price.toLocaleString("en-IN");
}

/* ── CART SYSTEM (localStorage) ─────────────────────── */
const Cart = {
  _key: "terrazo_cart",

  getAll() {
    try {
      return JSON.parse(localStorage.getItem(this._key)) || [];
    } catch { return []; }
  },

  add(productId, qty = 1) {
    const cart = this.getAll();
    const existing = cart.find(i => i.id === productId);
    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({ id: productId, qty });
    }
    localStorage.setItem(this._key, JSON.stringify(cart));
    this._dispatchUpdate();
  },

  remove(productId) {
    const cart = this.getAll().filter(i => i.id !== productId);
    localStorage.setItem(this._key, JSON.stringify(cart));
    this._dispatchUpdate();
  },

  updateQty(productId, qty) {
    if (qty < 1) return this.remove(productId);
    const cart = this.getAll();
    const item = cart.find(i => i.id === productId);
    if (item) {
      item.qty = qty;
      localStorage.setItem(this._key, JSON.stringify(cart));
      this._dispatchUpdate();
    }
  },

  count() {
    return this.getAll().reduce((sum, i) => sum + i.qty, 0);
  },

  total() {
    return this.getAll().reduce((sum, i) => {
      const product = getProductById(i.id);
      return sum + (product ? product.price * i.qty : 0);
    }, 0);
  },

  clear() {
    localStorage.removeItem(this._key);
    this._dispatchUpdate();
  },

  _dispatchUpdate() {
    window.dispatchEvent(new CustomEvent("cartUpdated", { detail: { count: this.count() } }));
  }
};console.log("Products Loaded:", PRODUCTS.length);