import{X as oi,r as Vn}from"./index-YGaEa8Rv.js";const uf=n=>oi(n).format("DD/MM/YY HH:mm"),cf=n=>{const t=document.getElementById(n);t&&t.scrollIntoView({behavior:"smooth"})},hf=n=>oi(n).fromNow(),lf=n=>n<1e3?n.toString():`${Math.floor(n/1e3)}N`,df=n=>oi(n).format("DD/MM/YYYY"),ff=n=>{const[t,e]=Vn.useState({value:void 0,status:"ready",error:null}),r=Vn.useCallback(u=>(e(h=>({...h,status:"ready",value:u})),Promise.resolve(u)),[]),s=Vn.useCallback(u=>(e(h=>({...h,status:"error",error:u})),console.log(u),Promise.reject(u)),[]);return{execute:Vn.useCallback((...u)=>(e(h=>({...h,status:"loading",value:void 0,error:null})),n(...u).then(r).catch(s)),[n,s,r]),...t}};var Us={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},xu=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],u=n[e++],h=n[e++],d=((s&7)<<18|(o&63)<<12|(u&63)<<6|h&63)-65536;t[r++]=String.fromCharCode(55296+(d>>10)),t[r++]=String.fromCharCode(56320+(d&1023))}else{const o=n[e++],u=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|u&63)}}return t.join("")},Mo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],u=s+1<n.length,h=u?n[s+1]:0,d=s+2<n.length,f=d?n[s+2]:0,_=o>>2,w=(o&3)<<4|h>>4;let R=(h&15)<<2|f>>6,V=f&63;d||(V=64,u||(R=64)),r.push(e[_],e[w],e[R],e[V])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(xo(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):xu(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],h=s<n.length?e[n.charAt(s)]:0;++s;const f=s<n.length?e[n.charAt(s)]:64;++s;const w=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||h==null||f==null||w==null)throw new Mu;const R=o<<2|h>>4;if(r.push(R),f!==64){const V=h<<4&240|f>>2;if(r.push(V),w!==64){const k=f<<6&192|w;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Mu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lu=function(n){const t=xo(n);return Mo.encodeByteArray(t,!0)},Un=function(n){return Lu(n).replace(/\./g,"")},Fu=function(n){try{return Mo.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu=()=>Uu().__FIREBASE_DEFAULTS__,qu=()=>{if(typeof process>"u"||typeof Us>"u")return;const n=Us.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ju=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Fu(n[1]);return t&&JSON.parse(t)},ai=()=>{try{return Bu()||qu()||ju()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},$u=n=>{var t,e;return(e=(t=ai())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},zu=n=>{const t=$u(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Lo=()=>{var n;return(n=ai())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Un(JSON.stringify(e)),Un(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qu(){var n;const t=(n=ai())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Wu(){return!Qu()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Yu(){try{return typeof indexedDB=="object"}catch{return!1}}function Xu(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju="FirebaseError";class Te extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Ju,Object.setPrototypeOf(this,Te.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fo.prototype.create)}}class Fo{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],u=o?Zu(o,r):"Error",h=`${this.serviceName}: ${u} (${s}).`;return new Te(s,h,r)}}function Zu(n,t){return n.replace(tc,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const tc=/\{\$([^}]+)}/g;function Fr(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],u=t[s];if(Bs(o)&&Bs(u)){if(!Fr(o,u))return!1}else if(o!==u)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Bs(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(n){return n&&n._delegate?n._delegate:n}class Je{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Gu;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(rc(t))try{this.getOrInitializeService({instanceIdentifier:Qt})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=Qt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Qt){return this.instances.has(t)}getOptions(t=Qt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,u]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(o);r===h&&u.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&t(u,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nc(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Qt){return this.component?this.component.multipleInstances?t:Qt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nc(n){return n===Qt?void 0:n}function rc(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new ec(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var B;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(B||(B={}));const sc={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},oc=B.INFO,ac={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},uc=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=ac[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Uo{constructor(t){this.name=t,this._logLevel=oc,this._logHandler=uc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in B))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?sc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...t),this._logHandler(this,B.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...t),this._logHandler(this,B.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,B.INFO,...t),this._logHandler(this,B.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,B.WARN,...t),this._logHandler(this,B.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...t),this._logHandler(this,B.ERROR,...t)}}const cc=(n,t)=>t.some(e=>n instanceof e);let qs,js;function hc(){return qs||(qs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lc(){return js||(js=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bo=new WeakMap,Ur=new WeakMap,qo=new WeakMap,Vr=new WeakMap,ui=new WeakMap;function dc(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",u)},o=()=>{e(Ft(n.result)),s()},u=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",u)});return t.then(e=>{e instanceof IDBCursor&&Bo.set(e,n)}).catch(()=>{}),ui.set(t,n),t}function fc(n){if(Ur.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",u),n.removeEventListener("abort",u)},o=()=>{e(),s()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",u),n.addEventListener("abort",u)});Ur.set(n,t)}let Br={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Ur.get(n);if(t==="objectStoreNames")return n.objectStoreNames||qo.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Ft(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function pc(n){Br=n(Br)}function mc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(br(this),t,...e);return qo.set(r,t.sort?t.sort():[t]),Ft(r)}:lc().includes(n)?function(...t){return n.apply(br(this),t),Ft(Bo.get(this))}:function(...t){return Ft(n.apply(br(this),t))}}function gc(n){return typeof n=="function"?mc(n):(n instanceof IDBTransaction&&fc(n),cc(n,hc())?new Proxy(n,Br):n)}function Ft(n){if(n instanceof IDBRequest)return dc(n);if(Vr.has(n))return Vr.get(n);const t=gc(n);return t!==n&&(Vr.set(n,t),ui.set(t,n)),t}const br=n=>ui.get(n);function _c(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const u=indexedDB.open(n,t),h=Ft(u);return r&&u.addEventListener("upgradeneeded",d=>{r(Ft(u.result),d.oldVersion,d.newVersion,Ft(u.transaction),d)}),e&&u.addEventListener("blocked",d=>e(d.oldVersion,d.newVersion,d)),h.then(d=>{o&&d.addEventListener("close",()=>o()),s&&d.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),h}const yc=["get","getKey","getAll","getAllKeys","count"],Ec=["put","add","delete","clear"],Dr=new Map;function $s(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Dr.get(t))return Dr.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=Ec.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||yc.includes(e)))return;const o=async function(u,...h){const d=this.transaction(u,s?"readwrite":"readonly");let f=d.store;return r&&(f=f.index(h.shift())),(await Promise.all([f[e](...h),s&&d.done]))[0]};return Dr.set(t,o),o}pc(n=>({...n,get:(t,e,r)=>$s(t,e)||n.get(t,e,r),has:(t,e)=>!!$s(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Tc(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Tc(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const qr="@firebase/app",zs="0.10.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=new Uo("@firebase/app"),Ic="@firebase/app-compat",Ac="@firebase/analytics-compat",wc="@firebase/analytics",Rc="@firebase/app-check-compat",Pc="@firebase/app-check",Sc="@firebase/auth",Cc="@firebase/auth-compat",Vc="@firebase/database",bc="@firebase/database-compat",Dc="@firebase/functions",Nc="@firebase/functions-compat",kc="@firebase/installations",Oc="@firebase/installations-compat",xc="@firebase/messaging",Mc="@firebase/messaging-compat",Lc="@firebase/performance",Fc="@firebase/performance-compat",Uc="@firebase/remote-config",Bc="@firebase/remote-config-compat",qc="@firebase/storage",jc="@firebase/storage-compat",$c="@firebase/firestore",zc="@firebase/vertexai-preview",Gc="@firebase/firestore-compat",Hc="firebase",Kc="10.12.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr="[DEFAULT]",Qc={[qr]:"fire-core",[Ic]:"fire-core-compat",[wc]:"fire-analytics",[Ac]:"fire-analytics-compat",[Pc]:"fire-app-check",[Rc]:"fire-app-check-compat",[Sc]:"fire-auth",[Cc]:"fire-auth-compat",[Vc]:"fire-rtdb",[bc]:"fire-rtdb-compat",[Dc]:"fire-fn",[Nc]:"fire-fn-compat",[kc]:"fire-iid",[Oc]:"fire-iid-compat",[xc]:"fire-fcm",[Mc]:"fire-fcm-compat",[Lc]:"fire-perf",[Fc]:"fire-perf-compat",[Uc]:"fire-rc",[Bc]:"fire-rc-compat",[qc]:"fire-gcs",[jc]:"fire-gcs-compat",[$c]:"fire-fst",[Gc]:"fire-fst-compat",[zc]:"fire-vertex","fire-js":"fire-js",[Hc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=new Map,Wc=new Map,$r=new Map;function Gs(n,t){try{n.container.addComponent(t)}catch(e){Zt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function jn(n){const t=n.name;if($r.has(t))return Zt.debug(`There were multiple attempts to register component ${t}.`),!1;$r.set(t,n);for(const e of qn.values())Gs(e,n);for(const e of Wc.values())Gs(e,n);return!0}function Yc(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ut=new Fo("app","Firebase",Xc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ut.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc=Kc;function jo(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:jr,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Ut.create("bad-app-name",{appName:String(s)});if(e||(e=Lo()),!e)throw Ut.create("no-options");const o=qn.get(s);if(o){if(Fr(e,o.options)&&Fr(r,o.config))return o;throw Ut.create("duplicate-app",{appName:s})}const u=new ic(s);for(const d of $r.values())u.addComponent(d);const h=new Jc(e,r,u);return qn.set(s,h),h}function th(n=jr){const t=qn.get(n);if(!t&&n===jr&&Lo())return jo();if(!t)throw Ut.create("no-app",{appName:n});return t}function he(n,t,e){var r;let s=(r=Qc[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const h=[`Unable to register library "${s}" with version "${t}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Zt.warn(h.join(" "));return}jn(new Je(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh="firebase-heartbeat-database",nh=1,Ze="firebase-heartbeat-store";let Nr=null;function $o(){return Nr||(Nr=_c(eh,nh,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Ze)}catch(e){console.warn(e)}}}}).catch(n=>{throw Ut.create("idb-open",{originalErrorMessage:n.message})})),Nr}async function rh(n){try{const e=(await $o()).transaction(Ze),r=await e.objectStore(Ze).get(zo(n));return await e.done,r}catch(t){if(t instanceof Te)Zt.warn(t.message);else{const e=Ut.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Zt.warn(e.message)}}}async function Hs(n,t){try{const r=(await $o()).transaction(Ze,"readwrite");await r.objectStore(Ze).put(t,zo(n)),await r.done}catch(e){if(e instanceof Te)Zt.warn(e.message);else{const r=Ut.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Zt.warn(r.message)}}}function zo(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih=1024,sh=30*24*60*60*1e3;class oh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new uh(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ks();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(u=>{const h=new Date(u.date).valueOf();return Date.now()-h<=sh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ks(),{heartbeatsToSend:r,unsentEntries:s}=ah(this._heartbeatsCache.heartbeats),o=Un(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Ks(){return new Date().toISOString().substring(0,10)}function ah(n,t=ih){const e=[];let r=n.slice();for(const s of n){const o=e.find(u=>u.agent===s.agent);if(o){if(o.dates.push(s.date),Qs(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Qs(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class uh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yu()?Xu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await rh(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Hs(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Hs(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Qs(n){return Un(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(n){jn(new Je("platform-logger",t=>new vc(t),"PRIVATE")),jn(new Je("heartbeat",t=>new oh(t),"PRIVATE")),he(qr,zs,n),he(qr,zs,"esm2017"),he("fire-js","")}ch("");var Ws=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yt,Go;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,p){function g(){}g.prototype=p.prototype,v.D=p.prototype,v.prototype=new g,v.prototype.constructor=v,v.C=function(y,E,I){for(var m=Array(arguments.length-2),St=2;St<arguments.length;St++)m[St-2]=arguments[St];return p.prototype[E].apply(y,m)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,p,g){g||(g=0);var y=Array(16);if(typeof p=="string")for(var E=0;16>E;++E)y[E]=p.charCodeAt(g++)|p.charCodeAt(g++)<<8|p.charCodeAt(g++)<<16|p.charCodeAt(g++)<<24;else for(E=0;16>E;++E)y[E]=p[g++]|p[g++]<<8|p[g++]<<16|p[g++]<<24;p=v.g[0],g=v.g[1],E=v.g[2];var I=v.g[3],m=p+(I^g&(E^I))+y[0]+3614090360&4294967295;p=g+(m<<7&4294967295|m>>>25),m=I+(E^p&(g^E))+y[1]+3905402710&4294967295,I=p+(m<<12&4294967295|m>>>20),m=E+(g^I&(p^g))+y[2]+606105819&4294967295,E=I+(m<<17&4294967295|m>>>15),m=g+(p^E&(I^p))+y[3]+3250441966&4294967295,g=E+(m<<22&4294967295|m>>>10),m=p+(I^g&(E^I))+y[4]+4118548399&4294967295,p=g+(m<<7&4294967295|m>>>25),m=I+(E^p&(g^E))+y[5]+1200080426&4294967295,I=p+(m<<12&4294967295|m>>>20),m=E+(g^I&(p^g))+y[6]+2821735955&4294967295,E=I+(m<<17&4294967295|m>>>15),m=g+(p^E&(I^p))+y[7]+4249261313&4294967295,g=E+(m<<22&4294967295|m>>>10),m=p+(I^g&(E^I))+y[8]+1770035416&4294967295,p=g+(m<<7&4294967295|m>>>25),m=I+(E^p&(g^E))+y[9]+2336552879&4294967295,I=p+(m<<12&4294967295|m>>>20),m=E+(g^I&(p^g))+y[10]+4294925233&4294967295,E=I+(m<<17&4294967295|m>>>15),m=g+(p^E&(I^p))+y[11]+2304563134&4294967295,g=E+(m<<22&4294967295|m>>>10),m=p+(I^g&(E^I))+y[12]+1804603682&4294967295,p=g+(m<<7&4294967295|m>>>25),m=I+(E^p&(g^E))+y[13]+4254626195&4294967295,I=p+(m<<12&4294967295|m>>>20),m=E+(g^I&(p^g))+y[14]+2792965006&4294967295,E=I+(m<<17&4294967295|m>>>15),m=g+(p^E&(I^p))+y[15]+1236535329&4294967295,g=E+(m<<22&4294967295|m>>>10),m=p+(E^I&(g^E))+y[1]+4129170786&4294967295,p=g+(m<<5&4294967295|m>>>27),m=I+(g^E&(p^g))+y[6]+3225465664&4294967295,I=p+(m<<9&4294967295|m>>>23),m=E+(p^g&(I^p))+y[11]+643717713&4294967295,E=I+(m<<14&4294967295|m>>>18),m=g+(I^p&(E^I))+y[0]+3921069994&4294967295,g=E+(m<<20&4294967295|m>>>12),m=p+(E^I&(g^E))+y[5]+3593408605&4294967295,p=g+(m<<5&4294967295|m>>>27),m=I+(g^E&(p^g))+y[10]+38016083&4294967295,I=p+(m<<9&4294967295|m>>>23),m=E+(p^g&(I^p))+y[15]+3634488961&4294967295,E=I+(m<<14&4294967295|m>>>18),m=g+(I^p&(E^I))+y[4]+3889429448&4294967295,g=E+(m<<20&4294967295|m>>>12),m=p+(E^I&(g^E))+y[9]+568446438&4294967295,p=g+(m<<5&4294967295|m>>>27),m=I+(g^E&(p^g))+y[14]+3275163606&4294967295,I=p+(m<<9&4294967295|m>>>23),m=E+(p^g&(I^p))+y[3]+4107603335&4294967295,E=I+(m<<14&4294967295|m>>>18),m=g+(I^p&(E^I))+y[8]+1163531501&4294967295,g=E+(m<<20&4294967295|m>>>12),m=p+(E^I&(g^E))+y[13]+2850285829&4294967295,p=g+(m<<5&4294967295|m>>>27),m=I+(g^E&(p^g))+y[2]+4243563512&4294967295,I=p+(m<<9&4294967295|m>>>23),m=E+(p^g&(I^p))+y[7]+1735328473&4294967295,E=I+(m<<14&4294967295|m>>>18),m=g+(I^p&(E^I))+y[12]+2368359562&4294967295,g=E+(m<<20&4294967295|m>>>12),m=p+(g^E^I)+y[5]+4294588738&4294967295,p=g+(m<<4&4294967295|m>>>28),m=I+(p^g^E)+y[8]+2272392833&4294967295,I=p+(m<<11&4294967295|m>>>21),m=E+(I^p^g)+y[11]+1839030562&4294967295,E=I+(m<<16&4294967295|m>>>16),m=g+(E^I^p)+y[14]+4259657740&4294967295,g=E+(m<<23&4294967295|m>>>9),m=p+(g^E^I)+y[1]+2763975236&4294967295,p=g+(m<<4&4294967295|m>>>28),m=I+(p^g^E)+y[4]+1272893353&4294967295,I=p+(m<<11&4294967295|m>>>21),m=E+(I^p^g)+y[7]+4139469664&4294967295,E=I+(m<<16&4294967295|m>>>16),m=g+(E^I^p)+y[10]+3200236656&4294967295,g=E+(m<<23&4294967295|m>>>9),m=p+(g^E^I)+y[13]+681279174&4294967295,p=g+(m<<4&4294967295|m>>>28),m=I+(p^g^E)+y[0]+3936430074&4294967295,I=p+(m<<11&4294967295|m>>>21),m=E+(I^p^g)+y[3]+3572445317&4294967295,E=I+(m<<16&4294967295|m>>>16),m=g+(E^I^p)+y[6]+76029189&4294967295,g=E+(m<<23&4294967295|m>>>9),m=p+(g^E^I)+y[9]+3654602809&4294967295,p=g+(m<<4&4294967295|m>>>28),m=I+(p^g^E)+y[12]+3873151461&4294967295,I=p+(m<<11&4294967295|m>>>21),m=E+(I^p^g)+y[15]+530742520&4294967295,E=I+(m<<16&4294967295|m>>>16),m=g+(E^I^p)+y[2]+3299628645&4294967295,g=E+(m<<23&4294967295|m>>>9),m=p+(E^(g|~I))+y[0]+4096336452&4294967295,p=g+(m<<6&4294967295|m>>>26),m=I+(g^(p|~E))+y[7]+1126891415&4294967295,I=p+(m<<10&4294967295|m>>>22),m=E+(p^(I|~g))+y[14]+2878612391&4294967295,E=I+(m<<15&4294967295|m>>>17),m=g+(I^(E|~p))+y[5]+4237533241&4294967295,g=E+(m<<21&4294967295|m>>>11),m=p+(E^(g|~I))+y[12]+1700485571&4294967295,p=g+(m<<6&4294967295|m>>>26),m=I+(g^(p|~E))+y[3]+2399980690&4294967295,I=p+(m<<10&4294967295|m>>>22),m=E+(p^(I|~g))+y[10]+4293915773&4294967295,E=I+(m<<15&4294967295|m>>>17),m=g+(I^(E|~p))+y[1]+2240044497&4294967295,g=E+(m<<21&4294967295|m>>>11),m=p+(E^(g|~I))+y[8]+1873313359&4294967295,p=g+(m<<6&4294967295|m>>>26),m=I+(g^(p|~E))+y[15]+4264355552&4294967295,I=p+(m<<10&4294967295|m>>>22),m=E+(p^(I|~g))+y[6]+2734768916&4294967295,E=I+(m<<15&4294967295|m>>>17),m=g+(I^(E|~p))+y[13]+1309151649&4294967295,g=E+(m<<21&4294967295|m>>>11),m=p+(E^(g|~I))+y[4]+4149444226&4294967295,p=g+(m<<6&4294967295|m>>>26),m=I+(g^(p|~E))+y[11]+3174756917&4294967295,I=p+(m<<10&4294967295|m>>>22),m=E+(p^(I|~g))+y[2]+718787259&4294967295,E=I+(m<<15&4294967295|m>>>17),m=g+(I^(E|~p))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+p&4294967295,v.g[1]=v.g[1]+(E+(m<<21&4294967295|m>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+I&4294967295}r.prototype.u=function(v,p){p===void 0&&(p=v.length);for(var g=p-this.blockSize,y=this.B,E=this.h,I=0;I<p;){if(E==0)for(;I<=g;)s(this,v,I),I+=this.blockSize;if(typeof v=="string"){for(;I<p;)if(y[E++]=v.charCodeAt(I++),E==this.blockSize){s(this,y),E=0;break}}else for(;I<p;)if(y[E++]=v[I++],E==this.blockSize){s(this,y),E=0;break}}this.h=E,this.o+=p},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var p=1;p<v.length-8;++p)v[p]=0;var g=8*this.o;for(p=v.length-8;p<v.length;++p)v[p]=g&255,g/=256;for(this.u(v),v=Array(16),p=g=0;4>p;++p)for(var y=0;32>y;y+=8)v[g++]=this.g[p]>>>y&255;return v};function o(v,p){var g=h;return Object.prototype.hasOwnProperty.call(g,v)?g[v]:g[v]=p(v)}function u(v,p){this.h=p;for(var g=[],y=!0,E=v.length-1;0<=E;E--){var I=v[E]|0;y&&I==p||(g[E]=I,y=!1)}this.g=g}var h={};function d(v){return-128<=v&&128>v?o(v,function(p){return new u([p|0],0>p?-1:0)}):new u([v|0],0>v?-1:0)}function f(v){if(isNaN(v)||!isFinite(v))return w;if(0>v)return N(f(-v));for(var p=[],g=1,y=0;v>=g;y++)p[y]=v/g|0,g*=4294967296;return new u(p,0)}function _(v,p){if(v.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(v.charAt(0)=="-")return N(_(v.substring(1),p));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=f(Math.pow(p,8)),y=w,E=0;E<v.length;E+=8){var I=Math.min(8,v.length-E),m=parseInt(v.substring(E,E+I),p);8>I?(I=f(Math.pow(p,I)),y=y.j(I).add(f(m))):(y=y.j(g),y=y.add(f(m)))}return y}var w=d(0),R=d(1),V=d(16777216);n=u.prototype,n.m=function(){if(L(this))return-N(this).m();for(var v=0,p=1,g=0;g<this.g.length;g++){var y=this.i(g);v+=(0<=y?y:4294967296+y)*p,p*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(k(this))return"0";if(L(this))return"-"+N(this).toString(v);for(var p=f(Math.pow(v,6)),g=this,y="";;){var E=nt(g,p).g;g=Y(g,E.j(p));var I=((0<g.g.length?g.g[0]:g.h)>>>0).toString(v);if(g=E,k(g))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function k(v){if(v.h!=0)return!1;for(var p=0;p<v.g.length;p++)if(v.g[p]!=0)return!1;return!0}function L(v){return v.h==-1}n.l=function(v){return v=Y(this,v),L(v)?-1:k(v)?0:1};function N(v){for(var p=v.g.length,g=[],y=0;y<p;y++)g[y]=~v.g[y];return new u(g,~v.h).add(R)}n.abs=function(){return L(this)?N(this):this},n.add=function(v){for(var p=Math.max(this.g.length,v.g.length),g=[],y=0,E=0;E<=p;E++){var I=y+(this.i(E)&65535)+(v.i(E)&65535),m=(I>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);y=m>>>16,I&=65535,m&=65535,g[E]=m<<16|I}return new u(g,g[g.length-1]&-2147483648?-1:0)};function Y(v,p){return v.add(N(p))}n.j=function(v){if(k(this)||k(v))return w;if(L(this))return L(v)?N(this).j(N(v)):N(N(this).j(v));if(L(v))return N(this.j(N(v)));if(0>this.l(V)&&0>v.l(V))return f(this.m()*v.m());for(var p=this.g.length+v.g.length,g=[],y=0;y<2*p;y++)g[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<v.g.length;E++){var I=this.i(y)>>>16,m=this.i(y)&65535,St=v.i(E)>>>16,Pe=v.i(E)&65535;g[2*y+2*E]+=m*Pe,K(g,2*y+2*E),g[2*y+2*E+1]+=I*Pe,K(g,2*y+2*E+1),g[2*y+2*E+1]+=m*St,K(g,2*y+2*E+1),g[2*y+2*E+2]+=I*St,K(g,2*y+2*E+2)}for(y=0;y<p;y++)g[y]=g[2*y+1]<<16|g[2*y];for(y=p;y<2*p;y++)g[y]=0;return new u(g,0)};function K(v,p){for(;(v[p]&65535)!=v[p];)v[p+1]+=v[p]>>>16,v[p]&=65535,p++}function Q(v,p){this.g=v,this.h=p}function nt(v,p){if(k(p))throw Error("division by zero");if(k(v))return new Q(w,w);if(L(v))return p=nt(N(v),p),new Q(N(p.g),N(p.h));if(L(p))return p=nt(v,N(p)),new Q(N(p.g),p.h);if(30<v.g.length){if(L(v)||L(p))throw Error("slowDivide_ only works with positive integers.");for(var g=R,y=p;0>=y.l(v);)g=Pt(g),y=Pt(y);var E=st(g,1),I=st(y,1);for(y=st(y,2),g=st(g,2);!k(y);){var m=I.add(y);0>=m.l(v)&&(E=E.add(g),I=m),y=st(y,1),g=st(g,1)}return p=Y(v,E.j(p)),new Q(E,p)}for(E=w;0<=v.l(p);){for(g=Math.max(1,Math.floor(v.m()/p.m())),y=Math.ceil(Math.log(g)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=f(g),m=I.j(p);L(m)||0<m.l(v);)g-=y,I=f(g),m=I.j(p);k(I)&&(I=R),E=E.add(I),v=Y(v,m)}return new Q(E,v)}n.A=function(v){return nt(this,v).h},n.and=function(v){for(var p=Math.max(this.g.length,v.g.length),g=[],y=0;y<p;y++)g[y]=this.i(y)&v.i(y);return new u(g,this.h&v.h)},n.or=function(v){for(var p=Math.max(this.g.length,v.g.length),g=[],y=0;y<p;y++)g[y]=this.i(y)|v.i(y);return new u(g,this.h|v.h)},n.xor=function(v){for(var p=Math.max(this.g.length,v.g.length),g=[],y=0;y<p;y++)g[y]=this.i(y)^v.i(y);return new u(g,this.h^v.h)};function Pt(v){for(var p=v.g.length+1,g=[],y=0;y<p;y++)g[y]=v.i(y)<<1|v.i(y-1)>>>31;return new u(g,v.h)}function st(v,p){var g=p>>5;p%=32;for(var y=v.g.length-g,E=[],I=0;I<y;I++)E[I]=0<p?v.i(I+g)>>>p|v.i(I+g+1)<<32-p:v.i(I+g);return new u(E,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Go=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=f,u.fromString=_,Yt=u}).apply(typeof Ws<"u"?Ws:typeof self<"u"?self:typeof window<"u"?window:{});var bn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ho,Ko,Ge,Qo,xn,zr,Wo,Yo,Xo;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,a,c){return i==Array.prototype||i==Object.prototype||(i[a]=c.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof bn=="object"&&bn];for(var a=0;a<i.length;++a){var c=i[a];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function s(i,a){if(a)t:{var c=r;i=i.split(".");for(var l=0;l<i.length-1;l++){var T=i[l];if(!(T in c))break t;c=c[T]}i=i[i.length-1],l=c[i],a=a(l),a!=l&&a!=null&&t(c,i,{configurable:!0,writable:!0,value:a})}}function o(i,a){i instanceof String&&(i+="");var c=0,l=!1,T={next:function(){if(!l&&c<i.length){var A=c++;return{value:a(A,i[A]),done:!1}}return l=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}s("Array.prototype.values",function(i){return i||function(){return o(this,function(a,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function d(i){var a=typeof i;return a=a!="object"?a:i?Array.isArray(i)?"array":a:"null",a=="array"||a=="object"&&typeof i.length=="number"}function f(i){var a=typeof i;return a=="object"&&i!=null||a=="function"}function _(i,a,c){return i.call.apply(i.bind,arguments)}function w(i,a,c){if(!i)throw Error();if(2<arguments.length){var l=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,l),i.apply(a,T)}}return function(){return i.apply(a,arguments)}}function R(i,a,c){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:w,R.apply(null,arguments)}function V(i,a){var c=Array.prototype.slice.call(arguments,1);return function(){var l=c.slice();return l.push.apply(l,arguments),i.apply(this,l)}}function k(i,a){function c(){}c.prototype=a.prototype,i.aa=a.prototype,i.prototype=new c,i.prototype.constructor=i,i.Qb=function(l,T,A){for(var C=Array(arguments.length-2),z=2;z<arguments.length;z++)C[z-2]=arguments[z];return a.prototype[T].apply(l,C)}}function L(i){const a=i.length;if(0<a){const c=Array(a);for(let l=0;l<a;l++)c[l]=i[l];return c}return[]}function N(i,a){for(let c=1;c<arguments.length;c++){const l=arguments[c];if(d(l)){const T=i.length||0,A=l.length||0;i.length=T+A;for(let C=0;C<A;C++)i[T+C]=l[C]}else i.push(l)}}class Y{constructor(a,c){this.i=a,this.j=c,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function K(i){return/^[\s\xa0]*$/.test(i)}function Q(){var i=h.navigator;return i&&(i=i.userAgent)?i:""}function nt(i){return nt[" "](i),i}nt[" "]=function(){};var Pt=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function st(i,a,c){for(const l in i)a.call(c,i[l],l,i)}function v(i,a){for(const c in i)a.call(void 0,i[c],c,i)}function p(i){const a={};for(const c in i)a[c]=i[c];return a}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(i,a){let c,l;for(let T=1;T<arguments.length;T++){l=arguments[T];for(c in l)i[c]=l[c];for(let A=0;A<g.length;A++)c=g[A],Object.prototype.hasOwnProperty.call(l,c)&&(i[c]=l[c])}}function E(i){var a=1;i=i.split(":");const c=[];for(;0<a&&i.length;)c.push(i.shift()),a--;return i.length&&c.push(i.join(":")),c}function I(i){h.setTimeout(()=>{throw i},0)}function m(){var i=sr;let a=null;return i.g&&(a=i.g,i.g=i.g.next,i.g||(i.h=null),a.next=null),a}class St{constructor(){this.h=this.g=null}add(a,c){const l=Pe.get();l.set(a,c),this.h?this.h.next=l:this.g=l,this.h=l}}var Pe=new Y(()=>new tu,i=>i.reset());class tu{constructor(){this.next=this.g=this.h=null}set(a,c){this.h=a,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let Se,Ce=!1,sr=new St,Ui=()=>{const i=h.Promise.resolve(void 0);Se=()=>{i.then(eu)}};var eu=()=>{for(var i;i=m();){try{i.h.call(i.g)}catch(c){I(c)}var a=Pe;a.j(i),100>a.h&&(a.h++,i.next=a.g,a.g=i)}Ce=!1};function Nt(){this.s=this.s,this.C=this.C}Nt.prototype.s=!1,Nt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Nt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ht(i,a){this.type=i,this.g=this.target=a,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var nu=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var i=!1,a=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const c=()=>{};h.addEventListener("test",c,a),h.removeEventListener("test",c,a)}catch{}return i}();function Ve(i,a){if(ht.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var c=this.type=i.type,l=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=a,a=i.relatedTarget){if(Pt){t:{try{nt(a.nodeName);var T=!0;break t}catch{}T=!1}T||(a=null)}}else c=="mouseover"?a=i.fromElement:c=="mouseout"&&(a=i.toElement);this.relatedTarget=a,l?(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:ru[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Ve.aa.h.call(this)}}k(Ve,ht);var ru={2:"touch",3:"pen",4:"mouse"};Ve.prototype.h=function(){Ve.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var ln="closure_listenable_"+(1e6*Math.random()|0),iu=0;function su(i,a,c,l,T){this.listener=i,this.proxy=null,this.src=a,this.type=c,this.capture=!!l,this.ha=T,this.key=++iu,this.da=this.fa=!1}function dn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function fn(i){this.src=i,this.g={},this.h=0}fn.prototype.add=function(i,a,c,l,T){var A=i.toString();i=this.g[A],i||(i=this.g[A]=[],this.h++);var C=ar(i,a,l,T);return-1<C?(a=i[C],c||(a.fa=!1)):(a=new su(a,this.src,A,!!l,T),a.fa=c,i.push(a)),a};function or(i,a){var c=a.type;if(c in i.g){var l=i.g[c],T=Array.prototype.indexOf.call(l,a,void 0),A;(A=0<=T)&&Array.prototype.splice.call(l,T,1),A&&(dn(a),i.g[c].length==0&&(delete i.g[c],i.h--))}}function ar(i,a,c,l){for(var T=0;T<i.length;++T){var A=i[T];if(!A.da&&A.listener==a&&A.capture==!!c&&A.ha==l)return T}return-1}var ur="closure_lm_"+(1e6*Math.random()|0),cr={};function Bi(i,a,c,l,T){if(Array.isArray(a)){for(var A=0;A<a.length;A++)Bi(i,a[A],c,l,T);return null}return c=$i(c),i&&i[ln]?i.K(a,c,f(l)?!!l.capture:!!l,T):ou(i,a,c,!1,l,T)}function ou(i,a,c,l,T,A){if(!a)throw Error("Invalid event type");var C=f(T)?!!T.capture:!!T,z=lr(i);if(z||(i[ur]=z=new fn(i)),c=z.add(a,c,l,C,A),c.proxy)return c;if(l=au(),c.proxy=l,l.src=i,l.listener=c,i.addEventListener)nu||(T=C),T===void 0&&(T=!1),i.addEventListener(a.toString(),l,T);else if(i.attachEvent)i.attachEvent(ji(a.toString()),l);else if(i.addListener&&i.removeListener)i.addListener(l);else throw Error("addEventListener and attachEvent are unavailable.");return c}function au(){function i(c){return a.call(i.src,i.listener,c)}const a=uu;return i}function qi(i,a,c,l,T){if(Array.isArray(a))for(var A=0;A<a.length;A++)qi(i,a[A],c,l,T);else l=f(l)?!!l.capture:!!l,c=$i(c),i&&i[ln]?(i=i.i,a=String(a).toString(),a in i.g&&(A=i.g[a],c=ar(A,c,l,T),-1<c&&(dn(A[c]),Array.prototype.splice.call(A,c,1),A.length==0&&(delete i.g[a],i.h--)))):i&&(i=lr(i))&&(a=i.g[a.toString()],i=-1,a&&(i=ar(a,c,l,T)),(c=-1<i?a[i]:null)&&hr(c))}function hr(i){if(typeof i!="number"&&i&&!i.da){var a=i.src;if(a&&a[ln])or(a.i,i);else{var c=i.type,l=i.proxy;a.removeEventListener?a.removeEventListener(c,l,i.capture):a.detachEvent?a.detachEvent(ji(c),l):a.addListener&&a.removeListener&&a.removeListener(l),(c=lr(a))?(or(c,i),c.h==0&&(c.src=null,a[ur]=null)):dn(i)}}}function ji(i){return i in cr?cr[i]:cr[i]="on"+i}function uu(i,a){if(i.da)i=!0;else{a=new Ve(a,this);var c=i.listener,l=i.ha||i.src;i.fa&&hr(i),i=c.call(l,a)}return i}function lr(i){return i=i[ur],i instanceof fn?i:null}var dr="__closure_events_fn_"+(1e9*Math.random()>>>0);function $i(i){return typeof i=="function"?i:(i[dr]||(i[dr]=function(a){return i.handleEvent(a)}),i[dr])}function lt(){Nt.call(this),this.i=new fn(this),this.M=this,this.F=null}k(lt,Nt),lt.prototype[ln]=!0,lt.prototype.removeEventListener=function(i,a,c,l){qi(this,i,a,c,l)};function yt(i,a){var c,l=i.F;if(l)for(c=[];l;l=l.F)c.push(l);if(i=i.M,l=a.type||a,typeof a=="string")a=new ht(a,i);else if(a instanceof ht)a.target=a.target||i;else{var T=a;a=new ht(l,i),y(a,T)}if(T=!0,c)for(var A=c.length-1;0<=A;A--){var C=a.g=c[A];T=pn(C,l,!0,a)&&T}if(C=a.g=i,T=pn(C,l,!0,a)&&T,T=pn(C,l,!1,a)&&T,c)for(A=0;A<c.length;A++)C=a.g=c[A],T=pn(C,l,!1,a)&&T}lt.prototype.N=function(){if(lt.aa.N.call(this),this.i){var i=this.i,a;for(a in i.g){for(var c=i.g[a],l=0;l<c.length;l++)dn(c[l]);delete i.g[a],i.h--}}this.F=null},lt.prototype.K=function(i,a,c,l){return this.i.add(String(i),a,!1,c,l)},lt.prototype.L=function(i,a,c,l){return this.i.add(String(i),a,!0,c,l)};function pn(i,a,c,l){if(a=i.i.g[String(a)],!a)return!0;a=a.concat();for(var T=!0,A=0;A<a.length;++A){var C=a[A];if(C&&!C.da&&C.capture==c){var z=C.listener,ot=C.ha||C.src;C.fa&&or(i.i,C),T=z.call(ot,l)!==!1&&T}}return T&&!l.defaultPrevented}function zi(i,a,c){if(typeof i=="function")c&&(i=R(i,c));else if(i&&typeof i.handleEvent=="function")i=R(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:h.setTimeout(i,a||0)}function Gi(i){i.g=zi(()=>{i.g=null,i.i&&(i.i=!1,Gi(i))},i.l);const a=i.h;i.h=null,i.m.apply(null,a)}class cu extends Nt{constructor(a,c){super(),this.m=a,this.l=c,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Gi(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function be(i){Nt.call(this),this.h=i,this.g={}}k(be,Nt);var Hi=[];function Ki(i){st(i.g,function(a,c){this.g.hasOwnProperty(c)&&hr(a)},i),i.g={}}be.prototype.N=function(){be.aa.N.call(this),Ki(this)},be.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var fr=h.JSON.stringify,hu=h.JSON.parse,lu=class{stringify(i){return h.JSON.stringify(i,void 0)}parse(i){return h.JSON.parse(i,void 0)}};function pr(){}pr.prototype.h=null;function Qi(i){return i.h||(i.h=i.i())}function Wi(){}var De={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function mr(){ht.call(this,"d")}k(mr,ht);function gr(){ht.call(this,"c")}k(gr,ht);var zt={},Yi=null;function mn(){return Yi=Yi||new lt}zt.La="serverreachability";function Xi(i){ht.call(this,zt.La,i)}k(Xi,ht);function Ne(i){const a=mn();yt(a,new Xi(a))}zt.STAT_EVENT="statevent";function Ji(i,a){ht.call(this,zt.STAT_EVENT,i),this.stat=a}k(Ji,ht);function Et(i){const a=mn();yt(a,new Ji(a,i))}zt.Ma="timingevent";function Zi(i,a){ht.call(this,zt.Ma,i),this.size=a}k(Zi,ht);function ke(i,a){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){i()},a)}function Oe(){this.g=!0}Oe.prototype.xa=function(){this.g=!1};function du(i,a,c,l,T,A){i.info(function(){if(i.g)if(A)for(var C="",z=A.split("&"),ot=0;ot<z.length;ot++){var j=z[ot].split("=");if(1<j.length){var dt=j[0];j=j[1];var ft=dt.split("_");C=2<=ft.length&&ft[1]=="type"?C+(dt+"="+j+"&"):C+(dt+"=redacted&")}}else C=null;else C=A;return"XMLHTTP REQ ("+l+") [attempt "+T+"]: "+a+`
`+c+`
`+C})}function fu(i,a,c,l,T,A,C){i.info(function(){return"XMLHTTP RESP ("+l+") [ attempt "+T+"]: "+a+`
`+c+`
`+A+" "+C})}function re(i,a,c,l){i.info(function(){return"XMLHTTP TEXT ("+a+"): "+mu(i,c)+(l?" "+l:"")})}function pu(i,a){i.info(function(){return"TIMEOUT: "+a})}Oe.prototype.info=function(){};function mu(i,a){if(!i.g)return a;if(!a)return null;try{var c=JSON.parse(a);if(c){for(i=0;i<c.length;i++)if(Array.isArray(c[i])){var l=c[i];if(!(2>l.length)){var T=l[1];if(Array.isArray(T)&&!(1>T.length)){var A=T[0];if(A!="noop"&&A!="stop"&&A!="close")for(var C=1;C<T.length;C++)T[C]=""}}}}return fr(c)}catch{return a}}var gn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ts={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},_r;function _n(){}k(_n,pr),_n.prototype.g=function(){return new XMLHttpRequest},_n.prototype.i=function(){return{}},_r=new _n;function kt(i,a,c,l){this.j=i,this.i=a,this.l=c,this.R=l||1,this.U=new be(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new es}function es(){this.i=null,this.g="",this.h=!1}var ns={},yr={};function Er(i,a,c){i.L=1,i.v=Tn(Ct(a)),i.m=c,i.P=!0,rs(i,null)}function rs(i,a){i.F=Date.now(),yn(i),i.A=Ct(i.v);var c=i.A,l=i.R;Array.isArray(l)||(l=[String(l)]),_s(c.i,"t",l),i.C=0,c=i.j.J,i.h=new es,i.g=xs(i.j,c?a:null,!i.m),0<i.O&&(i.M=new cu(R(i.Y,i,i.g),i.O)),a=i.U,c=i.g,l=i.ca;var T="readystatechange";Array.isArray(T)||(T&&(Hi[0]=T.toString()),T=Hi);for(var A=0;A<T.length;A++){var C=Bi(c,T[A],l||a.handleEvent,!1,a.h||a);if(!C)break;a.g[C.key]=C}a=i.H?p(i.H):{},i.m?(i.u||(i.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,a)):(i.u="GET",i.g.ea(i.A,i.u,null,a)),Ne(),du(i.i,i.u,i.A,i.l,i.R,i.m)}kt.prototype.ca=function(i){i=i.target;const a=this.M;a&&Vt(i)==3?a.j():this.Y(i)},kt.prototype.Y=function(i){try{if(i==this.g)t:{const ft=Vt(this.g);var a=this.g.Ba();const oe=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||ws(this.g)))){this.J||ft!=4||a==7||(a==8||0>=oe?Ne(3):Ne(2)),vr(this);var c=this.g.Z();this.X=c;e:if(is(this)){var l=ws(this.g);i="";var T=l.length,A=Vt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Gt(this),xe(this);var C="";break e}this.h.i=new h.TextDecoder}for(a=0;a<T;a++)this.h.h=!0,i+=this.h.i.decode(l[a],{stream:!(A&&a==T-1)});l.length=0,this.h.g+=i,this.C=0,C=this.h.g}else C=this.g.oa();if(this.o=c==200,fu(this.i,this.u,this.A,this.l,this.R,ft,c),this.o){if(this.T&&!this.K){e:{if(this.g){var z,ot=this.g;if((z=ot.g?ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(z)){var j=z;break e}}j=null}if(c=j)re(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Tr(this,c);else{this.o=!1,this.s=3,Et(12),Gt(this),xe(this);break t}}if(this.P){c=!0;let Tt;for(;!this.J&&this.C<C.length;)if(Tt=gu(this,C),Tt==yr){ft==4&&(this.s=4,Et(14),c=!1),re(this.i,this.l,null,"[Incomplete Response]");break}else if(Tt==ns){this.s=4,Et(15),re(this.i,this.l,C,"[Invalid Chunk]"),c=!1;break}else re(this.i,this.l,Tt,null),Tr(this,Tt);if(is(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||C.length!=0||this.h.h||(this.s=1,Et(16),c=!1),this.o=this.o&&c,!c)re(this.i,this.l,C,"[Invalid Chunked Response]"),Gt(this),xe(this);else if(0<C.length&&!this.W){this.W=!0;var dt=this.j;dt.g==this&&dt.ba&&!dt.M&&(dt.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),Sr(dt),dt.M=!0,Et(11))}}else re(this.i,this.l,C,null),Tr(this,C);ft==4&&Gt(this),this.o&&!this.J&&(ft==4?Ds(this.j,this):(this.o=!1,yn(this)))}else ku(this.g),c==400&&0<C.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),Gt(this),xe(this)}}}catch{}finally{}};function is(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function gu(i,a){var c=i.C,l=a.indexOf(`
`,c);return l==-1?yr:(c=Number(a.substring(c,l)),isNaN(c)?ns:(l+=1,l+c>a.length?yr:(a=a.slice(l,l+c),i.C=l+c,a)))}kt.prototype.cancel=function(){this.J=!0,Gt(this)};function yn(i){i.S=Date.now()+i.I,ss(i,i.I)}function ss(i,a){if(i.B!=null)throw Error("WatchDog timer not null");i.B=ke(R(i.ba,i),a)}function vr(i){i.B&&(h.clearTimeout(i.B),i.B=null)}kt.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(pu(this.i,this.A),this.L!=2&&(Ne(),Et(17)),Gt(this),this.s=2,xe(this)):ss(this,this.S-i)};function xe(i){i.j.G==0||i.J||Ds(i.j,i)}function Gt(i){vr(i);var a=i.M;a&&typeof a.ma=="function"&&a.ma(),i.M=null,Ki(i.U),i.g&&(a=i.g,i.g=null,a.abort(),a.ma())}function Tr(i,a){try{var c=i.j;if(c.G!=0&&(c.g==i||Ir(c.h,i))){if(!i.K&&Ir(c.h,i)&&c.G==3){try{var l=c.Da.g.parse(a)}catch{l=null}if(Array.isArray(l)&&l.length==3){var T=l;if(T[0]==0){t:if(!c.u){if(c.g)if(c.g.F+3e3<i.F)Pn(c),wn(c);else break t;Pr(c),Et(18)}}else c.za=T[1],0<c.za-c.T&&37500>T[2]&&c.F&&c.v==0&&!c.C&&(c.C=ke(R(c.Za,c),6e3));if(1>=us(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else Kt(c,11)}else if((i.K||c.g==i)&&Pn(c),!K(a))for(T=c.Da.g.parse(a),a=0;a<T.length;a++){let j=T[a];if(c.T=j[0],j=j[1],c.G==2)if(j[0]=="c"){c.K=j[1],c.ia=j[2];const dt=j[3];dt!=null&&(c.la=dt,c.j.info("VER="+c.la));const ft=j[4];ft!=null&&(c.Aa=ft,c.j.info("SVER="+c.Aa));const oe=j[5];oe!=null&&typeof oe=="number"&&0<oe&&(l=1.5*oe,c.L=l,c.j.info("backChannelRequestTimeoutMs_="+l)),l=c;const Tt=i.g;if(Tt){const Cn=Tt.g?Tt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Cn){var A=l.h;A.g||Cn.indexOf("spdy")==-1&&Cn.indexOf("quic")==-1&&Cn.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Ar(A,A.h),A.h=null))}if(l.D){const Cr=Tt.g?Tt.g.getResponseHeader("X-HTTP-Session-Id"):null;Cr&&(l.ya=Cr,G(l.I,l.D,Cr))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-i.F,c.j.info("Handshake RTT: "+c.R+"ms")),l=c;var C=i;if(l.qa=Os(l,l.J?l.ia:null,l.W),C.K){cs(l.h,C);var z=C,ot=l.L;ot&&(z.I=ot),z.B&&(vr(z),yn(z)),l.g=C}else Vs(l);0<c.i.length&&Rn(c)}else j[0]!="stop"&&j[0]!="close"||Kt(c,7);else c.G==3&&(j[0]=="stop"||j[0]=="close"?j[0]=="stop"?Kt(c,7):Rr(c):j[0]!="noop"&&c.l&&c.l.ta(j),c.v=0)}}Ne(4)}catch{}}var _u=class{constructor(i,a){this.g=i,this.map=a}};function os(i){this.l=i||10,h.PerformanceNavigationTiming?(i=h.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function as(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function us(i){return i.h?1:i.g?i.g.size:0}function Ir(i,a){return i.h?i.h==a:i.g?i.g.has(a):!1}function Ar(i,a){i.g?i.g.add(a):i.h=a}function cs(i,a){i.h&&i.h==a?i.h=null:i.g&&i.g.has(a)&&i.g.delete(a)}os.prototype.cancel=function(){if(this.i=hs(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function hs(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let a=i.i;for(const c of i.g.values())a=a.concat(c.D);return a}return L(i.i)}function yu(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(d(i)){for(var a=[],c=i.length,l=0;l<c;l++)a.push(i[l]);return a}a=[],c=0;for(l in i)a[c++]=i[l];return a}function Eu(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(d(i)||typeof i=="string"){var a=[];i=i.length;for(var c=0;c<i;c++)a.push(c);return a}a=[],c=0;for(const l in i)a[c++]=l;return a}}}function ls(i,a){if(i.forEach&&typeof i.forEach=="function")i.forEach(a,void 0);else if(d(i)||typeof i=="string")Array.prototype.forEach.call(i,a,void 0);else for(var c=Eu(i),l=yu(i),T=l.length,A=0;A<T;A++)a.call(void 0,l[A],c&&c[A],i)}var ds=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vu(i,a){if(i){i=i.split("&");for(var c=0;c<i.length;c++){var l=i[c].indexOf("="),T=null;if(0<=l){var A=i[c].substring(0,l);T=i[c].substring(l+1)}else A=i[c];a(A,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function Ht(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Ht){this.h=i.h,En(this,i.j),this.o=i.o,this.g=i.g,vn(this,i.s),this.l=i.l;var a=i.i,c=new Fe;c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),fs(this,c),this.m=i.m}else i&&(a=String(i).match(ds))?(this.h=!1,En(this,a[1]||"",!0),this.o=Me(a[2]||""),this.g=Me(a[3]||"",!0),vn(this,a[4]),this.l=Me(a[5]||"",!0),fs(this,a[6]||"",!0),this.m=Me(a[7]||"")):(this.h=!1,this.i=new Fe(null,this.h))}Ht.prototype.toString=function(){var i=[],a=this.j;a&&i.push(Le(a,ps,!0),":");var c=this.g;return(c||a=="file")&&(i.push("//"),(a=this.o)&&i.push(Le(a,ps,!0),"@"),i.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&i.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&i.push("/"),i.push(Le(c,c.charAt(0)=="/"?Au:Iu,!0))),(c=this.i.toString())&&i.push("?",c),(c=this.m)&&i.push("#",Le(c,Ru)),i.join("")};function Ct(i){return new Ht(i)}function En(i,a,c){i.j=c?Me(a,!0):a,i.j&&(i.j=i.j.replace(/:$/,""))}function vn(i,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);i.s=a}else i.s=null}function fs(i,a,c){a instanceof Fe?(i.i=a,Pu(i.i,i.h)):(c||(a=Le(a,wu)),i.i=new Fe(a,i.h))}function G(i,a,c){i.i.set(a,c)}function Tn(i){return G(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Me(i,a){return i?a?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Le(i,a,c){return typeof i=="string"?(i=encodeURI(i).replace(a,Tu),c&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Tu(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var ps=/[#\/\?@]/g,Iu=/[#\?:]/g,Au=/[#\?]/g,wu=/[#\?@]/g,Ru=/#/g;function Fe(i,a){this.h=this.g=null,this.i=i||null,this.j=!!a}function Ot(i){i.g||(i.g=new Map,i.h=0,i.i&&vu(i.i,function(a,c){i.add(decodeURIComponent(a.replace(/\+/g," ")),c)}))}n=Fe.prototype,n.add=function(i,a){Ot(this),this.i=null,i=ie(this,i);var c=this.g.get(i);return c||this.g.set(i,c=[]),c.push(a),this.h+=1,this};function ms(i,a){Ot(i),a=ie(i,a),i.g.has(a)&&(i.i=null,i.h-=i.g.get(a).length,i.g.delete(a))}function gs(i,a){return Ot(i),a=ie(i,a),i.g.has(a)}n.forEach=function(i,a){Ot(this),this.g.forEach(function(c,l){c.forEach(function(T){i.call(a,T,l,this)},this)},this)},n.na=function(){Ot(this);const i=Array.from(this.g.values()),a=Array.from(this.g.keys()),c=[];for(let l=0;l<a.length;l++){const T=i[l];for(let A=0;A<T.length;A++)c.push(a[l])}return c},n.V=function(i){Ot(this);let a=[];if(typeof i=="string")gs(this,i)&&(a=a.concat(this.g.get(ie(this,i))));else{i=Array.from(this.g.values());for(let c=0;c<i.length;c++)a=a.concat(i[c])}return a},n.set=function(i,a){return Ot(this),this.i=null,i=ie(this,i),gs(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[a]),this.h+=1,this},n.get=function(i,a){return i?(i=this.V(i),0<i.length?String(i[0]):a):a};function _s(i,a,c){ms(i,a),0<c.length&&(i.i=null,i.g.set(ie(i,a),L(c)),i.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],a=Array.from(this.g.keys());for(var c=0;c<a.length;c++){var l=a[c];const A=encodeURIComponent(String(l)),C=this.V(l);for(l=0;l<C.length;l++){var T=A;C[l]!==""&&(T+="="+encodeURIComponent(String(C[l]))),i.push(T)}}return this.i=i.join("&")};function ie(i,a){return a=String(a),i.j&&(a=a.toLowerCase()),a}function Pu(i,a){a&&!i.j&&(Ot(i),i.i=null,i.g.forEach(function(c,l){var T=l.toLowerCase();l!=T&&(ms(this,l),_s(this,T,c))},i)),i.j=a}function Su(i,a){const c=new Oe;if(h.Image){const l=new Image;l.onload=V(xt,c,"TestLoadImage: loaded",!0,a,l),l.onerror=V(xt,c,"TestLoadImage: error",!1,a,l),l.onabort=V(xt,c,"TestLoadImage: abort",!1,a,l),l.ontimeout=V(xt,c,"TestLoadImage: timeout",!1,a,l),h.setTimeout(function(){l.ontimeout&&l.ontimeout()},1e4),l.src=i}else a(!1)}function Cu(i,a){const c=new Oe,l=new AbortController,T=setTimeout(()=>{l.abort(),xt(c,"TestPingServer: timeout",!1,a)},1e4);fetch(i,{signal:l.signal}).then(A=>{clearTimeout(T),A.ok?xt(c,"TestPingServer: ok",!0,a):xt(c,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(T),xt(c,"TestPingServer: error",!1,a)})}function xt(i,a,c,l,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),l(c)}catch{}}function Vu(){this.g=new lu}function bu(i,a,c){const l=c||"";try{ls(i,function(T,A){let C=T;f(T)&&(C=fr(T)),a.push(l+A+"="+encodeURIComponent(C))})}catch(T){throw a.push(l+"type="+encodeURIComponent("_badmap")),T}}function Ue(i){this.l=i.Ub||null,this.j=i.eb||!1}k(Ue,pr),Ue.prototype.g=function(){return new In(this.l,this.j)},Ue.prototype.i=function(i){return function(){return i}}({});function In(i,a){lt.call(this),this.D=i,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(In,lt),n=In.prototype,n.open=function(i,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=a,this.readyState=1,qe(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(a.body=i),(this.D||h).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Be(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,qe(this)),this.g&&(this.readyState=3,qe(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ys(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function ys(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var a=i.value?i.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!i.done}))&&(this.response=this.responseText+=a)}i.done?Be(this):qe(this),this.readyState==3&&ys(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,Be(this))},n.Qa=function(i){this.g&&(this.response=i,Be(this))},n.ga=function(){this.g&&Be(this)};function Be(i){i.readyState=4,i.l=null,i.j=null,i.v=null,qe(i)}n.setRequestHeader=function(i,a){this.u.append(i,a)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],a=this.h.entries();for(var c=a.next();!c.done;)c=c.value,i.push(c[0]+": "+c[1]),c=a.next();return i.join(`\r
`)};function qe(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(In.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Es(i){let a="";return st(i,function(c,l){a+=l,a+=":",a+=c,a+=`\r
`}),a}function wr(i,a,c){t:{for(l in c){var l=!1;break t}l=!0}l||(c=Es(c),typeof i=="string"?c!=null&&encodeURIComponent(String(c)):G(i,a,c))}function W(i){lt.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(W,lt);var Du=/^https?$/i,Nu=["POST","PUT"];n=W.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,a,c,l){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);a=a?a.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():_r.g(),this.v=this.o?Qi(this.o):Qi(_r),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(a,String(i),!0),this.B=!1}catch(A){vs(this,A);return}if(i=c||"",c=new Map(this.headers),l)if(Object.getPrototypeOf(l)===Object.prototype)for(var T in l)c.set(T,l[T]);else if(typeof l.keys=="function"&&typeof l.get=="function")for(const A of l.keys())c.set(A,l.get(A));else throw Error("Unknown input type for opt_headers: "+String(l));l=Array.from(c.keys()).find(A=>A.toLowerCase()=="content-type"),T=h.FormData&&i instanceof h.FormData,!(0<=Array.prototype.indexOf.call(Nu,a,void 0))||l||T||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,C]of c)this.g.setRequestHeader(A,C);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{As(this),this.u=!0,this.g.send(i),this.u=!1}catch(A){vs(this,A)}};function vs(i,a){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=a,i.m=5,Ts(i),An(i)}function Ts(i){i.A||(i.A=!0,yt(i,"complete"),yt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,yt(this,"complete"),yt(this,"abort"),An(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),An(this,!0)),W.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Is(this):this.bb())},n.bb=function(){Is(this)};function Is(i){if(i.h&&typeof u<"u"&&(!i.v[1]||Vt(i)!=4||i.Z()!=2)){if(i.u&&Vt(i)==4)zi(i.Ea,0,i);else if(yt(i,"readystatechange"),Vt(i)==4){i.h=!1;try{const C=i.Z();t:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var c;if(!(c=a)){var l;if(l=C===0){var T=String(i.D).match(ds)[1]||null;!T&&h.self&&h.self.location&&(T=h.self.location.protocol.slice(0,-1)),l=!Du.test(T?T.toLowerCase():"")}c=l}if(c)yt(i,"complete"),yt(i,"success");else{i.m=6;try{var A=2<Vt(i)?i.g.statusText:""}catch{A=""}i.l=A+" ["+i.Z()+"]",Ts(i)}}finally{An(i)}}}}function An(i,a){if(i.g){As(i);const c=i.g,l=i.v[0]?()=>{}:null;i.g=null,i.v=null,a||yt(i,"ready");try{c.onreadystatechange=l}catch{}}}function As(i){i.I&&(h.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Vt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Vt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var a=this.g.responseText;return i&&a.indexOf(i)==0&&(a=a.substring(i.length)),hu(a)}};function ws(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function ku(i){const a={};i=(i.g&&2<=Vt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let l=0;l<i.length;l++){if(K(i[l]))continue;var c=E(i[l]);const T=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const A=a[T]||[];a[T]=A,A.push(c)}v(a,function(l){return l.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function je(i,a,c){return c&&c.internalChannelParams&&c.internalChannelParams[i]||a}function Rs(i){this.Aa=0,this.i=[],this.j=new Oe,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=je("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=je("baseRetryDelayMs",5e3,i),this.cb=je("retryDelaySeedMs",1e4,i),this.Wa=je("forwardChannelMaxRetries",2,i),this.wa=je("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new os(i&&i.concurrentRequestLimit),this.Da=new Vu,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Rs.prototype,n.la=8,n.G=1,n.connect=function(i,a,c,l){Et(0),this.W=i,this.H=a||{},c&&l!==void 0&&(this.H.OSID=c,this.H.OAID=l),this.F=this.X,this.I=Os(this,null,this.W),Rn(this)};function Rr(i){if(Ps(i),i.G==3){var a=i.U++,c=Ct(i.I);if(G(c,"SID",i.K),G(c,"RID",a),G(c,"TYPE","terminate"),$e(i,c),a=new kt(i,i.j,a),a.L=2,a.v=Tn(Ct(c)),c=!1,h.navigator&&h.navigator.sendBeacon)try{c=h.navigator.sendBeacon(a.v.toString(),"")}catch{}!c&&h.Image&&(new Image().src=a.v,c=!0),c||(a.g=xs(a.j,null),a.g.ea(a.v)),a.F=Date.now(),yn(a)}ks(i)}function wn(i){i.g&&(Sr(i),i.g.cancel(),i.g=null)}function Ps(i){wn(i),i.u&&(h.clearTimeout(i.u),i.u=null),Pn(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&h.clearTimeout(i.s),i.s=null)}function Rn(i){if(!as(i.h)&&!i.s){i.s=!0;var a=i.Ga;Se||Ui(),Ce||(Se(),Ce=!0),sr.add(a,i),i.B=0}}function Ou(i,a){return us(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=a.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=ke(R(i.Ga,i,a),Ns(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const T=new kt(this,this.j,i);let A=this.o;if(this.S&&(A?(A=p(A),y(A,this.S)):A=this.S),this.m!==null||this.O||(T.H=A,A=null),this.P)t:{for(var a=0,c=0;c<this.i.length;c++){e:{var l=this.i[c];if("__data__"in l.map&&(l=l.map.__data__,typeof l=="string")){l=l.length;break e}l=void 0}if(l===void 0)break;if(a+=l,4096<a){a=c;break t}if(a===4096||c===this.i.length-1){a=c+1;break t}}a=1e3}else a=1e3;a=Cs(this,T,a),c=Ct(this.I),G(c,"RID",i),G(c,"CVER",22),this.D&&G(c,"X-HTTP-Session-Id",this.D),$e(this,c),A&&(this.O?a="headers="+encodeURIComponent(String(Es(A)))+"&"+a:this.m&&wr(c,this.m,A)),Ar(this.h,T),this.Ua&&G(c,"TYPE","init"),this.P?(G(c,"$req",a),G(c,"SID","null"),T.T=!0,Er(T,c,null)):Er(T,c,a),this.G=2}}else this.G==3&&(i?Ss(this,i):this.i.length==0||as(this.h)||Ss(this))};function Ss(i,a){var c;a?c=a.l:c=i.U++;const l=Ct(i.I);G(l,"SID",i.K),G(l,"RID",c),G(l,"AID",i.T),$e(i,l),i.m&&i.o&&wr(l,i.m,i.o),c=new kt(i,i.j,c,i.B+1),i.m===null&&(c.H=i.o),a&&(i.i=a.D.concat(i.i)),a=Cs(i,c,1e3),c.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Ar(i.h,c),Er(c,l,a)}function $e(i,a){i.H&&st(i.H,function(c,l){G(a,l,c)}),i.l&&ls({},function(c,l){G(a,l,c)})}function Cs(i,a,c){c=Math.min(i.i.length,c);var l=i.l?R(i.l.Na,i.l,i):null;t:{var T=i.i;let A=-1;for(;;){const C=["count="+c];A==-1?0<c?(A=T[0].g,C.push("ofs="+A)):A=0:C.push("ofs="+A);let z=!0;for(let ot=0;ot<c;ot++){let j=T[ot].g;const dt=T[ot].map;if(j-=A,0>j)A=Math.max(0,T[ot].g-100),z=!1;else try{bu(dt,C,"req"+j+"_")}catch{l&&l(dt)}}if(z){l=C.join("&");break t}}}return i=i.i.splice(0,c),a.D=i,l}function Vs(i){if(!i.g&&!i.u){i.Y=1;var a=i.Fa;Se||Ui(),Ce||(Se(),Ce=!0),sr.add(a,i),i.v=0}}function Pr(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=ke(R(i.Fa,i),Ns(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,bs(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=ke(R(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),wn(this),bs(this))};function Sr(i){i.A!=null&&(h.clearTimeout(i.A),i.A=null)}function bs(i){i.g=new kt(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var a=Ct(i.qa);G(a,"RID","rpc"),G(a,"SID",i.K),G(a,"AID",i.T),G(a,"CI",i.F?"0":"1"),!i.F&&i.ja&&G(a,"TO",i.ja),G(a,"TYPE","xmlhttp"),$e(i,a),i.m&&i.o&&wr(a,i.m,i.o),i.L&&(i.g.I=i.L);var c=i.g;i=i.ia,c.L=1,c.v=Tn(Ct(a)),c.m=null,c.P=!0,rs(c,i)}n.Za=function(){this.C!=null&&(this.C=null,wn(this),Pr(this),Et(19))};function Pn(i){i.C!=null&&(h.clearTimeout(i.C),i.C=null)}function Ds(i,a){var c=null;if(i.g==a){Pn(i),Sr(i),i.g=null;var l=2}else if(Ir(i.h,a))c=a.D,cs(i.h,a),l=1;else return;if(i.G!=0){if(a.o)if(l==1){c=a.m?a.m.length:0,a=Date.now()-a.F;var T=i.B;l=mn(),yt(l,new Zi(l,c)),Rn(i)}else Vs(i);else if(T=a.s,T==3||T==0&&0<a.X||!(l==1&&Ou(i,a)||l==2&&Pr(i)))switch(c&&0<c.length&&(a=i.h,a.i=a.i.concat(c)),T){case 1:Kt(i,5);break;case 4:Kt(i,10);break;case 3:Kt(i,6);break;default:Kt(i,2)}}}function Ns(i,a){let c=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(c*=2),c*a}function Kt(i,a){if(i.j.info("Error code "+a),a==2){var c=R(i.fb,i),l=i.Xa;const T=!l;l=new Ht(l||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||En(l,"https"),Tn(l),T?Su(l.toString(),c):Cu(l.toString(),c)}else Et(2);i.G=0,i.l&&i.l.sa(a),ks(i),Ps(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function ks(i){if(i.G=0,i.ka=[],i.l){const a=hs(i.h);(a.length!=0||i.i.length!=0)&&(N(i.ka,a),N(i.ka,i.i),i.h.i.length=0,L(i.i),i.i.length=0),i.l.ra()}}function Os(i,a,c){var l=c instanceof Ht?Ct(c):new Ht(c);if(l.g!="")a&&(l.g=a+"."+l.g),vn(l,l.s);else{var T=h.location;l=T.protocol,a=a?a+"."+T.hostname:T.hostname,T=+T.port;var A=new Ht(null);l&&En(A,l),a&&(A.g=a),T&&vn(A,T),c&&(A.l=c),l=A}return c=i.D,a=i.ya,c&&a&&G(l,c,a),G(l,"VER",i.la),$e(i,l),l}function xs(i,a,c){if(a&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=i.Ca&&!i.pa?new W(new Ue({eb:c})):new W(i.pa),a.Ha(i.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ms(){}n=Ms.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Sn(){}Sn.prototype.g=function(i,a){return new vt(i,a)};function vt(i,a){lt.call(this),this.g=new Rs(a),this.l=i,this.h=a&&a.messageUrlParams||null,i=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(i?i["X-WebChannel-Content-Type"]=a.messageContentType:i={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(i?i["X-WebChannel-Client-Profile"]=a.va:i={"X-WebChannel-Client-Profile":a.va}),this.g.S=i,(i=a&&a.Sb)&&!K(i)&&(this.g.m=i),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!K(a)&&(this.g.D=a,i=this.h,i!==null&&a in i&&(i=this.h,a in i&&delete i[a])),this.j=new se(this)}k(vt,lt),vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vt.prototype.close=function(){Rr(this.g)},vt.prototype.o=function(i){var a=this.g;if(typeof i=="string"){var c={};c.__data__=i,i=c}else this.u&&(c={},c.__data__=fr(i),i=c);a.i.push(new _u(a.Ya++,i)),a.G==3&&Rn(a)},vt.prototype.N=function(){this.g.l=null,delete this.j,Rr(this.g),delete this.g,vt.aa.N.call(this)};function Ls(i){mr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var a=i.__sm__;if(a){t:{for(const c in a){i=c;break t}i=void 0}(this.i=i)&&(i=this.i,a=a!==null&&i in a?a[i]:void 0),this.data=a}else this.data=i}k(Ls,mr);function Fs(){gr.call(this),this.status=1}k(Fs,gr);function se(i){this.g=i}k(se,Ms),se.prototype.ua=function(){yt(this.g,"a")},se.prototype.ta=function(i){yt(this.g,new Ls(i))},se.prototype.sa=function(i){yt(this.g,new Fs)},se.prototype.ra=function(){yt(this.g,"b")},Sn.prototype.createWebChannel=Sn.prototype.g,vt.prototype.send=vt.prototype.o,vt.prototype.open=vt.prototype.m,vt.prototype.close=vt.prototype.close,Xo=function(){return new Sn},Yo=function(){return mn()},Wo=zt,zr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},gn.NO_ERROR=0,gn.TIMEOUT=8,gn.HTTP_ERROR=6,xn=gn,ts.COMPLETE="complete",Qo=ts,Wi.EventType=De,De.OPEN="a",De.CLOSE="b",De.ERROR="c",De.MESSAGE="d",lt.prototype.listen=lt.prototype.K,Ge=Wi,Ko=Ue,W.prototype.listenOnce=W.prototype.L,W.prototype.getLastError=W.prototype.Ka,W.prototype.getLastErrorCode=W.prototype.Ba,W.prototype.getStatus=W.prototype.Z,W.prototype.getResponseJson=W.prototype.Oa,W.prototype.getResponseText=W.prototype.oa,W.prototype.send=W.prototype.ea,W.prototype.setWithCredentials=W.prototype.Ha,Ho=W}).apply(typeof bn<"u"?bn:typeof self<"u"?self:typeof window<"u"?window:{});const Ys="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ie="10.12.5";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te=new Uo("@firebase/firestore");function ze(){return te.logLevel}function D(n,...t){if(te.logLevel<=B.DEBUG){const e=t.map(ci);te.debug(`Firestore (${Ie}): ${n}`,...e)}}function bt(n,...t){if(te.logLevel<=B.ERROR){const e=t.map(ci);te.error(`Firestore (${Ie}): ${n}`,...e)}}function pe(n,...t){if(te.logLevel<=B.WARN){const e=t.map(ci);te.warn(`Firestore (${Ie}): ${n}`,...e)}}function ci(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(n="Unexpected state"){const t=`FIRESTORE (${Ie}) INTERNAL ASSERTION FAILED: `+n;throw bt(t),new Error(t)}function et(n,t){n||M()}function U(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class b extends Te{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class hh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(mt.UNAUTHENTICATED))}shutdown(){}}class lh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class dh{constructor(t){this.t=t,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const s=d=>this.i!==r?(r=this.i,e(d)):Promise.resolve();let o=new Xt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Xt,t.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const d=o;t.enqueueRetryable(async()=>{await d.promise,await s(this.currentUser)})},h=d=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.auth.addAuthTokenListener(this.o),u()};this.t.onInit(d=>h(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?h(d):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Xt)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(et(typeof r.accessToken=="string"),new Jo(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return et(t===null||typeof t=="string"),new mt(t)}}class fh{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ph{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new fh(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class mh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gh{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,D("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(et(typeof e.token=="string"),this.R=e.token,new mh(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=_h(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%t.length))}return r}}function $(n,t){return n<t?-1:n>t?1:0}function me(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new b(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new b(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new b(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new b(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return it.fromMillis(Date.now())}static fromDate(t){return it.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new it(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?$(this.nanoseconds,t.nanoseconds):$(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(t){this.timestamp=t}static fromTimestamp(t){return new x(t)}static min(){return new x(new it(0,0))}static max(){return new x(new it(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(t,e,r){e===void 0?e=0:e>t.length&&M(),r===void 0?r=t.length-e:r>t.length-e&&M(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return tn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof tn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=t.get(s),u=e.get(s);if(o<u)return-1;if(o>u)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class H extends tn{construct(t,e,r){return new H(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new b(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new H(e)}static emptyPath(){return new H([])}}const Eh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _t extends tn{construct(t,e,r){return new _t(t,e,r)}static isValidIdentifier(t){return Eh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_t.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new _t(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new b(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let u=!1;for(;s<t.length;){const h=t[s];if(h==="\\"){if(s+1===t.length)throw new b(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const d=t[s+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new b(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=d,s+=2}else h==="`"?(u=!u,s++):h!=="."||u?(r+=h,s++):(o(),s++)}if(o(),u)throw new b(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new _t(e)}static emptyPath(){return new _t([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(H.fromString(t))}static fromName(t){return new O(H.fromString(t).popFirst(5))}static empty(){return new O(H.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&H.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return H.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new H(t.slice()))}}function vh(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=x.fromTimestamp(r===1e9?new it(e+1,0):new it(e,r));return new Bt(s,O.empty(),t)}function Th(n){return new Bt(n.readTime,n.key,-1)}class Bt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Bt(x.min(),O.empty(),-1)}static max(){return new Bt(x.max(),O.empty(),-1)}}function Ih(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(n.documentKey,t.documentKey),e!==0?e:$(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hi(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==Ah)throw n;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new P((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof P?e:P.resolve(e)}catch(e){return P.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):P.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):P.reject(e)}static resolve(t){return new P((e,r)=>{e(t)})}static reject(t){return new P((e,r)=>{r(t)})}static waitFor(t){return new P((e,r)=>{let s=0,o=0,u=!1;t.forEach(h=>{++s,h.next(()=>{++o,u&&o===s&&e()},d=>r(d))}),u=!0,o===s&&e()})}static or(t){let e=P.resolve(!1);for(const r of t)e=e.next(s=>s?P.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new P((r,s)=>{const o=t.length,u=new Array(o);let h=0;for(let d=0;d<o;d++){const f=d;e(t[f]).next(_=>{u[f]=_,++h,h===o&&r(u)},_=>s(_))}})}static doWhile(t,e){return new P((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function Rh(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function on(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}li.oe=-1;function Qn(n){return n==null}function $n(n){return n===0&&1/n==-1/0}function Ph(n){return typeof n=="number"&&Number.isInteger(n)&&!$n(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function an(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Zo(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t,e){this.comparator=t,this.root=e||at.EMPTY}insert(t,e){return new X(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,at.BLACK,null,null))}remove(t){return new X(this.comparator,this.root.remove(t,this.comparator).copy(null,null,at.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Dn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Dn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Dn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Dn(this.root,t,this.comparator,!0)}}class Dn{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class at{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??at.RED,this.left=s??at.EMPTY,this.right=o??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new at(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return at.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const t=this.left.check();if(t!==this.right.check())throw M();return t+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(t,e,r,s,o){return this}insert(t,e,r){return new at(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t){this.comparator=t,this.data=new X(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Js(this.data.getIterator())}getIteratorFrom(t){return new Js(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof ut)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ut(this.comparator);return e.data=t,e}}class Js{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(t){this.fields=t,t.sort(_t.comparator)}static empty(){return new Mt([])}unionWith(t){let e=new ut(_t.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Mt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return me(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new ta("Invalid base64 string: "+o):o}}(t);return new ct(e)}static fromUint8Array(t){const e=function(s){let o="";for(let u=0;u<s.length;++u)o+=String.fromCharCode(s[u]);return o}(t);return new ct(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return $(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const Sh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qt(n){if(et(!!n),typeof n=="string"){let t=0;const e=Sh.exec(n);if(et(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Z(n.seconds),nanos:Z(n.nanos)}}function Z(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ee(n){return typeof n=="string"?ct.fromBase64String(n):ct.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function fi(n){const t=n.mapValue.fields.__previous_value__;return di(t)?fi(t):t}function en(n){const t=qt(n.mapValue.fields.__local_write_time__.timestampValue);return new it(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(t,e,r,s,o,u,h,d,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=h,this.longPollingOptions=d,this.useFetchStreams=f}}class nn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new nn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof nn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ne(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?di(n)?4:Vh(n)?9007199254740991:10:M()}function Rt(n,t){if(n===t)return!0;const e=ne(n);if(e!==ne(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return en(n).isEqual(en(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const u=qt(s.timestampValue),h=qt(o.timestampValue);return u.seconds===h.seconds&&u.nanos===h.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return ee(s.bytesValue).isEqual(ee(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return Z(s.geoPointValue.latitude)===Z(o.geoPointValue.latitude)&&Z(s.geoPointValue.longitude)===Z(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return Z(s.integerValue)===Z(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const u=Z(s.doubleValue),h=Z(o.doubleValue);return u===h?$n(u)===$n(h):isNaN(u)&&isNaN(h)}return!1}(n,t);case 9:return me(n.arrayValue.values||[],t.arrayValue.values||[],Rt);case 10:return function(s,o){const u=s.mapValue.fields||{},h=o.mapValue.fields||{};if(Xs(u)!==Xs(h))return!1;for(const d in u)if(u.hasOwnProperty(d)&&(h[d]===void 0||!Rt(u[d],h[d])))return!1;return!0}(n,t);default:return M()}}function rn(n,t){return(n.values||[]).find(e=>Rt(e,t))!==void 0}function ge(n,t){if(n===t)return 0;const e=ne(n),r=ne(t);if(e!==r)return $(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return $(n.booleanValue,t.booleanValue);case 2:return function(o,u){const h=Z(o.integerValue||o.doubleValue),d=Z(u.integerValue||u.doubleValue);return h<d?-1:h>d?1:h===d?0:isNaN(h)?isNaN(d)?0:-1:1}(n,t);case 3:return Zs(n.timestampValue,t.timestampValue);case 4:return Zs(en(n),en(t));case 5:return $(n.stringValue,t.stringValue);case 6:return function(o,u){const h=ee(o),d=ee(u);return h.compareTo(d)}(n.bytesValue,t.bytesValue);case 7:return function(o,u){const h=o.split("/"),d=u.split("/");for(let f=0;f<h.length&&f<d.length;f++){const _=$(h[f],d[f]);if(_!==0)return _}return $(h.length,d.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,u){const h=$(Z(o.latitude),Z(u.latitude));return h!==0?h:$(Z(o.longitude),Z(u.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(o,u){const h=o.values||[],d=u.values||[];for(let f=0;f<h.length&&f<d.length;++f){const _=ge(h[f],d[f]);if(_)return _}return $(h.length,d.length)}(n.arrayValue,t.arrayValue);case 10:return function(o,u){if(o===Nn.mapValue&&u===Nn.mapValue)return 0;if(o===Nn.mapValue)return 1;if(u===Nn.mapValue)return-1;const h=o.fields||{},d=Object.keys(h),f=u.fields||{},_=Object.keys(f);d.sort(),_.sort();for(let w=0;w<d.length&&w<_.length;++w){const R=$(d[w],_[w]);if(R!==0)return R;const V=ge(h[d[w]],f[_[w]]);if(V!==0)return V}return $(d.length,_.length)}(n.mapValue,t.mapValue);default:throw M()}}function Zs(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return $(n,t);const e=qt(n),r=qt(t),s=$(e.seconds,r.seconds);return s!==0?s:$(e.nanos,r.nanos)}function _e(n){return Gr(n)}function Gr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=qt(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return ee(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return O.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Gr(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const u of r)o?o=!1:s+=",",s+=`${u}:${Gr(e.fields[u])}`;return s+"}"}(n.mapValue):M()}function to(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Hr(n){return!!n&&"integerValue"in n}function pi(n){return!!n&&"arrayValue"in n}function eo(n){return!!n&&"nullValue"in n}function no(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function kr(n){return!!n&&"mapValue"in n}function Qe(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return an(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Qe(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Qe(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Vh(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this.value=t}static empty(){return new At({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!kr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Qe(e)}setAll(t){let e=_t.emptyPath(),r={},s=[];t.forEach((u,h)=>{if(!e.isImmediateParentOf(h)){const d=this.getFieldsMap(e);this.applyChanges(d,r,s),r={},s=[],e=h.popLast()}u?r[h.lastSegment()]=Qe(u):s.push(h.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());kr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Rt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];kr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){an(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new At(Qe(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t,e,r,s,o,u,h){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=u,this.documentState=h}static newInvalidDocument(t){return new gt(t,0,x.min(),x.min(),x.min(),At.empty(),0)}static newFoundDocument(t,e,r,s){return new gt(t,1,e,x.min(),r,s,0)}static newNoDocument(t,e){return new gt(t,2,e,x.min(),x.min(),At.empty(),0)}static newUnknownDocument(t,e){return new gt(t,3,e,x.min(),x.min(),At.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(x.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=x.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof gt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(t,e){this.position=t,this.inclusive=e}}function ro(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],u=n.position[s];if(o.field.isKeyField()?r=O.comparator(O.fromName(u.referenceValue),e.key):r=ge(u,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function io(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Rt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(t,e="asc"){this.field=t,this.dir=e}}function bh(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{}class tt extends ea{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Nh(t,e,r):e==="array-contains"?new xh(t,r):e==="in"?new Mh(t,r):e==="not-in"?new Lh(t,r):e==="array-contains-any"?new Fh(t,r):new tt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new kh(t,r):new Oh(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(ge(e,this.value)):e!==null&&ne(this.value)===ne(e)&&this.matchesComparison(ge(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class It extends ea{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new It(t,e)}matches(t){return na(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function na(n){return n.op==="and"}function ra(n){return Dh(n)&&na(n)}function Dh(n){for(const t of n.filters)if(t instanceof It)return!1;return!0}function Kr(n){if(n instanceof tt)return n.field.canonicalString()+n.op.toString()+_e(n.value);if(ra(n))return n.filters.map(t=>Kr(t)).join(",");{const t=n.filters.map(e=>Kr(e)).join(",");return`${n.op}(${t})`}}function ia(n,t){return n instanceof tt?function(r,s){return s instanceof tt&&r.op===s.op&&r.field.isEqual(s.field)&&Rt(r.value,s.value)}(n,t):n instanceof It?function(r,s){return s instanceof It&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,u,h)=>o&&ia(u,s.filters[h]),!0):!1}(n,t):void M()}function sa(n){return n instanceof tt?function(e){return`${e.field.canonicalString()} ${e.op} ${_e(e.value)}`}(n):n instanceof It?function(e){return e.op.toString()+" {"+e.getFilters().map(sa).join(" ,")+"}"}(n):"Filter"}class Nh extends tt{constructor(t,e,r){super(t,e,r),this.key=O.fromName(r.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class kh extends tt{constructor(t,e){super(t,"in",e),this.keys=oa("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Oh extends tt{constructor(t,e){super(t,"not-in",e),this.keys=oa("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function oa(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>O.fromName(r.referenceValue))}class xh extends tt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return pi(e)&&rn(e.arrayValue,this.value)}}class Mh extends tt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&rn(this.value.arrayValue,e)}}class Lh extends tt{constructor(t,e){super(t,"not-in",e)}matches(t){if(rn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!rn(this.value.arrayValue,e)}}class Fh extends tt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!pi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>rn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(t,e=null,r=[],s=[],o=null,u=null,h=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=u,this.endAt=h,this.ue=null}}function so(n,t=null,e=[],r=[],s=null,o=null,u=null){return new Uh(n,t,e,r,s,o,u)}function mi(n){const t=U(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Kr(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Qn(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>_e(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>_e(r)).join(",")),t.ue=e}return t.ue}function gi(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!bh(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!ia(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!io(n.startAt,t.startAt)&&io(n.endAt,t.endAt)}function Qr(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(t,e=null,r=[],s=[],o=null,u="F",h=null,d=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=u,this.startAt=h,this.endAt=d,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Bh(n,t,e,r,s,o,u,h){return new Ae(n,t,e,r,s,o,u,h)}function aa(n){return new Ae(n)}function oo(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ua(n){return n.collectionGroup!==null}function We(n){const t=U(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let h=new ut(_t.comparator);return u.filters.forEach(d=>{d.getFlattenedFilters().forEach(f=>{f.isInequality()&&(h=h.add(f.field))})}),h})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new sn(o,r))}),e.has(_t.keyField().canonicalString())||t.ce.push(new sn(_t.keyField(),r))}return t.ce}function wt(n){const t=U(n);return t.le||(t.le=qh(t,We(n))),t.le}function qh(n,t){if(n.limitType==="F")return so(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new sn(s.field,o)});const e=n.endAt?new zn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new zn(n.startAt.position,n.startAt.inclusive):null;return so(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Wr(n,t){const e=n.filters.concat([t]);return new Ae(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Gn(n,t,e){return new Ae(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Wn(n,t){return gi(wt(n),wt(t))&&n.limitType===t.limitType}function ca(n){return`${mi(wt(n))}|lt:${n.limitType}`}function ae(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>sa(s)).join(", ")}]`),Qn(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>_e(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>_e(s)).join(",")),`Target(${r})`}(wt(n))}; limitType=${n.limitType})`}function Yn(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):O.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of We(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(u,h,d){const f=ro(u,h,d);return u.inclusive?f<=0:f<0}(r.startAt,We(r),s)||r.endAt&&!function(u,h,d){const f=ro(u,h,d);return u.inclusive?f>=0:f>0}(r.endAt,We(r),s))}(n,t)}function jh(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function ha(n){return(t,e)=>{let r=!1;for(const s of We(n)){const o=$h(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function $h(n,t,e){const r=n.field.isKeyField()?O.comparator(t.key,e.key):function(o,u,h){const d=u.data.field(o),f=h.data.field(o);return d!==null&&f!==null?ge(d,f):M()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return M()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){an(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return Zo(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh=new X(O.comparator);function jt(){return zh}const la=new X(O.comparator);function He(...n){let t=la;for(const e of n)t=t.insert(e.key,e);return t}function Gh(n){let t=la;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Wt(){return Ye()}function da(){return Ye()}function Ye(){return new we(n=>n.toString(),(n,t)=>n.isEqual(t))}const Hh=new ut(O.comparator);function q(...n){let t=Hh;for(const e of n)t=t.add(e);return t}const Kh=new ut($);function Qh(){return Kh}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$n(t)?"-0":t}}function pa(n){return{integerValue:""+n}}function Wh(n,t){return Ph(t)?pa(t):fa(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(){this._=void 0}}function Yh(n,t,e){return n instanceof Yr?function(s,o){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&di(o)&&(o=fi(o)),o&&(u.fields.__previous_value__=o),{mapValue:u}}(e,t):n instanceof Hn?ma(n,t):n instanceof Kn?ga(n,t):function(s,o){const u=Jh(s,o),h=ao(u)+ao(s.Pe);return Hr(u)&&Hr(s.Pe)?pa(h):fa(s.serializer,h)}(n,t)}function Xh(n,t,e){return n instanceof Hn?ma(n,t):n instanceof Kn?ga(n,t):e}function Jh(n,t){return n instanceof Xr?function(r){return Hr(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Yr extends Xn{}class Hn extends Xn{constructor(t){super(),this.elements=t}}function ma(n,t){const e=_a(t);for(const r of n.elements)e.some(s=>Rt(s,r))||e.push(r);return{arrayValue:{values:e}}}class Kn extends Xn{constructor(t){super(),this.elements=t}}function ga(n,t){let e=_a(t);for(const r of n.elements)e=e.filter(s=>!Rt(s,r));return{arrayValue:{values:e}}}class Xr extends Xn{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function ao(n){return Z(n.integerValue||n.doubleValue)}function _a(n){return pi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Zh(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof Hn&&s instanceof Hn||r instanceof Kn&&s instanceof Kn?me(r.elements,s.elements,Rt):r instanceof Xr&&s instanceof Xr?Rt(r.Pe,s.Pe):r instanceof Yr&&s instanceof Yr}(n.transform,t.transform)}class Jt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Jt}static exists(t){return new Jt(void 0,t)}static updateTime(t){return new Jt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Mn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class _i{}function ya(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new el(n.key,Jt.none()):new yi(n.key,n.data,Jt.none());{const e=n.data,r=At.empty();let s=new ut(_t.comparator);for(let o of t.fields)if(!s.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?r.delete(o):r.set(o,u),s=s.add(o)}return new Jn(n.key,r,new Mt(s.toArray()),Jt.none())}}function tl(n,t,e){n instanceof yi?function(s,o,u){const h=s.value.clone(),d=co(s.fieldTransforms,o,u.transformResults);h.setAll(d),o.convertToFoundDocument(u.version,h).setHasCommittedMutations()}(n,t,e):n instanceof Jn?function(s,o,u){if(!Mn(s.precondition,o))return void o.convertToUnknownDocument(u.version);const h=co(s.fieldTransforms,o,u.transformResults),d=o.data;d.setAll(Ea(s)),d.setAll(h),o.convertToFoundDocument(u.version,d).setHasCommittedMutations()}(n,t,e):function(s,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function Xe(n,t,e,r){return n instanceof yi?function(o,u,h,d){if(!Mn(o.precondition,u))return h;const f=o.value.clone(),_=ho(o.fieldTransforms,d,u);return f.setAll(_),u.convertToFoundDocument(u.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof Jn?function(o,u,h,d){if(!Mn(o.precondition,u))return h;const f=ho(o.fieldTransforms,d,u),_=u.data;return _.setAll(Ea(o)),_.setAll(f),u.convertToFoundDocument(u.version,_).setHasLocalMutations(),h===null?null:h.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(w=>w.field))}(n,t,e,r):function(o,u,h){return Mn(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):h}(n,t,e)}function uo(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&me(r,s,(o,u)=>Zh(o,u))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class yi extends _i{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Jn extends _i{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Ea(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function co(n,t,e){const r=new Map;et(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],u=o.transform,h=t.data.field(o.field);r.set(o.field,Xh(u,h,e[s]))}return r}function ho(n,t,e){const r=new Map;for(const s of n){const o=s.transform,u=e.data.field(s.field);r.set(s.field,Yh(o,u,t))}return r}class el extends _i{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&tl(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Xe(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Xe(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=da();return this.mutations.forEach(s=>{const o=t.get(s.key),u=o.overlayedDocument;let h=this.applyToLocalView(u,o.mutatedFields);h=e.has(s.key)?null:h;const d=ya(u,h);d!==null&&r.set(s.key,d),u.isValidDocument()||u.convertToNoDocument(x.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),q())}isEqual(t){return this.batchId===t.batchId&&me(this.mutations,t.mutations,(e,r)=>uo(e,r))&&me(this.baseMutations,t.baseMutations,(e,r)=>uo(e,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J,F;function va(n){if(n===void 0)return bt("GRPC error has no .code"),S.UNKNOWN;switch(n){case J.OK:return S.OK;case J.CANCELLED:return S.CANCELLED;case J.UNKNOWN:return S.UNKNOWN;case J.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case J.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case J.INTERNAL:return S.INTERNAL;case J.UNAVAILABLE:return S.UNAVAILABLE;case J.UNAUTHENTICATED:return S.UNAUTHENTICATED;case J.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case J.NOT_FOUND:return S.NOT_FOUND;case J.ALREADY_EXISTS:return S.ALREADY_EXISTS;case J.PERMISSION_DENIED:return S.PERMISSION_DENIED;case J.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case J.ABORTED:return S.ABORTED;case J.OUT_OF_RANGE:return S.OUT_OF_RANGE;case J.UNIMPLEMENTED:return S.UNIMPLEMENTED;case J.DATA_LOSS:return S.DATA_LOSS;default:return M()}}(F=J||(J={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol=new Yt([4294967295,4294967295],0);function lo(n){const t=sl().encode(n),e=new Go;return e.update(t),new Uint8Array(e.digest())}function fo(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Yt([e,r],0),new Yt([s,o],0)]}class Ei{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Ke(`Invalid padding: ${e}`);if(r<0)throw new Ke(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Ke(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Ke(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Yt.fromNumber(this.Ie)}Ee(t,e,r){let s=t.add(e.multiply(Yt.fromNumber(r)));return s.compare(ol)===1&&(s=new Yt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=lo(t),[r,s]=fo(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(r,s,o);if(!this.de(u))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new Ei(o,s,e);return r.forEach(h=>u.insert(h)),u}insert(t){if(this.Ie===0)return;const e=lo(t),[r,s]=fo(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(r,s,o);this.Ae(u)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Ke extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,un.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Zn(x.min(),s,new X($),jt(),q())}}class un{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new un(r,e,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(t,e,r,s){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=s}}class Ta{constructor(t,e){this.targetId=t,this.me=e}}class Ia{constructor(t,e,r=ct.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class po{constructor(){this.fe=0,this.ge=go(),this.pe=ct.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=q(),e=q(),r=q();return this.ge.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:M()}}),new un(this.pe,this.ye,t,e,r)}ve(){this.we=!1,this.ge=go()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,et(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class al{constructor(t){this.Le=t,this.Be=new Map,this.ke=jt(),this.qe=mo(),this.Qe=new X($)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:M()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,r=t.me.count,s=this.Je(e);if(s){const o=s.target;if(Qr(o))if(r===0){const u=new O(o.path);this.Ue(e,u,gt.newNoDocument(u,x.min()))}else et(r===1);else{const u=this.Ye(e);if(u!==r){const h=this.Ze(t),d=h?this.Xe(h,t,u):1;if(d!==0){this.je(e);const f=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,f)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let u,h;try{u=ee(r).toUint8Array()}catch(d){if(d instanceof ta)return pe("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{h=new Ei(u,s,o)}catch(d){return pe(d instanceof Ke?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return h.Ie===0?null:h}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const u=this.Le.tt(),h=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(h)||(this.Ue(e,o,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((o,u)=>{const h=this.Je(u);if(h){if(o.current&&Qr(h.target)){const d=new O(h.target.path);this.ke.get(d)!==null||this.it(u,d)||this.Ue(u,d,gt.newNoDocument(d,t))}o.be&&(e.set(u,o.Ce()),o.ve())}});let r=q();this.qe.forEach((o,u)=>{let h=!0;u.forEachWhile(d=>{const f=this.Je(d);return!f||f.purpose==="TargetPurposeLimboResolution"||(h=!1,!1)}),h&&(r=r.add(o))}),this.ke.forEach((o,u)=>u.setReadTime(t));const s=new Zn(t,e,this.Qe,this.ke,r);return this.ke=jt(),this.qe=mo(),this.Qe=new X($),s}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new po,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new ut($),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||D("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new po),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function mo(){return new X(O.comparator)}function go(){return new X(O.comparator)}const ul={asc:"ASCENDING",desc:"DESCENDING"},cl={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},hl={and:"AND",or:"OR"};class ll{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Jr(n,t){return n.useProto3Json||Qn(t)?t:{value:t}}function Zr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Aa(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function le(n){return et(!!n),x.fromTimestamp(function(e){const r=qt(e);return new it(r.seconds,r.nanos)}(n))}function wa(n,t){return ti(n,t).canonicalString()}function ti(n,t){const e=function(s){return new H(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Ra(n){const t=H.fromString(n);return et(ba(t)),t}function Or(n,t){const e=Ra(t);if(e.get(1)!==n.databaseId.projectId)throw new b(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new b(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new O(Sa(e))}function Pa(n,t){return wa(n.databaseId,t)}function dl(n){const t=Ra(n);return t.length===4?H.emptyPath():Sa(t)}function _o(n){return new H(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Sa(n){return et(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function fl(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:M()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(f,_){return f.useProto3Json?(et(_===void 0||typeof _=="string"),ct.fromBase64String(_||"")):(et(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array),ct.fromUint8Array(_||new Uint8Array))}(n,t.targetChange.resumeToken),u=t.targetChange.cause,h=u&&function(f){const _=f.code===void 0?S.UNKNOWN:va(f.code);return new b(_,f.message||"")}(u);e=new Ia(r,s,o,h||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Or(n,r.document.name),o=le(r.document.updateTime),u=r.document.createTime?le(r.document.createTime):x.min(),h=new At({mapValue:{fields:r.document.fields}}),d=gt.newFoundDocument(s,o,u,h),f=r.targetIds||[],_=r.removedTargetIds||[];e=new Ln(f,_,d.key,d)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Or(n,r.document),o=r.readTime?le(r.readTime):x.min(),u=gt.newNoDocument(s,o),h=r.removedTargetIds||[];e=new Ln([],h,u.key,u)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Or(n,r.document),o=r.removedTargetIds||[];e=new Ln([],o,s,null)}else{if(!("filter"in t))return M();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,u=new il(s,o),h=r.targetId;e=new Ta(h,u)}}return e}function pl(n,t){return{documents:[Pa(n,t.path)]}}function ml(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Pa(n,s);const o=function(f){if(f.length!==0)return Va(It.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const u=function(f){if(f.length!==0)return f.map(_=>function(R){return{field:ue(R.field),direction:yl(R.dir)}}(_))}(t.orderBy);u&&(e.structuredQuery.orderBy=u);const h=Jr(n,t.limit);return h!==null&&(e.structuredQuery.limit=h),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{_t:e,parent:s}}function gl(n){let t=dl(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){et(r===1);const _=e.from[0];_.allDescendants?s=_.collectionId:t=t.child(_.collectionId)}let o=[];e.where&&(o=function(w){const R=Ca(w);return R instanceof It&&ra(R)?R.getFilters():[R]}(e.where));let u=[];e.orderBy&&(u=function(w){return w.map(R=>function(k){return new sn(ce(k.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(R))}(e.orderBy));let h=null;e.limit&&(h=function(w){let R;return R=typeof w=="object"?w.value:w,Qn(R)?null:R}(e.limit));let d=null;e.startAt&&(d=function(w){const R=!!w.before,V=w.values||[];return new zn(V,R)}(e.startAt));let f=null;return e.endAt&&(f=function(w){const R=!w.before,V=w.values||[];return new zn(V,R)}(e.endAt)),Bh(t,s,u,o,h,"F",d,f)}function _l(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Ca(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=ce(e.unaryFilter.field);return tt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ce(e.unaryFilter.field);return tt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ce(e.unaryFilter.field);return tt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=ce(e.unaryFilter.field);return tt.create(u,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(n):n.fieldFilter!==void 0?function(e){return tt.create(ce(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return It.create(e.compositeFilter.filters.map(r=>Ca(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return M()}}(e.compositeFilter.op))}(n):M()}function yl(n){return ul[n]}function El(n){return cl[n]}function vl(n){return hl[n]}function ue(n){return{fieldPath:n.canonicalString()}}function ce(n){return _t.fromServerFormat(n.fieldPath)}function Va(n){return n instanceof tt?function(e){if(e.op==="=="){if(no(e.value))return{unaryFilter:{field:ue(e.field),op:"IS_NAN"}};if(eo(e.value))return{unaryFilter:{field:ue(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(no(e.value))return{unaryFilter:{field:ue(e.field),op:"IS_NOT_NAN"}};if(eo(e.value))return{unaryFilter:{field:ue(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ue(e.field),op:El(e.op),value:e.value}}}(n):n instanceof It?function(e){const r=e.getFilters().map(s=>Va(s));return r.length===1?r[0]:{compositeFilter:{op:vl(e.op),filters:r}}}(n):M()}function ba(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(t,e,r,s,o=x.min(),u=x.min(),h=ct.EMPTY_BYTE_STRING,d=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=h,this.expectedCount=d}withSequenceNumber(t){return new Lt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Lt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Lt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Lt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(t){this.ct=t}}function Il(n){const t=gl({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Gn(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(){this.an=new wl}addToCollectionParentIndex(t,e){return this.an.add(e),P.resolve()}getCollectionParents(t,e){return P.resolve(this.an.getEntries(e))}addFieldIndex(t,e){return P.resolve()}deleteFieldIndex(t,e){return P.resolve()}deleteAllFieldIndexes(t){return P.resolve()}createTargetIndexes(t,e){return P.resolve()}getDocumentsMatchingTarget(t,e){return P.resolve(null)}getIndexType(t,e){return P.resolve(0)}getFieldIndexes(t,e){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,e){return P.resolve(Bt.min())}getMinOffsetFromCollectionGroup(t,e){return P.resolve(Bt.min())}updateCollectionGroup(t,e,r){return P.resolve()}updateIndexEntries(t,e){return P.resolve()}}class wl{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new ut(H.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new ut(H.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(t){this.Nn=t}next(){return this.Nn+=2,this.Nn}static Ln(){return new ye(0)}static Bn(){return new ye(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(){this.changes=new we(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,gt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?P.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&Xe(r.mutation,s,Mt.empty(),it.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,q()).next(()=>r))}getLocalViewOfDocuments(t,e,r=q()){const s=Wt();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let u=He();return o.forEach((h,d)=>{u=u.insert(h,d.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const r=Wt();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,q()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((u,h)=>{e.set(u,h)})})}computeViews(t,e,r,s){let o=jt();const u=Ye(),h=function(){return Ye()}();return e.forEach((d,f)=>{const _=r.get(f.key);s.has(f.key)&&(_===void 0||_.mutation instanceof Jn)?o=o.insert(f.key,f):_!==void 0?(u.set(f.key,_.mutation.getFieldMask()),Xe(_.mutation,f,_.mutation.getFieldMask(),it.now())):u.set(f.key,Mt.empty())}),this.recalculateAndSaveOverlays(t,o).next(d=>(d.forEach((f,_)=>u.set(f,_)),e.forEach((f,_)=>{var w;return h.set(f,new Pl(_,(w=u.get(f))!==null&&w!==void 0?w:null))}),h))}recalculateAndSaveOverlays(t,e){const r=Ye();let s=new X((u,h)=>u-h),o=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const h of u)h.keys().forEach(d=>{const f=e.get(d);if(f===null)return;let _=r.get(d)||Mt.empty();_=h.applyToLocalView(f,_),r.set(d,_);const w=(s.get(h.batchId)||q()).add(d);s=s.insert(h.batchId,w)})}).next(()=>{const u=[],h=s.getReverseIterator();for(;h.hasNext();){const d=h.getNext(),f=d.key,_=d.value,w=da();_.forEach(R=>{if(!o.has(R)){const V=ya(e.get(R),r.get(R));V!==null&&w.set(R,V),o=o.add(R)}}),u.push(this.documentOverlayCache.saveOverlays(t,f,w))}return P.waitFor(u)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(u){return O.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ua(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const u=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):P.resolve(Wt());let h=-1,d=o;return u.next(f=>P.forEach(f,(_,w)=>(h<w.largestBatchId&&(h=w.largestBatchId),o.get(_)?P.resolve():this.remoteDocumentCache.getEntry(t,_).next(R=>{d=d.insert(_,R)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,d,f,q())).next(_=>({batchId:h,changes:Gh(_)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next(r=>{let s=He();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let u=He();return this.indexManager.getCollectionParents(t,o).next(h=>P.forEach(h,d=>{const f=function(w,R){return new Ae(R,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,d.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next(_=>{_.forEach((w,R)=>{u=u.insert(w,R)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(u=>{o.forEach((d,f)=>{const _=f.getKey();u.get(_)===null&&(u=u.insert(_,gt.newInvalidDocument(_)))});let h=He();return u.forEach((d,f)=>{const _=o.get(d);_!==void 0&&Xe(_.mutation,f,Mt.empty(),it.now()),Yn(e,f)&&(h=h.insert(d,f))}),h})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(t){this.serializer=t,this.lr=new Map,this.hr=new Map}getBundleMetadata(t,e){return P.resolve(this.lr.get(e))}saveBundleMetadata(t,e){return this.lr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:le(s.createTime)}}(e)),P.resolve()}getNamedQuery(t,e){return P.resolve(this.hr.get(e))}saveNamedQuery(t,e){return this.hr.set(e.name,function(s){return{name:s.name,query:Il(s.bundledQuery),readTime:le(s.readTime)}}(e)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(){this.overlays=new X(O.comparator),this.Pr=new Map}getOverlay(t,e){return P.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Wt();return P.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.ht(t,e,o)}),P.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Pr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Pr.delete(r)),P.resolve()}getOverlaysForCollection(t,e,r){const s=Wt(),o=e.length+1,u=new O(e.child("")),h=this.overlays.getIteratorFrom(u);for(;h.hasNext();){const d=h.getNext().value,f=d.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&d.largestBatchId>r&&s.set(d.getKey(),d)}return P.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new X((f,_)=>f-_);const u=this.overlays.getIterator();for(;u.hasNext();){const f=u.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let _=o.get(f.largestBatchId);_===null&&(_=Wt(),o=o.insert(f.largestBatchId,_)),_.set(f.getKey(),f)}}const h=Wt(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((f,_)=>h.set(f,_)),!(h.size()>=s)););return P.resolve(h)}ht(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const u=this.Pr.get(s.largestBatchId).delete(r.key);this.Pr.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new rl(e,r));let o=this.Pr.get(e);o===void 0&&(o=q(),this.Pr.set(e,o)),this.Pr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(){this.sessionToken=ct.EMPTY_BYTE_STRING}getSessionToken(t){return P.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this.Ir=new ut(rt.Tr),this.Er=new ut(rt.dr)}isEmpty(){return this.Ir.isEmpty()}addReference(t,e){const r=new rt(t,e);this.Ir=this.Ir.add(r),this.Er=this.Er.add(r)}Ar(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Rr(new rt(t,e))}Vr(t,e){t.forEach(r=>this.removeReference(r,e))}mr(t){const e=new O(new H([])),r=new rt(e,t),s=new rt(e,t+1),o=[];return this.Er.forEachInRange([r,s],u=>{this.Rr(u),o.push(u.key)}),o}gr(){this.Ir.forEach(t=>this.Rr(t))}Rr(t){this.Ir=this.Ir.delete(t),this.Er=this.Er.delete(t)}pr(t){const e=new O(new H([])),r=new rt(e,t),s=new rt(e,t+1);let o=q();return this.Er.forEachInRange([r,s],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new rt(t,0),r=this.Ir.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class rt{constructor(t,e){this.key=t,this.yr=e}static Tr(t,e){return O.comparator(t.key,e.key)||$(t.yr,e.yr)}static dr(t,e){return $(t.yr,e.yr)||O.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.wr=1,this.Sr=new ut(rt.Tr)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new nl(o,e,r,s);this.mutationQueue.push(u);for(const h of s)this.Sr=this.Sr.add(new rt(h.key,o)),this.indexManager.addToCollectionParentIndex(t,h.key.path.popLast());return P.resolve(u)}lookupMutationBatch(t,e){return P.resolve(this.br(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.Dr(r),o=s<0?0:s;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new rt(e,0),s=new rt(e,Number.POSITIVE_INFINITY),o=[];return this.Sr.forEachInRange([r,s],u=>{const h=this.br(u.yr);o.push(h)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new ut($);return e.forEach(s=>{const o=new rt(s,0),u=new rt(s,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([o,u],h=>{r=r.add(h.yr)})}),P.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;O.isDocumentKey(o)||(o=o.child(""));const u=new rt(new O(o),0);let h=new ut($);return this.Sr.forEachWhile(d=>{const f=d.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(h=h.add(d.yr)),!0)},u),P.resolve(this.Cr(h))}Cr(t){const e=[];return t.forEach(r=>{const s=this.br(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){et(this.vr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return P.forEach(e.mutations,s=>{const o=new rt(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Sr=r})}xn(t){}containsKey(t,e){const r=new rt(e,0),s=this.Sr.firstAfterOrEqual(r);return P.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}vr(t,e){return this.Dr(t)}Dr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}br(t){const e=this.Dr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(t){this.Fr=t,this.docs=function(){return new X(O.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,u=this.Fr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return P.resolve(r?r.document.mutableCopy():gt.newInvalidDocument(e))}getEntries(t,e){let r=jt();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():gt.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=jt();const u=e.path,h=new O(u.child("")),d=this.docs.getIteratorFrom(h);for(;d.hasNext();){const{key:f,value:{document:_}}=d.getNext();if(!u.isPrefixOf(f.path))break;f.path.length>u.length+1||Ih(Th(_),r)<=0||(s.has(_.key)||Yn(e,_))&&(o=o.insert(_.key,_.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(t,e,r,s){M()}Mr(t,e){return P.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new kl(this)}getSize(t){return P.resolve(this.size)}}class kl extends Rl{constructor(t){super(),this.ur=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.ur.addEntry(t,s)):this.ur.removeEntry(r)}),P.waitFor(e)}getFromCache(t,e){return this.ur.getEntry(t,e)}getAllFromCache(t,e){return this.ur.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(t){this.persistence=t,this.Or=new we(e=>mi(e),gi),this.lastRemoteSnapshotVersion=x.min(),this.highestTargetId=0,this.Nr=0,this.Lr=new vi,this.targetCount=0,this.Br=ye.Ln()}forEachTarget(t,e){return this.Or.forEach((r,s)=>e(s)),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.Nr)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Nr&&(this.Nr=e),P.resolve()}Qn(t){this.Or.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Br=new ye(e),this.highestTargetId=e),t.sequenceNumber>this.Nr&&(this.Nr=t.sequenceNumber)}addTargetData(t,e){return this.Qn(e),this.targetCount+=1,P.resolve()}updateTargetData(t,e){return this.Qn(e),P.resolve()}removeTargetData(t,e){return this.Or.delete(e.target),this.Lr.mr(e.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Or.forEach((u,h)=>{h.sequenceNumber<=e&&r.get(h.targetId)===null&&(this.Or.delete(u),o.push(this.removeMatchingKeysForTargetId(t,h.targetId)),s++)}),P.waitFor(o).next(()=>s)}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,e){const r=this.Or.get(e)||null;return P.resolve(r)}addMatchingKeys(t,e,r){return this.Lr.Ar(e,r),P.resolve()}removeMatchingKeys(t,e,r){this.Lr.Vr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(u=>{o.push(s.markPotentiallyOrphaned(t,u))}),P.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Lr.mr(e),P.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Lr.pr(e);return P.resolve(r)}containsKey(t,e){return P.resolve(this.Lr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(t,e){this.kr={},this.overlays={},this.qr=new li(0),this.Qr=!1,this.Qr=!0,this.Kr=new bl,this.referenceDelegate=t(this),this.$r=new Ol(this),this.indexManager=new Al,this.remoteDocumentCache=function(s){return new Nl(s)}(r=>this.referenceDelegate.Ur(r)),this.serializer=new Tl(e),this.Wr=new Cl(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Vl,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.kr[t.toKey()];return r||(r=new Dl(e,this.referenceDelegate),this.kr[t.toKey()]=r),r}getGlobalsCache(){return this.Kr}getTargetCache(){return this.$r}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Wr}runTransaction(t,e,r){D("MemoryPersistence","Starting transaction:",t);const s=new Ml(this.qr.next());return this.referenceDelegate.Gr(),r(s).next(o=>this.referenceDelegate.zr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}jr(t,e){return P.or(Object.values(this.kr).map(r=>()=>r.containsKey(t,e)))}}class Ml extends wh{constructor(t){super(),this.currentSequenceNumber=t}}class Ti{constructor(t){this.persistence=t,this.Hr=new vi,this.Jr=null}static Yr(t){return new Ti(t)}get Zr(){if(this.Jr)return this.Jr;throw M()}addReference(t,e,r){return this.Hr.addReference(r,e),this.Zr.delete(r.toString()),P.resolve()}removeReference(t,e,r){return this.Hr.removeReference(r,e),this.Zr.add(r.toString()),P.resolve()}markPotentiallyOrphaned(t,e){return this.Zr.add(e.toString()),P.resolve()}removeTarget(t,e){this.Hr.mr(e.targetId).forEach(s=>this.Zr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Zr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Gr(){this.Jr=new Set}zr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Zr,r=>{const s=O.fromPath(r);return this.Xr(t,s).next(o=>{o||e.removeEntry(s,x.min())})}).next(()=>(this.Jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Xr(t,e).next(r=>{r?this.Zr.delete(e.toString()):this.Zr.add(e.toString())})}Ur(t){return 0}Xr(t,e){return P.or([()=>P.resolve(this.Hr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.jr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Ki=r,this.$i=s}static Ui(t,e){let r=q(),s=q();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Ii(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(){this.Wi=!1,this.Gi=!1,this.zi=100,this.ji=function(){return Wu()?8:Rh(Ku())>0?6:4}()}initialize(t,e){this.Hi=t,this.indexManager=e,this.Wi=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.Ji(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.Yi(t,e,s,r).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new Ll;return this.Zi(t,e,u).next(h=>{if(o.result=h,this.Gi)return this.Xi(t,e,u,h.size)})}).next(()=>o.result)}Xi(t,e,r,s){return r.documentReadCount<this.zi?(ze()<=B.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",ae(e),"since it only creates cache indexes for collection contains","more than or equal to",this.zi,"documents"),P.resolve()):(ze()<=B.DEBUG&&D("QueryEngine","Query:",ae(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ji*s?(ze()<=B.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",ae(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,wt(e))):P.resolve())}Ji(t,e){if(oo(e))return P.resolve(null);let r=wt(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Gn(e,null,"F"),r=wt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const u=q(...o);return this.Hi.getDocuments(t,u).next(h=>this.indexManager.getMinOffset(t,r).next(d=>{const f=this.es(e,h);return this.ts(e,f,u,d.readTime)?this.Ji(t,Gn(e,null,"F")):this.ns(t,f,e,d)}))})))}Yi(t,e,r,s){return oo(e)||s.isEqual(x.min())?P.resolve(null):this.Hi.getDocuments(t,r).next(o=>{const u=this.es(e,o);return this.ts(e,u,r,s)?P.resolve(null):(ze()<=B.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ae(e)),this.ns(t,u,e,vh(s,-1)).next(h=>h))})}es(t,e){let r=new ut(ha(t));return e.forEach((s,o)=>{Yn(t,o)&&(r=r.add(o))}),r}ts(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Zi(t,e,r){return ze()<=B.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",ae(e)),this.Hi.getDocumentsMatchingQuery(t,e,Bt.min(),r)}ns(t,e,r,s){return this.Hi.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(t,e,r,s){this.persistence=t,this.rs=e,this.serializer=s,this.ss=new X($),this.os=new we(o=>mi(o),gi),this._s=new Map,this.us=t.getRemoteDocumentCache(),this.$r=t.getTargetCache(),this.Wr=t.getBundleCache(),this.cs(r)}cs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Sl(this.us,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.us.setIndexManager(this.indexManager),this.rs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ss))}}function Bl(n,t,e,r){return new Ul(n,t,e,r)}async function Da(n,t){const e=U(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.cs(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const u=[],h=[];let d=q();for(const f of s){u.push(f.batchId);for(const _ of f.mutations)d=d.add(_.key)}for(const f of o){h.push(f.batchId);for(const _ of f.mutations)d=d.add(_.key)}return e.localDocuments.getDocuments(r,d).next(f=>({ls:f,removedBatchIds:u,addedBatchIds:h}))})})}function Na(n){const t=U(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.$r.getLastRemoteSnapshotVersion(e))}function ql(n,t){const e=U(n),r=t.snapshotVersion;let s=e.ss;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=e.us.newChangeBuffer({trackRemovals:!0});s=e.ss;const h=[];t.targetChanges.forEach((_,w)=>{const R=s.get(w);if(!R)return;h.push(e.$r.removeMatchingKeys(o,_.removedDocuments,w).next(()=>e.$r.addMatchingKeys(o,_.addedDocuments,w)));let V=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(w)!==null?V=V.withResumeToken(ct.EMPTY_BYTE_STRING,x.min()).withLastLimboFreeSnapshotVersion(x.min()):_.resumeToken.approximateByteSize()>0&&(V=V.withResumeToken(_.resumeToken,r)),s=s.insert(w,V),function(L,N,Y){return L.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=3e8?!0:Y.addedDocuments.size+Y.modifiedDocuments.size+Y.removedDocuments.size>0}(R,V,_)&&h.push(e.$r.updateTargetData(o,V))});let d=jt(),f=q();if(t.documentUpdates.forEach(_=>{t.resolvedLimboDocuments.has(_)&&h.push(e.persistence.referenceDelegate.updateLimboDocument(o,_))}),h.push(jl(o,u,t.documentUpdates).next(_=>{d=_.hs,f=_.Ps})),!r.isEqual(x.min())){const _=e.$r.getLastRemoteSnapshotVersion(o).next(w=>e.$r.setTargetsMetadata(o,o.currentSequenceNumber,r));h.push(_)}return P.waitFor(h).next(()=>u.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,d,f)).next(()=>d)}).then(o=>(e.ss=s,o))}function jl(n,t,e){let r=q(),s=q();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let u=jt();return e.forEach((h,d)=>{const f=o.get(h);d.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(h)),d.isNoDocument()&&d.version.isEqual(x.min())?(t.removeEntry(h,d.readTime),u=u.insert(h,d)):!f.isValidDocument()||d.version.compareTo(f.version)>0||d.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(d),u=u.insert(h,d)):D("LocalStore","Ignoring outdated watch update for ",h,". Current version:",f.version," Watch version:",d.version)}),{hs:u,Ps:s}})}function $l(n,t){const e=U(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.$r.getTargetData(r,t).next(o=>o?(s=o,P.resolve(s)):e.$r.allocateTargetId(r).next(u=>(s=new Lt(t,u,"TargetPurposeListen",r.currentSequenceNumber),e.$r.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.ss.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.ss=e.ss.insert(r.targetId,r),e.os.set(t,r.targetId)),r})}async function ei(n,t,e){const r=U(n),s=r.ss.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,u=>r.persistence.referenceDelegate.removeTarget(u,s))}catch(u){if(!on(u))throw u;D("LocalStore",`Failed to update sequence numbers for target ${t}: ${u}`)}r.ss=r.ss.remove(t),r.os.delete(s.target)}function yo(n,t,e){const r=U(n);let s=x.min(),o=q();return r.persistence.runTransaction("Execute query","readwrite",u=>function(d,f,_){const w=U(d),R=w.os.get(_);return R!==void 0?P.resolve(w.ss.get(R)):w.$r.getTargetData(f,_)}(r,u,wt(t)).next(h=>{if(h)return s=h.lastLimboFreeSnapshotVersion,r.$r.getMatchingKeysForTargetId(u,h.targetId).next(d=>{o=d})}).next(()=>r.rs.getDocumentsMatchingQuery(u,t,e?s:x.min(),e?o:q())).next(h=>(zl(r,jh(t),h),{documents:h,Is:o})))}function zl(n,t,e){let r=n._s.get(t)||x.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n._s.set(t,r)}class Eo{constructor(){this.activeTargetIds=Qh()}Vs(t){this.activeTargetIds=this.activeTargetIds.add(t)}fs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Rs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Gl{constructor(){this.io=new Eo,this.so={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.io.Vs(t),this.so[t]||"not-current"}updateQueryState(t,e,r){this.so[t]=e}removeLocalQueryTarget(t){this.io.fs(t)}isLocalQueryTarget(t){return this.io.activeTargetIds.has(t)}clearQueryState(t){delete this.so[t]}getAllActiveQueryTargets(){return this.io.activeTargetIds}isActiveQueryTarget(t){return this.io.activeTargetIds.has(t)}start(){return this.io=new Eo,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{oo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(){this._o=()=>this.ao(),this.uo=()=>this.co(),this.lo=[],this.ho()}oo(t){this.lo.push(t)}shutdown(){window.removeEventListener("online",this._o),window.removeEventListener("offline",this.uo)}ho(){window.addEventListener("online",this._o),window.addEventListener("offline",this.uo)}ao(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.lo)t(0)}co(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.lo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kn=null;function xr(){return kn===null?kn=function(){return 268435456+Math.round(2147483648*Math.random())}():kn++,"0x"+kn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(t){this.Po=t.Po,this.Io=t.Io}To(t){this.Eo=t}Ao(t){this.Ro=t}Vo(t){this.mo=t}onMessage(t){this.fo=t}close(){this.Io()}send(t){this.Po(t)}po(){this.Eo()}yo(){this.Ro()}wo(t){this.mo(t)}So(t){this.fo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection";class Wl extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.bo=r+"://"+e.host,this.Do=`projects/${s}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get vo(){return!1}Fo(e,r,s,o,u){const h=xr(),d=this.Mo(e,r.toUriEncodedString());D("RestConnection",`Sending RPC '${e}' ${h}:`,d,s);const f={"google-cloud-resource-prefix":this.Do,"x-goog-request-params":this.Co};return this.xo(f,o,u),this.Oo(e,d,f,s).then(_=>(D("RestConnection",`Received RPC '${e}' ${h}: `,_),_),_=>{throw pe("RestConnection",`RPC '${e}' ${h} failed with error: `,_,"url: ",d,"request:",s),_})}No(e,r,s,o,u,h){return this.Fo(e,r,s,o,u)}xo(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ie}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}Mo(e,r){const s=Kl[e];return`${this.bo}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Oo(t,e,r,s){const o=xr();return new Promise((u,h)=>{const d=new Ho;d.setWithCredentials(!0),d.listenOnce(Qo.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case xn.NO_ERROR:const _=d.getResponseJson();D(pt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(_)),u(_);break;case xn.TIMEOUT:D(pt,`RPC '${t}' ${o} timed out`),h(new b(S.DEADLINE_EXCEEDED,"Request time out"));break;case xn.HTTP_ERROR:const w=d.getStatus();if(D(pt,`RPC '${t}' ${o} failed with status:`,w,"response text:",d.getResponseText()),w>0){let R=d.getResponseJson();Array.isArray(R)&&(R=R[0]);const V=R==null?void 0:R.error;if(V&&V.status&&V.message){const k=function(N){const Y=N.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(Y)>=0?Y:S.UNKNOWN}(V.status);h(new b(k,V.message))}else h(new b(S.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new b(S.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{D(pt,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(s);D(pt,`RPC '${t}' ${o} sending request:`,s),d.send(e,"POST",f,r,15)})}Lo(t,e,r){const s=xr(),o=[this.bo,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=Xo(),h=Yo(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(d.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(d.xmlHttpFactory=new Ko({})),this.xo(d.initMessageHeaders,e,r),d.encodeInitMessageHeaders=!0;const _=o.join("");D(pt,`Creating RPC '${t}' stream ${s}: ${_}`,d);const w=u.createWebChannel(_,d);let R=!1,V=!1;const k=new Ql({Po:N=>{V?D(pt,`Not sending because RPC '${t}' stream ${s} is closed:`,N):(R||(D(pt,`Opening RPC '${t}' stream ${s} transport.`),w.open(),R=!0),D(pt,`RPC '${t}' stream ${s} sending:`,N),w.send(N))},Io:()=>w.close()}),L=(N,Y,K)=>{N.listen(Y,Q=>{try{K(Q)}catch(nt){setTimeout(()=>{throw nt},0)}})};return L(w,Ge.EventType.OPEN,()=>{V||(D(pt,`RPC '${t}' stream ${s} transport opened.`),k.po())}),L(w,Ge.EventType.CLOSE,()=>{V||(V=!0,D(pt,`RPC '${t}' stream ${s} transport closed`),k.wo())}),L(w,Ge.EventType.ERROR,N=>{V||(V=!0,pe(pt,`RPC '${t}' stream ${s} transport errored:`,N),k.wo(new b(S.UNAVAILABLE,"The operation could not be completed")))}),L(w,Ge.EventType.MESSAGE,N=>{var Y;if(!V){const K=N.data[0];et(!!K);const Q=K,nt=Q.error||((Y=Q[0])===null||Y===void 0?void 0:Y.error);if(nt){D(pt,`RPC '${t}' stream ${s} received error:`,nt);const Pt=nt.status;let st=function(g){const y=J[g];if(y!==void 0)return va(y)}(Pt),v=nt.message;st===void 0&&(st=S.INTERNAL,v="Unknown error status: "+Pt+" with message "+nt.message),V=!0,k.wo(new b(st,v)),w.close()}else D(pt,`RPC '${t}' stream ${s} received:`,K),k.So(K)}}),L(h,Wo.STAT_EVENT,N=>{N.stat===zr.PROXY?D(pt,`RPC '${t}' stream ${s} detected buffering proxy`):N.stat===zr.NOPROXY&&D(pt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.yo()},0),k}}function Mr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(n){return new ll(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(t,e,r=1e3,s=1.5,o=6e4){this.ai=t,this.timerId=e,this.Bo=r,this.ko=s,this.qo=o,this.Qo=0,this.Ko=null,this.$o=Date.now(),this.reset()}reset(){this.Qo=0}Uo(){this.Qo=this.qo}Wo(t){this.cancel();const e=Math.floor(this.Qo+this.Go()),r=Math.max(0,Date.now()-this.$o),s=Math.max(0,e-r);s>0&&D("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Qo} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.Ko=this.ai.enqueueAfterDelay(this.timerId,s,()=>(this.$o=Date.now(),t())),this.Qo*=this.ko,this.Qo<this.Bo&&(this.Qo=this.Bo),this.Qo>this.qo&&(this.Qo=this.qo)}zo(){this.Ko!==null&&(this.Ko.skipDelay(),this.Ko=null)}cancel(){this.Ko!==null&&(this.Ko.cancel(),this.Ko=null)}Go(){return(Math.random()-.5)*this.Qo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(t,e,r,s,o,u,h,d){this.ai=t,this.jo=r,this.Ho=s,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=h,this.listener=d,this.state=0,this.Jo=0,this.Yo=null,this.Zo=null,this.stream=null,this.Xo=0,this.e_=new ka(t,e)}t_(){return this.state===1||this.state===5||this.n_()}n_(){return this.state===2||this.state===3}start(){this.Xo=0,this.state!==4?this.auth():this.r_()}async stop(){this.t_()&&await this.close(0)}i_(){this.state=0,this.e_.reset()}s_(){this.n_()&&this.Yo===null&&(this.Yo=this.ai.enqueueAfterDelay(this.jo,6e4,()=>this.o_()))}__(t){this.a_(),this.stream.send(t)}async o_(){if(this.n_())return this.close(0)}a_(){this.Yo&&(this.Yo.cancel(),this.Yo=null)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}async close(t,e){this.a_(),this.u_(),this.e_.cancel(),this.Jo++,t!==4?this.e_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(bt(e.toString()),bt("Using maximum backoff delay to prevent overloading the backend."),this.e_.Uo()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.c_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Vo(e)}c_(){}auth(){this.state=1;const t=this.l_(this.Jo),e=this.Jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Jo===e&&this.h_(r,s)},r=>{t(()=>{const s=new b(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.P_(s)})})}h_(t,e){const r=this.l_(this.Jo);this.stream=this.I_(t,e),this.stream.To(()=>{r(()=>this.listener.To())}),this.stream.Ao(()=>{r(()=>(this.state=2,this.Zo=this.ai.enqueueAfterDelay(this.Ho,1e4,()=>(this.n_()&&(this.state=3),Promise.resolve())),this.listener.Ao()))}),this.stream.Vo(s=>{r(()=>this.P_(s))}),this.stream.onMessage(s=>{r(()=>++this.Xo==1?this.T_(s):this.onNext(s))})}r_(){this.state=5,this.e_.Wo(async()=>{this.state=0,this.start()})}P_(t){return D("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}l_(t){return e=>{this.ai.enqueueAndForget(()=>this.Jo===t?e():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Xl extends Yl{constructor(t,e,r,s,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,u),this.serializer=o}I_(t,e){return this.connection.Lo("Listen",t,e)}T_(t){return this.onNext(t)}onNext(t){this.e_.reset();const e=fl(this.serializer,t),r=function(o){if(!("targetChange"in o))return x.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?x.min():u.readTime?le(u.readTime):x.min()}(t);return this.listener.E_(e,r)}d_(t){const e={};e.database=_o(this.serializer),e.addTarget=function(o,u){let h;const d=u.target;if(h=Qr(d)?{documents:pl(o,d)}:{query:ml(o,d)._t},h.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){h.resumeToken=Aa(o,u.resumeToken);const f=Jr(o,u.expectedCount);f!==null&&(h.expectedCount=f)}else if(u.snapshotVersion.compareTo(x.min())>0){h.readTime=Zr(o,u.snapshotVersion.toTimestamp());const f=Jr(o,u.expectedCount);f!==null&&(h.expectedCount=f)}return h}(this.serializer,t);const r=_l(this.serializer,t);r&&(e.labels=r),this.__(e)}A_(t){const e={};e.database=_o(this.serializer),e.removeTarget=t,this.__(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.p_=!1}y_(){if(this.p_)throw new b(S.FAILED_PRECONDITION,"The client has already been terminated.")}Fo(t,e,r,s){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Fo(t,ti(e,r),s,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new b(S.UNKNOWN,o.toString())})}No(t,e,r,s,o){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.No(t,ti(e,r),s,u,h,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new b(S.UNKNOWN,u.toString())})}terminate(){this.p_=!0,this.connection.terminate()}}class Zl{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.w_=0,this.S_=null,this.b_=!0}D_(){this.w_===0&&(this.C_("Unknown"),this.S_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.S_=null,this.v_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}F_(t){this.state==="Online"?this.C_("Unknown"):(this.w_++,this.w_>=1&&(this.M_(),this.v_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.M_(),this.w_=0,t==="Online"&&(this.b_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}v_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.b_?(bt(e),this.b_=!1):D("OnlineStateTracker",e)}M_(){this.S_!==null&&(this.S_.cancel(),this.S_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.x_=[],this.O_=new Map,this.N_=new Set,this.L_=[],this.B_=o,this.B_.oo(u=>{r.enqueueAndForget(async()=>{hn(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(d){const f=U(d);f.N_.add(4),await cn(f),f.k_.set("Unknown"),f.N_.delete(4),await er(f)}(this))})}),this.k_=new Zl(r,s)}}async function er(n){if(hn(n))for(const t of n.L_)await t(!0)}async function cn(n){for(const t of n.L_)await t(!1)}function Oa(n,t){const e=U(n);e.O_.has(t.targetId)||(e.O_.set(t.targetId,t),Pi(e)?Ri(e):Re(e).n_()&&wi(e,t))}function Ai(n,t){const e=U(n),r=Re(e);e.O_.delete(t),r.n_()&&xa(e,t),e.O_.size===0&&(r.n_()?r.s_():hn(e)&&e.k_.set("Unknown"))}function wi(n,t){if(n.q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(x.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Re(n).d_(t)}function xa(n,t){n.q_.xe(t),Re(n).A_(t)}function Ri(n){n.q_=new al({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.O_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),Re(n).start(),n.k_.D_()}function Pi(n){return hn(n)&&!Re(n).t_()&&n.O_.size>0}function hn(n){return U(n).N_.size===0}function Ma(n){n.q_=void 0}async function ed(n){n.k_.set("Online")}async function nd(n){n.O_.forEach((t,e)=>{wi(n,t)})}async function rd(n,t){Ma(n),Pi(n)?(n.k_.F_(t),Ri(n)):n.k_.set("Unknown")}async function id(n,t,e){if(n.k_.set("Online"),t instanceof Ia&&t.state===2&&t.cause)try{await async function(s,o){const u=o.cause;for(const h of o.targetIds)s.O_.has(h)&&(await s.remoteSyncer.rejectListen(h,u),s.O_.delete(h),s.q_.removeTarget(h))}(n,t)}catch(r){D("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await To(n,r)}else if(t instanceof Ln?n.q_.Ke(t):t instanceof Ta?n.q_.He(t):n.q_.We(t),!e.isEqual(x.min()))try{const r=await Na(n.localStore);e.compareTo(r)>=0&&await function(o,u){const h=o.q_.rt(u);return h.targetChanges.forEach((d,f)=>{if(d.resumeToken.approximateByteSize()>0){const _=o.O_.get(f);_&&o.O_.set(f,_.withResumeToken(d.resumeToken,u))}}),h.targetMismatches.forEach((d,f)=>{const _=o.O_.get(d);if(!_)return;o.O_.set(d,_.withResumeToken(ct.EMPTY_BYTE_STRING,_.snapshotVersion)),xa(o,d);const w=new Lt(_.target,d,f,_.sequenceNumber);wi(o,w)}),o.remoteSyncer.applyRemoteEvent(h)}(n,e)}catch(r){D("RemoteStore","Failed to raise snapshot:",r),await To(n,r)}}async function To(n,t,e){if(!on(t))throw t;n.N_.add(1),await cn(n),n.k_.set("Offline"),e||(e=()=>Na(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await e(),n.N_.delete(1),await er(n)})}async function Io(n,t){const e=U(n);e.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const r=hn(e);e.N_.add(3),await cn(e),r&&e.k_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.N_.delete(3),await er(e)}async function sd(n,t){const e=U(n);t?(e.N_.delete(2),await er(e)):t||(e.N_.add(2),await cn(e),e.k_.set("Unknown"))}function Re(n){return n.Q_||(n.Q_=function(e,r,s){const o=U(e);return o.y_(),new Xl(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{To:ed.bind(null,n),Ao:nd.bind(null,n),Vo:rd.bind(null,n),E_:id.bind(null,n)}),n.L_.push(async t=>{t?(n.Q_.i_(),Pi(n)?Ri(n):n.k_.set("Unknown")):(await n.Q_.stop(),Ma(n))})),n.Q_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Xt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const u=Date.now()+r,h=new Si(t,e,u,s,o);return h.start(r),h}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new b(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function La(n,t){if(bt("AsyncQueue",`${t}: ${n}`),on(n))return new b(S.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(t){this.comparator=t?(e,r)=>t(e,r)||O.comparator(e.key,r.key):(e,r)=>O.comparator(e.key,r.key),this.keyedMap=He(),this.sortedSet=new X(this.comparator)}static emptySet(t){return new de(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof de)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new de;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(){this.U_=new X(O.comparator)}track(t){const e=t.doc.key,r=this.U_.get(e);r?t.type!==0&&r.type===3?this.U_=this.U_.insert(e,t):t.type===3&&r.type!==1?this.U_=this.U_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.U_=this.U_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.U_=this.U_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.U_=this.U_.remove(e):t.type===1&&r.type===2?this.U_=this.U_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.U_=this.U_.insert(e,{type:2,doc:t.doc}):M():this.U_=this.U_.insert(e,t)}W_(){const t=[];return this.U_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Ee{constructor(t,e,r,s,o,u,h,d,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=h,this.excludesMetadataChanges=d,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,s,o){const u=[];return e.forEach(h=>{u.push({type:0,doc:h})}),new Ee(t,e,de.emptySet(e),u,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Wn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(){this.G_=void 0,this.z_=[]}j_(){return this.z_.some(t=>t.H_())}}class ad{constructor(){this.queries=wo(),this.onlineState="Unknown",this.J_=new Set}terminate(){(function(e,r){const s=U(e),o=s.queries;s.queries=wo(),o.forEach((u,h)=>{for(const d of h.z_)d.onError(r)})})(this,new b(S.ABORTED,"Firestore shutting down"))}}function wo(){return new we(n=>ca(n),Wn)}async function ud(n,t){const e=U(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.j_()&&t.H_()&&(r=2):(o=new od,r=t.H_()?0:1);try{switch(r){case 0:o.G_=await e.onListen(s,!0);break;case 1:o.G_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(u){const h=La(u,`Initialization of query '${ae(t.query)}' failed`);return void t.onError(h)}e.queries.set(s,o),o.z_.push(t),t.Y_(e.onlineState),o.G_&&t.Z_(o.G_)&&Ci(e)}async function cd(n,t){const e=U(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const u=o.z_.indexOf(t);u>=0&&(o.z_.splice(u,1),o.z_.length===0?s=t.H_()?0:1:!o.j_()&&t.H_()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function hd(n,t){const e=U(n);let r=!1;for(const s of t){const o=s.query,u=e.queries.get(o);if(u){for(const h of u.z_)h.Z_(s)&&(r=!0);u.G_=s}}r&&Ci(e)}function ld(n,t,e){const r=U(n),s=r.queries.get(t);if(s)for(const o of s.z_)o.onError(e);r.queries.delete(t)}function Ci(n){n.J_.forEach(t=>{t.next()})}var ni,Ro;(Ro=ni||(ni={})).X_="default",Ro.Cache="cache";class dd{constructor(t,e,r){this.query=t,this.ea=e,this.ta=!1,this.na=null,this.onlineState="Unknown",this.options=r||{}}Z_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Ee(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ta?this.ra(t)&&(this.ea.next(t),e=!0):this.ia(t,this.onlineState)&&(this.sa(t),e=!0),this.na=t,e}onError(t){this.ea.error(t)}Y_(t){this.onlineState=t;let e=!1;return this.na&&!this.ta&&this.ia(this.na,t)&&(this.sa(this.na),e=!0),e}ia(t,e){if(!t.fromCache||!this.H_())return!0;const r=e!=="Offline";return(!this.options.oa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ra(t){if(t.docChanges.length>0)return!0;const e=this.na&&this.na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}sa(t){t=Ee.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ta=!0,this.ea.next(t)}H_(){return this.options.source!==ni.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(t){this.key=t}}class Ua{constructor(t){this.key=t}}class fd{constructor(t,e){this.query=t,this.Ia=e,this.Ta=null,this.hasCachedResults=!1,this.current=!1,this.Ea=q(),this.mutatedKeys=q(),this.da=ha(t),this.Aa=new de(this.da)}get Ra(){return this.Ia}Va(t,e){const r=e?e.ma:new Ao,s=e?e.Aa:this.Aa;let o=e?e.mutatedKeys:this.mutatedKeys,u=s,h=!1;const d=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((_,w)=>{const R=s.get(_),V=Yn(this.query,w)?w:null,k=!!R&&this.mutatedKeys.has(R.key),L=!!V&&(V.hasLocalMutations||this.mutatedKeys.has(V.key)&&V.hasCommittedMutations);let N=!1;R&&V?R.data.isEqual(V.data)?k!==L&&(r.track({type:3,doc:V}),N=!0):this.fa(R,V)||(r.track({type:2,doc:V}),N=!0,(d&&this.da(V,d)>0||f&&this.da(V,f)<0)&&(h=!0)):!R&&V?(r.track({type:0,doc:V}),N=!0):R&&!V&&(r.track({type:1,doc:R}),N=!0,(d||f)&&(h=!0)),N&&(V?(u=u.add(V),o=L?o.add(_):o.delete(_)):(u=u.delete(_),o=o.delete(_)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const _=this.query.limitType==="F"?u.last():u.first();u=u.delete(_.key),o=o.delete(_.key),r.track({type:1,doc:_})}return{Aa:u,ma:r,ts:h,mutatedKeys:o}}fa(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.Aa;this.Aa=t.Aa,this.mutatedKeys=t.mutatedKeys;const u=t.ma.W_();u.sort((_,w)=>function(V,k){const L=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return L(V)-L(k)}(_.type,w.type)||this.da(_.doc,w.doc)),this.ga(r),s=s!=null&&s;const h=e&&!s?this.pa():[],d=this.Ea.size===0&&this.current&&!s?1:0,f=d!==this.Ta;return this.Ta=d,u.length!==0||f?{snapshot:new Ee(this.query,t.Aa,o,u,t.mutatedKeys,d===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),ya:h}:{ya:h}}Y_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Aa:this.Aa,ma:new Ao,mutatedKeys:this.mutatedKeys,ts:!1},!1)):{ya:[]}}wa(t){return!this.Ia.has(t)&&!!this.Aa.has(t)&&!this.Aa.get(t).hasLocalMutations}ga(t){t&&(t.addedDocuments.forEach(e=>this.Ia=this.Ia.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ia=this.Ia.delete(e)),this.current=t.current)}pa(){if(!this.current)return[];const t=this.Ea;this.Ea=q(),this.Aa.forEach(r=>{this.wa(r.key)&&(this.Ea=this.Ea.add(r.key))});const e=[];return t.forEach(r=>{this.Ea.has(r)||e.push(new Ua(r))}),this.Ea.forEach(r=>{t.has(r)||e.push(new Fa(r))}),e}Sa(t){this.Ia=t.Is,this.Ea=q();const e=this.Va(t.documents);return this.applyChanges(e,!0)}ba(){return Ee.fromInitialDocuments(this.query,this.Aa,this.mutatedKeys,this.Ta===0,this.hasCachedResults)}}class pd{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class md{constructor(t){this.key=t,this.Da=!1}}class gd{constructor(t,e,r,s,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.Ca={},this.va=new we(h=>ca(h),Wn),this.Fa=new Map,this.Ma=new Set,this.xa=new X(O.comparator),this.Oa=new Map,this.Na=new vi,this.La={},this.Ba=new Map,this.ka=ye.Bn(),this.onlineState="Unknown",this.qa=void 0}get isPrimaryClient(){return this.qa===!0}}async function _d(n,t,e=!0){const r=za(n);let s;const o=r.va.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.ba()):s=await Ba(r,t,e,!0),s}async function yd(n,t){const e=za(n);await Ba(e,t,!0,!1)}async function Ba(n,t,e,r){const s=await $l(n.localStore,wt(t)),o=s.targetId,u=e?n.sharedClientState.addLocalQueryTarget(o):"not-current";let h;return r&&(h=await Ed(n,t,o,u==="current",s.resumeToken)),n.isPrimaryClient&&e&&Oa(n.remoteStore,s),h}async function Ed(n,t,e,r,s){n.Qa=(w,R,V)=>async function(L,N,Y,K){let Q=N.view.Va(Y);Q.ts&&(Q=await yo(L.localStore,N.query,!1).then(({documents:v})=>N.view.Va(v,Q)));const nt=K&&K.targetChanges.get(N.targetId),Pt=K&&K.targetMismatches.get(N.targetId)!=null,st=N.view.applyChanges(Q,L.isPrimaryClient,nt,Pt);return So(L,N.targetId,st.ya),st.snapshot}(n,w,R,V);const o=await yo(n.localStore,t,!0),u=new fd(t,o.Is),h=u.Va(o.documents),d=un.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),f=u.applyChanges(h,n.isPrimaryClient,d);So(n,e,f.ya);const _=new pd(t,e,u);return n.va.set(t,_),n.Fa.has(e)?n.Fa.get(e).push(t):n.Fa.set(e,[t]),f.snapshot}async function vd(n,t,e){const r=U(n),s=r.va.get(t),o=r.Fa.get(s.targetId);if(o.length>1)return r.Fa.set(s.targetId,o.filter(u=>!Wn(u,t))),void r.va.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ei(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&Ai(r.remoteStore,s.targetId),ri(r,s.targetId)}).catch(hi)):(ri(r,s.targetId),await ei(r.localStore,s.targetId,!0))}async function Td(n,t){const e=U(n),r=e.va.get(t),s=e.Fa.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Ai(e.remoteStore,r.targetId))}async function qa(n,t){const e=U(n);try{const r=await ql(e.localStore,t);t.targetChanges.forEach((s,o)=>{const u=e.Oa.get(o);u&&(et(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?u.Da=!0:s.modifiedDocuments.size>0?et(u.Da):s.removedDocuments.size>0&&(et(u.Da),u.Da=!1))}),await $a(e,r,t)}catch(r){await hi(r)}}function Po(n,t,e){const r=U(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.va.forEach((o,u)=>{const h=u.view.Y_(t);h.snapshot&&s.push(h.snapshot)}),function(u,h){const d=U(u);d.onlineState=h;let f=!1;d.queries.forEach((_,w)=>{for(const R of w.z_)R.Y_(h)&&(f=!0)}),f&&Ci(d)}(r.eventManager,t),s.length&&r.Ca.E_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Id(n,t,e){const r=U(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Oa.get(t),o=s&&s.key;if(o){let u=new X(O.comparator);u=u.insert(o,gt.newNoDocument(o,x.min()));const h=q().add(o),d=new Zn(x.min(),new Map,new X($),u,h);await qa(r,d),r.xa=r.xa.remove(o),r.Oa.delete(t),Vi(r)}else await ei(r.localStore,t,!1).then(()=>ri(r,t,e)).catch(hi)}function ri(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Fa.get(t))n.va.delete(r),e&&n.Ca.Ka(r,e);n.Fa.delete(t),n.isPrimaryClient&&n.Na.mr(t).forEach(r=>{n.Na.containsKey(r)||ja(n,r)})}function ja(n,t){n.Ma.delete(t.path.canonicalString());const e=n.xa.get(t);e!==null&&(Ai(n.remoteStore,e),n.xa=n.xa.remove(t),n.Oa.delete(e),Vi(n))}function So(n,t,e){for(const r of e)r instanceof Fa?(n.Na.addReference(r.key,t),Ad(n,r)):r instanceof Ua?(D("SyncEngine","Document no longer in limbo: "+r.key),n.Na.removeReference(r.key,t),n.Na.containsKey(r.key)||ja(n,r.key)):M()}function Ad(n,t){const e=t.key,r=e.path.canonicalString();n.xa.get(e)||n.Ma.has(r)||(D("SyncEngine","New document in limbo: "+e),n.Ma.add(r),Vi(n))}function Vi(n){for(;n.Ma.size>0&&n.xa.size<n.maxConcurrentLimboResolutions;){const t=n.Ma.values().next().value;n.Ma.delete(t);const e=new O(H.fromString(t)),r=n.ka.next();n.Oa.set(r,new md(e)),n.xa=n.xa.insert(e,r),Oa(n.remoteStore,new Lt(wt(aa(e.path)),r,"TargetPurposeLimboResolution",li.oe))}}async function $a(n,t,e){const r=U(n),s=[],o=[],u=[];r.va.isEmpty()||(r.va.forEach((h,d)=>{u.push(r.Qa(d,t,e).then(f=>{var _;if((f||e)&&r.isPrimaryClient){const w=f?!f.fromCache:(_=e==null?void 0:e.targetChanges.get(d.targetId))===null||_===void 0?void 0:_.current;r.sharedClientState.updateQueryState(d.targetId,w?"current":"not-current")}if(f){s.push(f);const w=Ii.Ui(d.targetId,f);o.push(w)}}))}),await Promise.all(u),r.Ca.E_(s),await async function(d,f){const _=U(d);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>P.forEach(f,R=>P.forEach(R.Ki,V=>_.persistence.referenceDelegate.addReference(w,R.targetId,V)).next(()=>P.forEach(R.$i,V=>_.persistence.referenceDelegate.removeReference(w,R.targetId,V)))))}catch(w){if(!on(w))throw w;D("LocalStore","Failed to update sequence numbers: "+w)}for(const w of f){const R=w.targetId;if(!w.fromCache){const V=_.ss.get(R),k=V.snapshotVersion,L=V.withLastLimboFreeSnapshotVersion(k);_.ss=_.ss.insert(R,L)}}}(r.localStore,o))}async function wd(n,t){const e=U(n);if(!e.currentUser.isEqual(t)){D("SyncEngine","User change. New user:",t.toKey());const r=await Da(e.localStore,t);e.currentUser=t,function(o,u){o.Ba.forEach(h=>{h.forEach(d=>{d.reject(new b(S.CANCELLED,u))})}),o.Ba.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await $a(e,r.ls)}}function Rd(n,t){const e=U(n),r=e.Oa.get(t);if(r&&r.Da)return q().add(r.key);{let s=q();const o=e.Fa.get(t);if(!o)return s;for(const u of o){const h=e.va.get(u);s=s.unionWith(h.view.Ra)}return s}}function za(n){const t=U(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=qa.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Rd.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Id.bind(null,t),t.Ca.E_=hd.bind(null,t.eventManager),t.Ca.Ka=ld.bind(null,t.eventManager),t}class Co{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=tr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Bl(this.persistence,new Fl,t.initialUser,this.serializer)}createPersistence(t){return new xl(Ti.Yr,this.serializer)}createSharedClientState(t){return new Gl}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Pd{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Po(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=wd.bind(null,this.syncEngine),await sd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new ad}()}createDatastore(t){const e=tr(t.databaseInfo.databaseId),r=function(o){return new Wl(o)}(t.databaseInfo);return function(o,u,h,d){return new Jl(o,u,h,d)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,u,h){return new td(r,s,o,u,h)}(this.localStore,this.datastore,t.asyncQueue,e=>Po(this.syncEngine,e,0),function(){return vo.D()?new vo:new Hl}())}createSyncEngine(t,e){return function(s,o,u,h,d,f,_){const w=new gd(s,o,u,h,d,f);return _&&(w.qa=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=U(s);D("RemoteStore","RemoteStore shutting down."),o.N_.add(5),await cn(o),o.B_.shutdown(),o.k_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Wa(this.observer.next,t)}error(t){this.observer.error?this.Wa(this.observer.error,t):bt("Uncaught Error in snapshot listener:",t.toString())}Ga(){this.muted=!0}Wa(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(t,e,r,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=mt.UNAUTHENTICATED,this.clientId=yh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{D("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(D("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new b(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Xt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=La(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Lr(n,t){n.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Da(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Vo(n,t){n.asyncQueue.verifyOperationInProgress();const e=await bd(n);D("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Io(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Io(t.remoteStore,s)),n._onlineComponents=t}function Vd(n){return n.name==="FirebaseError"?n.code===S.FAILED_PRECONDITION||n.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function bd(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D("FirestoreClient","Using user provided OfflineComponentProvider");try{await Lr(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!Vd(e))throw e;pe("Error using user provided cache. Falling back to memory cache: "+e),await Lr(n,new Co)}}else D("FirestoreClient","Using default OfflineComponentProvider"),await Lr(n,new Co);return n._offlineComponents}async function Dd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D("FirestoreClient","Using user provided OnlineComponentProvider"),await Vo(n,n._uninitializedComponentsProvider._online)):(D("FirestoreClient","Using default OnlineComponentProvider"),await Vo(n,new Pd))),n._onlineComponents}async function Nd(n){const t=await Dd(n),e=t.eventManager;return e.onListen=_d.bind(null,t.syncEngine),e.onUnlisten=vd.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=yd.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Td.bind(null,t.syncEngine),e}function kd(n,t,e={}){const r=new Xt;return n.asyncQueue.enqueueAndForget(async()=>function(o,u,h,d,f){const _=new Sd({next:R=>{u.enqueueAndForget(()=>cd(o,w)),R.fromCache&&d.source==="server"?f.reject(new b(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(R)},error:R=>f.reject(R)}),w=new dd(h,_,{includeMetadataChanges:!0,oa:!0});return ud(o,w)}(await Nd(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(n,t,e){if(!e)throw new b(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function xd(n,t,e,r){if(t===!0&&r===!0)throw new b(S.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Do(n){if(O.isDocumentKey(n))throw new b(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function nr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":M()}function ii(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new b(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=nr(n);throw new b(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}function Md(n,t){if(t<=0)throw new b(S.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new b(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new b(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}xd("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ga((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new b(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new b(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new b(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class bi{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new No({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new b(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new b(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new No(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new hh;switch(r.type){case"firstParty":return new ph(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new b(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=bo.get(e);r&&(D("ComponentProvider","Removing Datastore"),bo.delete(e),r.terminate())}(this),Promise.resolve()}}function Ld(n,t,e,r={}){var s;const o=(n=ii(n,bi))._getSettings(),u=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==u&&pe("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:u,ssl:!1})),r.mockUserToken){let h,d;if(typeof r.mockUserToken=="string")h=r.mockUserToken,d=mt.MOCK_USER;else{h=Hu(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new b(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new mt(f)}n._authCredentials=new lh(new Jo(h,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new $t(this.firestore,t,this._query)}}class Dt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fe(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Dt(this.firestore,t,this._key)}}class fe extends $t{constructor(t,e,r){super(t,e,aa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Dt(this.firestore,null,new O(t))}withConverter(t){return new fe(this.firestore,t,this._path)}}function _f(n,t,...e){if(n=Bn(n),Od("collection","path",t),n instanceof bi){const r=H.fromString(t,...e);return Do(r),new fe(n,null,r)}{if(!(n instanceof Dt||n instanceof fe))throw new b(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(H.fromString(t,...e));return Do(r),new fe(n.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(){this._u=Promise.resolve(),this.au=[],this.uu=!1,this.cu=[],this.lu=null,this.hu=!1,this.Pu=!1,this.Iu=[],this.e_=new ka(this,"async_queue_retry"),this.Tu=()=>{const e=Mr();e&&D("AsyncQueue","Visibility state changed to "+e.visibilityState),this.e_.zo()};const t=Mr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Tu)}get isShuttingDown(){return this.uu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Eu(),this.du(t)}enterRestrictedMode(t){if(!this.uu){this.uu=!0,this.Pu=t||!1;const e=Mr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Tu)}}enqueue(t){if(this.Eu(),this.uu)return new Promise(()=>{});const e=new Xt;return this.du(()=>this.uu&&this.Pu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.au.push(t),this.Au()))}async Au(){if(this.au.length!==0){try{await this.au[0](),this.au.shift(),this.e_.reset()}catch(t){if(!on(t))throw t;D("AsyncQueue","Operation failed with retryable error: "+t)}this.au.length>0&&this.e_.Wo(()=>this.Au())}}du(t){const e=this._u.then(()=>(this.hu=!0,t().catch(r=>{this.lu=r,this.hu=!1;const s=function(u){let h=u.message||"";return u.stack&&(h=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),h}(r);throw bt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.hu=!1,r))));return this._u=e,e}enqueueAfterDelay(t,e,r){this.Eu(),this.Iu.indexOf(t)>-1&&(e=0);const s=Si.createAndSchedule(this,t,e,r,o=>this.Ru(o));return this.cu.push(s),s}Eu(){this.lu&&M()}verifyOperationInProgress(){}async Vu(){let t;do t=this._u,await t;while(t!==this._u)}mu(t){for(const e of this.cu)if(e.timerId===t)return!0;return!1}fu(t){return this.Vu().then(()=>{this.cu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.cu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Vu()})}gu(t){this.Iu.push(t)}Ru(t){const e=this.cu.indexOf(t);this.cu.splice(e,1)}}class Ha extends bi{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=function(){return new Fd}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ka(this),this._firestoreClient.terminate()}}function Ud(n,t){const e=typeof n=="object"?n:th(),r=typeof n=="string"?n:"(default)",s=Yc(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=zu("firestore");o&&Ld(s,...o)}return s}function Bd(n){return n._firestoreClient||Ka(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Ka(n){var t,e,r;const s=n._freezeSettings(),o=function(h,d,f,_){return new Ch(h,d,f,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,Ga(_.experimentalLongPollingOptions),_.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new Cd(n._authCredentials,n._appCheckCredentials,n._queue,o),!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ve(ct.fromBase64String(t))}catch(e){throw new b(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new ve(ct.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new b(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _t(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new b(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new b(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return $(this._lat,t._lat)||$(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd=/^__.*__$/;function Ya(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class Ni{constructor(t,e,r,s,o,u){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.pu(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get yu(){return this.settings.yu}wu(t){return new Ni(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Su(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.wu({path:r,bu:!1});return s.Du(t),s}Cu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.wu({path:r,bu:!1});return s.pu(),s}vu(t){return this.wu({path:void 0,bu:!0})}Fu(t){return si(t,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.xu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}pu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Du(this.path.get(t))}Du(t){if(t.length===0)throw this.Fu("Document fields must not be empty");if(Ya(this.yu)&&qd.test(t))throw this.Fu('Document fields cannot begin and end with "__"')}}class jd{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||tr(t)}Ou(t,e,r,s=!1){return new Ni({yu:t,methodName:e,xu:r,path:_t.emptyPath(),bu:!1,Mu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $d(n){const t=n._freezeSettings(),e=tr(n._databaseId);return new jd(n._databaseId,!!t.ignoreUndefinedProperties,e)}function zd(n,t,e,r=!1){return ki(e,n.Ou(r?4:3,t))}function ki(n,t){if(Xa(n=Bn(n)))return Hd("Unsupported field value:",t,n),Gd(n,t);if(n instanceof Wa)return function(r,s){if(!Ya(s.yu))throw s.Fu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Fu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.bu&&t.yu!==4)throw t.Fu("Nested arrays are not supported");return function(r,s){const o=[];let u=0;for(const h of r){let d=ki(h,s.vu(u));d==null&&(d={nullValue:"NULL_VALUE"}),o.push(d),u++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=Bn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Wh(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=it.fromDate(r);return{timestampValue:Zr(s.serializer,o)}}if(r instanceof it){const o=new it(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Zr(s.serializer,o)}}if(r instanceof Di)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ve)return{bytesValue:Aa(s.serializer,r._byteString)};if(r instanceof Dt){const o=s.databaseId,u=r.firestore._databaseId;if(!u.isEqual(o))throw s.Fu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:wa(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Fu(`Unsupported field value: ${nr(r)}`)}(n,t)}function Gd(n,t){const e={};return Zo(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):an(n,(r,s)=>{const o=ki(s,t.Su(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Xa(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof it||n instanceof Di||n instanceof ve||n instanceof Dt||n instanceof Wa)}function Hd(n,t,e){if(!Xa(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=nr(e);throw r==="an object"?t.Fu(n+" a custom object"):t.Fu(n+" "+r)}}const Kd=new RegExp("[~\\*/\\[\\]]");function Qd(n,t,e){if(t.search(Kd)>=0)throw si(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Qa(...t.split("."))._internalPath}catch{throw si(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function si(n,t,e,r,s){const o=r&&!r.isEmpty(),u=s!==void 0;let h=`Function ${t}() called with invalid data`;e&&(h+=" (via `toFirestore()`)"),h+=". ";let d="";return(o||u)&&(d+=" (found",o&&(d+=` in field ${r}`),u&&(d+=` in document ${s}`),d+=")"),new b(S.INVALID_ARGUMENT,h+n+d)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Wd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(rr("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Wd extends Ja{data(){return super.data()}}function rr(n,t){return typeof t=="string"?Qd(n,t):t instanceof Qa?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new b(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Oi{}class xi extends Oi{}function yf(n,t,...e){let r=[];t instanceof Oi&&r.push(t),r=r.concat(e),function(o){const u=o.filter(d=>d instanceof Mi).length,h=o.filter(d=>d instanceof ir).length;if(u>1||u>0&&h>0)throw new b(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class ir extends xi{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new ir(t,e,r)}_apply(t){const e=this._parse(t);return Za(t._query,e),new $t(t.firestore,t.converter,Wr(t._query,e))}_parse(t){const e=$d(t.firestore);return function(o,u,h,d,f,_,w){let R;if(f.isKeyField()){if(_==="array-contains"||_==="array-contains-any")throw new b(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${_}' queries on documentId().`);if(_==="in"||_==="not-in"){Oo(w,_);const V=[];for(const k of w)V.push(ko(d,o,k));R={arrayValue:{values:V}}}else R=ko(d,o,w)}else _!=="in"&&_!=="not-in"&&_!=="array-contains-any"||Oo(w,_),R=zd(h,u,w,_==="in"||_==="not-in");return tt.create(f,_,R)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Ef(n,t,e){const r=t,s=rr("where",n);return ir._create(s,r,e)}class Mi extends Oi{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Mi(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:It.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,o){let u=s;const h=o.getFlattenedFilters();for(const d of h)Za(u,d),u=Wr(u,d)}(t._query,e),new $t(t.firestore,t.converter,Wr(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Li extends xi{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Li(t,e)}_apply(t){const e=function(s,o,u){if(s.startAt!==null)throw new b(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new b(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new sn(o,u)}(t._query,this._field,this._direction);return new $t(t.firestore,t.converter,function(s,o){const u=s.explicitOrderBy.concat([o]);return new Ae(s.path,s.collectionGroup,u,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,e))}}function vf(n,t="asc"){const e=t,r=rr("orderBy",n);return Li._create(r,e)}class Fi extends xi{constructor(t,e,r){super(),this.type=t,this._limit=e,this._limitType=r}static _create(t,e,r){return new Fi(t,e,r)}_apply(t){return new $t(t.firestore,t.converter,Gn(t._query,this._limit,this._limitType))}}function Tf(n){return Md("limit",n),Fi._create("limit",n,"F")}function ko(n,t,e){if(typeof(e=Bn(e))=="string"){if(e==="")throw new b(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ua(t)&&e.indexOf("/")!==-1)throw new b(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(H.fromString(e));if(!O.isDocumentKey(r))throw new b(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return to(n,new O(r))}if(e instanceof Dt)return to(n,e._key);throw new b(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${nr(e)}.`)}function Oo(n,t){if(!Array.isArray(n)||n.length===0)throw new b(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Za(n,t){const e=function(s,o){for(const u of s)for(const h of u.getFlattenedFilters())if(o.indexOf(h.op)>=0)return h.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new b(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new b(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Xd{convertValue(t,e="none"){switch(ne(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Z(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ee(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw M()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return an(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertGeoPoint(t){return new Di(Z(t.latitude),Z(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=fi(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(en(t));default:return null}}convertTimestamp(t){const e=qt(t);return new it(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=H.fromString(t);et(ba(r));const s=new nn(r.get(1),r.get(3)),o=new O(r.popFirst(5));return s.isEqual(e)||bt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Jd extends Ja{constructor(t,e,r,s,o,u){super(t,e,r,s,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Fn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(rr("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Fn extends Jd{data(t={}){return super.data(t)}}class Zd{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new On(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Fn(this._firestore,this._userDataWriter,r.key,r,new On(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new b(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map(h=>{const d=new Fn(s._firestore,s._userDataWriter,h.doc.key,h.doc,new On(s._snapshot.mutatedKeys.has(h.doc.key),s._snapshot.fromCache),s.query.converter);return h.doc,{type:"added",doc:d,oldIndex:-1,newIndex:u++}})}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(h=>o||h.type!==3).map(h=>{const d=new Fn(s._firestore,s._userDataWriter,h.doc.key,h.doc,new On(s._snapshot.mutatedKeys.has(h.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,_=-1;return h.type!==0&&(f=u.indexOf(h.doc.key),u=u.delete(h.doc.key)),h.type!==1&&(u=u.add(h.doc),_=u.indexOf(h.doc.key)),{type:tf(h.type),doc:d,oldIndex:f,newIndex:_}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function tf(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}class ef extends Xd{constructor(t){super(),this.firestore=t}convertBytes(t){return new ve(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Dt(this.firestore,null,e)}}function If(n){n=ii(n,$t);const t=ii(n.firestore,Ha),e=Bd(t),r=new ef(t);return Yd(n._query),kd(e,n._query).then(s=>new Zd(t,r,n,s))}(function(t,e=!0){(function(s){Ie=s})(Zc),jn(new Je("firestore",(r,{instanceIdentifier:s,options:o})=>{const u=r.getProvider("app").getImmediate(),h=new Ha(new dh(r.getProvider("auth-internal")),new gh(r.getProvider("app-check-internal")),function(f,_){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new b(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new nn(f.options.projectId,_)}(u,s),u);return o=Object.assign({useFetchStreams:e},o),h._setSettings(o),h},"PUBLIC").setMultipleInstances(!0)),he(Ys,"4.6.5",t),he(Ys,"4.6.5","esm2017")})();var nf="firebase",rf="10.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */he(nf,rf,"app");const sf={apiKey:"AIzaSyCsntjv0VDHAZIiFmM7w6pHk30VdhhDXbk",authDomain:"fir-alta-aef46.firebaseapp.com",databaseURL:"https://fir-alta-aef46-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"fir-alta-aef46",storageBucket:"fir-alta-aef46.appspot.com",messagingSenderId:"168424330625",appId:"1:168424330625:web:7277ca3badd914f1d48480",measurementId:"G-9DVZR502DP"},of=jo(sf),Af=Ud(of);export{lf as a,df as b,_f as c,Af as d,uf as f,If as g,Tf as l,vf as o,yf as q,cf as s,hf as t,ff as u,Ef as w};
