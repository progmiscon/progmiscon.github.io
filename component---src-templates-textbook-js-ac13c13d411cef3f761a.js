(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"A2+M":function(e,t,n){var a=n("X8hv");e.exports={MDXRenderer:a}},BIHw:function(e,t,n){"use strict";var a=n("I+eb"),r=n("or9q"),c=n("ewvW"),o=n("UMSQ"),i=n("ppGB"),l=n("ZfDv");a({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=c(this),n=o(t.length),a=l(t,0);return a.length=r(a,t,t,n,0,void 0===e?1:i(e)),a}})},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var a=n("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},Pefm:function(e,t,n){"use strict";var a=n("wx14"),r=n("OZf9"),c=n("iuhU"),o=n("q1tI"),i=n.n(o),l=n("ICNK"),s=n("Y53p"),u=n("H+2d"),m=n("LrWZ"),p=n("MZgk"),f=n("D1pA");function b(e){var t=e.children,n=e.className,r=e.content,o=e.icon,p=Object(c.a)("divider",n),d=Object(l.a)(b,e),h=Object(s.a)(b,e);return Object(m.a)(o)?Object(m.a)(r)?i.a.createElement(h,Object(a.a)({},d,{className:p}),u.a.isNil(t)?"/":t):i.a.createElement(h,Object(a.a)({},d,{className:p}),r):f.a.create(o,{defaultProps:Object(a.a)({},d,{className:p}),autoGenerateKey:!1})}b.handledProps=["as","children","className","content","icon"],b.create=Object(p.e)(b,(function(e){return{icon:e}}));var d=b,h=n("dI71"),O=n("JpOH"),j=n("ZeOK"),v=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).computeElementType=function(){var e=t.props,n=e.link,a=e.onClick;if(n||a)return"a"},t.handleClick=function(e){return Object(O.a)(t.props,"onClick",e,t.props)},t}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,n=e.active,r=e.children,o=e.className,m=e.content,p=e.href,f=Object(c.a)(Object(j.a)(n,"active"),"section",o),b=Object(l.a)(t,this.props),d=Object(s.a)(t,this.props,this.computeElementType);return i.a.createElement(d,Object(a.a)({},b,{className:f,href:p,onClick:this.handleClick}),u.a.isNil(r)?m:r)},t}(o.Component);function y(e){var t=e.children,n=e.className,o=e.divider,m=e.icon,p=e.sections,f=e.size,b=Object(c.a)("ui",f,"breadcrumb",n),h=Object(l.a)(y,e),O=Object(s.a)(y,e);if(!u.a.isNil(t))return i.a.createElement(O,Object(a.a)({},h,{className:b}),t);var j=[];return Object(r.a)(p,(function(e,t){var n=v.create(e);if(j.push(n),t!==p.length-1){var a=n.key+"_divider"||!1;j.push(d.create({content:o,icon:m,key:a}))}})),i.a.createElement(O,Object(a.a)({},h,{className:b}),j)}v.handledProps=["active","as","children","className","content","href","link","onClick"],v.create=Object(p.e)(v,(function(e){return{content:e,link:!0}})),y.handledProps=["as","children","className","divider","icon","sections","size"],y.Divider=d,y.Section=v;t.a=y},QGkA:function(e,t,n){n("RNIs")("flat")},RIqP:function(e,t,n){var a=n("Ijbi"),r=n("EbDI"),c=n("ZhPi"),o=n("Bnag");e.exports=function(e){return a(e)||r(e)||c(e)||o()}},SksO:function(e,t){function n(t,a){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,a)}e.exports=n},TbSc:function(e,t,n){"use strict";n.d(t,"a",(function(){return k}));var a=n("wx14"),r=n("dI71"),c=n("LrWZ"),o=n("iuhU"),i=n("q1tI"),l=n.n(i),s=n("ZeOK"),u=n("ICNK"),m=n("Y53p"),p=n("H+2d"),f=n("MZgk"),b=n("D1pA");function d(e){var t=e.children,n=e.className,r=e.content,c=Object(o.a)("content",n),i=Object(u.a)(d,e),s=Object(m.a)(d,e);return l.a.createElement(s,Object(a.a)({},i,{className:c}),p.a.isNil(t)?r:t)}d.handledProps=["as","children","className","content"];var h=d;function O(e){var t=e.children,n=e.className,r=e.content,c=Object(o.a)("header",n),i=Object(u.a)(O,e),s=Object(m.a)(O,e);return l.a.createElement(s,Object(a.a)({},i,{className:c}),p.a.isNil(t)?r:t)}O.handledProps=["as","children","className","content"],O.create=Object(f.e)(O,(function(e){return{content:e}}));var j=O,v=n("zmn3");function y(e){var t=e.children,n=e.className,r=e.content,c=Object(o.a)("content",n),i=Object(u.a)(y,e),s=Object(m.a)(y,e);return l.a.createElement(s,Object(a.a)({},i,{className:c}),p.a.isNil(t)?r:t)}y.handledProps=["as","children","className","content"],y.defaultProps={as:"li"},y.create=Object(f.e)(y,(function(e){return{content:e}}));var E=y;function g(e){var t=e.children,n=e.className,r=e.items,c=Object(o.a)("list",n),i=Object(u.a)(g,e),s=Object(m.a)(g,e);return l.a.createElement(s,Object(a.a)({},i,{className:c}),p.a.isNil(t)?Object(v.a)(r,E.create):t)}g.handledProps=["as","children","className","items"],g.defaultProps={as:"ul"},g.create=Object(f.e)(g,(function(e){return{items:e}}));var N=g,k=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).handleDismiss=function(e){var n=t.props.onDismiss;n&&n(e,t.props)},t}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props,n=e.attached,r=e.children,i=e.className,d=e.color,O=e.compact,v=e.content,y=e.error,E=e.floating,g=e.header,k=e.hidden,P=e.icon,w=e.info,x=e.list,D=e.negative,I=e.onDismiss,S=e.positive,A=e.size,C=e.success,B=e.visible,M=e.warning,R=Object(o.a)("ui",d,A,Object(s.a)(O,"compact"),Object(s.a)(y,"error"),Object(s.a)(E,"floating"),Object(s.a)(k,"hidden"),Object(s.a)(P,"icon"),Object(s.a)(w,"info"),Object(s.a)(D,"negative"),Object(s.a)(S,"positive"),Object(s.a)(C,"success"),Object(s.a)(B,"visible"),Object(s.a)(M,"warning"),Object(s.b)(n,"attached"),"message",i),X=I&&l.a.createElement(b.a,{name:"close",onClick:this.handleDismiss}),Z=Object(u.a)(t,this.props),G=Object(m.a)(t,this.props);return p.a.isNil(r)?l.a.createElement(G,Object(a.a)({},Z,{className:R}),X,b.a.create(P,{autoGenerateKey:!1}),(!Object(c.a)(g)||!Object(c.a)(v)||!Object(c.a)(x))&&l.a.createElement(h,null,j.create(g,{autoGenerateKey:!1}),N.create(x,{autoGenerateKey:!1}),Object(f.c)(v,{autoGenerateKey:!1}))):l.a.createElement(G,Object(a.a)({},Z,{className:R}),X,r)},t}(i.Component);k.handledProps=["as","attached","children","className","color","compact","content","error","floating","header","hidden","icon","info","list","negative","onDismiss","positive","size","success","visible","warning"],k.Content=h,k.Header=j,k.List=N,k.Item=E},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}},X8hv:function(e,t,n){var a=n("sXyB"),r=n("RIqP"),c=n("lSNA"),o=n("8OQS");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=n("q1tI"),u=n("7ljp").mdx,m=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,c=o(e,["scope","children"]),i=m(t),p=s.useMemo((function(){if(!n)return null;var e=l({React:s,mdx:u},i),t=Object.keys(e),c=t.map((function(t){return e[t]}));return a(Function,["_fn"].concat(r(t),[""+n])).apply(void 0,[{}].concat(r(c)))}),[n,t]);return s.createElement(p,l({},c))}},XeB4:function(e,t,n){"use strict";n.r(t);n("BIHw"),n("QGkA");var a=n("q1tI"),r=n.n(a),c=n("yE/o"),o=n("Pefm"),i=n("aQu0"),l=n("D1pA"),s=n("TbSc"),u=n("WYlG"),m=n("7ljp"),p=n("A2+M"),f=n("Wbzz"),b=n("Bl7J"),d=n("vrFN"),h=n("rXwv");t.default=function(e){var t=e.data.allMdx.nodes[0],n=[t.frontmatter.subtitle,t.frontmatter.edition,t.frontmatter.language].map((function(e){return e?[e]:[]})).flat().join(", ");return r.a.createElement(b.a,null,r.a.createElement(d.a,{title:t.frontmatter.pl+" - "+t.parent.name}),r.a.createElement(c.a,{text:!0,style:{marginTop:"100px",marginBottom:"100px"}},r.a.createElement(o.a,null,r.a.createElement(o.a.Section,{link:!0,as:f.Link,to:"/"},"Home"),r.a.createElement(o.a.Divider,{icon:"right chevron"}),r.a.createElement(o.a.Section,{link:!0,as:f.Link,to:"/textbooks"},"Textbooks"),t.frontmatter.pl?r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a.Divider,{icon:"right chevron"}),r.a.createElement(o.a.Section,null,t.frontmatter.pl)):"",r.a.createElement(o.a.Divider,{icon:"right chevron"}),r.a.createElement(o.a.Section,{active:!0},t.parent.name)),r.a.createElement(i.a,{as:"h1",dividing:!0},r.a.createElement(l.a,{name:"book"}),r.a.createElement(i.a.Content,null,r.a.createElement(i.a.Subheader,null,t.frontmatter.author),t.frontmatter.title,r.a.createElement(i.a.Subheader,null,n?r.a.createElement(r.a.Fragment,null,n,r.a.createElement("br",null)):""))),r.a.createElement(m.MDXProvider,{components:!0},r.a.createElement(p.MDXRenderer,null,t.body)),r.a.createElement(s.a,{icon:!0,info:!0},r.a.createElement(l.a,{name:"info circle"}),r.a.createElement(s.a.Content,null,r.a.createElement(s.a.Header,null,"Find this Book"),r.a.createElement("p",null,r.a.createElement("a",{href:t.frontmatter.home},t.frontmatter.home)))),t.frontmatter.sections?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{marginTop:"1em"}},r.a.createElement("p",null,"Our ",t.frontmatter.pl," misconceptions relate to the following sections of that textbook:")),r.a.createElement(u.a,{selection:!0,verticalAlign:"middle"},t.frontmatter.sections.map((function(e,n){return r.a.createElement(u.a.Item,{as:f.Link,to:"/textbooks/"+t.parent.name+"/"+e.section,key:n},r.a.createElement(u.a.Icon,{name:"book",verticalAlign:"middle"}),r.a.createElement(u.a.Content,null,r.a.createElement(u.a.Content,{floated:"right"},r.a.createElement(h.a,{textbook:t.parent.name+"/"+e.section})),e.section,r.a.createElement(u.a.Header,null,r.a.createElement("span",{style:{color:"#4183c4"}},e.title))))})))):""))}},ZhPi:function(e,t,n){var a=n("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},sXyB:function(e,t,n){var a=n("SksO"),r=n("b48C");function c(t,n,o){return r()?e.exports=c=Reflect.construct:e.exports=c=function(e,t,n){var r=[null];r.push.apply(r,t);var c=new(Function.bind.apply(e,r));return n&&a(c,n.prototype),c},c.apply(null,arguments)}e.exports=c}}]);
//# sourceMappingURL=component---src-templates-textbook-js-ac13c13d411cef3f761a.js.map