(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"/LEA":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("wx14"),c=a("iuhU"),i=a("ICNK"),s=a("Y53p"),o=a("H+2d"),m=a("ZeOK"),u=a("MZgk");function d(e){var t=e.children,a=e.className,n=e.content,m=Object(c.a)("header",a),u=Object(i.a)(d,e),b=Object(s.a)(d,e);return r.a.createElement(b,Object(l.a)({},u,{className:m}),o.a.isNil(t)?n:t)}d.handledProps=["as","children","className","content"],d.create=Object(u.e)(d,(function(e){return{content:e}}));var b=d;function p(e){var t=e.children,a=e.className,n=e.content,m=Object(c.a)("description",a),u=Object(i.a)(p,e),d=Object(s.a)(p,e);return r.a.createElement(d,Object(l.a)({},u,{className:m}),o.a.isNil(t)?n:t)}p.handledProps=["as","children","className","content"],p.create=Object(u.e)(p,(function(e){return{content:e}}));var E=p;function h(e){var t=e.children,a=e.className,n=e.content,m=Object(c.a)("extra",a),u=Object(i.a)(h,e),d=Object(s.a)(h,e);return r.a.createElement(d,Object(l.a)({},u,{className:m}),o.a.isNil(t)?n:t)}h.handledProps=["as","children","className","content"],h.create=Object(u.e)(h,(function(e){return{content:e}}));var f=h;function j(e){var t=e.children,a=e.className,n=e.content,m=Object(c.a)("meta",a),u=Object(i.a)(j,e),d=Object(s.a)(j,e);return r.a.createElement(d,Object(l.a)({},u,{className:m}),o.a.isNil(t)?n:t)}j.handledProps=["as","children","className","content"],j.create=Object(u.e)(j,(function(e){return{content:e}}));var O=j;function N(e){var t=e.children,a=e.className,n=e.content,u=e.description,d=e.extra,p=e.header,h=e.meta,j=e.verticalAlign,g=Object(c.a)(Object(m.f)(j),"content",a),A=Object(i.a)(N,e),v=Object(s.a)(N,e);return o.a.isNil(t)?r.a.createElement(v,Object(l.a)({},A,{className:g}),b.create(p,{autoGenerateKey:!1}),O.create(h,{autoGenerateKey:!1}),E.create(u,{autoGenerateKey:!1}),f.create(d,{autoGenerateKey:!1}),n):r.a.createElement(v,Object(l.a)({},A,{className:g}),t)}N.handledProps=["as","children","className","content","description","extra","header","meta","verticalAlign"];var g=N,A=a("zLVn"),v=a("zmn3");function C(e){var t=e.children,a=e.className,n=e.content,u=e.divided,d=e.items,b=e.link,p=e.relaxed,E=e.unstackable,h=Object(c.a)("ui",Object(m.a)(u,"divided"),Object(m.a)(b,"link"),Object(m.a)(E,"unstackable"),Object(m.b)(p,"relaxed"),"items",a),f=Object(i.a)(C,e),j=Object(s.a)(C,e);if(!o.a.isNil(t))return r.a.createElement(j,Object(l.a)({},f,{className:h}),t);if(!o.a.isNil(n))return r.a.createElement(j,Object(l.a)({},f,{className:h}),n);var O=Object(v.a)(d,(function(e){var t=e.childKey,a=Object(A.a)(e,["childKey"]),n=null!=t?t:[a.content,a.description,a.header,a.meta].join("-");return r.a.createElement(K,Object(l.a)({},a,{key:n}))}));return r.a.createElement(j,Object(l.a)({},f,{className:h}),O)}C.handledProps=["as","children","className","content","divided","items","link","relaxed","unstackable"];var k=C,P=a("5XkN");function I(e){var t=e.size,a=Object(i.a)(I,e);return r.a.createElement(P.a,Object(l.a)({},a,{size:t,ui:!!t,wrapped:!0}))}I.handledProps=["size"],I.create=Object(u.e)(I,(function(e){return{src:e}}));var y=I;function z(e){var t=e.children,a=e.className,n=e.content,m=e.description,u=e.extra,d=e.header,b=e.image,p=e.meta,E=Object(c.a)("item",a),h=Object(i.a)(z,e),f=Object(s.a)(z,e);return o.a.isNil(t)?r.a.createElement(f,Object(l.a)({},h,{className:E}),y.create(b,{autoGenerateKey:!1}),r.a.createElement(g,{content:n,description:m,extra:u,header:d,meta:p})):r.a.createElement(f,Object(l.a)({},h,{className:E}),t)}z.handledProps=["as","children","className","content","description","extra","header","image","meta"],z.Content=g,z.Description=E,z.Extra=f,z.Group=k,z.Header=b,z.Image=y,z.Meta=O;var K=z,x=a("z8k1"),R=a("yE/o"),M=a("Pefm"),w=a("aQu0"),Q=a("D1pA"),G=a("MqQV"),H=a("WYlG"),L=a("Wbzz"),S=a("Bl7J"),F=a("vrFN"),Y=a("KFFx"),B=a.n(Y);function D(e){var t=e.title,a=e.authors,n=e.date,l=e.url,c=e.abstract;return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,null,r.a.createElement(K.Content,null,r.a.createElement(K.Description,null,r.a.createElement("p",null,n.substring(0,4)),r.a.createElement("p",{style:{fontSize:"140%"}},l?r.a.createElement("a",{href:l,target:"_blank",rel:"noreferrer"},t):r.a.createElement(r.a.Fragment,null,t)),c?r.a.createElement("p",null,c):null,"Authors:",a.map((function(e){return r.a.createElement(x.a,{key:e.firstName+"-"+e.lastName},r.a.createElement(x.a.Content,{verticalAlign:"middle"},r.a.createElement(x.a.Header,null,e.firstName," ",e.lastName)))}))))))}function U(e){var t=e.title,a=e.authors,n=e.date,l=e.url,c=e.abstract,i=e.proceedingsTitle;return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,null,r.a.createElement(K.Content,null,r.a.createElement(K.Description,null,r.a.createElement("p",null,n.substring(0,4)),r.a.createElement("p",{style:{fontSize:"140%"}},l?r.a.createElement("a",{href:l,target:"_blank",rel:"noreferrer"},t):r.a.createElement(r.a.Fragment,null,t)),r.a.createElement("p",null,i),c?r.a.createElement("p",null,c):null,"Authors:",a.map((function(e){return r.a.createElement(x.a,{key:e.firstName+"-"+e.lastName},r.a.createElement(x.a.Content,{verticalAlign:"middle"},r.a.createElement(x.a.Header,null,e.firstName," ",e.lastName)))}))))))}function Z(e){var t=e.title,a=e.authors,n=e.date,l=e.url,c=e.abstract,i=e.thesisType,s=e.university,o=e.place;return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,null,r.a.createElement(K.Content,null,r.a.createElement(K.Description,null,r.a.createElement("p",null,n.substring(0,4)),r.a.createElement("p",null,i," - ",s," - ",o),r.a.createElement("p",{style:{fontSize:"140%"}},l?r.a.createElement("a",{href:l,target:"_blank",rel:"noreferrer"},t):r.a.createElement(r.a.Fragment,null,t)),c?r.a.createElement("p",null,c):null,"Authors:",a.map((function(e){return r.a.createElement(x.a,{key:e.firstName+"-"+e.lastName},r.a.createElement(x.a.Content,{verticalAlign:"middle"},r.a.createElement(x.a.Header,null,e.firstName," ",e.lastName)))}))))))}function T(e){var t=e.title,a=e.authors,n=e.date,l=e.url,c=e.abstract,i=e.publication,s=e.volume,o=e.issue,m=e.pages;return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,null,r.a.createElement(K.Content,null,r.a.createElement(K.Description,null,r.a.createElement("p",null,n.substring(0,4)),r.a.createElement("p",{style:{fontSize:"140%"}},l?r.a.createElement("a",{href:l,target:"_blank",rel:"noreferrer"},t):r.a.createElement(r.a.Fragment,null,t)),r.a.createElement("p",null,i,", ",s,", ",o," ",m?", "+m:null),c?r.a.createElement("p",null,c):null,"Authors:",a.map((function(e){return r.a.createElement(x.a,{key:e.firstName+"-"+e.lastName},r.a.createElement(x.a.Content,{verticalAlign:"middle"},r.a.createElement(x.a.Header,null,e.firstName," ",e.lastName)))}))))))}function J(e){var t=e.title,a=e.authors,n=e.date,l=e.url,c=e.abstract,i=e.reportType,s=e.reportNumber,o=e.seriesTitle;return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,null,r.a.createElement(K.Content,null,r.a.createElement(K.Description,null,r.a.createElement("p",null,n.substring(0,4)),r.a.createElement("p",null,i||"Report",", ",s,", ",o),r.a.createElement("p",{style:{fontSize:"140%"}},l?r.a.createElement("a",{href:l,target:"_blank",rel:"noreferrer"},t):r.a.createElement(r.a.Fragment,null,t)),c?r.a.createElement("p",null,c):null,"Authors:",a.map((function(e){return r.a.createElement(x.a,{key:e.firstName+"-"+e.lastName},r.a.createElement(x.a.Content,{verticalAlign:"middle"},r.a.createElement(x.a.Header,null,e.firstName," ",e.lastName)))}))))))}function X(e){var t=e.title,a=e.authors,n=e.date,l=e.url,c=e.abstract,i=e.websiteTitle,s=e.accessed;return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,null,r.a.createElement(K.Content,null,r.a.createElement(K.Description,null,r.a.createElement("p",null,n.substring(0,4)),r.a.createElement("p",{style:{fontSize:"140%"}},l?r.a.createElement("a",{href:l,target:"_blank",rel:"noreferrer"},t):r.a.createElement(r.a.Fragment,null,t)),r.a.createElement("p",null,r.a.createElement("a",{href:l,target:"_blank",rel:"noreferrer"},i)," - Last accessed: ",s),c?r.a.createElement("p",null,c):null,"Authors:",a.map((function(e){return r.a.createElement(x.a,{key:e.firstName+"-"+e.lastName},r.a.createElement(x.a.Content,{verticalAlign:"middle"},r.a.createElement(x.a.Header,null,e.firstName," ",e.lastName)))}))))))}function W(e){var t=e.title,a=e.authors,n=e.date,l=e.url,c=e.abstract,i=e.bookTitle,s=e.publisher,o=e.pages;return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,null,r.a.createElement(K.Content,null,r.a.createElement(K.Description,null,r.a.createElement("p",null,n.substring(0,4)),r.a.createElement("p",{style:{fontSize:"140%"}},l?r.a.createElement("a",{href:l,target:"_blank",rel:"noreferrer"},t):r.a.createElement(r.a.Fragment,null,t)),r.a.createElement("p",null,i,", ",s,", ",o),c?r.a.createElement("p",null,c):null,"Authors:",a.map((function(e){return r.a.createElement(x.a,{key:e.firstName+"-"+e.lastName},r.a.createElement(x.a.Content,{verticalAlign:"middle"},r.a.createElement(x.a.Header,null,e.firstName," ",e.lastName)))}))))))}t.default=function(e){var t=e.data,a=t.zoteroItems,n=t.allMdx.edges?t.allMdx.edges.length:0,l=t.refs.edges.filter((function(e){return e.node.slug==="references/"+a.citationKey}));return r.a.createElement(S.a,null,r.a.createElement(F.a,{title:a.cirationKey}),r.a.createElement(R.a,{text:!0,style:{marginTop:"100px",marginBottom:"100px"}},r.a.createElement(M.a,null,r.a.createElement(M.a.Section,{link:!0,as:L.Link,to:"/"},"Home"),r.a.createElement(M.a.Divider,{icon:"right chevron"}),r.a.createElement(M.a.Section,{link:!0,as:L.Link,to:"/references"},"References"),r.a.createElement(M.a.Divider,{icon:"right chevron"}),r.a.createElement(M.a.Section,{active:!0},a.citationKey)),r.a.createElement(w.a,{as:"h1",dividing:!0},r.a.createElement(Q.a,{name:"bookmark"}),r.a.createElement(w.a.Content,null,a.citationKey)),function(e){if(!e||!e.data)return r.a.createElement(r.a.Fragment,null,"Reference not found");switch(e.data.itemType){case"bookSection":return r.a.createElement(W,{title:e.data.title,date:e.data.parsedDate,authors:e.data.creators,url:e.data.url,abstract:e.data.abstractNote,bookTitle:e.data.bookTitle,publisher:e.data.publisher,pages:e.data.pages});case"webpage":return r.a.createElement(X,{title:e.data.title,date:e.data.parsedDate,authors:e.data.creators,url:e.data.url,abstract:e.data.abstractNote,websiteTitle:e.data.websiteTitle,accessed:e.data.accessDate});case"report":return r.a.createElement(J,{title:e.data.title,date:e.data.parsedDate,authors:e.data.creators,url:e.data.url,abstract:e.data.abstractNote,reportType:e.data.reportType,reportNumber:e.data.reportNumber,seriesTitle:e.data.seriesTitle});case"thesis":return r.a.createElement(Z,{title:e.data.title,date:e.data.parsedDate,authors:e.data.creators,url:e.data.url,abstract:e.data.abstractNote,thesisType:e.data.thesisType,university:e.data.university,place:e.data.place});case"journalArticle":return r.a.createElement(T,{title:e.data.title,date:e.data.parsedDate,authors:e.data.creators,url:e.data.url,abstract:e.data.abstractNote,publication:e.data.publicationTitle,volume:e.data.volume,issue:e.data.issue,pages:e.data.numPages});case"conferencePaper":return r.a.createElement(U,{title:e.data.title,date:e.data.parsedDate,authors:e.data.creators,url:e.data.url,abstract:e.data.abstractNote,proceedingsTitle:e.data.proceedingsTitle});default:return r.a.createElement(D,{title:e.data.title,date:e.data.parsedDate,authors:e.data.creators,url:e.data.url,abstract:e.data.abstractNote})}}(a),l.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{as:"h2",dividing:!0},r.a.createElement(w.a.Content,null,"Study Information"),r.a.createElement(w.a.Subheader,null,"Manually extracted from the paper by the Progmiscon.org team")),r.a.createElement(w.a,{as:"h3"},r.a.createElement(w.a.Content,null,"Programming Languages")),r.a.createElement("p",null,e.node.frontmatter.langs.map((function(e){return r.a.createElement(G.a,{key:e,color:"red"},e)}))),r.a.createElement(w.a,{as:"h3"},r.a.createElement(w.a.Content,null,"Method")),r.a.createElement("p",null,e.node.frontmatter.method),r.a.createElement(w.a,{as:"h3"},r.a.createElement(w.a.Content,null,"Subjects")),r.a.createElement("p",null,e.node.frontmatter.subjects),e.node.frontmatter.artifact?r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{as:"h3"},r.a.createElement(w.a.Content,null,"Artifact")),r.a.createElement("a",{href:e.node.frontmatter.artifact},e.node.frontmatter.artifact)):null)})),r.a.createElement(w.a,{as:"h2",dividing:!0},r.a.createElement(w.a.Content,null,"Related Misconceptions"),r.a.createElement(w.a.Subheader,null,"Referenced by ",n," Misconception",1===n?"":"s")),r.a.createElement(H.a,{selection:!0,verticalAlign:"middle"},t.allMdx.edges.map((function(e){return r.a.createElement(H.a.Item,{as:L.Link,to:"/"+e.node.slug,key:e.node.slug},r.a.createElement("img",{className:"ui image",alt:"Misconception",width:"20",src:B.a}),r.a.createElement(H.a.Content,null,r.a.createElement(H.a.Header,null,r.a.createElement("span",{style:{color:"#4183c4"}},e.node.fields.name)),e.node.frontmatter.shortDescription))})))))}},BC5K:function(e,t,a){"use strict";var n=a("wx14"),r=a("iuhU"),l=a("q1tI"),c=a.n(l),i=a("ZeOK"),s=a("ICNK"),o=a("Y53p"),m=a("H+2d");function u(e){var t=e.children,a=e.className,l=e.content,d=e.textAlign,b=Object(r.a)(Object(i.d)(d),"header",a),p=Object(s.a)(u,e),E=Object(o.a)(u,e);return c.a.createElement(E,Object(n.a)({},p,{className:b}),m.a.isNil(t)?l:t)}u.handledProps=["as","children","className","content","textAlign"],t.a=u},Bzvp:function(e,t,a){"use strict";var n=a("wx14"),r=a("zmn3"),l=a("iuhU"),c=a("q1tI"),i=a.n(c),s=a("ZeOK"),o=a("ICNK"),m=a("Y53p"),u=a("H+2d"),d=a("z8k1");function b(e){var t=e.centered,a=e.children,c=e.className,p=e.content,E=e.doubling,h=e.items,f=e.itemsPerRow,j=e.stackable,O=e.textAlign,N=Object(l.a)("ui",Object(s.a)(t,"centered"),Object(s.a)(E,"doubling"),Object(s.a)(j,"stackable"),Object(s.d)(O),Object(s.g)(f),"cards",c),g=Object(o.a)(b,e),A=Object(m.a)(b,e);if(!u.a.isNil(a))return i.a.createElement(A,Object(n.a)({},g,{className:N}),a);if(!u.a.isNil(p))return i.a.createElement(A,Object(n.a)({},g,{className:N}),p);var v=Object(r.a)(h,(function(e){var t,a=null!=(t=e.key)?t:[e.header,e.description].join("-");return i.a.createElement(d.a,Object(n.a)({key:a},e))}));return i.a.createElement(A,Object(n.a)({},g,{className:N}),v)}b.handledProps=["as","centered","children","className","content","doubling","items","itemsPerRow","stackable","textAlign"],t.a=b},KFFx:function(e,t){e.exports="data:image/png;base64,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"},Pbsi:function(e,t,a){"use strict";var n=a("wx14"),r=a("iuhU"),l=a("q1tI"),c=a.n(l),i=a("ZeOK"),s=a("ICNK"),o=a("Y53p"),m=a("H+2d");function u(e){var t=e.children,a=e.className,l=e.content,d=e.textAlign,b=Object(r.a)(Object(i.d)(d),"meta",a),p=Object(s.a)(u,e),E=Object(o.a)(u,e);return c.a.createElement(E,Object(n.a)({},p,{className:b}),m.a.isNil(t)?l:t)}u.handledProps=["as","children","className","content","textAlign"],t.a=u},Pefm:function(e,t,a){"use strict";var n=a("wx14"),r=a("OZf9"),l=a("iuhU"),c=a("q1tI"),i=a.n(c),s=a("ICNK"),o=a("Y53p"),m=a("H+2d"),u=a("LrWZ"),d=a("MZgk"),b=a("D1pA");function p(e){var t=e.children,a=e.className,r=e.content,c=e.icon,d=Object(l.a)("divider",a),E=Object(s.a)(p,e),h=Object(o.a)(p,e);return Object(u.a)(c)?Object(u.a)(r)?i.a.createElement(h,Object(n.a)({},E,{className:d}),m.a.isNil(t)?"/":t):i.a.createElement(h,Object(n.a)({},E,{className:d}),r):b.a.create(c,{defaultProps:Object(n.a)({},E,{className:d}),autoGenerateKey:!1})}p.handledProps=["as","children","className","content","icon"],p.create=Object(d.e)(p,(function(e){return{icon:e}}));var E=p,h=a("dI71"),f=a("JpOH"),j=a("ZeOK"),O=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).computeElementType=function(){var e=t.props,a=e.link,n=e.onClick;if(a||n)return"a"},t.handleClick=function(e){return Object(f.a)(t.props,"onClick",e,t.props)},t}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,a=e.active,r=e.children,c=e.className,u=e.content,d=e.href,b=Object(l.a)(Object(j.a)(a,"active"),"section",c),p=Object(s.a)(t,this.props),E=Object(o.a)(t,this.props,this.computeElementType);return i.a.createElement(E,Object(n.a)({},p,{className:b,href:d,onClick:this.handleClick}),m.a.isNil(r)?u:r)},t}(c.Component);function N(e){var t=e.children,a=e.className,c=e.divider,u=e.icon,d=e.sections,b=e.size,p=Object(l.a)("ui",b,"breadcrumb",a),h=Object(s.a)(N,e),f=Object(o.a)(N,e);if(!m.a.isNil(t))return i.a.createElement(f,Object(n.a)({},h,{className:p}),t);var j=[];return Object(r.a)(d,(function(e,t){var a=O.create(e);if(j.push(a),t!==d.length-1){var n=a.key+"_divider"||!1;j.push(E.create({content:c,icon:u,key:n}))}})),i.a.createElement(f,Object(n.a)({},h,{className:p}),j)}O.handledProps=["active","as","children","className","content","href","link","onClick"],O.create=Object(d.e)(O,(function(e){return{content:e,link:!0}})),N.handledProps=["as","children","className","divider","icon","sections","size"],N.Divider=E,N.Section=O;t.a=N},fGTK:function(e,t,a){"use strict";var n=a("wx14"),r=a("iuhU"),l=a("q1tI"),c=a.n(l),i=a("ZeOK"),s=a("ICNK"),o=a("Y53p"),m=a("H+2d"),u=a("MZgk"),d=a("mas8"),b=a("BC5K"),p=a("Pbsi");function E(e){var t=e.children,a=e.className,l=e.content,h=e.description,f=e.extra,j=e.header,O=e.meta,N=e.textAlign,g=Object(r.a)(Object(i.a)(f,"extra"),Object(i.d)(N),"content",a),A=Object(s.a)(E,e),v=Object(o.a)(E,e);return m.a.isNil(t)?m.a.isNil(l)?c.a.createElement(v,Object(n.a)({},A,{className:g}),Object(u.d)(b.a,(function(e){return{content:e}}),j,{autoGenerateKey:!1}),Object(u.d)(p.a,(function(e){return{content:e}}),O,{autoGenerateKey:!1}),Object(u.d)(d.a,(function(e){return{content:e}}),h,{autoGenerateKey:!1})):c.a.createElement(v,Object(n.a)({},A,{className:g}),l):c.a.createElement(v,Object(n.a)({},A,{className:g}),t)}E.handledProps=["as","children","className","content","description","extra","header","meta","textAlign"],t.a=E},mas8:function(e,t,a){"use strict";var n=a("wx14"),r=a("iuhU"),l=a("q1tI"),c=a.n(l),i=a("ZeOK"),s=a("ICNK"),o=a("Y53p"),m=a("H+2d");function u(e){var t=e.children,a=e.className,l=e.content,d=e.textAlign,b=Object(r.a)(Object(i.d)(d),"description",a),p=Object(s.a)(u,e),E=Object(o.a)(u,e);return c.a.createElement(E,Object(n.a)({},p,{className:b}),m.a.isNil(t)?l:t)}u.handledProps=["as","children","className","content","textAlign"],t.a=u},z8k1:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var n=a("wx14"),r=a("dI71"),l=a("iuhU"),c=a("q1tI"),i=a.n(c),s=a("ZeOK"),o=a("ICNK"),m=a("Y53p"),u=a("H+2d"),d=a("5XkN"),b=a("fGTK"),p=a("mas8"),E=a("Bzvp"),h=a("BC5K"),f=a("Pbsi"),j=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).handleClick=function(e){var a=t.props.onClick;a&&a(e,t.props)},t}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props,a=e.centered,r=e.children,c=e.className,p=e.color,E=e.content,h=e.description,f=e.extra,j=e.fluid,O=e.header,N=e.href,g=e.image,A=e.link,v=e.meta,C=e.onClick,k=e.raised,P=Object(l.a)("ui",p,Object(s.a)(a,"centered"),Object(s.a)(j,"fluid"),Object(s.a)(A,"link"),Object(s.a)(k,"raised"),"card",c),I=Object(o.a)(t,this.props),y=Object(m.a)(t,this.props,(function(){if(C)return"a"}));return u.a.isNil(r)?u.a.isNil(E)?i.a.createElement(y,Object(n.a)({},I,{className:P,href:N,onClick:this.handleClick}),d.a.create(g,{autoGenerateKey:!1,defaultProps:{ui:!1,wrapped:!0}}),(h||O||v)&&i.a.createElement(b.a,{description:h,header:O,meta:v}),f&&i.a.createElement(b.a,{extra:!0},f)):i.a.createElement(y,Object(n.a)({},I,{className:P,href:N,onClick:this.handleClick}),E):i.a.createElement(y,Object(n.a)({},I,{className:P,href:N,onClick:this.handleClick}),r)},t}(c.Component);j.handledProps=["as","centered","children","className","color","content","description","extra","fluid","header","href","image","link","meta","onClick","raised"],j.Content=b.a,j.Description=p.a,j.Group=E.a,j.Header=h.a,j.Meta=f.a}}]);
//# sourceMappingURL=component---src-templates-reference-js-16e24bd96f966341488f.js.map