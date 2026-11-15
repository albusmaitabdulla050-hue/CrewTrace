const $=s=>document.querySelector(s),sat=(d,t)=>1-Math.exp(-d/t),r0=Math.round,f1=n=>n.toFixed(1),cl=v=>Math.max(0,Math.min(100,v));
/* ================= Icon set: rounded 2px line icons ================= */
const IP={
 pill:'<path d="M10.5 20.5a5 5 0 0 1-7-7l6-6a5 5 0 0 1 7 7z"/><path d="M8.5 8.5l7 7"/>',
 check:'<circle cx="12" cy="12" r="9"/><path d="M8.5 12.5l2.5 2.5 4.5-5"/>',
 food:'<path d="M7 3v8M4 3v5a3 3 0 0 0 6 0V3M7 11v10M17 21V3c-2.5 1-4 3.5-4 7v3h4"/>',
 ban:'<circle cx="12" cy="12" r="9"/><path d="M5.6 5.6l12.8 12.8"/>',
 alert:'<path d="M10.3 3.9L2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>',
 user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
 users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6.5 6.5 0 0 1 3.5 6"/>',
 ruler:'<path d="M3 17L17 3l4 4L7 21z"/><path d="M7 13l2 2M10 10l2 2M13 7l2 2"/>',
 help:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14M12 17h.01"/>',
 info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5h.01"/>',
 drop:'<path d="M12 3s6 6.2 6 11a6 6 0 0 1-12 0c0-4.8 6-11 6-11z"/>',
 drops:'<path d="M8 3s4 4.2 4 7.5a4 4 0 0 1-8 0C4 7.2 8 3 8 3zM17 10s3 3.2 3 5.5a3 3 0 0 1-6 0c0-2.3 3-5.5 3-5.5z"/>',
 sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
 bone:'<path d="M8.6 15.4l6.8-6.8"/><circle cx="6.2" cy="14.8" r="2.2"/><circle cx="9.2" cy="17.8" r="2.2"/><circle cx="14.8" cy="6.2" r="2.2"/><circle cx="17.8" cy="9.2" r="2.2"/>',
 leaf:'<path d="M5 20c0-9 6-15 15-15 0 9-6 15-15 15z"/><path d="M5 20l8-8"/>',
 citrus:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><path d="M12 7v10M7 12h10"/>',
 scale:'<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M8 10.5a5 5 0 0 1 8 0M12 12l1.5-2.5"/>',
 body:'<circle cx="12" cy="4.5" r="2"/><path d="M8 9h8M9.5 21l1-6.5h3l1 6.5M10.5 14.5L9.5 9M13.5 14.5l1-5.5"/>',
 heart:'<path d="M12 20.5s-8-4.7-8-10.5a4.5 4.5 0 0 1 8-2.8 4.5 4.5 0 0 1 8 2.8c0 5.8-8 10.5-8 10.5z"/>',
 pulse:'<path d="M12 20.5s-8-4.7-8-10.5a4.5 4.5 0 0 1 8-2.8 4.5 4.5 0 0 1 8 2.8c0 5.8-8 10.5-8 10.5z"/><path d="M5 12h3.5l1.5-2.5 2.5 5 1.5-2.5H19"/>',
 gauge:'<path d="M3.5 17a9 9 0 1 1 17 0"/><path d="M12 14l4-4.5"/><circle cx="12" cy="14.5" r="1.3"/>',
 lungs:'<path d="M12 4v7M12 11l-3-1.5M12 11l3-1.5"/><path d="M8.5 7C6 7.5 3 11.5 3 16.5a2.5 2.5 0 0 0 4 2c1.5-1 2-2.5 2-5V8.5"/><path d="M15.5 7C18 7.5 21 11.5 21 16.5a2.5 2.5 0 0 1-4 2c-1.5-1-2-2.5-2-5V8.5"/>',
 moon:'<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
 activity:'<path d="M3 12h4l3-8 4 16 3-8h4"/>',
 dumbbell:'<path d="M6.5 6.5v11M17.5 6.5v11M3.5 9v6M20.5 9v6M6.5 12h11"/>',
 radiation:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="1.6"/><path d="M12 3.5v6.6M4.6 16.3l5.7-3.3M19.4 16.3l-5.7-3.3"/>',
 thermo:'<path d="M14 14.8V5a2 2 0 0 0-4 0v9.8a4 4 0 1 0 4 0z"/><path d="M12 9v6"/>',
 head:'<path d="M12 3a7 7 0 0 0-7 7c0 2 .8 3.6 2 4.8V21h7v-3h2a2 2 0 0 0 2-2v-2.2l1.8-.6-1.6-3.2A7 7 0 0 0 12 3z"/><path d="M11 6.5l-1.6 3h3l-1.6 3"/>',
 eye:'<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',
 waves:'<path d="M3 8c2-2 4-2 6 0s4 2 6 0 4-2 6 0M3 13c2-2 4-2 6 0s4 2 6 0 4-2 6 0M3 18c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/>',
 wind:'<path d="M3 8h11a3 3 0 1 0-3-3M3 12h15a3 3 0 1 1-3 3M3 16h7"/>',
 chat:'<path d="M21 12a8 8 0 0 1-11.5 7.2L4 21l1.8-5.3A8 8 0 1 1 21 12z"/><path d="M8.5 12h.01M12 12h.01M15.5 12h.01"/>',
 flame:'<path d="M12 21a6 6 0 0 0 6-6c0-4-3-6-4-10-2 2-3 4-3 6-1-1-1.5-2-1.5-3C7.5 10 6 12.5 6 15a6 6 0 0 0 6 6z"/>',
 bandage:'<rect x="2.5" y="8" width="19" height="8" rx="4" transform="rotate(-45 12 12)"/><path d="M10.5 10.5h.01M13.5 13.5h.01M10.5 13.5h.01M13.5 10.5h.01"/>',
 battery:'<rect x="2" y="7" width="17" height="10" rx="2.5"/><path d="M22 11v2M6 10.5v3"/>',
 kidney:'<path d="M15 3.5c-4 0-6.5 3-6.5 5.5 0 1.5 1.5 2 1.5 3s-1.5 1.5-1.5 3c0 2.7 2.2 5.5 6.5 5.5 3.5 0 6-4 6-8.5s-2.5-8.5-6-8.5z"/>',
 spine:'<rect x="9" y="2.5" width="6" height="4" rx="1.5"/><rect x="9" y="10" width="6" height="4" rx="1.5"/><rect x="9" y="17.5" width="6" height="4" rx="1.5"/><path d="M12 6.5V10M12 14v3.5"/>',
 foot:'<path d="M7.5 3C9.5 3 10.5 5 10.5 8s-1 5-1 7h-4C5.5 13 4.5 11 4.5 8s1-5 3-5zM5.5 18h4v.5a2 2 0 0 1-4 0zM16.5 6c2 0 3 2 3 5s-1 4-1 6h-4c0-2-1-3-1-6s1-5 3-5zM14.5 20h4"/>',
 chart:'<path d="M3 21h18M6.5 17v-5M11 17V6M15.5 17v-8M20 17v-3"/>',
 scan:'<path d="M3 8V5a2 2 0 0 1 2-2h3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M8 21H5a2 2 0 0 1-2-2v-3"/><circle cx="12" cy="10" r="3"/><path d="M7.5 18a5 5 0 0 1 9 0"/>',
 steth:'<path d="M5 3v6a4 4 0 0 0 8 0V3"/><path d="M9 13v2a5 5 0 0 0 10 0v-2"/><circle cx="19" cy="11" r="2"/>',
 signal:'<circle cx="12" cy="12" r="2"/><path d="M16.2 7.8a6 6 0 0 1 0 8.4M7.8 16.2a6 6 0 0 1 0-8.4M19 5a10 10 0 0 1 0 14M5 19A10 10 0 0 1 5 5"/>',
 link:'<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
 layout:'<rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/>',
 cup:'<path d="M4 8h12v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5zM16 10h1.5a2.5 2.5 0 0 1 0 5H16M8 2.5v3M12 2.5v3"/>',
 salt:'<path d="M8 9h8l1 12H7z"/><path d="M8.5 9a3.5 3.5 0 0 1 7 0"/><path d="M11 5.5h.01M13 5.5h.01M12 4h.01"/>',
 candy:'<circle cx="12" cy="12" r="4"/><path d="M8.6 10L4 7.5l1 4.5-1 4.5 4.6-2.5M15.4 10L20 7.5 19 12l1 4.5-4.6-2.5"/>',
 fish:'<path d="M2.5 12c3-4.5 7-6.5 11-6.5S19.5 9 22 12c-2.5 3-4.5 6.5-8.5 6.5S5.5 16.5 2.5 12z"/><path d="M17 11h.01M9 9.5c1 1.5 1 3.5 0 5"/>',
 milk:'<path d="M8 2.5h8M9 2.5v3L7 8.5V20a1.5 1.5 0 0 0 1.5 1.5h7A1.5 1.5 0 0 0 17 20V8.5l-2-3v-3M7 13h10"/>',
 egg:'<path d="M12 21a7 7 0 0 0 7-7c0-5-3.5-11-7-11S5 9 5 14a7 7 0 0 0 7 7z"/>',
 bowl:'<path d="M3 11h18a9 9 0 0 1-18 0zM8 21h8"/><path d="M9 7.5c0-1 1-1.5 1-2.5M13 7.5c0-1 1-1.5 1-2.5"/>',
 shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
 pin:'<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
 sliders:'<path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/>',
 x:'<path d="M6 6l12 12M18 6L6 18"/>',
 sparkle:'<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 16l.7 1.8 1.8.7-1.8.7L19 21l-.7-1.8-1.8-.7 1.8-.7z"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
 home:'<path d="M3 11l9-7 9 7v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 21v-6h6v6"/>',
 trend:'<path d="M3 17l6-6 4 4 8-8M15 7h6v6"/>',
 list:'<path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01"/>',
 send:'<path d="M21 3L10 14M21 3l-7 18-4-7-7-4z"/>'};
const ic=(n,c="")=>`<svg class="ic ${c}" viewBox="0 0 24 24" aria-hidden="true">${IP[n]||IP.info}</svg>`;
const tile=(n,c="")=>`<span class="itile ${c}">${ic(n)}</span>`;

/* ================= CrewTrace: crew roster ================= */
const NM={m:["Ali","Omar","Khalid","Yusuf","Zayed","Hamad","Faisal","Tariq","Rami","Mansour","Nasser","Saeed","Majid","Hassan","Ibrahim","Adel"],f:["Rawan","Layla","Noor","Salma","Maryam","Hana","Dalia","Reem","Amira","Aisha","Fatima","Sara","Lina","Huda","Jana","Mona"]};
const LAST=["Mohd","Nasser","Ahmed","Hassan","Rahman","Khoury","Haddad","Ibrahim","Mansour","Salem","Abbas","Al-Farsi","Saleh","Younis","Al-Mazrouei","Darwish","Khalil","Suleiman","Al-Hashimi","Qasim"];
const ROSTER=[
 {id:"E",role:"Mission commander",sex:"m",av:{bg:"#cfe0f7",skin:"#c68f63",hair:"#1b1714",style:"short",beard:1,suit:"#1569d8"},p:{name:"Ali Mohd",age:47,ht:182,wt:86,bf:20,hr:56,sys:122,dia:78,spo2:98,sleep:6,t:-.6,ex:90,water:2.3}},
 {id:"A",role:"Flight engineer",sex:"f",av:{bg:"#f7dfe6",skin:"#e0ac84",hair:"#2a1d1a",style:"long",suit:"#c2410c"},p:{name:"Rawan Nasser",age:38,ht:168,wt:61,bf:27,hr:62,sys:108,dia:70,spo2:99,sleep:6.8,t:-.2,ex:110,water:2.4}},
 {id:"B",role:"Mission specialist",sex:"m",av:{bg:"#dff0e0",skin:"#a96f48",hair:"#0f0d0c",style:"short",suit:"#2b7f48"},p:{name:"Khalid Haddad",age:41,ht:177,wt:78,bf:17,hr:58,sys:117,dia:76,spo2:98,sleep:6.3,t:-.4,ex:80,water:2.2}},
 {id:"C",role:"Medical officer",sex:"f",av:{bg:"#e8e0f5",skin:"#d29c73",hair:"#2d3a5a",style:"scarf",suit:"#6d28d9"},p:{name:"Salma Ibrahim",age:35,ht:163,wt:55,bf:24,hr:66,sys:104,dia:66,spo2:99,sleep:7.4,t:.1,ex:120,water:2}},
 {id:"D",role:"Pilot",sex:"m",av:{bg:"#fbeccf",skin:"#8a5a3b",hair:"#14100e",style:"bald",beard:1,suit:"#b46f00"},p:{name:"Yusuf Rahman",age:44,ht:188,wt:99,bf:26,hr:70,sys:128,dia:84,spo2:97,sleep:5.5,t:-1.1,ex:45,water:1.9}}];
ROSTER.forEach(a=>{a.p.sex=a.sex;a.p.id=a.id;a.p.hr0=a.p.hr;a.p.spo20=a.p.spo2;a.p.sys0=a.p.sys;a.p.dia0=a.p.dia;a.p.day=120;a.p.sym=[]});
const AS=id=>ROSTER.find(a=>a.id==id),first=n=>String(n).split(" ")[0];
let cur="E",D=AS(cur).p,live=null,sel=null,layer="muscle";const LY=[["skin","Skin"],["muscle","Muscles"],["bone","Skeleton"],["organ","Organs"]];
function rerollNames(){const used=new Set(ROSTER.map(a=>first(a.p.name)));
 ROSTER.forEach(a=>{const pool=NM[a.sex].filter(n=>!used.has(n)),f=pool[Math.floor(Math.random()*pool.length)];used.add(f);a.p.name=f+" "+LAST[Math.floor(Math.random()*LAST.length)]})}
const scnInfo=id=>typeof window.scnInfo=="function"?window.scnInfo(id):null;
const symsOf=p=>{const s=[...(p.sym||[])],i=scnInfo(p.id);if(i&&i.symptomatic){if(/headache/i.test(i.symptom)&&!s.includes("pain"))s.push("pain");if(/fatigue/i.test(i.symptom)&&!s.includes("fatigue"))s.push("fatigue")}return s};
function avatar(a,px){const v=a.av,sk=v.skin,h=v.hair;let back="",top="",face="";
 if(v.style=="long"){back=`<path d="M27 44C24 72 30 84 38 86L62 86C70 84 76 72 73 44C70 28 60 20 50 20C40 20 30 28 27 44Z" fill="${h}"/>`;top=`<path d="M33 42C32 24 42 20 50 20C58 20 68 24 67 42C62 32 56 29 50 29C44 29 38 32 33 42Z" fill="${h}"/>`}
 if(v.style=="scarf"){back=`<path d="M23 48C21 26 36 15 50 15C64 15 79 26 77 48C76 66 70 78 62 84L38 84C30 78 24 66 23 48Z" fill="${h}"/>`;top=`<path d="M33 38C34 28 42 24 50 24C58 24 66 28 67 38C62 31 56 30 50 30C44 30 38 31 33 38Z" fill="${h}"/>`}
 if(v.style=="short")top=`<path d="M33 41C32 23 43 20 50 20C58 20 68 23 67 41C63 33 57 30 50 30C43 30 37 33 33 41Z" fill="${h}"/>`;
 if(v.beard)face=`<path d="M35 49C36 65 44 71 50 71C56 71 64 65 65 49C62 58 56 61 50 61C44 61 38 58 35 49Z" fill="${v.style=="bald"?"#2a211c":h}"/>`;
 return `<span class="avatar" style="width:${px}px;height:${px}px"><svg viewBox="0 0 100 100" role="img" aria-label="Portrait of ${a.p.name}"><rect width="100" height="100" fill="${v.bg}"/>${back}<path d="M6 100C8 80 26 71 50 71C74 71 92 80 94 100Z" fill="${v.suit}"/><rect x="43" y="58" width="14" height="17" rx="6" fill="${sk}"/><ellipse cx="50" cy="75" rx="18" ry="6" fill="#eef1f5" stroke="#b9c2cf"/><ellipse cx="50" cy="45" rx="16" ry="20" fill="${sk}"/>${v.style!="scarf"?`<circle cx="34" cy="46" r="3.2" fill="${sk}"/><circle cx="66" cy="46" r="3.2" fill="${sk}"/>`:""}${top}${face}<circle cx="43.5" cy="44" r="1.8" fill="#1b1b1b"/><circle cx="56.5" cy="44" r="1.8" fill="#1b1b1b"/><path d="M41 39q3-2 5 0M54 39q3-2 5 0" stroke="#1b1b1b" stroke-width="1.2" fill="none" stroke-linecap="round"/><path d="M44 54q6 4 12 0" stroke="${v.beard?"#e8d8cc":"#7a3b30"}" stroke-width="1.6" fill="none" stroke-linecap="round"/><circle cx="27" cy="90" r="4.5" fill="#fff" opacity=".92"/><path d="M24.5 90h5M27 87.5v5" stroke="${v.suit}" stroke-width="1.4"/></svg></span>`}
let selSig="";
function renderSelects(){const sig=ROSTER.map(a=>a.p.name).join("|")+cur;document.querySelectorAll(".astroSel").forEach(s=>{if(s.dataset.sig!==sig){s.innerHTML=ROSTER.map(a=>`<option value="${a.id}">${a.p.name}${s.dataset.short?"":" · "+a.role}</option>`).join("");s.dataset.sig=sig}s.value=cur})}
function selectAstro(id){if(!AS(id))return;cur=id;D=AS(id).p;sel=null;all();if(window.renderCrewUI)window.renderCrewUI()}
document.addEventListener("change",e=>{if(e.target.classList&&e.target.classList.contains("astroSel"))selectAstro(e.target.value)});
const ready=R=>r0(100-K.reduce((a,k)=>a+R[k].v,0)/K.length),rstat=v=>v>=65?"ok":v>=45?"warn":"bad";
const put=(s,x)=>{const e=typeof s=="string"?$(s):s;if(e&&e._h!==x){e.innerHTML=x;e._h=x}};
function healthScore(R){R=R||res();const p=D,avg=K.reduce((a,k)=>a+R[k].v,0)/K.length;
 let s=100-.55*avg;
 s-=Math.max(0,p.hr-p.hr0)*.6+Math.max(0,p.spo20-p.spo2)*3+Math.max(0,95-p.spo2)*4+Math.max(0,p.sys-p.sys0)*.3;
 const eff=symsOf(p),inf=scnInfo(p.id);s-=eff.length*6;if(inf&&inf.symptomatic)s-=inf.sev*2.5;
 return Math.round(Math.max(0,Math.min(100,s)))}
const hstat=v=>v>=75?"ok":v>=55?"warn":"bad",HLAB={ok:"Good",warn:"Fair",bad:"Needs attention"};
function withAstro(id,fn){const o=D;D=AS(id).p;try{return fn()}finally{D=o}}
const scoreOf=id=>withAstro(id,()=>healthScore(res()));
document.querySelectorAll("[data-ic]").forEach(e=>e.innerHTML=ic(e.dataset.ic));
const bfRef=(s,a)=>s=="m"?(a<40?[8,19]:a<60?[11,21]:[13,24]):(a<40?[21,32]:a<60?[23,33]:[24,35]);
const sc=(v,[lo,hi],span)=>v>=lo&&v<=hi?10:36+Math.min(64,(v<lo?lo-v:v-hi)/span*64);
const stat=v=>v<35?"ok":v<60?"warn":"bad",LAB={ok:"No problem",warn:"Watch",bad:"Action"};
const bmi=()=>D.wt/Math.pow(D.ht/100,2);
const bump=()=>live?live.bump:0;
function M(){const d=D.day,p=Math.min(1,D.ex/120),b=r=>r*(d/30)*(1-.7*p);
 return{d,p,hip:b(1.5),spn:b(1),leg:b(1.1),fem:b(1.3),mus:14*sat(d,40)*(1-.7*p),sans:(8+62*sat(d,70))*(1-.15*p),plasma:11*sat(d,20),orth:(10+42*sat(d,35))*(1-.6*p),dose:(.5+bump())*d}}
