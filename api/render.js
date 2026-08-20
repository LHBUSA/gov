const SOURCE = 'https://raw.githubusercontent.com/LHBUSA/gov/main/index.html?v=20260820-county-services-v4';

const stabilityCss = `<style id="gov-mobile-stability">
html,body{width:100%;max-width:100%;overflow-x:hidden;overflow-x:clip;overscroll-behavior-x:none}body{position:relative}main,header,footer,section,.hero,.principles,.security-bar,.network-section,.pilot-section{width:100%;max-width:100%;overflow-x:hidden;overflow-x:clip}.shell,.nav,.hero-inner,.section-header,.proof-shell,.model-flow,.model-callout,.economics-shell,.governance-grid,.use-grid,.pilot,.faq-wrap,.security-shell,.sandbox-header,.sandbox-shell,.roi-calculator,.briefing-booking,.footer-main,.footer-bottom{min-width:0;max-width:100%}.hero-inner>*,.section-header>*,.proof-shell>*,.model-flow>*,.economics-shell>*,.governance-grid>*,.sandbox-shell>*,.roi-calculator>*,.briefing-booking>*,.footer-main>*,.footer-bottom>*{min-width:0}img,picture,svg,iframe,video,canvas{max-width:100%}picture{display:block;width:100%;min-width:0}.visual-frame,.hero-visual,.editorial-visual,.briefing-visual,.response-card,.sandbox-console,.calendly-card,.briefing-story{width:100%;min-width:0;max-width:100%}pre,code{max-width:100%;overflow-wrap:anywhere;word-break:break-word}.sandbox-json{width:100%;max-width:100%;white-space:pre-wrap;overflow-x:hidden}.calendly-frame{width:100%!important;min-width:0!important;max-width:100%!important}.image-lightbox{width:100%;max-width:100%;overflow-x:hidden}.lightbox-stage{max-width:100%}.county-partner-banner{display:flex;align-items:center;gap:10px;margin:0 0 18px;padding:10px 13px;border:1px solid #b9cde3;border-radius:10px;background:#fff;color:#123f79;font-family:var(--mono);font-size:9px;font-weight:900;letter-spacing:.08em;text-transform:uppercase;box-shadow:0 10px 26px rgba(7,26,51,.05)}.county-partner-banner i{width:8px;height:8px;flex:0 0 8px;border-radius:50%;background:#d32336;box-shadow:0 0 0 5px rgba(211,35,54,.09)}
@media(max-width:720px){html,body{overflow-x:hidden!important;overflow-x:clip!important;overscroll-behavior-x:none!important}body{touch-action:pan-y pinch-zoom}.shell{width:calc(100% - 28px)!important;max-width:calc(100% - 28px)!important}.hero-inner,.section-header,.proof-shell,.model-flow,.economics-shell,.governance-grid,.sandbox-shell,.roi-calculator,.briefing-booking,.pilot,.faq-wrap,.footer-main,.footer-bottom{width:100%!important;min-width:0!important;max-width:100%!important}.hero-chips{max-width:100%;gap:7px}.chip{max-width:100%;white-space:normal}.visual-frame{overflow:hidden!important;max-width:100%!important}.visual-frame img,.visual-frame picture,.hero-visual img,.editorial-visual img,.briefing-visual img{display:block;width:100%!important;max-width:100%!important;height:auto!important;object-fit:contain!important}.visual-expand{display:none!important}.sandbox-tabs,.sandbox-metrics,.roi-output-grid,.security-control-grid{min-width:0;max-width:100%}.sandbox-tab,.sandbox-route-card,.sandbox-field,.roi-output,.security-control{min-width:0;max-width:100%}.sandbox-console-head,.calendly-head,.calendly-head-actions{min-width:0;max-width:100%}.sandbox-console-head code,.sandbox-route-card code{white-space:normal;overflow-wrap:anywhere}.calendly-frame{display:block;border:0}.image-lightbox{padding-left:0!important;padding-right:0!important}.lightbox-stage{width:100%!important;max-width:100%!important;padding:12px!important;overflow-y:auto!important;overflow-x:hidden!important}.lightbox-stage img{width:100%!important;max-width:100%!important;height:auto!important}.lightbox-stage p{width:auto!important;max-width:100%!important;text-align:center!important}.county-partner-banner{font-size:8px;line-height:1.45}}
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
    .replace(/<meta name="twitter:description" content="[^"]*">/i, '<meta name="twitter:description" content="County technology partnerships for APIs, portals, automation, public-record delivery, and managed data infrastructure.">')
    .replace('"serviceType": "Local government data modernization and managed API infrastructure"', '"serviceType": "County government technology partnership for digital modernization, managed APIs, portals, public-record delivery, automation, and data infrastructure"');

  html = swap(html, '<strong>PropTechUSA Gov</strong>', '<strong>PropTechUSA Gov &mdash; County Government Partnerships</strong>');
  html = swap(html, 'County-controlled data infrastructure', 'Technology partnerships for county governments');
  html = swap(html, '<div class="eyebrow">Local government data modernization</div>', '<div class="eyebrow">County Government Partnership Program</div><div class="county-partner-banner"><i></i>Seeking county government partners nationwide</div>');
  html = swap(html, '<h1>The official API layer for <span>county data.</span></h1>', '<h1>We help <span>county governments</span> modernize how public data is delivered.</h1>');
  html = swap(html, 'PropTechUSA helps counties turn fragmented assessor, GIS, tax, permit, and public-record systems into governed digital services &mdash; without replacing the systems of record your teams already trust.', 'PropTechUSA works directly with county governments to design, build, and operate modern digital services around the systems your teams already trust. We can deliver official APIs, public portals, developer access, approved bulk exports, workflow automation, and governed AI access while the county retains policy authority and control.');
  html = swap(html, 'Request a County Briefing <span aria-hidden="true">&rarr;</span>', 'Discuss a County Partnership <span aria-hidden="true">&rarr;</span>');
  html = swap(html, 'Designed for county administrators, assessors, GIS teams, CIOs, records leaders, and procurement teams.', 'Built specifically for county administrators, assessors, GIS teams, CIOs, records leaders, finance teams, and procurement officials evaluating a modernization partner.');

  html = swap(html, 'The case for modernization', 'Why counties work with PropTechUSA');
  html = swap(html, 'Public data is valuable. Delivering it should not be a daily burden.', 'Modernize public service without replacing the county systems that already work.');
  html = swap(html, 'County teams often support the same information through websites, email requests, one-off exports, vendor integrations, and legacy interfaces. PropTechUSA turns that repeated work into one governed service layer.', 'We take on the engineering and operating work between legacy county systems and the people, businesses, applications, and internal teams that need reliable access. The goal is less manual fulfillment, better service delivery, and infrastructure the county can actually operate with confidence.');
  html = swap(html, '01 / REDUCE STAFF LOAD', '01 / REDUCE MANUAL WORK');
  html = swap(html, 'Replace repetitive fulfillment with documented self-service.', 'Turn repetitive requests into reliable self-service.');
  html = swap(html, 'Stable APIs, approved exports, clear field definitions, and subscriber support reduce the number of custom requests landing on county staff.', 'We build the APIs, portals, approved exports, documentation, authentication, monitoring, and support workflows that move routine demand away from county staff.');
  html = swap(html, '02 / IMPROVE FIDELITY', '02 / IMPROVE PUBLIC SERVICE');
  html = swap(html, 'Make the official source easier to use than a scraped copy.', 'Give residents and professional users a better official channel.');
  html = swap(html, 'Direct source routing, identifier crosswalks, refresh monitoring, and explicit provenance make the county service the preferred path for serious users.', 'A modern county-branded service can be easier to search, integrate, automate, and trust than legacy portals, emailed spreadsheets, or third-party scraping.');
  html = swap(html, '03 / CREATE LEVERAGE', '03 / CREATE REUSABLE INFRASTRUCTURE');
  html = swap(html, 'Build once, support many public and commercial workflows.', 'Build once, support many departments and use cases.');
  html = swap(html, 'The same governed layer can serve residents, appraisers, lenders, insurers, researchers, software teams, and approved AI systems.', 'The same managed layer can support residents, county staff, assessors, GIS users, researchers, enterprise integrations, commercial access, and approved AI workflows.');

  html = swap(html, 'Built on the PropData foundation', 'Why PropTechUSA can execute');
  html = swap(html, 'Built on working property-data infrastructure.', 'We already operate the infrastructure required to do this at production scale.');
  html = swap(html, 'PropTechUSA already engineers county-specific routing, parcel identity, official-source joins, geometry, provenance, and production delivery. The government program turns that operating capability into a county-controlled service.', 'PropTechUSA already operates national property-data infrastructure, county-specific routing, parcel identity, geometry, provenance, production APIs, edge delivery, and enterprise data workflows. The government program brings that same engineering capability directly to county partners.');

  html = swap(html, 'Interactive response contract', 'What we can deliver');
  html = swap(html, 'See the official service layer behave like a real API.', 'A county can launch a modern developer and data-access experience without building it internally.');
  html = swap(html, 'Switch between representative county endpoints, change the parcel identifier, and run the request. The payload updates with a fresh request ID, timestamp, latency, source, rights, and coverage metadata.', 'This interactive example shows the type of governed county API we can build and operate: documented endpoints, reliable response contracts, source metadata, access controls, monitoring, and production support.');
  html = swap(html, 'Representative sandbox.', 'Representative county service.');
  html = swap(html, 'No live county record is queried on this marketing page. The response contract demonstrates the production delivery model.', 'This marketing sandbox demonstrates the production delivery model we can implement for a county partner.');

  html = swap(html, 'The operating model', 'How the partnership works');
  html = swap(html, 'Modernization and managed delivery as a service.', 'We do the implementation and operating work with the county, not around it.');
  html = swap(html, 'PropTechUSA does not ask a county to abandon its CAMA, GIS, records, or finance systems. We connect to the authorized sources, normalize delivery, and operate the public-facing infrastructure around them.', 'The county defines policy, source authority, approved access, procurement requirements, and priorities. PropTechUSA handles the technical implementation: connectors, normalization, APIs, portals, documentation, monitoring, authentication, support, and ongoing operations.');
  html = swap(html, 'Define the service', 'Define the county outcome');
  html = swap(html, 'Select the department, datasets, approved fields, public-access rules, refresh requirements, and target users.', 'Choose the department, service problem, dataset, users, governance requirements, and measurable outcome for the first launch.');
  html = swap(html, 'Connect official sources', 'Integrate existing county systems');
  html = swap(html, 'Build governed connectors and crosswalks around the county systems already designated as authoritative.', 'We build governed integrations around the county systems already designated as authoritative rather than forcing a system replacement.');
  html = swap(html, 'Launch the delivery layer', 'Launch the county service');
  html = swap(html, 'Publish a county-branded API, developer documentation, portal, access controls, and approved bulk workflows.', 'We launch the approved county-branded API, portal, developer experience, bulk workflow, authentication, and documentation.');
  html = swap(html, 'Operate and improve', 'Operate it with the county');
  html = swap(html, 'Monitor refreshes, failures, usage, support, demand, and coverage while the county retains policy control.', 'We monitor uptime, refreshes, failures, usage, security, support, and demand while the county retains policy and governance control.');
  html = swap(html, 'The moat is operational, not artificial.', 'The value is operational: the county gets a partner that keeps the service working.');
  html = swap(html, 'The official service wins because it is faster, clearer, more reliable, and easier to integrate than fragmented exports or scraping.', 'The goal is a service that is easier for the public to use, easier for software to integrate, and easier for county staff to support than fragmented exports, aging portals, or one-off requests.');

  html = swap(html, 'The partnership structure', 'What each side is responsible for');
  html = swap(html, 'Clear roles. Explicit rights. One accountable delivery layer.', 'The county keeps authority. PropTechUSA takes responsibility for implementation and operations.');
  html = swap(html, 'The public site should make the arrangement easy to understand. The detailed agreement can then define permitted uses, economics, service levels, procurement requirements, and termination rights.', 'A successful engagement is explicit about roles. The county controls source policy, public access, approvals, and governance. PropTechUSA is accountable for the technical delivery layer, service levels, support, documentation, monitoring, and agreed commercial operations.');
  html = swap(html, 'THE COUNTY PROVIDES', 'THE COUNTY CONTROLS');
  html = swap(html, 'Authority and governance', 'Policy, authority, and priorities');
  html = swap(html, 'PROPTECHUSA PROVIDES', 'PROPTECHUSA BUILDS + OPERATES');
  html = swap(html, 'Infrastructure and operations', 'The technology and service layer');
  html = swap(html, 'USERS RECEIVE', 'THE COUNTY RECEIVES');
  html = swap(html, 'Reliable official access', 'A modern service the county can stand behind');

  html = swap(html, 'Flexible contract paths', 'Flexible ways to structure the engagement');
  html = swap(html, 'One operating model. Multiple ways to fund it.', 'County-funded, usage-supported, shared-revenue, or hybrid structures.');
  html = swap(html, 'Every jurisdiction has different public-record laws, procurement requirements, budgets, and policy goals. The platform can support several structures without presenting one model as universally available.', 'Every county has different budgets, procurement rules, public-record obligations, and policy goals. We can structure implementation and ongoing operations around the model the county is authorized and comfortable using.');
  html = swap(html, 'No surprise control transfer.', 'The county stays in control.');
  html = swap(html, 'Data ownership, public access, platform rights, permitted uses, fees, service levels, renewal, and termination should be explicit in the agreement.', 'Ownership, access policy, service levels, fees, permitted uses, renewal, termination, and any revenue or reciprocal rights are documented in the agreement.');
  html = swap(html, 'County-funded service', 'County-funded modernization');
  html = swap(html, 'The county pays a defined implementation and operating fee for a public API, portal, or internal modernization program.', 'The county funds implementation and operations for an API, portal, automation workflow, or broader digital-service program.');
  html = swap(html, 'Subscriber-funded access', 'Usage-supported service');
  html = swap(html, 'Approved developer, bulk, or convenience services support operating costs where county policy and applicable law permit.', 'Where county policy and applicable law permit, approved bulk, developer, or convenience services can offset some operating costs.');
  html = swap(html, 'Shared-revenue model', 'Shared-revenue partnership');
  html = swap(html, 'PropTechUSA operates billing and support while the agreement defines revenue allocation, eligible services, reporting, and audit rights.', 'PropTechUSA can operate approved billing, authentication, and subscriber support while the agreement defines eligible services, reporting, audit rights, and revenue allocation.');
  html = swap(html, 'Hybrid or reciprocal model', 'Hybrid partnership');
  html = swap(html, 'Cash fees can be reduced through defined platform access or other consideration, with permitted uses and duration documented rather than implied.', 'Implementation fees, operating fees, approved platform access, or other consideration can be combined when the county prefers a hybrid structure.');

  html = swap(html, 'Board-ready economics', 'Build the business case');
  html = swap(html, 'Model the operational value before the first meeting.', 'Show leadership what modernization could save, improve, and support.');
  html = swap(html, 'Adjust three county inputs to estimate annual staff capacity recovered, service availability gained, and an illustrative cost-recovery range. The model is transparent, conservative, and designed for an initial board or procurement discussion.', 'Use the planning calculator to estimate staff capacity recovered, service availability gained, and potential cost-recovery support for eligible services. It is designed to help administrators frame an initial budget, board, or procurement conversation.');

  html = swap(html, 'Governance by design', 'What the county keeps control of');
  html = swap(html, 'Every response should explain what it is, where it came from, and how it may be used.', 'Modernization should increase county control, not reduce it.');
  html = swap(html, 'Serious government data infrastructure cannot rely on vague provenance or silent fallbacks. PropTechUSA designs source, coverage, rights, and freshness into the delivery contract.', 'The county continues to define authoritative sources, approved fields, access classes, public-record policy, redistribution rules, security requirements, and service priorities. PropTechUSA implements those rules in the technical delivery layer.');
  html = swap(html, 'County-controlled source policy', 'County-controlled source policy');
  html = swap(html, 'The jurisdiction designates authoritative systems, approved fields, and access rules.', 'The jurisdiction designates authoritative systems, approved fields, access rules, and public-service policy.');
  html = swap(html, 'Rights-aware delivery', 'Policy-aware delivery');
  html = swap(html, 'Redistribution, display, storage, and downstream-use terms can be represented explicitly.', 'Access, redistribution, display, storage, authentication, and downstream-use rules can be enforced explicitly.');
  html = swap(html, 'Truthful nulls and coverage states', 'Transparent service behavior');
  html = swap(html, 'Unsupported fields return clear status and source context, not fabricated values.', 'Unsupported fields, stale sources, partial coverage, or unavailable systems return clear status instead of silent guesses.');
  html = swap(html, 'Procurement-aware agreements', 'Procurement-aware engagement');
  html = swap(html, 'Exclusivity, term, renewals, fees, security, and exit provisions follow the approved contract.', 'Term, renewals, fees, security, service levels, support, data handling, and exit provisions follow the approved contract.');

  html = swap(html, 'What one county layer can power', 'What we can build for a county');
  html = swap(html, 'Start with one service. Build reusable public infrastructure.', 'Start with the highest-value service, then expand from there.');
  html = swap(html, 'A pilot can focus on a single department and still create a foundation for future portals, APIs, bulk services, enterprise integrations, and AI access.', 'A county can begin with one department or workflow and expand into a broader digital-service platform as value is proven. The technology is modular, so the first project does not need to become a massive replacement program.');
  html = swap(html, 'Assessor and property records', 'Modern assessor and property services');
  html = swap(html, 'Search, property cards, valuations, ownership, tax attributes, sales, and record provenance.', 'County-branded property search, property cards, valuations, ownership, tax attributes, sales, APIs, and official-source metadata.');
  html = swap(html, 'Parcel and geospatial services', 'GIS and parcel delivery');
  html = swap(html, 'Parcel identity, coordinates, boundaries, map services, spatial joins, and official geometry status.', 'Modern parcel lookup, boundaries, map services, spatial APIs, official geometry delivery, and approved enterprise GIS access.');
  html = swap(html, 'Tax and finance access', 'Tax and finance services');
  html = swap(html, 'Approved tax status, balances, payment context, delinquency feeds, and documented bulk delivery.', 'Approved tax status, balances, payment context, delinquency workflows, finance data services, and documented bulk delivery.');
  html = swap(html, 'Permits and code records', 'Permits, inspections, and code');
  html = swap(html, 'Permit search, status, inspection context, code records, and department-specific response contracts.', 'Permit search, inspection status, code records, department APIs, public portals, and workflow automation.');
  html = swap(html, 'Public data portals', 'County-branded public portals');
  html = swap(html, 'County-branded self-service experiences for residents, researchers, media, and civic technology teams.', 'Resident-facing and professional self-service experiences that reduce manual fulfillment and modernize public access.');
  html = swap(html, 'Approved AI and agent access', 'Approved automation and AI');
  html = swap(html, 'Source-aware, rate-limited data tools for internal assistants and approved external AI applications.', 'Governed data tools for internal assistants, records workflows, staff automation, and approved external AI applications.');

  html = swap(html, 'Pilot-to-network flywheel', 'Why PropTechUSA');
  html = swap(html, 'One successful county becomes the playbook for the next.', 'A production technology company built to operate, not just consult.');
  html = swap(html, 'Each deployment strengthens reusable connectors, response contracts, governance patterns, support workflows, and procurement evidence—without weakening county control over source data or policy.', 'We bring production API infrastructure, edge delivery, property-data engineering, county-specific integrations, monitoring, support, and national operating experience to each engagement. Every county remains its own source of truth and policy authority.');

  html = swap(html, 'County pilot program', 'County Government Partnership Pilot');
  html = swap(html, 'One county. One department. One production service.', 'Start with one county problem and put a real service into production.');
  html = swap(html, 'Begin with a clearly governed dataset and a defined user group. Prove the connector, response contract, refresh process, access policy, and operational value before expanding.', 'The recommended first engagement is intentionally controlled: one department, one priority service, one governance scope, and one measurable production outcome. We prove the implementation and operating model before asking the county to expand.');
  html = swap(html, 'Request a Government Briefing <span aria-hidden="true">&rarr;</span>', 'Discuss a County Partnership <span aria-hidden="true">&rarr;</span>');
  html = swap(html, 'Discovery and governance brief', 'County discovery + service brief');
  html = swap(html, 'Map systems, owners, users, rights, procurement path, and the first production outcome.', 'Map the county problem, current systems, stakeholders, procurement path, governance needs, and first measurable outcome.');
  html = swap(html, 'Source connector and response contract', 'Implementation + integration');
  html = swap(html, 'Normalize the authorized fields, preserve official IDs, and define freshness and failure behavior.', 'Build the approved integrations, service contract, authentication, documentation, monitoring, and county-branded delivery experience.');
  html = swap(html, 'County-branded launch and measurement', 'Launch + operate');
  html = swap(html, 'Release the approved service, monitor usage and support load, and document expansion priorities.', 'Put the service into production, support it, measure operational value, and define the next expansion only after the first service proves itself.');
  html = swap(html, 'Choose a time without leaving the page.', 'Book a county government partnership briefing without leaving the page.');
  html = swap(html, 'Schedule a PropTechUSA Gov county modernization briefing', 'Schedule a PropTechUSA Gov county government partnership briefing');

  html = swap(html, 'Built to fit the county, not force a template.', 'Questions county leaders usually ask before starting.');
  html = swap(html, 'Each deployment is scoped around jurisdiction policy, systems, law, procurement, and operational goals.', 'Every engagement is scoped around the county’s existing systems, procurement process, public-record obligations, security requirements, budget, and operational goals.');
  html = swap(html, "Does this replace the county's existing CAMA, GIS, tax, or records system?", 'Do we have to replace our existing county systems?');
  html = swap(html, 'No. The model is designed as a managed delivery and interoperability layer around systems the county already treats as authoritative.', 'No. Our default approach is to modernize around the county systems already treated as authoritative. We connect, normalize, and operate the new delivery layer without forcing a rip-and-replace project.');
  html = swap(html, "Does PropTechUSA own the county's source data?", 'Who controls county data and policy?');
  html = swap(html, 'The county retains ownership and policy authority over its source records. Any platform access, operational license, derived data rights, or permitted commercial use should be defined explicitly in the agreement.', 'The county retains policy authority and control over its source records. Any platform access, operational rights, permitted uses, fees, or reciprocal terms are defined explicitly in the agreement.');
  html = swap(html, 'Can the county charge for API or bulk access?', 'Can the project include cost recovery or paid commercial access?');
  html = swap(html, 'That depends on applicable law, public-record policy, the nature of the service, procurement, and county approval. The platform supports free, paid, and hybrid access models without assuming that every option is available in every jurisdiction.', 'Potentially, where applicable law, county policy, procurement, and the approved service structure allow it. The platform supports free public access, paid convenience or developer services, and hybrid models without assuming every model is available everywhere.');
  html = swap(html, 'Does the agreement need to be exclusive?', 'Does this require an exclusive contract?');
  html = swap(html, 'No. The value proposition does not depend on blocking other access paths. A non-exclusive official service can still become the preferred channel by being reliable, documented, supported, and governed.', 'No. The value is in building and operating a better county service, not blocking other access paths. Any exclusivity would need to be separately justified, negotiated, authorized, and documented.');
  html = swap(html, 'What does PropTechUSA receive in return?', 'What does PropTechUSA provide and how are we paid?');
  html = swap(html, 'The contract can define implementation fees, operating fees, revenue share, approved platform access, or a hybrid structure. The consideration, permitted uses, duration, renewal, and termination terms should be transparent.', 'We provide implementation, integrations, APIs, portals, documentation, authentication, monitoring, support, and ongoing operations. The agreement can use implementation fees, operating fees, approved revenue share, reciprocal access, or a hybrid structure, with the terms stated clearly.');

  return html.replace('</head>', `${stabilityCss}</head>`);
}

export default async function handler(req, res) {
  try {
    const response = await fetch(SOURCE, {headers:{accept:'text/html,application/xhtml+xml','user-agent':'PropTechUSA-Gov-Renderer/4.0'},cache:'no-store'});
    if (!response.ok) throw new Error(`GitHub source returned ${response.status}`);
    const html = transform(await response.text());
    res.setHeader('Content-Type','text/html; charset=utf-8');
    res.setHeader('Cache-Control','no-store, max-age=0');
    res.setHeader('X-Content-Type-Options','nosniff');
    res.setHeader('Referrer-Policy','strict-origin-when-cross-origin');
    res.status(200).send(html);
  } catch (error) {
    console.error('render_failed', error);
    res.setHeader('Content-Type','text/html; charset=utf-8');
    res.setHeader('Cache-Control','no-store');
    res.status(500).send('<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><title>PropTechUSA Gov</title></head><body style="font-family:system-ui;padding:32px;color:#071a33"><h1>PropTechUSA Gov</h1><p>The page could not be loaded. Refresh in a moment.</p></body></html>');
  }
}
