(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{FPcz:function(e,t,a){"use strict";a.r(t);var c=a("q1tI"),n=a.n(c),l=a("yE/o"),r=a("Pefm"),i=a("aQu0"),s=a("D1pA"),o=a("ikXu"),b=a("Wbzz"),d=a("Bl7J"),u=a("vrFN");t.default=function(e){var t=e.data;return n.a.createElement(d.a,null,n.a.createElement(u.a,{title:"Textbooks"}),n.a.createElement(l.a,{text:!0,style:{marginTop:"100px",marginBottom:"100px"}},n.a.createElement(r.a,null,n.a.createElement(r.a.Section,{link:!0,as:b.Link,to:"/"},"Home"),n.a.createElement(r.a.Divider,{icon:"right chevron"}),n.a.createElement(r.a.Section,{active:!0},"Textbooks")),n.a.createElement(i.a,{as:"h1",dividing:!0},n.a.createElement(s.a,{name:"book"}),n.a.createElement(i.a.Content,null,"Textbooks",n.a.createElement(i.a.Subheader,null,"Find Misconceptions by Textbook Section"))),n.a.createElement("p",null,"If you teach using one of the textbooks below, you can look up which misconceptions might appear when your students work through each chapter of that book."),n.a.createElement(o.a,{celled:!0,compact:!0,collapsing:!0},n.a.createElement(o.a.Header,null,n.a.createElement(o.a.Row,null,n.a.createElement(o.a.HeaderCell,null,"Language"),n.a.createElement(o.a.HeaderCell,null,"Textbook"))),n.a.createElement(o.a.Body,null,t.allMdx.nodes.filter((function(e){return"draft"!==e.frontmatter.status})).map((function(e,t){return n.a.createElement(o.a.Row,{key:t},n.a.createElement(o.a.Cell,null,e.frontmatter.pl),n.a.createElement(o.a.Cell,null,e.frontmatter.author,n.a.createElement("br",null),n.a.createElement(b.Link,{to:"/textbooks/"+e.parent.name},n.a.createElement("strong",null,e.frontmatter.title),n.a.createElement("br",null),e.frontmatter.subtitle?e.frontmatter.subtitle+", ":null,e.frontmatter.edition,e.frontmatter.language?" ("+e.frontmatter.language+")":null)))}))))))}},Pefm:function(e,t,a){"use strict";var c=a("wx14"),n=a("OZf9"),l=a("iuhU"),r=a("q1tI"),i=a.n(r),s=a("ICNK"),o=a("Y53p"),b=a("H+2d"),d=a("LrWZ"),u=a("MZgk"),m=a("D1pA");function O(e){var t=e.children,a=e.className,n=e.content,r=e.icon,u=Object(l.a)("divider",a),j=Object(s.a)(O,e),p=Object(o.a)(O,e);return Object(d.a)(r)?Object(d.a)(n)?i.a.createElement(p,Object(c.a)({},j,{className:u}),b.a.isNil(t)?"/":t):i.a.createElement(p,Object(c.a)({},j,{className:u}),n):m.a.create(r,{defaultProps:Object(c.a)({},j,{className:u}),autoGenerateKey:!1})}O.handledProps=["as","children","className","content","icon"],O.create=Object(u.e)(O,(function(e){return{icon:e}}));var j=O,p=a("dI71"),f=a("JpOH"),h=a("ZeOK"),v=function(e){function t(){for(var t,a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(t=e.call.apply(e,[this].concat(c))||this).computeElementType=function(){var e=t.props,a=e.link,c=e.onClick;if(a||c)return"a"},t.handleClick=function(e){return Object(f.a)(t.props,"onClick",e,t.props)},t}return Object(p.a)(t,e),t.prototype.render=function(){var e=this.props,a=e.active,n=e.children,r=e.className,d=e.content,u=e.href,m=Object(l.a)(Object(h.a)(a,"active"),"section",r),O=Object(s.a)(t,this.props),j=Object(o.a)(t,this.props,this.computeElementType);return i.a.createElement(j,Object(c.a)({},O,{className:m,href:u,onClick:this.handleClick}),b.a.isNil(n)?d:n)},t}(r.Component);function g(e){var t=e.children,a=e.className,r=e.divider,d=e.icon,u=e.sections,m=e.size,O=Object(l.a)("ui",m,"breadcrumb",a),p=Object(s.a)(g,e),f=Object(o.a)(g,e);if(!b.a.isNil(t))return i.a.createElement(f,Object(c.a)({},p,{className:O}),t);var h=[];return Object(n.a)(u,(function(e,t){var a=v.create(e);if(h.push(a),t!==u.length-1){var c=a.key+"_divider"||!1;h.push(j.create({content:r,icon:d,key:c}))}})),i.a.createElement(f,Object(c.a)({},p,{className:O}),h)}v.handledProps=["active","as","children","className","content","href","link","onClick"],v.create=Object(u.e)(v,(function(e){return{content:e,link:!0}})),g.handledProps=["as","children","className","divider","icon","sections","size"],g.Divider=j,g.Section=v;t.a=g},ikXu:function(e,t,a){"use strict";var c=a("wx14"),n=a("zmn3"),l=a("iuhU"),r=a("q1tI"),i=a.n(r),s=a("ZeOK"),o=a("ICNK"),b=a("Y53p"),d=a("H+2d");function u(e){var t=e.children,a=e.className,n=Object(l.a)(a),r=Object(o.a)(u,e),s=Object(b.a)(u,e);return i.a.createElement(s,Object(c.a)({},r,{className:n}),t)}u.handledProps=["as","children","className"],u.defaultProps={as:"tbody"};var m=u,O=a("MZgk"),j=a("D1pA");function p(e){var t=e.active,a=e.children,n=e.className,r=e.collapsing,u=e.content,m=e.disabled,O=e.error,f=e.icon,h=e.negative,v=e.positive,g=e.selectable,E=e.singleLine,N=e.textAlign,k=e.verticalAlign,w=e.warning,P=e.width,x=Object(l.a)(Object(s.a)(t,"active"),Object(s.a)(r,"collapsing"),Object(s.a)(m,"disabled"),Object(s.a)(O,"error"),Object(s.a)(h,"negative"),Object(s.a)(v,"positive"),Object(s.a)(g,"selectable"),Object(s.a)(E,"single line"),Object(s.a)(w,"warning"),Object(s.d)(N),Object(s.f)(k),Object(s.g)(P,"wide"),n),y=Object(o.a)(p,e),A=Object(b.a)(p,e);return d.a.isNil(a)?i.a.createElement(A,Object(c.a)({},y,{className:x}),j.a.create(f),u):i.a.createElement(A,Object(c.a)({},y,{className:x}),a)}p.handledProps=["active","as","children","className","collapsing","content","disabled","error","icon","negative","positive","selectable","singleLine","textAlign","verticalAlign","warning","width"],p.defaultProps={as:"td"},p.create=Object(O.e)(p,(function(e){return{content:e}}));var f=p;function h(e){var t=e.children,a=e.className,n=e.content,r=e.fullWidth,u=Object(l.a)(Object(s.a)(r,"full-width"),a),m=Object(o.a)(h,e),O=Object(b.a)(h,e);return i.a.createElement(O,Object(c.a)({},m,{className:u}),d.a.isNil(t)?n:t)}h.handledProps=["as","children","className","content","fullWidth"],h.defaultProps={as:"thead"};var v=h;function g(e){var t=e.as,a=Object(o.a)(g,e);return i.a.createElement(v,Object(c.a)({},a,{as:t}))}g.handledProps=["as"],g.defaultProps={as:"tfoot"};var E=g;function N(e){var t=e.as,a=e.className,n=e.sorted,r=Object(l.a)(Object(s.e)(n,"sorted"),a),b=Object(o.a)(N,e);return i.a.createElement(f,Object(c.a)({},b,{as:t,className:r}))}N.handledProps=["as","className","sorted"],N.defaultProps={as:"th"};var k=N;function w(e){var t=e.active,a=e.cellAs,r=e.cells,u=e.children,m=e.className,O=e.disabled,j=e.error,p=e.negative,h=e.positive,v=e.textAlign,g=e.verticalAlign,E=e.warning,N=Object(l.a)(Object(s.a)(t,"active"),Object(s.a)(O,"disabled"),Object(s.a)(j,"error"),Object(s.a)(p,"negative"),Object(s.a)(h,"positive"),Object(s.a)(E,"warning"),Object(s.d)(v),Object(s.f)(g),m),k=Object(o.a)(w,e),P=Object(b.a)(w,e);return d.a.isNil(u)?i.a.createElement(P,Object(c.a)({},k,{className:N}),Object(n.a)(r,(function(e){return f.create(e,{defaultProps:{as:a}})}))):i.a.createElement(P,Object(c.a)({},k,{className:N}),u)}w.handledProps=["active","as","cellAs","cells","children","className","disabled","error","negative","positive","textAlign","verticalAlign","warning"],w.defaultProps={as:"tr",cellAs:"td"},w.create=Object(O.e)(w,(function(e){return{cells:e}}));var P=w;function x(e){var t=e.attached,a=e.basic,r=e.celled,u=e.children,O=e.className,j=e.collapsing,p=e.color,f=e.columns,h=e.compact,g=e.definition,N=e.fixed,k=e.footerRow,w=e.headerRow,y=e.headerRows,A=e.inverted,C=e.padded,R=e.renderBodyRow,H=e.selectable,z=e.singleLine,L=e.size,T=e.sortable,D=e.stackable,I=e.striped,B=e.structured,Z=e.tableData,K=e.textAlign,S=e.unstackable,F=e.verticalAlign,J=Object(l.a)("ui",p,L,Object(s.a)(r,"celled"),Object(s.a)(j,"collapsing"),Object(s.a)(g,"definition"),Object(s.a)(N,"fixed"),Object(s.a)(A,"inverted"),Object(s.a)(H,"selectable"),Object(s.a)(z,"single line"),Object(s.a)(T,"sortable"),Object(s.a)(D,"stackable"),Object(s.a)(I,"striped"),Object(s.a)(B,"structured"),Object(s.a)(S,"unstackable"),Object(s.b)(t,"attached"),Object(s.b)(a,"basic"),Object(s.b)(h,"compact"),Object(s.b)(C,"padded"),Object(s.d)(K),Object(s.f)(F),Object(s.g)(f,"column"),"table",O),M=Object(o.a)(x,e),W=Object(b.a)(x,e);if(!d.a.isNil(u))return i.a.createElement(W,Object(c.a)({},M,{className:J}),u);var q={defaultProps:{cellAs:"th"}},U=(w||y)&&i.a.createElement(v,null,P.create(w,q),Object(n.a)(y,(function(e){return P.create(e,q)})));return i.a.createElement(W,Object(c.a)({},M,{className:J}),U,i.a.createElement(m,null,R&&Object(n.a)(Z,(function(e,t){return P.create(R(e,t))}))),k&&i.a.createElement(E,null,P.create(k)))}x.handledProps=["as","attached","basic","celled","children","className","collapsing","color","columns","compact","definition","fixed","footerRow","headerRow","headerRows","inverted","padded","renderBodyRow","selectable","singleLine","size","sortable","stackable","striped","structured","tableData","textAlign","unstackable","verticalAlign"],x.defaultProps={as:"table"},x.Body=m,x.Cell=f,x.Footer=E,x.Header=v,x.HeaderCell=k,x.Row=P;t.a=x}}]);
//# sourceMappingURL=component---src-pages-textbooks-js-4e4e027c4e28a4a0ad27.js.map