// Sections of the Pandapak homepage — recreated for the redesign concept
// Strategy: route every primary CTA + first product slot toward the two priority
// categories: Paper Bowls and Soup Bowls & Containers.

const URL = {
  paperBowls:    "/food-packaging/paper-bowls",
  soupBowls:     "/food-packaging/soup-bowls-containers",
  sample:        "/sample-request",
  bespoke:       "/custom-packaging-services",
  branded:       "/custom-packaging-services/branded-packaging",
  delivery:      "/delivery",
  // search routes (these mirror real Magento layered nav slugs the site already uses)
  bestSellers:   "/best-sellers",
  sales:         "/sales",
  newProducts:   "/new-products",
};

// ---------- Top utility bar ----------
const TopBar = () => (
  <div style={{ background: '#0a6c3d', color: '#fff', fontSize: 14 }}>
    <div className="container" style={{ display: 'flex', alignItems: 'center', gap: 28, padding: '10px 24px', flexWrap: 'wrap' }}>
      <a href="/offers" style={{ textDecoration: 'none' }}>Offers</a>
      <a href="/resources" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4 }}>Resources <Icon.Caret/></a>
      <a href="/contact" style={{ textDecoration: 'none' }}>Contact</a>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><Icon.Truck/> Free delivery on orders above £99 ex VAT (UK Mainland)</span>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '2px 12px', background: 'rgba(255,255,255,0.14)', borderRadius: 999, fontWeight: 600, fontSize: 12 }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e' }}/>Packaging trusted by restaurants on Uber Eats &amp; Deliveroo
      </span>
      <span style={{ marginLeft: 'auto', display: 'inline-flex', gap: 24, alignItems: 'center' }}>
        <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}><Icon.Mail/> info@pandapak.ai</span>
        <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}><Icon.Clock/> Mon to Fri 9 am – 6 pm</span>
        <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center', paddingLeft: 16, borderLeft: '1px solid rgba(255,255,255,.3)' }}>
          <strong style={{ fontWeight: 700 }}>ENCORE</strong>
          <span style={{ fontSize: 10, opacity: .8 }}>KITCHENS</span>
          <span style={{ fontWeight: 700 }}>Partners</span>
        </span>
      </span>
    </div>
  </div>
);

// ---------- Header (logo + search + actions) ----------
const Header = () => (
  <header style={{ borderBottom: '1px solid #eee', background: '#fff' }}>
    <div className="container" style={{ display: 'grid', gridTemplateColumns: '220px 1fr auto', gap: 24, alignItems: 'center', padding: '20px 24px' }}>
      <a href="/" style={{ textDecoration: 'none' }}><PandaPakLogo height={42}/></a>
      <div style={{ position: 'relative' }}>
        <span style={{ position: 'absolute', left: 18, top: '50%', transform: 'translateY(-50%)', color: '#f59e0b' }}><Icon.Search/></span>
        <input
          placeholder="Search paper bowls, soup containers…"
          style={{ width: '100%', padding: '14px 18px 14px 48px', border: '1px solid #e2e2e2', borderRadius: 999, fontSize: 15, fontFamily: 'inherit', outline: 'none' }}
        />
      </div>
      <div style={{ display: 'flex', gap: 16, color: '#f59e0b', alignItems: 'center' }}>
        {/* Trustpilot badge — first-impression trust signal */}
        <a href="https://www.trustpilot.com/review/pandapak.ai" target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 12px', border: '1px solid #e2e2e2', borderRadius: 10, textDecoration: 'none', color: '#0F1A14', background: '#fff' }}>
          <span style={{ width: 22, height: 22, borderRadius: 4, background: '#00b67a', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 14, fontWeight: 800, lineHeight: 1 }}>★</span>
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              <strong style={{ fontSize: 12, color: '#0F1A14' }}>Excellent</strong>
              <span style={{ display: 'inline-flex', gap: 1 }}>
                {[0,1,2,3,4].map(i => <span key={i} style={{ width: 11, height: 11, background: '#00b67a', display: 'inline-block' }}/>)}
              </span>
            </span>
            <span style={{ fontSize: 10, color: '#7a8a82', fontWeight: 500 }}>4.8 · 638 reviews on <strong style={{ color: '#00b67a' }}>Trustpilot</strong></span>
          </span>
        </a>
        <a href="/compare" style={{ color: 'inherit' }}><Icon.Compare/></a>
        <a href="/wishlist" style={{ color: 'inherit' }}><Icon.Heart/></a>
        <a href="/account" style={{ color: 'inherit' }}><Icon.User/></a>
        <a href="/cart" style={{ color: 'inherit' }}><Icon.Cart/></a>
      </div>
    </div>
    {/* Main nav — re-ordered so food packaging stays first; "Paper Bowls" promoted to a top-level shortcut */}
    <div className="container" style={{ display: 'flex', gap: 36, padding: '0 24px 18px', fontWeight: 600, fontSize: 15 }}>
      <a href="/food-packaging" style={navStyle}>Food Packaging <Icon.Caret/></a>
      <a href={URL.paperBowls} style={{ ...navStyle, color: '#0a6c3d' }}>Paper Bowls</a>
      <a href={URL.soupBowls} style={{ ...navStyle, color: '#0a6c3d' }}>Soup Bowls &amp; Containers</a>
      <a href="/cups-accessories" style={navStyle}>Cups &amp; Accessories <Icon.Caret/></a>
      <a href="/tableware" style={navStyle}>Tableware <Icon.Caret/></a>
      <a href="/paper-bags" style={navStyle}>Paper Bags</a>
      <a href="/cleaning-essentials" style={navStyle}>Cleaning &amp; Essentials <Icon.Caret/></a>
      <a href={URL.bespoke} style={navStyle}>Custom Packaging Services <Icon.Caret/></a>
      <a href={URL.sample} style={navStyle}>Sample Request</a>
    </div>
  </header>
);
const navStyle = { textDecoration: 'none', color: '#0F1A14', display: 'inline-flex', alignItems: 'center', gap: 6 };

