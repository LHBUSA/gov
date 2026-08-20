const SOURCE = 'https://raw.githubusercontent.com/LHBUSA/gov/main/index.html?v=20260820-mobile-hero-v6';

const stabilityCss = `<style id="gov-mobile-stability">
html,body{width:100%;max-width:100%;overflow-x:hidden;overflow-x:clip;overscroll-behavior-x:none}body{position:relative}main,header,footer,section,.hero,.principles,.security-bar,.network-section,.pilot-section{width:100%;max-width:100%;overflow-x:hidden;overflow-x:clip}.shell,.nav,.hero-inner,.section-header,.proof-shell,.model-flow,.model-callout,.economics-shell,.governance-grid,.use-grid,.pilot,.faq-wrap,.security-shell,.sandbox-header,.sandbox-shell,.roi-calculator,.briefing-booking,.footer-main,.footer-bottom{min-width:0;max-width:100%}.hero-inner>*,.section-header>*,.proof-shell>*,.model-flow>*,.economics-shell>*,.governance-grid>*,.sandbox-shell>*,.roi-calculator>*,.briefing-booking>*,.footer-main>*,.footer-bottom>*{min-width:0}img,picture,svg,iframe,video,canvas{max-width:100%}picture{display:block;width:100%;min-width:0}.visual-frame,.hero-visual,.editorial-visual,.briefing-visual,.response-card,.sandbox-console,.calendly-card,.briefing-story{width:100%;min-width:0;max-width:100%}pre,code{max-width:100%;overflow-wrap:anywhere;word-break:break-word}.sandbox-json{width:100%;max-width:100%;white-space:pre-wrap;overflow-x:hidden}.calendly-frame{width:100%!important;min-width:0!important;max-width:100%!important}.image-lightbox{width:100%;max-width:100%;overflow-x:hidden}.lightbox-stage{max-width:100%}.county-partner-banner{display:flex;align-items:center;gap:10px;margin:0 0 18px;padding:10px 13px;border:1px solid #b9cde3;border-radius:10px;background:#fff;color:#123f79;font-family:var(--mono);font-size:9px;font-weight:900;letter-spacing:.08em;text-transform:uppercase;box-shadow:0 10px 26px rgba(7,26,51,.05)}.county-partner-banner i{width:8px;height:8px;flex:0 0 8px;border-radius:50%;background:#d32336;box-shadow:0 0 0 5px rgba(211,35,54,.09)}
@media(max-width:720px){
 html,body{overflow-x:hidden!important;overflow-x:clip!important;overscroll-behavior-x:none!important}body{touch-action:pan-y pinch-zoom}
 .topline{display:none!important}
 header{position:sticky!important;top:0!important}
 .shell{width:calc(100% - 24px)!important;max-width:calc(100% - 24px)!important}
 .nav{min-height:54px!important;height:54px!important;gap:8px!important}
 .brand{gap:7px!important;min-width:0!important}
 .brand-mark{width:30px!important;flex:0 0 30px!important}
 .brand-copy strong{font-size:15px!important;white-space:nowrap!important}
 .brand-copy small{display:none!important}
 .brand-gov{font-size:6px!important;padding:2px 5px!important}
 .menu-button{width:38px!important;height:38px!important;flex:0 0 38px!important;border-radius:8px!important}
 .mobile-menu{inset:54px 0 0!important}
 .hero{min-height:0!important}
 .hero-inner{display:block!important;min-height:0!important;width:100%!important;max-width:100%!important;padding:12px 0 26px!important;gap:0!important;align-items:start!important}
 .hero-copy{max-width:100%!important;padding:0!important;margin:0!important}
 .hero-copy .eyebrow{display:flex!important;margin:0 0 8px!important;font-size:8px!important;line-height:1.25!important;letter-spacing:.085em!important}
 .hero-copy .eyebrow::before{width:6px!important;height:6px!important;box-shadow:0 0 0 3px rgba(200,30,43,.1)!important}
 .county-partner-banner{margin:0 0 12px!important;padding:7px 9px!important;gap:7px!important;font-size:7px!important;line-height:1.25!important;letter-spacing:.055em!important;border-radius:8px!important;box-shadow:none!important}
 .county-partner-banner i{width:6px!important;height:6px!important;flex:0 0 6px!important;box-shadow:0 0 0 3px rgba(211,35,54,.08)!important}
 .hero-copy h1,.hero h1{margin:0 0 12px!important;font-size:clamp(37px,10.2vw,46px)!important;line-height:.96!important;letter-spacing:-.042em!important;max-width:100%!important}
 .hero-lead,.hero-copy>p{margin:0 0 15px!important;max-width:100%!important;font-size:15px!important;line-height:1.48!important}
 .hero-actions{display:grid!important;gap:7px!important;margin:0!important}
 .hero-actions .btn{width:100%!important;min-height:42px!important;padding:9px 12px!important;font-size:8px!important}
 .hero-note{display:none!important}
 .hero-chips{margin-top:13px!important;max-width:100%!important;gap:5px!important}
 .chip{padding:5px 7px!important;font-size:7px!important;line-height:1.2!important;white-space:normal!important}
 .hero-visual{margin-top:16px!important}
 .visual-frame{overflow:hidden!important;max-width:100%!important}
 .visual-frame img,.visual-frame picture,.hero-visual img,.editorial-visual img,.briefing-visual img{display:block;width:100%!important;max-width:100%!important;height:auto!important;object-fit:contain!important}.visual-expand{display:none!important}
 .section-header,.proof-shell,.model-flow,.economics-shell,.governance-grid,.sandbox-shell,.roi-calculator,.briefing-booking,.pilot,.faq-wrap,.footer-main,.footer-bottom{width:100%!important;min-width:0!important;max-width:100%!important}
 .sandbox-tabs,.sandbox-metrics,.roi-output-grid,.security-control-grid{min-width:0;max-width:100%}.sandbox-tab,.sandbox-route-card,.sandbox-field,.roi-output,.security-control{min-width:0;max-width:100%}.sandbox-console-head,.calendly-head,.calendly-head-actions{min-width:0;max-width:100%}.sandbox-console-head code,.sandbox-route-card code{white-space:normal;overflow-wrap:anywhere}.calendly-frame{display:block;border:0}.image-lightbox{padding-left:0!important;padding-right:0!important}.lightbox-stage{width:100%!important;max-width:100%!important;padding:12px!important;overflow-y:auto!important;overflow-x:hidden!important}.lightbox-stage img{width:100%!important;max-width:100%!important;height:auto!important}.lightbox-stage p{width:auto!important;max-width:100%!important;text-align:center!important}
}
</style>`;

