const SOURCE='https://raw.githubusercontent.com/LHBUSA/gov/main/index.html?v=20260820';
const swaps={
  'gov-official-managed-layer':'gov-official-managed-layer.svg',
  'gov-county-operating-model':'gov-county-operating-model.svg',
  'gov-governance-trust-pipeline':'gov-governance-trust-pipeline.svg',
  'gov-county-network-flywheel':'gov-county-network-flywheel.svg',
  'gov-county-briefing':'gov-county-briefing.svg'
};
const org={'@type':'Organization','@id':'https://www.proptechusa.ai/#organization',name:'PropTechUSA.ai',alternateName:'PropTechUSA Gov',url:'https://www.proptechusa.ai/',logo:{'@type':'ImageObject',url:'https://gov.proptechusa.ai/favicon.svg'},email:'sales@proptechusa.ai',telephone:'+1-888-784-3881',areaServed:'US'};
const faq=[
  ["Does this replace the county's existing CAMA, GIS, tax, or records system?",'No. It is a managed delivery and interoperability layer around systems the county already treats as authoritative.'],
  ["Does PropTechUSA own the county's source data?",'The county retains ownership and policy authority. Platform access and permitted uses are defined explicitly in the agreement.'],
  ['Can the county charge for API or bulk access?','That depends on law, public-record policy, procurement, and county approval. The platform supports free, paid, and hybrid access models.'],
  ['Does the agreement need to be exclusive?','No. A non-exclusive official service can become the preferred channel by being reliable, documented, supported, and governed.'],
  ['What does PropTechUSA receive in return?','The contract can define implementation fees, operating fees, revenue share, approved platform access, or a hybrid structure.']
].map(([name,text])=>({'@type':'Question',name,acceptedAnswer:{'@type':'Answer',text}}));
const schema={'@context':'https://schema.org','@graph':[
  org,
  {'@type':'WebSite','@id':'https://gov.proptechusa.ai/#website',url:'https://gov.proptechusa.ai/',name:'PropTechUSA Gov',description:'County-controlled data modernization and official API infrastructure.',publisher:{'@id':org['@id']},inLanguage:'en-US'},
  {'@type':'ImageObject','@id':'https://gov.proptechusa.ai/#primaryimage',url:'https://gov.proptechusa.ai/gov-social-card.png',contentUrl:'https://gov.proptechusa.ai/gov-social-card.png',caption:'PropTechUSA Gov county data modernization and official API infrastructure'},
  {'@type':'WebPage','@id':'https://gov.proptechusa.ai/#webpage',url:'https://gov.proptechusa.ai/',name:'PropTechUSA Gov | County Data Modernization and Official API Infrastructure',isPartOf:{'@id':'https://gov.proptechusa.ai/#website'},about:{'@id':'https://gov.proptechusa.ai/#service'},primaryImageOfPage:{'@id':'https://gov.proptechusa.ai/#primaryimage'},description:'PropTechUSA helps counties turn fragmented assessor, GIS, tax, permit, and public-record systems into governed digital services and official APIs.',inLanguage:'en-US'},
  {'@type':'Service','@id':'https://gov.proptechusa.ai/#service',name:'PropTechUSA Gov County Data Infrastructure',serviceType:'Local government data modernization and managed API infrastructure',provider:{'@id':org['@id']},areaServed:{'@type':'Country',name:'United States'},audience:{'@type':'Audience',audienceType:'County administrators, assessors, GIS teams, CIOs, public-records teams, and procurement leaders'},url:'https://gov.proptechusa.ai/'},
  {'@type':'FAQPage','@id':'https://gov.proptechusa.ai/#faq',mainEntity:faq}
]};
const inject=`
<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">
<meta name="googlebot" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">
<meta name="author" content="PropTechUSA.ai"><meta name="application-name" content="PropTechUSA Gov">
<meta name="apple-mobile-web-app-title" content="PropTechUSA Gov"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="mobile-web-app-capable" content="yes">
<link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="shortcut icon" href="/favicon.svg"><link rel="apple-touch-icon" href="/favicon.svg"><link rel="manifest" href="/manifest.webmanifest">
<meta property="og:locale" content="en_US"><meta property="og:image:secure_url" content="https://gov.proptechusa.ai/gov-social-card.png"><meta property="og:image:type" content="image/png">
<meta name="twitter:image:alt" content="PropTechUSA Gov — county-controlled data modernization and official API infrastructure">
<script type="application/ld+json">${JSON.stringify(schema).replace(/</g,'\\u003c')}</script>`;
function transform(html){
  html=html.replace(/<source\b[^>]*gov-[^>]*\.webp[^>]*>/gi,'');
  for(const [base,file] of Object.entries(swaps)) html=html.replace(new RegExp(`assets/${base}(?:-960)?\\.webp`,'g'),`/assets/${file}`);
  html=html.replace(/<link\s+rel="preload"\s+as="image"\s+href="[^"]*gov-official-managed-layer[^"]*"[^>]*>/i,'<link rel="preload" as="image" href="/assets/gov-official-managed-layer.svg" type="image/svg+xml" fetchpriority="high">');
  const remove=[
    /<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/i,
    /<meta\s+property="og:image:(?:type|secure_url|width|height)"[^>]*>\s*/gi,
    /<meta\s+name="twitter:image:alt"[^>]*>\s*/gi,
    /<link\s+rel="(?:shortcut )?icon"[^>]*>\s*/gi,
    /<link\s+rel="apple-touch-icon"[^>]*>\s*/gi,
    /<link\s+rel="manifest"[^>]*>\s*/gi,
    /<meta\s+name="(?:robots|googlebot)"[^>]*>\s*/gi
  ];
  for(const re of remove) html=html.replace(re,'');
  return html.replace('</head>',`${inject}</head>`);
}
export default async function handler(req,res){
  try{
    const r=await fetch(SOURCE,{headers:{accept:'text/html,application/xhtml+xml','user-agent':'PropTechUSA-Gov-Renderer/1.0'}});
    if(!r.ok) throw new Error(`GitHub source returned ${r.status}`);
    res.setHeader('Content-Type','text/html; charset=utf-8');
    res.setHeader('Cache-Control','public, s-maxage=60, stale-while-revalidate=600');
    res.status(200).send(transform(await r.text()));
  }catch(e){
    console.error('render_failed',e);
    res.setHeader('Content-Type','text/html; charset=utf-8');res.setHeader('Cache-Control','no-store');
    res.status(500).send('<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>PropTechUSA Gov</title><link rel="icon" href="/favicon.svg"></head><body style="font-family:system-ui;padding:40px;color:#071a33"><h1>PropTechUSA Gov</h1><p>The site source could not be loaded. Refresh in a moment.</p></body></html>');
  }
}
