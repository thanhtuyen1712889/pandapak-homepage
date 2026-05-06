// Shared atoms + brand assets for Pandapak homepage
// (Logo SVG recreated from supplied brand mark — green/black wordmark with eye dot)

const PandaPakLogo = ({ height = 38 }) => (
  <img src="assets/pandapak-logo.png" alt="Pandapak" style={{ height, display: 'block' }}/>
);

// Tiny icon set (stroke style, matching the original site's lightweight green icons)
const Icon = {
  Search: (p) => (<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" {...p}><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>),
  Compare: (p) => (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M4 20V8M10 20V4M16 20v-8M22 20v-4"/></svg>),
  Heart: (p) => (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>),
  User: (p) => (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" {...p}><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>),
  Cart: (p) => (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M3 4h2l2.4 12.3a2 2 0 0 0 2 1.7h8.2a2 2 0 0 0 2-1.6L21 8H6"/><circle cx="9" cy="21" r="1.5"/><circle cx="18" cy="21" r="1.5"/></svg>),
  Caret: (p) => (<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" {...p}><path d="m6 9 6 6 6-6"/></svg>),
  Truck: (p) => (<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><path d="M3 7h11v8H3zM14 10h4l3 3v2h-7z"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>),
  Mail: (p) => (<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>),
  Clock: (p) => (<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>),
  Pin: (p) => (<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13z"/><circle cx="12" cy="9" r="2.5"/></svg>),
  Phone: (p) => (<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>),
  Chev: (p) => (<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" {...p}><path d="m9 6 6 6-6 6"/></svg>),
  ChevL: (p) => (<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" {...p}><path d="m15 6-6 6 6 6"/></svg>),
  ArrowRight: (p) => (<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M5 12h14M13 5l7 7-7 7"/></svg>),
  Up: (p) => (<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" {...p}><path d="m6 15 6-6 6 6"/></svg>),
  Ig: (p) => (<svg viewBox="0 0 24 24" width="18" height="18" fill="#fff" {...p}><path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.5 1s.8.9 1 1.5c.2.4.4 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c0 1.2-.2 1.8-.4 2.2-.2.6-.5 1-1 1.5s-.9.8-1.5 1c-.4.2-1 .4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2 0-1.8-.2-2.2-.4-.6-.2-1-.5-1.5-1s-.8-.9-1-1.5c-.2-.4-.4-1-.4-2.2-.1-1.2-.1-1.6-.1-4.8s0-3.6.1-4.8c0-1.2.2-1.8.4-2.2.2-.6.5-1 1-1.5s.9-.8 1.5-1c.4-.2 1-.4 2.2-.4 1.2-.1 1.6-.1 4.8-.1zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.4-.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zM12 9.2a2.8 2.8 0 1 1 0 5.6 2.8 2.8 0 0 1 0-5.6z"/></svg>),
  Wa: (p) => (<svg viewBox="0 0 24 24" width="18" height="18" fill="#fff" {...p}><path d="M20 12a8 8 0 1 1-15-3.9L4 19l3.9-1A8 8 0 0 0 20 12zm-8-6.4A6.4 6.4 0 0 0 6.4 14l-1 4 4-1A6.4 6.4 0 1 0 12 5.6zm3.7 7.7c-.2-.1-1.2-.6-1.4-.7s-.3 0-.5.1c-.2.2-.5.7-.6.8s-.2.1-.4 0c-.2-.1-.9-.3-1.7-1-1.5-1.3-1.7-1.7-1.8-1.9 0-.2 0-.3.1-.4l.3-.3.2-.3c.1-.1 0-.2 0-.4l-.7-1.6c-.2-.4-.4-.4-.5-.4h-.4c-.1 0-.4.1-.6.3s-.8.7-.8 1.8.8 2.1.9 2.2c.1.1 1.6 2.5 4 3.5l1.3.3c.6 0 1.1-.1 1.5-.5.5-.5.5-1 .4-1.1z"/></svg>),
  Fb: (p) => (<svg viewBox="0 0 24 24" width="18" height="18" fill="#fff" {...p}><path d="M14 4h-2a4 4 0 0 0-4 4v3H6v3h2v6h3v-6h2.4l.6-3H11V8c0-.6.4-1 1-1h2V4z"/></svg>),
  X: (p) => (<svg viewBox="0 0 24 24" width="16" height="16" fill="#fff" {...p}><path d="m18 4-5.5 7L19 20h-3.4l-4.4-5.7L6.4 20H4l5.9-7.5L4.3 4H8l4 5.3L16 4z"/></svg>),
  In: (p) => (<svg viewBox="0 0 24 24" width="18" height="18" fill="#fff" {...p}><path d="M5 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM3 9h4v11H3zM10 9h3.8v1.6c.6-1 1.8-1.9 3.7-1.9 4 0 4.5 2.5 4.5 5.7V20h-4v-4.7c0-1.2 0-2.7-1.7-2.7-1.7 0-2 1.3-2 2.6V20h-4z"/></svg>),
  Plus: (p) => (<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" {...p}><path d="M12 5v14M5 12h14"/></svg>),
  Tag: (p) => (<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><path d="M12 2H4v8l12 12 8-8L12 2z"/><circle cx="8" cy="8" r="1.5" fill="currentColor"/></svg>),
  // Big stroke icons for "Popular Categories"
  CatBowl: (p) => (<svg viewBox="0 0 64 64" width="56" height="56" fill="none" stroke="#0a6c3d" strokeWidth="2.4" {...p}><path d="M8 28h48l-4 24a4 4 0 0 1-4 3.5H16a4 4 0 0 1-4-3.5z"/><path d="M8 28c0-4 10-7 24-7s24 3 24 7"/></svg>),
  CatCup: (p) => (<svg viewBox="0 0 64 64" width="56" height="56" fill="none" stroke="#0a6c3d" strokeWidth="2.4" {...p}><path d="M18 14h28l-3 42a4 4 0 0 1-4 3.5H25a4 4 0 0 1-4-3.5z"/><circle cx="32" cy="34" r="4"/></svg>),
  CatCafe: (p) => (<svg viewBox="0 0 64 64" width="56" height="56" fill="none" stroke="#0a6c3d" strokeWidth="2.4" {...p}><path d="M18 14h22v30a8 8 0 0 1-8 8h-6a8 8 0 0 1-8-8z"/><path d="M40 22h6a4 4 0 0 1 0 8h-6"/><path d="M22 6c0 3 3 3 3 6M30 6c0 3 3 3 3 6"/></svg>),
  CatPaperBowl: (p) => (<svg viewBox="0 0 64 64" width="56" height="56" fill="none" stroke="#0a6c3d" strokeWidth="2.4" {...p}><ellipse cx="32" cy="14" rx="20" ry="4"/><path d="M12 14v4c0 2 9 4 20 4s20-2 20-4v-4M12 22v4c0 2 9 4 20 4s20-2 20-4v-4M12 30v4c0 2 9 4 20 4s20-2 20-4v-4M12 38v4c0 2 9 4 20 4s20-2 20-4v-4"/></svg>),
  CatSoup: (p) => (<svg viewBox="0 0 64 64" width="56" height="56" fill="none" stroke="#0a6c3d" strokeWidth="2.4" {...p}><rect x="14" y="18" width="36" height="38" rx="3"/><path d="M10 14h44v6H10z"/></svg>),
  CatTray: (p) => (<svg viewBox="0 0 64 64" width="56" height="56" fill="none" stroke="#0a6c3d" strokeWidth="2.4" {...p}><rect x="6" y="22" width="52" height="20" rx="3"/><path d="M14 22V14a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v8"/></svg>),
  CatBag: (p) => (<svg viewBox="0 0 64 64" width="56" height="56" fill="none" stroke="#0a6c3d" strokeWidth="2.4" {...p}><path d="M14 22h36l-3 32a4 4 0 0 1-4 3.5H21a4 4 0 0 1-4-3.5z"/><path d="M22 22V14a10 10 0 0 1 20 0v8"/></svg>),
  // Trust strip
  TrustLeaf: (p) => (<svg viewBox="0 0 32 32" width="22" height="22" fill="none" stroke="#0a6c3d" strokeWidth="2" {...p}><path d="M6 26C6 14 14 6 26 6c0 12-8 20-20 20z"/><path d="M6 26c4-8 10-12 16-14"/></svg>),
  TrustPrice: (p) => (<svg viewBox="0 0 32 32" width="22" height="22" fill="none" stroke="#0a6c3d" strokeWidth="2" {...p}><circle cx="16" cy="16" r="11"/><path d="M16 9v14M19 12h-4a2.5 2.5 0 0 0 0 5h2a2.5 2.5 0 0 1 0 5h-4"/></svg>),
  TrustTruck: (p) => (<svg viewBox="0 0 32 32" width="22" height="22" fill="none" stroke="#0a6c3d" strokeWidth="2" {...p}><rect x="3" y="9" width="16" height="12"/><path d="M19 13h6l4 4v4h-10z"/><circle cx="9" cy="24" r="2.5"/><circle cx="23" cy="24" r="2.5"/></svg>),
  TrustSample: (p) => (<svg viewBox="0 0 32 32" width="22" height="22" fill="none" stroke="#0a6c3d" strokeWidth="2" {...p}><circle cx="16" cy="16" r="12"/><path d="M11 16h10M16 11v10"/></svg>),
  // Strategy panel toggle
  Strategy: (p) => (<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M3 3h7v7H3zM14 3h7v4h-7zM14 11h7v10h-7zM3 14h7v7H3z"/></svg>),
};

// Reusable product placeholder — kraft-paper tinted card with the product label
// (no real photos available; we draw a credible silhouette per product type)
// Richer product mocks: each renders with a scene/context background
// (table surface, gradient, steam) so the cards feel like real lifestyle shots,
// not flat silhouettes. Still hand-drawn placeholders since we have no real photos.
const productSilhouettes = {
  bowl: (
    <svg viewBox="0 0 200 160" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <defs><linearGradient id="bg-bowl" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#f5ead4"/><stop offset="1" stopColor="#e6d3a8"/></linearGradient></defs>
      <rect width="200" height="160" fill="url(#bg-bowl)"/>
      <ellipse cx="100" cy="135" rx="80" ry="6" fill="rgba(0,0,0,.08)"/>
      {/* steam */}
      <path d="M80 35 q5 -10 0 -20 M100 32 q-5 -10 0 -20 M120 35 q5 -10 0 -20" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity=".7"/>
      <ellipse cx="100" cy="68" rx="62" ry="10" fill="#a8742e"/>
      <path d="M38 68 Q40 120 100 128 Q160 120 162 68 Z" fill="#c9a268"/>
      <ellipse cx="100" cy="68" rx="56" ry="7" fill="#7a4d1e"/>
      <ellipse cx="100" cy="68" rx="48" ry="5" fill="#3a2510"/>
      {/* noodles peeking */}
      <path d="M70 64 q10 -3 20 0 q10 3 20 0 q10 -3 20 0" stroke="#f4d28b" strokeWidth="2" fill="none"/>
    </svg>
  ),
  soup: (
    <svg viewBox="0 0 200 160" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <defs><linearGradient id="bg-soup" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#dceee2"/><stop offset="1" stopColor="#b9d8c5"/></linearGradient></defs>
      <rect width="200" height="160" fill="url(#bg-soup)"/>
      <ellipse cx="100" cy="148" rx="60" ry="5" fill="rgba(0,0,0,.1)"/>
      {/* steam */}
      <path d="M85 18 q4 -8 0 -14 M100 14 q-4 -8 0 -14 M115 18 q4 -8 0 -14" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none" opacity=".8"/>
      <rect x="55" y="28" width="90" height="14" rx="3" fill="#a8742e"/>
      <rect x="58" y="32" width="84" height="3" fill="#7a4d1e"/>
      <path d="M58 42 L68 138 Q70 146 78 146 H122 Q130 146 132 138 L142 42 Z" fill="#c9a268"/>
      <path d="M65 60 H135 M64 78 H136 M65 96 H135" stroke="#a8742e" strokeWidth="1" fill="none" opacity=".4"/>
      {/* sleeve label */}
      <rect x="68" y="80" width="64" height="22" rx="2" fill="#0a6c3d" opacity=".85"/>
      <text x="100" y="95" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700" fontFamily="sans-serif">SOUP</text>
    </svg>
  ),
  paperBowl: (
    <svg viewBox="0 0 200 160" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <defs><linearGradient id="bg-pb" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#fff5dc"/><stop offset="1" stopColor="#f0d9a3"/></linearGradient></defs>
      <rect width="200" height="160" fill="url(#bg-pb)"/>
      {/* table surface */}
      <rect y="120" width="200" height="40" fill="#c79968" opacity=".4"/>
      <ellipse cx="100" cy="125" rx="78" ry="6" fill="rgba(0,0,0,.1)"/>
      {/* stacked bowls */}
      <ellipse cx="100" cy="118" rx="60" ry="6" fill="#a8742e"/>
      <path d="M40 118 L48 80 H152 L160 118 Z" fill="#c9a268"/>
      <ellipse cx="100" cy="80" rx="52" ry="5" fill="#7a4d1e"/>
      <ellipse cx="100" cy="80" rx="46" ry="4" fill="#3a2510"/>
      {/* salad/contents */}
      <circle cx="85" cy="78" r="4" fill="#6e8c3a"/>
      <circle cx="100" cy="76" r="5" fill="#d14a3a"/>
      <circle cx="115" cy="78" r="4" fill="#e8b341"/>
      <path d="M75 76 q25 -6 50 0" stroke="#6e8c3a" strokeWidth="2" fill="none"/>
    </svg>
  ),
  tray: (
    <svg viewBox="0 0 200 160" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <defs><linearGradient id="bg-tray" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#f3e9d2"/><stop offset="1" stopColor="#d9c293"/></linearGradient></defs>
      <rect width="200" height="160" fill="url(#bg-tray)"/>
      <ellipse cx="100" cy="135" rx="80" ry="6" fill="rgba(0,0,0,.1)"/>
      <path d="M30 80 L40 125 H160 L170 80 Z" fill="#c9a268"/>
      <path d="M30 80 L170 80 L160 70 H40 Z" fill="#a8742e"/>
      {/* sushi rolls */}
      <circle cx="70" cy="92" r="9" fill="#fff"/><circle cx="70" cy="92" r="5" fill="#3a2510"/><circle cx="70" cy="92" r="2" fill="#d14a3a"/>
      <circle cx="100" cy="92" r="9" fill="#fff"/><circle cx="100" cy="92" r="5" fill="#3a2510"/><circle cx="100" cy="92" r="2" fill="#e8b341"/>
      <circle cx="130" cy="92" r="9" fill="#fff"/><circle cx="130" cy="92" r="5" fill="#3a2510"/><circle cx="130" cy="92" r="2" fill="#6e8c3a"/>
    </svg>
  ),
  box: (
    <svg viewBox="0 0 200 160" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <defs><linearGradient id="bg-box" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#ede4cf"/><stop offset="1" stopColor="#cdb78a"/></linearGradient></defs>
      <rect width="200" height="160" fill="url(#bg-box)"/>
      <ellipse cx="100" cy="140" rx="70" ry="6" fill="rgba(0,0,0,.1)"/>
      <path d="M40 65 L100 45 L160 65 L100 85 Z" fill="#a8742e"/>
      <path d="M40 65 L40 120 L100 140 L100 85 Z" fill="#7a4d1e"/>
      <path d="M100 85 L100 140 L160 120 L160 65 Z" fill="#5a3814"/>
      <rect x="70" y="55" width="60" height="14" fill="#fff" opacity=".15"/>
    </svg>
  ),
  windowBox: (
    <svg viewBox="0 0 200 160" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <defs><linearGradient id="bg-wb" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#f4ede0"/><stop offset="1" stopColor="#d4c197"/></linearGradient></defs>
      <rect width="200" height="160" fill="url(#bg-wb)"/>
      <ellipse cx="100" cy="142" rx="75" ry="6" fill="rgba(0,0,0,.1)"/>
      <path d="M30 90 L100 65 L170 90 L100 115 Z" fill="#c9a268"/>
      <rect x="65" y="73" width="70" height="22" fill="#f6f1e6" opacity=".95"/>
      <path d="M70 80 q15 -3 30 0" stroke="#e8b341" strokeWidth="2" fill="none"/>
      <path d="M30 90 L30 125 L100 145 L100 115 Z" fill="#7a4d1e"/>
      <path d="M100 115 L100 145 L170 125 L170 90 Z" fill="#5a3814"/>
    </svg>
  ),
  clamshell: (
    <svg viewBox="0 0 200 160" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <defs><linearGradient id="bg-cs" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#eef0e8"/><stop offset="1" stopColor="#d6dccb"/></linearGradient></defs>
      <rect width="200" height="160" fill="url(#bg-cs)"/>
      <ellipse cx="100" cy="138" rx="72" ry="5" fill="rgba(0,0,0,.1)"/>
      <path d="M35 80 Q35 58 100 58 Q165 58 165 80 L160 92 H40 Z" fill="#fafafa"/>
      <path d="M40 92 H160 L155 125 Q155 132 145 132 H55 Q45 132 45 125 Z" fill="#dccfb6"/>
      <path d="M35 78 Q100 70 165 78" stroke="#bcbcbc" strokeWidth="1" fill="none"/>
    </svg>
  ),
  cutlery: (
    <svg viewBox="0 0 200 160" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <defs><linearGradient id="bg-cut" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#f6f1e6"/><stop offset="1" stopColor="#dcc794"/></linearGradient></defs>
      <rect width="200" height="160" fill="url(#bg-cut)"/>
      <rect x="40" y="50" width="120" height="60" rx="3" fill="#a8742e" transform="rotate(-12 100 80)"/>
      <rect x="65" y="35" width="6" height="100" fill="#7a4d1e" transform="rotate(18 68 85)"/>
      <rect x="100" y="35" width="6" height="100" fill="#7a4d1e" transform="rotate(18 103 85)"/>
      <rect x="55" y="60" width="60" height="35" fill="#fff" transform="rotate(15 85 78)"/>
      <ellipse cx="100" cy="138" rx="70" ry="5" fill="rgba(0,0,0,.1)"/>
    </svg>
  ),
  cupHolder: (
    <svg viewBox="0 0 200 160" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <defs><linearGradient id="bg-ch" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#f3e9d2"/><stop offset="1" stopColor="#d9c293"/></linearGradient></defs>
      <rect width="200" height="160" fill="url(#bg-ch)"/>
      <ellipse cx="100" cy="142" rx="78" ry="5" fill="rgba(0,0,0,.1)"/>
      <path d="M40 95 H160 V108 Q160 120 148 120 H52 Q40 120 40 108 Z" fill="#c9a268"/>
      <circle cx="75" cy="92" r="22" fill="#a8742e"/>
      <circle cx="125" cy="92" r="22" fill="#a8742e"/>
      <circle cx="75" cy="92" r="16" fill="#3a2510"/>
      <circle cx="125" cy="92" r="16" fill="#3a2510"/>
      {/* coffee surface */}
      <ellipse cx="75" cy="86" rx="14" ry="3" fill="#7a4d1e"/>
      <ellipse cx="125" cy="86" rx="14" ry="3" fill="#7a4d1e"/>
    </svg>
  ),
};

const ProductImage = ({ kind = "bowl" }) => (
  <div style={{ width: '100%', aspectRatio: '5 / 4', display: 'flex', alignItems: 'stretch', justifyContent: 'stretch', borderRadius: 10, overflow: 'hidden' }}>
    {productSilhouettes[kind] || productSilhouettes.bowl}
  </div>
);

Object.assign(window, { PandaPakLogo, Icon, ProductImage });
