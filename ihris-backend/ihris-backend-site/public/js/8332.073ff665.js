"use strict";(self["webpackChunkiHRIS_v5"]=self["webpackChunkiHRIS_v5"]||[]).push([[8332],{2245:function(){},1328:function(e,t,s){s.d(t,{Z:function(){return u}});s(2245);var i=s(7764),r=s(8230),l=s(5500),a=s(5827),o=s(624),n=s(4589),u=i.Z.extend({name:"v-switch",directives:{Touch:l.Z},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes(){return{...r.Z.options.computed.classes.call(this),"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset}},attrs(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot(){return[this.genSwitch(),this.genLabel()]},genSwitch(){const{title:e,...t}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",{...this.attrs,...t}),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",{staticClass:"v-input--switch__track",...this.switchData}),this.$createElement("div",{staticClass:"v-input--switch__thumb",...this.switchData},[this.genProgress()])])},genProgress(){return this.$createElement(a.b0,{},[!1===this.loading?null:this.$slots.progress||this.$createElement(o.Z,{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft(){this.isActive&&this.onChange()},onSwipeRight(){this.isActive||this.onChange()},onKeydown(e){(e.keyCode===n.Do.left&&this.isActive||e.keyCode===n.Do.right&&!this.isActive)&&this.onChange()}}})},9155:function(e,t,s){var i=s(6286),r=s(538);t["Z"]=r["default"].extend({name:"rippleable",directives:{ripple:i.Z},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(e={}){return this.ripple?(e.staticClass="v-input--selection-controls__ripple",e.directives=e.directives||[],e.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",e)):null}}})},7764:function(e,t,s){s.d(t,{X:function(){return o}});var i=s(8230),r=s(9155),l=s(4419),a=s(3325);function o(e){e.preventDefault()}t["Z"]=(0,a.Z)(i.Z,r.Z,l.Z).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const e=this.value,t=this.internalValue;return this.isMultiple?!!Array.isArray(t)&&t.some((t=>this.valueComparator(t,e))):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,t):Boolean(t):this.valueComparator(t,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(e){this.lazyValue=e,this.hasColor=e}},methods:{genLabel(){const e=i.Z.options.methods.genLabel.call(this);return e?(e.data.on={click:o},e):e},genInput(e,t){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:e,type:e},t),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:o},ref:"input"})},onClick(e){this.onChange(),this.$emit("click",e)},onChange(){if(!this.isInteractive)return;const e=this.value;let t=this.internalValue;if(this.isMultiple){Array.isArray(t)||(t=[]);const s=t.length;t=t.filter((t=>!this.valueComparator(t,e))),t.length===s&&t.push(e)}else t=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(t,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(t,e)?null:e:!t;this.validate(!0,t),this.internalValue=t,this.hasColor=t},onFocus(e){this.isFocused=!0,this.$emit("focus",e)},onBlur(e){this.isFocused=!1,this.$emit("blur",e)},onKeydown(e){}}})},5537:function(e,t,s){s.r(t),s.d(t,{default:function(){return h}});var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ihris-complex-card",{attrs:{complexField:e.field,slotProps:e.slotProps,label:e.label,errors:e.errors},scopedSlots:e._u([{key:"default",fn:function(t){return[e._t("default",null,{source:t.source})]}}],null,!0)})},r=[],l=s(7085),a={name:"fhir-address",props:["field","slotProps","sliceName","min","max","base-min","base-max","label","path","edit","constraints"],data:function(){return{errors:[]}},components:{IhrisComplexCard:l.Z}},o=a,n=s(3736),u=(0,n.Z)(o,i,r,!1,null,null,null),h=u.exports},5447:function(e,t,s){s.r(t),s.d(t,{default:function(){return h}});var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ihris-complex-card",{attrs:{complexField:e.field,slotProps:e.slotProps,label:e.label,errors:e.errors},scopedSlots:e._u([{key:"default",fn:function(t){return[e._t("default",null,{source:t.source})]}}],null,!0)})},r=[],l=s(7085),a={name:"fhir-backbone-element",props:["field","slotProps","sliceName","min","max","base-min","base-max","label","path","edit","constraints"],data:function(){return{errors:[]}},components:{IhrisComplexCard:l.Z}},o=a,n=s(3736),u=(0,n.Z)(o,i,r,!1,null,null,null),h=u.exports},5105:function(e,t,s){s.r(t),s.d(t,{default:function(){return m}});var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.hide?e._e():s("ihris-element",{attrs:{edit:e.edit,loading:!1},scopedSlots:e._u([{key:"form",fn:function(){return[s("v-switch",{attrs:{label:e.display+": "+e.value.toString(),disabled:e.disabled,rules:e.rules,dense:"","error-messages":e.errors},on:{change:function(t){e.errors=[]}},scopedSlots:e._u([{key:"label",fn:function(){return[e._v(e._s(e.$t("App.fhir-resources-texts."+e.display))+": "+e._s(e.value.toString())+" "),e.required?s("span",{staticClass:"red--text font-weight-bold"},[e._v("*")]):e._e()]},proxy:!0}],null,!1,4286762327),model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})]},proxy:!0},{key:"header",fn:function(){return[e._v(" "+e._s(e.$t("App.fhir-resources-texts."+e.display))+" ")]},proxy:!0},{key:"value",fn:function(){return[e._v(" "+e._s(e.value)+" ")]},proxy:!0}],null,!1,2861809876)})},r=[],l=s(2130),a=s(6171),o=s(1997),n={name:"fhir-boolean",props:["field","label","min","max","id","path","slotProps","sliceName","base-min","base-max","edit","readOnlyIfSet","constraints","displayCondition"],components:{IhrisElement:l.Z},mixins:[o.x],data:function(){return{source:{path:"",data:{}},value:!0,qField:"valueBoolean",disabled:!1,errors:[],lockWatch:!1}},created:function(){this.hideShowField(this.displayCondition),this.setupData()},watch:{slotProps:{handler(){this.lockWatch||this.setupData()},deep:!0},value(e){a.Y.$emit(this.path,e)}},methods:{setupData(){if(this.slotProps&&this.slotProps.source){if(this.source={path:this.slotProps.source.path+"."+this.field,data:{}},this.slotProps.source.fromArray)this.source.data=this.slotProps.source.data,this.value=this.source.data,this.lockWatch=!0;else{let e=this.$fhirutils.pathFieldExpression(this.field);this.source.data=this.$fhirpath.evaluate(this.slotProps.source.data,e);let t=null;if(1==this.source.data.length)t=this.source.data[0];else{let e,s=this.path.split("[");for(let t of s){let s=t.split("]");Number.isInteger(parseInt(s[0]))&&(e=s[0])}(e||0==e)&&(t=this.source.data[e])}null!=t&&(this.value=t,this.lockWatch=!0)}this.disabled=this.readOnlyIfSet&&!!this.value}}},computed:{index:function(){return this.slotProps&&this.slotProps.input?this.slotProps.input.index:void 0},display:function(){return this.slotProps&&this.slotProps.input?this.slotProps.input.label:this.label},required:function(){return(this.index||0)<this.min},rules:function(){return[]}}},u=n,h=s(3736),c=s(3453),d=s.n(c),p=s(1328),f=(0,h.Z)(u,i,r,!1,null,null,null),m=f.exports;d()(f,{VSwitch:p.Z})},6010:function(e,t,s){s.r(t),s.d(t,{default:function(){return h}});var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ihris-complex-card",{attrs:{complexField:e.field,slotProps:e.slotProps,label:e.label,errors:e.errors},scopedSlots:e._u([{key:"default",fn:function(t){return[e._t("default",null,{source:t.source})]}}],null,!0)})},r=[],l=s(7085),a={name:"fhir-contact-point",props:["field","slotProps","sliceName","min","max","base-min","base-max","label","path","edit","constraints"],data:function(){return{errors:[]}},components:{IhrisComplexCard:l.Z}},o=a,n=s(3736),u=(0,n.Z)(o,i,r,!1,null,null,null),h=u.exports},4882:function(e,t,s){s.r(t),s.d(t,{default:function(){return m}});var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.hide?e._e():s("ihris-element",{attrs:{edit:e.edit,loading:!1},scopedSlots:e._u([{key:"form",fn:function(){return[s("v-text-field",{attrs:{"error-messages":e.errors,label:e.display,disabled:e.disabled,name:e.field,outlined:"","hide-details":"auto",rules:e.rules,dense:""},on:{change:function(t){e.errors=[]}},scopedSlots:e._u([{key:"label",fn:function(){return[e._v(e._s(e.display)+" "),e.required?s("span",{staticClass:"red--text font-weight-bold"},[e._v("*")]):e._e()]},proxy:!0}],null,!1,2859426458),model:{value:e.value,callback:function(t){e.value=e._n(t)},expression:"value"}})]},proxy:!0},{key:"header",fn:function(){return[e._v(" "+e._s(e.display)+" ")]},proxy:!0},{key:"value",fn:function(){return[e._v(" "+e._s(e.value)+" ")]},proxy:!0}],null,!1,939251125)})},r=[],l=s(2130),a=s(6171),o=s(1997),n={name:"fhir-integer",props:["field","label","min","max","id","path","slotProps","sliceName","base-min","base-max","edit","readOnlyIfSet","constraints","displayCondition"],components:{IhrisElement:l.Z},mixins:[o.x],data:function(){return{source:{path:"",data:{}},value:"",qField:"valueInteger",disabled:!1,errors:[],lockWatch:!1}},created:function(){this.hideShowField(this.displayCondition),this.setupData()},watch:{slotProps:{handler(){this.lockWatch||this.setupData()},deep:!0},value(e){a.Y.$emit(this.path,e)}},methods:{setupData(){if(this.slotProps&&this.slotProps.source){if(this.source={path:this.slotProps.source.path+"."+this.field,data:{}},this.slotProps.source.fromArray)this.source.data=this.slotProps.source.data,this.value=this.source.data,this.lockWatch=!0;else{let e=this.$fhirutils.pathFieldExpression(this.field);this.source.data=this.$fhirpath.evaluate(this.slotProps.source.data,e);let t=null;if(1==this.source.data.length)t=this.source.data[0];else{let e,s=this.path.split("[");for(let t of s){let s=t.split("]");Number.isInteger(parseInt(s[0]))&&(e=s[0])}(e||0==e)&&(t=this.source.data[e])}null!=t&&(this.value=t,this.lockWatch=!0)}this.disabled=this.readOnlyIfSet&&!!this.value}}},computed:{index:function(){return this.slotProps?this.slotProps.input:void 0},display:function(){return this.slotProps&&this.slotProps.input?this.slotProps.input.label:this.label},required:function(){return(this.index||0)<this.min},rules:function(){const e=e=>{let t=Number(e);return Number.isInteger(t)||this.display+" must be an integer"};let t=[e];return this.required&&t.push((e=>0===e||!!e||this.display+" is required")),t}}},u=n,h=s(3736),c=s(3453),d=s.n(c),p=s(5978),f=(0,h.Z)(u,i,r,!1,null,null,null),m=f.exports;d()(f,{VTextField:p.Z})},6352:function(e,t,s){s.r(t),s.d(t,{default:function(){return _}});var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.hide?e._e():s("ihris-element",{attrs:{edit:e.edit,loading:e.loading},scopedSlots:e._u([{key:"form",fn:function(){return["tree"==e.displayType?s("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px","max-height":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on;return[s("v-text-field",e._g({attrs:{label:e.$t("App.fhir-resources-texts."+e.display),readonly:"",outlined:"","hide-details":"auto",rules:e.rules,"error-messages":e.errors,loading:e.loading,dense:""},scopedSlots:e._u([{key:"label",fn:function(){return[e._v(e._s(e.$t("App.fhir-resources-texts."+e.display))+" "),e.required?s("span",{staticClass:"red--text font-weight-bold"},[e._v("*")]):e._e()]},proxy:!0}],null,!0),model:{value:e.displayValue,callback:function(t){e.displayValue=t},expression:"displayValue"}},i))]}}],null,!1,4007027273),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e.disabled||e.preset&&"resource_add"===e.$route.name?e._e():s("v-card",[s("v-treeview",{attrs:{active:e.active,items:e.items,"load-children":e.fetchChildren,open:e.open,"item-disabled":"locked",activatable:"","multiple-active":!1,"selection-type":"independent",loading:e.loading},on:{"update:active":function(t){e.active=t},"update:open":function(t){e.open=t}},scopedSlots:e._u([{key:"label",fn:function(t){var s=t.item;return[e._v(" "+e._s(s.name)+" ")]}}],null,!1,40735413)})],1)],1):s("v-autocomplete",{attrs:{loading:e.loading,items:e.items,"search-input":e.search,"cache-items":"",flat:"","hide-no-data":"","hide-details":"",label:e.display,outlined:"",dense:"",placeholder:"$t(`App.hardcoded-texts.Start typing for selection`)",rules:e.rules,disabled:e.disabled||e.preset&&"resource_add"===e.$route.name,"error-messages":e.errors},on:{"update:searchInput":function(t){e.search=t},"update:search-input":function(t){e.search=t},change:function(t){e.errors=[]}},scopedSlots:e._u([{key:"label",fn:function(){return[e._v(e._s(e.$t("App.fhir-resources-texts."+e.display))+" "),e.required?s("span",{staticClass:"red--text font-weight-bold"},[e._v("*")]):e._e()]},proxy:!0}],null,!1,3110236810),model:{value:e.select,callback:function(t){e.select=t},expression:"select"}})]},proxy:!0},{key:"header",fn:function(){return[e._v(" "+e._s(e.$t("App.fhir-resources-texts."+e.display))+" ")]},proxy:!0},{key:"value",fn:function(){return[e._v(" "+e._s(e.displayValue)+" ")]},proxy:!0}],null,!1,1821953802)})},r=[],l=(s(6699),s(2130)),a=s(6171),o=s(1997);const n=s(7673),u="http://hl7.org/fhir/StructureDefinition/";var h={name:"fhir-reference",props:["field","label","sliceName","targetProfile","targetResource","min","max","base-min","base-max","slotProps","path","sub-fields","edit","readOnlyIfSet","constraints","displayType","initialValue","overrideValue","displayCondition","searchParameter"],components:{IhrisElement:l.Z},mixins:[o.x],data:function(){return{hide:!1,source:{path:"",data:{}},value:{reference:""},qField:"valueReference",loading:!1,search:"",menu:!1,items:[],select:"",resource:"",awaitingSearch:!1,displayValue:"",preset:!1,disabled:!1,errors:[],lockWatch:!1,active:[],open:[],treeLookup:{},allAllowed:!0,pathes:{}}},created:function(){this.hideShowField(this.displayCondition),this.setupData()},watch:{slotProps:{handler(){this.lockWatch||this.setupData()},deep:!0},search:function(e){this.awaitingSearch||setTimeout((()=>{e&&e.length>1&&this.querySelections(this.search),this.awaitingSearch=!1}),500),this.awaitingSearch=!0},select:function(e){this.value.reference=e,this.getDisplay(),a.Y.$emit(this.path,e)},active:function(){this.active.length?(this.select=this.active[0],this.displayValue=this.treeLookup[this.select]):(this.select=void 0,this.displayValue=""),this.menu=!1}},methods:{setupData:function(){if(this.targetProfile&&this.targetResource&&(this.targetProfile.replace(u,"")===this.targetResource?this.allAllowed=!0:this.allAllowed=!1,this.resource=this.targetResource),"tree"===this.displayType&&this.setupTreeItems(),this.slotProps&&this.slotProps.source){if(this.source={path:this.slotProps.source.path+"."+this.field,data:{}},this.slotProps.source.fromArray)this.source.data=this.slotProps.source.data;else{let e=this.$fhirutils.pathFieldExpression(this.field),t=this.$fhirpath.evaluate(this.slotProps.source.data,e);this.source.data=t[0]}this.source.data&&(this.preset=!0,this.select=this.source.data.reference,this.lockWatch=!0)}this.disabled=this.readOnlyIfSet&&this.preset},setupTreeItems:async function(){let e=this.initialValue,t=this.searchParameter;this.overrideValue&&(e=this.overrideValue),this.loading=!0;let s={};s=e&&t?{searchparam:e}:!t&&e?{partof:e}:{"partof:missing":!0},s._count=500;let i="/fhir/"+this.resource+"?_sort=name&"+n.stringify(s);this.items=[],this.addItems(i,this.items)},checkChildren:function(e){let t={partof:e.id,_summary:"count"},s="/fhir/"+this.resource+"?_sort=name&"+n.stringify(t);return new Promise((t=>{fetch(s).then((i=>{i.ok?i.json().then((s=>{s.total&&s.total>0&&(e.children=[]),t()})).catch((e=>{console.log("failed to check children for",s,e),t()})):(console.log("failed to check children for",s,i.status),t())})).catch((e=>{console.log("failed to check children for",s,e),t()}))}))},addItems:function(e,t){fetch(e).then((s=>{s.ok?s.json().then((async e=>{if(e.entry&&e.entry.length>0)for(let s of e.entry){let e=!this.allAllowed&&!s.resource.meta.profile.includes(this.targetProfile),i={id:s.resource.resourceType+"/"+s.resource.id,name:s.resource.name,locked:e};await this.checkChildren(i),this.treeLookup[i.id]=i.name,t.push(i)}if(e.link){let s=e.link.find((e=>"next"===e.relation));s?this.addItems(s.url,t):this.loading=!1}else this.loading=!1})).catch((t=>{console.log("Failed to add items for",e,t),this.loading=!1})):(console.log("//////////////////////////////"),console.log("Failed to add items for",e,s.status),this.loading=!1)})).catch((t=>{console.log("Failed to add items for",e,t),this.loading=!1}))},fetchChildren:function(e){let t={};t={partof:e.id,_count:500};let s="/fhir/"+this.resource+"?"+n.stringify(t);return this.loading=!0,this.addItems(s,e.children),new Promise((e=>{let t=0;const s=()=>{!this.loading||t++>100?e():setTimeout(s,200)};s()}))},querySelections:function(e){this.loading=!0;let t={"name:contains":e};this.targetProfile.endsWith(this.resource)||(t._profile=this.targetProfile);let s="/fhir/"+this.resource+"?"+n.stringify(t);fetch(s).then((e=>{e.ok?e.json().then((async e=>{if(this.items=[],e.entry&&e.entry.length)for(let t of e.entry){let e=t.resource.resourceType+"/"+t.resource.id,s={value:e};s.text=await this.$fhirutils.resourceLookup(e),this.items.push(s)}this.loading=!1})):(console.log("Failed to retrieve",this.resource),this.loading=!1)}))},getDisplay:function(){(!this.edit||this.preset)&&this.value&&this.value.reference&&(this.loading=!0,this.$fhirutils.resourceLookup(this.value.reference).then((e=>{this.displayValue=e,"tree"!==this.displayType&&this.items.push({text:e,value:this.value.reference}),this.loading=!1})))}},computed:{index:function(){return this.slotProps?this.slotProps.input:void 0},display:function(){return this.slotProps&&this.slotProps.input?this.slotProps.input.label:this.label},required:function(){return(this.index||0)<this.min},rules:function(){return this.required?[e=>!!e||this.display+" is required"]:[]}}},c=h,d=s(3736),p=s(3453),f=s.n(p),m=s(1835),v=s(2371),y=s(1152),g=s(5978),b=s(8080),x=(0,d.Z)(c,i,r,!1,null,null,null),_=x.exports;f()(x,{VAutocomplete:m.Z,VCard:v.Z,VMenu:y.Z,VTextField:g.Z,VTreeview:b.Z})}}]);
//# sourceMappingURL=8332.073ff665.js.map