const Z={
 head:{n:"Head and eyes",ref:"Sleep 7 to 9 h; SpO₂ 95 to 100%; no optic nerve swelling.",why:"Fluid shifts toward the head in microgravity. Many long-duration astronauts develop eye changes called SANS.",fix:"Lower-body negative pressure, regular eye scans, sleep protection.",
  c:m=>{const s=m.sans,sl=sc(D.sleep,[7,9],3),sp=sc(D.spo2,[95,100],5);return[Math.max(s,sl,sp),`Eye-pressure (SANS) risk ${r0(s)}/100 at day ${m.d}. Sleep ${f1(D.sleep)} h.`]}},
 lungs:{n:"Lungs",ref:"SpO₂ 95 to 100%.",why:"Lungs work well without gravity, but cabin CO₂ and dust irritate airways.",fix:"CO₂ scrubbers, filters, air monitoring, aerobic exercise.",
  c:m=>{const co=12+14*sat(m.d,90);return[Math.max(sc(D.spo2,[95,100],5),co),`SpO₂ ${D.spo2}%. Cabin CO₂ strain ${r0(co)}/100.`]}},
 heart:{n:"Heart and circulation",ref:"Resting HR 50 to 100 bpm; BP below 120/80.",why:"Blood volume falls and the heart is less loaded, so standing after landing can cause fainting.",fix:"Treadmill and cycling, fluid loading before re-entry, compression garments.",
  c:m=>[Math.max(m.orth,sc(D.hr,[50,100],30),sc(D.sys,[90,119],25),sc(D.dia,[60,79],20)),`Orthostatic risk ${r0(m.orth)}/100, plasma volume −${r0(m.plasma)}%. BP ${D.sys}/${D.dia}, HR ${D.hr}.`]},
 abdomen:{n:"Abdomen and body composition",ref:"BMI 18.5 to 24.9; body fat in the age and sex range.",why:"Weight and fat distribution change with diet, fluid shifts and muscle loss.",fix:"Calorie and protein planning, resistance exercise.",
  c:()=>{const b=bfRef(D.sex,D.age);return[Math.max(sc(bmi(),[18.5,24.9],6),sc(D.bf,b,10)),`BMI ${f1(bmi())} (18.5 to 24.9). Body fat ${D.bf}% (healthy ${b[0]} to ${b[1]}%).`]}},
 kidneys:{n:"Kidneys",ref:"Water at least 2.5 L per day in flight.",why:"Bone calcium reaches the urine, and dehydration lets it crystallize into stones.",fix:"Drink 2.5 L or more daily, potassium citrate, urine tests.",
  c:m=>{const v=cl((10+24*sat(m.d,60)+m.hip*3)*.9*(1+Math.min(.5,Math.max(0,(2.5-D.water)/2.5))));return[v,`Stone risk ${r0(v)}/100. Water ${f1(D.water)} L per day.`]}},
 spine:{n:"Spine",ref:"Bone T-score −1.0 or higher.",why:"Unloaded vertebrae lose mineral. Astronauts also grow taller in space and may get back pain.",fix:"Resistive exercise (ARED), vitamin D, calcium, core work.",
  c:m=>{const tp=D.t-m.spn/10;return[cl(m.spn*14+(tp<-1?30:0)),`Modelled loss −${f1(m.spn)}%, projected T-score ${f1(tp)}.`]}},
 pelvis:{n:"Pelvis and hips",ref:"Bone T-score −1.0 or higher; dose well under 600 mSv.",why:"Hips carry body weight on Earth, so they lose bone fastest in space. Marrow in the pelvis is also exposed to radiation.",fix:"Heavy squats and deadlifts, vitamin D, calcium, radiation shelter in storms.",
  c:m=>{const tp=D.t-m.hip/10;return[cl(m.hip*14+(tp<-1?30:0)),`Modelled loss −${f1(m.hip)}%, projected T-score ${f1(tp)}. Dose ${r0(m.dose)} mSv.`]}},
 arms:{n:"Arms and shoulders",ref:"Muscle mass stable.",why:"Arms are not weight-bearing, so loss is smaller than in the legs.",fix:"Upper-body resistance work, glove fit checks.",
  c:m=>[cl(m.mus*.7*5.2),`Upper-body muscle −${f1(m.mus*.7)}%.`]},
 thighs:{n:"Thighs and femur",ref:"Muscle and bone stable.",why:"The femur and thigh muscles are the largest load-bearing tissues, so they weaken fastest without daily use.",fix:"Squats, leg press, treadmill with harness. About two hours of daily exercise.",
  c:m=>[cl(Math.max(m.fem*14,m.mus*5.2)),`Femur bone −${f1(m.fem)}%, thigh muscle −${f1(m.mus)}%.`]},
 lowerlegs:{n:"Shins, calves and feet",ref:"Muscle and bone stable.",why:"Calf muscles and shin bones barely work in microgravity. Foot skin also thins.",fix:"Treadmill running, calf raises, protein and vitamin D.",
  c:m=>[cl(Math.max(m.leg*14,m.mus*1.15*5.2)),`Shin bone −${f1(m.leg)}%, calf muscle −${f1(m.mus*1.15)}%.`]}};
const K=Object.keys(Z),PIN={head:[100,26],lungs:[80,128],heart:[114,136],spine:[100,84],kidneys:[80,188],abdomen:[120,190],pelvis:[100,238],arms:[160,150],thighs:[76,300],lowerlegs:[72,410]};
const res=()=>{const m=M(),o={};K.forEach(k=>{const[v,t]=Z[k].c(m);o[k]={v,t,s:stat(v),bs:stat(v)}});
 const inf=scnInfo(D.id);symsOf(D).forEach(s=>{const k=SYMAREA[s];if(!k||!o[k])return;const sev=(s=="pain"||s=="fatigue")&&inf&&inf.symptomatic?inf.sev:0;o[k].v=Math.max(o[k].v,Math.min(95,58+sev*5));o[k].t+=` Symptom: ${SYMN[s]}${sev?" "+sev+"/10":""}.`;o[k].s=stat(o[k].v);o[k].sym=1});
 return o};
const SYMIC={pain:"head",fever:"thermo",nausea:"waves",congestion:"wind",cough:"chat",diarrhea:"drops",gi:"flame",sleep:"moon",skin:"bandage",eyes:"eye",fatigue:"battery"};
const SYMN={pain:"Headache / pain",fever:"Fever",nausea:"Nausea",congestion:"Congestion",cough:"Cough",diarrhea:"Diarrhea",gi:"Stomach / heartburn",sleep:"Sleep trouble",skin:"Skin / wound",eyes:"Eye irritation",fatigue:"Fatigue"};
const SYMAREA={pain:"head",congestion:"head",sleep:"head",eyes:"head",cough:"lungs",fever:"heart",fatigue:"heart",nausea:"abdomen",diarrhea:"abdomen",gi:"abdomen",skin:"arms"};
const SYMPIN={head:[136,24],lungs:[44,118],heart:[154,120],abdomen:[156,192],arms:[184,160]};
const AIC={head:"eye",lungs:"lungs",heart:"heart",abdomen:"scale",kidneys:"kidney",spine:"spine",pelvis:"bone",thighs:"bone",lowerlegs:"foot",arms:"dumbbell"};
const ORD=["arms","thighs","lowerlegs","abdomen","pelvis","head","spine","lungs","kidneys","heart"];
const scoreBadge=v=>`<div class="rdyb s-${hstat(v)}"><b>${v}%</b><small>Health · ${HLAB[hstat(v)]}</small></div>`;
const liveLoc=id=>{const i=scnInfo(id);return i?i.location:""};
function svg(mode,R,rank,eff){
 const clk=mode=="c";
 let z=ORD.map(k=>clk?`<use href="#z-${k}" class="z clk s-${R[k].s}${R[k].s!="ok"?" hot":""}${sel==k?" sel":""}" data-k="${k}" tabindex="0" role="button" aria-label="${Z[k].n}"><title>${Z[k].n}</title></use>`:`<use href="#z-${k}" class="z hot s-${R[k].s}" style="${R[k].s=="ok"?"fill:transparent;stroke:transparent":""}"/>`).join("");
 if(mode!="a")z+=rank.map((k,i)=>`<g class="pin s-${R[k].s}"${clk?` data-k="${k}"`:""}><circle cx="${PIN[k][0]}" cy="${PIN[k][1]}" r="8"/><text x="${PIN[k][0]}" y="${PIN[k][1]+3.3}">${i+1}</text></g>`).join("");
 if(eff&&eff.length){const cnt={};eff.forEach(s=>{const k=SYMAREA[s],n=cnt[k]=(cnt[k]||0)+1,pp=SYMPIN[k],y=pp[1]+(n-1)*22;z+=`<g class="sympin"${clk?` data-k="${k}"`:""}><title>${SYMN[s]}</title><circle cx="${pp[0]}" cy="${y}" r="10"/><svg x="${pp[0]-6.5}" y="${y-6.5}" width="13" height="13" viewBox="0 0 24 24">${IP[SYMIC[s]]}</svg></g>`})}
 return`<g transform="translate(0 4)"><use href="#L-${layer}"/>${z}</g>`}
function renderProfile(R){
 const a=AS(cur),p=D,eff=symsOf(p),rk=K.filter(k=>R[k].s!="ok").sort((x,y)=>R[y].v-R[x].v),hs=healthScore(R),loc=liveLoc(p.id);
 put("#profAv",avatar(a,104));
 put("#profInfo",`<h2>${p.name}</h2><p class="note">${a.role} · mission day ${p.day}${loc?" · "+loc:""}</p><div class="chips"><span>${p.age} years</span><span>${p.sex=="m"?"Male":"Female"}</span><span>${p.ht} cm</span><span>${p.wt} kg</span></div><div class="livev"><span class="lv">${ic("pulse")}<b>${p.hr}</b> bpm</span><span class="lv">${ic("gauge")}<b>${p.sys}/${p.dia}</b> mmHg</span><span class="lv">${ic("lungs")}<b>${p.spo2}</b>% SpO₂</span><span class="livetag"><i></i>Live · same as crew telemetry</span></div>`);
 put("#profScore",scoreBadge(hs));
 renderSelects();
 put("#symChips",Object.keys(SH).map(k=>{const on=eff.includes(k),auto=on&&!(p.sym||[]).includes(k);return `<button type="button" class="symchip${on?" on":""}" data-sym="${k}" aria-pressed="${on}"${auto?' disabled title="Reported by the crew monitor"':""}>${ic(SYMIC[k])}${SYMN[k]}${auto?'<span class="auto">crew monitor</span>':""}</button>`}).join(""));
 if(!sel||!R[sel])sel=rk[0]||null;
 put("#b1",svg("c",R,rk,eff));
 if(!sel)put("#detail",`<h3 class="ih">${ic("shield")}No problems found</h3><p class="note" style="margin:6px 0 0">Every area is in the healthy range. Tap any area on the body to check it.</p>`);
 else{const k=sel,x=R[k],z=Z[k],sy=eff.filter(s=>SYMAREA[s]==k);
  put("#detail",`<div class="gh"><div><p class="eyebrow">Selected area</p><h3 class="ih" style="font-size:20px">${tile(AIC[k],"s-"+x.s)}${z.n}</h3></div><span class="tag s-${x.s}">${LAB[x.s]}</span></div><p class="dline">${x.t}</p><div class="meter s-${x.s}"><i style="width:${x.v}%"></i></div><p class="note" style="margin:0 0 10px">Risk ${r0(x.v)}/100</p><ul class="icl"><li>${ic("ruler")}<div><b>Healthy</b>${z.ref}</div></li><li>${ic("help")}<div><b>Why</b>${z.why}</div></li><li>${ic("check")}<div><b>What helps</b>${z.fix}</div></li></ul>${sy.length?`<div class="chips symc" style="margin:10px 0">${sy.map(s=>`<span>${ic(SYMIC[s])}${SYMN[s]}</span>`).join("")}</div>`:""}<button class="btn pri" data-tab="health">Open health guide</button>`)}
 put("#probs",rk.length?`<h3 style="margin-bottom:8px">${rk.length} area${rk.length>1?"s":""} to watch</h3>`+rk.map((k,i)=>`<button type="button" class="prow s-${R[k].s}${sel==k?" on":""}" data-k="${k}"><span class="rk">${i+1}</span><span><b>${Z[k].n}</b><small>${R[k].t}</small></span><span class="tag s-${R[k].s}">${LAB[R[k].s]}</span></button>`).join(""):`<h3 class="ih">${ic("shield")}All areas healthy</h3>`);
 compare(R)}
function track(v,lo,hi,mn,mx,s){const p=x=>cl((x-mn)/(mx-mn)*100);return`<div class="track s-${s}"><div class="band" style="left:${p(lo)}%;width:${p(hi)-p(lo)}%"></div><div class="mk" style="left:${p(v)}%"></div></div>`}
function compare(R){
 const m=M(),b=bfRef(D.sex,D.age),dl=2.4*D.day/365;
 const rows=[["Measured now",null],
  ["scale","BMI",bmi(),18.5,24.9,14,36,""],["body","Body fat",D.bf,b[0],b[1],3,45,"%"],["pulse","Heart rate (live)",D.hr,50,100,35,120," bpm"],["gauge","Systolic pressure (live)",D.sys,90,119,80,160," mmHg"],["gauge","Diastolic pressure (live)",D.dia,60,79,50,100," mmHg"],["lungs","SpO₂ (live)",D.spo2,95,100,88,100,"%"],["moon","Sleep",D.sleep,7,9,3,10," h"],["bone","Bone T-score",D.t,-1,3,-3,2,""],["drop","Water intake",D.water,need(),3.5,.5,4.5," L"],["activity","Exercise",D.ex,120,180,0,180," min"],
  ["Modelled for mission day "+D.day,null],
  ["bone","Hip bone density change",-m.hip,-.5,0,-10,1,"%"],["dumbbell","Muscle mass change",-m.mus,-1,0,-20,1,"%"],["drop","Plasma volume change",-m.plasma,-3,3,-20,5,"%"],["radiation","Radiation dose so far",m.dose,0,dl,0,Math.max(20,m.dose*1.3)," mSv"]];
 const fm=v=>Number.isInteger(v)?String(v):(Math.abs(v)<100?f1(v):r0(v));
 put("#cmp",rows.map(x=>{if(x[1]===null)return`<div class="grp" style="margin-top:6px">${x[0]}</div>`;
  const v=x[2],out=v<x[3]||v>x[4],u=x[7];
  return`<div class="cmp2 ${out?"out":"in"}"><div class="cl"><b>${ic(x[0])}${x[1]}</b><span class="val">${fm(v)}${u}</span></div>${track(v,x[3],x[4],x[5],x[6],out?"bad":"ok")}<div class="ref">Healthy ${fm(x[3])} to ${fm(x[4])}${u}</div></div>`}).join(""))}
function nasa(){
 const m=M(),L=live,day=replayDay();
 put("#nk",[["flame","Flares",L.flr,`${L.x} X · ${L.m} M · max ${L.mx}`],["sun","CMEs",L.cme,"up to 2,650 km/s"],["activity","Storms",L.gst,`max Kp ${L.kp} (G4)`],["radiation","Particle events",L.sep,"+ ground level event"]].map(a=>`<div class="kpi"><small>${ic(a[0])}${a[1]}</small><b>${a[2]}</b><small class="sub2">${a[3]}</small></div>`).join(""));
 put("#swTl",`<div class="swtl" role="img" aria-label="Space weather timeline 4 to 18 September 2017">${swDays.map(d=>{let b=-1,bc="";DONKI.flr.filter(x=>x[0]==d).forEach(x=>{const c=cls(x[2]);if(c>b){b=c;bc=x[2]}});const h=b<0?0:Math.max(8,cl((b-290)/120*100)),s=DONKI.sep.some(x=>x[0]==d),g=DONKI.gst.find(x=>x[0]==d),c=DONKI.cme.some(x=>x[0]==d);
  return `<div class="swd${d==day?" now":""}" title="${+d} Sep 2017${bc?" · max flare "+bc:""}${c?" · CME":""}${s?" · particle event":""}${g?" · storm Kp "+g[1]:""}"><div class="swb"><i class="${bc[0]=="X"?"x":"m"}" style="height:${h}%"></i></div><div class="swm">${s?'<span class="sp"></span>':""}${g?'<span class="gs"></span>':""}${c?'<span class="cm"></span>':""}</div><small>${+d}</small></div>`}).join("")}</div><div class="swleg"><span><i class="x"></i>X flare</span><span><i class="m"></i>M flare</span><span><i class="cm"></i>CME</span><span><i class="sp"></i>Particle event</span><span><i class="gs"></i>Storm</span></div>`);
 const ev=swEvents(day);
 put("#swDay",`<div class="swday"><b>${ic("clock")}${+day} Sep 2017 · today in the replay</b>${ev.length?ev.map(e=>`<div class="swe s-${e[2]}">${ic(e[0])}<span>${e[1]}</span></div>`).join(""):`<div class="swe">${ic("shield")}<span>No flares, CMEs, storms or particle events recorded</span></div>`}</div>`);
 const pc=cl(m.dose/6),s=pc<35?"ok":pc<60?"warn":"bad";
 put("#dose",`<div class="meter s-${s}" style="height:10px"><i style="width:${pc}%"></i></div><p class="ih" style="margin:6px 0 0">${ic("radiation")}<span><b>${r0(m.dose)} mSv</b> so far for ${first(D.name)} · ${f1(m.dose/6)}% of the 600 mSv career budget</span></p><p class="note" style="margin:2px 0 0">Elevated space weather adds 0.15 mSv/day to the 0.5 mSv/day baseline.</p>`)}
const cls=c=>{const m=/^([ABCMX])(\d+(\.\d+)?)/.exec(c||"");return m?"ABCMX".indexOf(m[1])*100+ +m[2]:-1};
/* ===== Saved NASA DONKI / NOAA GOES space-weather events, 4–18 Sep 2017 (same days as the RR-9 radiation replay) =====
   Flares: GOES peak times, NOAA AR 2673 (STCE newsletter 15 Sep 2017). CME speeds: DONKI values (arXiv:1902.03969).
   Storms: Kp 8 on 7–8 Sep, Kp 6 on 12 Sep (STCE review). SEP onsets: arXiv:1902.03969 and STCE. Built in: no connection needed. */
const DONKI={from:"2017-09-04",to:"2017-09-18",
 flr:[["04","05:49","M1.2"],["04","15:30","M1.5"],["04","18:22","M1.0"],["04","19:37","M1.7"],["04","20:02","M1.5"],["04","20:33","M5.5"],["04","22:14","M2.1"],
  ["05","01:08","M4.2"],["05","03:51","M1.0"],["05","04:53","M3.2"],["05","06:40","M3.8"],["05","17:43","M2.3"],
  ["06","09:10","X2.2"],["06","12:02","X9.3"],["06","15:56","M2.5"],["06","19:30","M1.4"],["06","23:39","M1.2"],
  ["07","05:02","M2.4"],["07","09:54","M1.4"],["07","10:15","M7.3"],["07","14:36","X1.3"],["07","23:59","M3.9"],
  ["08","02:24","M1.3"],["08","03:43","M1.2"],["08","07:49","M8.1"],["08","15:47","M2.9"],["08","23:45","M2.1"],
  ["09","04:28","M1.1"],["09","11:04","M3.7"],["09","23:53","M1.1"],["10","16:06","X8.2"]],
 cme:[["04","20:36",1114,"M5.5 flare"],["06","12:24",1238,"X9.3 flare, Earth-directed halo"],["07","",null,"X1.3 flare, directed west"],["10","",2650,"X8.2 flare, halo with shock"]],
 gst:[["08",8,"G4","CME from 6 Sep arrived 7 Sep 22:34 UT"],["12",6,"G2","glancing blow from 10 Sep CME"]],
 sep:[["04","~22:00","passed 100 pfu on 5 Sep","M5.5 flare"],["06","~12:25","peak near 350 pfu (>10 MeV)","X9.3 flare"],["10","~16:05","hard spectrum, ground level enhancement","X8.2 flare"]]};
const swDays=Array.from({length:15},(_,i)=>String(4+i).padStart(2,"0"));
function donkiSummary(){const f=DONKI.flr;let mx="",best=-1;f.forEach(x=>{const c=cls(x[2]);if(c>best){best=c;mx=x[2]}});
 live={flr:f.length,x:f.filter(x=>x[2][0]=="X").length,m:f.filter(x=>x[2][0]=="M").length,cme:DONKI.cme.length,gst:DONKI.gst.length,sep:DONKI.sep.length,mx,kp:Math.max(...DONKI.gst.map(g=>g[1])),lvl:"Elevated",bump:.15,saved:true}}
function swEvents(d){const e=[];
 DONKI.flr.filter(x=>x[0]==d).forEach(x=>e.push(["flame",`${x[2]} flare, ${x[1]} UT`,x[2][0]=="X"?"bad":"warn"]));
 DONKI.cme.filter(x=>x[0]==d).forEach(x=>e.push(["sun",`CME${x[2]?" "+x[2].toLocaleString("en-US")+" km/s":""}${x[1]?", "+x[1]+" UT":""} · ${x[3]}`,"warn"]));
 DONKI.sep.filter(x=>x[0]==d).forEach(x=>e.push(["radiation",`Particle event (SEP) ${x[1]} UT · ${x[2]}`,"bad"]));
 DONKI.gst.filter(x=>x[0]==d).forEach(x=>e.push(["activity",`Geomagnetic storm Kp ${x[1]} (${x[2]}) · ${x[3]}`,x[1]>=7?"bad":"warn"]));
 return e}
