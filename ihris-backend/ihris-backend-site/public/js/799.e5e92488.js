"use strict";(self["webpackChunkiHRIS_v5"]=self["webpackChunkiHRIS_v5"]||[]).push([[799],{2245:function(){},9155:function(e,t,i){var s=i(6286),r=i(538);t["Z"]=r["default"].extend({name:"rippleable",directives:{ripple:s.Z},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(e={}){return this.ripple?(e.staticClass="v-input--selection-controls__ripple",e.directives=e.directives||[],e.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",e)):null}}})},7764:function(e,t,i){i.d(t,{X:function(){return o}});var s=i(8230),r=i(9155),l=i(4419),a=i(3325);function o(e){e.preventDefault()}t["Z"]=(0,a.Z)(s.Z,r.Z,l.Z).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const e=this.value,t=this.internalValue;return this.isMultiple?!!Array.isArray(t)&&t.some((t=>this.valueComparator(t,e))):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,t):Boolean(t):this.valueComparator(t,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(e){this.lazyValue=e,this.hasColor=e}},methods:{genLabel(){const e=s.Z.options.methods.genLabel.call(this);return e?(e.data.on={click:o},e):e},genInput(e,t){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:e,type:e},t),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:o},ref:"input"})},onClick(e){this.onChange(),this.$emit("click",e)},onChange(){if(!this.isInteractive)return;const e=this.value;let t=this.internalValue;if(this.isMultiple){Array.isArray(t)||(t=[]);const i=t.length;t=t.filter((t=>!this.valueComparator(t,e))),t.length===i&&t.push(e)}else t=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(t,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(t,e)?null:e:!t;this.validate(!0,t),this.internalValue=t,this.hasColor=t},onFocus(e){this.isFocused=!0,this.$emit("focus",e)},onBlur(e){this.isFocused=!1,this.$emit("blur",e)},onKeydown(e){}}})},5537:function(e,t,i){i.r(t),i.d(t,{default:function(){return h}});var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ihris-complex-card",{attrs:{complexField:e.field,slotProps:e.slotProps,label:e.label,errors:e.errors},scopedSlots:e._u([{key:"default",fn:function(t){return[e._t("default",null,{source:t.source})]}}],null,!0)})},r=[],l=i(7085),a={name:"fhir-address",props:["field","slotProps","sliceName","min","max","base-min","base-max","label","path","edit","constraints"],data:function(){return{errors:[]}},components:{IhrisComplexCard:l.Z}},o=a,n=i(3736),u=(0,n.Z)(o,s,r,!1,null,null,null),h=u.exports},5447:function(e,t,i){i.r(t),i.d(t,{default:function(){return h}});var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ihris-complex-card",{attrs:{complexField:e.field,slotProps:e.slotProps,label:e.label,errors:e.errors},scopedSlots:e._u([{key:"default",fn:function(t){return[e._t("default",null,{source:t.source})]}}],null,!0)})},r=[],l=i(7085),a={name:"fhir-backbone-element",props:["field","slotProps","sliceName","min","max","base-min","base-max","label","path","edit","constraints"],data:function(){return{errors:[]}},components:{IhrisComplexCard:l.Z}},o=a,n=i(3736),u=(0,n.Z)(o,s,r,!1,null,null,null),h=u.exports},392:function(e,t,i){i.r(t),i.d(t,{default:function(){return _}});var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.hide?e._e():i("ihris-element",{attrs:{edit:e.edit,loading:!1},scopedSlots:e._u([{key:"form",fn:function(){return[i("v-switch",{attrs:{label:e.display+": "+e.value.toString(),disabled:e.disabled,rules:e.rules,dense:"","error-messages":e.errors},on:{change:function(t){e.errors=[]}},scopedSlots:e._u([{key:"label",fn:function(){return[e._v(e._s(e.$t("App.fhir-resources-texts."+e.display))+": "+e._s(e.value.toString())+" "),e.required?i("span",{staticClass:"red--text font-weight-bold"},[e._v("*")]):e._e()]},proxy:!0}],null,!1,4286762327),model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})]},proxy:!0},{key:"header",fn:function(){return[e._v(" "+e._s(e.$t("App.fhir-resources-texts."+e.display))+" ")]},proxy:!0},{key:"value",fn:function(){return[e._v(" "+e._s(e.value)+" ")]},proxy:!0}],null,!1,2861809876)})},r=[],l=i(2130),a=i(2772),o=i(1997),n={name:"fhir-boolean",props:["field","label","min","max","id","path","slotProps","sliceName","base-min","base-max","edit","readOnlyIfSet","constraints","displayCondition"],components:{IhrisElement:l.Z},mixins:[o.x],data:function(){return{source:{path:"",data:{}},value:!0,qField:"valueBoolean",disabled:!1,errors:[],lockWatch:!1}},created:function(){this.hideShowField(this.displayCondition),this.setupData()},watch:{slotProps:{handler(){this.lockWatch||this.setupData()},deep:!0},value(e){a.Y.$emit(this.path,e)}},methods:{setupData(){if(this.slotProps&&this.slotProps.source){if(this.source={path:this.slotProps.source.path+"."+this.field,data:{}},this.slotProps.source.fromArray)this.source.data=this.slotProps.source.data,this.value=this.source.data,this.lockWatch=!0;else{let e=this.$fhirutils.pathFieldExpression(this.field);this.source.data=this.$fhirpath.evaluate(this.slotProps.source.data,e);let t=null;if(1==this.source.data.length)t=this.source.data[0];else{let e,i=this.path.split("[");for(let t of i){let i=t.split("]");Number.isInteger(parseInt(i[0]))&&(e=i[0])}(e||0==e)&&(t=this.source.data[e])}null!=t&&(this.value=t,this.lockWatch=!0)}this.disabled=this.readOnlyIfSet&&!!this.value}}},computed:{index:function(){return this.slotProps&&this.slotProps.input?this.slotProps.input.index:void 0},display:function(){return this.slotProps&&this.slotProps.input?this.slotProps.input.label:this.label},required:function(){return(this.index||0)<this.min},rules:function(){return[]}}},u=n,h=i(3736),c=i(3453),d=i.n(c),p=(i(2245),i(7764)),f=i(8230),m=i(5500),v=i(5827),g=i(624),y=i(4589),b=p.Z.extend({name:"v-switch",directives:{Touch:m.Z},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes(){return{...f.Z.options.computed.classes.call(this),"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset}},attrs(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot(){return[this.genSwitch(),this.genLabel()]},genSwitch(){const{title:e,...t}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",{...this.attrs,...t}),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",{staticClass:"v-input--switch__track",...this.switchData}),this.$createElement("div",{staticClass:"v-input--switch__thumb",...this.switchData},[this.genProgress()])])},genProgress(){return this.$createElement(v.b0,{},[!1===this.loading?null:this.$slots.progress||this.$createElement(g.Z,{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft(){this.isActive&&this.onChange()},onSwipeRight(){this.isActive||this.onChange()},onKeydown(e){(e.keyCode===y.Do.left&&this.isActive||e.keyCode===y.Do.right&&!this.isActive)&&this.onChange()}}}),x=(0,h.Z)(u,s,r,!1,null,null,null),_=x.exports;d()(x,{VSwitch:b})},6010:function(e,t,i){i.r(t),i.d(t,{default:function(){return h}});var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ihris-complex-card",{attrs:{complexField:e.field,slotProps:e.slotProps,label:e.label,errors:e.errors},scopedSlots:e._u([{key:"default",fn:function(t){return[e._t("default",null,{source:t.source})]}}],null,!0)})},r=[],l=i(7085),a={name:"fhir-contact-point",props:["field","slotProps","sliceName","min","max","base-min","base-max","label","path","edit","constraints"],data:function(){return{errors:[]}},components:{IhrisComplexCard:l.Z}},o=a,n=i(3736),u=(0,n.Z)(o,s,r,!1,null,null,null),h=u.exports},4882:function(e,t,i){i.r(t),i.d(t,{default:function(){return m}});var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.hide?e._e():i("ihris-element",{attrs:{edit:e.edit,loading:!1},scopedSlots:e._u([{key:"form",fn:function(){return[i("v-text-field",{attrs:{"error-messages":e.errors,label:e.display,disabled:e.disabled,name:e.field,outlined:"","hide-details":"auto",rules:e.rules,dense:""},on:{change:function(t){e.errors=[]}},scopedSlots:e._u([{key:"label",fn:function(){return[e._v(e._s(e.display)+" "),e.required?i("span",{staticClass:"red--text font-weight-bold"},[e._v("*")]):e._e()]},proxy:!0}],null,!1,2859426458),model:{value:e.value,callback:function(t){e.value=e._n(t)},expression:"value"}})]},proxy:!0},{key:"header",fn:function(){return[e._v(" "+e._s(e.display)+" ")]},proxy:!0},{key:"value",fn:function(){return[e._v(" "+e._s(e.value)+" ")]},proxy:!0}],null,!1,939251125)})},r=[],l=i(2130),a=i(2772),o=i(1997),n={name:"fhir-integer",props:["field","label","min","max","id","path","slotProps","sliceName","base-min","base-max","edit","readOnlyIfSet","constraints","displayCondition"],components:{IhrisElement:l.Z},mixins:[o.x],data:function(){return{source:{path:"",data:{}},value:"",qField:"valueInteger",disabled:!1,errors:[],lockWatch:!1}},created:function(){this.hideShowField(this.displayCondition),this.setupData()},watch:{slotProps:{handler(){this.lockWatch||this.setupData()},deep:!0},value(e){a.Y.$emit(this.path,e)}},methods:{setupData(){if(this.slotProps&&this.slotProps.source){if(this.source={path:this.slotProps.source.path+"."+this.field,data:{}},this.slotProps.source.fromArray)this.source.data=this.slotProps.source.data,this.value=this.source.data,this.lockWatch=!0;else{let e=this.$fhirutils.pathFieldExpression(this.field);this.source.data=this.$fhirpath.evaluate(this.slotProps.source.data,e);let t=null;if(1==this.source.data.length)t=this.source.data[0];else{let e,i=this.path.split("[");for(let t of i){let i=t.split("]");Number.isInteger(parseInt(i[0]))&&(e=i[0])}(e||0==e)&&(t=this.source.data[e])}null!=t&&(this.value=t,this.lockWatch=!0)}this.disabled=this.readOnlyIfSet&&!!this.value}}},computed:{index:function(){return this.slotProps?this.slotProps.input:void 0},display:function(){return this.slotProps&&this.slotProps.input?this.slotProps.input.label:this.label},required:function(){return(this.index||0)<this.min},rules:function(){const e=e=>{let t=Number(e);return Number.isInteger(t)||this.display+" must be an integer"};let t=[e];return this.required&&t.push((e=>0===e||!!e||this.display+" is required")),t}}},u=n,h=i(3736),c=i(3453),d=i.n(c),p=i(5978),f=(0,h.Z)(u,s,r,!1,null,null,null),m=f.exports;d()(f,{VTextField:p.Z})},628:function(e,t,i){i.r(t),i.d(t,{default:function(){return _}});var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.hide?e._e():i("ihris-element",{attrs:{edit:e.edit,loading:e.loading},scopedSlots:e._u([{key:"form",fn:function(){return["tree"==e.displayType?i("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px","max-height":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on;return[i("v-text-field",e._g({attrs:{label:e.$t("App.fhir-resources-texts."+e.display),readonly:"",outlined:"","hide-details":"auto",rules:e.rules,"error-messages":e.errors,loading:e.loading,dense:""},scopedSlots:e._u([{key:"label",fn:function(){return[e._v(e._s(e.$t("App.fhir-resources-texts."+e.display))+" "),e.required?i("span",{staticClass:"red--text font-weight-bold"},[e._v("*")]):e._e()]},proxy:!0}],null,!0),model:{value:e.displayValue,callback:function(t){e.displayValue=t},expression:"displayValue"}},s))]}}],null,!1,4007027273),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e.disabled||e.preset&&"resource_add"===e.$route.name?e._e():i("v-card",[i("v-treeview",{attrs:{active:e.active,items:e.items,"load-children":e.fetchChildren,open:e.open,"item-disabled":"locked",activatable:"","multiple-active":!1,"selection-type":"independent",loading:e.loading},on:{"update:active":function(t){e.active=t},"update:open":function(t){e.open=t}},scopedSlots:e._u([{key:"label",fn:function(t){var i=t.item;return[e._v(" "+e._s(i.name)+" ")]}}],null,!1,40735413)})],1)],1):i("v-autocomplete",{attrs:{loading:e.loading,items:e.items,"search-input":e.search,"cache-items":"",flat:"","hide-no-data":"","hide-details":"",label:e.display,outlined:"",dense:"",placeholder:"$t(`App.hardcoded-texts.Start typing for selection`)",rules:e.rules,disabled:e.disabled||e.preset&&"resource_add"===e.$route.name,"error-messages":e.errors},on:{"update:searchInput":function(t){e.search=t},"update:search-input":function(t){e.search=t},change:function(t){e.errors=[]}},scopedSlots:e._u([{key:"label",fn:function(){return[e._v(e._s(e.$t("App.fhir-resources-texts."+e.display))+" "),e.required?i("span",{staticClass:"red--text font-weight-bold"},[e._v("*")]):e._e()]},proxy:!0}],null,!1,3110236810),model:{value:e.select,callback:function(t){e.select=t},expression:"select"}})]},proxy:!0},{key:"header",fn:function(){return[e._v(" "+e._s(e.$t("App.fhir-resources-texts."+e.display))+" ")]},proxy:!0},{key:"value",fn:function(){return[e._v(" "+e._s(e.displayValue)+" ")]},proxy:!0}],null,!1,1821953802)})},r=[],l=i(2130),a=i(2772),o=i(1997);const n=i(7673),u="http://hl7.org/fhir/StructureDefinition/";var h={name:"fhir-reference",props:["field","label","sliceName","targetProfile","targetResource","min","max","base-min","base-max","slotProps","path","sub-fields","edit","readOnlyIfSet","constraints","displayType","initialValue","overrideValue","displayCondition","searchParameter","initialProfile","pageTargetProfile"],components:{IhrisElement:l.Z},mixins:[o.x],data:function(){return{hide:!1,source:{path:"",data:{}},value:{reference:""},qField:"valueReference",loading:!1,search:"",menu:!1,items:[],select:"",resource:"",awaitingSearch:!1,displayValue:"",preset:!1,disabled:!1,errors:[],lockWatch:!1,active:[],open:[],treeLookup:{},allAllowed:!0,pathes:{}}},created:function(){this.hideShowField(this.displayCondition),this.setupData()},watch:{slotProps:{handler(){this.lockWatch||this.setupData()},deep:!0},search:function(e){this.awaitingSearch||setTimeout((()=>{e&&e.length>1&&this.querySelections(this.search),this.awaitingSearch=!1}),500),this.awaitingSearch=!0},select:function(e){this.value.reference=e,this.getDisplay(),a.Y.$emit(this.path,e)},active:function(){this.active.length?(this.select=this.active[0],this.displayValue=this.treeLookup[this.select]):(this.select=void 0,this.displayValue=""),this.menu=!1}},methods:{setupData:function(){let e=this.targetProfile;if(this.pageTargetProfile&&(e=this.pageTargetProfile),e&&this.targetResource&&(e.replace(u,"")===this.targetResource?this.allAllowed=!0:this.allAllowed=!1,this.resource=this.targetResource),"tree"===this.displayType&&this.setupTreeItems(),this.slotProps&&this.slotProps.source){if(this.source={path:this.slotProps.source.path+"."+this.field,data:{}},this.slotProps.source.fromArray)this.source.data=this.slotProps.source.data;else{let e=this.$fhirutils.pathFieldExpression(this.field),t=this.$fhirpath.evaluate(this.slotProps.source.data,e);this.source.data=t[0]}this.source.data&&(this.preset=!0,this.select=this.source.data.reference,this.lockWatch=!0)}this.disabled=this.readOnlyIfSet&&this.preset},setupTreeItems:async function(){let e=this.initialValue,t=this.searchParameter;this.overrideValue&&(e=this.overrideValue),this.loading=!0;let i={};t?e?i={searchparam:e}:e||(i[t+":missing"]=!0,this.initialProfile&&(i["_profile"]=this.initialProfile)):i=e?{partof:e}:{"partof:missing":!0},i._count=500;let s="/fhir/"+this.resource+"?_sort=name&"+n.stringify(i);this.items=[],this.addItems(s,this.items)},checkChildren:function(e){let t={};this.searchParameter?t[this.searchParameter]=e.id:t={partof:e.id},t["_summary"]="count";let i="/fhir/"+this.resource+"?_sort=name&"+n.stringify(t);return new Promise((t=>{fetch(i).then((s=>{s.ok?s.json().then((i=>{i.total&&i.total>0&&(e.children=[]),t()})).catch((e=>{console.log("failed to check children for",i,e),t()})):(console.log("failed to check children for",i,s.status),t())})).catch((e=>{console.log("failed to check children for",i,e),t()}))}))},addItems:function(e,t){fetch(e).then((i=>{i.ok?i.json().then((async e=>{let i=this.targetProfile;if(this.pageTargetProfile&&(i=this.pageTargetProfile),e.entry&&e.entry.length>0)for(let s of e.entry){let e=!this.allAllowed&&!s.resource.meta.profile.includes(i),r=s.resource.name;"Basic"===this.resource&&(r=s.resource.extension.find((e=>"http://ihris.org/fhir/StructureDefinition/ihris-basic-name"===e.url)).valueString);let l=[];s.resource.meta&&s.resource.meta.profile&&(l=s.resource.meta.profile);let a={profile:l,id:s.resource.resourceType+"/"+s.resource.id,name:r,locked:e};await this.checkChildren(a),this.treeLookup[a.id]=a.name,t.push(a)}if(e.link){let i=e.link.find((e=>"next"===e.relation));i?this.addItems(i.url,t):this.loading=!1}else this.loading=!1})).catch((t=>{console.log("Failed to add items for",e,t),this.loading=!1})):(console.log("//////////////////////////////"),console.log("Failed to add items for",e,i.status),this.loading=!1)})).catch((t=>{console.log("Failed to add items for",e,t),this.loading=!1}))},fetchChildren:function(e){let t={};this.searchParameter?(t[this.searchParameter]=e.id,t["_count"]=500):t={partof:e.id,_count:500};let i="/fhir/"+this.resource+"?"+n.stringify(t);return this.loading=!0,this.addItems(i,e.children),new Promise((e=>{let t=0;const i=()=>{!this.loading||t++>100?e():setTimeout(i,200)};i()}))},querySelections:function(e){this.loading=!0;let t={"name:contains":e},i=this.targetProfile;this.pageTargetProfile&&(i=this.pageTargetProfile),i.endsWith(this.resource)||(t._profile=i);let s="/fhir/"+this.resource+"?"+n.stringify(t);fetch(s).then((e=>{e.ok?e.json().then((async e=>{if(this.items=[],e.entry&&e.entry.length)for(let t of e.entry){let e=t.resource.resourceType+"/"+t.resource.id,i={value:e};i.text=await this.$fhirutils.resourceLookup(e),this.items.push(i)}this.loading=!1})):(console.log("Failed to retrieve",this.resource),this.loading=!1)}))},getDisplay:function(){(!this.edit||this.preset)&&this.value&&this.value.reference&&(this.loading=!0,this.$fhirutils.resourceLookup(this.value.reference).then((e=>{this.displayValue=e,"tree"!==this.displayType&&this.items.push({text:e,value:this.value.reference}),this.loading=!1})))}},computed:{index:function(){return this.slotProps?this.slotProps.input:void 0},display:function(){return this.slotProps&&this.slotProps.input?this.slotProps.input.label:this.label},required:function(){return(this.index||0)<this.min},rules:function(){return this.required?[e=>!!e||this.display+" is required"]:[]}}},c=h,d=i(3736),p=i(3453),f=i.n(p),m=i(1835),v=i(2371),g=i(1152),y=i(5978),b=i(8080),x=(0,d.Z)(c,s,r,!1,null,null,null),_=x.exports;f()(x,{VAutocomplete:m.Z,VCard:v.Z,VMenu:g.Z,VTextField:y.Z,VTreeview:b.Z})}}]);
//# sourceMappingURL=799.e5e92488.js.map