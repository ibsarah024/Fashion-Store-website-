'use strict';

/* ============================================================
   PRODUCT DATABASE
   Every product card across all pages maps to an entry here.
   URL format: product.html?id=bar-jacket
   ============================================================ */
var PRODUCTS = {

  /* ── WOMEN ── */
  'bar-jacket': {
    name: 'Bar Jacket', subtitle: 'Burgundy Velvet', price: '$3,200.00',
    image: 'assets/images/velvet_blazer.png',
    desc: 'Iconic single-breasted silhouette in deep burgundy velvet, embodying the essence of Dior elegance. A wardrobe cornerstone crafted with the precision of the Parisian atelier.',
    material: 'Deep Burgundy Velvet with silk lining.', dimensions: 'Standard sizing — S to XL available.',
    origin: 'Handcrafted in the Christian Dior ateliers in Paris.', collection: 'Women', collectionLink: 'women.html'
  },
  'leopard-scarf-ensemble': {
    name: 'Runway Leopard Scarf Ensemble', subtitle: 'Leather & Duster Coat', price: '$6,800.00',
    image: 'assets/images/leopard_scarf_ensemble.jpg',
    desc: 'Sophisticated leather pencil skirt paired with a dramatic two-tone duster coat and bold leopard print scarf. A complete runway look made for the modern woman.',
    material: 'Italian calfskin leather with wool-blend duster.', dimensions: 'Standard sizing — XS to L.',
    origin: 'Crafted in the Dior ateliers, Florence, Italy.', collection: 'Women', collectionLink: 'women.html'
  },
  'tweed-coat-ensemble': {
    name: 'Tweed Coat Ensemble', subtitle: 'Classic Grey Tweed', price: '$5,800.00',
    image: 'assets/images/grey_tweed_ensemble.jpg',
    desc: 'Classic grey tweed dress accompanied by a matching tailored overcoat. A timeless pairing that defines understated Parisian luxury.',
    material: 'Virgin wool tweed with satin lining.', dimensions: 'Standard sizing — XS to XL.',
    origin: 'Woven and tailored in the Dior Paris atelier.', collection: 'Women', collectionLink: 'women.html'
  },
  'dior-toujours-bag': {
    name: 'Dior Toujours Bag', subtitle: 'Cannage Lambskin', price: '$4,200.00',
    image: 'assets/images/leather_handbag.png',
    desc: 'Spacious and elegant, the Toujours Bag features signature Cannage stitching and golden \'D.I.O.R.\' letter charms. The perfect companion for every occasion.',
    material: 'Quilted lambskin with gold-finish hardware.', dimensions: '35 x 25 x 14 cm (L x H x W)',
    origin: 'Crafted in the Christian Dior ateliers in Italy.', collection: 'Women', collectionLink: 'women.html'
  },
  'miss-dior-mini-bag': {
    name: 'Miss Dior Mini Bag', subtitle: 'Black Goatskin', price: '$2,100.00',
    image: 'assets/images/leather_clutch.png',
    desc: 'Compact evening essential crafted from smooth black goatskin with a refined enamel clasp. Perfectly sized for your evening essentials.',
    material: 'Smooth goatskin leather, enamel clasp.', dimensions: '19 x 13 x 5 cm (L x H x W)',
    origin: 'Made in Italy for Maison Dior.', collection: 'Women', collectionLink: 'women.html'
  },
  'micro-saddle-bag': {
    name: 'Micro Saddle Bag', subtitle: 'Tan Grained Calfskin', price: '$3,500.00',
    image: 'assets/images/saddle_bag.png',
    desc: 'A miniature reimagining of the iconic Dior Saddle Bag. Perfect for carrying the essentials with maximum style.',
    material: 'Grained calfskin with saddle-stitching detail.', dimensions: '16 x 14 x 4 cm (L x H x W)',
    origin: 'Handcrafted in Italy.', collection: 'Women', collectionLink: 'women.html'
  },
  'dior-tribales-earrings': {
    name: 'Dior Tribales Earrings', subtitle: 'Gold-Finish Metal & Pearl', price: '$650.00',
    image: 'assets/images/pearl_earrings.png',
    desc: 'The beloved asymmetric Tribales design, featuring a lustrous white resin pearl on one side and a smaller pearl on the other.',
    material: 'Gold-finish metal with white resin pearls.', dimensions: 'Adjustable post fitting.',
    origin: 'Designed and crafted in France.', collection: 'Women', collectionLink: 'women.html'
  },
  'diorpacific-b1u': {
    name: 'DiorPacific B1U', subtitle: 'Square Acetate Sunglasses', price: '$510.00',
    image: 'assets/images/sunglasses.png',
    desc: 'Bold butterfly-inspired sunglasses with a modern acetate frame and tinted lenses. UV400 protection with a signature CD logo detail.',
    material: 'Acetate frame, polycarbonate lenses.', dimensions: 'Frame width: 146 mm.',
    origin: 'Designed in Paris.', collection: 'Women', collectionLink: 'women.html'
  },
  'toile-de-jouy-mitzah': {
    name: 'Toile de Jouy Mitzah', subtitle: 'Silk Twill Scarf', price: '$290.00',
    image: 'assets/images/silk_scarf.png',
    desc: 'Elegant silk twill scarf adorned with the House\'s emblematic Toile de Jouy motif. Can be worn as a scarf, belt, or hair accessory.',
    material: '100% Silk Twill.', dimensions: '90 x 90 cm.',
    origin: 'Woven and printed in France.', collection: 'Women', collectionLink: 'women.html'
  },

  /* ── DESIGNER ── */
  'golden-couture-ball-gown': {
    name: 'Golden Couture Ball Gown', subtitle: 'Gold Taffeta with Matching Hat', price: '$12,000.00',
    image: 'assets/images/designer_new_1.jpg',
    desc: 'Breathtaking gold taffeta gown with intricate hand-embroidery, dramatic volume, and a matching sculptural hat. A true haute couture statement.',
    material: 'Duchess satin taffeta, hand-embroidered gold thread.', dimensions: 'Made to measure.',
    origin: 'Haute Couture — crafted exclusively in Paris.', collection: 'Designer', collectionLink: 'designer.html'
  },
  'burgundy-ruffle-couture-gown': {
    name: 'Burgundy Ruffle Couture Gown', subtitle: 'Tiered Taffeta Ruffles', price: '$24,000.00',
    image: 'assets/images/burgundy_ruffle_gown.jpg',
    desc: 'Dramatic tiered gown featuring rich burgundy taffeta ruffles, sculptural puff sleeves, and contrasting black lace details. The pinnacle of couture drama.',
    material: 'Duchesse taffeta, Chantilly lace.', dimensions: 'Made to measure.',
    origin: 'Haute Couture — crafted exclusively in Paris.', collection: 'Designer', collectionLink: 'designer.html'
  },
  'azure-brocade-pannier-gown': {
    name: 'Azure Brocade Pannier Gown', subtitle: 'Pale Blue Pleated Silk', price: '$15,000.00',
    image: 'assets/images/designer_new_3.jpg',
    desc: 'Dramatic pale blue gown with a voluminous pleated skirt, pannier silhouette, and delicate floral appliqués. An homage to 18th century grandeur.',
    material: 'Silk brocade, hand-applied floral appliqués.', dimensions: 'Made to measure.',
    origin: 'Haute Couture — crafted exclusively in Paris.', collection: 'Designer', collectionLink: 'designer.html'
  },
  'white-origami-couture-gown': {
    name: 'White Origami Couture Gown', subtitle: 'Architectural Silk Folds', price: '$21,000.00',
    image: 'assets/images/white_structural_gown.jpg',
    desc: 'Striking structural white silk gown featuring precision origami folds, hand-embroidered floral details, and a bold architectural silhouette.',
    material: 'Structured silk faille, hand embroidery.', dimensions: 'Made to measure.',
    origin: 'Haute Couture — crafted exclusively in Paris.', collection: 'Designer', collectionLink: 'designer.html'
  },
  'blush-taffeta-corset-gown': {
    name: 'Blush Taffeta Corset Gown', subtitle: 'Black Lace Corset Detail', price: '$14,500.00',
    image: 'assets/images/designer_new_5.jpg',
    desc: 'Romantic blush taffeta gown with a contrasting black lace corset bodice and cascading floral embroidery down the skirt. Feminine power in haute couture form.',
    material: 'Taffeta, Chantilly lace corset.', dimensions: 'Made to measure.',
    origin: 'Haute Couture — crafted exclusively in Paris.', collection: 'Designer', collectionLink: 'designer.html'
  },
  'olive-padlock-satchel': {
    name: 'Olive Padlock Satchel', subtitle: 'Olive Green Leather', price: '$3,500.00',
    image: 'assets/images/designer_bag_1.jpg',
    desc: 'Supple olive green leather satchel featuring a signature oversized gold padlock and key detail. Structured, sophisticated, and utterly unique.',
    material: 'Full-grain olive calfskin, gold hardware.', dimensions: '28 x 22 x 10 cm.',
    origin: 'Made in Italy.', collection: 'Designer', collectionLink: 'designer.html'
  },
  'croc-embossed-backpack': {
    name: 'Croc-Embossed Backpack', subtitle: 'Brown Crocodile Leather', price: '$4,200.00',
    image: 'assets/images/designer_bag_2.jpg',
    desc: 'Structured brown crocodile-embossed leather backpack with polished gold-finish hardware and a top carry handle. Versatile luxury for the modern collector.',
    material: 'Crocodile-embossed calfskin, gold hardware.', dimensions: '30 x 35 x 14 cm.',
    origin: 'Made in Italy.', collection: 'Designer', collectionLink: 'designer.html'
  },
  'burgundy-croc-top-handle': {
    name: 'Burgundy Croc Top Handle', subtitle: 'Deep Burgundy Crocodile', price: '$4,800.00',
    image: 'assets/images/designer_bag_3.jpg',
    desc: 'Striking deep burgundy crocodile-embossed leather handbag with vintage-inspired gold detailing. A statement piece for the discerning collector.',
    material: 'Crocodile-embossed leather, antique gold hardware.', dimensions: '26 x 18 x 9 cm.',
    origin: 'Made in Italy.', collection: 'Designer', collectionLink: 'designer.html'
  },
  'vintage-leather-saddle-bag': {
    name: 'Vintage Leather Saddle Bag', subtitle: 'Distressed Brown Leather', price: '$3,800.00',
    image: 'assets/images/designer_bag_4.jpg',
    desc: 'Slouchy distressed brown leather saddle bag accented with braided trim and antique key charms. A piece that tells a story.',
    material: 'Distressed full-grain leather, brass hardware.', dimensions: '32 x 24 x 8 cm.',
    origin: 'Handcrafted in Italy.', collection: 'Designer', collectionLink: 'designer.html'
  },
  'gold-interlocking-bracelet': {
    name: 'Gold Interlocking Bracelet', subtitle: 'Gold-Finish Metal', price: '$850.00',
    image: 'assets/images/designer_accessory_1.png',
    desc: 'Elegant gold-finish metal link bracelet featuring a central star motif. Perfect for layering with other fine jewellery or as a standalone statement.',
    material: 'Gold-finish brass, hypoallergenic.', dimensions: 'Adjustable 16–20 cm.',
    origin: 'Designed and crafted in France.', collection: 'Designer', collectionLink: 'designer.html'
  },
  'sculptural-gold-cuff': {
    name: 'Sculptural Gold Cuff', subtitle: 'Classical Motifs & Pearl', price: '$1,250.00',
    image: 'assets/images/designer_accessory_2.jpg',
    desc: 'Breathtaking golden cuff bracelet sculpted with intricate classical motifs and finished with a single teardrop freshwater pearl drop.',
    material: 'Gold-plated brass, freshwater pearl.', dimensions: 'One size, open cuff.',
    origin: 'Designed in Paris, crafted in Italy.', collection: 'Designer', collectionLink: 'designer.html'
  },

  /* ── FRAGRANCES ── */
  'eau-de-parfum': {
    name: 'Eau de Parfum', subtitle: 'Timeless Floral Composition', price: '$150.00',
    image: 'assets/images/fragrance_bottle_1.png',
    desc: 'A timeless floral composition with jasmine, rose, and ylang-ylang at its heart. Fresh top notes of bergamot lead into a warm base of sandalwood and musk.',
    material: 'Eau de Parfum — 30% fragrance concentration.', dimensions: 'Available in 50ml and 100ml.',
    origin: 'Composed in Grasse, France.', collection: 'Fragrances', collectionLink: 'fragrances.html'
  },
  'rose-essence': {
    name: 'Rose Essence', subtitle: 'Pure Grasse Rose', price: '$210.00',
    image: 'assets/images/fragrance_bottle_2.png',
    desc: 'Pure Grasse rose captured in a luxurious eau de parfum concentrate. A single-flower soliflore that celebrates the most iconic bloom in perfumery.',
    material: 'Eau de Parfum Intense — 35% concentration.', dimensions: 'Available in 75ml.',
    origin: 'Distilled from Grasse rose, France.', collection: 'Fragrances', collectionLink: 'fragrances.html'
  },
  'oud-collection': {
    name: 'Oud Collection', subtitle: 'Rich Oud & Amber', price: '$340.00',
    image: 'assets/images/fragrance_bottle_3.png',
    desc: 'Rich oud wood blended with warm amber and smoky incense notes. An opulent oriental fragrance that commands presence.',
    material: 'Parfum — 40% concentration.', dimensions: 'Available in 50ml.',
    origin: 'Oud sourced from Laos, composed in France.', collection: 'Fragrances', collectionLink: 'fragrances.html'
  },
  'jasmine-noir': {
    name: 'Jasmine Noir', subtitle: 'Night-Blooming Jasmine', price: '$185.00',
    image: 'assets/images/fragrance_bottle_1.png',
    desc: 'Night-blooming jasmine with dark vanilla and precious wood base. A sensual nocturnal fragrance for the bold and the beautiful.',
    material: 'Eau de Parfum — 30% concentration.', dimensions: 'Available in 50ml and 100ml.',
    origin: 'Composed in Grasse, France.', collection: 'Fragrances', collectionLink: 'fragrances.html'
  },
  'amber-musk': {
    name: 'Amber Musk', subtitle: 'Warm Amber & White Musk', price: '$275.00',
    image: 'assets/images/fragrance_bottle_2.png',
    desc: 'Warm amber and white musk create an intimate, sensual trail. A skin-close fragrance that becomes uniquely yours throughout the day.',
    material: 'Eau de Parfum — 30% concentration.', dimensions: 'Available in 75ml.',
    origin: 'Composed in Paris, France.', collection: 'Fragrances', collectionLink: 'fragrances.html'
  },
  'travel-set': {
    name: 'Travel Set', subtitle: 'Five Signature Miniatures', price: '$120.00',
    image: 'assets/images/fragrance_bottle_3.png',
    desc: 'Curated miniature collection of five signature Dior scents for on-the-go luxury. The perfect introduction to the world of Dior fragrances.',
    material: 'Five x 7.5ml Eau de Parfum miniatures.', dimensions: 'Presented in a luxury gift box.',
    origin: 'Composed in Grasse and Paris, France.', collection: 'Fragrances', collectionLink: 'fragrances.html'
  },
  'vanilla-blossom': {
    name: 'Vanilla Blossom', subtitle: 'Sweet Gourmand Floral', price: '$195.00',
    image: 'assets/images/fragrance_bottle_1.png',
    desc: 'Sweet vanilla and delicate orange blossom in a warm gourmand blend. Comforting, joyful, and irresistibly wearable.',
    material: 'Eau de Parfum — 30% concentration.', dimensions: 'Available in 50ml and 100ml.',
    origin: 'Composed in Grasse, France.', collection: 'Fragrances', collectionLink: 'fragrances.html'
  },
  'citrus-fresh': {
    name: 'Citrus Fresh', subtitle: 'Bergamot & Green Tea', price: '$145.00',
    image: 'assets/images/fragrance_bottle_2.png',
    desc: 'Sparkling bergamot and Sicilian lemon with a heart of green tea freshness. A bright, energising fragrance for every day.',
    material: 'Eau de Toilette — 20% concentration.', dimensions: 'Available in 50ml and 100ml.',
    origin: 'Citrus sourced from Sicily, composed in France.', collection: 'Fragrances', collectionLink: 'fragrances.html'
  },
  'midnight-santal': {
    name: 'Midnight Santal', subtitle: 'Sandalwood & Cardamom', price: '$310.00',
    image: 'assets/images/fragrance_bottle_3.png',
    desc: 'Creamy sandalwood with cardamom spice and a velvety leather accord. A sophisticated, complex fragrance for the modern connoisseur.',
    material: 'Parfum — 38% concentration.', dimensions: 'Available in 50ml.',
    origin: 'Sandalwood sourced from Mysore, India. Composed in France.', collection: 'Fragrances', collectionLink: 'fragrances.html'
  },

  /* ── NEW ARRIVALS / HOME ── */
  'lady-dior-handbag': {
    name: 'Lady Dior Handbag', subtitle: 'Black Cannage Lambskin', price: '$5,200.00',
    image: 'assets/images/leather_handbag.png',
    desc: 'The Lady Dior handbag epitomizes the House\'s vision of elegance and beauty. Sleek and refined, this timeless creation is crafted in black lambskin with iconic Cannage stitching and golden D.I.O.R. charms.',
    material: '100% Premium Lambskin with Cannage motif.', dimensions: '24 x 20 x 11 cm (L x H x W)',
    origin: 'Meticulously crafted in the Christian Dior ateliers in Italy.', collection: 'Women', collectionLink: 'women.html'
  },
  'saddle-bag': {
    name: 'Saddle Bag', subtitle: 'Tan Grained Calfskin', price: '$4,200.00',
    image: 'assets/images/saddle_bag.png',
    desc: 'The iconic Dior Saddle Bag reimagined for the contemporary wardrobe. Instantly recognisable silhouette in supple tan calfskin with polished brass hardware.',
    material: 'Grained calfskin, brass hardware.', dimensions: '26 x 20 x 5 cm.',
    origin: 'Handcrafted in Italy.', collection: 'Women', collectionLink: 'women.html'
  },

  /* ── ACCESSORIES (home featured) ── */
  'signature-sunglasses': {
    name: 'Signature Sunglasses', subtitle: 'Classic Acetate Frame', price: '$510.00',
    image: 'assets/images/sunglasses.png',
    desc: 'Iconic Dior sunglasses in a classic acetate frame with gradient lenses. UV400 protection and signature CD logo arms.',
    material: 'Acetate frame, polycarbonate UV400 lenses.', dimensions: 'Frame width: 142 mm.',
    origin: 'Designed in Paris.', collection: 'Women', collectionLink: 'women.html'
  },
  'pearl-earrings': {
    name: 'Pearl Earrings', subtitle: 'Gold-Finish Metal', price: '$590.00',
    image: 'assets/images/pearl_earrings.png',
    desc: 'Lustrous pearl earrings in gold-finish metal setting. A timeless accessory that elevates any look from casual to couture.',
    material: 'Gold-finish metal, resin pearl.', dimensions: 'Drop length: 3 cm.',
    origin: 'Designed and crafted in France.', collection: 'Women', collectionLink: 'women.html'
  },
  'leather-wallet': {
    name: 'Leather Wallet', subtitle: 'Black Smooth Leather', price: '$380.00',
    image: 'assets/images/leather_clutch.png',
    desc: 'Sleek black smooth leather wallet with multiple card slots, a zip coin pocket, and an embossed Dior logo. The perfect everyday luxury.',
    material: 'Smooth calfskin leather, gold hardware.', dimensions: '19 x 10 cm.',
    origin: 'Made in Italy.', collection: 'Women', collectionLink: 'women.html'
  },
  'silk-scarf': {
    name: 'Silk Scarf', subtitle: 'Toile de Jouy Print', price: '$250.00',
    image: 'assets/images/silk_scarf.png',
    desc: 'Luxurious silk twill scarf featuring the iconic Toile de Jouy print. Wear it as a scarf, hair tie, or bag charm.',
    material: '100% Silk Twill.', dimensions: '90 x 90 cm.',
    origin: 'Woven and printed in France.', collection: 'Women', collectionLink: 'women.html'
  },

  /* ── ALSO-LIKE ITEMS ── */
  'miss-dior': {
    name: 'Miss Dior', subtitle: 'Eau de Parfum', price: '$165.00',
    image: 'assets/images/fragrance_bottle_1.png',
    desc: 'The quintessential Dior fragrance. A bouquet of flowers and freedom — rose, peony, and fresh citrus over a warm musky base.',
    material: 'Eau de Parfum — 30% concentration.', dimensions: 'Available in 50ml and 100ml.',
    origin: 'Composed in Grasse, France.', collection: 'Fragrances', collectionLink: 'fragrances.html'
  },
  'rouge-dior': {
    name: 'Rouge Dior', subtitle: 'Couture Lipstick', price: '$49.00',
    image: 'assets/images/rouge_lipstick.png',
    desc: 'The iconic Rouge Dior lipstick in a refillable couture case. 999 — the signature red that defines Dior femininity.',
    material: 'Moisturising formula, 90% ingredients of natural origin.', dimensions: 'Standard 3.5g bullet.',
    origin: 'Made in France.', collection: 'Women', collectionLink: 'women.html'
  },
  'mitzah-scarf': {
    name: 'Mitzah Scarf', subtitle: 'Silk Twill', price: '$250.00',
    image: 'assets/images/silk_scarf.png',
    desc: 'The Mitzah, named after the beloved Dior muse, is the House\'s most iconic scarf. Styled by Mitzah Bricard herself, it remains timeless.',
    material: '100% Silk Twill.', dimensions: '90 x 90 cm.',
    origin: 'Woven and printed in France.', collection: 'Women', collectionLink: 'women.html'
  }
};

