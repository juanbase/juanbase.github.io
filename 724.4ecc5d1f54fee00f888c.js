(self.webpackChunkjuanbase_angular=self.webpackChunkjuanbase_angular||[]).push([[724],{6724:(t,e,n)=>{"use strict";n.r(e),n.d(e,{HomeModule:()=>K});var o=n(1116),s=n(9437),r=n(4415),i=n(5366),a=n(1671),c=n(7064),l=n(3169);const h=["*",[["mat-toolbar-row"]]],u=["*","mat-toolbar-row"];class g{constructor(t){this._elementRef=t}}const m=(0,c.pj)(g);let f=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=i.lG2({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]}),t})(),p=(()=>{class t extends m{constructor(t,e,n){super(t),this._platform=e,this._document=n}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(i.SBq),i.Y36(l.t4),i.Y36(o.K0))},t.\u0275cmp=i.Xpm({type:t,selectors:[["mat-toolbar"]],contentQueries:function(t,e,n){if(1&t&&i.Suo(n,f,5),2&t){let t;i.iGM(t=i.CRH())&&(e._toolbarRows=t)}},hostAttrs:[1,"mat-toolbar"],hostVars:4,hostBindings:function(t,e){2&t&&i.ekj("mat-toolbar-multiple-rows",e._toolbarRows.length>0)("mat-toolbar-single-row",0===e._toolbarRows.length)},inputs:{color:"color"},exportAs:["matToolbar"],features:[i.qOj],ngContentSelectors:u,decls:2,vars:0,template:function(t,e){1&t&&(i.F$t(h),i.Hsn(0),i.Hsn(1,1))},styles:[".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}\n"],encapsulation:2,changeDetection:0}),t})(),d=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[c.BQ],c.BQ]}),t})();var _=n(4369),v=n(9861),S=n(878),I=n(1225),C=n(3148),w=n(7570),b=n(6599),F=n(9996),x=n(7727),E=n(1520),y=n(1055),A=n(611),R=n(2693),L=n(9624);const N=["*"];function T(t){return Error(`Unable to find icon with the name "${t}"`)}function U(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function M(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}class q{constructor(t,e,n){this.url=t,this.svgText=e,this.options=n}}let B=(()=>{class t{constructor(t,e,n,o){this._httpClient=t,this._sanitizer=e,this._errorHandler=o,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._resolvers=[],this._defaultFontSetClass="material-icons",this._document=n}addSvgIcon(t,e,n){return this.addSvgIconInNamespace("",t,e,n)}addSvgIconLiteral(t,e,n){return this.addSvgIconLiteralInNamespace("",t,e,n)}addSvgIconInNamespace(t,e,n,o){return this._addSvgIconConfig(t,e,new q(n,null,o))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,n,o){const s=this._sanitizer.sanitize(i.q3G.HTML,n);if(!s)throw M(n);return this._addSvgIconConfig(t,e,new q("",s,o))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace("",t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace("",t,e)}addSvgIconSetInNamespace(t,e,n){return this._addSvgIconSetConfig(t,new q(e,null,n))}addSvgIconSetLiteralInNamespace(t,e,n){const o=this._sanitizer.sanitize(i.q3G.HTML,e);if(!o)throw M(e);return this._addSvgIconSetConfig(t,new q("",o,n))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){const e=this._sanitizer.sanitize(i.q3G.RESOURCE_URL,t);if(!e)throw U(t);const n=this._cachedIconsByUrl.get(e);return n?(0,S.of)(k(n)):this._loadSvgIconFromConfig(new q(t,null)).pipe((0,b.b)(t=>this._cachedIconsByUrl.set(e,t)),(0,F.U)(t=>k(t)))}getNamedSvgIcon(t,e=""){const n=z(e,t);let o=this._svgIconConfigs.get(n);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(e,t),o)return this._svgIconConfigs.set(n,o),this._getSvgFromConfig(o);const s=this._iconSetConfigs.get(e);return s?this._getSvgFromIconSetConfigs(t,s):(0,I._)(T(n))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?(0,S.of)(k(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe((0,F.U)(t=>k(t)))}_getSvgFromIconSetConfigs(t,e){const n=this._extractIconWithNameFromAnySet(t,e);if(n)return(0,S.of)(n);const o=e.filter(t=>!t.svgText).map(t=>this._loadSvgIconSetFromConfig(t).pipe((0,x.K)(e=>{const n=this._sanitizer.sanitize(i.q3G.RESOURCE_URL,t.url);return this._errorHandler.handleError(new Error(`Loading icon set URL: ${n} failed: ${e.message}`)),(0,S.of)(null)})));return(0,C.D)(o).pipe((0,F.U)(()=>{const n=this._extractIconWithNameFromAnySet(t,e);if(!n)throw T(t);return n}))}_extractIconWithNameFromAnySet(t,e){for(let n=e.length-1;n>=0;n--){const o=e[n];if(o.svgText&&o.svgText.indexOf(t)>-1){const e=this._svgElementFromConfig(o),n=this._extractSvgIconFromSet(e,t,o.options);if(n)return n}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe((0,b.b)(e=>t.svgText=e),(0,F.U)(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?(0,S.of)(null):this._fetchIcon(t).pipe((0,b.b)(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,n){const o=t.querySelector(`[id="${e}"]`);if(!o)return null;const s=o.cloneNode(!0);if(s.removeAttribute("id"),"svg"===s.nodeName.toLowerCase())return this._setSvgAttributes(s,n);if("symbol"===s.nodeName.toLowerCase())return this._setSvgAttributes(this._toSvgElement(s),n);const r=this._svgElementFromString("<svg></svg>");return r.appendChild(s),this._setSvgAttributes(r,n)}_svgElementFromString(t){const e=this._document.createElement("DIV");e.innerHTML=t;const n=e.querySelector("svg");if(!n)throw Error("<svg> tag not found");return n}_toSvgElement(t){const e=this._svgElementFromString("<svg></svg>"),n=t.attributes;for(let o=0;o<n.length;o++){const{name:t,value:s}=n[o];"id"!==t&&e.setAttribute(t,s)}for(let o=0;o<t.childNodes.length;o++)t.childNodes[o].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[o].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),e&&e.viewBox&&t.setAttribute("viewBox",e.viewBox),t}_fetchIcon(t){var e;const{url:n,options:o}=t,s=null!==(e=null==o?void 0:o.withCredentials)&&void 0!==e&&e;if(!this._httpClient)throw Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.");if(null==n)throw Error(`Cannot fetch icon from URL "${n}".`);const r=this._sanitizer.sanitize(i.q3G.RESOURCE_URL,n);if(!r)throw U(n);const a=this._inProgressUrlFetches.get(r);if(a)return a;const c=this._httpClient.get(r,{responseType:"text",withCredentials:s}).pipe((0,E.x)(()=>this._inProgressUrlFetches.delete(r)),(0,y.B)());return this._inProgressUrlFetches.set(r,c),c}_addSvgIconConfig(t,e,n){return this._svgIconConfigs.set(z(t,e),n),this}_addSvgIconSetConfig(t,e){const n=this._iconSetConfigs.get(t);return n?n.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){const e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let o=0;o<this._resolvers.length;o++){const s=this._resolvers[o](e,t);if(s)return(n=s).url&&n.options?new q(s.url,null,s.options):new q(s,null)}var n}}return t.\u0275fac=function(e){return new(e||t)(i.LFG(R.eN,8),i.LFG(L.H7),i.LFG(o.K0,8),i.LFG(i.qLn))},t.\u0275prov=i.Yz7({factory:function(){return new t(i.LFG(R.eN,8),i.LFG(L.H7),i.LFG(o.K0,8),i.LFG(i.qLn))},token:t,providedIn:"root"}),t})();function k(t){return t.cloneNode(!0)}function z(t,e){return t+":"+e}class Z{constructor(t){this._elementRef=t}}const $=(0,c.pj)(Z),H=new i.OlP("mat-icon-location",{providedIn:"root",factory:function(){const t=(0,i.f3M)(o.K0),e=t?t.location:null;return{getPathname:()=>e?e.pathname+e.search:""}}}),P=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],G=P.map(t=>`[${t}]`).join(", "),O=/^url\(['"]?#(.*?)['"]?\)$/;let W=(()=>{class t extends ${constructor(t,e,n,o,s){super(t),this._iconRegistry=e,this._location=o,this._errorHandler=s,this._inline=!1,this._currentIconFetch=w.w.EMPTY,n||t.nativeElement.setAttribute("aria-hidden","true")}get inline(){return this._inline}set inline(t){this._inline=(0,v.Ig)(t)}get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}get fontSet(){return this._fontSet}set fontSet(t){const e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}get fontIcon(){return this._fontIcon}set fontIcon(t){const e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}_splitIconName(t){if(!t)return["",""];const e=t.split(":");switch(e.length){case 1:return["",e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){const t=this._elementsWithExternalReferences;if(t&&t.size){const t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();const e=t.querySelectorAll("style");for(let o=0;o<e.length;o++)e[o].textContent+=" ";const n=this._location.getPathname();this._previousPath=n,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(n),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){const t=this._elementRef.nativeElement;let e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){const n=t.childNodes[e];1===n.nodeType&&"svg"!==n.nodeName.toLowerCase()||t.removeChild(n)}}_updateFontIconClasses(){if(!this._usingFontIcon())return;const t=this._elementRef.nativeElement,e=this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet):this._iconRegistry.getDefaultFontSetClass();e!=this._previousFontSetClass&&(this._previousFontSetClass&&t.classList.remove(this._previousFontSetClass),e&&t.classList.add(e),this._previousFontSetClass=e),this.fontIcon!=this._previousFontIconClass&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return"string"==typeof t?t.trim().split(" ")[0]:t}_prependPathToReferences(t){const e=this._elementsWithExternalReferences;e&&e.forEach((e,n)=>{e.forEach(e=>{n.setAttribute(e.name,`url('${t}#${e.value}')`)})})}_cacheChildrenWithExternalReferences(t){const e=t.querySelectorAll(G),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<e.length;o++)P.forEach(t=>{const s=e[o],r=s.getAttribute(t),i=r?r.match(O):null;if(i){let e=n.get(s);e||(e=[],n.set(s,e)),e.push({name:t,value:i[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){const[e,n]=this._splitIconName(t);e&&(this._svgNamespace=e),n&&(this._svgName=n),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(n,e).pipe((0,A.q)(1)).subscribe(t=>this._setSvgElement(t),t=>{this._errorHandler.handleError(new Error(`Error retrieving icon ${e}:${n}! ${t.message}`))})}}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(i.SBq),i.Y36(B),i.$8M("aria-hidden"),i.Y36(H),i.Y36(i.qLn))},t.\u0275cmp=i.Xpm({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:7,hostBindings:function(t,e){2&t&&(i.uIk("data-mat-icon-type",e._usingFontIcon()?"font":"svg")("data-mat-icon-name",e._svgName||e.fontIcon)("data-mat-icon-namespace",e._svgNamespace||e.fontSet),i.ekj("mat-icon-inline",e.inline)("mat-icon-no-color","primary"!==e.color&&"accent"!==e.color&&"warn"!==e.color))},inputs:{color:"color",inline:"inline",svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],features:[i.qOj],ngContentSelectors:N,decls:1,vars:0,template:function(t,e){1&t&&(i.F$t(),i.Hsn(0))},styles:[".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"],encapsulation:2,changeDetection:0}),t})(),j=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[c.BQ],c.BQ]}),t})(),D=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-appbar"]],decls:14,vars:0,consts:[["color","primary"],["mat-icon-button","","aria-label","Example icon-button with menu icon",1,"example-icon"],[1,"example-spacer"],["mat-icon-button","","aria-label","Example icon-button with heart icon",1,"example-icon","favorite-icon"],["mat-icon-button","","aria-label","Example icon-button with share icon",1,"example-icon"]],template:function(t,e){1&t&&(i.TgZ(0,"p"),i.TgZ(1,"mat-toolbar",0),i.TgZ(2,"button",1),i.TgZ(3,"mat-icon"),i._uU(4,"menu"),i.qZA(),i.qZA(),i.TgZ(5,"span"),i._uU(6,"My App"),i.qZA(),i._UZ(7,"span",2),i.TgZ(8,"button",3),i.TgZ(9,"mat-icon"),i._uU(10,"favorite"),i.qZA(),i.qZA(),i.TgZ(11,"button",4),i.TgZ(12,"mat-icon"),i._uU(13,"share"),i.qZA(),i.qZA(),i.qZA(),i.qZA())},directives:[p,_.lW,W],styles:[".example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}"]}),t})();const Y=[{path:"",component:(()=>{class t{constructor(t){this.store=t}ngOnInit(){}ngAfterViewInit(){setTimeout(()=>{this.store.dispatch((0,r.l)({isLoading:!1}))},1e3)}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(a.yh))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-home"]],decls:1,vars:0,template:function(t,e){1&t&&i._UZ(0,"app-appbar")},directives:[D],styles:[""]}),t})()}];let V=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[s.Bz.forChild(Y)],s.Bz]}),t})(),K=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[o.ez,V,d,j,_.ot]]}),t})()}}]);