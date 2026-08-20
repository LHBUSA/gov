const SOURCE = 'https://raw.githubusercontent.com/LHBUSA/gov/main/index.html?v=20260820-mobile-lock';

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
}
</style>`;

function transform(html) {
  if (!html.includes('viewport-fit=cover')) {
    html = html.replace('width=device-width, initial-scale=1', 'width=device-width, initial-scale=1, viewport-fit=cover');
  }
  return html.replace('</head>', `${stabilityCss}</head>`);
}

export default async function handler(req, res) {
  try {
    const response = await fetch(SOURCE, {
      headers: {
        accept: 'text/html,application/xhtml+xml',
        'user-agent': 'PropTechUSA-Gov-Renderer/2.0'
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