function replayDay(){const t=window.CT?window.CT.env().rad.time:"2017-09-04";return String(new Date(t).getUTCDate()).padStart(2,"0")}
donkiSummary();
const G=[["",[["dash","Dashboard"]]],["Astronauts",[["profile","Astronaut profile"],["health","Health guide"]]],["Crew",[["alert","Exposure and care"],["env","Telemetry log"]]],["Reference",[["about","About and sources"]]]];
const T=G.flatMap(g=>g[1]);
$("#nav").innerHTML=G.map(g=>(g[0]?`<span class="ng">${g[0]}</span>`:"")+g[1].map(t=>`<button role="tab" data-t="${t[0]}" aria-selected="${t[0]=="dash"}">${t[1]}</button>`).join("")).join("");
function setMenu(o){const n=$("#nav");n.hidden=!o;$("#menuBtn").setAttribute("aria-expanded",o);$("#menuBtn").setAttribute("aria-label",o?"Close menu":"Open menu")}
function show(k){setMenu(false);window.scrollTo({top:0});document.querySelectorAll("#nav button").forEach(x=>x.setAttribute("aria-selected",x.dataset.t==k));T.forEach(t=>$("#t-"+t[0]).hidden=t[0]!=k);document.dispatchEvent(new CustomEvent("tabshown",{detail:k}))}
$("#menuBtn").addEventListener("click",e=>{e.stopPropagation();setMenu($("#nav").hidden)});
document.addEventListener("click",e=>{if(!e.target.closest(".menu-wrap"))setMenu(false)});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){setMenu(false);$("#menuBtn").focus()}});
$("#nav").addEventListener("click",e=>{const b=e.target.closest("button");if(b)show(b.dataset.t)});
$("#b1").addEventListener("click",e=>{const g=e.target.closest("[data-k]");if(g){sel=g.dataset.k;all()}});
$("#b1").addEventListener("keydown",e=>{if(e.key=="Enter"||e.key==" "){const g=e.target.closest("[data-k]");if(g){e.preventDefault();sel=g.dataset.k;all();const n=$(`#b1 .z[data-k=${sel}]`);if(n)n.focus()}}});
$("#probs").addEventListener("click",e=>{const g=e.target.closest("[data-k]");if(g){sel=g.dataset.k;all()}});
$("#symChips").addEventListener("click",e=>{const b=e.target.closest("[data-sym]");if(!b||b.disabled)return;const k=b.dataset.sym;D.sym=(D.sym||[]).includes(k)?D.sym.filter(x=>x!=k):[...(D.sym||[]),k];all();if(window.renderCrewUI)window.renderCrewUI()});
function all(){document.querySelectorAll(".seg button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.l==layer));const R=res(),hs=healthScore(R);
 if(!$("#t-profile").hidden)renderProfile(R);nasa();
 $("#rdy").textContent=hs+"%";$("#rdyLab").textContent="Health score · "+HLAB[hstat(hs)];
 $("#mname").textContent=AS(cur).role+" · mission day "+D.day;$("#wx").textContent="Space weather: "+live.lvl+" (NASA DONKI)";
 if(!$("#t-health").hidden)renderHealthGuide(R);renderDash(R,hs)}
document.addEventListener("tabshown",e=>{if(e.detail=="profile"||e.detail=="health")all()});
window.refreshAstro=()=>all();
$("#ribsL").innerHTML=[26,31,34,36,36,35,32,28,24,20].map((w,i)=>{const y=90+i*8.2;return`<path d="M98 ${y}C${100-w*.5} ${y-6} ${100-w} ${y+4} ${102-w} ${y+16}C${100-w*.6} ${y+20} ${100-w*.2} ${y+16} 98 ${y+10}"/>`}).join("");
$("#spineG").innerHTML=Array.from({length:24},(_,i)=>{const w=i<7?9:i<19?11:14;return`<rect x="${100-w/2}" y="${56+i*6.4}" width="${w}" height="5" rx="2"/>`}).join("");
document.querySelectorAll(".seg").forEach(s=>s.innerHTML=LY.map(l=>`<button data-l="${l[0]}" aria-pressed="false">${l[1]}</button>`).join(""));
document.addEventListener("click",e=>{const b=e.target.closest(".seg button");if(b){layer=b.dataset.l;all()}});
/* ================= Health guide: medicine and food ================= */
const need=()=>D.sex=="f"?2.1:2.5,lowW=()=>D.water<need();
const waterMsg=()=>`This astronaut’s water intake is ${f1(D.water)} L per day against a NASA minimum of ${need()} L.`;
const HG=[
{k:"pain",n:"Headache and pain",
 what:"Headaches and aches are among the most common problems in flight. In a review of US astronauts on the ISS, more than half reported at least one headache.",
 meds:[
  {n:"Acetaminophen (paracetamol)",t:"otc",how:"Eases pain and lowers fever. Gentle on the stomach.",watch:"Too much strains the liver. Many cold and flu products also contain it, so count every source."},
  {n:"Ibuprofen (an NSAID)",t:"otc",how:"Eases pain and inflammation, such as muscle or back aches.",watch:"Can irritate the stomach and strain the kidneys, especially when you are dehydrated. Take it with food."},
  {n:"Aspirin",t:"otc",how:"Pain relief and fever reduction.",watch:"Raises bleeding risk and irritates the stomach, so it is usually a second choice."}],
 care:["Drink water first. Mild dehydration alone can cause a headache.","Check the habitat. On the Dashboard, a rising cabin CO₂ trend can cause headaches, and several people with similar headaches in one room is worth reporting.","Rest, dim the light and ease neck and shoulder tension.","Do not skip meals."],
 red:"A sudden severe headache. Headache with fever and a stiff neck, vision change, confusion, weakness or fainting. Any headache after a head injury. Several crew members getting headaches together should be reported at once.",
 twin:()=>{const R=res(),a=[];if(lowW())a.push(waterMsg());if(R.kidneys.s!="ok")a.push(`Kidney stone risk is flagged at ${r0(R.kidneys.v)}/100.`);return a.length?a.join(" ")+" Ibuprofen and other NSAIDs are harder on the kidneys when you are dehydrated, so acetaminophen is usually the gentler first choice. Ask the flight surgeon if pain continues.":""},
 fwhy:"Dehydration, low blood sugar and caffeine swings are common headache triggers, and all three are easy to fix.",
 eat:["Water, sipped steadily","Regular small meals with protein and whole grains","Your usual amount of coffee or tea, not more"],
 avoid:["Skipped meals","Large amounts of caffeine, or stopping it suddenly if you drink a lot","Very salty food that makes you thirsty"],
 ft:()=>lowW()?waterMsg()+" Dehydration is one of the easiest headache triggers to fix.":""},
{k:"fever",n:"Fever and infection",
 what:"Fever is the body’s response to infection. In a closed habitat, infections can spread between crew, so early reporting matters.",
 meds:[
  {n:"Acetaminophen (paracetamol)",t:"otc",how:"Lowers fever and eases aches so you can rest and drink.",watch:"Stay within the label limit and count other products that contain it."},
  {n:"Ibuprofen (an NSAID)",t:"otc",how:"Lowers fever and eases aches and inflammation.",watch:"Can strain the kidneys when you are dehydrated, and fever makes dehydration more likely."},
  {n:"Antibiotics",t:"rx",how:"Treat bacterial infections only. They do nothing for colds or flu, which are usually viral.",watch:"A clinician must choose the drug. Wrong use causes side effects and resistance."}],
 care:["Rest and keep fluids up.","Dress lightly and use a cool cloth for comfort.","Keep apart from other crew and wash hands often if infection is suspected."],
 red:"Fever lasting more than a few days. Fever with trouble breathing, chest pain, stiff neck, rash, confusion or severe weakness.",
 twin:()=>lowW()?`Fever increases fluid loss, and ${waterMsg().replace("This astronaut’s","this astronaut’s")} Raise fluids first.`:"",
 fwhy:"Fever raises your fluid and energy needs. Drinking matters more than eating while it lasts.",
 eat:["Extra water, diluted juice or broth","Oral rehydration drinks","Light foods as appetite allows: soup, rice, toast, fruit, yoghurt"],
 avoid:["Large amounts of caffeine, which dry you out","Heavy, greasy meals","Forcing food down. Fluids come first for a day or two"]},
{k:"nausea",n:"Nausea and space motion sickness",
 what:"Most people feel some motion sickness in the first days of weightlessness. Nausea can also come from infection or food.",
 meds:[
  {n:"Prescription anti-nausea medicine (such as promethazine)",t:"rx",how:"Used for space motion sickness, in forms that still work when you are vomiting.",watch:"Causes drowsiness and slows reactions. Use only on flight surgeon instruction."},
  {n:"Antihistamine motion-sickness tablets (such as meclizine or dimenhydrinate)",t:"otc",how:"Reduce motion-sickness nausea on Earth.",watch:"Cause drowsiness. Oral tablets have been less effective in spaceflight, because nausea slows how the stomach absorbs them."}],
 care:["Move your head slowly for the first few days.","Keep a fixed visual reference, such as the “up” direction of the module.","Sip cool water and nibble plain crackers.","Get fresh airflow and avoid stuffy, high-CO₂ areas."],
 red:"Vomiting that stops you keeping any fluid down, vomiting blood, severe belly pain, or dizziness that does not settle after the first days.",
 twin:()=>{const m=M();return m.orth>=35?`This astronaut’s orthostatic risk is ${r0(m.orth)}/100, with plasma volume modelled ${r0(m.plasma)}% lower. Vomiting or poor intake lowers blood volume further, so watch for dizziness on standing.`:""},
 fwhy:"A calm stomach tolerates small amounts better than big meals, and sipping prevents dehydration.",
 eat:["Small, frequent bland meals: crackers, toast, plain rice, banana","Cool sips of water, ginger tea or ginger candy","Cold or room-temperature food, which smells less"],
 avoid:["Greasy, spicy or very sweet food","Strong food smells","Large meals and gulping drinks"]},
{k:"congestion",n:"Congestion and allergy",
 what:"Fluid shifts toward the head in microgravity cause a stuffy feeling. In a review of US ISS crew, more than half treated congestion or allergy symptoms during their missions.",
 meds:[
  {n:"Non-drowsy antihistamines (loratadine, fexofenadine)",t:"otc",how:"Calm sneezing, itchy eyes and a runny nose from allergy.",watch:"Less helpful for a blocked nose caused by fluid shifts."},
  {n:"Oral decongestant (pseudoephedrine)",t:"otc",how:"Shrinks the swollen lining of the nose.",watch:"Can raise blood pressure and heart rate, and disturb sleep."},
  {n:"Decongestant nasal spray (oxymetazoline)",t:"otc",how:"Fast relief of a blocked nose.",watch:"Use for only a few days. Longer use makes congestion rebound."},
  {n:"Steroid nasal spray (such as mometasone)",t:"mix",how:"Reduces nasal swelling over several days of regular use.",watch:"Works slowly, so it is not for instant relief."},
  {n:"Drowsy antihistamine (diphenhydramine)",t:"otc",how:"Strong allergy relief. An injectable form is kept for allergic reactions.",watch:"Causes marked drowsiness, so avoid it when you need to work."},
  {n:"Saline nasal spray",t:"otc",how:"Loosens mucus and rinses out dust.",watch:"No real side effects. Safe to repeat."}],
 care:["Use saline spray or rinse several times a day.","Drink warm fluids.","Keep filters and surfaces clean. Dust does not settle in microgravity and floats into the nose and eyes."],
 red:"Swelling of the lips, tongue or face, wheezing, trouble breathing or a spreading rash. This may be a severe allergic reaction and needs emergency treatment with epinephrine right away. Also report facial pain with fever lasting several days.",
 twin:()=>(D.sys>=120||D.hr>100)?`This astronaut’s blood pressure is ${D.sys}/${D.dia} and heart rate ${D.hr} bpm. Oral decongestants such as pseudoephedrine can raise both, so a short nasal-spray course or an antihistamine is usually considered first.`:"",
 fwhy:"Fluids thin mucus so it drains more easily, and congestion dulls taste, so gentle seasoning can help you keep eating.",
 eat:["Warm drinks, soup and broth","Honey in warm tea (adults)","Fruit and vegetables rich in vitamin C"],
 avoid:["Large amounts of caffeine, which can dry you out","Letting fluids slip, since thin mucus drains better when you are hydrated"]},
{k:"cough",n:"Cough and sore throat",
 what:"Dry air, dust and fluid shifts irritate the airways, and infections cause cough and sore throat too.",
 meds:[
  {n:"Cough suppressant (dextromethorphan)",t:"otc",how:"Calms a dry, tickly cough so you can rest.",watch:"Not for a wet cough that brings up mucus. Check cold products that already contain it."},
  {n:"Expectorant (guaifenesin)",t:"otc",how:"Thins mucus so it is easier to cough up.",watch:"Works best when you drink plenty of fluid."},
  {n:"Throat lozenges and sprays",t:"otc",how:"Soothe a sore throat.",watch:"Ease symptoms only. They do not treat an infection."},
  {n:"Acetaminophen (paracetamol)",t:"otc",how:"Eases sore-throat pain and fever.",watch:"Stay within the label limit."}],
 care:["Drink warm fluids.","Take a spoon of honey in warm water (adults).","Rest your voice and keep the air in your sleeping area clean."],
 red:"Shortness of breath, chest pain, coughing up blood, blue lips, fever lasting more than a few days, or a sore throat with trouble swallowing or drooling.",
 twin:()=>D.spo2<95?`This astronaut’s SpO₂ is ${D.spo2}%, below the healthy 95 to 100% range. A cough with low oxygen should be reported to the flight surgeon promptly.`:"",
 fwhy:"Warm, soft, moist food and drink soothe an irritated throat. Hot, dry or sharp food makes it worse.",
 eat:["Warm fluids: tea, broth","A spoon of honey in warm water (adults)","Soft, moist foods"],
 avoid:["Very hot drinks that scald a sore throat","Dry, scratchy foods such as crackers or chips","Acidic or spicy food that stings"]},
{k:"diarrhea",n:"Diarrhea",
 what:"Usually caused by food or infection. In flight, the main danger is dehydration.",
 meds:[
  {n:"Oral rehydration solution",t:"otc",how:"Replaces water, sugar and salts together. This is the most important treatment.",watch:"Plain water alone does not replace lost salts. Use the product as the package says."},
  {n:"Loperamide",t:"otc",how:"Slows the gut and reduces how often you go.",watch:"Do not use with fever or bloody stool. Stop and get advice if it does not settle in about two days."}],
 care:["Take small sips often.","Wash hands and clean shared surfaces. Infections spread quickly in a closed habitat."],
 red:"Blood or black stool, fever, severe belly pain, dizziness on standing, very dark urine, or diarrhea lasting more than two days.",
 twin:()=>`${waterMsg()} Kidney stone risk is ${r0(res().kidneys.v)}/100. Fluid loss makes dehydration and stones more likely, so replacing fluids is the priority.`,
 fwhy:"The goal is to replace lost water and salts while giving the gut bland food it can digest.",
 eat:["Oral rehydration solution, or water and broth in small sips","Banana, plain rice, applesauce, toast, boiled potato","Return to normal food gradually as stools firm up"],
 avoid:["Greasy, spicy or fried food","Sugary drinks and sugar-alcohol sweeteners","Large amounts of caffeine","Raw, high-fiber food until better. Milk can bother some people for a few days"]},
{k:"gi",n:"Constipation and heartburn",
 what:"Constipation is common in spaceflight, linked to low fluid intake and a changed gut. Heartburn and stomach upset also occur.",
 meds:[
  {n:"Fiber supplement",t:"otc",how:"Bulks the stool gently.",watch:"Needs plenty of fluid, or it makes things worse."},
  {n:"Stimulant laxative (bisacodyl)",t:"otc",how:"Triggers the bowel for short-term constipation.",watch:"Can cause cramps. Do not use it daily."},
  {n:"Antacid",t:"otc",how:"Neutralizes stomach acid quickly for heartburn.",watch:"Relief is short. It can interfere with other medicines taken at the same time."},
  {n:"Acid reducer (H2 blocker or proton-pump inhibitor)",t:"mix",how:"Lowers stomach acid for hours.",watch:"If you need it for more than a couple of weeks, ask a clinician."}],
 care:["Drink fluids through the day.","Eat fiber-rich food and keep exercising.","Take smaller, slower meals for heartburn."],
 red:"Chest pain (it can be the heart), black or bloody stool, vomiting blood, trouble swallowing, severe belly pain, or constipation with vomiting and a swollen belly.",
 twin:()=>lowW()?`${waterMsg()} Low fluid intake is a common cause of constipation, so fix that first.`:"",
 fwhy:"Fiber and fluid keep the gut moving. For heartburn, smaller meals and fewer triggers matter more than any single food.",
 eat:["Fluids through the day","High-fiber food: whole grains, beans, fruit, vegetables, prunes","Smaller, slower meals for heartburn"],
 avoid:["Low fluid intake","Large, late or fatty meals","Spicy, acidic or caffeinated food if heartburn is the problem"]},
{k:"sleep",n:"Sleep trouble",
 what:"Sleep loss is one of the most common reasons astronauts use medicine on the ISS.",
 meds:[
  {n:"Melatonin",t:"otc",how:"Signals night to the body clock and helps shift sleep timing.",watch:"Take it at a consistent time. It can cause vivid dreams or morning grogginess."},
  {n:"Prescription sleep aids (such as zolpidem or zaleplon)",t:"rx",how:"Short-term help falling asleep.",watch:"Can leave you drowsy or forgetful the next day. Use only on flight surgeon direction, and not before critical tasks."}],
 care:["Keep a fixed sleep schedule and use dim, warm light before bed.","Cut caffeine in the hours before sleep.","Exercise earlier in the day.","Use earplugs and a comfortable sleep restraint to reduce noise and discomfort."],
 red:"Several nights with almost no sleep together with mood change, confusion or hallucinations. Loud snoring with pauses in breathing. Poor sleep together with persistent morning headaches, which can point to high cabin CO₂.",
 twin:()=>D.sleep<7?`This astronaut sleeps ${f1(D.sleep)} h per night, below the healthy 7 to 9 h. Fix timing and light before relying on sleep aids, which can leave you drowsy during the next day’s tasks.`:"",
 fwhy:"Sleep responds to what and when you eat. A light evening meal and early caffeine cut-off help most.",
 eat:["A light evening meal","A small snack with carbohydrate and protein if hungry, such as yoghurt or banana with nuts","Warm milk or herbal tea"],
 avoid:["Caffeine within several hours of bed","Heavy, spicy or very sugary late meals","Large amounts of fluid just before sleep"],
 ft:()=>D.sleep<7?`This astronaut sleeps ${f1(D.sleep)} h per night. Keep caffeine early in the day and the evening meal light.`:""},
{k:"skin",n:"Skin rash and minor wounds",
 what:"Skin in space is dry and irritated, and small cuts and rashes are common. Healing can be slower.",
 meds:[
  {n:"Hydrocortisone 1% cream",t:"otc",how:"Calms an itchy, red rash.",watch:"Short courses only. Not for infected or broken skin."},
  {n:"Antibiotic ointment (such as bacitracin)",t:"otc",how:"Helps prevent infection in a clean, minor cut.",watch:"Stop if a rash develops. Not for deep wounds."},
  {n:"Moisturizer",t:"otc",how:"Eases dry, flaky skin.",watch:"Choose fragrance-free products if your skin is irritated."}],
 care:["Clean a cut with clean water and mild soap, then cover it.","Keep fingernails short to avoid scratching.","Report a rash that appears after a new medicine."],
 red:"Spreading redness, pus, red streaks, fever, a deep wound that gapes open, or rapid swelling or blistering.",
 twin:()=>"",
 fwhy:"Healing needs protein, vitamin C and zinc, and enough fluid to keep skin supple.",
 eat:["Enough protein: eggs, fish, poultry, beans, dairy","Vitamin C foods: citrus, peppers, berries","Zinc foods: meat, seeds, whole grains, and water through the day"],
 avoid:["Very low-calorie eating while a wound heals","Sugary snacks in place of protein-rich food"]},
{k:"eyes",n:"Eye irritation",
 what:"Dust floats in microgravity and gets into eyes, and dry cabin air irritates them.",
 meds:[
  {n:"Lubricating eye drops",t:"otc",how:"Ease dryness and a gritty feeling.",watch:"Do not touch the dropper tip to the eye."},
  {n:"Antihistamine eye drops (such as olopatadine)",t:"mix",how:"Relieve itchy, allergic eyes.",watch:"Can sting briefly."},
  {n:"Saline eyewash",t:"otc",how:"Flushes out dust and particles.",watch:"Use clean solution only."}],
 care:["Avoid rubbing your eyes.","Wash your hands before touching them.","Remove contact lenses if the eyes are irritated."],
 red:"Any change in vision, eye pain, light sensitivity, a particle you cannot flush out, or redness with discharge. Vision changes in flight can be a sign of eye-pressure changes (SANS) and should always be reported.",
 twin:()=>M().sans>=35?`This astronaut’s eye-pressure (SANS) risk is ${r0(M().sans)}/100. Report any vision change to the flight surgeon rather than treating it as simple dryness.`:"",
 fwhy:"Diet supports eye health but cannot treat eye-pressure changes. Report vision changes rather than adjusting food.",
 eat:["Plenty of water","Colorful vegetables and fruit, which supply vitamins A, C and E","Fish or nuts for omega-3 fats"],
 avoid:["Dehydration","Relying on food to fix a vision change. It needs a medical check"]}
];
["fever","nausea","diarrhea","gi"].forEach(k=>{const c=HG.find(x=>x.k==k);c.ft=c.twin});
const hgSel={meds:"pain",food:"pain"};
const ul=a=>`<ul>${a.map(x=>`<li>${x}</li>`).join("")}</ul>`;
const TL={otc:["Over the counter","s-ok"],rx:["Prescription","s-warn"],mix:["OTC or prescription","s-warn"]};
/* ---------- Care plans: symptoms, body areas, crew ---------- */
const planOpen=new Set(),recOpen=new Set();
const medHtml=a=>a.map(m=>`<div class="med"><div class="mh"><b>${m.n}</b><span class="tag ${TL[m.t][1]}">${TL[m.t][0]}</span></div><p><b>How it helps:</b> ${m.how}</p><p><b>Watch for:</b> ${m.watch}</p></div>`).join("");
const bone={
 meds:[
  {n:"Vitamin D supplement",t:"otc",how:"Replaces the vitamin D your skin cannot make without sunlight. NASA’s target is 25 µg (1,000 IU) a day.",watch:"Too much raises blood calcium, so stay near the target unless a clinician advises more."},
  {n:"Calcium supplement (only if food falls short)",t:"otc",how:"Fills the gap when diet gives less than 1,000 to 1,200 mg a day.",watch:"Food first. Total intake should stay under 2,500 mg a day, and extra calcium raises stone risk when you are dehydrated."},
  {n:"Acetaminophen (paracetamol) for bone or back ache",t:"otc",how:"Eases aches without stressing the kidneys.",watch:"Stay within the label limit."},
  {n:"Bone-protecting prescription drugs (such as bisphosphonates)",t:"rx",how:"Have been studied in astronauts to slow bone loss.",watch:"A clinician decision only. They do not replace exercise and nutrition."}],
 note:"Heavy resistance exercise plus good vitamin D and calcium status is what has been shown to reduce bone loss on long ISS missions.",
 care:["Do the resistive exercise sessions every day.","Get vitamin D and calcium from food and supplements as the plan says.","Report new back, hip or bone pain."],
 eat:["Dairy or fortified alternatives, canned fish with soft bones, tofu set with calcium","Fatty fish, eggs and fortified foods for vitamin D","Leafy greens and broccoli for vitamin K","Protein at every meal"],
 avoid:["Salty foods, which pull calcium out in urine","Skipping meals or cutting calories sharply","Large amounts of caffeine"],
 red:"Sudden bone pain after a minor knock, pain that stops you bearing weight, or severe back pain with numbness or weakness."};
const muscle={
 meds:[
  {n:"Acetaminophen (paracetamol)",t:"otc",how:"Eases muscle soreness after hard exercise.",watch:"Stay within the label limit."},
  {n:"Ibuprofen (an NSAID)",t:"otc",how:"Eases soreness and inflammation.",watch:"Can strain the stomach and kidneys, especially when you are dehydrated."}],
 note:"No medicine rebuilds muscle. Exercise and protein do.",
 care:["Keep to the full exercise plan, including resistance work.","Warm up and stretch before sessions.","Rest sore muscles for a day, not a week."],
 eat:["Protein at every meal and after resistance exercise: eggs, fish, poultry, dairy, beans","Enough total calories to match your exercise","Water during sessions"],
 avoid:["Crash dieting","Skipping meals around training","Very salty snacks"],
 red:"Sudden severe muscle pain with dark urine, a swollen hard muscle, or a muscle that suddenly stops working."};
const AREA={
 head:{meds:[
  {n:"Lubricating eye drops",t:"otc",how:"Ease dry, gritty eyes.",watch:"Do not touch the dropper tip to the eye."},
  {n:"Acetaminophen (paracetamol)",t:"otc",how:"Eases headache.",watch:"Stay within the label limit."},
  {n:"Melatonin",t:"otc",how:"Helps shift sleep timing when sleep is short.",watch:"Take it at a consistent time. It can cause morning grogginess."}],
  note:"Eye-pressure changes (SANS) cannot be treated with tablets or diet. Any blurry vision or eye swelling must be reported so it can be scanned and managed.",
  care:["Report any vision change at once.","Protect sleep with a fixed schedule and dim light.","Follow the mission’s fluid-shift countermeasures, such as lower-body negative pressure if available."],
  eat:["Water through the day","Regular meals","Caffeine early in the day only"],avoid:["Caffeine late in the day","Skipped meals"],
  red:"Blurred or double vision, new floaters, eye pain, or a severe or worsening headache.",links:["eyes","sleep","pain"]},
 lungs:{meds:[
  {n:"Saline nasal spray",t:"otc",how:"Loosens mucus and rinses out dust.",watch:"No real side effects."},
  {n:"Cough relief (dextromethorphan or guaifenesin)",t:"otc",how:"Calms a dry cough or thins mucus. Use only if you have a cough.",watch:"Check cold products that already contain these."}],
  note:"A low oxygen reading (SpO₂ under 95%) is not something to self-treat. Report it to the flight surgeon.",
  care:["Check cabin CO₂ and airflow.","Keep filters clean and dust down.","Keep up planned aerobic exercise."],
  eat:["Warm fluids","Fruit and vegetables for vitamin C"],avoid:["Dry, scratchy food if your throat is irritated","Large amounts of caffeine"],
  red:"Shortness of breath at rest, chest pain, blue lips or coughing up blood.",links:["cough","congestion"]},
 heart:{meds:[
  {n:"Midodrine (prescription)",t:"rx",how:"Raises blood pressure on standing. It has been used for faintness after spaceflight.",watch:"A clinician decision only. It can raise blood pressure when lying down."}],
  note:"Most circulation changes are managed with fluids, exercise and compression garments rather than medicine. Check cold medicines too: decongestants such as pseudoephedrine raise blood pressure and heart rate.",
  care:["Do the planned treadmill and cycling sessions.","Do fluid loading before re-entry, as the mission plan directs.","Stand up slowly and sit down if you feel faint."],
  eat:["Water and oral rehydration drinks","Fruit and vegetables for potassium","Regular meals"],avoid:["Large amounts of caffeine, which raise heart rate","Extra salt, except as the pre-landing plan directs"],
  red:"Fainting, chest pain, a racing or irregular heartbeat that does not settle, or shortness of breath."},
 abdomen:{meds:[],
  note:"No medicine is needed for weight or body-fat changes. Food and exercise are the treatment, and a clinician can check for other causes if weight changes quickly.",
  care:["Track weight and body composition weekly.","Keep resistance and aerobic exercise going."],
  eat:()=>bmi()<18.5?["Calorie-dense foods: nuts, dairy, olive oil, whole grains","Protein at every meal","Snacks between meals"]:["Protein, vegetables and fiber-rich whole grains","Water before meals","Measured portions of nuts and dairy"],
  avoid:["Sugary drinks and snacks","Very salty foods","Skipping meals"],
  red:"Rapid unintended weight loss, persistent belly pain, or vomiting that does not stop."},
 kidneys:{meds:[
  {n:"Potassium citrate (prescription)",t:"rx",how:"Makes urine less likely to form calcium stones.",watch:"A clinician decision, with blood and urine checks. Can upset the stomach."},
  {n:"Acetaminophen (paracetamol) for pain",t:"otc",how:"A gentler choice for pain while fluids are low.",watch:"Stay within the label limit. Ask the flight surgeon before using NSAIDs."}],
  note:"Fluids are the main treatment. Medicine is secondary.",
  care:["Drink at least the NASA minimum every day, and more when you exercise.","Keep sodium low.","Follow urine and blood checks."],
  eat:["Water through the day","Citrus fruit or lemon water, which raises urine citrate","Calcium from food. Do not cut it, because food calcium helps block stone-forming oxalate"],
  avoid:["Salty foods","Skipping drinks during exercise","Large supplement doses without advice"],
  red:"Severe pain in the side or back, blood in urine, fever with urinary pain, or being unable to pass urine."},
 spine:{...bone,note:bone.note+" Back pain is common in flight, so gentle stretching and core work help."},
 pelvis:bone,
 arms:{...muscle,note:muscle.note+" Arm loss is smaller than in the legs."},
 thighs:{...bone,meds:[bone.meds[0],bone.meds[1],muscle.meds[0],muscle.meds[1]],note:"Legs lose bone and muscle fastest. Daily squat, treadmill and leg-press sessions matter most.",care:muscle.care.concat(bone.care.slice(1)),eat:bone.eat.slice(0,3).concat(muscle.eat[0]),red:muscle.red+" "+bone.red},
 lowerlegs:null};
AREA.lowerlegs={...AREA.thighs,links:["skin"]};
/* ---------- Health guide: short, icon-based, per astronaut ---------- */
const SH={
 pain:{n:"Headache and pain",med:["Acetaminophen","Ibuprofen (with food)"],do:["Drink water first","Rest in dim light","Check cabin CO₂"],eat:["Water","Small regular meals","Usual coffee only"],no:["Skipped meals","Too much caffeine"],red:"Sudden severe headache, stiff neck, vision change, confusion"},
 fatigue:{n:"Fatigue",med:[],do:["Rest 20 to 30 min","Move to fresh air","Light tasks only"],eat:["Water","Balanced snack","Protein + whole grains"],no:["Energy drinks","Skipped meals"],red:"Confusion, breathlessness, chest pain, fainting"},
 fever:{n:"Fever and infection",med:["Acetaminophen","Ibuprofen (with food)"],do:["Rest","Keep away from crew","Light clothing"],eat:["Water","Broth or soup","Oral rehydration drink"],no:["Heavy greasy meals","Too much caffeine"],red:"High fever, stiff neck, trouble breathing, confusion"},
 nausea:{n:"Nausea and motion sickness",med:["Anti-nausea (prescription)","Motion-sickness tablets"],do:["Move head slowly","Fixed visual reference","Fresh airflow"],eat:["Cool water sips","Plain crackers","Ginger tea"],no:["Greasy or spicy food","Strong smells"],red:"Cannot keep fluids down, vomiting blood, severe belly pain"},
 congestion:{n:"Congestion and allergy",med:["Non-drowsy antihistamine","Saline nasal spray"],do:["Saline rinse","Rest","Check air filters"],eat:["Warm drinks","Soup","Vitamin C fruit"],no:["Dehydration"],red:"Trouble breathing, face swelling, high fever"},
 cough:{n:"Cough and sore throat",med:["Throat lozenges","Cough suppressant or expectorant"],do:["Rest the voice","Check air quality","Isolate if feverish"],eat:["Warm tea or broth","Honey in warm water","Soft moist food"],no:["Very hot drinks","Dry scratchy food"],red:"Trouble breathing, chest pain, coughing blood"},
 diarrhea:{n:"Diarrhea",med:["Oral rehydration solution","Loperamide"],do:["Sip fluids often","Wash hands well","Rest"],eat:["Rehydration drink","Rice, banana, toast","Water and broth"],no:["Greasy or spicy food","Sugary drinks","Caffeine"],red:"Blood in stool, fever, cannot drink, lasts over 2 days"},
 gi:{n:"Stomach and heartburn",med:["Antacid","Fibre supplement"],do:["Smaller slower meals","Drink through the day","Stay upright after eating"],eat:["Water","Whole grains, beans, fruit","Prunes"],no:["Large late meals","Spicy or fatty food"],red:"Black stool, vomiting blood, chest pain, severe belly pain"},
 sleep:{n:"Sleep trouble",med:["Melatonin"],do:["Fixed bedtime","Dim lights at night","Quiet, cool sleep area"],eat:["Light evening meal","Warm milk or herbal tea"],no:["Caffeine near bedtime","Heavy late meals"],red:"Long spells without sleep, low mood, hallucinations"},
 skin:{n:"Skin rash and wounds",med:["Hydrocortisone 1% cream","Antibiotic ointment","Moisturiser"],do:["Clean gently","Keep covered","Do not scratch"],eat:["Protein foods","Citrus and peppers","Water"],no:["Very low-calorie eating"],red:"Spreading redness, pus, fever, face or throat swelling"},
 eyes:{n:"Eye irritation",med:["Lubricating eye drops","Saline eyewash"],do:["Do not rub","Wash hands first","Report any vision change"],eat:["Water","Colourful veg and fruit","Fish or nuts"],no:["Dehydration"],red:"Vision change, eye pain, light sensitivity, discharge"}};
const AH={
 head:{med:["Lubricating eye drops","Melatonin (sleep)"],do:["Eye scans","Lower-body pressure","Protect sleep"],eat:["Water","Fish or nuts","Colourful veg"]},
 lungs:{do:["Check cabin CO₂","Aerobic exercise","Clean filters"],eat:["Warm fluids","Vitamin C fruit"]},
 heart:{do:["Cardio exercise","Compression garments","Fluids before re-entry"],eat:["Water + electrolytes","Less salt"]},
 abdomen:{do:["Resistance exercise","Plan calories"],eat:["Lean protein","Vegetables + fibre"],no:["Sugary snacks"]},
 kidneys:{do:["Drink steadily","Weight-bearing exercise"],eat:["Water","Citrus","Calcium from food"],no:["Salty food"]},
 spine:{med:["Calcium + vitamin D (if diet is short)"],do:["Core work","Gentle stretching"],eat:["Dairy or fortified food","Leafy greens","Oily fish"]},
 pelvis:{med:["Calcium + vitamin D (if diet is short)"],do:["Squats","Heavy resistance","Treadmill"],eat:["Dairy or fortified food","Leafy greens","Oily fish"]},
 thighs:{med:["Calcium + vitamin D (if diet is short)"],do:["Squats","Leg press","Treadmill"],eat:["Protein each meal","Dairy","Oily fish"]},
 lowerlegs:{do:["Calf raises","Treadmill running"],eat:["Protein","Vitamin D foods"]},
 arms:{do:["Resistance bands","Push and pull sets"],eat:["Protein","Eggs, beans, dairy"]}};
function personal(k){
 const n=need();
 if(["pain","fever","nausea","diarrhea","gi","cough","fatigue"].includes(k)&&D.water<n)return `Water is low (${f1(D.water)} of ${n} L). Fluids first.`;
 if(k=="fatigue"&&D.sleep<7)return `Sleeping only ${f1(D.sleep)} h. Aim for 7 to 9 h.`;
 if(k=="congestion"&&(D.sys>=120||D.hr>100))return `Blood pressure ${D.sys}/${D.dia}: avoid decongestant pills.`;
 if(k=="sleep"&&D.sleep<7)return `Sleeping only ${f1(D.sleep)} h. Aim for 7 to 9 h.`;
 if(k=="eyes"&&M().sans>=35)return `Eye-pressure risk ${r0(M().sans)}/100. Report vision changes.`;
 if(k=="pain"&&res().kidneys.s!="ok")return "Kidney stone risk is up. Avoid ibuprofen when dehydrated.";
 if(k=="pain"&&D.hr>D.hr0+6)return `Heart rate is up to ${D.hr} bpm from ${D.hr0}. Rest and recheck.`;
 return ""}
const hl=(i,l,a,c="")=>a&&a.length?`<div class="hl">${ic(i)}<div><small>${l}</small><div class="pills ${c}">${a.map(x=>`<span>${x}</span>`).join("")}</div></div></div>`:"";
function liveReport(k){
 const i=scnInfo(D.id);if(!i||!i.symptomatic||!(k=="pain"||k=="fatigue"))return "";if(k=="fatigue"&&symsOf(D).includes("pain"))return "";
 const env=window.CT?window.CT.env():null,inHab=i.location=="Hab-2",first_=[];
 if(inHab)first_.push("Leave Hab-2","Ventilate Hab-2");
 first_.push(i.sev>=4?"Tell the flight surgeon today":"Recheck in 15 min");
 return `<div class="lrep">${ic("signal")}<div><b>Crew monitor report</b><span>${i.symptom} · ${i.location}${env?` · CO₂ ${env.co2.toLocaleString("en-US")} ppm`:""} · HR ${D.hr} bpm</span></div></div>${hl("alert","Do first",first_,"first")}`}
const symCard=k=>{const s=SH[k],t=personal(k);return `<article class="card hc s-warn"><div class="hch">${tile(SYMIC[k],"s-warn")}<h4>${s.n}</h4></div>${liveReport(k)}${hl("pill","Medicine",s.med.length?s.med:["None needed"])}${hl("check","Do",s.do)}${hl("food","Eat and drink",s.eat,"eat")}${hl("ban","Avoid",s.no,"no")}<div class="urg">${ic("alert")}<span><b>Get help if:</b> ${s.red}</span></div>${t?`<div class="tip">${ic("user")}<span>${t}</span></div>`:""}</article>`};
const areaCard=(k,R)=>{const a=AH[k];return `<article class="card hc s-${R[k].s}"><div class="hch">${tile(AIC[k],"s-"+R[k].s)}<h4>${Z[k].n}</h4><span class="tag s-${R[k].s}">${LAB[R[k].s]}</span></div><p class="note" style="margin:0 0 6px">${R[k].t}</p>${hl("pill","Supplement",a.med)}${hl("check","Do",a.do)}${hl("food","Eat and drink",a.eat,"eat")}${hl("ban","Avoid",a.no,"no")}</article>`};
function tipsFor(R){
 const n=need(),t=[],bm=bmi(),m=M();
 D.water<n?t.push(["warn","drop",`Drink ${f1(n-D.water)} L more (target ${n} L)`]):t.push(["ok","drop","Water on target"]);
 D.sleep<7?t.push(["warn","moon",`Sleep ${f1(D.sleep)} h. Aim for 7 to 9 h`]):t.push(["ok","moon","Sleep on target"]);
 D.sys>119||D.dia>79?t.push(["warn","gauge",`Blood pressure ${D.sys}/${D.dia} is high. Less salt, keep cardio`]):D.sys<90?t.push(["warn","gauge","Blood pressure is low. Rise slowly, drink more"]):t.push(["ok","gauge",`Blood pressure ${D.sys}/${D.dia} in range`]);
 D.hr<50||D.hr>100?t.push(["warn","pulse",`Heart rate ${D.hr} bpm is outside 50 to 100`]):D.hr>D.hr0+6?t.push(["warn","pulse",`Heart rate ${D.hr} bpm, up from ${D.hr0}. Rest`]):t.push(["ok","pulse",`Heart rate ${D.hr} bpm in range`]);
 D.spo2<95?t.push(["warn","lungs",`SpO₂ ${D.spo2}%. Check air, rest`]):D.spo2<D.spo20?t.push(["warn","lungs",`SpO₂ ${D.spo2}%, down from ${D.spo20}%`]):t.push(["ok","lungs",`SpO₂ ${D.spo2}% in range`]);
 bm>24.9?t.push(["warn","scale",`BMI ${f1(bm)} is high. More veg and protein, fewer sweets`]):bm<18.5?t.push(["warn","scale",`BMI ${f1(bm)} is low. Add calories and protein`]):t.push(["ok","scale","Weight in range"]);
 (D.t<-1||m.hip>=1.5)&&t.push(["warn","bone","Bone loss risk. Calcium, vitamin D, heavy lifting"]);
 D.ex<120&&t.push(["warn","activity",`Exercise ${D.ex} min. Aim for up to 120 min/day`]);
 return t}
function renderHealthGuide(R){
 const a=AS(cur),p=D,eff=symsOf(p),rk=K.filter(k=>R[k].s!="ok"&&!R[k].sym).sort((x,y)=>R[y].v-R[x].v),hs=healthScore(R),n=need(),f=p.sex=="f";
 put("#hgAv",avatar(a,84));
 put("#hgInfo",`<h2>${p.name}</h2><p class="note">${a.role} · day ${p.day}</p><div class="chips ichips"><span class="${eff.length?"w":""}">${ic(eff.length?"thermo":"shield")}${eff.length?eff.length+" symptom"+(eff.length>1?"s":""):"No symptoms"}</span><span class="${rk.length?"w":""}">${ic(rk.length?"alert":"shield")}${rk.length?rk.length+" area"+(rk.length>1?"s":"")+" flagged":"No areas flagged"}</span><span>${ic("drop")}${f1(p.water)} / ${n} L water</span><span>${ic("pulse")}${p.hr} bpm</span></div>`);
 put("#hgScore",scoreBadge(hs));renderSelects();
 const okc=(t,b)=>`<div class="card okc">${ic("shield")}<b>${t}</b>${b||""}</div>`;
 let h=`<div class="cols2"><section><h3 class="sh">${ic("thermo")}Symptoms right now</h3>${eff.length?`<div class="hgrid">${eff.map(symCard).join("")}</div>`:okc("No symptoms reported",` <span class="note">Add them in the profile, or the crew monitor reports them.</span> <button class="btn" data-tab="profile">Open profile</button>`)}</section>`;
 h+=`<section><h3 class="sh">${ic("scan")}Body checks</h3>${rk.length?`<div class="hgrid">${rk.map(k=>areaCard(k,R)).join("")}</div>`:okc("Every body area is in range")}</section></div>`;
 h+=`<section><h3 class="sh">${ic("chart")}Live numbers</h3><div class="tips">${tipsFor(R).map(t=>`<div class="tipc s-${t[0]}">${tile(t[1],"s-"+t[0])}<span>${t[2]}</span></div>`).join("")}</div></section>`;
 const nt=[["drop",f1(p.water)+" L",`Water · target ${n} L`,p.water<n?"warn":"ok"],["sun","25 µg","Vitamin D",""],["bone","1,000–1,200 mg","Calcium",""],["leaf",(f?90:120)+" µg","Vitamin K",""],["citrus",(f?110:125)+" mg","Vitamin C",""]];
 const uniq=a=>[...new Set(a)];
 const sickEat=uniq(eff.flatMap(k=>SH[k].eat)),sickNo=uniq(eff.flatMap(k=>SH[k].no));
 h+=`<section><h3 class="sh">${ic("food")}Food and drink</h3><div class="nts">${nt.map(x=>`<div class="nt${x[3]?" s-"+x[3]:""}">${tile(x[0],x[3]?"s-"+x[3]:"")}<div><b>${x[1]}</b><small>${x[2]}</small></div></div>`).join("")}</div>
 ${eff.length?`<div class="card hc s-warn" style="margin-top:12px"><div class="hch">${tile("thermo","s-warn")}<h4>For today's symptoms: ${eff.map(k=>SYMN[k].toLowerCase()).join(", ")}</h4></div>${hl("food","Eat and drink",sickEat,"eat")}${hl("ban","Avoid",sickNo,"no")}${hl("drop","Fluids",["Small sips often",`At least ${n} L today`])}</div>`:""}
 <div class="card hc" style="margin-top:12px">${hl("food","Eat every day",["Leafy greens","Dairy or fortified","Oily fish","Citrus, peppers","Protein each meal","Water"],"eat")}${hl("ban","Go easy on",["Salt","Too much caffeine","Sugary snacks"],"no")}${eff.length?"":hl("thermo","When sick",["Fluids first","Small bland meals","No greasy or spicy food","Cannot drink? Get help"])}</div></section>
 <p class="note">Educational information, not medical advice. No doses: follow the label and ask the flight surgeon or a doctor.</p>`;
 put("#hgBody",h)}
document.addEventListener("click",e=>{
 const a=e.target.closest("[data-astro]");if(a&&!e.target.closest("select")){selectAstro(a.dataset.astro);return}
 const g=e.target.closest("[data-astro-go]");if(g){selectAstro(g.dataset.astroGo);show("health");return}
 const b=e.target.closest("[data-tab]");if(b){show(b.dataset.tab);window.scrollTo(0,0)}});
document.addEventListener("keydown",e=>{if((e.key=="Enter"||e.key==" ")&&e.target.matches&&e.target.matches("[data-astro]")){e.preventDefault();selectAstro(e.target.dataset.astro)}});
/* ---------- Dashboard summary ---------- */
function renderDash(R,hs){
 R=R||res();hs=hs==null?healthScore(R):hs;const rk=K.filter(k=>R[k].s!="ok").sort((a,b)=>R[b].v-R[a].v),a=AS(cur),eff=symsOf(D);
 put("#dashAv",avatar(a,52));renderSelects();
 put("#b3",svg("b",R,rk,eff));
 const rs=hstat(hs),bar=$("#rdyBar");bar.className="bar s-"+rs;bar.firstElementChild.style.width=hs+"%";$("#rdy").className="s-"+rs;
 const vit=[["pulse","Heart rate",D.hr+" bpm",sc(D.hr,[50,100],30)],["gauge","Blood pressure",D.sys+"/"+D.dia,Math.max(sc(D.sys,[90,119],25),sc(D.dia,[60,79],20))],["lungs","SpO₂",D.spo2+"%",sc(D.spo2,[95,100],5)],["moon","Sleep",f1(D.sleep)+" h",sc(D.sleep,[7,9],3)]];
 put("#dashVitals",vit.map(v=>`<div class="kpi s-${stat(v[3])}"><small>${ic(v[0])}${v[1]}</small><b>${v[2]}</b></div>`).join(""));
 $("#probsFor").textContent="Body check · "+first(D.name);
 put("#dashProbs",rk.length?rk.slice(0,6).map((k,i)=>`<div class="row s-${R[k].s}"><span class="rk">${i+1}</span><div><b>${Z[k].n}</b> <span class="tag s-${R[k].s}" style="float:right">${LAB[R[k].s]}</span><div class="note">${R[k].t}</div></div></div>`).join(""):`<p class="note ih" style="margin:0">${ic("shield")}No problems found.</p>`);
 $("#careFor").textContent="Care for "+first(D.name);
 let h=eff.length?eff.map(k=>`<div class="mini">${tile(SYMIC[k],"s-warn")}<div><b>${SH[k].n}</b><small>${ic("pill")}${(SH[k].med.length?SH[k].med:["No medicine needed"]).slice(0,2).join(" · ")}</small><small>${ic("food")}${SH[k].eat.slice(0,2).join(" · ")}</small></div></div>`).join(""):`<div class="mini">${tile("shield","s-ok")}<div><b>No symptoms</b><small>Keep to the normal-day plan.</small></div></div>`;
 h+=rk.filter(k=>!R[k].sym).slice(0,3).map(k=>`<div class="mini">${tile(AIC[k],"s-"+R[k].s)}<div><b>${Z[k].n}</b><small>${ic("check")}${AH[k].do.slice(0,2).join(" · ")}</small></div></div>`).join("");
 put("#dashCare",h)}
all();

/* ================= Habitat crew monitor ================= */
(function(){
const nasaTelemetry=[
{time:"2018-08-19T12:18:00Z",co2:3931,temp:23.4,humidity:40},{time:"2018-08-19T12:23:00Z",co2:3942,temp:23.4,humidity:40},
{time:"2018-08-19T12:28:00Z",co2:3965,temp:23.3,humidity:40},{time:"2018-08-19T12:33:00Z",co2:3984,temp:23.3,humidity:40},
{time:"2018-08-19T12:38:00Z",co2:3981,temp:23.4,humidity:40},{time:"2018-08-19T12:43:00Z",co2:3990,temp:23.4,humidity:40},
{time:"2018-08-19T12:48:00Z",co2:3981,temp:23.5,humidity:40},{time:"2018-08-19T12:53:00Z",co2:3980,temp:23.4,humidity:40},
{time:"2018-08-19T12:58:00Z",co2:4001,temp:23.4,humidity:40},{time:"2018-08-19T13:03:00Z",co2:3989,temp:23.4,humidity:40},
{time:"2018-08-19T13:08:00Z",co2:3894,temp:23.4,humidity:40},{time:"2018-08-19T13:13:00Z",co2:3894,temp:23.5,humidity:40},
{time:"2018-08-19T13:18:00Z",co2:3904,temp:23.5,humidity:40},{time:"2018-08-19T13:23:00Z",co2:3894,temp:23.5,humidity:40},
{time:"2018-08-19T13:28:00Z",co2:3925,temp:23.5,humidity:40},{time:"2018-08-19T13:33:00Z",co2:3977,temp:23.5,humidity:40},
{time:"2018-08-19T13:38:00Z",co2:4051,temp:23.5,humidity:40},{time:"2018-08-19T13:43:00Z",co2:4030,temp:23.6,humidity:40},
{time:"2018-08-19T13:48:00Z",co2:4009,temp:23.5,humidity:40},{time:"2018-08-19T13:53:00Z",co2:3914,temp:23.5,humidity:40},
{time:"2018-08-19T13:58:00Z",co2:3894,temp:23.6,humidity:40},{time:"2018-08-19T14:03:00Z",co2:3894,temp:23.6,humidity:40},
{time:"2018-08-19T14:08:00Z",co2:3663,temp:23.5,humidity:40},{time:"2018-08-19T14:13:00Z",co2:3663,temp:23.5,humidity:40},
{time:"2018-08-19T14:18:00Z",co2:3662,temp:23.6,humidity:40}];
const nasaRadiation=[
{time:"2017-09-04T00:00:00Z",gcr:0.12500,saa:0.19343,total:0.31843},{time:"2017-09-05T00:00:00Z",gcr:0.12550,saa:0.16146,total:0.28696},
{time:"2017-09-06T00:00:00Z",gcr:0.12820,saa:0.17795,total:0.30615},{time:"2017-09-07T00:00:00Z",gcr:0.14100,saa:0.15724,total:0.29824},
{time:"2017-09-08T00:00:00Z",gcr:0.13624,saa:0.13217,total:0.26841},{time:"2017-09-09T00:00:00Z",gcr:0.12626,saa:0.19100,total:0.31726},
{time:"2017-09-10T00:00:00Z",gcr:0.13361,saa:0.17820,total:0.31181},{time:"2017-09-11T00:00:00Z",gcr:0.39001,saa:0.15544,total:0.54545},
{time:"2017-09-12T00:00:00Z",gcr:0.16375,saa:0.25505,total:0.41880},{time:"2017-09-13T00:00:00Z",gcr:0.14689,saa:0.15323,total:0.30012},
{time:"2017-09-14T00:00:00Z",gcr:0.14137,saa:0.17986,total:0.32123},{time:"2017-09-15T00:00:00Z",gcr:0.13963,saa:0.14828,total:0.28791},
{time:"2017-09-16T00:00:00Z",gcr:0.13069,saa:0.20784,total:0.33853},{time:"2017-09-17T00:00:00Z",gcr:0.13174,saa:0.18425,total:0.31599},
{time:"2017-09-18T00:00:00Z",gcr:0.13762,saa:0.18014,total:0.31776}];

const BASE={A:{location:"Hab-2",x:44,y:52},B:{location:"Science Lab",x:76,y:27},C:{location:"Life Support",x:80,y:77},D:{location:"Exercise",x:21,y:76},E:{location:"Command",x:14,y:20}};
const ORDER=["E","A","B","C","D"];
const mkCrew=()=>["A","B","C","D","E"].map(id=>{const p=AS(id).p;return{id,first:first(p.name),name:p.name,hr:p.hr0,spo2:Math.round(p.spo20),sys:p.sys0,dia:p.dia0,...BASE[id],symptom:"No symptoms reported",symptomatic:false}});
const sorted=()=>ORDER.map(id=>crew.find(m=>m.id===id)).filter(Boolean);
const safeRoutes={
C:[{location:"Science Lab",x:76,y:27},{location:"Life Support",x:80,y:77},{location:"Command",x:29,y:29}],
D:[{location:"Command",x:14,y:33},{location:"Exercise",x:21,y:76},{location:"Science Lab",x:74,y:29}]};

const DEFN={A:"Layla",B:"Omar",C:"Noor",D:"Zayed"};let FN={...DEFN};
const rn=s=>typeof s==="string"?s.replace(/Layla|Omar|Noor|Zayed/g,m=>FN[Object.keys(DEFN).find(k=>DEFN[k]===m)]):s;
function newCrew(reroll){if(reroll)rerollNames();const c=mkCrew();c.forEach(m=>{FN[m.id]=m.first;const p=AS(m.id).p;p.hr=m.hr;p.spo2=m.spo2;p.sys=m.sys;p.dia=m.dia});return c}
function syncLive(){crew.forEach(m=>{const p=AS(m.id).p;p.hr=m.hr;p.spo2=m.spo2;p.sys=m.sys;p.dia=m.dia})}
let crew=newCrew(false),telemetryIndex=0,radiationIndex=0;
window.scnSym=id=>{const m=crew.find(x=>x.id===id);return !!(m&&m.symptomatic)};
window.scnInfo=id=>{const m=crew.find(x=>x.id===id);if(!m)return null;const s=/(\d+)\/10/.exec(m.symptom);return{symptomatic:m.symptomatic,symptom:m.symptom,sev:s?+s[1]:0,location:m.location,exposureMin:m.exposureMin||0}};
window.CT={crew:()=>crew.map(m=>({...m,dose:dose(m)})),env:()=>({co2,temp:temperature,humidity,rad:currentRadiation,hist:co2History.slice(),stage:scenarioStage,restricted:entryRestricted,mode:responseMode,paused,verified,time:currentEnv.time})};
let currentEnv=nasaTelemetry[0],currentRadiation=nasaRadiation[0];
let co2=currentEnv.co2,temperature=currentEnv.temp,humidity=currentEnv.humidity,co2History=[co2];
let paused=false,verified=false,routeStep=0,tickCount=0,scenarioStage=0,entryRestricted=false,responseMode="none",toastTimer;
const fmt=(v,d=0)=>Number(v).toFixed(d),jitter=a=>(Math.random()-.5)*a,num=n=>n.toLocaleString("en-US");
const STAGE=["s-ok","s-warn","s-warn","s-bad"];
function sourceTime(iso,full=false){const d=new Date(iso),t=d.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",timeZone:"UTC"});
 if(!full)return t+" UTC";return d.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric",timeZone:"UTC"})+" · "+t+" UTC"}
const dose=m=>(currentRadiation.total*(m.exposureMin||0))/1440;

function renderCrew(){
 const n=crew.filter(m=>m.symptomatic).length;
 $("#crewCount").textContent=`${n} ${n===1?"report":"reports"}`;$("#crewCount").className="tag "+(n?"s-bad":"s-ok");
 $("#crewList").innerHTML=sorted().map(m=>`<article class="crew-card ${m.symptomatic?"s-bad":"s-ok"}${m.id===cur?" selected":""}" data-astro="${m.id}" tabindex="0" role="button" aria-pressed="${m.id===cur}" aria-label="${m.name}, ${AS(m.id).role}, ${m.location}, ${m.symptom}. Select"><span class="av">${avatar(AS(m.id),40)}<i>${m.id}</i></span><div><b>${m.name}</b><div class="role">${AS(m.id).role}</div><div class="note">${m.location}${m.symptomatic?" · hold":" · moving safely"}</div></div><div class="vit"><b>${m.hr} bpm</b><small>SpO₂ ${m.spo2}%</small><small>BP ${m.sys}/${m.dia}</small>${(()=>{const s=scoreOf(m.id);return `<small class="hs s-${hstat(s)}">Health ${s}%</small>`})()}</div><div class="sym">${m.symptom}<span class="exp">Hab-2 ${m.exposureMin||0} min · ${dose(m).toFixed(4)} mGy est.</span></div></article>`).join("");
 $("#expBody").innerHTML=sorted().map(m=>`<tr><td><b>${m.id} · ${m.name}</b></td><td>${m.location}</td><td class="n">${m.exposureMin||0} min</td><td class="n">${dose(m).toFixed(4)} mGy</td><td>${m.symptom}</td></tr>`).join("");renderCare();crewSig()}

let careSig=null,lastSig=null;
function crewSig(){const s=crew.filter(m=>m.symptomatic).map(m=>m.id).join(",");if(s!==lastSig){lastSig=s;if(typeof window.refreshAstro=="function")window.refreshAstro()}}
window.renderCrewUI=()=>renderCrew();

function renderCare(){
 const sy=crew.filter(m=>m.symptomatic),sig=sy.map(m=>m.id).join(",");
 if(sig===careSig)return;careSig=sig;
 $("#dashCrew").innerHTML=sy.length?`<div class="row s-bad"><span class="rk">${sy.length}</span><div><b>Crew reporting symptoms</b><div class="note">${sy.map(m=>m.first).join(" and ")} reported headache. Fix the cause first: keep new crew out of Hab-2 and ventilate.</div><p style="margin:8px 0 0"><button class="btn" data-tab="alert">Open crew care</button></p></div></div>`:`<p class="note" style="margin:0">No crew symptoms reported.</p>`;
 const c=HG.find(x=>x.k=="pain");
 $("#crewCare").innerHTML=!sy.length?`<h3 style="margin-bottom:6px">Care for reported symptoms</h3><p style="margin:0">No symptoms reported. If a crew member reports one, medicine, food and drink advice appears here.</p>`:
 `<h3 style="margin-bottom:6px">Care for reported symptoms</h3>
 <p style="margin:0 0 8px"><b>Fix the cause first.</b> Keep new crew out of Hab-2, ventilate, and confirm the CO₂ reading. Medicine only eases symptoms. It does not remove the exposure.</p>
 ${sy.map(m=>`<div class="row s-bad"><span class="rk">${m.id}</span><div><b>${m.name}</b>: headache reported <button class="btn" data-astro-go="${m.id}" style="margin-left:6px">Health guide</button></div></div>`).join("")}
 <h3 style="margin:14px 0 6px">Medicine for headache</h3>${medHtml(c.meds.slice(0,2))}
 <p class="note" style="margin:6px 0 0">Acetaminophen is usually the gentler first choice. Confirm with the flight surgeon.</p>
 <h3 style="margin:14px 0 6px">Food and drink</h3>${ul(c.eat)}
 <p style="margin:12px 0 0"><b>Get help urgently if:</b> ${c.red}</p>
 <p style="margin:12px 0 0"><button class="btn" data-tab="health">Open health guide</button></p>`}
function renderRad(){
 $("#radBody").innerHTML=nasaRadiation.map((r,i)=>`<tr${i===radiationIndex?' class="cur" aria-current="true"':""}><td>${new Date(r.time).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric",timeZone:"UTC"})}</td><td class="n">${fmt(r.gcr,3)}</td><td class="n">${fmt(r.saa,3)}</td><td class="n">${fmt(r.total,3)}</td></tr>`).join("")}

function showToast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove("show"),2400)}

function updateSensorStatus(){
 document.querySelectorAll(".sensor-meta").forEach((l,i)=>{l.textContent=i===3?(paused?"Replay paused · values held":"Daily record · current"):(paused?"Replay paused · values held":verified?"Primary · check requested":"Primary · current")})}

function updateZoneUI(){
 const room=$("#habTwoRoom"),hazard=scenarioStage>=2,alert=hazard||entryRestricted;
 room.classList.toggle("hazard",hazard);room.classList.toggle("ventilating",responseMode==="ventilate");room.classList.toggle("isolated",responseMode==="isolate");
 $("#hazardField").classList.toggle("active",hazard);
 $("#zoneState").className="zs "+(alert?"s-bad":"s-ok");
 $("#airflow").classList.toggle("active",responseMode==="ventilate");
 $("#restrictButton").setAttribute("aria-pressed",entryRestricted);
 $("#ventButton").setAttribute("aria-pressed",responseMode==="ventilate");
 $("#isolateButton").setAttribute("aria-pressed",responseMode==="isolate");
 $("#restrictButton").textContent=entryRestricted?"Entry blocked":"Restrict entry";
 if(responseMode==="isolate"){$("#accessTag").textContent="ISOLATED";$("#zoneStateText").textContent="Hab-2 isolated"}
 else if(entryRestricted){$("#accessTag").textContent=responseMode==="ventilate"?"VENTILATING":"ENTRY BLOCKED";$("#zoneStateText").textContent=responseMode==="ventilate"?"Hab-2 ventilating":"Hab-2 entry blocked"}
 else{$("#accessTag").textContent="MONITORING";$("#zoneStateText").textContent="Hab-2 monitored"}
 $("#hab").textContent=$("#zoneStateText").textContent}

function setPlayback(p){paused=p;$("#pauseButton").textContent=p?"Resume feed":"Pause feed";$("#liveLabel").textContent=p?"Playback paused":"NASA EDA replay";$("#liveDot").classList.toggle("paused",p);updateSensorStatus()}

function renderMarkers(){
 $("#mapMarkers").innerHTML=sorted().map(m=>`<div class="crew-marker ${m.symptomatic?"sym":""}" id="marker-${m.id}" data-astro="${m.id}" style="left:${m.x}%;top:${m.y}%" title="${m.name}: ${m.symptom}">${m.id}</div><div class="marker-label ${m.symptomatic?"sym":""}" id="label-${m.id}" style="left:${m.x}%;top:${m.y}%">${m.first} · ${m.location}</div>`).join("")}
function updateMarkerPositions(){
 crew.forEach(m=>{const k=$("#marker-"+m.id),l=$("#label-"+m.id);if(k&&l){k.style.left=m.x+"%";k.style.top=m.y+"%";l.style.left=m.x+"%";l.style.top=m.y+"%";l.textContent=`${m.first} · ${m.location}`}})}

function setScenarioStage(stage){
 scenarioStage=stage;
 const A=crew.find(m=>m.id==="A"),B=crew.find(m=>m.id==="B"),ppm=`<strong><span id="alertPpm">${num(co2)}</span> ppm CO₂</strong>`;
 ["alertCard","findingCard"].forEach(id=>{const e=$("#"+id);e.classList.remove("s-ok","s-warn","s-bad");e.classList.add(STAGE[stage])});
 const set=(chip,head,copy,named,kick,fh,fc,rep,loc,conf)=>{head=rn(head);copy=rn(copy);named=named.map(rn);kick=rn(kick);fh=rn(fh);fc=rn(fc);rep=rn(rep);loc=rn(loc);conf=rn(conf);$("#alertChip").textContent=chip;$("#alert-heading").textContent=head;$("#alertCopy").innerHTML=copy;
  $("#namedCrew").innerHTML=named.map(s=>`<span>${s}</span>`).join("");$("#findingKicker").textContent=kick;$("#finding-heading").textContent=fh;$("#findingCopy").textContent=fc;
  $("#evidenceReports").textContent=rep;$("#evidenceLocation").textContent=loc;$("#confidenceBadge").textContent=conf};
 if(stage===0){
  Object.assign(A,{symptom:"No symptoms reported",symptomatic:false,exposureMin:8});
  Object.assign(B,{location:"Science Lab",symptom:"No symptoms reported",symptomatic:false,exposureMin:0,x:76,y:27});
  set("Baseline monitoring","Crew readings stable",`<strong>Layla (A)</strong> is in Hab-2 and <strong>Omar (B)</strong> is in the Science Lab. No symptoms are reported while the NASA RR-9 replay reads ${ppm}.`,["A · Layla stable","B · Omar separate","0 reports"],
   "Baseline state","No shared health signal","CrewTrace is recording the environmental stream and crew locations. All crew members are currently symptom-free.","0 symptom reports","Separate rooms","No alert");
 }else if(stage===1){
  Object.assign(A,{symptom:"No symptoms reported",symptomatic:false,exposureMin:13});
  Object.assign(B,{location:"Hab-2",symptom:"No symptoms reported",symptomatic:false,exposureMin:1,x:57,y:61});
  set("Location overlap","Omar entered Hab-2",`<strong>Layla (A) and Omar (B)</strong> now share Hab-2. Both remain symptom-free while the NASA RR-9 replay reads ${ppm}; CrewTrace is watching for gradual change.`,["A · Layla stable","B · Omar stable","0 reports"],
   "Shared environment","Layla + Omar · Hab-2","The crew members now share a location, but location alone is not treated as a health signal. CrewTrace continues monitoring.","0 symptom reports","Shared place + time","Observe only");
 }else if(stage===2){
  Object.assign(A,{symptom:"Headache 2/10",symptomatic:true,exposureMin:18});
  Object.assign(B,{location:"Hab-2",symptom:"No symptoms reported",symptomatic:false,exposureMin:6,x:57,y:61});
  entryRestricted=true;
  set("First health change","Layla’s readings changed",`<strong>Layla (A)</strong> developed a mild headache after Omar entered Hab-2. Omar remains symptom-free. <strong>Entry is now blocked for Noor (C) and Zayed (D)</strong> while the ${ppm} reading is checked.`,["A · Layla symptomatic","B · Omar observing","Entry blocked"],
   "Individual change","Layla (A) · Hab-2","One crew member changed after a period of shared exposure. CrewTrace restricts new entry but does not yet claim a shared pattern.","1 symptom report","Same place + time","Low · 2/6 signals");
 }else{
  Object.assign(A,{symptom:"Headache 4/10 · fatigue",symptomatic:true,exposureMin:23});
  Object.assign(B,{location:"Hab-2",symptom:"Headache 2/10",symptomatic:true,exposureMin:11,x:57,y:61});
  entryRestricted=true;
  set("Exposure alert","Restrict Hab-2 access",`<strong>Layla (A) and Omar (B)</strong> now report similar symptoms after sharing Hab-2 while the NASA RR-9 replay reads ${ppm}. <strong>Noor (C) and Zayed (D) should not enter</strong> until verification is complete.`,["A · Layla","B · Omar","Entry blocked"],
   "Possible shared exposure","Layla (A) + Omar (B) · Hab-2","Two gradual health changes now align with the same place and overlapping time. CrewTrace flags an association for verification, not a diagnosis.","2 similar reports","Same place + time","Moderate · 4/6 signals");
 }
 $("#verificationEvidence").textContent=verified?"Sensor check requested":"Primary sensor only";
 updateZoneUI();renderCrew();renderMarkers();renderValues()}

function updateLiveData(){
 if(paused)return;
 tickCount++;
 telemetryIndex=(telemetryIndex+1)%nasaTelemetry.length;currentEnv=nasaTelemetry[telemetryIndex];
 co2=currentEnv.co2;temperature=currentEnv.temp;humidity=currentEnv.humidity;
 co2History.push(co2);if(co2History.length>20)co2History.shift();
 if(tickCount%2===0){radiationIndex=(radiationIndex+1)%nasaRadiation.length;currentRadiation=nasaRadiation[radiationIndex];renderRad()}
 crew=crew.map(m=>{const p=AS(m.id).p,h0=p.hr0,s0=Math.round(p.spo20),sy=m.symptomatic,lo=sy?h0+6:h0-1,hi=sy?h0+18:h0+7;return{...m,hr:Math.round(Math.min(hi,Math.max(lo,m.hr+jitter(3)))),spo2:Math.round(Math.min(s0,Math.max(sy?s0-3:s0-1,m.spo2+jitter(1.4)))),sys:Math.round(Math.min(p.sys0+(sy?12:4),Math.max(p.sys0-3,m.sys+jitter(3)))),dia:Math.round(Math.min(p.dia0+(sy?7:3),Math.max(p.dia0-2,m.dia+jitter(2))))}});
 if(tickCount===5)setScenarioStage(1);if(tickCount===10)setScenarioStage(2);if(tickCount===15)setScenarioStage(3);
 if(scenarioStage===1){crew[0].hr=crew[0].hr+1;if(tickCount%3===0)crew[0].spo2=crew[0].spo2-1}
 if(scenarioStage===2){crew[1].hr=crew[1].hr+1;if(tickCount%3===0)crew[1].spo2=crew[1].spo2-1}
 if(tickCount%3===0&&scenarioStage>=2){
  const l=Math.max(2,Math.min(5,2+Math.floor((tickCount-10)/3)));crew[0].symptom=`Headache ${l}/10${l>=4?" · fatigue":""}`;
  if(scenarioStage>=3){const o=Math.max(2,Math.min(4,2+Math.floor((tickCount-15)/4)));crew[1].symptom=`Headache ${o}/10`}}
 crew.forEach(m=>{if(m.location==="Hab-2")m.exposureMin=(m.exposureMin||0)+1});
 if(tickCount%8===0){routeStep++;["C","D"].forEach(id=>{const m=crew.find(p=>p.id===id);Object.assign(m,safeRoutes[id][routeStep%safeRoutes[id].length])});updateMarkerPositions()}
 syncLive();renderCrew();renderValues();drawChart();if(typeof window.refreshAstro=="function")window.refreshAstro()}

function renderTel(){
 $("#telBody").innerHTML=nasaTelemetry.map((r,i)=>`<tr${i===telemetryIndex?' class="cur" aria-current="true"':""}><td>${sourceTime(r.time,true)}</td><td class="n">${num(r.co2)}</td><td class="n">${fmt(r.temp,1)}</td><td class="n">${r.humidity}</td></tr>`).join("")}
function renderValues(){
 renderTel();
 $("#missionClock").textContent=sourceTime(currentEnv.time,true);$("#alertTime").textContent=sourceTime(currentEnv.time);
 $("#co2Value").textContent=num(co2);$("#chartValue").textContent=num(co2);$("#tempValue").textContent=fmt(temperature,1);$("#humidityValue").textContent=humidity;
 $("#radiationValue").textContent=fmt(currentRadiation.total,3);$("#mapCo2").textContent=`${num(co2)} ppm CO₂`;
 const p=$("#alertPpm");if(p)p.textContent=num(co2);
 $("#sourceTimestamp").textContent=sourceTime(currentEnv.time,true);
 const rd=new Date(currentRadiation.time).toLocaleDateString("en-GB",{day:"2-digit",month:"short",timeZone:"UTC"});
 $("#radiationDetails").innerHTML=`<strong>${rd} radiation:</strong> GCR ${fmt(currentRadiation.gcr,3)} · SAA ${fmt(currentRadiation.saa,3)} mGy/day`;
 updateSensorStatus()}

function drawChart(){
 const c=$("#co2Chart"),r=c.getBoundingClientRect();if(!r.width||!r.height)return;
 const ratio=Math.max(1,window.devicePixelRatio||1),css=getComputedStyle(document.documentElement),col=n=>css.getPropertyValue(n).trim();
 c.width=Math.round(r.width*ratio);c.height=Math.round(r.height*ratio);
 const ctx=c.getContext("2d");ctx.scale(ratio,ratio);
 const w=r.width,h=r.height,p={l:44,r:10,t:12,b:14},mn=Math.min(...co2History)-100,mx=Math.max(...co2History)+100;
 const x=i=>p.l+(i/Math.max(1,co2History.length-1))*(w-p.l-p.r),y=v=>p.t+(mx-v)/(mx-mn)*(h-p.t-p.b);
 ctx.clearRect(0,0,w,h);
 ctx.strokeStyle=col("--line");ctx.lineWidth=1;ctx.fillStyle=col("--mute");ctx.font='11px Inter,system-ui,sans-serif';ctx.textBaseline="middle";
 [0,.25,.5,.75,1].forEach(f=>{const v=mn+(mx-mn)*f;ctx.beginPath();ctx.moveTo(p.l,y(v));ctx.lineTo(w-p.r,y(v));ctx.stroke();ctx.fillText(num(Math.round(v)),2,y(v))});
 const line=col("--bad");
 ctx.beginPath();co2History.forEach((v,i)=>i?ctx.lineTo(x(i),y(v)):ctx.moveTo(x(i),y(v)));
 ctx.lineTo(x(co2History.length-1),h-p.b);ctx.lineTo(x(0),h-p.b);ctx.closePath();ctx.globalAlpha=.12;ctx.fillStyle=line;ctx.fill();ctx.globalAlpha=1;
 ctx.beginPath();co2History.forEach((v,i)=>i?ctx.lineTo(x(i),y(v)):ctx.moveTo(x(i),y(v)));
 ctx.strokeStyle=line;ctx.lineWidth=2.2;ctx.lineJoin="round";ctx.lineCap="round";ctx.stroke();
 const lx=x(co2History.length-1),ly=y(co2History.at(-1));ctx.beginPath();ctx.arc(lx,ly,4.2,0,Math.PI*2);ctx.fillStyle=col("--panel");ctx.fill();ctx.strokeStyle=line;ctx.lineWidth=2.2;ctx.stroke()}

function exportIncident(){
 const names=["Stable baseline","Room overlap","First health change","Possible shared exposure"],conf=$("#confidenceBadge").textContent;
 const resp=responseMode==="ventilate"?"Local ventilation active":responseMode==="isolate"?"Hab-2 isolated":"No airflow action selected";
 const rows=crew.map(m=>`- ${m.id} · ${m.name}: ${m.location}; ${m.symptom}; Hab-2 exposure ${m.exposureMin||0} min; estimated dose ${dose(m).toFixed(4)} mGy`).join("\n");
 const rep=`CREWTRACE CREW INCIDENT REPORT\nGenerated from the CrewTrace crew monitor\n\nSTATUS\nStage: ${names[scenarioStage]}\nReplay time: ${sourceTime(currentEnv.time,true)}\nConfidence: ${conf}\nHab-2 access: ${entryRestricted?"RESTRICTED":"MONITORED"}\nResponse: ${resp}\nSensor reliability: ${verified?"Primary NASA stream; secondary check requested":"Primary NASA stream only"}\n\nENVIRONMENT\nCO2: ${num(co2)} ppm\nTemperature: ${fmt(temperature,1)} C\nHumidity: ${humidity}% RH\nTotal radiation: ${fmt(currentRadiation.total,3)} mGy/day\nRadiation components: GCR ${fmt(currentRadiation.gcr,3)}; SAA ${fmt(currentRadiation.saa,3)} mGy/day\n\nCREW\n${rows}\n\nINTERPRETATION\nCrewTrace flags an association for verification, not a diagnosis. NASA RR-9 supplies environmental data; crew symptoms, locations, exposure durations, actions, and dose estimates are a labelled scenario.\n\nNASA SOURCES\nTelemetry: https://visualization.osdr.nasa.gov/eda/api/missions/RR-9/telemetry_data/\nRadiation: https://visualization.osdr.nasa.gov/eda/api/missions/RR-9/radiation_data/\n`;
 const url=URL.createObjectURL(new Blob([rep],{type:"text/plain;charset=utf-8"})),a=document.createElement("a");
 a.href=url;a.download=`CrewTrace-Crew-Incident-${scenarioStage+1}.txt`;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
 showToast("Incident report exported")}

$("#pauseButton").onclick=()=>setPlayback(!paused);
$("#resetButton").onclick=()=>{
 crew=newCrew(true);telemetryIndex=0;radiationIndex=0;currentEnv=nasaTelemetry[0];currentRadiation=nasaRadiation[0];
 co2=currentEnv.co2;temperature=currentEnv.temp;humidity=currentEnv.humidity;co2History=[co2];
 tickCount=0;routeStep=0;verified=false;scenarioStage=0;entryRestricted=false;responseMode="none";
 $("#ackButton").textContent="Acknowledge alert";$("#verifyButton").textContent="Request sensor check";
 setPlayback(false);setScenarioStage(0);renderRad();drawChart();if(typeof window.refreshAstro=="function")window.refreshAstro();showToast("Scenario reset: new crew")};
$("#ackButton").onclick=()=>{$("#alertChip").textContent="Alert acknowledged";$("#ackButton").textContent="Acknowledged ✓"};
$("#verifyButton").onclick=()=>{verified=true;$("#verifyButton").textContent="Check requested ✓";$("#verificationEvidence").textContent="Sensor check requested";updateSensorStatus();showToast("Secondary sensor check requested")};
$("#restrictButton").onclick=()=>{entryRestricted=true;updateZoneUI();showToast(rn("Hab-2 entry restricted. Noor and Zayed rerouted"))};
$("#ventButton").onclick=()=>{responseMode=responseMode==="ventilate"?"none":"ventilate";if(responseMode==="ventilate")entryRestricted=true;updateZoneUI();showToast(responseMode==="ventilate"?"Local ventilation active. Verify the trend":"Ventilation action cleared")};
$("#isolateButton").onclick=()=>{responseMode=responseMode==="isolate"?"none":"isolate";if(responseMode==="isolate")entryRestricted=true;updateZoneUI();showToast(responseMode==="isolate"?"Hab-2 isolated from shared airflow":"Isolation action cleared")};
$("#exportButton").onclick=exportIncident;
window.addEventListener("resize",drawChart);
document.addEventListener("tabshown",e=>{if(e.detail==="dash")requestAnimationFrame(drawChart)});
matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>requestAnimationFrame(drawChart));

