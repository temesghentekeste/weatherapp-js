(()=>{var n={238:n=>{n.exports={weatherAPIKey:"f4ee7dee04a4c7637f42dc36dd60112d"}}},e={};function t(s){if(e[s])return e[s].exports;var a=e[s]={exports:{}};return n[s](a,a.exports,t),a.exports}(()=>{"use strict";var n=t(238);const e=n=>+`${Math.round(`${n}e+2`)}e-2`,s=(n,t,s,a)=>{n=parseFloat(n),t=parseFloat(t),s=parseFloat(s);let i={};return"F"===a?(n=9*n/5+32,t=9*t/5+32,s=9*s/5+32):(n=5*(n-32)/9,t=5*(t-32)/9,s=5*(s-32)/9),i={temp:n=e(n),min:t=e(t),max:s=e(s)},i},a=(n,e,t,s)=>{const a=document.querySelector(".min-max");document.querySelector(".temperature").innerHTML=`\n        <span>${n}</span>\n        <span>&deg;F</span>\n        `,a.innerHTML=`\n    <div className="min-max">\n      Min: <span class="min">${e}</span>\n      <span>&deg;${s}</span>\n      Max: <span class="max">${t}</span>\n      <span>&deg;${s}</span>\n    </div>\n  `},i=(n,e,t)=>{const i=document.querySelector(".details"),c=document.querySelector(".card"),r=document.querySelector(".icon img"),o=document.querySelector("img.weather-condition"),{main:d,weather:p}=n,{humidity:l,pressure:m,temp:u,temp_min:h,temp_max:x}=d;console.log(n,d,p,p[0].main);let y=p[0].icon;y=y.includes("d")?"day":"night";const v=`\n      <h5 class="my-3">\n      \x3c!-- City Name --\x3e\n        ${e}, ${t}\n      </h5>\n      <div class="my-3">\n        \x3c!-- Weather Conditions --\x3e\n        ${p[0].description}\n      </div>\n      <div class="display-4 my-4 temperature">\n        <span>${u}</span>\n        <span>&deg;C</span>\n      </div>\n      <div class="card-footer d-flex justify-content-around align-items-center">\n        <div class="min-max">\n           Min: <span class="min">${h}</span>\n          <span>&deg;C</span>\n           Max: <span class="max">${x}</span>\n          <span>&deg;C</span>\n        </div>\n        <div class="pressure">\n          <span>Humidity: ${l}%</span>\n          <span>Pressure: ${m}</span><span class="text-lowercase"> mb</span> \n        </div>\n         <div class="wind">\n          <span>Wind: 20&deg; Speed: 40</span><span class="text-lowercase">m/s</span>\n        </div>\n        <span class="mr-0">fahrenheit</span>\n        <div class="switch ml-0">\n         <input\n            id="switch-1"\n            type="checkbox"\n            class="switch-input chk-fahrenheit"\n          />\n          <label for="switch-1" class="switch-label">fahrenheit</label>\n        </div>\n      </div>\n  `;i.innerHTML=v;const w=((n,e)=>`./src/assets/${e}/${n}.jpg`)(p[0].main,y);o.setAttribute("src",w);const g=`http://openweathermap.org/img/w/${p[0].icon}.png`;r.setAttribute("src",g),c.classList.contains("d-none")&&c.classList.remove("d-none"),document.querySelector(".chk-fahrenheit").addEventListener("change",(n=>(n=>{const e=document.querySelector(".temperature"),t=document.querySelector(".min"),i=document.querySelector(".max"),c=e.textContent,r=t.textContent,o=i.textContent;if(n.target.checked){const{temp:n,min:e,max:t}=s(c,r,o,"F");a(n,e,t,"F")}else{const{temp:n,min:e,max:t}=s(c,r,o,"C");a(n,e,t,"C")}})(n)))};(()=>{const e=document.querySelector("#content");e.classList.add("container");const t=()=>{const e=document.querySelector("form");e.addEventListener("submit",(t=>{t.preventDefault(),(async e=>{const t=new class{constructor(){this.baseURI="http://api.openweathermap.org/data/2.5/forecast"}async getWeatherConditions(e){this.baseURI+=`?q=${e}&appid=${n.weatherAPIKey}&units=metric`;const t=await fetch(this.baseURI);return 200!==t.status?new Error("Unable to fetch weather conditions"):await t.json()}};let s=await t.getWeatherConditions(e);const{city:a,list:c}=s,r=new class{constructor(){this.baseURI="https://restcountries.eu/rest/v2/alpha/"}async getCountry(n){this.baseURI+=`${n}`;const e=await fetch(this.baseURI);return 200!==e.status?new Error("Unable to fetch country name"):await e.json()}};s=await r.getCountry(a.country);const{name:o}=s;i(c[0],a.name,o)})(e.city.value.trim()),e.reset()}))};return{init(){(()=>{const n=(()=>{const n=document.createElement("form");return n.innerHTML='\n  <label for="city">Enter a location and prss enter key for a weather info</label>\n        <input type="text" name="city" class="form-control p-3" ></input>\n  ',n})();e.append(n);const t=(()=>{const n=document.createElement("div");return n.classList.add("card","rounded","d-none"),n.innerHTML='\n        <img src="https://via.placeholder.com/150" class="weather-condition card-img-top img-fluid">\n        <div class="icon bg-light mx-auto text-center">\n          \x3c!-- Weather Icon --\x3e\n          <img src="" alt="">\n        </div>\n        <div class="text-muted text-uppercase text-center details">\n          <h5>\n            \x3c!-- City Name --\x3e\n            City Name\n          </h5>\n          <div class="my-3">\n            \x3c!-- Weather Conditions --\x3e\n            Weather Conditions\n          </div>\n          <div class="display-4 my-2 temperature">\n            <span>Temp</span>\n            <span>&deg;C</span>\n          </div>\n          <div class="card-footer">\n            <div class="min-max">\n             Min: <span class="min">20</span><span>&deg;C</span>\n             Max: <span class="max">40</span><span>&deg;C</span>\n            </div>\n          </div>\n          <span class="mr-0">fahrenheit</span>\n          <div class="switch ml-0">\n          <input\n              id="switch-1"\n              type="checkbox"\n              class="switch-input chk-fahrenheit"\n            />\n            <label for="switch-1" class="switch-label">fahrenheit</label>\n          </div>\n        </div>\n  ',n})();e.append(t)})(),t()}}})().init()})()})();