/* ── Related products to show per collection ── */
var RELATED = {
  'Women': ['bar-jacket', 'dior-tribales-earrings', 'miss-dior-mini-bag', 'toile-de-jouy-mitzah'],
  'Designer': ['olive-padlock-satchel', 'gold-interlocking-bracelet', 'burgundy-croc-top-handle', 'croc-embossed-backpack'],
  'Fragrances': ['miss-dior', 'rose-essence', 'amber-musk', 'midnight-santal']
};

/* ============================================================
   HELPERS
   ============================================================ */
function slugify(text) {
  return text.toLowerCase()
    .replace(/['']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function productLink(id) {
  return 'product.html?id=' + id;
}

/* ============================================================
   MAIN
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {

  /* ── 1. Scroll-reveal ─────────────────────────────────────── */
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(
    '.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger'
  ).forEach(function (el) { revealObserver.observe(el); });

  setTimeout(function () {
    document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger'
    ).forEach(function (el) {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add('visible');
      }
    });
  }, 100);


  /* ── 2. Mobile nav ─────────────────────────────────────────── */
  var toggle = document.getElementById('menu-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      var open = navLinks.classList.toggle('active');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? '✕' : '☰';
    });
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navLinks.classList.remove('active');
        toggle.textContent = '☰';
      });
    });
  }


  /* ── 3. Navbar shadow ──────────────────────────────────────── */
  var navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      navbar.style.boxShadow = window.scrollY > 20 ? '0 4px 20px rgba(59,0,14,.30)' : 'none';
    }, { passive: true });
  }


  /* ── 4. Toast ─────────────────────────────────────────────── */
  function showToast(message, duration) {
    duration = duration || 3000;
    var toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { toast.classList.remove('show'); }, duration);
  }


  /* ── 5. Cart badge ─────────────────────────────────────────── */
  var cart = [];
  try { cart = JSON.parse(localStorage.getItem('diorCart') || '[]'); } catch (e) { }

  function renderBadge() {
    var total = cart.reduce(function (s, i) { return s + i.qty; }, 0);
    var badge = document.querySelector('.cart-badge');
    var icon = document.querySelector('.nav-icons a[href="cart.html"]');
    if (!icon) return;
    if (total > 0) {
      if (!badge) {
        badge = document.createElement('span');
        badge.className = 'cart-badge';
        Object.assign(badge.style, {
          position: 'absolute', top: '-6px', right: '-8px',
          background: 'var(--accent)', color: '#fff', borderRadius: '50%',
          fontSize: '.65rem', width: '18px', height: '18px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: '700', pointerEvents: 'none'
        });
        icon.style.position = 'relative';
        icon.appendChild(badge);
      }
      badge.textContent = total;
    } else if (badge) { badge.remove(); }
  }

  renderBadge();

  window.diorCart = {
    items: cart,
    add: function (name, price, qty, image, subtitle) {
      qty = qty || 1;
      var found = cart.filter(function (i) { return i.name === name; })[0];
      if (found) {
        found.qty += qty;
      } else {
        cart.push({ name: name, price: price, qty: qty, image: image || '', subtitle: subtitle || '' });
      }
      try { localStorage.setItem('diorCart', JSON.stringify(cart)); } catch (e) { }
      renderBadge();
      showToast('✓ ' + name + ' added to your bag');
    },
    remove: function (name) {
      var idx = cart.findIndex(function (i) { return i.name === name; });
      if (idx > -1) cart.splice(idx, 1);
      try { localStorage.setItem('diorCart', JSON.stringify(cart)); } catch (e) { }
      renderBadge();
    }
  };


  /* ── 6. PRODUCT PAGE — load from URL param ─────────────────── */
  if (document.getElementById('pd-name') !== null) {

    var params = new URLSearchParams(window.location.search);
    var id = params.get('id') || 'lady-dior-handbag';
    var product = PRODUCTS[id];

    if (!product) {
      /* Unknown ID — show first product as fallback */
      product = PRODUCTS['lady-dior-handbag'];
    }

    /* Fill page title */
    document.title = 'DIOR — ' + product.name;

    /* Breadcrumb */
    var bcLink = document.getElementById('bc-collection-link');
    var bcName = document.getElementById('bc-name');
    if (bcLink) { bcLink.textContent = product.collection; bcLink.href = product.collectionLink; }
    if (bcName) bcName.textContent = product.name;

    /* Main image */
    var mainImg = document.getElementById('pd-main-img');
    if (mainImg) { mainImg.src = product.image; mainImg.alt = product.name; }

    /* Thumbnails — reuse same image for all 4 thumbs (single image per product) */
    var thumbsContainer = document.getElementById('pd-thumbs');
    if (thumbsContainer) {
      thumbsContainer.innerHTML = '';
      for (var t = 0; t < 4; t++) {
        var thumbDiv = document.createElement('div');
        thumbDiv.className = 'pd-thumb' + (t === 0 ? ' active' : '');
        thumbDiv.innerHTML = '<img src="' + product.image + '" alt="View ' + (t + 1) + '">';
        thumbsContainer.appendChild(thumbDiv);
      }
    }

    /* Info fields */
    document.getElementById('pd-name').textContent = product.name;
    document.getElementById('pd-subtitle').textContent = product.subtitle;
    document.getElementById('pd-price').textContent = product.price;
    document.getElementById('pd-desc').textContent = product.desc;
    document.getElementById('pd-material').textContent = product.material;
    document.getElementById('pd-dimensions').textContent = product.dimensions;
    document.getElementById('pd-origin').textContent = product.origin;

    /* Related products */
    var relatedContainer = document.getElementById('pd-related');
    if (relatedContainer) {
      var relatedIds = (RELATED[product.collection] || []).filter(function (rid) { return rid !== id; }).slice(0, 4);
      relatedContainer.innerHTML = relatedIds.map(function (rid) {
        var rp = PRODUCTS[rid];
        if (!rp) return '';
        return '<a href="' + productLink(rid) + '" class="arrival-card">' +
          '<div class="arrival-img"><img src="' + rp.image + '" alt="' + rp.name + '"></div>' +
          '<p class="arrival-name">' + rp.name + '</p>' +
          '<p class="arrival-sub">' + rp.subtitle + '</p>' +
          '<p class="arrival-price">' + rp.price + '</p>' +
          '</a>';
      }).join('');
    }

    /* Add to Bag button */
    var addBtn = document.getElementById('pd-add-btn');
    if (addBtn) {
      addBtn.addEventListener('click', function () {
        if (window.diorCart) window.diorCart.add(product.name, product.price, 1, product.image, product.subtitle);
        addBtn.textContent = '✓ Added to Bag';
        addBtn.style.background = 'var(--primary)';
        setTimeout(function () {
          addBtn.textContent = '🛍 Add to Bag';
          addBtn.style.background = '';
        }, 2000);
      });
    }

    /* Wishlist */
    var wishBtn = document.getElementById('pd-wishlist');
    if (wishBtn) {
      var saved = false;
      wishBtn.addEventListener('click', function (e) {
        e.preventDefault(); saved = !saved;
        wishBtn.textContent = saved ? '❤️ Saved to Wishlist' : '🤍 Save to Wishlist';
        showToast(saved ? 'Added to your wishlist' : 'Removed from wishlist');
      });
    }

    /* Thumbnail gallery swap */
    var thumbEls = document.querySelectorAll('.pd-thumb');
    var pdMain = document.getElementById('pd-main-img');
    thumbEls.forEach(function (thumb) {
      thumb.addEventListener('click', function () {
        thumbEls.forEach(function (t) { t.classList.remove('active'); });
        thumb.classList.add('active');
        var src = thumb.querySelector('img') ? thumb.querySelector('img').src : null;
        if (!src || !pdMain) return;
        pdMain.style.opacity = '0';
        pdMain.style.transform = 'scale(.96)';
        pdMain.style.transition = 'opacity .25s, transform .25s';
        setTimeout(function () {
          pdMain.src = src;
          pdMain.style.opacity = '1';
          pdMain.style.transform = 'none';
        }, 220);
      });
    });
  }


  /* ── 7. Rewrite all product card links to include ?id= ──────── */
  /* This handles every <a href="product.html"> on collection pages */
  document.querySelectorAll('a[href="product.html"]').forEach(function (link) {
    /* Find the product name from the card */
    var card = link.closest('.shop-card') || link.closest('.arrival-card') || link.closest('.acc-item');
    if (!card) return;
    var nameEl = card.querySelector('h3') || card.querySelector('.arrival-name') || card.querySelector('p');
    if (!nameEl) return;
    var slug = slugify(nameEl.textContent.trim());
    if (PRODUCTS[slug]) {
      link.href = productLink(slug);
    }
  });


  /* ── 8. Star rating ────────────────────────────────────────── */
  document.querySelectorAll('.star-select').forEach(function (container) {
    var stars = container.querySelectorAll('span');
    var sel = 0;
    stars.forEach(function (s, i) {
      s.addEventListener('mouseenter', function () { stars.forEach(function (x, j) { x.classList.toggle('lit', j <= i); }); });
      s.addEventListener('mouseleave', function () { stars.forEach(function (x, j) { x.classList.toggle('lit', j < sel); }); });
      s.addEventListener('click', function () { sel = i + 1; stars.forEach(function (x, j) { x.classList.toggle('lit', j < sel); }); });
    });
  });


  /* ── 9. Review form submit ──────────────────────────────────── */
  var reviewForm = document.querySelector('.pd-write-review');
  if (reviewForm) {
    var rBtn = reviewForm.querySelector('.btn-accent');
    if (rBtn) {
      rBtn.addEventListener('click', function () {
        var nameVal = reviewForm.querySelector('input') ? reviewForm.querySelector('input').value.trim() : '';
        var textVal = reviewForm.querySelector('textarea') ? reviewForm.querySelector('textarea').value.trim() : '';
        var litCount = reviewForm.querySelectorAll('.star-select .lit').length;
        if (!nameVal || !textVal || !litCount) { showToast('Please fill in all fields and select a rating.'); return; }
        var list = document.querySelector('.pd-reviews-list');
        if (list) {
          var card = document.createElement('div');
          card.className = 'review-card reveal visible';
          card.innerHTML = '<div class="review-card-header">' +
            '<div class="review-avatar avatar-initial">' + nameVal[0].toUpperCase() + '</div>' +
            '<div class="review-meta"><strong>' + nameVal + '</strong><span class="rv-stars">' + '⭐'.repeat(litCount) + '</span></div>' +
            '<span class="rv-date">Just now</span></div>' +
            '<p class="review-quote">"' + textVal + '"</p>';
          list.insertBefore(card, list.querySelector('.btn-accent'));
        }
        reviewForm.querySelector('input').value = '';
        reviewForm.querySelector('textarea').value = '';
        reviewForm.querySelectorAll('.star-select span').forEach(function (s) { s.classList.remove('lit'); });
        showToast('Thank you for your review! ✨');
      });
    }
  }


  /* ── 10. Cart page — render from localStorage ───────────────── */
  var cartContainer = document.getElementById('cart-items-container');
  if (cartContainer) {

    function updateCartTotals() {
      var sub = 0;
      document.querySelectorAll('.cart-item').forEach(function (item) {
        var q = parseInt(((item.querySelector('.qty-num') || {}).textContent || '0'), 10);
        sub += q * parseFloat(item.dataset.unitPrice || '0');
      });
      var fmt = '$' + sub.toLocaleString('en-US', { minimumFractionDigits: 2 });
      var subtotalEl = document.getElementById('cart-subtotal');
      var totalEl = document.getElementById('cart-total');
      if (subtotalEl) subtotalEl.textContent = fmt;
      if (totalEl) totalEl.textContent = fmt;
    }

    function saveCart() {
      var updated = [];
      document.querySelectorAll('.cart-item').forEach(function (item) {
        updated.push({
          name: item.dataset.name,
          price: item.dataset.rawPrice,
          qty: parseInt(item.querySelector('.qty-num').textContent, 10),
          image: item.dataset.image,
          subtitle: item.dataset.subtitle
        });
      });
      try { localStorage.setItem('diorCart', JSON.stringify(updated)); } catch (e) { }
      renderBadge();
    }

    function attachItemEvents(item) {
      var btns = item.querySelectorAll('.qty-btn');
      var qtyEl = item.querySelector('.qty-num');
      var priceEl = item.querySelector('.cart-item-price');
      var removeBtn = item.querySelector('.cart-remove');
      var unit = parseFloat(item.dataset.unitPrice || '0');
      var qty = parseInt((qtyEl || {}).textContent || '1', 10);

      function refreshItem() {
        if (qtyEl) qtyEl.textContent = qty;
        if (priceEl) priceEl.textContent = '$' + (unit * qty).toLocaleString('en-US', { minimumFractionDigits: 2 });
        updateCartTotals();
        saveCart();
      }

      if (btns[1]) btns[1].addEventListener('click', function () { qty++; refreshItem(); });
      if (btns[0]) btns[0].addEventListener('click', function () { if (qty > 1) { qty--; refreshItem(); } });

      if (removeBtn) {
        removeBtn.addEventListener('click', function () {
          item.style.transition = 'opacity .3s, transform .3s';
          item.style.opacity = '0';
          item.style.transform = 'translateX(30px)';
          setTimeout(function () {
            item.remove();
            updateCartTotals();
            saveCart();
            if (!document.querySelectorAll('.cart-item').length) {
              cartContainer.innerHTML =
                '<p style="color:var(--muted);padding:2rem 0;font-size:.95rem">Your bag is empty.</p>';
            }
          }, 320);
        });
      }
    }

    function buildCartItem(entry) {
      /* Look up product data by name to get image if not stored */
      var image = entry.image || '';
      var subtitle = entry.subtitle || '';
      if (!image || !subtitle) {
        var found = Object.values(PRODUCTS).filter(function (p) { return p.name === entry.name; })[0];
        if (found) { image = found.image; subtitle = found.subtitle; }
      }

      var rawPrice = parseFloat((entry.price || '0').replace(/[^0-9.]/g, ''));
      var lineTotal = (rawPrice * entry.qty).toLocaleString('en-US', { minimumFractionDigits: 2 });

      var item = document.createElement('div');
      item.className = 'cart-item reveal visible';
      item.dataset.unitPrice = rawPrice;
      item.dataset.rawPrice = entry.price || '$0.00';
      item.dataset.name = entry.name;
      item.dataset.image = image;
      item.dataset.subtitle = subtitle;

      item.innerHTML =
        '<div class="cart-item-img"><img src="' + image + '" alt="' + entry.name + '"></div>' +
        '<div class="cart-item-details">' +
        '<div class="cart-item-top">' +
        '<div>' +
        '<h3>' + entry.name + '</h3>' +
        '<p class="cart-item-sub">' + subtitle + '</p>' +
        '</div>' +
        '<button class="cart-remove">✕</button>' +
        '</div>' +
        '<div class="cart-item-bottom">' +
        '<div class="qty-controls">' +
        '<button class="qty-btn">−</button>' +
        '<span class="qty-num">' + entry.qty + '</span>' +
        '<button class="qty-btn">+</button>' +
        '</div>' +
        '<span class="cart-item-price">$' + lineTotal + '</span>' +
        '</div>' +
        '</div>';

      return item;
    }

    /* Render all items from localStorage */
    if (cart.length === 0) {
      cartContainer.innerHTML =
        '<p style="color:var(--muted);padding:2rem 0;font-size:.95rem">Your bag is empty.</p>';
    } else {
      cart.forEach(function (entry) {
        var item = buildCartItem(entry);
        cartContainer.appendChild(item);
        attachItemEvents(item);
      });
      updateCartTotals();
    }

  }


  /* 11. Filter bar (collection pages + review page) */
  var filterBtns = document.querySelectorAll('.filter-btn');
  if (filterBtns.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var currentCards = document.querySelectorAll('.shop-card, .testimonial-card');
        if (!currentCards.length) return;

        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');

        var f = (btn.dataset.filter || btn.textContent).trim().toLowerCase();

        currentCards.forEach(function (c) {
          c.style.transition = 'opacity .3s, transform .3s';
          c.style.opacity = '0';
          c.style.transform = 'scale(.95)';
        });

        setTimeout(function () {
          currentCards.forEach(function (c) {
            var cat = (c.dataset.cat || '').trim().toLowerCase();
            var show = (f === 'all' || f === 'all reviews' || cat === f);

            c.style.display = show ? '' : 'none';
            if (show) {
              requestAnimationFrame(function () {
                c.style.opacity = '1';
                c.style.transform = 'none';
              });
            }
          });
        }, 300);
      });
    });
  }


  /*12. Newsletter */
  var nlForm = document.querySelector('.newsletter-form');
  if (nlForm) {
    var nlInp = nlForm.querySelector('input');
    var nlBtn = nlForm.querySelector('.btn-accent');
    if (nlInp && nlBtn) {
      nlBtn.addEventListener('click', function () {
        if (!nlInp.value.trim() || nlInp.value.indexOf('@') === -1) { showToast('Please enter a valid email address.'); return; }
        nlBtn.textContent = '✓ Subscribed!'; nlBtn.disabled = true; nlInp.value = '';
        showToast('Welcome to the Maison! 🌹');
      });
    }
  }


  /* ── 13. Delivery options ──────────────────────────────────── */
  document.querySelectorAll('.delivery-option').forEach(function (opt) {
    opt.addEventListener('click', function () {
      document.querySelectorAll('.delivery-option').forEach(function (o) { o.classList.remove('selected'); });
      opt.classList.add('selected');
    });
  });


  /* ── 13. Delivery options ──────────────────────────────────── */
  document.querySelectorAll('.delivery-option').forEach(function (opt) {
    opt.addEventListener('click', function () {
      document.querySelectorAll('.delivery-option').forEach(function (o) { o.classList.remove('selected'); });
      opt.classList.add('selected');
    });
  });


  /* ── 14a. Payment field formatting & restrictions ────────────── */
  (function initPaymentFields() {
    var form = document.querySelector('.checkout-form');
    if (!form) return;

    /* helper: set field valid/invalid style */
    function setFieldState(inp, valid) {
      inp.style.borderColor = valid ? 'var(--accent)' : '#c0392b';
      inp.style.boxShadow = valid
        ? '0 0 0 3px rgba(164,97,145,.15)'
        : '0 0 0 3px rgba(192,57,43,.12)';
    }
    function clearFieldState(inp) {
      inp.style.borderColor = '';
      inp.style.boxShadow = '';
    }

    /* ── Email ── */
    var emailInp = form.querySelector('input[type="email"]');
    if (emailInp) {
      emailInp.addEventListener('blur', function () {
        if (!emailInp.value.trim()) { clearFieldState(emailInp); return; }
        var ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInp.value.trim());
        setFieldState(emailInp, ok);
      });
      emailInp.addEventListener('input', function () { clearFieldState(emailInp); });
    }

    /* ── ZIP — digits only, max 10 chars ── */
    var zipInp = form.querySelector('input[placeholder="ZIP Code"]');
    if (zipInp) {
      zipInp.setAttribute('maxlength', '10');
      zipInp.addEventListener('input', function () {
        zipInp.value = zipInp.value.replace(/[^0-9\- ]/g, '');
        clearFieldState(zipInp);
      });
      zipInp.addEventListener('blur', function () {
        if (!zipInp.value.trim()) { clearFieldState(zipInp); return; }
        setFieldState(zipInp, zipInp.value.trim().length >= 4);
      });
    }

    /* ── Card number — format as "0000 0000 0000 0000", digits only, max 16 ── */
    var cardInp = form.querySelector('input[placeholder*="0000 0000"]');
    if (cardInp) {
      cardInp.setAttribute('maxlength', '19'); /* 16 digits + 3 spaces */
      cardInp.setAttribute('inputmode', 'numeric');
      cardInp.addEventListener('input', function () {
        var digits = cardInp.value.replace(/\D/g, '').slice(0, 16);
        cardInp.value = digits.replace(/(.{4})/g, '$1 ').trim();
        clearFieldState(cardInp);
      });
      cardInp.addEventListener('blur', function () {
        if (!cardInp.value.trim()) { clearFieldState(cardInp); return; }
        var digits = cardInp.value.replace(/\D/g, '');
        var ok = digits.length === 16 && luhnCheck(digits);
        setFieldState(cardInp, ok);
        if (!ok) showToast('Please enter a valid 16-digit card number.');
      });
    }

    /* Luhn algorithm — validates card numbers */
    function luhnCheck(num) {
      var sum = 0;
      var alt = false;
      for (var i = num.length - 1; i >= 0; i--) {
        var n = parseInt(num[i], 10);
        if (alt) { n *= 2; if (n > 9) n -= 9; }
        sum += n;
        alt = !alt;
      }
      return sum % 10 === 0;
    }

    /* ── Expiry — format as MM/YY, validate not in past ── */
    var expiryInp = form.querySelector('input[placeholder="MM/YY"]');
    if (expiryInp) {
      expiryInp.setAttribute('maxlength', '5');
      expiryInp.setAttribute('inputmode', 'numeric');
      expiryInp.addEventListener('input', function () {
        var digits = expiryInp.value.replace(/\D/g, '').slice(0, 4);
        if (digits.length >= 3) {
          expiryInp.value = digits.slice(0, 2) + '/' + digits.slice(2);
        } else {
          expiryInp.value = digits;
        }
        clearFieldState(expiryInp);
      });
      expiryInp.addEventListener('blur', function () {
        if (!expiryInp.value.trim()) { clearFieldState(expiryInp); return; }
        var parts = expiryInp.value.split('/');
        if (parts.length !== 2) { setFieldState(expiryInp, false); return; }
        var mm = parseInt(parts[0], 10);
        var yy = parseInt(parts[1], 10);
        var now = new Date();
        var curYY = now.getFullYear() % 100;
        var curMM = now.getMonth() + 1;
        var valid = mm >= 1 && mm <= 12 &&
          (yy > curYY || (yy === curYY && mm >= curMM));
        setFieldState(expiryInp, valid);
        if (!valid) showToast('Card expiry date is invalid or in the past.');
      });
    }

    /* ── CVV — digits only, 3–4 chars ── */
    var cvvInp = form.querySelector('input[placeholder="123"]');
    if (cvvInp) {
      cvvInp.setAttribute('maxlength', '4');
      cvvInp.setAttribute('inputmode', 'numeric');
      cvvInp.addEventListener('input', function () {
        cvvInp.value = cvvInp.value.replace(/\D/g, '').slice(0, 4);
        clearFieldState(cvvInp);
      });
      cvvInp.addEventListener('blur', function () {
        if (!cvvInp.value.trim()) { clearFieldState(cvvInp); return; }
        setFieldState(cvvInp, cvvInp.value.length >= 3);
      });
    }

    /* ── Name fields — letters only ── */
    form.querySelectorAll('input[placeholder="First Name"], input[placeholder="Last Name"]')
      .forEach(function (inp) {
        inp.addEventListener('input', function () {
          inp.value = inp.value.replace(/[^a-zA-Z\s\-']/g, '');
          clearFieldState(inp);
        });
        inp.addEventListener('blur', function () {
          if (!inp.value.trim()) { clearFieldState(inp); return; }
          setFieldState(inp, inp.value.trim().length >= 2);
        });
      });
  })();


  /* ── 14. Checkout — render order summary from localStorage ──── */
  var checkoutItems = document.getElementById('checkout-items');
  if (checkoutItems) {

    var expressShipping = 0;

    function calcCheckoutTotal() {
      var sub = cart.reduce(function (s, i) {
        return s + parseFloat((i.price || '0').replace(/[^0-9.]/g, '')) * i.qty;
      }, 0);
      var total = sub + expressShipping;

      var subEl = document.getElementById('checkout-subtotal');
      var totalEl = document.getElementById('checkout-total');
      var shippingEl = document.getElementById('checkout-shipping');

      if (subEl) subEl.textContent = '$' + sub.toLocaleString('en-US', { minimumFractionDigits: 2 });
      if (totalEl) totalEl.textContent = '$' + total.toLocaleString('en-US', { minimumFractionDigits: 2 });
      if (shippingEl) shippingEl.textContent = expressShipping > 0 ? '$25.00' : 'Free';
    }

    if (cart.length === 0) {
      checkoutItems.innerHTML =
        '<p style="color:var(--muted);font-size:.85rem;margin-bottom:1rem">Your bag is empty. <a href="index.html" style="color:var(--accent)">Continue shopping →</a></p>';
    } else {
      cart.forEach(function (entry) {
        var image = entry.image || '';
        var subtitle = entry.subtitle || '';
        if (!image || !subtitle) {
          var found = Object.values(PRODUCTS).filter(function (p) { return p.name === entry.name; })[0];
          if (found) { image = found.image; subtitle = found.subtitle; }
        }
        var linePrice = parseFloat((entry.price || '0').replace(/[^0-9.]/g, '')) * entry.qty;
        var row = document.createElement('div');
        row.className = 'summary-item';
        row.innerHTML =
          '<div class="summary-item-img"><img src="' + image + '" alt="' + entry.name + '"></div>' +
          '<div class="summary-item-info"><strong>' + entry.name + '</strong><span>' + subtitle + (entry.qty > 1 ? ' × ' + entry.qty : '') + '</span></div>' +
          '<span class="summary-item-price">$' + linePrice.toLocaleString('en-US', { minimumFractionDigits: 2 }) + '</span>';
        checkoutItems.appendChild(row);
      });
    }

    calcCheckoutTotal();

    /* Update total when delivery option changes */
    document.querySelectorAll('.delivery-option').forEach(function (opt) {
      opt.addEventListener('click', function () {
        var isExpress = opt.querySelector('strong') && opt.querySelector('strong').textContent.indexOf('Express') !== -1;
        expressShipping = isExpress ? 25 : 0;
        calcCheckoutTotal();
      });
    });
  }

  var purchaseBtn = document.getElementById('purchaseBtn');
  if (purchaseBtn) {
    purchaseBtn.addEventListener('click', function () {
      var inputs = document.querySelectorAll('.checkout-form input');
      var valid = true;
      var firstInvalid = null;

      inputs.forEach(function (inp) {
        var val = inp.value.trim();
        var ok = true;

        if (!val) {
          ok = false;
        } else if (inp.type === 'email') {
          ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
        } else if (inp.placeholder === '123') {
          ok = val.length >= 3;
        } else if (inp.placeholder === 'MM/YY') {
          var parts = val.split('/');
          if (parts.length === 2) {
            var mm = parseInt(parts[0], 10);
            var yy = parseInt(parts[1], 10);
            var now = new Date();
            ok = mm >= 1 && mm <= 12 &&
              (yy > now.getFullYear() % 100 ||
                (yy === now.getFullYear() % 100 && mm >= now.getMonth() + 1));
          } else { ok = false; }
        } else if (inp.placeholder && inp.placeholder.indexOf('0000 0000') !== -1) {
          ok = val.replace(/\D/g, '').length === 16;
        }

        inp.style.borderColor = ok ? '' : '#c0392b';
        inp.style.boxShadow = ok ? '' : '0 0 0 3px rgba(192,57,43,.12)';
        if (!ok) { valid = false; if (!firstInvalid) firstInvalid = inp; }
      });

      if (!valid) {
        showToast('Please fill in all fields correctly before continuing.');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      purchaseBtn.textContent = 'Processing…';
      purchaseBtn.disabled = true;
      var audio = new Audio('assets/audio/success.mp3');
      audio.play().catch(function () { });
      try { localStorage.removeItem('diorCart'); } catch (e) { }
      setTimeout(function () { window.location.href = 'confirmation.html'; }, 1200);
    });
  }


  /* ── 15. Confirmation checkmark ────────────────────────────── */
  var confirmIcon = document.querySelector('.confirm-icon');
  if (confirmIcon) {
    confirmIcon.style.transform = 'scale(0)';
    confirmIcon.style.transition = 'transform .55s cubic-bezier(.34,1.56,.64,1)';
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { confirmIcon.style.transform = 'scale(1)'; });
    });
  }


  /* ── 16. Image fallback ────────────────────────────────────── */
  document.querySelectorAll('img').forEach(function (img) {
    if (!img.hasAttribute('loading')) img.setAttribute('loading', 'lazy');
    img.addEventListener('error', function () { img.style.opacity = '0'; });
  });

});