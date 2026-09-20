const splash=document.querySelector("#splash");
const splashStarted=performance.now();
const themeBtn=document.querySelector("#themeBtn");
const themeIcon=document.querySelector("#themeIcon");
const homeBrand=document.querySelector("#homeBrand");
const settingsBtn=document.querySelector("#settingsBtn");
const settingsPanel=document.querySelector("#settingsPanel");
const settingsBackdrop=document.querySelector("#settingsBackdrop");
const settingsCloseBtn=document.querySelector("#settingsCloseBtn");
const resetProgressBtn=document.querySelector("#resetProgressBtn");
const progressSummary=document.querySelector("#progressSummary");
const settingsStatus=document.querySelector("#settingsStatus");
let appState=loadState();
function applyTheme(){document.documentElement.classList.toggle("dark",!!appState.dark);themeIcon.src=appState.dark?"icons/icon-sun.svg":"icons/icon-moon.svg";themeBtn.setAttribute("aria-label",appState.dark?"Lichte modus":"Donkere modus");themeBtn.title=appState.dark?"Lichte modus":"Donkere modus";}
function updateProgressSummary(){const done=appState.completed||0;const scored=Object.values(appState.moduleStats||{}).reduce((s,x)=>s+(x.scored||0),0);const correct=appState.correct||0;progressSummary.textContent=done?`${done} vragen/opdrachten gemaakt${scored?` · ${correct} van ${scored} controleerbare vragen juist`:''}.`:'Nog geen oefeningen gemaakt.';}
function openSettings(){appState=loadState();updateProgressSummary();settingsBackdrop.hidden=false;settingsPanel.removeAttribute("inert");settingsPanel.classList.add("open");settingsPanel.setAttribute("aria-hidden","false");settingsPanel.setAttribute("aria-modal","true");document.body.style.overflow="hidden";settingsCloseBtn.focus();}
function closeSettings(){settingsPanel.classList.remove("open");settingsPanel.setAttribute("aria-hidden","true");settingsPanel.setAttribute("aria-modal","false");settingsPanel.setAttribute("inert","");settingsBackdrop.hidden=true;document.body.style.overflow="";}
function hideSplash(){const elapsed=performance.now()-splashStarted;setTimeout(()=>{splash.classList.add("splash-screen--hide");setTimeout(()=>splash.hidden=true,360);},Math.max(0,1400-elapsed));}
themeBtn.addEventListener("click",()=>{appState.dark=!appState.dark;saveState(appState);applyTheme();});homeBrand.addEventListener("click",()=>LearningEngine.goHome());settingsBtn.addEventListener("click",openSettings);settingsCloseBtn.addEventListener("click",closeSettings);settingsBackdrop.addEventListener("click",closeSettings);document.addEventListener("keydown",e=>{if(e.key==="Escape"&&settingsPanel.classList.contains("open"))closeSettings();});resetProgressBtn.addEventListener("click",()=>{if(!confirm("Lokale voortgang wissen?"))return;resetState();appState=loadState();updateProgressSummary();settingsStatus.textContent="Voortgang gewist.";});window.addEventListener('oefenen4e:progress',()=>{appState=loadState();});
async function init(){applyTheme();try{await LearningEngine.init();}catch(error){console.error(error);document.querySelector("#homeTitle").textContent="Starten mislukt";document.querySelector("#subjectGrid").textContent=error.message||"Onbekende fout.";}finally{hideSplash();}}
const isLocal=location.hostname==="localhost"||location.hostname==="127.0.0.1";
if("serviceWorker" in navigator&&!isLocal){window.addEventListener("load",()=>navigator.serviceWorker.register(`./service-worker.js?v=${document.querySelector('meta[name="app-version"]')?.content||'dev'}`).catch(error=>console.warn("Service worker niet geregistreerd",error)));}
init();