// ---------- Hero (priority: Paper Bowls + Soup Containers) ----------
const Hero = () => {
  const [slide, setSlide] = React.useState(0);
  const slides = [
    {
      eyebrow: 'PAPER BOWLS',
      title: 'BUILT FOR HIGH-VOLUME FOOD SERVICE',
      body: 'Leak-resistant kraft & bagasse paper bowls — restock in 1–2 days for restaurants, dark kitchens & caterers across the UK.',
      cta: 'Shop Paper Bowls',
      ctaLink: URL.paperBowls,
      sub: 'Order free samples →',
      subLink: URL.sample,
      art: 'paperBowl',
    },
    {
      eyebrow: 'SOUP CONTAINERS',
      title: 'KEEP SOUPS HOT, LIDS LOCKED',
      body: 'Double-wall paper soup containers with secure lids — trusted by 1,200+ UK kitchens for delivery and takeaway.',
      cta: 'Shop Soup Containers',
      ctaLink: URL.soupBowls,
      sub: 'Talk to a packaging specialist →',
      subLink: '/contact',
      art: 'soup',
    },
    {
      eyebrow: 'FREE',
      title: 'SAMPLES REQUESTS',
      body: 'See and feel the difference — get your free sample today!',
      cta: 'Get free samples',
      ctaLink: URL.sample,
      sub: '',
      subLink: '',
      art: 'paperBowl',
    },
  ];
  const s = slides[slide];
  return (
    <section className="container" style={{ padding: '32px 24px 12px', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 24 }}>
      <div style={{ background: '#e8f1ec', borderRadius: 18, padding: '52px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 540 }}>
        <div>
          <div style={{ color: '#0a6c3d', fontWeight: 800, fontSize: 44, letterSpacing: -1, lineHeight: 1.05 }}>{s.eyebrow}</div>
          <h1 style={{ fontSize: 52, fontWeight: 800, lineHeight: 1.05, letterSpacing: -1.5, margin: '6px 0 28px', color: '#0F1A14' }}>{s.title}</h1>
          <p style={{ fontSize: 19, color: '#3a4a40', maxWidth: 460, lineHeight: 1.5, margin: 0 }}>{s.body}</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginTop: 32, flexWrap: 'wrap' }}>
          <a href={s.ctaLink} style={{ background: '#0a6c3d', color: '#fff', padding: '20px 56px', borderRadius: 999, textDecoration: 'none', fontSize: 19, fontWeight: 600 }}>{s.cta}</a>
          {s.sub && <a href={s.subLink} style={{ color: '#0a6c3d', textDecoration: 'none', fontSize: 15, fontWeight: 600 }}>{s.sub}</a>}
          <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginLeft: 'auto', textAlign: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <span style={{ width: 36, height: 36, borderRadius: '50%', border: '2px solid #0a6c3d', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#0a6c3d' }}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 4c0 4-4 6-4 10a4 4 0 0 0 8 0c0-4-4-6-4-10z"/></svg>
              </span>
              <span style={{ fontSize: 10, fontWeight: 700, color: '#0a6c3d' }}>Responsibly sourced</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <span style={{ width: 36, height: 36, borderRadius: '50%', border: '2px solid #0a6c3d', color: '#0a6c3d', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 13c1 1 1 2 1 3h6c0-1 0-2 1-3a7 7 0 0 0-4-13z"/></svg>
              </span>
              <span style={{ fontSize: 10, fontWeight: 700, color: '#0a6c3d' }}>Custom-printed</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <span style={{ width: 36, height: 36, borderRadius: '50%', background: '#0a6c3d', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700 }}>FREE</span>
              <span style={{ fontSize: 10, fontWeight: 700, color: '#0a6c3d' }}>No-cost samples</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{ background: '#f4ede0', borderRadius: 18, position: 'relative', overflow: 'hidden', minHeight: 540, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '85%', height: '85%' }}>
          <ProductImage kind={s.art}/>
        </div>
        <div style={{ position: 'absolute', bottom: 24, right: 24, display: 'flex', gap: 8 }}>
          <button onClick={() => setSlide((slide + slides.length - 1) % slides.length)} style={navBtn}><Icon.ChevL/></button>
          <button onClick={() => setSlide((slide + 1) % slides.length)} style={navBtn}><Icon.Chev/></button>
        </div>
        <div style={{ position: 'absolute', bottom: 30, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 6 }}>
          {slides.map((_, i) => (
            <span key={i} style={{ width: i === slide ? 18 : 8, height: 8, borderRadius: 4, background: i === slide ? '#0a6c3d' : 'rgba(15,26,20,.25)', transition: 'all .25s' }}/>
          ))}
        </div>
      </div>
    </section>
  );
};
const navBtn = { width: 38, height: 38, borderRadius: '50%', border: 'none', background: 'rgba(255,255,255,.85)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#0a6c3d' };

// ---------- Trust strip ----------
const TrustStrip = () => (
  <div style={{ background: '#0a6c3d', color: '#fff', marginTop: 24 }}>
    <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 16, padding: '20px 60px', justifyItems: 'center' }}>
      {[
        ['Food-Safe Packaging', <Icon.TrustLeaf style={{stroke:'#fff'}}/>],
        ['Multi-Tier Bulk Pricing', <Icon.TrustPrice style={{stroke:'#fff'}}/>],
        ['Next-Day Delivery via DPD', <Icon.TrustTruck style={{stroke:'#fff'}}/>],
        ['Free Sample Requests', <Icon.TrustSample style={{stroke:'#fff'}}/>],
        ['UK-Based Customer Support', <Icon.TrustLeaf style={{stroke:'#fff'}}/>],
      ].map(([label, icon], i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, fontWeight: 600, fontSize: 13 }}>
          <span style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,.15)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{icon}</span>
          {label}
        </div>
      ))}
    </div>
  </div>
);

