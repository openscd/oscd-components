import{x as f}from"./lit-element-f5e76485.js";import{l as S}from"./oscd-component.styles-32f17194.js";import"./OscdButton-b357403e.js";const B={title:"oscd-button/OscdButton/Raised",component:"oscd-button",argTypes:{},parameters:{actions:{},status:{type:"beta"}}},o=({content:y,raised:D,label:T,disabled:h,icon:A})=>f`<oscd-button
    ?raised=${S(D)}
    .label=${T||""}
    ?disabled=${h}
    .icon=${A}
    >${y}</oscd-button
  >`,e=o.bind({});e.args={content:f`<span>Click me</span>`,raised:!0};const n=o.bind({});n.args={...e.args,label:"My label"};const s=o.bind({});s.args={...e.args,icon:"edit"};const a=o.bind({});a.args={...e.args,disabled:!0};var t,r,d;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`({
  content,
  raised,
  label,
  disabled,
  icon
}: ArgTypes) => html\`<oscd-button
    ?raised=\${ifDefined(raised)}
    .label=\${label || ''}
    ?disabled=\${disabled}
    .icon=\${icon}
    >\${content}</oscd-button
  >\``,...(d=(r=e.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};var i,c,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`({
  content,
  raised,
  label,
  disabled,
  icon
}: ArgTypes) => html\`<oscd-button
    ?raised=\${ifDefined(raised)}
    .label=\${label || ''}
    ?disabled=\${disabled}
    .icon=\${icon}
    >\${content}</oscd-button
  >\``,...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var b,p,u;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`({
  content,
  raised,
  label,
  disabled,
  icon
}: ArgTypes) => html\`<oscd-button
    ?raised=\${ifDefined(raised)}
    .label=\${label || ''}
    ?disabled=\${disabled}
    .icon=\${icon}
    >\${content}</oscd-button
  >\``,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,$,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`({
  content,
  raised,
  label,
  disabled,
  icon
}: ArgTypes) => html\`<oscd-button
    ?raised=\${ifDefined(raised)}
    .label=\${label || ''}
    ?disabled=\${disabled}
    .icon=\${icon}
    >\${content}</oscd-button
  >\``,...(g=($=a.parameters)==null?void 0:$.docs)==null?void 0:g.source}}};const I=["Regular","Label","Icon","Disabled"];export{a as Disabled,s as Icon,n as Label,e as Regular,I as __namedExportsOrder,B as default};
//# sourceMappingURL=oscd-button.raised.stories-23540573.js.map
