const SOURCE = 'https://raw.githubusercontent.com/LHBUSA/gov/main/index.html?v=20260820-county-partnership';

const stabilityCss = `<style id="gov-mobile-stability">
html,body{width:100%;max-width:100%;overflow-x:hidden;overflow-x:clip;overscroll-behavior-x:none}
body{position:relative}
main,header,footer,section,.hero,.principles,.security-bar,.network-section,.pilot-section{width:100%;max-width:100%;overflow-x:hidden;overflow-x:clip}
.shell,.nav,.hero-inner,.section-header,.proof-shell,.model-flow,.model-callout,.economics-shell,.governance-grid,.use-grid,.pilot,.faq-wrap,.security-shell,.sandbox-header,.sandbox-shell,.roi-calculator,.briefing-booking,.footer-main,.footer-bottom{min-width:0;max-width:100%}
.hero-inner>*,.section-header>*,.proof-shell>*,.model-flow>*,.economics-shell>*,.governance-grid>*,.sandbox-shell>*,.roi-calculator>*,.briefing-booking>*,.footer-main>*,.footer-bottom>*{min-width:0}
img,picture,svg,iframe,video,canvas{max-width:100%}
picture{display:block;width:100%;min-width:0}
.visual-frame,.hero-visual,.editorial-visual,.briefing-visual,.response-card,.sandbox-console,.calendly-card,.briefing-story{width:100%;min-width:0;max-width:100%}
pre,code{max-width:100%;overflow-wrap:anywhere;word-break:break-word}
.sandbox-json{width:100%;max-width:100%;white-space:pre-wrap;overflow-x:hidden}
.calendly-frame{width:100%!important;min-width:0!important;max-width:100%!important}
.image-lightbox{width:100%;max-width:100%;overflow-x:hidden}
.lightbox-stage{max-width:100%}
.county-partner-banner{display:flex;align-items:center;gap:10px;margin:0 0 18px;padding:10px 13px;border:1px solid #b9cde3;border-radius:10px;background:#fff;color:#123f79;font-family:var(--mono);font-size:9px;font-weight:900;letter-spacing:.08em;text-transform:uppercase;box-shadow:0 10px 26px rgba(7,26,51,.05)}
.county-partner-banner i{width:8px;height:8px;flex:0 0 8px;border-radius:50%;background:#d32336;box-shadow:0 0 0 5px rgba(211,35,54,.09)}
@media(max-width:720px){
 html,body{overflow-x:hidden!important;overflow-x:clip!important;overscroll-behavior-x:none!important}
 body{touch-action:pan-y pinch-zoom}
 .shell{width:calc(100% - 28px)!important;max-width:calc(100% - 28px)!important}
 .hero-inner,.section-header,.proof-shell,.model-flow,.economics-shell,.governance-grid,.sandbox-shell,.roi-calculator,.briefing-booking,.pilot,.faq-wrap,.footer-main,.footer-bottom{width:100%!important;min-width:0!important;max-width:100%!important}
 .hero-chips{max-width:100%;gap:7px}
 .chip{max-width:100%;white-space:normal}
 .visual-frame{overflow:hidden!important;max-width:100%!important}
 .visual-frame img,.visual-frame picture,.hero-visual img,.editorial-visual img,.briefing-visual img{display:block;width:100%!important;max-width:100%!important;height:auto!important;object-fit:contain!important}
 .visual-expand{display:none!important}
 .sandbox-tabs,.sandbox-metrics,.roi-output-grid,.security-control-grid{min-width:0;max-width:100%}
 .sandbox-tab,.sandbox-route-card,.sandbox-field,.roi-output,.security-control{min-width:0;max-width:100%}
 .sandbox-console-head,.calendly-head,.calendly-head-actions{min-width:0;max-width:100%}
 .sandbox-console-head code,.sandbox-route-card code{white-space:normal;overflow-wrap:anywhere}
 .calendly-frame{display:block;border:0}
 .image-lightbox{padding-left:0!important;padding-right:0!important}
 .lightbox-stage{width:100%!important;max-width:100%!important;padding:12px!important;overflow-y:auto!important;overflow-x:hidden!important}
 .lightbox-stage img{width:100%!important;max-width:100%!important;height:auto!important}
 .lightbox-stage p{width:auto!important;max-width:100%!important;text-align:center!important}
 .county-partner-banner{font-size:8px;line-height:1.45}
}
</style>`;