setPlayback(false);setScenarioStage(0);renderRad();drawChart();
setInterval(updateLiveData,1000);
})();
(function(){
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const cap=s=>String(s).charAt(0).toUpperCase()+String(s).slice(1);
const TABS={dash:"Dashboard",profile:"Astronaut profile",health:"Health guide",alert:"Exposure and care",env:"Telemetry log",about:"About and sources"};
const go=k=>{if(typeof show=="function")show(k)};
const crewL=()=>window.CT?window.CT.crew():[],env=()=>window.CT?window.CT.env():{co2:0,hist:[],stage:0};
const L1=id=>crewL().find(m=>m.id==id)||{};
const effOf=id=>symsOf(AS(id).p),scoreA=a=>scoreOf(a.id);
const STAGES=["Baseline monitoring","Location overlap","First health change","Exposure alert"];
const P=t=>`<p>${t}</p>`,UL=a=>a.length?`<ul>${a.map(x=>`<li>${x}</li>`).join("")}</ul>`:"";
const H=(t,i)=>`<h4>${i?ic(i):""}${esc(t)}</h4>`;
const TB=(hd,rows)=>`<div class="ctab"><table><thead><tr>${hd.map(h=>`<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
const out=(html,acts,urgent)=>({html,acts:acts||[],urgent});
const CTX={last:null};
const lc=s=>/[A-Z₀-₉]/.test(s.slice(1))?s:s.toLowerCase();
const nameB=a=>`<b>${esc(a.p.name)}</b>`;
/* ---------- people and attributes ---------- */
const STOP=new Set("line lines seem more many hand hands sure same some sara mona main mean name names need noor reem dear here were where there them then than what when whom with your yours lean read real deal dial dull hell hall halt fall tall told hold rest test best most must just jane jana lane late made mode safe sale tell well will wall team time tome home have hear heart rate hate data date call care core cure dose done down ever even exam each else eyes face fact fair fine food free from full gave give goes good hard head help high hour into item keep kind know last lead less like list live long look love make mean mind miss move much nice open over pain part pass plan play pull push quit rate room said save show sick side sign slow soon stay stop such sure take talk than that this tire tired turn type upon used very wait want week what when wide wish word work year also alone along anyone again".split(" "));
function lev(a,b){if(Math.abs(a.length-b.length)>2)return 9;const d=Array.from({length:a.length+1},(_,i)=>[i]);for(let j=1;j<=b.length;j++)d[0][j]=j;for(let i=1;i<=a.length;i++)for(let j=1;j<=b.length;j++)d[i][j]=Math.min(d[i-1][j]+1,d[i][j-1]+1,d[i-1][j-1]+(a[i-1]==b[j-1]?0:1));return d[a.length][b.length]}
function nameHit(tok,nm){if(!nm)return false;if(tok==nm||tok==nm+"s")return true;if(tok.length<4||nm.length<4||STOP.has(tok))return false;const d=lev(tok,nm);return d<=1||(d==2&&tok[0]==nm[0]&&Math.max(tok.length,nm.length)>=6)}
function people(q){const o=[],toks=q.split(/[^a-z\-]+/).filter(Boolean);
 ROSTER.forEach(a=>{const parts=a.p.name.toLowerCase().split(" "),f=parts[0],l=parts.slice(1).join(" ");if(toks.some(t=>nameHit(t,f))||(l.length>3&&toks.some(t=>t==l||t==l+"s")))o.push(a)});
 [[/\bcomm?and?ers?\b|\bcaptains?\b|\bleaders?\b/,"E"],[/\bpilots?\b/,"D"],[/medical officers?|\bdoctors?\b|\bmedics?\b/,"C"],[/flight engineers?|\bengineers?\b/,"A"],[/mission specialists?|\bspecialists?\b|\bscientists?\b/,"B"]].forEach(([r,id])=>{if(r.test(q)&&!o.includes(AS(id)))o.push(AS(id))});
 if(!o.length&&/\b(she|he|her|him|his|hers)\b/.test(q)&&CTX.last)o.push(AS(CTX.last));
 if(!o.length&&/\b(selected|current|this) (astronaut|person|crew member)\b|\bme\b|\bmy\b/.test(q))o.push(AS(cur));
 return o}
const dose=a=>withAstro(a.id,()=>M().dose),bmiA=a=>a.p.wt/Math.pow(a.p.ht/100,2);
const ATTR=[
 {k:"health",re:/health(?! guide)\b|how healthy|overall health|healthiest|least healthy|unhealthiest|(?<!t-)\bscore\b/,n:"Health score",i:"shield",v:a=>scoreA(a)+"% ("+HLAB[hstat(scoreA(a))]+")",x:scoreA},
 {k:"hr",re:/heart ?rate|\bhr\b|\bpulse\b|\bbpm\b/,n:"Heart rate",i:"pulse",v:a=>a.p.hr+" bpm",x:a=>a.p.hr},
 {k:"bp",re:/blood pressure|\bbp\b|systolic|diastolic/,n:"Blood pressure",i:"gauge",v:a=>a.p.sys+"/"+a.p.dia+" mmHg",x:a=>a.p.sys},
 {k:"spo2",re:/spo2|spo₂|oxygen|saturation/,n:"SpO₂",i:"lungs",v:a=>a.p.spo2+"%",x:a=>a.p.spo2},
 {k:"sleep",re:/\bsleep/,n:"Sleep",i:"moon",v:a=>f1(a.p.sleep)+" h",x:a=>a.p.sleep},
 {k:"age",re:/\bage\b|how old|oldest|youngest/,n:"Age",i:"user",v:a=>a.p.age+" years",x:a=>a.p.age},
 {k:"ht",re:/height|how tall|tallest|shortest/,n:"Height",i:"ruler",v:a=>a.p.ht+" cm",x:a=>a.p.ht},
 {k:"wt",re:/weight|how heavy|heaviest|lightest|\bkg\b|\bweigh/,n:"Weight",i:"scale",v:a=>a.p.wt+" kg",x:a=>a.p.wt},
 {k:"bmi",re:/\bbmi\b|body mass/,n:"BMI",i:"scale",v:a=>f1(bmiA(a)),x:bmiA},
 {k:"bf",re:/body fat|fat percent/,n:"Body fat",i:"body",v:a=>a.p.bf+"%",x:a=>a.p.bf},
 {k:"water",re:/water|hydrat|fluid intake/,n:"Water intake",i:"drop",v:a=>f1(a.p.water)+" L/day (target "+(a.p.sex=="f"?2.1:2.5)+" L)",x:a=>a.p.water},
 {k:"ex",re:/exercis|workout|training/,n:"Exercise",i:"activity",v:a=>a.p.ex+" min/day",x:a=>a.p.ex},
 {k:"t",re:/t-?score|bone density/,n:"Bone T-score",i:"bone",v:a=>f1(a.p.t),x:a=>a.p.t},
 {k:"dose",re:/\bdose\b|radiation (dose|exposure|limit|budget)|\bmsv\b/,n:"Radiation dose (modelled)",i:"radiation",v:a=>r0(dose(a))+" mSv",x:dose},
 {k:"hab",re:/time in hab|minutes in hab|exposure time|how long .*hab/,n:"Time in Hab-2",i:"clock",v:a=>(L1(a.id).exposureMin||0)+" min",x:a=>L1(a.id).exposureMin||0},
 {k:"loc",re:/\bwhere\b|location|which room|which module/,n:"Location",i:"pin",v:a=>L1(a.id).location||"–"},
 {k:"role",re:/\brole\b|\bjob\b|\bposition\b|what does .+ do/,n:"Role",i:"user",v:a=>a.role},
 {k:"sex",re:/\bgender\b|\bsex\b/,n:"Sex",i:"user",v:a=>a.p.sex=="m"?"Male":"Female"},
 {k:"sym",re:/symptom|\bsick\b|\bill\b|unwell|feeling/,n:"Symptoms",i:"thermo",v:a=>{const e=effOf(a.id),l=L1(a.id);return e.length?e.map(s=>SYMN[s]).join(", ")+(l.symptomatic?" ("+l.symptom+")":""):"No symptoms"}}];
const attrsIn=q=>ATTR.filter(t=>t.re.test(q));
const MAXW=/highest|closest|nearest|most\b|\bmax|\btop\b|biggest|largest|oldest|tallest|heaviest|healthiest|best|longest|greatest|more\b/,MINW=/lowest|least|\bmin|smallest|youngest|shortest|lightest|worst|sickest|unhealthiest|fewest|less\b/;
const SYMW=/symptom|\bsick\b|\bill\b|unwell|not feeling|headache|complain/;
function summary(a){const l=L1(a.id),e=effOf(a.id),R=withAstro(a.id,()=>res()),rk=K.filter(k=>R[k].s!="ok").sort((x,y)=>R[y].v-R[x].v),s=scoreA(a);
 return H(a.p.name+" · "+a.role,"user")+TB(["Health","Location","Heart rate","Blood pressure","SpO₂"],[[`<b class="s-${hstat(s)} hsv">${s}%</b>`,esc(l.location||"–"),a.p.hr+" bpm",a.p.sys+"/"+a.p.dia,a.p.spo2+"%"]])+P(`${ic("thermo")}<b>Symptoms:</b> ${e.length?e.map(x=>SYMN[x]).join(", ")+(l.symptomatic?` (${esc(l.symptom)})`:""):"none"}`)+P(`${ic("scan")}<b>Top problems:</b> ${rk.slice(0,3).map(k=>Z[k].n).join(", ")||"none"}`)}
function careFor(a){const e=effOf(a.id),R=withAstro(a.id,()=>res()),rk=K.filter(k=>R[k].bs!="ok").sort((x,y)=>R[y].v-R[x].v).slice(0,3);
 let t=H("Care for "+a.p.name,"steth");
 t+=e.length?e.map(s=>`<div class="cline">${ic(SYMIC[s])}<div><b>${SH[s].n}</b><small>Medicine: ${(SH[s].med.length?SH[s].med:["none needed"]).join(", ")} · Do: ${SH[s].do.join(", ")}</small></div></div>`).join(""):P("No symptoms right now.");
 if(rk.length)t+=`<p><b>Body checks:</b></p>`+rk.map(k=>`<div class="cline">${ic(AIC[k])}<div><b>${Z[k].n}</b><small>${AH[k].do.join(", ")}</small></div></div>`).join("");
 return t+P("<i>Educational, not medical advice. No doses: follow the label and the flight surgeon.</i>")}
function foodFor(a){return withAstro(a.id,()=>{const e=symsOf(D),n=need(),gap=n-D.water;
 let t=H("Food and drink for "+a.p.name,"food")+P(`${ic("drop")}Water: <b>${f1(D.water)} L</b> of ${n} L target${gap>0.05?` · drink about <b>${f1(gap)} L more</b>`:" · on target"}.`);
 if(e.length)t+=P(`<b>For today's symptoms (${e.map(s=>SYMN[s].toLowerCase()).join(", ")}):</b>`)+UL([`Eat and drink: ${[...new Set(e.flatMap(s=>SH[s].eat))].join(", ")}`,`Avoid: ${[...new Set(e.flatMap(s=>SH[s].no))].join(", ")}`]);
 t+=P("<b>Every day:</b> leafy greens, dairy or fortified foods, oily fish, citrus and peppers, protein at each meal. Go easy on salt, caffeine and sugary snacks.");
 const tips=tipsFor(res()).filter(x=>x[0]=="warn").map(x=>x[2]);if(tips.length)t+=P("<b>From the numbers:</b>")+UL(tips);
 return t})}
function problemsFor(a){const R=withAstro(a.id,()=>res()),rk=K.filter(k=>R[k].s!="ok").sort((x,y)=>R[y].v-R[x].v);
 return H(rk.length+" area"+(rk.length==1?"":"s")+" to watch for "+a.p.name,"scan")+(rk.length?UL(rk.map(k=>`<b>${Z[k].n}</b> (${LAB[R[k].s]}): ${esc(R[k].t)}`)):P("Every area is in range."))}
function co2Trend(){const h=env().hist||[];if(h.length<4)return "steady";const a=h.slice(0,Math.floor(h.length/2)),b=h.slice(Math.floor(h.length/2)),av=x=>x.reduce((s,v)=>s+v,0)/x.length,d=av(b)-av(a);return d>15?"rising":d<-15?"falling":"steady"}
function nextSteps(){const e=env(),s=[];
 if(e.stage>=2&&!e.restricted)s.push("Restrict entry to Hab-2");
 if(e.stage>=2&&e.mode!="ventilate")s.push("Ventilate Hab-2");
 if(e.stage>=3&&e.mode!="isolate")s.push("Consider isolating Hab-2");
 if(e.stage>=2&&!e.verified)s.push("Request a sensor check to confirm the CO₂ reading");
 const sy=ROSTER.filter(a=>effOf(a.id).length);if(sy.length)s.push("Check on "+sy.map(a=>first(a.p.name)).join(" and ")+" and open their health guide");
 if(!s.length)s.push("Keep monitoring. No action needed right now");
 return s}
const GLOSS=[
 [/\bsans\b|eye pressure|optic/,"SANS","Spaceflight-associated neuro-ocular syndrome: fluid shifts toward the head in microgravity and can change the eye and optic nerve. CrewTrace models its risk from mission day and sleep."],
 [/\bbmi\b|body mass index/,"BMI","Body mass index: weight in kg divided by height in metres squared. Healthy range 18.5 to 24.9."],
 [/t-?score/,"Bone T-score","Compares bone density with a healthy young adult. −1.0 or higher is normal; below −1.0 means low bone mass."],
 [/spo2|spo₂|oxygen saturation/,"SpO₂","Blood oxygen saturation. Healthy is 95 to 100%."],
 [/\bppm\b|what is co2|co₂ mean|carbon dioxide mean/,"CO₂ in ppm","Parts per million of carbon dioxide in cabin air. Earth air is about 420 ppm; the ISS usually runs much higher, and raised CO₂ can cause headaches."],
 [/\bgcr\b|galactic cosmic/,"GCR","Galactic cosmic rays: high-energy particles from outside the solar system."],
 [/\bsaa\b|south atlantic/,"SAA","South Atlantic Anomaly: a region where the ISS passes through more trapped radiation."],
 [/\bmsv\b|\bmgy\b|sievert|gray\b/,"mSv and mGy","mGy measures absorbed dose; mSv adjusts it for biological effect. NASA's career limit is 600 mSv."],
 [/orthostatic/,"Orthostatic risk","The chance of feeling faint when standing after landing, because blood volume drops in space."],
 [/plasma volume/,"Plasma volume","The liquid part of blood. It falls by around 10 to 15% in microgravity."],
 [/\bosdr\b|\beda\b|rr-?9/,"NASA OSDR EDA, RR-9","NASA's Open Science Data Repository Environmental Data Application. RR-9 is the ISS mission whose cabin CO₂, temperature, humidity and radiation CrewTrace replays."],
 [/\bdonki\b/,"NASA DONKI","NASA's space weather database: flares, CMEs, geomagnetic storms and particle events."],
 [/\bhab-?2\b.*(what|mean)|what is hab-?2/,"Hab-2","A habitation module on the CrewTrace map. Its environment comes from the NASA RR-9 ISS cabin replay."],
 [/health score.*(calculat|work|mean|how)|how .*health score|what is (the )?health score/,"Health score","A live 0 to 100% score. It starts from the body-area risks (bone, muscle, eyes, heart, kidneys and more), then drops when live heart rate rises, SpO₂ falls, blood pressure climbs, or symptoms are reported (more for higher severity). 75%+ is Good, 55 to 74% Fair, below 55% Needs attention."]];
/* ---------- engine ---------- */
function local(q0){
 const q=q0.toLowerCase().replace(/[’`]/g,"'").replace(/(\w)'s\b/g,"$1").replace(/\bhab ?2\b|\bhab two\b/g,"hab-2").replace(/\bco 2\b/g,"co2").replace(/\bwhats\b/g,"what is").replace(/\bhows\b/g,"how is").replace(/\bwhos\b/g,"who is").replace(/[?!.,]+/g," ").replace(/\s+/g," ").trim()+" ";
 if(/chest pain|can'?t breathe|cannot breathe|trouble breathing|hard to breathe|unconscious|passed out|severe bleeding|seizure|stroke|heart attack|overdose|poison/.test(q))
  return out(P(`${ic("alert")}<b>This may be an emergency.</b> Contact the flight surgeon or mission control now, or your local emergency number on the ground. Do not wait for a chat reply.`)+P("Keep the person calm and still, stay with them, and follow the first-aid steps you know."),[],true);
 if(/suicid|kill myself|end my life|self.?harm|hurt myself/.test(q))
  return out(P("<b>I'm really sorry you're going through this.</b> Please reach someone you trust, the flight surgeon or crew support, or your local emergency number or a crisis line right now, and try not to be alone.")+P("If you want to tell me what's going on, I'm here while you reach out."),[],true);
 if(/^(hi|hello|hey|salam|marhaba|good (morning|afternoon|evening))\b/.test(q))return out(P("Hello. Ask me about the crew, the habitat, health and care, or tell me to do something like <i>ventilate Hab-2</i>."));
 if(/^(thanks|thank you|thx|shukran)/.test(q))return out(P("You're welcome."));
 if(/who are you|what are you|are you (an )?(ai|real|human|bot)|your name/.test(q))return out(P("I'm the <b>CrewTrace Assistant</b>. I answer from the live crew, habitat and health data on this site. For open questions on any topic, connect a live AI with the settings button above."));
 if(/^(help|faq|questions)\b|what can (i|you) (ask|do)|frequent questions|list (of )?questions|what (questions|should i ask)/.test(q))return out(faqHtml(true));
 // actions
 const E=env();
 const act=(id,msg)=>{const b=$(id);if(b)b.click();return out(P(`${ic("check")}${msg}`),[["dash","Dashboard"]])};
 if(/^(please |can you |could you |)?(ventilate|turn on ventilation)/.test(q))return E.mode=="ventilate"?out(P("Hab-2 ventilation is already on.")):act("#ventButton","Local ventilation is on for Hab-2. New entry is blocked.");
 if(/^(please |can you |could you |)?isolate/.test(q))return E.mode=="isolate"?out(P("Hab-2 is already isolated.")):act("#isolateButton","Hab-2 is isolated.");
 if(/^(please |can you |could you |)?(restrict|block|close) (entry|access|hab)/.test(q))return E.restricted?out(P("Hab-2 entry is already blocked.")):act("#restrictButton","Hab-2 entry is restricted.");
 if(/^(please |can you |could you |)?(pause|stop) (the )?(feed|replay|data|stream)/.test(q))return E.paused?out(P("The feed is already paused.")):act("#pauseButton","The NASA replay is paused.");
 if(/^(please |can you |could you |)?(resume|unpause|continue|start|play) (the )?(feed|replay|data|stream)/.test(q))return !E.paused?out(P("The feed is already running.")):act("#pauseButton","The NASA replay is running again.");
 if(/^(please |can you |could you |)?reset (the )?(scenario|simulation|crew)/.test(q))return act("#resetButton","Scenario reset with a new crew.");
 if(/^(please |can you |could you |)?(export|download) (the )?(incident|report)/.test(q))return act("#exportButton","Incident report exported.");
 if(/^(please |can you |could you |)?acknowledge/.test(q))return act("#ackButton","Alert acknowledged.");
 if(/^(please |can you |could you |)?(request|run) (a )?sensor check/.test(q))return act("#verifyButton","Secondary sensor check requested.");
 // navigation
 const P1=people(q);
 if(P1.length==1&&/\b(open|show|select|switch to|choose|go to)\b/.test(q)&&!attrsIn(q).length){const a=P1[0],t=/health guide|care|food|diet/.test(q)?"health":"profile";selectAstro(a.id);go(t);CTX.last=a.id;return out(P(`Showing ${nameB(a)} in the ${TABS[t]}.`))}
 if(/\b(open|go to|show me|take me to|navigate to|switch to)\b/.test(q)){const m=[["profile",/profile|body explorer|problem map|compare/],["health",/health guide|care plan|food and drink|nutrition/],["alert",/exposure/],["env",/telemetry|log/],["about",/about|sources|method/],["dash",/dashboard|home|nasa/]].find(x=>x[1].test(q));
  if(m){go(m[0]);return out(P(`Opened the <b>${TABS[m[0]]}</b>.`))}}
 // glossary (explicit "what is")
 if(/what('?s| is| are| does)|explain|meaning|define|how is .* calculated|how does .* work/.test(q)){const g=GLOSS.find(x=>x[0].test(q));if(g)return out(H(g[1],"info")+P(g[2]))}
 const A=attrsIn(q);
 // whole-crew and attention questions
 const ANY=/\b(anyone|anybody|any one|someone|somebody|any crew|any astronaut|any of them)\b/;
 const needAtt=()=>ROSTER.map(a=>({a,s:scoreA(a),e:effOf(a.id)})).filter(x=>x.e.length||x.s<55).sort((x,y)=>x.s-y.s);
 if((ANY.test(q)&&(SYMW.test(q)||/danger|risk|attention|problem/.test(q)))||/needs? (attention|help|care)|at risk|in danger|most at risk|worry about|who should rest|who is not ok|who is struggling/.test(q)){const n=needAtt();
  return out(n.length?H(n.length+" astronaut"+(n.length>1?"s need":" needs")+" attention","alert")+UL(n.map(x=>`${nameB(x.a)} · <b class="s-${hstat(x.s)} hsv">${x.s}%</b>${x.e.length?" · "+x.e.map(s=>SYMN[s]).join(", "):""}${L1(x.a.id).symptomatic?` (${esc(L1(x.a.id).symptom)}, ${esc(L1(x.a.id).location)})`:""}`)):P(`${ic("shield")}Nobody needs attention right now: no symptoms and every health score is 55% or higher.`),[["health","Health guide"]])}
 if(/how (is|are) (everyone|everybody|the crew|the astronauts|the team|all|they)|overall (crew|team)|crew health|team health|everyone (ok|okay|fine|alright)|is the crew (ok|okay|fine|alright|healthy)/.test(q))return out(H("Crew status","users")+TB(["Astronaut","Location","HR","BP","SpO₂","Health"],ROSTER.map(a=>{const l=L1(a.id),s=scoreA(a);return[`<b>${esc(a.p.name)}</b><small>${a.role}${effOf(a.id).length?" · "+effOf(a.id).map(x=>SYMN[x]).join(", "):""}</small>`,esc(l.location||"–"),a.p.hr,a.p.sys+"/"+a.p.dia,a.p.spo2+"%",`<b class="s-${hstat(s)} hsv">${s}%</b>`]})),[["dash","Dashboard"]]);
 if(/names? of (the )?(astronauts|crew)|who (is|are) (in )?the crew|who are (the )?(astronauts|crew members|members)|crew members|crew list|team members|who is on (the )?(crew|team|mission)/.test(q))return out(H("The crew","users")+UL(ROSTER.map(a=>`${nameB(a)} · ${a.role} · ${esc(L1(a.id).location||"")}`)));
 if(/evacuat|leave hab|get out of hab|should we (close|block|open)|is it safe to enter/.test(q)){const E2=env();return out(H("Hab-2 decision","alert")+P(E2.stage>=2?`Crew in Hab-2 have symptoms while CO₂ reads ${E2.co2.toLocaleString("en-US")} ppm, so yes: move symptomatic crew out, keep entry blocked and ventilate until a sensor check confirms the air.`:`No evacuation is needed right now. CO₂ is ${E2.co2.toLocaleString("en-US")} ppm and nobody in Hab-2 has symptoms. Keep monitoring.`)+UL(nextSteps().map(esc)),[["dash","Dashboard"]])}
 // counts
 if(/how many/.test(q)){
  if(SYMW.test(q)){const s=ROSTER.filter(a=>effOf(a.id).length);return out(P(`<b>${s.length} of ${ROSTER.length}</b> astronauts have symptoms${s.length?":":"."}`)+UL(s.map(a=>`${nameB(a)}: ${effOf(a.id).map(x=>SYMN[x]).join(", ")}${L1(a.id).symptomatic?` (${esc(L1(a.id).symptom)})`:""}`)),[["health","Health guide"]])}
  if(/hab-?2|in hab/.test(q)){const s=crewL().filter(m=>m.location=="Hab-2");return out(P(`<b>${s.length}</b> in Hab-2${s.length?": "+s.map(m=>esc(m.name)).join(", "):"."}`))}
  if(/problem|area|flag|issue/.test(q)){const a=P1[0]||AS(cur),R=withAstro(a.id,()=>res());return out(P(`${nameB(a)} has <b>${K.filter(k=>R[k].s!="ok").length}</b> areas to watch.`))}
  if(/report/.test(q)){const n=crewL().filter(m=>m.symptomatic).length;return out(P(`The crew monitor has <b>${n}</b> symptom report${n==1?"":"s"}.`))}
  if(/healthy|fine|well\b/.test(q)){const s=ROSTER.filter(a=>!effOf(a.id).length&&scoreA(a)>=75);return out(P(`<b>${s.length}</b> astronaut${s.length==1?" is":"s are"} healthy (no symptoms, score 75%+): ${s.map(a=>esc(a.p.name)).join(", ")||"none"}.`))}
  if(/crew|astronaut|people|member|person/.test(q))return out(P(`There are <b>${ROSTER.length}</b> astronauts: the commander and four crew.`)+UL(ROSTER.map(a=>`${nameB(a)}, ${a.role}`)))}
 // who has symptoms / who is where
 if(/\b(who|which)\b/.test(q)&&SYMW.test(q)&&!MAXW.test(q)&&!MINW.test(q)){const s=ROSTER.filter(a=>effOf(a.id).length);return out(s.length?H("Astronauts with symptoms","thermo")+UL(s.map(a=>`${nameB(a)} (${a.role}): ${effOf(a.id).map(x=>SYMN[x]).join(", ")}${L1(a.id).symptomatic?` · ${esc(L1(a.id).symptom)} in ${esc(L1(a.id).location)}`:""}`)):P("Nobody has symptoms right now."),[["health","Health guide"]])}
 if(/\b(who|which)\b/.test(q)&&/in hab-?2|inside hab|in the hab/.test(q)){const s=crewL().filter(m=>m.location=="Hab-2");return out(P(s.length?`In Hab-2: ${s.map(m=>`<b>${esc(m.name)}</b> (${m.exposureMin||0} min)`).join(", ")}.`:"Nobody is in Hab-2."))}
 if(/\b(who|which)\b/.test(q)&&/\bin (the )?(command|science lab|lab|exercise|life support)/.test(q)){const r=/command/.test(q)?"Command":/lab/.test(q)?"Science Lab":/exercise/.test(q)?"Exercise":"Life Support",s=crewL().filter(m=>m.location==r);return out(P(s.length?`In ${r}: ${s.map(m=>`<b>${esc(m.name)}</b>`).join(", ")}.`:`Nobody is in ${r} right now.`))}
 if(/\b(who|which)\b.*\b(healthy|fine|well|ok)\b/.test(q)&&!MINW.test(q)&&!MAXW.test(q)){const s=ROSTER.filter(a=>!effOf(a.id).length&&scoreA(a)>=75);return out(P(s.length?`Healthy now (no symptoms, 75%+): ${s.map(a=>`<b>${esc(a.p.name)}</b> ${scoreA(a)}%`).join(", ")}.`:"Nobody is above 75% without symptoms right now."))}
 // superlatives
 const mx=MAXW.test(q),mn=MINW.test(q);
 if((mx||mn)&&(A.length||/healthiest|sickest/.test(q))){const t=A.find(x=>x.x)||ATTR[0];const sorted=[...ROSTER].sort((a,b)=>t.x(b)-t.x(a));const pick=mx&&!/least|lowest|worst|sickest|unhealthiest/.test(q)?sorted[0]:sorted[sorted.length-1];CTX.last=pick.id;
  return out(P(`${nameB(pick)} has the ${mx&&!/least|lowest|worst|sickest|unhealthiest/.test(q)?"highest":"lowest"} ${lc(t.n)}: <b>${t.v(pick)}</b>.`)+TB(["Astronaut",t.n],sorted.map(a=>[esc(a.p.name),t.v(a)])),[["profile","Astronaut profile"]])}
 if(/average|mean\b/.test(q)&&A.length){const t=A.find(x=>x.x);if(t){const v=ROSTER.reduce((s,a)=>s+t.x(a),0)/ROSTER.length;return out(P(`Crew average ${lc(t.n)}: <b>${t.v(ROSTER[0]).replace(/^-?[\d.]+(\/\d+)?/,Math.abs(v)<100?f1(v):r0(v))}</b>.`))}}
 // compare
 if(/compare|\bvs\.?\b|versus|difference between/.test(q)){
  if(P1.length>=2){const rows=[["Health",a=>scoreA(a)+"%"],["Heart rate",a=>a.p.hr+" bpm"],["Blood pressure",a=>a.p.sys+"/"+a.p.dia],["SpO₂",a=>a.p.spo2+"%"],["Sleep",a=>f1(a.p.sleep)+" h"],["BMI",a=>f1(bmiA(a))],["Water",a=>f1(a.p.water)+" L"],["Exercise",a=>a.p.ex+" min"],["Symptoms",a=>effOf(a.id).map(s=>SYMN[s]).join(", ")||"none"]];
   return out(H("Comparison","users")+TB(["",...P1.map(a=>esc(first(a.p.name)))],rows.map(r=>[r[0],...P1.map(r[1])])))}
  const a=P1[0]||AS(cur);return out(withAstro(a.id,()=>{const b=bfRef(D.sex,D.age),rows=[["BMI",f1(bmi()),"18.5–24.9",bmi()<18.5||bmi()>24.9],["Body fat",D.bf+"%",b[0]+"–"+b[1]+"%",D.bf<b[0]||D.bf>b[1]],["Heart rate",D.hr+" bpm","50–100",D.hr<50||D.hr>100],["Blood pressure",D.sys+"/"+D.dia,"under 120/80",D.sys>119||D.dia>79],["SpO₂",D.spo2+"%","95–100%",D.spo2<95],["Sleep",f1(D.sleep)+" h","7–9 h",D.sleep<7||D.sleep>9],["Water",f1(D.water)+" L",need()+"+ L",D.water<need()],["Exercise",D.ex+" min","120 min",D.ex<120]];
   return H(a.p.name+" vs healthy ranges","ruler")+TB(["","Value","Healthy"],rows.map(r=>[r[0],r[3]?`<b class="bad">${r[1]}</b>`:r[1],r[2]]))}),[["profile","Astronaut profile"]])}
 // everyone list
 if(/\b(list|all|everyone|every|each|whole)\b.*\b(crew|astronaut|member|people|name|vitals|everyone)\b|^(crew|crew list|crew status|status of (the )?crew|the crew)\b|crew (status|overview|vitals)/.test(q)||(/\b(everyone|all|each|crew)\b/.test(q)&&A.length&&!P1.length)){
  if(A.length&&A[0].k!="sym"){const t=A[0];return out(H(t.n+" · whole crew",t.i)+TB(["Astronaut",t.n],ROSTER.map(a=>[esc(a.p.name),t.v(a)])))}
  return out(H("Crew status","users")+TB(["Astronaut","Location","HR","BP","SpO₂","Health"],ROSTER.map(a=>{const l=L1(a.id),s=scoreA(a);return[`<b>${esc(a.p.name)}</b><small>${a.role}</small>`,esc(l.location||"–"),a.p.hr,a.p.sys+"/"+a.p.dia,a.p.spo2+"%",`<b class="s-${hstat(s)} hsv">${s}%</b>`]})),[["dash","Dashboard"]])}
 // person questions
 if(P1.length){
  const a=P1[0];CTX.last=a.id;
  if(/^(who is|who's) (the )?(commander|pilot|medical officer|doctor|flight engineer|engineer|mission specialist|specialist|captain|leader)/.test(q))return out(P(`The ${a.role.toLowerCase()} is ${nameB(a)}.`)+summary(a),[["profile","Astronaut profile"]]);
  if(/\b(can|may|could|should)\b.*\b(enter|go (in)?to|go into|visit)\b/.test(q)){const E2=env(),bl=E2.restricted||E2.mode=="isolate";return out(P(bl?`<b>No.</b> Hab-2 entry is blocked${E2.mode=="isolate"?" and the module is isolated":""} until a sensor check confirms the air. ${nameB(a)} is in ${esc(L1(a.id).location)}.`:`<b>Yes.</b> Hab-2 is open and monitored (CO₂ ${E2.co2.toLocaleString("en-US")} ppm). ${nameB(a)} is in ${esc(L1(a.id).location)}.`))}
  {const rm=q.match(/\bis .+ (in|at) (the )?(hab-2|command|science lab|lab|exercise|life support)/);if(rm){const r={"hab-2":"Hab-2",command:"Command","science lab":"Science Lab",lab:"Science Lab",exercise:"Exercise","life support":"Life Support"}[rm[3]],l=L1(a.id).location;return out(P(`<b>${l==r?"Yes":"No"}.</b> ${nameB(a)} is in ${esc(l)}${l=="Hab-2"?` (${L1(a.id).exposureMin||0} min so far)`:""}.`))}}
  if(/^(is|are) .*\b(ok|okay|fine|alright|well|good|healthy|sick|ill|unwell)\b|how is .* (feeling|doing)/.test(q)&&!A.filter(t=>t.k!="sym"&&t.k!="health").length){const s=scoreA(a),e=effOf(a.id);return out(P(`${e.length||s<55?`<b>${esc(first(a.p.name))} needs attention.</b>`:`<b>${esc(first(a.p.name))} is doing ${s>=75?"well":"OK"}.</b>`} Health ${s}% (${HLAB[hstat(s)]}).`)+summary(a),[["health","Health guide"]])}
  if(A.length&&!/problem|risk|issue|wrong|concern/.test(q))return out(P1.map(x=>H(x.p.name,"user")+UL(A.map(t=>`${ic(t.i)}${t.n}: <b>${esc(t.v(x))}</b>`))).join(""),[["profile","Astronaut profile"]]);
  if(/problem|risk|issue|wrong|concern|flag|areas?\b/.test(q))return out(problemsFor(a),[["profile","Astronaut profile"]]);
  if(/\beat|food|diet|drink|nutrition|meal/.test(q))return out(foodFor(a),[["health","Health guide"]]);
  if(/care|treat|medicine|medication|advice|plan|what should|help (him|her)/.test(q))return out(careFor(a),[["health","Health guide"]]);
  return out(summary(a),[["profile","Astronaut profile"],["health","Health guide"]])}
 // environment
 const co2=E.co2||0;
 if(/co2|co₂|carbon dioxide|air quality|cabin air|\bthe air\b|\bair (ok|okay|safe|good|clean)|breathable/.test(q)){const tr=co2Trend(),lvl=co2<1000?"normal":co2<2500?"a little elevated":co2<5000?"elevated, typical of the ISS":"high";
  if(/rising|increas|going up|trend|falling|decreas|going down|dropping/.test(q))return out(P(`Cabin CO₂ is <b>${tr}</b>: now <b>${co2.toLocaleString("en-US")} ppm</b>, range ${Math.min(...E.hist).toLocaleString("en-US")} to ${Math.max(...E.hist).toLocaleString("en-US")} ppm over the last ${E.hist.length} readings.`),[["dash","Dashboard"]]);
  if(/safe|danger|ok\b|okay|normal|worry|good|clean|breathable/.test(q))return out(P(`At <b>${co2.toLocaleString("en-US")} ppm</b> the cabin is ${lvl}. It is not immediately dangerous, but levels like this can cause headaches and tiredness, so watch for symptoms and ventilate if several crew report them.`));
  return out(P(`Cabin CO₂ is <b>${co2.toLocaleString("en-US")} ppm</b> (NASA RR-9 replay), ${lvl}, and ${tr}. Earth air is about 420 ppm.`),[["dash","Dashboard"],["env","Telemetry log"]])}
 if(/temperature|how (hot|cold|warm)/.test(q)&&!/fever|body/.test(q))return out(P(`Cabin temperature is <b>${f1(E.temp)} °C</b>.`));
 if(/humid/.test(q))return out(P(`Cabin humidity is <b>${E.humidity}% RH</b>.`));
 if(/radiation|gcr|saa|mgy/.test(q)&&!P1.length){const r=E.rad||{};return out(P(`Today's record: total <b>${(r.total||0).toFixed(3)} mGy/day</b> (GCR ${(r.gcr||0).toFixed(3)}, SAA ${(r.saa||0).toFixed(3)}).`)+P(`Modelled dose so far: ${ROSTER.map(a=>`${esc(first(a.p.name))} ${r0(dose(a))} mSv`).join(", ")}.`))}
 if(/space weather|solar|flare|\bcme|geomagnetic|\bkp\b|storm|particle event|\bsep\b|\bgle\b|donki|\b\d{1,2}(st|nd|rd|th)? (sep|september)\b|\b(sep|september) \d{1,2}\b/.test(q)){const day=replayDay(),ev=swEvents(day);
  if(/biggest|strongest|largest|worst|max/.test(q))return out(P(`The strongest flare was <b>X9.3</b> on 6 Sep 2017 at 12:02 UT from region 2673, with an Earth-directed CME at 1,238 km/s. It led to a Kp 8 (G4) storm on 7–8 Sep.`));
  const dm=q.match(/\b(\d{1,2})(st|nd|rd|th)? (sep|september)|(sep|september) (\d{1,2})\b/);if(dm){const d=String(+(dm[1]||dm[5])).padStart(2,"0"),e2=swEvents(d);return out(H(+d+" Sep 2017","sun")+(e2.length?UL(e2.map(x=>esc(x[1]))):P("No flares, CMEs, storms or particle events recorded that day.")))}
  return out(H("Space weather · 4–18 Sep 2017","sun")+P(`Saved NASA DONKI and NOAA GOES records for the same days as the RR-9 radiation replay: <b>${live.flr} flares</b> (${live.x} X-class, strongest ${live.mx}), <b>${live.cme} CMEs</b> (up to 2,650 km/s), <b>${live.gst} geomagnetic storms</b> (max Kp ${live.kp}, G4) and <b>${live.sep} particle events</b>, plus a ground level enhancement on 10 Sep. Level: <b>${live.lvl}</b>.`)+P(`<b>Today in the replay (${+day} Sep):</b> ${ev.length?ev.map(x=>esc(x[1])).join("; "):"quiet"}.`),[["dash","Dashboard"]])}
 {const s0=findSym(q);if(s0)return symAns(s0)}
 if(/what should (we|i) do|next step|recommend|what now|action plan|what to do/.test(q))return out(H("Recommended now","check")+UL(nextSteps().map(esc)),[["dash","Dashboard"]]);
 if(/hab-?2/.test(q)&&/safe|open|status|restrict|enter|access|blocked|closed|isolat|ventilat/.test(q))return out(P(`Hab-2 is <b>${E.mode=="isolate"?"isolated":E.restricted?(E.mode=="ventilate"?"ventilating, entry blocked":"entry blocked"):"open and monitored"}</b>. Stage: ${STAGES[E.stage]}. CO₂ ${co2.toLocaleString("en-US")} ppm.`)+(E.stage>=2?P("Because crew in Hab-2 developed symptoms, new entry should stay blocked until a sensor check confirms the air."):""));
 if(/alert|incident|situation|what'?s happening|what is happening|status|update|stage|overview/.test(q))return out(H(STAGES[E.stage],"alert")+P(esc($("#alertCopy").textContent))+P(`<b>Finding:</b> ${esc($("#finding-heading").textContent)} · ${esc($("#confidenceBadge").textContent)}`),[["alert","Exposure and care"],["dash","Dashboard"]]);
 if(/\btime\b|date|clock|mission day|what day/.test(q))return out(P(`Replay time: <b>${esc($("#missionClock").textContent)}</b>. Mission day <b>${D.day}</b>.`));
 if(/feed|replay|paused|live data/.test(q))return out(P(`The NASA RR-9 replay is <b>${E.paused?"paused":"running"}</b>, one record per second.`));
 // symptoms and areas
 const s=findSym(q);if(s)return symAns(s);
 const ar=findArea(q);if(ar){const a=AS(cur),R=withAstro(a.id,()=>res()),z=Z[ar],x=R[ar];return out(H(z.n+" · "+a.p.name,AIC[ar])+P(`<b>Status:</b> ${LAB[x.s]}. ${esc(x.t)}`)+P(`<b>Why:</b> ${z.why}`)+P(`<b>What helps:</b> ${z.fix}`),[["profile","Astronaut profile"]])}
 // attribute without a person -> selected astronaut
 if(A.length){const a=AS(cur);CTX.last=a.id;return out(H(a.p.name+" (selected)","user")+UL(A.map(t=>`${ic(t.i)}${t.n}: <b>${esc(t.v(a))}</b>`))+P("<i>Ask with a name, or “for everyone”, for other astronauts.</i>"))}
 if(/water|drink|hydrat/.test(q))return out(foodFor(AS(cur)),[["health","Health guide"]]);
 if(/vitamin|calcium|nutri|\bdiet|\beat\b|\bfood|\bmeals?\b|protein/.test(q))return out(H("Daily targets","food")+UL(["Water: 2.5 L (men), 2.1 L (women)","Vitamin D: 25 µg","Calcium: 1,000 to 1,200 mg","Vitamin K: 120 µg (men), 90 µg (women)","Vitamin C: 125 mg (men), 110 mg (women)"])+P("Ask “what should Ali eat?” for a personal plan."),[["health","Health guide"]]);
 if(/medicine|medication|drug|pill|tablet|treat/.test(q))return out(P("Tell me the symptom, for example headache, fever, nausea, cough, sleep trouble, rash, eye irritation, diarrhea, heartburn or fatigue."),[["health","Health guide"]]);
 if(/dose|how much (should|can) i take|\bmg\b/.test(q))return out(P("I don't give doses. Follow the label and ask the flight surgeon, a doctor or a pharmacist."));
 if(/nasa|real data|is (this|the data) (real|valid|accurate)|data (valid|accurate)|simulat|fake/.test(q))return out(P("Cabin CO₂, temperature, humidity and radiation are real NASA OSDR data from the ISS RR-9 mission, replayed. Space weather comes from NASA DONKI. Crew names, vitals, symptoms and positions are a labelled simulation."),[["about","About and sources"]]);
 if(/crewtrace|this (site|app|website)|what does (it|this) do|how (do i|to) use/.test(q))return out(P("CrewTrace tracks a five-person crew: live NASA habitat data, each astronaut's live vitals and health score, a clickable body check, and a health guide for symptoms, food and drink.")+UL(Object.values(TABS)),[["about","About and sources"]]);
 const g=GLOSS.find(x=>x[0].test(q));if(g)return out(H(g[1],"info")+P(g[2]));
 if(/crew|astronaut|everyone|team|member|people/.test(q))return out(P("Here is the current crew picture. Ask about a person by name or role for more detail.")+H("Crew status","users")+TB(["Astronaut","Location","HR","Health"],ROSTER.map(a=>{const s=scoreA(a);return[`<b>${esc(a.p.name)}</b><small>${a.role}</small>`,esc(L1(a.id).location||"–"),a.p.hr,`<b class="s-${hstat(s)} hsv">${s}%</b>`]})));
 return null}
/* ---------- symptom answers ---------- */
const SYMKW=[["fatigue",/fatigue|tired|exhaust|weak|no energy/],["cough",/cough|sore throat|throat|phlegm/],["fever",/fever|chills|infection|\bflu\b|high temperature/],["nausea",/nausea|vomit|motion sick|queasy|space sick|nauseous|throw up/],["congestion",/congest|stuffy|allerg|runny nose|sneez|sinus|blocked nose/],["diarrhea",/diarrh|loose stool/],["gi",/constipat|heartburn|reflux|indigest|bloat|stomach ache/],["sleep",/sleep|insomnia|can'?t sleep/],["skin",/rash|wound|itch|\bskin\b|\bcut\b|\bburn\b/],["eyes",/\beyes?\b|dry eyes|red eyes|vision/],["pain",/headache|head ache|migraine|\bpain\b|\bache\b|sore muscle|back pain|cramp/]];
function findSym(q){const r=SYMKW.find(x=>x[1].test(q));return r?r[0]:null}
const AREAKW=[["head",/\bhead\b|\bbrain\b|\bsans\b/],["lungs",/\blungs?\b|breathing/],["heart",/\bheart\b|circulat|faint|dizzy/],["kidneys",/kidney|stone/],["spine",/spine|\bback\b/],["pelvis",/pelvis|\bhips?\b|bone loss|osteopor/],["thighs",/thigh|femur/],["lowerlegs",/shin|calf|calves|lower leg|\bfeet\b|\bfoot\b/],["arms",/\barms?\b|shoulder/],["abdomen",/abdomen|body fat|\bbelly\b/]];
function findArea(q){const r=AREAKW.find(x=>x[1].test(q));return r?r[0]:null}
function symAns(k){const s=SH[k],h=HG.find(x=>x.k==k),who=ROSTER.filter(a=>effOf(a.id).includes(k));
 let t=H(s.n,SYMIC[k]);
 if(h&&h.what)t+=P(esc(h.what));
 if(who.length)t+=P(`${ic("user")}<b>Crew with this now:</b> ${who.map(a=>esc(a.p.name)+(L1(a.id).symptomatic?` (${esc(L1(a.id).symptom)})`:"")).join(", ")}`);
 t+=`<div class="cline">${ic("pill")}<div><b>Medicine</b><small>${(s.med.length?s.med:["None needed"]).join(" · ")}</small></div></div><div class="cline">${ic("check")}<div><b>Do</b><small>${s.do.join(" · ")}</small></div></div><div class="cline">${ic("food")}<div><b>Eat and drink</b><small>${s.eat.join(" · ")}</small></div></div><div class="cline">${ic("ban")}<div><b>Avoid</b><small>${s.no.join(" · ")}</small></div></div>`;
 t+=`<div class="cline urgc">${ic("alert")}<div><b>Get help if</b><small>${s.red}</small></div></div>`;
 return out(t+P("<i>Educational, not medical advice. No doses: follow the label and the flight surgeon.</i>"),[["health","Health guide"]])}
/* ---------- frequent questions ---------- */
const FQ=()=>{const c=first(AS("E").p.name),a=first(AS("A").p.name),s=first(AS(cur).p.name);return[
 ["users","Crew",["How many astronauts have symptoms?","Who is in Hab-2?","Who is the healthiest?","Crew status","Who has the highest heart rate?",`Compare ${c} and ${a}`,"Who is the medical officer?","Average heart rate of the crew"]],
 ["home","Habitat",["What's the cabin CO₂ now?","Is CO₂ rising?","Is Hab-2 safe?","What's happening right now?","What should we do now?","What's the space weather?"]],
 ["steth","Health",[`What is ${s}'s health score?`,`How is ${s} doing?`,`What should ${s} eat?`,`What are ${s}'s problems?`,"Medicine for a headache","How is the health score calculated?","What is SANS?"]],
 ["sliders","Actions",["Ventilate Hab-2","Restrict entry to Hab-2","Pause the feed","Open the health guide","Export the incident report"]]]};
const CNT_KEY="crewtrace.faqCounts";
const getC=()=>{try{return JSON.parse(localStorage.getItem(CNT_KEY)||"{}")}catch(e){return{}}};
const bump=t=>{try{const c=getC(),k=t.replace(/\b[A-Z][a-z]+(?='s| and| doing| eat| problems)/g,"X");c[k]=(c[k]||0)+1;localStorage.setItem(CNT_KEY,JSON.stringify(c))}catch(e){}};
const norm=t=>t.replace(/\b[A-Z][a-z]+(?='s| and| doing| eat| problems)/g,"X");
function topQs(n,skip){const c=getC(),all=FQ().flatMap((g,gi)=>g[2].map((t,i)=>({t,w:(c[norm(t)]||0)*100-gi*3-i})));return all.filter(x=>!skip||!skip.has(x.t)).sort((a,b)=>b.w-a.w).slice(0,n).map(x=>x.t)}
function faqHtml(full){const g=FQ(),c=getC();const top=topQs(4);
 return `<div class="faq">${Object.keys(c).length?`<div class="fg"><small>${ic("trend")}Most asked</small><div class="qchips">${top.map(t=>`<button type="button" data-q="${esc(t)}">${esc(t)}</button>`).join("")}</div></div>`:""}${g.map(x=>`<div class="fg"><small>${ic(x[0])}${x[1]}</small><div class="qchips">${(full?x[2]:x[2].slice(0,3)).map(t=>`<button type="button" data-q="${esc(t)}">${esc(t)}</button>`).join("")}</div></div>`).join("")}${full?"":`<button type="button" class="morebtn" data-more="1">${ic("list")}All frequent questions</button>`}</div>`}
/* ---------- remote AI (optional) ---------- */
function context(){const E=env();return `CrewTrace live data. Cabin CO2 ${E.co2} ppm (${co2Trend()}), ${E.temp} C, ${E.humidity}% RH. Stage: ${STAGES[E.stage]}. Hab-2 ${E.restricted?"restricted":"open"}. Crew: ${ROSTER.map(a=>`${a.p.name} (${a.role}, ${L1(a.id).location}) HR ${a.p.hr}, BP ${a.p.sys}/${a.p.dia}, SpO2 ${a.p.spo2}%, health ${scoreA(a)}%, symptoms: ${effOf(a.id).map(s=>SYMN[s]).join(", ")||"none"}`).join(" | ")}. Selected: ${D.name}. Educational use only, give no doses.`}
const EP="crewtrace.aiEndpoint";
const getEP=()=>{try{return localStorage.getItem(EP)||""}catch(e){return""}};
const setEP=v=>{try{v?localStorage.setItem(EP,v):localStorage.removeItem(EP)}catch(e){}};
const hist=[];
async function remote(){const url=getEP();if(!url)return null;
 try{const r=await fetch(url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:hist.slice(-12),context:context()})});if(!r.ok)throw 0;const j=await r.json();const t=j.reply||j.text||j.message;if(!t)throw 0;return out(String(t).split(/\n{2,}/).map(p=>P(esc(p).replace(/\n/g,"<br>"))).join(""))}catch(e){return null}}
const FALLBACK=()=>out(P("I couldn't match that to CrewTrace's data. Here are questions I can answer:")+faqHtml(false)+P(`<small class="note">For open questions on any topic, connect a live AI with the settings button above.</small>`));
/* ---------- UI ---------- */
const wrap=document.createElement("div");
wrap.innerHTML=`<section class="chat" id="chat" role="dialog" aria-label="CrewTrace assistant" hidden>
<div class="chat-h"><span class="av">${ic("sparkle")}</span><div class="t"><b>CrewTrace Assistant</b><small id="chatMode">Built-in · live crew and habitat data</small></div><button id="chatFaq" aria-label="Frequent questions" title="Frequent questions">${ic("list")}</button><button id="chatSet" aria-label="Connect a live AI" title="Connect a live AI">${ic("sliders")}</button><button id="chatX" aria-label="Close chat">${ic("x")}</button></div>
<div class="chat-set" id="chatSetBox" hidden><b>Connect a live AI (optional)</b><br>Paste the URL of your own AI endpoint. It receives <code>{messages, context}</code> by POST and should reply <code>{reply}</code>. Never put secret keys in this page.<input id="chatUrl" type="url" placeholder="https://your-server.example/chat" aria-label="AI endpoint URL"><div class="r"><button class="btn pri" id="chatSave">Save</button><button class="btn" id="chatClear">Use built-in</button></div></div>
<div class="chat-log" id="chatLog" aria-live="polite"></div>
<div class="chips-q" id="chatQ"></div>
<form class="chat-f" id="chatForm" autocomplete="off"><input id="chatIn" type="text" placeholder="Ask anything about the crew, habitat or health…" aria-label="Message"><button type="button" id="chatSend" aria-label="Send">${ic("send")}</button></form>
<div class="chat-n">Educational information, not medical advice. In an emergency contact the flight surgeon or local emergency services.</div></section>`;
document.body.appendChild(wrap.firstElementChild);
const chat=$("#chat"),log=$("#chatLog"),inp=$("#chatIn"),asked=new Set();
function add(cls,html,acts){const d=document.createElement("div");d.className="msg "+cls;d.innerHTML=html;
 if(acts&&acts.length){const a=document.createElement("div");a.className="acts";acts.forEach(x=>{const b=document.createElement("button");b.type="button";b.textContent=x[0]=="dash"?x[1]:"Open "+x[1];b.onclick=()=>{go(x[0]);if(innerWidth<=560)close()};a.appendChild(b)});d.appendChild(a)}
 log.appendChild(d);log.scrollTop=log.scrollHeight;return d}
function suggest(){const q=$("#chatQ");q.innerHTML=topQs(3,asked).map(t=>`<button type="button" data-q="${esc(t)}">${esc(t)}</button>`).join("")}
function modeLabel(){$("#chatMode").textContent=getEP()?"Live AI connected · plus CrewTrace data":"Built-in · live crew and habitat data"}
function welcome(){add("bot",P(`Hi, I'm the <b>CrewTrace Assistant</b>. I read the live crew, habitat and health data. Ask in your own words, or pick a frequent question:`)+faqHtml(false));suggest()}
async function send(t){t=String(t).trim();if(!t)return;asked.add(t);bump(t);add("me",esc(t));inp.value="";hist.push({role:"user",content:t});
 const loc=local(t);let r;
 if(loc&&loc.urgent)r=loc;else{const w=add("bot typing","Thinking…");r=await remote();if(!r)r=loc||FALLBACK();w.remove()}
 const d=add("bot"+(r.urgent?" urgent":""),r.html,r.acts);hist.push({role:"assistant",content:d.innerText.slice(0,1500)});suggest()}
function open(){chat.hidden=false;if(!log.children.length)welcome();modeLabel();setTimeout(()=>inp.focus(),30)}
function close(){chat.hidden=true;const b=$("#chatBtn");if(b)b.focus()}
chat.addEventListener("click",e=>{const b=e.target.closest("[data-q]");if(b){send(b.dataset.q);return}if(e.target.closest("[data-more]")){add("bot",P("Frequent questions:")+faqHtml(true))}});
$("#chatForm").addEventListener("submit",e=>{e.preventDefault();send(inp.value)});
$("#chatSend").addEventListener("click",e=>{e.preventDefault();e.stopPropagation();send(inp.value);inp.focus()});
inp.addEventListener("keydown",e=>{if(e.key==="Enter"&&!e.shiftKey&&!e.isComposing){e.preventDefault();send(inp.value)}});
$("#chatX").onclick=close;
$("#chatFaq").onclick=()=>add("bot",P("Frequent questions:")+faqHtml(true));
$("#chatSet").onclick=()=>{const b=$("#chatSetBox");b.hidden=!b.hidden;$("#chatUrl").value=getEP()};
$("#chatSave").onclick=()=>{const v=$("#chatUrl").value.trim();if(v&&!/^https:\/\//i.test(v)){$("#chatUrl").focus();return}setEP(v);modeLabel();$("#chatSetBox").hidden=true;add("bot",P(v?"Live AI endpoint saved. I'll try it first and fall back to the built-in answers.":"Using the built-in assistant."))};
$("#chatClear").onclick=()=>{setEP("");$("#chatUrl").value="";modeLabel();$("#chatSetBox").hidden=true;add("bot",P("Using the built-in assistant."))};
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!chat.hidden)close()});
const btn=document.createElement("button");btn.className="btn";btn.id="chatBtn";btn.innerHTML=ic("sparkle")+"Ask AI";btn.setAttribute("aria-haspopup","dialog");
btn.onclick=()=>chat.hidden?open():close();
$("#pauseButton").insertAdjacentElement("afterend",btn);
const mi=document.createElement("button");mi.type="button";mi.innerHTML=ic("sparkle")+" Ask the AI assistant";mi.style.cssText="font-weight:700";
mi.addEventListener("click",e=>{e.stopPropagation();document.querySelector("#menuBtn").click();open()});
$("#nav").insertBefore(mi,$("#nav").firstChild);
window.CrewTraceChat={open,close,ask:send,local};
})();
