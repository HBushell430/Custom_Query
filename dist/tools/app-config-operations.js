System.register(["jimu-core"],(function(e,t){var r={};return{setters:[function(e){r.dataSourceUtils=e.dataSourceUtils}],execute:function(){e((()=>{var e={9244:e=>{"use strict";e.exports=r}},t={};function o(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,o),i.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="";var a={};return o.p=window.jimuConfig.baseUrl,(()=>{"use strict";o.r(a),o.d(a,{default:()=>t});var e=o(9244);class t{constructor(){this.id="query-app-config-operation"}afterWidgetCopied(t,r,o,a,i){var s;if(!i)return a;const u=r.widgets[t],n=null==u?void 0:u.config;let d=a;return null===(s=n.queryItems)||void 0===s||s.forEach(((t,r)=>{var a,s;if((null===(a=t.spatialMapWidgetIds)||void 0===a?void 0:a.length)>0){const e=t.spatialMapWidgetIds.map((e=>i[e]));d=d.setIn(["widgets",o,"config","queryItems",`${r}`,"spatialMapWidgetIds"],e)}if(t.outputDataSourceId&&i[t.outputDataSourceId]&&(d=d.setIn(["widgets",o,"config","queryItems",`${r}`,"outputDataSourceId"],i[t.outputDataSourceId])),t.useDataSource){const{isChanged:a,useDataSource:s}=e.dataSourceUtils.mapUseDataSource(i,t.useDataSource);a&&(d=d.setIn(["widgets",o,"config","queryItems",`${r}`,"useDataSource"],s))}if((null===(s=t.spatialMapWidgetIds)||void 0===s?void 0:s.length)>0){const e=[];t.spatialMapWidgetIds.forEach((t=>{i[t]?e.push(i[t]):e.push(t)})),d=d.setIn(["widgets",o,"config","queryItems",`${r}`,"spatialMapWidgetIds"],e)}})),d}widgetWillRemove(e){return e}}})(),a})())}}}));