import {createClient} from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';
import {SUPABASE_URL,SUPABASE_ANON_KEY} from './config.js';
export const configured=SUPABASE_URL.startsWith('https://') && !SUPABASE_ANON_KEY.startsWith('COLE_');
export const supabase=configured?createClient(SUPABASE_URL,SUPABASE_ANON_KEY):null;
export function youtubeId(raw){if(!raw)return null;try{const u=new URL(raw);const h=u.hostname.toLowerCase();let id=null;if(h==='youtu.be'||h==='www.youtu.be')id=u.pathname.split('/')[1];else if(['youtube.com','www.youtube.com','m.youtube.com','music.youtube.com','youtube-nocookie.com','www.youtube-nocookie.com'].includes(h)){if(u.pathname==='/watch')id=u.searchParams.get('v');else if(/^\/(shorts|embed|live)\//.test(u.pathname))id=u.pathname.split('/')[2]}return /^[A-Za-z0-9_-]{11}$/.test(id||'')?id:null}catch{return null}}
export function validImage(raw){if(!raw)return null;try{const u=new URL(raw);return ['https:','http:'].includes(u.protocol)?u.href:null}catch{return null}}
export function el(tag,cls,text){const e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e}
export function dateText(date){return new Date(date).toLocaleDateString('pt-BR',{day:'2-digit',month:'long',year:'numeric'})}
