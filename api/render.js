const SOURCE='https://raw.githubusercontent.com/LHBUSA/gov/main/index.html?v=20260820';

const swaps={
  'gov-official-managed-layer':'gov-official-managed-layer.svg',
  'gov-county-operating-model':'gov-county-operating-model.svg',
  'gov-governance-trust-pipeline':'gov-governance-trust-pipeline.svg',
  'gov-county-network-flywheel':'gov-county-network-flywheel.svg',
  'gov-county-briefing':'gov-county-briefing.svg'
};

const laptopNavFix=`<style id="gov-laptop-nav-fix">
@media (min-width:900px) and (max-width:1100px){
  header .nav{gap:12px}
  header .brand{gap:8px}
  header .brand-mark{width:34px;flex-basis:34px}
  header .brand-copy strong{font-size:16px}
  header .brand-copy small{font-size:5.8px}
  header .brand-gov{font-size:6.5px;padding:2px 6px}
  header .nav-links{display:flex;align-items:center;gap:10px}
  header .nav-links a{font-size:10px;white-space:nowrap}
  header .nav-actions .btn-secondary{display:none}
  header .nav-actions .btn-primary{display:inline-flex;min-height:36px;padding:8px 10px;font-size:8px;white-space:nowrap}
  header .menu-button{display:none}
  .mobile-menu,.mobile-menu.open{display:none!important}
}
</style>`;

function transform(html){
  // Preserve the approved page. Only map unavailable WebP artwork to the
  // equivalent SVG assets and keep the desktop nav visible on laptop widths.
  html=html.replace(/<source\b[^>]*gov-[^>]*\.webp[^>]*>/gi,'');

  for(const [base,file] of Object.entries(swaps)){
    html=html.replace(
      new RegExp(`assets/${base}(?:-960)?\\.webp`,'g'),
      `/assets/${file}`
    );
  }

  html=html.replace(
    /<link\s+rel="preload"\s+as="image"\s+href="[^"]*gov-official-managed-layer[^"]*"[^>]*>/i,
    '<link rel="preload" as="image" href="/assets/gov-official-managed-layer.svg" type="image/svg+xml" fetchpriority="high">'
  );

  html=html.replace('</head>',`${laptopNavFix}</head>`);
  return html;
}

export default async function handler(req,res){
  try{
    const r=await fetch(SOURCE,{
      headers:{
        accept:'text/html,application/xhtml+xml',
        'user-agent':'PropTechUSA-Gov-Renderer/1.0'
      }
    });

    if(!r.ok) throw new Error(`GitHub source returned ${r.status}`);

    res.setHeader('Content-Type','text/html; charset=utf-8');
    res.setHeader('Cache-Control','public, s-maxage=60, stale-while-revalidate=600');
    res.status(200).send(transform(await r.text()));
  }catch(e){
    console.error('render_failed',e);
    res.setHeader('Content-Type','text/html; charset=utf-8');
    res.setHeader('Cache-Control','no-store');
    res.status(500).send('<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>PropTechUSA Gov</title><link rel="icon" href="/favicon.svg"></head><body style="font-family:system-ui;padding:40px;color:#071a33"><h1>PropTechUSA Gov</h1><p>The site source could not be loaded. Refresh in a moment.</p></body></html>');
  }
}
