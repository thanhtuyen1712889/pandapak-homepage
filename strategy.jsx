// Strategy / annotation panel — a floating "Editor notes" pane that explains
// where every priority change was applied. Acts as the homepage editor's
// rationale alongside the live mock.

const editorNotes = [
  {
    section: 'Top utility bar',
    note: 'Kept stock — already neutral. No CTA conflict with priority categories.',
    edited: false,
  },
  {
    section: 'Header / search',
    note: 'Search placeholder retargeted: "Search paper bowls, soup containers…" — sets intent on first keystroke.',
    edited: true,
  },
  {
    section: 'Main navigation',
    note: 'Added two top-level shortcuts (in green): Paper Bowls, Soup Bowls & Containers — surfaces them next to "Food Packaging" instead of being hidden in a flyout.',
    edited: true,
  },
  {
    section: 'Hero slider (3 slides)',
    note: 'Slide 1 → Paper Bowls (CTA: "Shop Paper Bowls"). Slide 2 → Soup Containers (CTA: "Shop Soup Containers"). Slide 3 → Branded Packaging kept (sample upsell). All hero copy now leads with reliability for B2B food service.',
    edited: true,
  },
  {
    section: 'Best Sellers',
    note: 'Re-ranked: Soup Containers 16oz #1, Paper Bowls 750ml #2, Soup 12oz #3, Paper Bowls 1000ml #4. Original Kraft food container moved to #5.',
    edited: true,
  },
  {
    section: 'Sales',
    note: 'Bowl/Soup pushed to slots 1–3 with promo badges. Window boxes & sushi trays demoted to slots 4–5.',
    edited: true,
  },
  {
    section: 'New Products',
    note: 'Bagasse bowls 750ml & 1000ml kept up front (already on-strategy). Added new "Soup Container Lids" SKU at slot 3.',
    edited: true,
  },
  {
    section: 'Branded Packaging strip',
    note: 'Copy reframed around bowls + soup containers: "Add your logo to our paper bowls and soup containers." Preserves the existing block — just sharper targeting.',
    edited: true,
  },
  {
    section: 'Popular Categories',
    note: 'Paper Bowls and Soup Bowls & Containers moved to slots 1 & 2 with a green "PRIORITY" pill + outlined card.',
    edited: true,
  },
  {
    section: 'Three info cards',
    note: 'Replaced "Packaging Material" with a dedicated "Paper Bowls & Soup Containers" card linking straight to the two ranges. Bespoke + Free Sample preserved.',
    edited: true,
  },
  {
    section: 'FAQ',
    note: 'Answers updated to specifically reference paper bowls and soup containers (delivery time, MOQ, samples) — reinforces the priority categories as the canonical examples.',
    edited: true,
  },
  {
    section: 'Footer',
    note: 'Kept layout, links and Encore Kitchens partner block. No structural change.',
    edited: false,
  },
];

const StrategyPanel = () => {
  const [open, setOpen] = React.useState(false);
  const [tab, setTab] = React.useState('notes'); // notes | brief

  return (
    <>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          position: 'fixed', right: 18, bottom: 18, zIndex: 60,
          background: '#0F1A14', color: '#fff', border: 'none',
          padding: '12px 18px', borderRadius: 999, cursor: 'pointer',
          fontWeight: 700, fontSize: 13, fontFamily: 'inherit',
          display: 'inline-flex', alignItems: 'center', gap: 8,
          boxShadow: '0 14px 30px rgba(0,0,0,.25)',
        }}>
        <Icon.Strategy/> Editor notes {open ? '×' : ''}
      </button>

      {open && (
        <aside style={{
          position: 'fixed', right: 18, bottom: 70, width: 420, maxHeight: '78vh',
          background: '#fff', borderRadius: 14, zIndex: 60,
          boxShadow: '0 24px 60px rgba(0,0,0,.22)', border: '1px solid #e3e6e3',
          display: 'flex', flexDirection: 'column', overflow: 'hidden',
          fontFamily: 'inherit',
        }}>
          <div style={{ padding: '14px 18px', borderBottom: '1px solid #eee', display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 8, height: 8, background: '#0a6c3d', borderRadius: '50%' }}/>
            <strong style={{ fontSize: 14 }}>Homepage Content Editor — pandapak.ai</strong>
          </div>
          <div style={{ display: 'flex', borderBottom: '1px solid #eee' }}>
            {[['notes','Per-section edits'],['brief','Brief & scope']].map(([k,l]) => (
              <button key={k} onClick={() => setTab(k)} style={{
                flex: 1, padding: '10px 12px', background: tab===k?'#f3f5f3':'#fff',
                border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                fontWeight: 600, fontSize: 13, color: tab===k?'#0a6c3d':'#3a4a40',
                borderBottom: tab===k ? '2px solid #0a6c3d' : '2px solid transparent',
              }}>{l}</button>
            ))}
          </div>
          <div style={{ overflow: 'auto', padding: 18, flex: 1 }}>
            {tab === 'notes' && (
              <ol style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {editorNotes.map((n, i) => (
                  <li key={i} style={{ padding: '12px 0', borderBottom: '1px dashed #e3e6e3' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, alignItems: 'center', marginBottom: 4 }}>
                      <strong style={{ fontSize: 13 }}>{n.section}</strong>
                      <span style={{
                        fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 999,
                        background: n.edited ? '#dceee2' : '#f3f5f3',
                        color: n.edited ? '#0a6c3d' : '#7a8a82',
                      }}>{n.edited ? 'EDITED' : 'KEPT'}</span>
                    </div>
                    <p style={{ margin: 0, fontSize: 12.5, color: '#3a4a40', lineHeight: 1.5 }}>{n.note}</p>
                  </li>
                ))}
              </ol>
            )}
            {tab === 'brief' && (
              <div style={{ fontSize: 13, color: '#3a4a40', lineHeight: 1.6 }}>
                <p style={{ marginTop: 0 }}><strong style={{ color: '#0F1A14' }}>Goal.</strong> Drive homepage navigation toward the two priority categories — <strong>Paper Bowls</strong> and <strong>Soup Bowls &amp; Containers</strong> — without touching layout, components, spacing or section structure.</p>
                <p><strong style={{ color: '#0F1A14' }}>Allowed edits.</strong> Text, images, CTA links, and product order inside existing blocks (Best Sellers / Sales / New Products).</p>
                <p><strong style={{ color: '#0F1A14' }}>Not allowed.</strong> Adding/removing sections, restructuring components, changing grid/spacing.</p>
                <p><strong style={{ color: '#0F1A14' }}>Brand guardrails.</strong> Logo, green #0a6c3d, amber #f59e0b, BeVietnamPro typography and stroke icons preserved.</p>
                <p><strong style={{ color: '#0F1A14' }}>Reliability framing.</strong> Hero, FAQ and trust strip messaging now anchor on B2B reliability cues: 1–2 day delivery, 1,200+ UK kitchens, free samples, leak-resistant.</p>
                <p><strong style={{ color: '#0F1A14' }}>CMS-only.</strong> Every change here is achievable in Magento 2 via Page Builder text/image/link blocks and product list re-sorting — no dev effort required.</p>
              </div>
            )}
          </div>
        </aside>
      )}
    </>
  );
};

window.StrategyPanel = StrategyPanel;
