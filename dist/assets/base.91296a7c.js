import{j as s,A as d,g as p,ac as v,ad as u,r as c,o as b,R as m,a3 as h,ae as x}from"./index.7b9a5795.js";function E(o){return o==null}class y extends Error{constructor(e){super(e),this.name="ElementPlusError"}}function Y(o,e){throw new y(`[${o}] ${e}`)}function j(o,e){}const z={prefix:Math.floor(Math.random()*1e4),current:0},w=Symbol("elIdInjection"),k=o=>{const e=s(w,z);return d(()=>p(o)||`el-id-${e.prefix}-${e.current++}`)},F=()=>{const o=s(v,void 0),e=s(u,void 0);return{form:o,formItem:e}},H=(o,{formItemContext:e,disableIdGeneration:i,disableIdManagement:t})=>{i||(i=c(!1)),t||(t=c(!1));const r=c();let n;const g=d(()=>{var l;return!!(!o.label&&e&&e.inputIds&&((l=e.inputIds)==null?void 0:l.length)<=1)});return b(()=>{n=m([h(o,"id"),i],([l,f])=>{const a=l!=null?l:f?void 0:k().value;a!==r.value&&(e!=null&&e.removeInputId&&(r.value&&e.removeInputId(r.value),!(t!=null&&t.value)&&!f&&a&&e.addInputId(a)),r.value=a)},{immediate:!0})}),x(()=>{n&&n(),e!=null&&e.removeInputId&&r.value&&e.removeInputId(r.value)}),{isLabeledByFormItem:g,inputId:r}};export{F as a,H as b,j as d,E as i,Y as t,k as u};
