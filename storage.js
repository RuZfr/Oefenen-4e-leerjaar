const STORAGE_KEY="oefenen-4e-state-v1";
function defaultState(){return{dark:false,completed:0,correct:0,moduleStats:{},seen:{}};}
function loadState(){try{return{...defaultState(),...JSON.parse(localStorage.getItem(STORAGE_KEY)||"{}")};}catch{return defaultState();}}
function saveState(state){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(state));}catch{}}
function resetState(){try{localStorage.removeItem(STORAGE_KEY);}catch{}}
