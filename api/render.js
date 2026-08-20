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

const proofSandbox=`
<style>
#gov-proof-sandbox{--g:#0b1f35;--m:#526579;--l:#e7edf3;--a:#0d7c66;background:#f7f9fb;color:var(--g);padding:88px 20px;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
#gov-proof-sandbox *{box-sizing:border-box}.gps-wrap{max-width:1180px;margin:0 auto}.gps-kicker{font-size:12px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--a);margin-bottom:12px}.gps-title{font-size:clamp(32px,5vw,58px);line-height:1.02;letter-spacing:-.04em;margin:0 0 18px}.gps-lede{font-size:18px;line-height:1.65;color:var(--m);max-width:820px;margin:0}.gps-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:38px}.gps-card{background:#fff;border:1px solid var(--l);border-radius:20px;padding:28px;box-shadow:0 12px 36px rgba(15,32,49,.06)}.gps-card h3{font-size:22px;margin:0 0 10px;letter-spacing:-.02em}.gps-card p{color:var(--m);line-height:1.6;margin:0}.gps-pills{display:flex;gap:8px;flex-wrap:wrap;margin:18px 0 0}.gps-pill{font-size:12px;font-weight:700;border:1px solid #d8e3ea;border-radius:999px;padding:7px 10px;background:#fbfdfe;color:#23425d}.gps-proofrow{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:20px}.gps-stat{border-top:1px solid var(--l);padding-top:14px}.gps-stat b{display:block;font-size:14px;margin-bottom:5px}.gps-stat span{font-size:12px;color:var(--m);line-height:1.45;display:block}.gps-note{font-size:12px;color:#66788a;margin-top:16px;line-height:1.55}.gps-sandbox{margin-top:26px;background:#071522;color:#e9f1f7;border-radius:22px;overflow:hidden;box-shadow:0 18px 50px rgba(6,21,34,.16)}.gps-sb-head{padding:22px 24px;border-bottom:1px solid rgba(255,255,255,.09);display:flex;justify-content:space-between;gap:18px;align-items:center;flex-wrap:wrap}.gps-sb-head strong{font-size:18px}.gps-sb-head span{font-size:12px;color:#9fb0c0}.gps-tabs{display:flex;gap:8px;flex-wrap:wrap;padding:16px 20px;border-bottom:1px solid rgba(255,255,255,.08)}.gps-tab{appearance:none;border:1px solid rgba(255,255,255,.14);background:transparent;color:#bed0df;padding:9px 12px;border-radius:10px;font:700 12px inherit;cursor:pointer}.gps-tab[aria-selected="true"]{background:#fff;color:#0a1b2b;border-color:#fff}.gps-console{display:grid;grid-template-columns:220px 1fr}.gps-meta{padding:20px;border-right:1px solid rgba(255,255,255,.08)}.gps-meta div{margin-bottom:18px}.gps-meta b{display:block;text-transform:uppercase;letter-spacing:.09em;font-size:10px;color:#7890a5;margin-bottom:5px}.gps-meta span{font-size:12px;color:#dce8f1;line-height:1.4}.gps-code-wrap{display:flex;flex-direction:column;min-width:0}.gps-code{margin:0;padding:22px 24px;overflow:auto;min-height:330px;font:12.5px/1.65 ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono",monospace;color:#d5e7f3;white-space:pre}.gps-pilot-cta{display:flex;justify-content:flex-end;padding:0 24px 22px}.gps-pilot-cta a{display:inline-flex;align-items:center;gap:7px;padding:10px 14px;border-radius:10px;background:#fff;color:#0a1b2b;text-decoration:none;font-size:12px;font-weight:800;transition:transform .15s ease,box-shadow .15s ease}.gps-pilot-cta a:hover{transform:translateY(-1px);box-shadow:0 8px 22px rgba(0,0,0,.18)}.gps-flow{margin-top:22px;padding:18px 20px;border:1px solid var(--l);background:#fff;border-radius:16px;font-size:13px;color:#42596d}.gps-flow b{color:#10273b}.gps-arrow{color:#91a0ad;padding:0 7px}.gps-cases{margin-top:26px;display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.gps-case{border:1px solid var(--l);border-radius:16px;padding:18px;background:#fff}.gps-case b{display:block;font-size:14px;margin-bottom:7px}.gps-case span{font-size:12px;line-height:1.5;color:var(--m)}.gps-benchmark-note{font-size:12px!important;line-height:1.5!important;color:#68798a!important;margin-top:10px!important;max-width:760px}.gps-benchmark-note em{font-style:normal;font-weight:700;color:#455b6d}
@media(max-width:860px){.gps-grid,.gps-cases{grid-template-columns:1fr}.gps-proofrow{grid-template-columns:1fr 1fr}.gps-console{grid-template-columns:1fr}.gps-meta{border-right:0;border-bottom:1px solid rgba(255,255,255,.08);display:grid;grid-template-columns:1fr 1fr;gap:8px}.gps-code{min-height:280px}}@media(max-width:520px){#gov-proof-sandbox{padding:64px 14px}.gps-card{padding:21px}.gps-proofrow{grid-template-columns:1fr}.gps-sb-head{padding:18px}.gps-tabs{padding:14px}.gps-code{padding:18px;font-size:11.5px}.gps-pilot-cta{padding:0 18px 18px;justify-content:flex-start}}
</style>
<section id="gov-proof-sandbox" aria-labelledby="gps-title">
  <div class="gps-wrap">
    <div class="gps-kicker">Operational proof, not brochureware</div>
    <h2 class="gps-title" id="gps-title">A county pilot should prove the operating model.</h2>
    <p class="gps-lede">Start with one authoritative source, one governed delivery path, and measurable operating controls. Public jurisdiction names, testimonials, and outcome metrics are published only when the county approves them for release.</p>
    <div class="gps-grid">
      <article class="gps-card">
        <h3>County Pilot Program</h3>
        <p>A pilot is structured around a real departmental workflow: connect an authoritative source, normalize the records, document provenance, apply access policy, publish a controlled endpoint, and monitor it in production.</p>
        <div class="gps-pills"><span class="gps-pill">Assessor / CAMA</span><span class="gps-pill">GIS</span><span class="gps-pill">Tax</span><span class="gps-pill">Permits</span><span class="gps-pill">Public records</span></div>
        <div class="gps-proofrow">
          <div class="gps-stat"><b>Pilot scope</b><span>One department, one governed service, expandable after acceptance.</span></div>
          <div class="gps-stat"><b>Acceptance evidence</b><span>Field mapping, provenance, refresh behavior, policy controls, and endpoint tests.</span></div>
          <div class="gps-stat"><b>Operating measures</b><span>Freshness, availability, error rate, request volume, and source lineage.</span></div>
          <div class="gps-stat"><b>Public case study</b><span>Jurisdiction name, systems, outcomes, and quote only with written approval.</span></div>
        </div>
        <div class="gps-note">No fabricated county logos, testimonials, or performance claims. The case-study layer is designed to become named proof as soon as a participating jurisdiction authorizes publication.</div>
      </article>
      <article class="gps-card">
        <h3>What buyers can validate</h3>
        <p>County teams do not have to evaluate a vague transformation promise. The pilot produces artifacts procurement, IT, GIS, legal, and records staff can inspect directly.</p>
        <div class="gps-cases">
          <div class="gps-case"><b>Source-to-field map</b><span>Each published field traces back to the authoritative source and transformation rule.</span></div>
          <div class="gps-case"><b>Governance matrix</b><span>Who owns the source, who may access it, what may be published, and how changes are approved.</span></div>
          <div class="gps-case"><b>Runbook + monitoring</b><span>Refresh cadence, failure handling, observability, change control, and support responsibilities.</span></div>
        </div>
      </article>
    </div>

    <div class="gps-flow"><b>Live county deployment:</b><span class="gps-arrow">→</span>Source-system mapping<span class="gps-arrow">→</span>Field normalization<span class="gps-arrow">→</span>Provenance<span class="gps-arrow">→</span>Access policy<span class="gps-arrow">→</span>API contract<span class="gps-arrow">→</span>Monitoring</div>

    <div class="gps-sandbox" aria-label="Representative county schema explorer">
      <div class="gps-sb-head"><strong>Representative County Schema Explorer</strong><span>Sample records · not production county data</span></div>
      <div class="gps-tabs" role="tablist" aria-label="Sample county datasets">
        <button class="gps-tab" type="button" data-schema="cama" aria-selected="true">Assessor / CAMA</button>
        <button class="gps-tab" type="button" data-schema="gis" aria-selected="false">GIS / Parcel</button>
        <button class="gps-tab" type="button" data-schema="tax" aria-selected="false">Tax / Finance</button>
        <button class="gps-tab" type="button" data-schema="permit" aria-selected="false">Permits</button>
      </div>
      <div class="gps-console">
        <aside class="gps-meta">
          <div><b>Endpoint</b><span id="gps-endpoint">GET /v1/parcels/{parcel_id}</span></div>
          <div><b>Source system</b><span id="gps-source">County CAMA</span></div>
          <div><b>Refresh</b><span id="gps-refresh">Nightly + change capture</span></div>
          <div><b>Provenance</b><span id="gps-prov">Authoritative assessor record</span></div>
        </aside>
        <div class="gps-code-wrap">
          <pre class="gps-code" id="gps-code" tabindex="0"></pre>
          <div class="gps-pilot-cta"><a href="mailto:sales@proptechusa.ai?subject=County%20Pilot%20Sandbox%20Endpoint">Deploy Sandbox Endpoint to Pilot →</a></div>
        </div>
      </div>
    </div>
  </div>
</section>
<script>
(()=>{const data={
  cama:{endpoint:'GET /v1/parcels/{parcel_id}',source:'County CAMA',refresh:'Nightly + change capture',prov:'Authoritative assessor record',payload:{parcel_id:'EX-042-0007',situs_address:'125 Civic Center Dr',owner_display:'Example Holdings LLC',tax_year:2026,property_class:'Commercial',assessed_value:842500,land_value:210000,improvement_value:632500,source:{system:'CAMA',jurisdiction:'Example County',as_of:'2026-08-19'}}},
  gis:{endpoint:'GET /v1/parcels/{parcel_id}/geometry',source:'County GIS',refresh:'Published layer sync',prov:'County parcel fabric',payload:{parcel_id:'EX-042-0007',centroid:{lat:33.7490,lon:-84.3880},acreage:1.84,geometry_type:'Polygon',spatial_reference:'EPSG:4326',boundary_status:'authoritative',source:{system:'Enterprise GIS',layer:'Parcels',jurisdiction:'Example County'}}},
  tax:{endpoint:'GET /v1/tax/accounts/{account_id}',source:'Tax / Finance',refresh:'Daily ledger sync',prov:'County tax ledger',payload:{account_id:'TX-2026-004271',parcel_id:'EX-042-0007',levy_year:2026,amount_due:12846.17,delinquent:false,payment_status:'current',last_payment_date:'2026-07-31',source:{system:'Tax Billing',jurisdiction:'Example County',as_of:'2026-08-19'}}},
  permit:{endpoint:'GET /v1/parcels/{parcel_id}/permits',source:'Permitting system',refresh:'Near-daily sync',prov:'Official permit record',payload:{parcel_id:'EX-042-0007',permits:[{permit_number:'BLD-26-01842',type:'Commercial renovation',status:'Issued',issued_date:'2026-06-14',declared_value:175000,inspection_status:'In progress'}],source:{system:'Permitting',jurisdiction:'Example County'}}}
};
const code=document.getElementById('gps-code'),endpoint=document.getElementById('gps-endpoint'),source=document.getElementById('gps-source'),refresh=document.getElementById('gps-refresh'),prov=document.getElementById('gps-prov');
function show(k){const d=data[k];endpoint.textContent=d.endpoint;source.textContent=d.source;refresh.textContent=d.refresh;prov.textContent=d.prov;code.textContent=JSON.stringify(d.payload,null,2);document.querySelectorAll('.gps-tab').forEach(b=>b.setAttribute('aria-selected',String(b.dataset.schema===k)));}
document.querySelectorAll('.gps-tab').forEach(b=>b.addEventListener('click',()=>show(b.dataset.schema)));show('cama');
const candidates=[...document.querySelectorAll('body *')].filter(el=>el.children.length===0&&/31\s*(?:minutes?|min\.?)/i.test(el.textContent||''));
const target=candidates.sort((a,b)=>(a.textContent||'').length-(b.textContent||'').length)[0];
if(target&&!document.querySelector('.gps-benchmark-note')){const note=document.createElement('p');note.className='gps-benchmark-note';note.innerHTML='<em>31-minute baseline:</em> illustrative planning assumption for staff-intensive public-records handling, including intake, source lookup, review, approval/redaction where required, response, and logging. Actual county handling time varies by request complexity, systems, staffing, and policy.';const host=target.closest('div')||target.parentElement;host.appendChild(note);}
})();
</script>`;

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
  html=html.replace('</head>',`${inject}</head>`);
  if(!html.includes('id="gov-proof-sandbox"')) html=html.replace('</body>',`${proofSandbox}</body>`);
  return html;
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
