import{w as j}from"./with-props-wq2SvAri.js";import{a,o as e,v as u}from"./chunk-K6CSEXPM-CgpvmZPW.js";import{r as d}from"./resume-rWrrka-H.js";const x="_container_1wmlz_1",w="_details_1wmlz_56",v="_duration_1wmlz_67",b="_blurb_1wmlz_72",o={container:x,"preview-content":"_preview-content_1wmlz_12","more-content":"_more-content_1wmlz_21","more-prompt":"_more-prompt_1wmlz_43","cover-image":"_cover-image_1wmlz_48",details:w,"project-name":"_project-name_1wmlz_60",duration:v,blurb:b,"button-container":"_button-container_1wmlz_77"};function p({name:i,duration:r,description:t,blurb:s,coverImage:h,writeupLink:m}){const[l,_]=a.useState(!1);return e.jsxs("div",{className:o.container,"data-show-more":l,children:[e.jsxs("div",{className:o["preview-content"],children:[e.jsx("img",{className:o["cover-image"],src:h}),e.jsxs("div",{className:o.details,children:[e.jsxs("div",{className:o["project-name"],children:[e.jsx("h3",{children:i}),e.jsx("span",{className:o.duration,children:r})]}),e.jsx("div",{className:o.blurb,children:s})]})]}),e.jsx("div",{className:o["more-content"],children:t.map(c=>e.jsx("p",{children:c}))}),e.jsxs("div",{className:o["button-container"],children:[m&&e.jsx(u,{to:m,className:o["writeup-link"],children:"Writeup"}),e.jsx("span",{className:o["more-prompt"],onClick:()=>_(c=>!c),children:l?"Back":"More..."})]})]})}const N="_container_1ph5f_1",n={container:N,"about-section":"_about-section_1ph5f_6"},k=j(function(){const r=d.projects.filter(s=>s.isAcademic),t=d.projects.filter(s=>!s.isAcademic);return e.jsxs("div",{className:n.container,children:[e.jsxs("section",{className:n["about-section"],children:[e.jsx("h1",{children:"Personal Projects"}),e.jsx("p",{children:"These are projects which I completed on my own time for my own personal interest, or to solve a problem I had. Hover over them or click 'More...'"})]}),t.map(s=>a.createElement(p,{...s,key:s.name})),e.jsxs("section",{className:n["about-section"],children:[e.jsx("h1",{children:"Academic Projects"}),e.jsx("p",{children:"These are projects which I completed as a part of my education. Hover over them or click 'More...'"})]}),r.map(s=>a.createElement(p,{...s,key:s.name}))]})});export{k as default};