function transform(html) {
  if (!html.includes('viewport-fit=cover')) {
    html = html.replace('width=device-width, initial-scale=1', 'width=device-width, initial-scale=1, viewport-fit=cover');
  }

  html = html
    .replace(/<title>[^<]*<\/title>/i, '<title>PropTechUSA Gov | County Government Data Modernization Partnerships</title>')
    .replace(/<meta name="description" content="[^"]*">/i, '<meta name="description" content="PropTechUSA Gov partners directly with county governments to modernize assessor, GIS, tax, permit, and public-record delivery through governed APIs, portals, automation, and managed data infrastructure.">')
    .replace(/<meta property="og:title" content="[^"]*">/i, '<meta property="og:title" content="PropTechUSA Gov | Technology Partnerships for County Governments">')
    .replace(/<meta property="og:description" content="[^"]*">/i, '<meta property="og:description" content="We partner directly with county governments to modernize official data delivery, reduce staff burden, and launch governed APIs and digital services.">')
    .replace(/<meta name="twitter:title" content="[^"]*">/i, '<meta name="twitter:title" content="PropTechUSA Gov | County Government Partnerships">')
    .replace(/<meta name="twitter:description" content="[^"]*">/i, '<meta name="twitter:description" content="Technology partnerships for county governments: official APIs, public data modernization, governed delivery, and managed infrastructure.">')
    .replace('"serviceType": "Local government data modernization and managed API infrastructure"', '"serviceType": "County government technology partnership for data modernization, managed APIs, public-record delivery, and digital infrastructure"')
    .replace('<strong>PropTechUSA Gov</strong>', '<strong>PropTechUSA Gov &mdash; County Government Partnerships</strong>')
    .replace('County-controlled data infrastructure', 'Technology partnerships for county governments')
    .replace('<div class="eyebrow">Local government data modernization</div>', '<div class="eyebrow">County Government Partnership Program</div><div class="county-partner-banner"><i></i>Seeking county government partners nationwide</div>')
    .replace('<h1>The official API layer for <span>county data.</span></h1>', '<h1>We partner with <span>county governments</span> to modernize public data.</h1>')
    .replace('PropTechUSA helps counties turn fragmented assessor, GIS, tax, permit, and public-record systems into governed digital services &mdash; without replacing the systems of record your teams already trust.', 'PropTechUSA works directly with county governments to design, build, and operate modern data infrastructure around the systems your teams already trust. We create official APIs, public portals, approved bulk delivery, and governed AI access while the county retains policy authority and control.')
    .replace('Request a County Briefing <span aria-hidden="true">&rarr;</span>', 'Discuss a County Partnership <span aria-hidden="true">&rarr;</span>')
    .replace('Designed for county administrators, assessors, GIS teams, CIOs, records leaders, and procurement teams.', 'This program is specifically for county governments evaluating modernization, public-data delivery, API infrastructure, cost recovery, and long-term technology partnerships.')
    .replace('The case for modernization', 'Why counties partner with PropTechUSA')
    .replace('Public data is valuable. Delivering it should not be a daily burden.', 'A technology partner for county government &mdash; not another data scraper.')
    .replace('County teams often support the same information through websites, email requests, one-off exports, vendor integrations, and legacy interfaces. PropTechUSA turns that repeated work into one governed service layer.', 'We partner with county departments to reduce repetitive fulfillment, modernize official delivery channels, and operate a governed service layer that serves residents, staff, commercial users, and approved technology partners.')
    .replace('County pilot program', 'County Government Partnership Pilot')
    .replace('One county. One department. One production service.', 'Start a county government partnership with one production service.')
    .replace('Begin with a clearly governed dataset and a defined user group. Prove the connector, response contract, refresh process, access policy, and operational value before expanding.', 'We begin with one county department, one governed dataset, and one measurable production outcome. The pilot proves the technology, operating model, procurement fit, and public-service value before expansion.')
    .replace('Request a Government Briefing <span aria-hidden="true">&rarr;</span>', 'Discuss a County Partnership <span aria-hidden="true">&rarr;</span>')
    .replace('Choose a time without leaving the page.', 'Book a county government partnership briefing without leaving the page.')
    .replace('Schedule a PropTechUSA Gov county modernization briefing', 'Schedule a PropTechUSA Gov county government partnership briefing');

  return html.replace('</head>', `${stabilityCss}</head>`);
}

export default async function handler(req, res) {
  try {
    const response = await fetch(SOURCE, {
      headers: {
        accept: 'text/html,application/xhtml+xml',
        'user-agent': 'PropTechUSA-Gov-Renderer/3.0'
      },
      cache: 'no-store'
    });
    if (!response.ok) throw new Error(`GitHub source returned ${response.status}`);
    const html = transform(await response.text());
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store, max-age=0');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.status(200).send(html);
  } catch (error) {
    console.error('render_failed', error);
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store');
    res.status(500).send('<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><title>PropTechUSA Gov</title></head><body style="font-family:system-ui;padding:32px;color:#071a33"><h1>PropTechUSA Gov</h1><p>The page could not be loaded. Refresh in a moment.</p></body></html>');
  }
}
