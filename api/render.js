const SOURCE='https://raw.githubusercontent.com/LHBUSA/gov/main/index.html?v=20260820';

const swaps={
  'gov-official-managed-layer':'gov-official-managed-layer.svg',
  'gov-county-operating-model':'gov-county-operating-model.svg',
  'gov-governance-trust-pipeline':'gov-governance-trust-pipeline.svg',
  'gov-county-network-flywheel':'gov-county-network-flywheel.svg',
  'gov-county-briefing':'gov-county-briefing.svg'
};

const desktopLayoutFix=`<style id="gov-desktop-layout-fix">
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

  .hero-inner{grid-template-columns:minmax(0,.86fr) minmax(440px,1.14fr);gap:40px;min-height:720px;padding-top:86px}
  .hero-copy{max-width:700px}
  .hero-visual{max-width:none}
  .architecture{max-width:none}

  .principles-grid{grid-template-columns:repeat(5,minmax(0,1fr))}
  .principle{border-bottom:0}
  .principle:nth-child(odd){border-left:0}
  .principle:first-child{border-left:1px solid var(--line)}
  .principle:last-child{grid-column:auto}

  .section-header{grid-template-columns:minmax(0,.9fr) minmax(330px,.7fr)}
  .proof-shell{grid-template-columns:minmax(300px,.78fr) minmax(0,1.22fr)}
  .economics-shell{grid-template-columns:minmax(0,.82fr) minmax(460px,1.18fr)}
  .governance-grid{grid-template-columns:minmax(0,.82fr) minmax(440px,1.18fr)}
  .pilot{grid-template-columns:minmax(0,.9fr) minmax(420px,1.1fr)}
  .faq-wrap{grid-template-columns:minmax(0,.72fr) minmax(500px,1.28fr)}
  .economics-copy,.faq-intro{position:sticky;top:120px}

  .model-flow{grid-template-columns:repeat(4,minmax(0,1fr))}
  .model-step:nth-child(2){border-right:1px solid rgba(255,255,255,.1)}
  .model-step:nth-child(-n+2){border-bottom:0}
  .model-step:nth-child(2)::after{display:block}

  .case-grid,.partner-grid{grid-template-columns:repeat(3,minmax(0,1fr))}
  .case-card{min-height:310px}
  .use-grid{grid-template-columns:repeat(3,minmax(0,1fr))}
  .footer-main{grid-template-columns:1.2fr repeat(3,minmax(0,.55fr))}

  .security-shell{grid-template-columns:260px minmax(0,1fr)}
  .security-control-grid{grid-template-columns:repeat(6,minmax(0,1fr))}
  .sandbox-header{grid-template-columns:minmax(0,.9fr) minmax(340px,.7fr)}
  .sandbox-shell{grid-template-columns:minmax(300px,.7fr) minmax(0,1.3fr)}
  .roi-calculator{grid-template-columns:minmax(300px,.76fr) minmax(0,1.24fr)}
  .briefing-booking{grid-template-columns:minmax(0,.86fr) minmax(440px,1.14fr)}
  .sandbox-controls{border-right:1px solid rgba(255,255,255,.09);border-bottom:0}
  .roi-controls{border-right:1px solid var(--line);border-bottom:0}
  .briefing-story{max-width:none}
}
</style>`;

function transform(html){
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

  html=html.replace('</head>',`${desktopLayoutFix}</head>`);
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
    res.setHeader('Cache-Control','no-store, max-age=0');
    res.status(200).send(transform(await r.text()));
  }catch(e){
    console.error('render_failed',e);
    res.setHeader('Content-Type','text/html; charset=utf-8');
    res.setHeader('Cache-Control','no-store');
    res.status(500).send('<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>PropTechUSA Gov</title><link rel="icon" href="/favicon.svg"></head><body style="font-family:system-ui;padding:40px;color:#071a33"><h1>PropTechUSA Gov</h1><p>The site source could not be loaded. Refresh in a moment.</p></body></html>');
  }
}