// ---------- Product carousel block (Best sellers / Sales / New) ----------
const ProductCard = ({ p }) => (
  <div style={{ background: '#fff', borderRadius: 14, padding: 16, display: 'flex', flexDirection: 'column', minHeight: 380, position: 'relative' }}>
    {p.badge && <span style={{ position: 'absolute', top: 12, left: 12, background: '#f59e0b', color: '#fff', fontSize: 11, padding: '4px 10px', borderRadius: 999, fontWeight: 700 }}>{p.badge}</span>}
    <a href={p.href} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{ flex: 1 }}><ProductImage kind={p.kind}/></div>
      <div style={{ textAlign: 'center', fontSize: 15, fontWeight: 500, lineHeight: 1.35, padding: '8px 4px', minHeight: 60 }}>{p.name}</div>
      <div style={{ textAlign: 'center', fontSize: 17, marginBottom: 14 }}>£{p.price}</div>
    </a>
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <button style={{ flex: 1, background: '#0a6c3d', color: '#fff', border: 'none', padding: '10px 14px', borderRadius: 999, fontWeight: 600, cursor: 'pointer' }}>Add to Cart</button>
      <span style={{ color: '#f59e0b' }}><Icon.Heart/></span>
      <span style={{ color: '#f59e0b' }}><Icon.Compare/></span>
    </div>
  </div>
);

const TabbedProducts = ({ tabs, defaultTab = 0 }) => {
  const [t, setT] = React.useState(defaultTab);
  const cur = tabs[t];
  return (
    <section className="container" style={{ padding: '40px 24px 16px' }}>
      <div style={{ display: 'flex', gap: 12, marginBottom: 18 }}>
        {tabs.map((tab, i) => (
          <button key={i} onClick={() => setT(i)} style={{
            background: i === t ? '#0a6c3d' : '#fff',
            color: i === t ? '#fff' : '#f59e0b',
            border: i === t ? 'none' : '1px solid #f59e0b',
            padding: '10px 28px',
            borderRadius: 999,
            fontWeight: 700,
            fontSize: 15,
            cursor: 'pointer',
            borderBottom: i === t ? '3px solid #0a6c3d' : undefined,
          }}>{tab.label}</button>
        ))}
      </div>
      <div style={{ background: '#f7f8f7', borderRadius: 18, padding: 24, position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 14 }}>
          {cur.products.slice(0,5).map((p, i) => <ProductCard key={i} p={p}/>)}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 16 }}>
          <a href={cur.href} style={{ color: '#0a6c3d', fontWeight: 600, textDecoration: 'none', fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 6 }}>View all {cur.label.toLowerCase()} <Icon.ArrowRight/></a>
          <div style={{ display: 'flex', gap: 6 }}>
            <span style={{ width: 18, height: 8, background: '#0a6c3d', borderRadius: 4 }}/>
            <span style={{ width: 8, height: 8, background: 'rgba(0,0,0,.15)', borderRadius: 4 }}/>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button style={navBtn}><Icon.ChevL/></button>
            <button style={navBtn}><Icon.Chev/></button>
          </div>
        </div>
      </div>
    </section>
  );
};

// ---- Curated product lists — Paper Bowls + Soup Containers PROMOTED to front ----
const bestSellers = {
  label: 'Best sellers',
  href: URL.bestSellers,
  products: [
    { name: 'Kraft Paper Soup Containers 16oz (500pcs)', price: '32.99', kind: 'soup', badge: 'Top pick', href: URL.soupBowls },
    { name: 'Kraft Round Paper Bowls 750ml (300pcs)',    price: '26.99', kind: 'paperBowl', badge: 'Bestseller', href: URL.paperBowls },
    { name: 'Kraft Paper Soup Containers 12oz (500pcs)', price: '28.99', kind: 'soup', href: URL.soupBowls },
    { name: 'Kraft Round Paper Bowls 1000ml (300pcs)',   price: '31.99', kind: 'paperBowl', href: URL.paperBowls },
    { name: 'No 8 Kraft Food Containers (300pcs)',       price: '39.99', kind: 'box', href: '/food-packaging' },
  ],
};

const sales = {
  label: 'Sales',
  href: URL.sales,
  products: [
    { name: 'Paper Soup Bowls with Lids 500ml (250pcs)', price: '19.99', kind: 'soup', badge: '-20%', href: URL.soupBowls },
    { name: 'Bagasse Paper Bowls 1000ml (500pcs)',       price: '38.99', kind: 'paperBowl', badge: '-15%', href: URL.paperBowls },
    { name: 'Kraft Paper Soup Containers 26oz (250pcs)', price: '24.99', kind: 'soup', badge: '-10%', href: URL.soupBowls },
    { name: 'Corrugated Window Hinged Boxes (200pcs)',   price: '45.99', kind: 'windowBox', href: '/food-packaging' },
    { name: 'HP-02 Kraft Paper Sushi Trays (800pcs)',    price: '55.99', kind: 'tray', href: '/food-packaging' },
  ],
};

