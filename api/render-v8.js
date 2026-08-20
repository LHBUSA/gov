const SOURCE='https://gov.proptechusa.ai/api/render-v7';

const css=`<style id="gov-mobile-v8">
@media(max-width:720px){
  .hero-inner{padding-top:28px!important;padding-bottom:42px!important}
  .hero-copy{width:100%!important;max-width:100%!important;padding-left:8px!important;padding-right:8px!important;box-sizing:border-box!important}
  .hero-copy .eyebrow{margin-left:2px!important;margin-right:2px!important}
  .county-partner-banner{width:calc(100% - 8px)!important;margin-left:4px!important;margin-right:4px!important;padding:11px 14px!important;box-sizing:border-box!important}
  .hero-copy h1,.hero h1{width:calc(100% - 12px)!important;max-width:calc(100% - 12px)!important;margin-left:6px!important;margin-right:6px!important;font-size:clamp(33px,9vw,41px)!important;line-height:1!important;letter-spacing:-.035em!important}
  .hero-lead,.hero-copy>p{width:calc(100% - 16px)!important;max-width:calc(100% - 16px)!important;margin-left:8px!important;margin-right:8px!important;font-size:15px!important;line-height:1.58!important}
  .hero-actions{width:calc(100% - 12px)!important;margin-left:6px!important;margin-right:6px!important;gap:10px!important}
  .hero-actions .btn{border-radius:12px!important}
  .hero-chips{width:calc(100% - 8px)!important;margin-left:4px!important;margin-right:4px!important;display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:8px!important}
  .chip{justify-content:center!important;text-align:center!important;padding:8px 10px!important;border-radius:999px!important}
  .hero-visual{width:calc(100% - 8px)!important;margin-left:4px!important;margin-right:4px!important;margin-top:30px!important}
  .hero-visual .visual-frame{border-radius:16px!important}
  .section-header,.proof-shell,.model-flow,.economics-shell,.governance-grid,.sandbox-shell,.roi-calculator,.briefing-booking,.pilot,.faq-wrap{padding-left:4px!important;padding-right:4px!important;box-sizing:border-box!important}
  .proof-card,.case-card,.partner-card,.use-card,.security-control,.faq-item,.model-callout,.briefing-story,.sandbox-shell,.roi-calculator,.calendly-card{overflow:hidden!important}
}
@media(max-width:390px){
  .hero-copy{padding-left:6px!important;padding-right:6px!important}
  .hero-copy h1,.hero h1{font-size:32px!important}
  .hero-lead,.hero-copy>p{font-size:14.5px!important}
}
</style>`;

export default async function handler(req,res){
  try{
    const r=await fetch(SOURCE,{headers:{accept:'text/html','user-agent':'PropTechUSA-Gov-Renderer/8.0'},cache:'no-store'});
    if(!r.ok)throw new Error(`V7 returned ${r.status}`);
    let html=await r.text();
    html=html.replace('</head>',`${css}</head>`);
    res.setHeader('Content-Type','text/html; charset=utf-8');
    res.setHeader('Cache-Control','no-store, max-age=0, must-revalidate');
    res.setHeader('X-Content-Type-Options','nosniff');
    res.setHeader('Referrer-Policy','strict-origin-when-cross-origin');
    res.status(200).send(html);
  }catch(e){
    console.error('render_v8_failed',e);
    res.status(500).send('PropTechUSA Gov is temporarily unavailable.');
  }
}