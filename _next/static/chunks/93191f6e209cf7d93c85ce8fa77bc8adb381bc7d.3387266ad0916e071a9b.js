(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[33],{"9Qsi":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("aWzz"),i=n.n(a),r=n("ERkP"),l=n.n(r),o=["flex","label","margin","align","children"];function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e){var t=e.flex,n=void 0===t?"1":t,a=e.label,i=e.margin,r=void 0===i?"5px 0":i,c=e.align,u=void 0===c?"left":c,f=e.children,d=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,o);return l.a.createElement("div",s({className:"visx-legend-label",style:{justifyContent:u,display:"flex",flex:n,margin:r}},d),f||a)}c.propTypes={align:i.a.string,label:i.a.node,flex:i.a.oneOfType([i.a.string,i.a.number]),margin:i.a.oneOfType([i.a.string,i.a.number]),children:i.a.node}},ASUk:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("ERkP"),i=n.n(a),r=n("ssgm");function l(e){return i.a.createElement(r.a,e)}},Iian:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("aWzz"),i=n.n(a),r=n("ERkP"),l=n.n(r),o=["flexDirection","alignItems","margin","display","children"];function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e){var t=e.flexDirection,n=void 0===t?"row":t,a=e.alignItems,i=void 0===a?"center":a,r=e.margin,c=void 0===r?"0":r,u=e.display,f=void 0===u?"flex":u,d=e.children,p=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,o);return l.a.createElement("div",s({className:"visx-legend-item",style:{display:f,alignItems:i,flexDirection:n,margin:c}},p),d)}c.propTypes={alignItems:i.a.string,margin:i.a.oneOfType([i.a.string,i.a.number]),children:i.a.node,display:i.a.string}},a7GN:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n("ERkP"),i=n.n(a),r=n("O94r"),l=n.n(r),o=n("5Nbk"),s=n("pn27"),c=["axisClassName","labelOffset","tickLabelProps","tickLength"];function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var f=function(){return{dy:"0.25em",fill:"#222",fontFamily:"Arial",fontSize:10,textAnchor:"middle"}};function d(e){var t=e.axisClassName,n=e.labelOffset,a=void 0===n?8:n,r=e.tickLabelProps,d=void 0===r?f:r,p=e.tickLength,h=void 0===p?8:p,m=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,c);return i.a.createElement(o.a,u({axisClassName:l()("visx-axis-bottom",t),labelOffset:a,orientation:s.a.bottom,tickLabelProps:d,tickLength:h},m))}},"dk/h":function(e){e.exports=JSON.parse('{"name":"@visx/demo-barstack","description":"Standalone visx stacked bar demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^17","@types/react-dom":"^17","@visx/axis":"latest","@visx/event":"latest","@visx/grid":"latest","@visx/group":"latest","@visx/legend":"latest","@visx/mock-data":"latest","@visx/responsive":"latest","@visx/scale":"latest","@visx/shape":"latest","@visx/tooltip":"latest","d3-time-format":"2.2.3","react":"^17","react-dom":"^17","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","barstack"]}')},i2lw:function(e,t,n){"use strict";function a(e){var t=e.scale,n=e.labelFormat;return function(e,a){return{datum:e,index:a,text:""+n(e,a),value:t(e)}}}n.d(t,"a",(function(){return a}))},ssgm:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var a=n("aWzz"),i=n.n(a),r=n("ERkP"),l=n.n(r),o=n("O94r"),s=n.n(o),c=n("Iian"),u=n("9Qsi");function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function d(e){var t=e.fill,n=e.width,a=e.height,i=e.style;return l.a.createElement("div",{style:f({width:n,height:a,background:t},i)})}d.propTypes={fill:i.a.string,width:i.a.oneOfType([i.a.string,i.a.number]),height:i.a.oneOfType([i.a.string,i.a.number])};var p=n("JmwF");function h(e){var t=e.fill,n=e.width,a=e.height,i=e.style,r="string"===typeof n||"undefined"===typeof n?0:n,o="string"===typeof a||"undefined"===typeof a?0:a,s=Math.max(r,o),c=s/2;return l.a.createElement("svg",{width:s,height:s},l.a.createElement(p.a,{top:c,left:c},l.a.createElement("circle",{r:c,fill:t,style:i})))}function m(e){var t=e.fill,n=e.width,a=e.height,i=e.style,r="string"===typeof a||"undefined"===typeof a?0:a,o="number"===typeof(null==i?void 0:i.strokeWidth)?null==i?void 0:i.strokeWidth:2;return l.a.createElement("svg",{width:n,height:a},l.a.createElement(p.a,{top:r/2-o/2},l.a.createElement("line",{x1:0,x2:n,y1:0,y2:0,stroke:t,strokeWidth:o,style:i})))}function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}h.propTypes={fill:i.a.string,width:i.a.oneOfType([i.a.string,i.a.number]),height:i.a.oneOfType([i.a.string,i.a.number])},m.propTypes={fill:i.a.string,width:i.a.oneOfType([i.a.string,i.a.number]),height:i.a.oneOfType([i.a.string,i.a.number])};var y=function(){};function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function v(e){var t=e.shape,n=void 0===t?d:t,a=e.width,i=e.height,r=e.margin,o=e.label,s=e.item,c=e.itemIndex,u=e.fill,f=e.size,p=e.shapeStyle;return l.a.createElement("div",{className:"visx-legend-shape",style:{display:"flex",width:f?f(b({},o)):a,height:f?f(b({},o)):i,margin:r}},function(e){var t=e.shape,n=void 0===t?"rect":t,a=e.fill,i=void 0===a?y:a,r=e.size,o=void 0===r?y:r,s=e.width,c=e.height,u=e.label,f=e.item,p=e.itemIndex,b=e.shapeStyle,v=void 0===b?y:b,x={width:s,height:c,item:f,itemIndex:p,label:u,fill:i(g({},u)),size:o(g({},u)),style:v(g({},u))};return"string"===typeof n?"circle"===n?l.a.createElement(h,x):"line"===n?l.a.createElement(m,x):l.a.createElement(d,x):l.a.isValidElement(n)?l.a.cloneElement(n,x):n?l.a.createElement(n,x):null}({shape:n,item:s,itemIndex:c,label:o,width:a,height:i,fill:u,shapeStyle:p}))}function x(e){return e&&"object"===typeof e&&"value"in e&&"undefined"!==typeof e.value?e.value:e}function O(e){return String(x(e))}v.propTypes={itemIndex:i.a.number.isRequired,margin:i.a.oneOfType([i.a.string,i.a.number]),width:i.a.oneOfType([i.a.string,i.a.number]),height:i.a.oneOfType([i.a.string,i.a.number])};var j=n("i2lw"),k=["className","style","scale","shape","domain","fill","size","labelFormat","labelTransform","shapeWidth","shapeHeight","shapeMargin","shapeStyle","labelAlign","labelFlex","labelMargin","itemMargin","direction","itemDirection","legendLabelProps","children"];function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var T={display:"flex"};function E(e){var t=e.className,n=e.style,a=void 0===n?T:n,i=e.scale,r=e.shape,o=e.domain,f=e.fill,d=void 0===f?O:f,p=e.size,h=void 0===p?O:p,m=e.labelFormat,g=void 0===m?x:m,y=e.labelTransform,b=void 0===y?j.a:y,E=e.shapeWidth,S=void 0===E?15:E,P=e.shapeHeight,N=void 0===P?15:P,z=e.shapeMargin,D=void 0===z?"2px 4px 2px 0":z,I=e.shapeStyle,L=e.labelAlign,M=void 0===L?"left":L,R=e.labelFlex,C=void 0===R?"1":R,W=e.labelMargin,V=void 0===W?"0 4px":W,A=e.itemMargin,F=void 0===A?"0":A,_=e.direction,J=void 0===_?"column":_,H=e.itemDirection,q=void 0===H?"row":H,G=e.legendLabelProps,Q=e.children,Y=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,k),B=o||("domain"in i?i.domain():[]),K=b({scale:i,labelFormat:g}),U=B.map(K);return Q?l.a.createElement(l.a.Fragment,null,Q(U)):l.a.createElement("div",{className:s()("visx-legend",t),style:w({},a,{flexDirection:J})},U.map((function(e,t){return l.a.createElement(c.a,w({key:"legend-"+e.text+"-"+t,margin:F,flexDirection:q},Y),l.a.createElement(v,{shape:r,height:N,width:S,margin:D,item:B[t],itemIndex:t,label:e,fill:d,size:h,shapeStyle:I}),l.a.createElement(u.a,w({label:e.text,flex:C,margin:V,align:M},G)))})))}E.propTypes={children:i.a.func,className:i.a.string,domain:i.a.array,shapeWidth:i.a.oneOfType([i.a.string,i.a.number]),shapeHeight:i.a.oneOfType([i.a.string,i.a.number]),shapeMargin:i.a.oneOfType([i.a.string,i.a.number]),labelAlign:i.a.string,labelFlex:i.a.oneOfType([i.a.string,i.a.number]),labelMargin:i.a.oneOfType([i.a.string,i.a.number]),itemMargin:i.a.oneOfType([i.a.string,i.a.number]),fill:i.a.func,size:i.a.func,shapeStyle:i.a.func}},wReH:function(e,t,n){"use strict";n.d(t,"c",(function(){return M})),n.d(t,"a",(function(){return R})),n.d(t,"b",(function(){return B}));var a=n("fGyu"),i=n("zjfJ"),r=n("jg1C"),l=n("ERkP"),o=n.n(l),s=n("gCxp"),c=n("JmwF"),u=n("aWzz"),f=n.n(u),d=n("O94r"),p=n.n(d),h=n("Ifh9"),m=n("eMuC"),g=["top","left","xScale","yScale","width","height","className","stroke","strokeWidth","strokeDasharray","numTicksRows","numTicksColumns","rowLineStyle","columnLineStyle","xOffset","yOffset","rowTickValues","columnTickValues"];function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function b(e){var t=e.top,n=e.left,a=e.xScale,i=e.yScale,r=e.width,l=e.height,s=e.className,u=e.stroke,f=e.strokeWidth,d=e.strokeDasharray,b=e.numTicksRows,v=e.numTicksColumns,x=e.rowLineStyle,O=e.columnLineStyle,j=e.xOffset,k=e.yOffset,w=e.rowTickValues,T=e.columnTickValues,E=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,g);return o.a.createElement(c.a,{className:p()("visx-grid",s),top:t,left:n},o.a.createElement(h.a,y({className:s,scale:i,width:r,stroke:u,strokeWidth:f,strokeDasharray:d,numTicks:b,lineStyle:x,offset:k,tickValues:w},E)),o.a.createElement(m.a,y({className:s,scale:a,height:l,stroke:u,strokeWidth:f,strokeDasharray:d,numTicks:v,lineStyle:O,offset:j,tickValues:T},E)))}b.propTypes={rowTickValues:f.a.array,columnTickValues:f.a.array};var v=n("a7GN"),x=n("s2H9"),O=n.n(x),j=n("cc+0"),k=n("67po"),w=n("D+es"),T=n("mHfT"),E=n("+fu8"),S=n("QnoR"),P=n("dPyl"),N=n("ASUk"),z=n("jpI8");function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var L,M="#a44afe",R="#eaedff",C={top:40,right:0,bottom:0,left:0},W=I(I({},E.b),{},{minWidth:60,backgroundColor:"rgba(0,0,0,0.9)",color:"white"}),V=O.a.slice(0,12),A=Object.keys(V[0]).filter((function(e){return"date"!==e})),F=V.reduce((function(e,t){var n=A.reduce((function(e,n){return e+=Number(t[n])}),0);return e.push(n),e}),[]),_=Object(T.b)("%Y-%m-%d"),J=Object(T.a)("%b %d"),H=function(e){return J(_(e))},q=function(e){return e.date},G=Object(j.a)({domain:V.map(q),padding:.2}),Q=Object(k.a)({domain:[0,Math.max.apply(Math,Object(a.a)(F))],nice:!0}),Y=Object(w.a)({domain:A,range:["#6c5efb","#c998ff",M]});function B(e){var t=e.width,n=e.height,a=e.events,i=void 0!==a&&a,l=e.margin,o=void 0===l?C:l,u=Object(S.a)(),f=u.tooltipOpen,d=u.tooltipLeft,p=u.tooltipTop,h=u.tooltipData,m=u.hideTooltip,g=u.showTooltip,y=Object(P.a)({scroll:!0}),x=y.containerRef,O=y.TooltipInPortal;if(t<10)return null;var j=t,k=n-o.top-100;return G.rangeRound([0,j]),Q.range([k,0]),t<10?null:Object(r.jsxs)("div",{style:{position:"relative"},children:[Object(r.jsxs)("svg",{ref:x,width:t,height:n,children:[Object(r.jsx)("rect",{x:0,y:0,width:t,height:n,fill:R,rx:14}),Object(r.jsx)(b,{top:o.top,left:o.left,xScale:G,yScale:Q,width:j,height:k,stroke:"black",strokeOpacity:.1,xOffset:G.bandwidth()/2}),Object(r.jsx)(c.a,{top:o.top,children:Object(r.jsx)(s.a,{data:V,keys:A,x:q,xScale:G,yScale:Q,color:Y,children:function(e){return e.map((function(e){return e.bars.map((function(t){return Object(r.jsx)("rect",{x:t.x,y:t.y,height:t.height,width:t.width,fill:t.color,onClick:function(){i&&alert("clicked: ".concat(JSON.stringify(t)))},onMouseLeave:function(){L=window.setTimeout((function(){m()}),300)},onMouseMove:function(e){L&&clearTimeout(L);var n=Object(z.a)(e),a=t.x+t.width/2;g({tooltipData:t,tooltipTop:null===n||void 0===n?void 0:n.y,tooltipLeft:a})}},"bar-stack-".concat(e.index,"-").concat(t.index))}))}))}})}),Object(r.jsx)(v.a,{top:k+o.top,scale:G,tickFormat:H,stroke:M,tickStroke:M,tickLabelProps:function(){return{fill:M,fontSize:11,textAnchor:"middle"}}})]}),Object(r.jsx)("div",{style:{position:"absolute",top:o.top/2-10,width:"100%",display:"flex",justifyContent:"center",fontSize:"14px"},children:Object(r.jsx)(N.a,{scale:Y,direction:"row",labelMargin:"0 15px 0 0"})}),f&&h&&Object(r.jsxs)(O,{top:p,left:d,style:W,children:[Object(r.jsx)("div",{style:{color:Y(h.key)},children:Object(r.jsx)("strong",{children:h.key})}),Object(r.jsxs)("div",{children:[h.bar.data[h.key],"\u2109"]}),Object(r.jsx)("div",{children:Object(r.jsx)("small",{children:H(q(h.bar.data))})})]})]})}try{B.displayName="Example",B.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"{ top: number; right: number; bottom: number; left: number; } | undefined"}},events:{defaultValue:{value:!1},description:"",name:"events",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-barstack/Example.tsx#Example"]={docgenInfo:B.__docgenInfo,name:"Example",path:"src/sandboxes/visx-barstack/Example.tsx#Example"})}catch(K){}}}]);