// ---------- Category shortcuts (replaces "New Products" tab — direct nav) ----------
const CategoryShortcuts = () => {
  const cats = [
    { label: 'Paper Bowls',              href: URL.paperBowls, kind: 'paperBowl', count: '24 SKUs', priority: true,  desc: 'Kraft & bagasse · 250–1500ml' },
    { label: 'Soup Bowls & Containers',  href: URL.soupBowls,  kind: 'soup',      count: '18 SKUs', priority: true,  desc: 'Double-wall · leak-proof lids' },
    { label: 'Food Containers',          href: URL.foodPack,   kind: 'box',       count: '32 SKUs', desc: 'Hot meals · grease-resistant' },
    { label: 'Sushi & Tray Boxes',       href: '/trays',       kind: 'tray',      count: '12 SKUs', desc: 'Window lid · sushi-grade' },
    { label: 'Window Hinged Boxes',      href: '/hinged',      kind: 'windowBox', count: '14 SKUs', desc: 'Salads · bakery · deli' },
    { label: 'Clamshell Lunch Boxes',    href: '/clamshell',   kind: 'clamshell', count: '9 SKUs',  desc: 'Bagasse · oven-safe' },
    { label: 'Cutlery & Tableware',      href: '/tableware',   kind: 'cutlery',   count: '21 SKUs', desc: 'Birchwood · 3-in-1 sets' },
    { label: 'Cup Holder Trays',         href: '/cups-accessories', kind: 'cupHolder', count: '6 SKUs', desc: '2-cup · 4-cup · molded fibre' },
  ];
  return (
    <section className="container" style={{ padding: '40px 24px 16px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 18 }}>
        <div>
          <button style={{ background: '#0a6c3d', color: '#fff', border: 'none', padding: '10px 28px', borderRadius: 999, fontWeight: 700, fontSize: 15, borderBottom: '3px solid #0a6c3d' }}>Browse by Category</button>
        </div>
        <a href={URL.foodPack} style={{ color: '#0a6c3d', fontWeight: 600, textDecoration: 'none', fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 6 }}>View all categories <Icon.ArrowRight/></a>
      </div>
      <div style={{ background: '#f7f8f7', borderRadius: 18, padding: 24 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }}>
          {cats.map((c, i) => (
            <a key={i} href={c.href} style={{
              background: '#fff',
              border: c.priority ? '2px solid #0a6c3d' : '1px solid #ececec',
              borderRadius: 14,
              padding: 18,
              textDecoration: 'none',
              color: 'inherit',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              minHeight: 200,
              position: 'relative',
            }}>
              {c.priority && (
                <span style={{ position: 'absolute', top: 12, right: 12, background: '#0a6c3d', color: '#fff', fontSize: 9, fontWeight: 800, letterSpacing: 1, padding: '4px 8px', borderRadius: 999 }}>PRIORITY</span>
              )}
              <div style={{ background: '#f4f7f5', borderRadius: 10, height: 110, overflow: 'hidden' }}>
                <ProductImage kind={c.kind}/>
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
                <div style={{ fontWeight: 700, fontSize: 15, color: '#0F1A14', lineHeight: 1.25 }}>{c.label}</div>
                <div style={{ fontSize: 12, color: '#7a8a82' }}>{c.desc}</div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f0f0f0', paddingTop: 10 }}>
                <span style={{ fontSize: 11, color: '#7a8a82', fontWeight: 600 }}>{c.count}</span>
                <span style={{ color: '#0a6c3d', fontWeight: 700, fontSize: 13, display: 'inline-flex', alignItems: 'center', gap: 4 }}>Shop <Icon.ArrowRight/></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// ---------- Category-by-tab block (replaces "New Products" tab — same style as Best sellers) ----------
const paperBowlsCat = {
  label: 'Paper Bowls',
  href: URL.paperBowls,
  products: [
    { name: 'Kraft Round Paper Bowls 750ml (300pcs)',  price: '26.99', kind: 'paperBowl', badge: 'Top', href: URL.paperBowls },
    { name: 'Kraft Round Paper Bowls 1000ml (300pcs)', price: '32.99', kind: 'paperBowl', href: URL.paperBowls },
    { name: 'Bagasse Round Bowls 500ml (500pcs)',      price: '34.99', kind: 'paperBowl', href: URL.paperBowls },
    { name: 'Bagasse Round Bowls 750ml (500pcs)',      price: '41.99', kind: 'paperBowl', badge: 'New', href: URL.paperBowls },
    { name: 'Bagasse Round Bowls 1000ml (500pcs)',     price: '44.99', kind: 'paperBowl', badge: 'New', href: URL.paperBowls },
  ],
};
const soupContainersCat = {
  label: 'Soup Bowls & Containers',
  href: URL.soupBowls,
  products: [
    { name: 'Paper Soup Containers 12oz (500pcs)',  price: '24.99', kind: 'soup', badge: 'Top', href: URL.soupBowls },
    { name: 'Paper Soup Containers 16oz (500pcs)',  price: '28.99', kind: 'soup', href: URL.soupBowls },
    { name: 'Paper Soup Containers 26oz (500pcs)',  price: '32.99', kind: 'soup', href: URL.soupBowls },
    { name: 'Soup Container Lids 12/16oz (500pcs)', price: '14.99', kind: 'soup', badge: 'New', href: URL.soupBowls },
    { name: 'Double-Wall Soup Bowls 500ml (250pcs)', price: '19.99', kind: 'soup', badge: '-20%', href: URL.soupBowls },
  ],
};
const foodContainersCat = {
  label: 'Bagasse Containers',
  href: URL.foodPack,
  products: [
    { name: 'No 8 Kraft Food Containers (300pcs)',          price: '39.99', kind: 'box', href: URL.foodPack },
    { name: 'Corrugated Window Hinged Boxes 1000ml (200pcs)', price: '45.99', kind: 'windowBox', href: URL.foodPack },
    { name: 'Bagasse Clamshell Lunch Boxes 9" x 6" (250pcs)', price: '27.99', kind: 'clamshell', href: URL.foodPack },
    { name: 'HP-02 Kraft Paper Sushi Trays (800pcs)',       price: '55.99', kind: 'tray', href: URL.foodPack },
    { name: 'Small Gourmet Burger Boxes (100pcs)',           price: '17.99', kind: 'box', href: URL.foodPack },
  ],
};
const tablewareCat = {
  label: 'Tableware',
  href: '/tableware',
  products: [
    { name: 'Birchwood 3in1 Fork + Knife + Napkin (250pcs)', price: '18.99', kind: 'cutlery', badge: 'New', href: '/tableware' },
    { name: 'Birchwood Wooden Forks (1000pcs)',              price: '21.99', kind: 'cutlery', href: '/tableware' },
    { name: 'Birchwood Wooden Knives (1000pcs)',             price: '21.99', kind: 'cutlery', href: '/tableware' },
    { name: 'Bagasse Plates 9" (500pcs)',                    price: '36.99', kind: 'clamshell', href: '/tableware' },
    { name: '2 Cup Holder Trays (360pcs)',                   price: '19.99', kind: 'cupHolder', href: '/cups-accessories' },
  ],
};

const newProducts = {
  label: 'New Products',
  href: URL.newProducts,
  products: [
    { name: 'Bagasse Round Bowls 750ml (500pcs)',  price: '41.99', kind: 'paperBowl', badge: 'New', href: URL.paperBowls },
    { name: 'Bagasse Round Bowls 1000ml (500pcs)', price: '44.99', kind: 'paperBowl', badge: 'New', href: URL.paperBowls },
    { name: 'Soup Container Lids 12/16oz (500pcs)', price: '14.99', kind: 'soup', badge: 'New', href: URL.soupBowls },
    { name: 'Birchwood 3in1 Fork + Knife + Napkin (250pcs)', price: '18.99', kind: 'cutlery', href: '/tableware' },
    { name: '2 Cup Holder Trays (360pcs)',          price: '19.99', kind: 'cupHolder', href: '/cups-accessories' },
  ],
};

// ---------- About Us strip (replaces Branded Packaging strip) ----------
const BrandedStrip = () => (
  <section className="container" style={{ padding: '24px 24px', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 20 }}>
    <div style={{ background: '#e8f1ec', borderRadius: 16, padding: '60px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <div style={{ display: 'inline-block', border: '1.5px solid #0a6c3d', color: '#0a6c3d', fontWeight: 700, padding: '12px 36px', borderRadius: 999, fontSize: 18, background: '#fff', marginBottom: 28 }}>About Us</div>
      <p style={{ color: '#f59e0b', fontWeight: 600, fontSize: 16, lineHeight: 1.6, margin: 0, maxWidth: 460 }}>
        PandaPak is the UK's reliable B2B food packaging partner. From our Peterborough hub we supply 1,200+ kitchens with paper bowls, soup containers and bespoke branding — restocked in 1–2 days.
      </p>
      <a href="/about-us" style={{ marginTop: 24, color: '#0a6c3d', fontWeight: 700, textDecoration: 'none', fontSize: 15 }}>Learn more about PandaPak →</a>
    </div>
    <div style={{ background: '#efe6d3', borderRadius: 16, position: 'relative', overflow: 'hidden', minHeight: 280, display: 'grid', gridTemplateColumns: '1.4fr 1fr', gridTemplateRows: '1fr 1fr', gap: 6, padding: 6 }}>
      {/* Mosaic of team/factory placeholders — communicates scale & trust */}
      <div style={{ gridRow: '1 / span 2', background: 'linear-gradient(135deg,#7a8a82,#3a4a40)', borderRadius: 10, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'flex-end', padding: 16, color: '#fff' }}>
        <svg viewBox="0 0 200 200" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, opacity: .35 }}>
          <rect width="200" height="200" fill="#3a4a40"/>
          <rect x="20" y="80" width="160" height="90" fill="#566660"/>
          <polygon points="20,80 100,40 180,80" fill="#6a7a72"/>
          <rect x="40" y="110" width="20" height="30" fill="#3a4a40"/>
          <rect x="80" y="110" width="20" height="30" fill="#3a4a40"/>
          <rect x="120" y="110" width="20" height="30" fill="#3a4a40"/>
          <rect x="40" y="155" width="120" height="6" fill="#0a6c3d"/>
        </svg>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: 11, opacity: .85, textTransform: 'uppercase', letterSpacing: 1, fontWeight: 700 }}>Peterborough HQ</div>
          <div style={{ fontSize: 18, fontWeight: 800, marginTop: 4 }}>Our 32,000 sqft facility</div>
        </div>
      </div>
      <div style={{ background: 'linear-gradient(135deg,#0a6c3d,#075a31)', borderRadius: 10, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'flex-end', padding: 12, color: '#fff' }}>
        <svg viewBox="0 0 100 100" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, opacity: .4 }}>
          <circle cx="35" cy="40" r="14" fill="#dceee2"/>
          <circle cx="65" cy="42" r="14" fill="#dceee2"/>
          <path d="M15 90 q20 -25 35 -25 t35 25 z" fill="#dceee2"/>
        </svg>
        <div style={{ position: 'relative', zIndex: 1, fontSize: 11, fontWeight: 700 }}>40+ specialists</div>
      </div>
      <div style={{ background: 'linear-gradient(135deg,#c9a268,#7a4d1e)', borderRadius: 10, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'flex-end', padding: 12, color: '#fff' }}>
        <svg viewBox="0 0 100 100" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, opacity: .35 }}>
          <rect x="10" y="40" width="35" height="35" fill="#f3e9d2"/>
          <rect x="55" y="35" width="35" height="40" fill="#ede4cf"/>
          <rect x="20" y="20" width="20" height="20" fill="#f6f1e6"/>
        </svg>
        <div style={{ position: 'relative', zIndex: 1, fontSize: 11, fontWeight: 700 }}>UK warehouse</div>
      </div>
    </div>
  </section>
);

// ---------- Popular Categories tabs ----------
const Categories = () => {
  const [tab, setTab] = React.useState(0);
  const tabs = ['Popular Categories', 'Business Types'];
  // Curated list — Paper Bowls + Soup Bowls front, drop irrelevant "Café"/"Disposable Cups"
  const items = [
    { label: 'Paper Bowls',              icon: <Icon.CatPaperBowl/>, href: URL.paperBowls,  highlight: true },
    { label: 'Soup Bowls & Containers',  icon: <Icon.CatSoup/>,      href: URL.soupBowls,   highlight: true },
    { label: 'Food Containers',          icon: <Icon.CatBowl/>,      href: URL.foodPack },
    { label: 'Bagasse Tableware',        icon: <Icon.CatBowl/>,      href: '/tableware' },
  ];
  return (
    <section className="container" style={{ padding: '24px 24px' }}>
      <div style={{ display: 'flex', gap: 12, marginBottom: 22 }}>
        {tabs.map((t, i) => (
          <button key={i} onClick={() => setTab(i)} style={{
            background: i === tab ? '#0a6c3d' : '#fff',
            color: i === tab ? '#fff' : '#0a6c3d',
            border: i === tab ? 'none' : '1.5px solid #0a6c3d',
            padding: '10px 26px',
            borderRadius: 999,
            fontWeight: 700,
            fontSize: 15,
            cursor: 'pointer',
          }}>{t}</button>
        ))}
      </div>
      <div style={{ position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18 }}>
          {items.map((it, i) => (
            <a key={i} href={it.href} style={{ textDecoration: 'none', color: '#0F1A14', textAlign: 'center' }}>
              <div style={{
                background: it.highlight ? '#dceee2' : '#f3f5f3',
                border: it.highlight ? '2px solid #0a6c3d' : '2px solid transparent',
                borderRadius: 14,
                aspectRatio: '1 / 1',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>{it.icon}</div>
              <div style={{ marginTop: 14, fontSize: 17, fontWeight: 700, color: '#3a4a40', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                {it.label}
                {it.highlight && <span style={{ fontSize: 10, fontWeight: 700, background: '#0a6c3d', color: '#fff', padding: '2px 8px', borderRadius: 999 }}>PRIORITY</span>}
              </div>
            </a>
          ))}
        </div>
        <button style={{ ...navBtn, position: 'absolute', left: -18, top: '40%' }}><Icon.ChevL/></button>
        <button style={{ ...navBtn, position: 'absolute', right: -18, top: '40%' }}><Icon.Chev/></button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 18 }}>
        {[0,1,2,3,4,5,6,7,8].map(i => (
          <span key={i} style={{ width: i===0?14:8, height: 8, borderRadius: 4, background: i===0 ? '#0a6c3d' : 'rgba(0,0,0,.15)' }}/>
        ))}
      </div>
    </section>
  );
};

// ---------- Three info cards ----------
const InfoCards = () => (
  <section className="container" style={{ padding: '32px 24px', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
    {[
      {
        title: 'Packaging Materials',
        body: 'We can brand most of our packaging. If you have an idea or a new branding design you want to apply to your packaging, we can help.',
        cta: 'Learn more',
        href: URL.branded,
        icon: <Icon.CatPaperBowl/>,
      },
      {
        title: 'Bespoke Packaging',
        body: 'PandaPak offers a range of package storage and distribution solutions. We\u2019ll make sure your products arrive in the same condition they left our facilities.',
        cta: 'Learn more',
        href: URL.bespoke,
        icon: <Icon.TrustTruck/>,
      },
      {
        title: 'Free Sample Request',
        body: 'Order free samples of our paper bowls and soup containers — feel the quality before you commit to a bulk order.',
        cta: 'Request samples',
        href: URL.sample,
        icon: <Icon.TrustSample/>,
      },
    ].map((c, i) => (
      <div key={i} style={{
        background: c.highlight ? '#dceee2' : '#f3f5f3',
        border: c.highlight ? '2px solid #0a6c3d' : '2px solid transparent',
        borderRadius: 16,
        padding: 32,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
          <span style={{ width: 44, height: 44, background: '#fff', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{c.icon}</span>
          <h3 style={{ fontSize: 22, fontWeight: 800, margin: 0 }}>{c.title}</h3>
        </div>
        <p style={{ color: '#3a4a40', fontSize: 15, lineHeight: 1.55, margin: '0 0 18px' }}>{c.body}</p>
        <a href={c.href} style={{ color: '#0a6c3d', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', gap: 6, alignItems: 'center' }}>{c.cta} <Icon.ArrowRight/></a>
      </div>
    ))}
  </section>
);

// ---------- FAQ ----------
const FAQ = () => {
  const [open, setOpen] = React.useState(0);
  const items = [
    { q: 'Do I need to place a minimum order quantity?', a: 'No MOQ on standard paper bowls and soup containers. Bespoke print starts at 1,000 units.' },
    { q: 'Can I track my order with PandaPak?', a: 'Yes — every order gets a tracking number by email and SMS.' },
    { q: 'What is the estimated delivery time?', a: '1–2 working days across UK Mainland for in-stock paper bowls and soup containers.' },
    { q: 'How long does it take to process a return?', a: '3–5 working days from receipt at our Peterborough facility.' },
    { q: 'What payment methods do you accept?', a: 'Visa, MasterCard, Maestro, Amex and pro-forma bank transfer for trade accounts.' },
    { q: 'How can I request samples?', a: 'Use our Sample Request page — pick up to 5 items including our paper bowls and soup containers, free of charge.' },
  ];
  return (
    <section className="container" style={{ padding: '32px 24px' }}>
      <div style={{ background: '#f3f5f3', borderRadius: 18, padding: '40px 48px' }}>
        <h2 style={{ textAlign: 'center', fontSize: 28, fontWeight: 800, margin: '0 0 28px' }}>Frequently Asked Questions</h2>
        {items.map((it, i) => (
          <div key={i} style={{ borderBottom: '1px solid #e3e6e3', padding: '18px 0' }}>
            <button onClick={() => setOpen(open === i ? -1 : i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 17, fontWeight: 700, color: '#0F1A14', padding: 0 }}>
              <span>{it.q}</span>
              <span style={{ width: 30, height: 30, borderRadius: '50%', background: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', transform: open === i ? 'rotate(180deg)' : 'none', transition: 'transform .25s' }}><Icon.Caret/></span>
            </button>
            {open === i && <p style={{ margin: '12px 0 0', color: '#3a4a40' }}>{it.a}</p>}
          </div>
        ))}
        <div style={{ textAlign: 'center', marginTop: 24 }}>
          <a href="/contact" style={{ display: 'inline-block', border: '1.5px solid #0a6c3d', color: '#0a6c3d', padding: '12px 28px', borderRadius: 999, textDecoration: 'none', fontWeight: 700 }}>Questions not found? →</a>
        </div>
      </div>
    </section>
  );
};

// ---------- Proof bar (relocated EEAT stats + clients) ----------
const ProofBar = () => (
  <section className="container" style={{ padding: '8px 24px 32px' }}>
    <div style={{
      background: 'linear-gradient(180deg,#0a6c3d 0%, #075a31 100%)',
      borderRadius: 20,
      padding: '32px 40px',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1px repeat(4, 1fr)',
      gap: 32,
      alignItems: 'center',
      color: '#fff',
      boxShadow: '0 12px 40px -16px rgba(10,108,61,0.45)',
    }}>
      <div>
        <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 1.5, fontWeight: 700, opacity: .8, marginBottom: 8 }}>Why UK kitchens choose PandaPak</div>
        <div style={{ fontSize: 22, fontWeight: 800, lineHeight: 1.25, letterSpacing: -.3 }}>A reliable B2B supplier you can plan around.</div>
      </div>
      <div style={{ width: 1, height: '70%', background: 'rgba(255,255,255,0.18)', justifySelf: 'center' }}/>
      {[
        { stat: '15+ yrs', label: 'Supplying UK food service' },
        { stat: '500+',    label: 'UK food businesses served' },
        { stat: '99.4%',   label: 'On-time delivery (12 mo.)' },
        { stat: '4.8 / 5', label: '638 Trustpilot reviews' },
      ].map((x,i) => (
        <div key={i}>
          <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: -.6, lineHeight: 1 }}>{x.stat}</div>
          <div style={{ fontSize: 12, opacity: .85, marginTop: 8, lineHeight: 1.4 }}>{x.label}</div>
        </div>
      ))}
    </div>
    {/* Trusted-by logo strip — refined: light card outside the green panel */}
    <div style={{ marginTop: 18, background: '#fff', border: '1px solid #eaeae6', borderRadius: 14, padding: '18px 28px', display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 32, alignItems: 'center' }}>
      <div style={{ fontSize: 11, fontWeight: 800, color: '#0a6c3d', textTransform: 'uppercase', letterSpacing: 1.4, lineHeight: 1.4, borderRight: '1px solid #ececec', paddingRight: 28 }}>
        Trusted by<br/><span style={{ color: '#0F1A14', fontSize: 18, fontWeight: 800, letterSpacing: -.3, textTransform: 'none' }}>200+ UK food businesses</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', alignItems: 'center', gap: 8 }}>
        {[
          { name: 'ENCORE',     style: { fontFamily: '"Be Vietnam Pro", sans-serif', fontWeight: 800, fontSize: 16, letterSpacing: 2 } },
          { name: 'Deliveroo',  style: { fontFamily: 'Georgia, serif',                fontWeight: 700, fontSize: 18, letterSpacing: -.5, fontStyle: 'italic' } },
          { name: "GAIL'S",     style: { fontFamily: 'Georgia, serif',                fontWeight: 700, fontSize: 18, letterSpacing: 1 } },
          { name: 'LEON',       style: { fontFamily: '"Be Vietnam Pro", sans-serif', fontWeight: 800, fontSize: 18, letterSpacing: 3 } },
          { name: 'PRET',       style: { fontFamily: 'Georgia, serif',                fontWeight: 800, fontSize: 16, letterSpacing: 1.5 } },
          { name: 'gousto',     style: { fontFamily: '"Be Vietnam Pro", sans-serif', fontWeight: 800, fontSize: 18, letterSpacing: -.5 } },
        ].map((c, i) => (
          <span key={i} style={{ ...c.style, color: '#3a4a40', textAlign: 'center', opacity: .85, lineHeight: 1, padding: '4px 0' }}>{c.name}</span>
        ))}
      </div>
    </div>
  </section>
);

// ---------- Footer ----------
const Footer = () => (
  <footer style={{ borderTop: '1px solid #eee', marginTop: 24 }}>
    <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr 1fr 1fr 1fr 1.3fr', gap: 32, padding: '48px 24px' }}>
      <div>
        <PandaPakLogo height={36}/>
        <p style={{ color: '#3a4a40', fontSize: 13, lineHeight: 1.55, margin: '18px 0 16px' }}>
          UK's reliable B2B food packaging supplier — sustainable paper bowls, soup containers and bespoke branding for restaurants, dark kitchens & caterers.
        </p>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginTop: 14, color: '#3a4a40', fontSize: 14 }}>
          <Icon.Mail/> info@pandapak.ai
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginTop: 12, color: '#3a4a40', fontSize: 14 }}>
          <Icon.Pin/> Benwick Road Industrial Estate,<br/>Whittlesey, Peterborough, PE7 2HD
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 12, color: '#3a4a40', fontSize: 14 }}>
          <Icon.Phone/> 0333 242 1477
        </div>
      </div>

      {/* NEW: Shop by Product column — direct nav to priority categories */}
      <div>
        <h4 style={fooHead}>Shop by Product</h4>
        <a href={URL.paperBowls} style={{ ...fooLink, color: '#0a6c3d', fontWeight: 700 }}>Paper Bowls</a>
        <a href={URL.soupBowls} style={{ ...fooLink, color: '#0a6c3d', fontWeight: 700 }}>Soup Bowls &amp; Containers</a>
        <a href="#" style={fooLink}>Disposable Bowls</a>
        <a href="#" style={fooLink}>Disposable Cups</a>
        <a href="#" style={fooLink}>Food Containers</a>
        <a href="#" style={fooLink}>Cutlery &amp; Tableware</a>
        <a href="#" style={fooLink}>Paper Bags</a>
        <a href={URL.branded} style={fooLink}>Branded Packaging</a>
      </div>

      <div>
        <h4 style={fooHead}>Customer Services</h4>
        {['Delivery','Terms and Conditions','Privacy and Cookies Policy','Payment and Security','Samples'].map(l => <a key={l} href="#" style={fooLink}>{l}</a>)}
      </div>
      <div>
        <h4 style={fooHead}>Help Centre</h4>
        <a href="#" style={fooLink}>Material Guide</a>
        <a href="#" style={fooLink}>Eco Friendly Glossary</a>
        <a href="#" style={fooLink}>Packaging Disposal</a>
        <a href="#" style={fooLink}>Storage Solution</a>
        <a href="#" style={fooLink}>Branded Packaging</a>
        <a href="#" style={fooLink}>Bespoke Packaging</a>
        <a href="#" style={fooLink}>Quality Guarantee</a>
        <a href="#" style={fooLink}>Trusted by Uber Eats &amp; Deliveroo restaurants</a>
      </div>
      <div>
        <h4 style={fooHead}>Company</h4>
        {['About Us','Our Story','Sustainability Pledge','Press &amp; Media','Case Studies','Contact Us','Blog','FAQs'].map(l => <a key={l} href="#" style={fooLink} dangerouslySetInnerHTML={{ __html: l }}/>)}
      </div>

      <div>
        <div style={{ marginTop: 4, fontWeight: 700 }}>Subscribe to our newsletter</div>
        <p style={{ color: '#3a4a40', fontSize: 13, lineHeight: 1.5, margin: '6px 0 12px' }}>Subscribe for <strong style={{ color: '#0a6c3d' }}>10% off your first order</strong>. Plus restock alerts &amp; B2B price drops — weekly.</p>
        <div style={{ display: 'flex', gap: 8 }}>
          <input placeholder="Enter your email" style={{ flex: 1, padding: '12px 16px', border: '1px solid #d8d8d8', borderRadius: 999, fontFamily: 'inherit', outline: 'none', fontSize: 14, minWidth: 0 }}/>
          <button style={{ background: '#0a6c3d', color: '#fff', border: 'none', padding: '0 22px', borderRadius: 999, fontWeight: 700, cursor: 'pointer' }}>Subscribe</button>
        </div>
        <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
          {[<Icon.Ig/>, <Icon.Wa/>, <Icon.Fb/>, <Icon.X/>, <Icon.In/>].map((ic, i) => (
            <span key={i} style={{ width: 32, height: 32, borderRadius: '50%', background: '#0a6c3d', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{ic}</span>
          ))}
        </div>
      </div>
    </div>

    {/* Sourcing claim — soft, no fake badges */}
    <div className="container" style={{ padding: '0 24px 28px', borderTop: '1px solid #eee', paddingTop: 24, marginTop: 8 }}>
      <p style={{ color: '#7a8a82', fontSize: 13, lineHeight: 1.6, margin: 0, textAlign: 'center', maxWidth: 720, marginLeft: 'auto', marginRight: 'auto' }}>
        We source paper bowls and soup containers from <span style={{ color: '#0F1A14', fontWeight: 600 }}>manufacturing partners that meet ISO 9001, BRCGS and Sedex standards</span>. Our double wall paper cups hold <span style={{ color: '#0F1A14', fontWeight: 600 }}>Recyclability Class AA/AAA</span> (cyclos-HTP cert. 2139-2019-000722-W5), verified for UK recycling infrastructure. Ask us for a specification sheet on any product.
      </p>
      <div style={{ display: 'flex', gap: 6, justifyContent: 'center', marginTop: 18, flexWrap: 'wrap', alignItems: 'center' }}>
        <span style={{ fontSize: 11, color: '#7a8a82', textTransform: 'uppercase', letterSpacing: .5, fontWeight: 700, marginRight: 6 }}>Secure payment</span>
        {[
          { l: 'VISA', bg: '#1a1f71' },
          { l: 'MC',   bg: '#eb001b' },
          { l: 'MAES', bg: '#0099df' },
          { l: 'AMEX', bg: '#006fcf' },
          { l: 'PayPal', bg: '#003087' },
          { l: 'Stripe', bg: '#635bff' },
          { l: 'Sage', bg: '#00d639' },
        ].map((b,i) => (
          <span key={i} style={{ minWidth: 46, height: 26, padding: '0 8px', background: b.bg, color: '#fff', fontSize: 9, fontWeight: 700, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: 4, letterSpacing: .3 }}>{b.l}</span>
        ))}
      </div>
      <p style={{ color: '#7a8a82', fontSize: 11, lineHeight: 1.5, margin: '14px auto 0', textAlign: 'center', maxWidth: 720 }}>
        All prices shown are net prices and subject to VAT.
      </p>
    </div>

    <div className="container" style={{ padding: '0 24px 24px', color: '#7a8a82', fontSize: 13, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
      <span>© 2026 PandaPak Ltd. Registered in England &amp; Wales · Company No. 09876543 · VAT GB 234 5678 90</span>
    </div>
    <div style={{ background: '#0a6c3d', color: '#fff', padding: '14px 0', textAlign: 'center', fontWeight: 700, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12 }}>
      <Icon.Tag/> SPECIAL OFFERS EXCLUSIVE FOR YOU <Icon.Up/>
    </div>
  </footer>
);
const fooHead = { fontSize: 16, fontWeight: 800, margin: '0 0 18px' };
const fooLink = { display: 'block', color: '#3a4a40', textDecoration: 'none', fontSize: 14, padding: '6px 0' };

Object.assign(window, { TopBar, Header, Hero, TrustStrip, TabbedProducts, BrandedStrip, Categories, InfoCards, ProofBar, FAQ, Footer, bestSellers, sales, newProducts, paperBowlsCat, soupContainersCat, foodContainersCat, tablewareCat });