function swap(html, from, to) { return html.includes(from) ? html.replace(from, to) : html; }

function transform(html) {
  if (!html.includes('viewport-fit=cover')) html = html.replace('width=device-width, initial-scale=1', 'width=device-width, initial-scale=1, viewport-fit=cover');

  html = html
    .replace(/<title>[^<]*<\/title>/i, '<title>PropTechUSA Gov | County Government Technology Partnerships</title>')
    .replace(/<meta name="description" content="[^"]*">/i, '<meta name="description" content="PropTechUSA Gov partners directly with county governments to design, build, and operate modern public-data infrastructure, official APIs, portals, automation, bulk delivery, and governed AI access.">')
    .replace(/<meta property="og:title" content="[^"]*">/i, '<meta property="og:title" content="PropTechUSA Gov | Technology Partnerships for County Governments">')
    .replace(/<meta property="og:description" content="[^"]*">/i, '<meta property="og:description" content="We work directly with county governments to modernize public data delivery, reduce staff burden, and launch reliable digital services around existing county systems.">')
    .replace(/<meta name="twitter:title" content="[^"]*">/i, '<meta name="twitter:title" content="PropTechUSA Gov | County Government Partnerships">')
    .replace(/<meta name="twitter:description" content="[^"]*">/i, '<meta name="twitter:description" content="County technology partnerships for APIs, portals, automation, public-record delivery, and managed data infrastructure.">');

  const swaps = [
    ['<strong>PropTechUSA Gov</strong>','<strong>PropTechUSA Gov &mdash; County Government Partnerships</strong>'],
    ['County-controlled data infrastructure','Technology partnerships for county governments'],
    ['<div class="eyebrow">Local government data modernization</div>','<div class="eyebrow">County Government Partnership Program</div><div class="county-partner-banner"><i></i>Seeking county government partners nationwide</div>'],
    ['<h1>The official API layer for <span>county data.</span></h1>','<h1>We help <span>county governments</span> modernize how public data is delivered.</h1>'],
    ['PropTechUSA helps counties turn fragmented assessor, GIS, tax, permit, and public-record systems into governed digital services &mdash; without replacing the systems of record your teams already trust.','PropTechUSA works directly with county governments to design, build, and operate modern digital services around the systems your teams already trust. We can deliver official APIs, public portals, developer access, approved bulk exports, workflow automation, and governed AI access while the county retains policy authority and control.'],
    ['Request a County Briefing <span aria-hidden="true">&rarr;</span>','Discuss a County Partnership <span aria-hidden="true">&rarr;</span>'],
    ['Designed for county administrators, assessors, GIS teams, CIOs, records leaders, and procurement teams.','Built specifically for county administrators, assessors, GIS teams, CIOs, records leaders, finance teams, and procurement officials evaluating a modernization partner.'],
    ['The case for modernization','Why counties work with PropTechUSA'],
    ['Public data is valuable. Delivering it should not be a daily burden.','Modernize public service without replacing the county systems that already work.'],
    ['County teams often support the same information through websites, email requests, one-off exports, vendor integrations, and legacy interfaces. PropTechUSA turns that repeated work into one governed service layer.','We take on the engineering and operating work between legacy county systems and the people, businesses, applications, and internal teams that need reliable access. The goal is less manual fulfillment, better service delivery, and infrastructure the county can actually operate with confidence.'],
    ['01 / REDUCE STAFF LOAD','01 / REDUCE MANUAL WORK'],
    ['Replace repetitive fulfillment with documented self-service.','Turn repetitive requests into reliable self-service.'],
    ['02 / IMPROVE FIDELITY','02 / IMPROVE PUBLIC SERVICE'],
    ['Make the official source easier to use than a scraped copy.','Give residents and professional users a better official channel.'],
    ['03 / CREATE LEVERAGE','03 / CREATE REUSABLE INFRASTRUCTURE'],
    ['Build once, support many public and commercial workflows.','Build once, support many departments and use cases.'],
    ['Built on the PropData foundation','Why PropTechUSA can execute'],
    ['Built on working property-data infrastructure.','We already operate the infrastructure required to do this at production scale.'],
    ['Interactive response contract','What we can deliver'],
    ['See the official service layer behave like a real API.','A county can launch a modern developer and data-access experience without building it internally.'],
    ['The operating model','How the partnership works'],
    ['Modernization and managed delivery as a service.','We do the implementation and operating work with the county, not around it.'],
    ['Define the service','Define the county outcome'],
    ['Connect official sources','Integrate existing county systems'],
    ['Launch the delivery layer','Launch the county service'],
    ['Operate and improve','Operate it with the county'],
    ['The moat is operational, not artificial.','The value is operational: the county gets a partner that keeps the service working.'],
    ['The partnership structure','What each side is responsible for'],
    ['Clear roles. Explicit rights. One accountable delivery layer.','The county keeps authority. PropTechUSA takes responsibility for implementation and operations.'],
    ['THE COUNTY PROVIDES','THE COUNTY CONTROLS'],
    ['Authority and governance','Policy, authority, and priorities'],
    ['PROPTECHUSA PROVIDES','PROPTECHUSA BUILDS + OPERATES'],
    ['Infrastructure and operations','The technology and service layer'],
    ['USERS RECEIVE','THE COUNTY RECEIVES'],
    ['Reliable official access','A modern service the county can stand behind'],
    ['Flexible contract paths','Flexible ways to structure the engagement'],
    ['One operating model. Multiple ways to fund it.','County-funded, usage-supported, shared-revenue, or hybrid structures.'],
    ['County-funded service','County-funded modernization'],
    ['Subscriber-funded access','Usage-supported service'],
    ['Shared-revenue model','Shared-revenue partnership'],
    ['Hybrid or reciprocal model','Hybrid partnership'],
    ['Board-ready economics','Build the business case'],
    ['Model the operational value before the first meeting.','Show leadership what modernization could save, improve, and support.'],
    ['Governance by design','What the county keeps control of'],
    ['Every response should explain what it is, where it came from, and how it may be used.','Modernization should increase county control, not reduce it.'],
    ['Rights-aware delivery','Policy-aware delivery'],
    ['Truthful nulls and coverage states','Transparent service behavior'],
    ['Procurement-aware agreements','Procurement-aware engagement'],
    ['What one county layer can power','What we can build for a county'],
    ['Start with one service. Build reusable public infrastructure.','Start with the highest-value service, then expand from there.'],
    ['Assessor and property records','Modern assessor and property services'],
    ['Parcel and geospatial services','GIS and parcel delivery'],
    ['Tax and finance access','Tax and finance services'],
    ['Permits and code records','Permits, inspections, and code'],
    ['Public data portals','County-branded public portals'],
    ['Approved AI and agent access','Approved automation and AI'],
    ['Pilot-to-network flywheel','Why PropTechUSA'],
    ['One successful county becomes the playbook for the next.','A production technology company built to operate, not just consult.'],
    ['County pilot program','County Government Partnership Pilot'],
    ['One county. One department. One production service.','Start with one county problem and put a real service into production.'],
    ['Request a Government Briefing <span aria-hidden="true">&rarr;</span>','Discuss a County Partnership <span aria-hidden="true">&rarr;</span>'],
    ['Discovery and governance brief','County discovery + service brief'],
    ['Source connector and response contract','Implementation + integration'],
    ['County-branded launch and measurement','Launch + operate'],
    ['Choose a time without leaving the page.','Book a county government partnership briefing without leaving the page.'],
    ['Schedule a PropTechUSA Gov county modernization briefing','Schedule a PropTechUSA Gov county government partnership briefing'],
    ['Built to fit the county, not force a template.','Questions county leaders usually ask before starting.'],
    ["Does this replace the county's existing CAMA, GIS, tax, or records system?",'Do we have to replace our existing county systems?'],
    ["Does PropTechUSA own the county's source data?",'Who controls county data and policy?'],
    ['Can the county charge for API or bulk access?','Can the project include cost recovery or paid commercial access?'],
    ['Does the agreement need to be exclusive?','Does this require an exclusive contract?'],
    ['What does PropTechUSA receive in return?','What does PropTechUSA provide and how are we paid?']
  ];
  for (const [from,to] of swaps) html = swap(html,from,to);
  return html.replace('</head>', `${stabilityCss}</head>`);
}

export default async function handler(req,res){
  try{
    const response=await fetch(SOURCE,{headers:{accept:'text/html,application/xhtml+xml','user-agent':'PropTechUSA-Gov-Renderer/6.0'},cache:'no-store'});
    if(!response.ok) throw new Error(`GitHub source returned ${response.status}`);
    const html=transform(await response.text());
    res.setHeader('Content-Type','text/html; charset=utf-8');
    res.setHeader('Cache-Control','no-store, max-age=0, must-revalidate');
    res.setHeader('CDN-Cache-Control','no-store');
    res.setHeader('Vercel-CDN-Cache-Control','no-store');
    res.setHeader('X-Content-Type-Options','nosniff');
    res.setHeader('Referrer-Policy','strict-origin-when-cross-origin');
    res.status(200).send(html);
  }catch(error){
    console.error('render_failed',error);
    res.setHeader('Content-Type','text/html; charset=utf-8');
    res.setHeader('Cache-Control','no-store');
    res.status(500).send('<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><title>PropTechUSA Gov</title></head><body style="font-family:system-ui;padding:32px;color:#071a33"><h1>PropTechUSA Gov</h1><p>The page could not be loaded. Refresh in a moment.</p></body></html>');
  }
}
