(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[767],{84489:function(M){M.exports={linkGroup:"linkGroup___3u5k3"}},27322:function(M){M.exports={activitiesList:"activitiesList___1iz4w",username:"username___2CaQo",event:"event___37Bra",pageHeaderContent:"pageHeaderContent___1v9Rj",avatar:"avatar___2REGU",content:"content___2JXYM",contentTitle:"contentTitle___2ZQYk",extraContent:"extraContent___171XZ",statItem:"statItem___WnzK8",members:"members___pCbZL",member:"member___1PrAP",projectList:"projectList___1-phY",cardTitle:"cardTitle___i2mGR",projectGrid:"projectGrid___2_ET-",projectItemContent:"projectItemContent___1Af7z",datetime:"datetime___3wNS1",activeCard:"activeCard___2L47N"}},56264:function(){},12395:function(){},70883:function(){},52683:function(){},81262:function(){},59903:function(){},31930:function(){},81903:function(){},28042:function(M,L,t){"use strict";t.r(L),t.d(L,{default:function(){return Nr}});var y=t(13062),c=t(71230),C=t(89032),b=t(15746),T=t(58024),N=t(91894),Z=t(54421),w=t(38272),h=t(95300),m=t(7277),F=t(94233),U=t(51890),z=t(18446),H=t(90860),le=t(40010),k=t(70719),ee=t(73727),fe=t(38663),ge=t(70883),V=t(22122),ve=t(96156),Oe=t(6610),Ie=t(5991),Te=t(10379),Ae=t(60446),Ne=t(90484),re=t(94184),g=t.n(re),x=t(48717),E=t(98423),o=t(67294),K=t(53124),q=t(85061),Y=t(75164);function _(i){var e,r=function(s){return function(){e=null,i.apply(void 0,(0,q.Z)(s))}},a=function(){if(e==null){for(var s=arguments.length,u=new Array(s),f=0;f<s;f++)u[f]=arguments[f];e=(0,Y.Z)(r(u))}};return a.cancel=function(){Y.Z.cancel(e),e=null},a}function B(){return function(e,r,a){var n=a.value,s=!1;return{configurable:!0,get:function(){if(s||this===e.prototype||this.hasOwnProperty(r))return n;var f=_(n.bind(this));return s=!0,Object.defineProperty(this,r,{value:f,configurable:!0,writable:!0}),s=!1,f}}}}var te=t(64019);function G(i){return i!==window?i.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function Q(i,e,r){if(r!==void 0&&e.top>i.top-r)return r+e.top}function ae(i,e,r){if(r!==void 0&&e.bottom<i.bottom+r){var a=window.innerHeight-e.bottom;return r+a}}var J=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],A=[];function xe(){return A}function Re(i,e){if(!!i){var r=A.find(function(a){return a.target===i});r?r.affixList.push(e):(r={target:i,affixList:[e],eventHandlers:{}},A.push(r),J.forEach(function(a){r.eventHandlers[a]=(0,te.Z)(i,a,function(){r.affixList.forEach(function(n){n.lazyUpdatePosition()})})}))}}function de(i){var e=A.find(function(r){var a=r.affixList.some(function(n){return n===i});return a&&(r.affixList=r.affixList.filter(function(n){return n!==i})),a});e&&e.affixList.length===0&&(A=A.filter(function(r){return r!==e}),J.forEach(function(r){var a=e.eventHandlers[r];a&&a.remove&&a.remove()}))}var me=function(i,e,r,a){var n=arguments.length,s=n<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,r):a,u;if((typeof Reflect=="undefined"?"undefined":(0,Ne.Z)(Reflect))==="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,r,a);else for(var f=i.length-1;f>=0;f--)(u=i[f])&&(s=(n<3?u(s):n>3?u(e,r,s):u(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};function Se(){return typeof window!="undefined"?window:null}var ye;(function(i){i[i.None=0]="None",i[i.Prepare=1]="Prepare"})(ye||(ye={}));var Ee=function(i){(0,Te.Z)(r,i);var e=(0,Ae.Z)(r);function r(){var a;return(0,Oe.Z)(this,r),a=e.apply(this,arguments),a.state={status:ye.None,lastAffix:!1,prevTarget:null},a.getOffsetTop=function(){var n=a.props,s=n.offsetBottom,u=n.offsetTop;return s===void 0&&u===void 0?0:u},a.getOffsetBottom=function(){return a.props.offsetBottom},a.savePlaceholderNode=function(n){a.placeholderNode=n},a.saveFixedNode=function(n){a.fixedNode=n},a.measure=function(){var n=a.state,s=n.status,u=n.lastAffix,f=a.props.onChange,P=a.getTargetFunc();if(!(s!==ye.Prepare||!a.fixedNode||!a.placeholderNode||!P)){var S=a.getOffsetTop(),O=a.getOffsetBottom(),j=P();if(!!j){var d={status:ye.None},p=G(j),v=G(a.placeholderNode),D=Q(v,p,S),I=ae(v,p,O);v.top===0&&v.left===0&&v.width===0&&v.height===0||(D!==void 0?(d.affixStyle={position:"fixed",top:D,width:v.width,height:v.height},d.placeholderStyle={width:v.width,height:v.height}):I!==void 0&&(d.affixStyle={position:"fixed",bottom:I,width:v.width,height:v.height},d.placeholderStyle={width:v.width,height:v.height}),d.lastAffix=!!d.affixStyle,f&&u!==d.lastAffix&&f(d.lastAffix),a.setState(d))}}},a.prepareMeasure=function(){if(a.setState({status:ye.Prepare,affixStyle:void 0,placeholderStyle:void 0}),!1)var n},a}return(0,Ie.Z)(r,[{key:"getTargetFunc",value:function(){var n=this.context.getTargetContainer,s=this.props.target;return s!==void 0?s:n!=null?n:Se}},{key:"componentDidMount",value:function(){var n=this,s=this.getTargetFunc();s&&(this.timeout=setTimeout(function(){Re(s(),n),n.updatePosition()}))}},{key:"componentDidUpdate",value:function(n){var s=this.state.prevTarget,u=this.getTargetFunc(),f=(u==null?void 0:u())||null;s!==f&&(de(this),f&&(Re(f,this),this.updatePosition()),this.setState({prevTarget:f})),(n.offsetTop!==this.props.offsetTop||n.offsetBottom!==this.props.offsetBottom)&&this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),de(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var n=this.getTargetFunc(),s=this.state.affixStyle;if(n&&s){var u=this.getOffsetTop(),f=this.getOffsetBottom(),P=n();if(P&&this.placeholderNode){var S=G(P),O=G(this.placeholderNode),j=Q(O,S,u),d=ae(O,S,f);if(j!==void 0&&s.top===j||d!==void 0&&s.bottom===d)return}}this.prepareMeasure()}},{key:"render",value:function(){var n=this,s=this.state,u=s.affixStyle,f=s.placeholderStyle,P=this.props,S=P.affixPrefixCls,O=P.children,j=g()((0,ve.Z)({},S,!!u)),d=(0,E.Z)(this.props,["prefixCls","offsetTop","offsetBottom","target","onChange","affixPrefixCls"]);return o.createElement(x.Z,{onResize:function(){n.updatePosition()}},o.createElement("div",(0,V.Z)({},d,{ref:this.savePlaceholderNode}),u&&o.createElement("div",{style:f,"aria-hidden":"true"}),o.createElement("div",{className:j,ref:this.saveFixedNode,style:u},o.createElement(x.Z,{onResize:function(){n.updatePosition()}},O))))}}]),r}(o.Component);Ee.contextType=K.E_,me([B()],Ee.prototype,"updatePosition",null),me([B()],Ee.prototype,"lazyUpdatePosition",null);var De=o.forwardRef(function(i,e){var r=i.prefixCls,a=o.useContext(K.E_),n=a.getPrefixCls,s=n("affix",r),u=(0,V.Z)((0,V.Z)({},i),{affixPrefixCls:s});return o.createElement(Ee,(0,V.Z)({},u,{ref:e}))}),et=De,Ct=t(84305),ze=t(39559),tt=t(59903),rt=t(81262),at=t(59250),$e=t(30887),pt=t(49111),Me=t(28481),R=t(28991),nt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},ot=nt,Ke=t(27029),Qe=function(e,r){return o.createElement(Ke.Z,(0,R.Z)((0,R.Z)({},e),{},{ref:r,icon:ot}))};Qe.displayName="ArrowLeftOutlined";var Ue=o.forwardRef(Qe),ne={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},it=ne,Ge=function(e,r){return o.createElement(Ke.Z,(0,R.Z)((0,R.Z)({},e),{},{ref:r,icon:it}))};Ge.displayName="ArrowRightOutlined";var lt=o.forwardRef(Ge),Pe=t(30470),st=t(50344),Je=t(28682),ct=t(96159),dt=t(57254),Be=t(81555),we=function(i,e){var r={};for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&e.indexOf(a)<0&&(r[a]=i[a]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(i);n<a.length;n++)e.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(i,a[n])&&(r[a[n]]=i[a[n]]);return r},ke=function(e){var r=e.prefixCls,a=e.separator,n=a===void 0?"/":a,s=e.children,u=e.menu,f=e.overlay,P=e.dropdownProps,S=we(e,["prefixCls","separator","children","menu","overlay","dropdownProps"]),O=o.useContext(K.E_),j=O.getPrefixCls,d=j("breadcrumb",r),p=function(I){return u||f?o.createElement(Be.Z,(0,V.Z)({menu:u,overlay:f,placement:"bottom"},P),o.createElement("span",{className:"".concat(d,"-overlay-link")},I,o.createElement(dt.Z,null))):I},v;return"href"in S?v=o.createElement("a",(0,V.Z)({className:"".concat(d,"-link")},S),s):v=o.createElement("span",(0,V.Z)({className:"".concat(d,"-link")},S),s),v=p(v),s!=null?o.createElement("li",null,v,n&&o.createElement("span",{className:"".concat(d,"-separator")},n)):null};ke.__ANT_BREADCRUMB_ITEM=!0;var qe=ke,Le=function(e){var r=e.children,a=o.useContext(K.E_),n=a.getPrefixCls,s=n("breadcrumb");return o.createElement("span",{className:"".concat(s,"-separator")},r||"/")};Le.__ANT_BREADCRUMB_SEPARATOR=!0;var ue=Le,be=function(i,e){var r={};for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&e.indexOf(a)<0&&(r[a]=i[a]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(i);n<a.length;n++)e.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(i,a[n])&&(r[a[n]]=i[a[n]]);return r};function _e(i,e){if(!i.breadcrumbName)return null;var r=Object.keys(e).join("|"),a=i.breadcrumbName.replace(new RegExp(":(".concat(r,")"),"g"),function(n,s){return e[s]||n});return a}function Ye(i,e,r,a){var n=r.indexOf(i)===r.length-1,s=_e(i,e);return n?o.createElement("span",null,s):o.createElement("a",{href:"#/".concat(a.join("/"))},s)}var Et=function(e,r){return e=(e||"").replace(/^\//,""),Object.keys(r).forEach(function(a){e=e.replace(":".concat(a),r[a])}),e},Bt=function(e,r,a){var n=(0,q.Z)(e),s=Et(r||"",a);return s&&n.push(s),n},ut=function(e){var r=e.prefixCls,a=e.separator,n=a===void 0?"/":a,s=e.style,u=e.className,f=e.routes,P=e.children,S=e.itemRender,O=S===void 0?Ye:S,j=e.params,d=j===void 0?{}:j,p=be(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),v=o.useContext(K.E_),D=v.getPrefixCls,I=v.direction,$,oe=D("breadcrumb",r);if(f&&f.length>0){var ie=[];$=f.map(function(W){var Ce=Et(W.path,d);Ce&&ie.push(Ce);var he;W.children&&W.children.length&&(he=o.createElement(Je.Z,{items:W.children.map(function(pe){return{key:pe.path||pe.breadcrumbName,label:O(pe,d,f,Bt(ie,pe.path,d))}})}));var Ze={separator:n};return he&&(Ze.overlay=he),o.createElement(qe,(0,V.Z)({},Ze,{key:Ce||W.breadcrumbName}),O(W,d,f,ie))})}else P&&($=(0,st.Z)(P).map(function(W,Ce){return W&&(0,ct.Tm)(W,{separator:n,key:Ce})}));var se=g()(oe,(0,ve.Z)({},"".concat(oe,"-rtl"),I==="rtl"),u);return o.createElement("nav",(0,V.Z)({className:se,style:s},p),o.createElement("ol",null,$))};ut.Item=qe,ut.Separator=ue;var Lt=ut,It=Lt,Ft=t(42051),zt=t(19650),$t=t(34952),Ut=function(e,r,a){return!r||!a?null:o.createElement(Ft.Z,{componentName:"PageHeader"},function(n){return o.createElement("div",{className:"".concat(e,"-back")},o.createElement($t.Z,{onClick:function(u){a==null||a(u)},className:"".concat(e,"-back-button"),"aria-label":n.back},r))})},Wt=function(e){return o.createElement(It,(0,V.Z)({},e))},Ht=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"ltr";return e.backIcon!==void 0?e.backIcon:r==="rtl"?o.createElement(lt,null):o.createElement(Ue,null)},Kt=function(e,r){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"ltr",n=r.title,s=r.avatar,u=r.subTitle,f=r.tags,P=r.extra,S=r.onBack,O="".concat(e,"-heading"),j=n||u||f||P;if(!j)return null;var d=Ht(r,a),p=Ut(e,d,S),v=p||s||j;return o.createElement("div",{className:O},v&&o.createElement("div",{className:"".concat(O,"-left")},p,s&&o.createElement(U.C,(0,V.Z)({},s)),n&&o.createElement("span",{className:"".concat(O,"-title"),title:typeof n=="string"?n:void 0},n),u&&o.createElement("span",{className:"".concat(O,"-sub-title"),title:typeof u=="string"?u:void 0},u),f&&o.createElement("span",{className:"".concat(O,"-tags")},f)),P&&o.createElement("span",{className:"".concat(O,"-extra")},o.createElement(zt.Z,null,P)))},Gt=function(e,r){return r?o.createElement("div",{className:"".concat(e,"-footer")},r):null},wt=function(e,r){return o.createElement("div",{className:"".concat(e,"-content")},r)},Yt=function(e){var r=(0,Pe.Z)(!1),a=(0,Me.Z)(r,2),n=a[0],s=a[1],u=function(P){var S=P.width;s(S<768,!0)};return o.createElement(K.C,null,function(f){var P,S=f.getPrefixCls,O=f.pageHeader,j=f.direction,d,p=e.prefixCls,v=e.style,D=e.footer,I=e.children,$=e.breadcrumb,oe=e.breadcrumbRender,ie=e.className,se=!0;"ghost"in e?se=e.ghost:O&&"ghost"in O&&(se=O.ghost);var W=S("page-header",p),Ce=function(){return($==null?void 0:$.routes)?Wt($):null},he=Ce(),Ze=$&&"props"in $,pe=(d=oe==null?void 0:oe(e,he))!==null&&d!==void 0?d:he,ce=Ze?$:pe,He=g()(W,ie,(P={"has-breadcrumb":!!ce,"has-footer":!!D},(0,ve.Z)(P,"".concat(W,"-ghost"),se),(0,ve.Z)(P,"".concat(W,"-rtl"),j==="rtl"),(0,ve.Z)(P,"".concat(W,"-compact"),n),P));return o.createElement(x.Z,{onResize:u},o.createElement("div",{className:He,style:v},ce,Kt(W,e,j),I&&wt(W,I),Gt(W,D)))})},Xt=Yt,ft=t(81253),Ur=t(18106),Pt=t(95562),l=t(85893),vt=t(64335),Vt=t(97435),Wr=t(56264),Qt=["children","className","extra","style","renderContent"],Jt=function(e){var r=e.children,a=e.className,n=e.extra,s=e.style,u=e.renderContent,f=(0,ft.Z)(e,Qt),P=(0,o.useContext)(ze.ZP.ConfigContext),S=P.getPrefixCls,O=e.prefixCls||S("pro"),j="".concat(O,"-footer-bar"),d=(0,o.useContext)(vt.Z),p=(0,o.useMemo)(function(){var D=d.hasSiderMenu,I=d.isMobile,$=d.siderWidth;if(!!D)return $?I?"100%":"calc(100% - ".concat($,"px)"):"100%"},[d.collapsed,d.hasSiderMenu,d.isMobile,d.siderWidth]),v=(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"".concat(j,"-left"),children:n}),(0,l.jsx)("div",{className:"".concat(j,"-right"),children:r})]});return(0,o.useEffect)(function(){return!d||!(d==null?void 0:d.setHasFooterToolbar)?function(){}:(d==null||d.setHasFooterToolbar(!0),function(){var D;d==null||(D=d.setHasFooterToolbar)===null||D===void 0||D.call(d,!1)})},[]),(0,l.jsx)("div",(0,R.Z)((0,R.Z)({className:g()(a,"".concat(j)),style:(0,R.Z)({width:p},s)},(0,Vt.Z)(f,["prefixCls"])),{},{children:u?u((0,R.Z)((0,R.Z)((0,R.Z)({},e),d),{},{leftWidth:p}),v):v}))},kt=Jt,qt=t(21349),_t=t(83832),er=function(e){if(!e)return 1;var r=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/r},tr=function(e){var r=e.children,a=e.style,n=e.className,s=e.markStyle,u=e.markClassName,f=e.zIndex,P=f===void 0?9:f,S=e.gapX,O=S===void 0?212:S,j=e.gapY,d=j===void 0?222:j,p=e.width,v=p===void 0?120:p,D=e.height,I=D===void 0?64:D,$=e.rotate,oe=$===void 0?-22:$,ie=e.image,se=e.content,W=e.offsetLeft,Ce=e.offsetTop,he=e.fontStyle,Ze=he===void 0?"normal":he,pe=e.fontWeight,ce=pe===void 0?"normal":pe,He=e.fontColor,yt=He===void 0?"rgba(0,0,0,.15)":He,Nt=e.fontSize,Rt=Nt===void 0?16:Nt,St=e.fontFamily,jt=St===void 0?"sans-serif":St,Rr=e.prefixCls,Sr=(0,o.useContext)(ze.ZP.ConfigContext),jr=Sr.getPrefixCls,Ot=jr("pro-layout-watermark",Rr),Or=g()("".concat(Ot,"-wrapper"),n),Tr=g()(Ot,u),Ar=(0,o.useState)(""),Tt=(0,Me.Z)(Ar,2),At=Tt[0],Dt=Tt[1];return(0,o.useEffect)(function(){var Xe=document.createElement("canvas"),je=Xe.getContext("2d"),Fe=er(je),Dr="".concat((O+v)*Fe,"px"),Mr="".concat((d+I)*Fe,"px"),Br=W||O/2,Lr=Ce||d/2;if(Xe.setAttribute("width",Dr),Xe.setAttribute("height",Mr),je){je.translate(Br*Fe,Lr*Fe),je.rotate(Math.PI/180*Number(oe));var Ir=v*Fe,Mt=I*Fe;if(ie){var Ve=new Image;Ve.crossOrigin="anonymous",Ve.referrerPolicy="no-referrer",Ve.src=ie,Ve.onload=function(){je.drawImage(Ve,0,0,Ir,Mt),Dt(Xe.toDataURL())}}else if(se){var Fr=Number(Rt)*Fe;je.font="".concat(Ze," normal ").concat(ce," ").concat(Fr,"px/").concat(Mt,"px ").concat(jt),je.fillStyle=yt,Array.isArray(se)?se==null||se.forEach(function(zr,$r){return je.fillText(zr,0,$r*50)}):je.fillText(se,0,0),Dt(Xe.toDataURL())}}else console.error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301Canvas")},[O,d,W,Ce,oe,Ze,ce,v,I,jt,yt,ie,se,Rt]),(0,l.jsxs)("div",{style:(0,R.Z)({position:"relative"},a),className:Or,children:[r,(0,l.jsx)("div",{className:Tr,style:(0,R.Z)((0,R.Z)({zIndex:P,position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"".concat(O+v,"px"),pointerEvents:"none",backgroundRepeat:"repeat"},At?{backgroundImage:"url('".concat(At,"')")}:null),s)})]})},rr=tr,Hr=t(12395),ar=["title","content","pageHeaderRender","header","prefixedClassName","extraContent","style","prefixCls","breadcrumbRender"],nr=["children","loading","className","style","footer","affixProps","ghost","fixedHeader","breadcrumbRender"];function or(i){return(0,Ne.Z)(i)==="object"?i:{spinning:i}}var ir=function(e){var r=e.tabList,a=e.tabActiveKey,n=e.onTabChange,s=e.tabBarExtraContent,u=e.tabProps,f=e.prefixedClassName;return Array.isArray(r)||s?(0,l.jsx)(Pt.Z,(0,R.Z)((0,R.Z)({className:"".concat(f,"-tabs"),activeKey:a,onChange:function(S){n&&n(S)},tabBarExtraContent:s},u),{},{children:r==null?void 0:r.map(function(P,S){return(0,o.createElement)(Pt.Z.TabPane,(0,R.Z)((0,R.Z)({},P),{},{tab:P.tab,key:P.key||S}))})})):null},lr=function(e,r,a){return!e&&!r?null:(0,l.jsx)("div",{className:"".concat(a,"-detail"),children:(0,l.jsx)("div",{className:"".concat(a,"-main"),children:(0,l.jsxs)("div",{className:"".concat(a,"-row"),children:[e&&(0,l.jsx)("div",{className:"".concat(a,"-content"),children:e}),r&&(0,l.jsx)("div",{className:"".concat(a,"-extraContent"),children:r})]})})})},Kr=function(e){var r=useContext(RouteContext);return _jsx("div",{style:{height:"100%",display:"flex",alignItems:"center"},children:_jsx(_Breadcrumb,_objectSpread(_objectSpread(_objectSpread({},r==null?void 0:r.breadcrumb),r==null?void 0:r.breadcrumbProps),e))})},sr=function(e){var r,a=(0,o.useContext)(vt.Z),n=e.title,s=e.content,u=e.pageHeaderRender,f=e.header,P=e.prefixedClassName,S=e.extraContent,O=e.style,j=e.prefixCls,d=e.breadcrumbRender,p=(0,ft.Z)(e,ar),v=(0,o.useMemo)(function(){if(!!d)return d},[d]);if(u===!1)return null;if(u)return(0,l.jsxs)(l.Fragment,{children:[" ",u((0,R.Z)((0,R.Z)({},e),a))]});var D=n;!n&&n!==!1&&(D=a.title);var I=(0,R.Z)((0,R.Z)((0,R.Z)({},a),{},{title:D},p),{},{footer:ir((0,R.Z)((0,R.Z)({},p),{},{breadcrumbRender:d,prefixedClassName:P}))},f),$=I.breadcrumb,oe=(!$||!($==null?void 0:$.itemRender)&&!($==null||(r=$.routes)===null||r===void 0?void 0:r.length))&&!d;return["title","subTitle","extra","tags","footer","avatar","backIcon"].every(function(ie){return!I[ie]})&&oe&&!s&&!S?null:(0,l.jsx)("div",{className:"".concat(P,"-warp"),children:(0,l.jsx)(Xt,(0,R.Z)((0,R.Z)({},I),{},{breadcrumb:d===!1?void 0:(0,R.Z)((0,R.Z)({},I.breadcrumb),a.breadcrumbProps),breadcrumbRender:v,prefixCls:j,children:(f==null?void 0:f.children)||lr(s,S,P)}))})},cr=function(e){var r,a,n=e.children,s=e.loading,u=s===void 0?!1:s,f=e.className,P=e.style,S=e.footer,O=e.affixProps,j=e.ghost,d=e.fixedHeader,p=e.breadcrumbRender,v=(0,ft.Z)(e,nr),D=(0,o.useContext)(vt.Z),I=(0,o.useContext)(ze.ZP.ConfigContext),$=I.getPrefixCls,oe=e.prefixCls||$("pro"),ie="".concat(oe,"-page-container"),se=g()(ie,f,(r={},(0,ve.Z)(r,"".concat(oe,"-page-container-ghost"),j),(0,ve.Z)(r,"".concat(oe,"-page-container-with-footer"),S),r)),W=(0,o.useMemo)(function(){return n?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"".concat(ie,"-children-content"),children:n}),D.hasFooterToolbar&&(0,l.jsx)("div",{style:{height:48,marginTop:24}})]}):null},[n,ie,D.hasFooterToolbar]),Ce=(0,o.useMemo)(function(){var ce;return p==!1?!1:p||(v==null||(ce=v.header)===null||ce===void 0?void 0:ce.breadcrumbRender)},[p,v==null||(a=v.header)===null||a===void 0?void 0:a.breadcrumbRender]),he=(0,l.jsx)(sr,(0,R.Z)((0,R.Z)({},v),{},{breadcrumbRender:Ce,ghost:j,prefixCls:void 0,prefixedClassName:ie})),Ze=(0,o.useMemo)(function(){if(o.isValidElement(u))return u;if(typeof u=="boolean"&&!u)return null;var ce=or(u);return ce.spinning?(0,l.jsx)(_t.Z,(0,R.Z)({},ce)):null},[u]),pe=(0,o.useMemo)(function(){var ce=Ze||W;if(e.waterMarkProps||D.waterMarkProps){var He=(0,R.Z)((0,R.Z)({},D.waterMarkProps),e.waterMarkProps);return(0,l.jsx)(rr,(0,R.Z)((0,R.Z)({},He),{},{children:ce}))}return ce},[e.waterMarkProps,D.waterMarkProps,Ze,W]);return(0,l.jsxs)("div",{style:P,className:se,children:[d&&he?(0,l.jsx)(et,(0,R.Z)((0,R.Z)({offsetTop:D.hasHeader&&D.fixedHeader?D.headerHeight:0},O),{},{children:he})):he,pe&&(0,l.jsx)(qt.Z,{children:pe}),S&&(0,l.jsx)(kt,{prefixCls:oe,children:S})]})},dr=cr,ur=t(30381),bt=t.n(ur),Gr=t(57663),fr=t(71577),vr=t(49101),mr=t(84489),hr=t.n(mr),Zt=function(e){var r=e.links,a=e.linkElement,n=e.onAdd;return(0,l.jsxs)("div",{className:hr().linkGroup,children:[r.map(function(s){return(0,o.createElement)(a,{key:"linkGroup-item-".concat(s.id||s.title),to:s.href,href:s.href},s.title)}),(0,l.jsxs)(fr.Z,{size:"small",type:"primary",ghost:!0,onClick:n,children:[(0,l.jsx)(vr.Z,{})," \u6DFB\u52A0"]})]})};Zt.defaultProps={links:[],onAdd:function(){},linkElement:"a"};var gr=Zt,xr=t(27322),X=t.n(xr),We=t(39428),mt=t(3182);function yr(){return ht.apply(this,arguments)}function ht(){return ht=(0,mt.Z)((0,We.Z)().mark(function i(){return(0,We.Z)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,k.WY)("/api/project/notice"));case 1:case"end":return r.stop()}},i)})),ht.apply(this,arguments)}function Cr(){return gt.apply(this,arguments)}function gt(){return gt=(0,mt.Z)((0,We.Z)().mark(function i(){return(0,We.Z)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,k.WY)("/api/activities"));case 1:case"end":return r.stop()}},i)})),gt.apply(this,arguments)}function pr(){return xt.apply(this,arguments)}function xt(){return xt=(0,mt.Z)((0,We.Z)().mark(function i(){return(0,We.Z)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,k.WY)("/api/fake_workplace_chart_data"));case 1:case"end":return r.stop()}},i)})),xt.apply(this,arguments)}var Er=[{title:"\u64CD\u4F5C\u4E00",href:""},{title:"\u64CD\u4F5C\u4E8C",href:""},{title:"\u64CD\u4F5C\u4E09",href:""},{title:"\u64CD\u4F5C\u56DB",href:""},{title:"\u64CD\u4F5C\u4E94",href:""},{title:"\u64CD\u4F5C\u516D",href:""}],Pr=function(e){var r=e.currentUser,a=r&&Object.keys(r).length;return a?(0,l.jsxs)("div",{className:X().pageHeaderContent,children:[(0,l.jsx)("div",{className:X().avatar,children:(0,l.jsx)(U.C,{size:"large",src:r.avatar})}),(0,l.jsxs)("div",{className:X().content,children:[(0,l.jsxs)("div",{className:X().contentTitle,children:["\u65E9\u5B89\uFF0C",r.name,"\uFF0C\u795D\u4F60\u5F00\u5FC3\u6BCF\u4E00\u5929\uFF01"]}),(0,l.jsxs)("div",{children:[r.title," |",r.group]})]})]}):(0,l.jsx)(H.Z,{avatar:!0,paragraph:{rows:1},active:!0})},br=function(){return(0,l.jsxs)("div",{className:X().extraContent,children:[(0,l.jsx)("div",{className:X().statItem,children:(0,l.jsx)(m.Z,{title:"\u9879\u76EE\u6570",value:56})}),(0,l.jsx)("div",{className:X().statItem,children:(0,l.jsx)(m.Z,{title:"\u56E2\u961F\u5185\u6392\u540D",value:8,suffix:"/ 24"})}),(0,l.jsx)("div",{className:X().statItem,children:(0,l.jsx)(m.Z,{title:"\u9879\u76EE\u8BBF\u95EE",value:2223})})]})},Zr=function(){var e,r=(0,k.QT)(yr),a=r.loading,n=r.data,s=n===void 0?[]:n,u=(0,k.QT)(Cr),f=u.loading,P=u.data,S=P===void 0?[]:P,O=(0,k.QT)(pr),j=O.data,d=function(v){var D=v.template.split(/@\{([^{}]*)\}/gi).map(function(I){return v[I]?(0,l.jsx)("a",{href:v[I].link,children:v[I].name},v[I].name):I});return(0,l.jsx)(w.ZP.Item,{children:(0,l.jsx)(w.ZP.Item.Meta,{avatar:(0,l.jsx)(U.C,{src:v.user.avatar}),title:(0,l.jsxs)("span",{children:[(0,l.jsx)("a",{className:X().username,children:v.user.name}),"\xA0",(0,l.jsx)("span",{className:X().event,children:D})]}),description:(0,l.jsx)("span",{className:X().datetime,title:v.updatedAt,children:bt()(v.updatedAt).fromNow()})})},v.id)};return(0,l.jsx)(dr,{content:(0,l.jsx)(Pr,{currentUser:{avatar:"https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",name:"\u5434\u5F66\u7956",userid:"00000001",email:"antdesign@alipay.com",signature:"\u6D77\u7EB3\u767E\u5DDD\uFF0C\u6709\u5BB9\u4E43\u5927",title:"\u4EA4\u4E92\u4E13\u5BB6",group:"\u8682\u8681\u91D1\u670D\uFF0D\u67D0\u67D0\u67D0\u4E8B\u4E1A\u7FA4\uFF0D\u67D0\u67D0\u5E73\u53F0\u90E8\uFF0D\u67D0\u67D0\u6280\u672F\u90E8\uFF0DUED"}}),extraContent:(0,l.jsx)(br,{}),children:(0,l.jsxs)(c.Z,{gutter:24,children:[(0,l.jsxs)(b.Z,{xl:16,lg:24,md:24,sm:24,xs:24,children:[(0,l.jsx)(N.Z,{className:X().projectList,style:{marginBottom:24},title:"\u8FDB\u884C\u4E2D\u7684\u9879\u76EE",bordered:!1,extra:(0,l.jsx)(ee.rU,{to:"/",children:"\u5168\u90E8\u9879\u76EE"}),loading:a,bodyStyle:{padding:0},children:s.map(function(p){return(0,l.jsx)(N.Z.Grid,{className:X().projectGrid,children:(0,l.jsxs)(N.Z,{bodyStyle:{padding:0},bordered:!1,children:[(0,l.jsx)(N.Z.Meta,{title:(0,l.jsxs)("div",{className:X().cardTitle,children:[(0,l.jsx)(U.C,{size:"small",src:p.logo}),(0,l.jsx)(ee.rU,{to:p.href,children:p.title})]}),description:p.description}),(0,l.jsxs)("div",{className:X().projectItemContent,children:[(0,l.jsx)(ee.rU,{to:p.memberLink,children:p.member||""}),p.updatedAt&&(0,l.jsx)("span",{className:X().datetime,title:p.updatedAt,children:bt()(p.updatedAt).fromNow()})]})]})},p.id)})}),(0,l.jsx)(N.Z,{bodyStyle:{padding:0},bordered:!1,className:X().activeCard,title:"\u52A8\u6001",loading:f,children:(0,l.jsx)(w.ZP,{loading:f,renderItem:function(v){return d(v)},dataSource:S,className:X().activitiesList,size:"large"})})]}),(0,l.jsxs)(b.Z,{xl:8,lg:24,md:24,sm:24,xs:24,children:[(0,l.jsx)(N.Z,{style:{marginBottom:24},title:"\u5FEB\u901F\u5F00\u59CB / \u4FBF\u6377\u5BFC\u822A",bordered:!1,bodyStyle:{padding:0},children:(0,l.jsx)(gr,{onAdd:function(){},links:Er,linkElement:ee.rU})}),(0,l.jsx)(N.Z,{style:{marginBottom:24},bordered:!1,title:"XX \u6307\u6570",loading:(j==null||(e=j.radarData)===null||e===void 0?void 0:e.length)===0,children:(0,l.jsx)("div",{className:X().chart,children:(0,l.jsx)(le.Fk,{height:343,data:(j==null?void 0:j.radarData)||[],angleField:"label",seriesField:"name",radiusField:"value",area:{visible:!1},point:{visible:!0},legend:{position:"bottom-center"}})})}),(0,l.jsx)(N.Z,{bodyStyle:{paddingTop:12,paddingBottom:12},bordered:!1,title:"\u56E2\u961F",loading:a,children:(0,l.jsx)("div",{className:X().members,children:(0,l.jsx)(c.Z,{gutter:48,children:s.map(function(p){return(0,l.jsx)(b.Z,{span:12,children:(0,l.jsxs)(ee.rU,{to:p.href,children:[(0,l.jsx)(U.C,{src:p.logo,size:"small"}),(0,l.jsx)("span",{className:X().member,children:p.member})]})},"members-item-".concat(p.id))})})})})]})]})})},Nr=Zr},81643:function(M,L,t){"use strict";t.d(L,{Z:function(){return y}});var y=function(C){return C?typeof C=="function"?C():C:null}},34952:function(M,L,t){"use strict";var y=t(22122),c=t(15105),C=t(67294),b=function(Z,w){var h={};for(var m in Z)Object.prototype.hasOwnProperty.call(Z,m)&&w.indexOf(m)<0&&(h[m]=Z[m]);if(Z!=null&&typeof Object.getOwnPropertySymbols=="function")for(var F=0,m=Object.getOwnPropertySymbols(Z);F<m.length;F++)w.indexOf(m[F])<0&&Object.prototype.propertyIsEnumerable.call(Z,m[F])&&(h[m[F]]=Z[m[F]]);return h},T={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},N=C.forwardRef(function(Z,w){var h=function(ee){var fe=ee.keyCode;fe===c.Z.ENTER&&ee.preventDefault()},m=function(ee){var fe=ee.keyCode,ge=Z.onClick;fe===c.Z.ENTER&&ge&&ge()},F=Z.style,U=Z.noStyle,z=Z.disabled,H=b(Z,["style","noStyle","disabled"]),le={};return U||(le=(0,y.Z)({},T)),z&&(le.pointerEvents="none"),le=(0,y.Z)((0,y.Z)({},le),F),C.createElement("div",(0,y.Z)({role:"button",tabIndex:0,ref:w},H,{onKeyDown:h,onKeyUp:m,style:le}))});L.Z=N},51890:function(M,L,t){"use strict";t.d(L,{C:function(){return Ne}});var y=t(22122),c=t(96156),C=t(90484),b=t(28481),T=t(94184),N=t.n(T),Z=t(48717),w=t(42550),h=t(67294),m=t(53124),F=t(25378),U=t(24308),z=h.createContext("default"),H=function(g){var x=g.children,E=g.size;return h.createElement(z.Consumer,null,function(o){return h.createElement(z.Provider,{value:E||o},x)})},le=z,k=function(re,g){var x={};for(var E in re)Object.prototype.hasOwnProperty.call(re,E)&&g.indexOf(E)<0&&(x[E]=re[E]);if(re!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,E=Object.getOwnPropertySymbols(re);o<E.length;o++)g.indexOf(E[o])<0&&Object.prototype.propertyIsEnumerable.call(re,E[o])&&(x[E[o]]=re[E[o]]);return x},ee=function(g,x){var E,o,K=h.useContext(le),q=h.useState(1),Y=(0,b.Z)(q,2),_=Y[0],B=Y[1],te=h.useState(!1),G=(0,b.Z)(te,2),Q=G[0],ae=G[1],J=h.useState(!0),A=(0,b.Z)(J,2),xe=A[0],Re=A[1],de=h.useRef(null),me=h.useRef(null),Se=(0,w.sQ)(x,de),ye=h.useContext(m.E_),Ee=ye.getPrefixCls,De=function(){if(!(!me.current||!de.current)){var ue=me.current.offsetWidth,be=de.current.offsetWidth;if(ue!==0&&be!==0){var _e=g.gap,Ye=_e===void 0?4:_e;Ye*2<be&&B(be-Ye*2<ue?(be-Ye*2)/ue:1)}}};h.useEffect(function(){ae(!0)},[]),h.useEffect(function(){Re(!0),B(1)},[g.src]),h.useEffect(function(){De()},[g.gap]);var et=function(){var ue=g.onError,be=ue?ue():void 0;be!==!1&&Re(!1)},Ct=g.prefixCls,ze=g.shape,tt=ze===void 0?"circle":ze,rt=g.size,at=rt===void 0?"default":rt,$e=g.src,pt=g.srcSet,Me=g.icon,R=g.className,nt=g.alt,ot=g.draggable,Ke=g.children,Qe=g.crossOrigin,Ue=k(g,["prefixCls","shape","size","src","srcSet","icon","className","alt","draggable","children","crossOrigin"]),ne=at==="default"?K:at,it=Object.keys((0,C.Z)(ne)==="object"?ne||{}:{}).some(function(Le){return["xs","sm","md","lg","xl","xxl"].includes(Le)}),Ge=(0,F.Z)(it),lt=h.useMemo(function(){if((0,C.Z)(ne)!=="object")return{};var Le=U.c4.find(function(be){return Ge[be]}),ue=ne[Le];return ue?{width:ue,height:ue,lineHeight:"".concat(ue,"px"),fontSize:Me?ue/2:18}:{}},[Ge,ne]),Pe=Ee("avatar",Ct),st=N()((E={},(0,c.Z)(E,"".concat(Pe,"-lg"),ne==="large"),(0,c.Z)(E,"".concat(Pe,"-sm"),ne==="small"),E)),Je=h.isValidElement($e),ct=N()(Pe,st,(o={},(0,c.Z)(o,"".concat(Pe,"-").concat(tt),!!tt),(0,c.Z)(o,"".concat(Pe,"-image"),Je||$e&&xe),(0,c.Z)(o,"".concat(Pe,"-icon"),!!Me),o),R),dt=typeof ne=="number"?{width:ne,height:ne,lineHeight:"".concat(ne,"px"),fontSize:Me?ne/2:18}:{},Be;if(typeof $e=="string"&&xe)Be=h.createElement("img",{src:$e,draggable:ot,srcSet:pt,onError:et,alt:nt,crossOrigin:Qe});else if(Je)Be=$e;else if(Me)Be=Me;else if(Q||_!==1){var we="scale(".concat(_,") translateX(-50%)"),ke={msTransform:we,WebkitTransform:we,transform:we},qe=typeof ne=="number"?{lineHeight:"".concat(ne,"px")}:{};Be=h.createElement(Z.Z,{onResize:De},h.createElement("span",{className:"".concat(Pe,"-string"),ref:me,style:(0,y.Z)((0,y.Z)({},qe),ke)},Ke))}else Be=h.createElement("span",{className:"".concat(Pe,"-string"),style:{opacity:0},ref:me},Ke);return delete Ue.onError,delete Ue.gap,h.createElement("span",(0,y.Z)({},Ue,{style:(0,y.Z)((0,y.Z)((0,y.Z)({},dt),lt),Ue.style),className:ct,ref:Se}),Be)},fe=h.forwardRef(ee),ge=fe,V=t(50344),ve=t(55241),Oe=t(96159),Ie=function(g){var x=h.useContext(m.E_),E=x.getPrefixCls,o=x.direction,K=g.prefixCls,q=g.className,Y=q===void 0?"":q,_=g.maxCount,B=g.maxStyle,te=g.size,G=E("avatar-group",K),Q=N()(G,(0,c.Z)({},"".concat(G,"-rtl"),o==="rtl"),Y),ae=g.children,J=g.maxPopoverPlacement,A=J===void 0?"top":J,xe=g.maxPopoverTrigger,Re=xe===void 0?"hover":xe,de=(0,V.Z)(ae).map(function(Ee,De){return(0,Oe.Tm)(Ee,{key:"avatar-key-".concat(De)})}),me=de.length;if(_&&_<me){var Se=de.slice(0,_),ye=de.slice(_,me);return Se.push(h.createElement(ve.Z,{key:"avatar-popover-key",content:ye,trigger:Re,placement:A,overlayClassName:"".concat(G,"-popover")},h.createElement(ge,{style:B},"+".concat(me-_)))),h.createElement(H,{size:te},h.createElement("div",{className:Q,style:g.style},Se))}return h.createElement(H,{size:te},h.createElement("div",{className:Q,style:g.style},de))},Te=Ie,Ae=ge;Ae.Group=Te;var Ne=Ae},94233:function(M,L,t){"use strict";var y=t(38663),c=t.n(y),C=t(52683),b=t.n(C),T=t(20136)},55241:function(M,L,t){"use strict";var y=t(22122),c=t(67294),C=t(53124),b=t(45777),T=t(81643),N=t(33603),Z=function(m,F){var U={};for(var z in m)Object.prototype.hasOwnProperty.call(m,z)&&F.indexOf(z)<0&&(U[z]=m[z]);if(m!=null&&typeof Object.getOwnPropertySymbols=="function")for(var H=0,z=Object.getOwnPropertySymbols(m);H<z.length;H++)F.indexOf(z[H])<0&&Object.prototype.propertyIsEnumerable.call(m,z[H])&&(U[z[H]]=m[z[H]]);return U},w=function(F){var U=F.title,z=F.content,H=F.prefixCls;return!U&&!z?null:c.createElement(c.Fragment,null,U&&c.createElement("div",{className:"".concat(H,"-title")},(0,T.Z)(U)),c.createElement("div",{className:"".concat(H,"-inner-content")},(0,T.Z)(z)))},h=c.forwardRef(function(m,F){var U=m.prefixCls,z=m.title,H=m.content,le=m._overlay,k=m.placement,ee=k===void 0?"top":k,fe=m.trigger,ge=fe===void 0?"hover":fe,V=m.mouseEnterDelay,ve=V===void 0?.1:V,Oe=m.mouseLeaveDelay,Ie=Oe===void 0?.1:Oe,Te=m.overlayStyle,Ae=Te===void 0?{}:Te,Ne=Z(m,["prefixCls","title","content","_overlay","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),re=c.useContext(C.E_),g=re.getPrefixCls,x=g("popover",U),E=g();return c.createElement(b.Z,(0,y.Z)({placement:ee,trigger:ge,mouseEnterDelay:ve,mouseLeaveDelay:Ie,overlayStyle:Ae},Ne,{prefixCls:x,ref:F,overlay:le||c.createElement(w,{prefixCls:x,title:z,content:H}),transitionName:(0,N.mL)(E,"zoom-big",Ne.transitionName)}))});L.Z=h},20136:function(M,L,t){"use strict";var y=t(38663),c=t.n(y),C=t(31930),b=t.n(C)},7277:function(M,L,t){"use strict";t.d(L,{Z:function(){return re}});var y=t(22122),c=t(67294),C=t(57838),b=t(96159),T=t(96156),N=t(94184),Z=t.n(N),w=t(53124),h=t(90860),m=t(11726),F=t.n(m),U=function(x){var E=x.value,o=x.formatter,K=x.precision,q=x.decimalSeparator,Y=x.groupSeparator,_=Y===void 0?"":Y,B=x.prefixCls,te;if(typeof o=="function")te=o(E);else{var G=String(E),Q=G.match(/^(-?)(\d*)(\.(\d+))?$/);if(!Q||G==="-")te=G;else{var ae=Q[1],J=Q[2]||"0",A=Q[4]||"";J=J.replace(/\B(?=(\d{3})+(?!\d))/g,_),typeof K=="number"&&(A=F()(A,K,"0").slice(0,K>0?K:0)),A&&(A="".concat(q).concat(A)),te=[c.createElement("span",{key:"int",className:"".concat(B,"-content-value-int")},ae,J),A&&c.createElement("span",{key:"decimal",className:"".concat(B,"-content-value-decimal")},A)]}}return c.createElement("span",{className:"".concat(B,"-content-value")},te)},z=U,H=function(x){var E=x.prefixCls,o=x.className,K=x.style,q=x.valueStyle,Y=x.value,_=Y===void 0?0:Y,B=x.title,te=x.valueRender,G=x.prefix,Q=x.suffix,ae=x.loading,J=ae===void 0?!1:ae,A=x.direction,xe=x.onMouseEnter,Re=x.onMouseLeave,de=x.decimalSeparator,me=de===void 0?".":de,Se=x.groupSeparator,ye=Se===void 0?",":Se,Ee=c.createElement(z,(0,y.Z)({decimalSeparator:me,groupSeparator:ye},x,{value:_})),De=Z()(E,(0,T.Z)({},"".concat(E,"-rtl"),A==="rtl"),o);return c.createElement("div",{className:De,style:K,onMouseEnter:xe,onMouseLeave:Re},B&&c.createElement("div",{className:"".concat(E,"-title")},B),c.createElement(h.Z,{paragraph:!1,loading:J,className:"".concat(E,"-skeleton")},c.createElement("div",{style:q,className:"".concat(E,"-content")},G&&c.createElement("span",{className:"".concat(E,"-content-prefix")},G),te?te(Ee):Ee,Q&&c.createElement("span",{className:"".concat(E,"-content-suffix")},Q))))},le=(0,w.PG)({prefixCls:"statistic"})(H),k=le,ee=t(28481),fe=t(32475),ge=t.n(fe),V=[["Y",1e3*60*60*24*365],["M",1e3*60*60*24*30],["D",1e3*60*60*24],["H",1e3*60*60],["m",1e3*60],["s",1e3],["S",1]];function ve(g,x){var E=g,o=/\[[^\]]*]/g,K=(x.match(o)||[]).map(function(B){return B.slice(1,-1)}),q=x.replace(o,"[]"),Y=V.reduce(function(B,te){var G=(0,ee.Z)(te,2),Q=G[0],ae=G[1];if(B.includes(Q)){var J=Math.floor(E/ae);return E-=J*ae,B.replace(new RegExp("".concat(Q,"+"),"g"),function(A){var xe=A.length;return ge()(J.toString(),xe,"0")})}return B},q),_=0;return Y.replace(o,function(){var B=K[_];return _+=1,B})}function Oe(g,x){var E=x.format,o=E===void 0?"":E,K=new Date(g).getTime(),q=Date.now(),Y=Math.max(K-q,0);return ve(Y,o)}var Ie=1e3/30;function Te(g){return new Date(g).getTime()}var Ae=function(x){var E=x.value,o=x.format,K=o===void 0?"HH:mm:ss":o,q=x.onChange,Y=x.onFinish,_=(0,C.Z)(),B=c.useRef(null),te=function(){Y==null||Y(),B.current&&(clearInterval(B.current),B.current=null)},G=function(){var A=Te(E);A>=Date.now()&&(B.current=setInterval(function(){_(),q==null||q(A-Date.now()),A<Date.now()&&te()},Ie))};c.useEffect(function(){return G(),function(){B.current&&(clearInterval(B.current),B.current=null)}},[E]);var Q=function(A,xe){return Oe(A,(0,y.Z)((0,y.Z)({},xe),{format:K}))},ae=function(A){return(0,b.Tm)(A,{title:void 0})};return c.createElement(k,(0,y.Z)({},x,{valueRender:ae,formatter:Q}))},Ne=c.memo(Ae);k.Countdown=Ne;var re=k},95300:function(M,L,t){"use strict";var y=t(38663),c=t.n(y),C=t(81903),b=t.n(C),T=t(18446)},44286:function(M){function L(t){return t.split("")}M.exports=L},18190:function(M){var L=9007199254740991,t=Math.floor;function y(c,C){var b="";if(!c||C<1||C>L)return b;do C%2&&(b+=c),C=t(C/2),C&&(c+=c);while(C);return b}M.exports=y},14259:function(M){function L(t,y,c){var C=-1,b=t.length;y<0&&(y=-y>b?0:b+y),c=c>b?b:c,c<0&&(c+=b),b=y>c?0:c-y>>>0,y>>>=0;for(var T=Array(b);++C<b;)T[C]=t[C+y];return T}M.exports=L},40180:function(M,L,t){var y=t(14259);function c(C,b,T){var N=C.length;return T=T===void 0?N:T,!b&&T>=N?C:y(C,b,T)}M.exports=c},78302:function(M,L,t){var y=t(18190),c=t(80531),C=t(40180),b=t(62689),T=t(88016),N=t(83140),Z=Math.ceil;function w(h,m){m=m===void 0?" ":c(m);var F=m.length;if(F<2)return F?y(m,h):m;var U=y(m,Z(h/T(m)));return b(m)?C(N(U),0,h).join(""):U.slice(0,h)}M.exports=w},83140:function(M,L,t){var y=t(44286),c=t(62689),C=t(676);function b(T){return c(T)?C(T):y(T)}M.exports=b},676:function(M){var L="\\ud800-\\udfff",t="\\u0300-\\u036f",y="\\ufe20-\\ufe2f",c="\\u20d0-\\u20ff",C=t+y+c,b="\\ufe0e\\ufe0f",T="["+L+"]",N="["+C+"]",Z="\\ud83c[\\udffb-\\udfff]",w="(?:"+N+"|"+Z+")",h="[^"+L+"]",m="(?:\\ud83c[\\udde6-\\uddff]){2}",F="[\\ud800-\\udbff][\\udc00-\\udfff]",U="\\u200d",z=w+"?",H="["+b+"]?",le="(?:"+U+"(?:"+[h,m,F].join("|")+")"+H+z+")*",k=H+z+le,ee="(?:"+[h+N+"?",N,m,F,T].join("|")+")",fe=RegExp(Z+"(?="+Z+")|"+ee+k,"g");function ge(V){return V.match(fe)||[]}M.exports=ge},11726:function(M,L,t){var y=t(78302),c=t(88016),C=t(40554),b=t(79833);function T(N,Z,w){N=b(N),Z=C(Z);var h=Z?c(N):0;return Z&&h<Z?N+y(Z-h,w):N}M.exports=T},32475:function(M,L,t){var y=t(78302),c=t(88016),C=t(40554),b=t(79833);function T(N,Z,w){N=b(N),Z=C(Z);var h=Z?c(N):0;return Z&&h<Z?y(Z-h,w)+N:N}M.exports=T}}]);
