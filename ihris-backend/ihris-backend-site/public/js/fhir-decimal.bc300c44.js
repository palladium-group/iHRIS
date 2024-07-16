"use strict";(self["webpackChunkiHRIS_v5"]=self["webpackChunkiHRIS_v5"]||[]).push([[305],{1997:function(t,e,s){s.d(e,{x:function(){return a}});var i=s(8247);const a={data(){return{hide:!1,pathes:{}}},methods:{hideShowField(t,e){if(t){this.hide=!0;let s=t.split("+=");for(let t of s){let s=t.split("|"),a=s[0],l=s[1],r=s[2];this.pathes[a]||(this.pathes[a]={data:[]}),this.pathes[a].data.push({expectedVal:r,operator:l}),i.Y.$on(a,(t=>{this.pathes[a].selectedVal=t,this.hide=!1;let s={};for(let i in this.pathes){let t=this.pathes[i].selectedVal;for(let a of this.pathes[i].data){let l=a.expectedVal,r=a.operator;"="===r&&l==t||"!="===r&&l!=t||"exists"===r&&""!==t||">"===r&&l>t||"<"===r&&l<t||"<="===r&&l<=t||">="===r&&l>=t?s[i+"#"+l]=!1:(s[i+"#"+l]=!0,e&&"all"!==e||(this.hide=!0))}}if(e&&"any"===e){let t=!1;for(let e in s)s[e]||(t=!0);t||(this.hide=!0)}}))}}else this.hide=!1}}}},7289:function(t,e,s){s.r(e),s.d(e,{default:function(){return v}});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.hide?t._e():s("ihris-element",{attrs:{edit:t.edit,loading:!1},scopedSlots:t._u([{key:"form",fn:function(){return[s("v-text-field",{attrs:{"error-messages":t.errors,label:t.display,disabled:t.disabled,name:t.field,outlined:"","hide-details":"auto",rules:t.rules,dense:""},on:{change:function(e){t.errors=[]}},scopedSlots:t._u([{key:"label",fn:function(){return[t._v(t._s(t.$t("App.fhir-resources-texts."+t.display))+" "),t.required?s("span",{staticClass:"red--text font-weight-bold"},[t._v("*")]):t._e()]},proxy:!0}],null,!1,3110236810),model:{value:t.value,callback:function(e){t.value=t._n(e)},expression:"value"}})]},proxy:!0},{key:"header",fn:function(){return[t._v(" "+t._s(t.$t("App.fhir-resources-texts."+t.display))+" ")]},proxy:!0},{key:"value",fn:function(){return[t._v(" "+t._s(t.value)+" ")]},proxy:!0}],null,!1,2267583767)})},a=[],l=s(2130),r=s(8247),o=s(1997),n={name:"fhir-decimal",props:["field","label","min","max","id","path","slotProps","sliceName","base-min","base-max","edit","readOnlyIfSet","constraints","displayCondition","enableBehavior","initial"],components:{IhrisElement:l.Z},mixins:[o.x],data:function(){return{source:{path:"",data:{}},value:"",hiddenVal:"",qField:"valueDecimal",disabled:!1,errors:[],lockWatch:!1}},created:function(){this.initial&&!this.$route.params.id&&(this.value=this.initial),this.hideShowField(this.displayCondition,this.enableBehavior),this.setupData()},watch:{hide(t){t?(this.hiddenVal=this.value,this.value=""):this.hiddenVal&&(this.value=this.hiddenVal)},slotProps:{handler(){this.lockWatch||this.setupData()},deep:!0},value(t){r.Y.$emit(this.path,t)}},methods:{setupData(){if(this.slotProps&&this.slotProps.source){if(this.source={path:this.slotProps.source.path+"."+this.field,data:{}},this.slotProps.source.fromArray)this.source.data=this.slotProps.source.data,this.value=this.source.data,this.lockWatch=!0;else{let t=this.$fhirutils.pathFieldExpression(this.field);this.source.data=this.$fhirpath.evaluate(this.slotProps.source.data,t);let e=null;if(1==this.source.data.length)e=this.source.data[0];else{let t,s=this.path.split("[");for(let e of s){let s=e.split("]");Number.isInteger(parseInt(s[0]))&&(t=s[0])}(t||0==t)&&(e=this.source.data[t])}null!=e&&(this.value=e,this.lockWatch=!0)}this.disabled=this.readOnlyIfSet&&!!this.value}}},computed:{index:function(){return this.slotProps?this.slotProps.input:void 0},display:function(){return this.slotProps&&this.slotProps.input?this.slotProps.input.label:this.label},required:function(){return(this.index||0)<this.min},rules:function(){const t=t=>{if(t)return!isNaN(t)&&/^-?\d+(\.\d+)?$/.test(t)||this.$t(`App.fhir-resources-texts.${this.display}`)+" "+this.$t("App.hardcoded-texts.must be a Decimal")};let e=[t];return this.required&&e.push((t=>!!t||this.$t(`App.fhir-resources-texts.${this.display}`)+" "+this.$t("App.hardcoded-texts.is required"))),e}}},h=n,d=s(3736),u=s(3453),p=s.n(u),c=s(5978),f=(0,d.Z)(h,i,a,!1,null,null,null),v=f.exports;p()(f,{VTextField:c.Z})},2130:function(t,e,s){s.d(e,{Z:function(){return m}});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.edit?s("v-container",[t._t("form")],2):s("div",[s("v-row",{attrs:{dense:""}},[s("v-col",{staticClass:"font-weight-bold",attrs:{cols:t.$store.state.cols.header}},[t._t("header")],2),t.loading?s("v-col",{attrs:{cols:t.$store.state.cols.content}},[s("v-progress-linear",{attrs:{indeterminate:"",color:"primary"}})],1):s("v-col",{attrs:{cols:t.$store.state.cols.content}},[t._t("value")],2)],1),s("v-divider")],1)],1)},a=[],l={name:"ihris-element",props:["edit","loading"]},r=l,o=s(3736),n=s(3453),h=s.n(n),d=s(2102),u=s(4228),p=s(1418),c=s(7003),f=s(2877),v=(0,o.Z)(r,i,a,!1,null,null,null),m=v.exports;h()(v,{VCol:d.Z,VContainer:u.Z,VDivider:p.Z,VProgressLinear:c.Z,VRow:f.Z})}}]);
//# sourceMappingURL=fhir-decimal.bc300c44.js.map