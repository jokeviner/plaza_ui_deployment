(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[98],{69250:function(Fe,st,i){"use strict";i.r(st),i.d(st,{default:function(){return ie}});var Ee=i(77576),Bt=i(12028),Ze=i(17462),jt=i(76772),be=i(74379),j=i(38648),Z=i(2824),g=i(90636),U=i(3182),Dt=i(21349),T=i(54433),b=i(5709),it=i(70719),A=i(11238),Be=i(18446),H=i(90860),Pt=i(952),Ut=i(64317),C=i(56139),Ct=i(30381),L=i.n(Ct),Rt=i(81354),z=i.n(Rt);function At(a,t){return N.apply(this,arguments)}function N(){return N=(0,U.Z)((0,g.Z)().mark(function a(t,r){var n;return(0,g.Z)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return n=Date.now(),s.abrupt("return",A.ZP.get("https://m1-coin.littlebrother.icu/api/",{method:"GET",headers:{"X-MBX-APIKEY":t.ak,"X-URL":{SPOT:"https://api.binance.com",SPOT_TEST:"https://testnet.binance.vision",FUTURE:"https://dapi.binance.com",FUTURE_TEST:"https://testnet.binancefuture.com"}["SPOT"+r]+"/api/v3/account"},params:{timestamp:n,recvWindow:5e3,signature:z().HmacSHA256("timestamp=".concat(n,"&recvWindow=5000"),t.sk).toString()}}));case 2:case"end":return s.stop()}},a)})),N.apply(this,arguments)}function Kt(a,t){return J.apply(this,arguments)}function J(){return J=(0,U.Z)((0,g.Z)().mark(function a(t,r){var n;return(0,g.Z)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return n=Date.now(),s.abrupt("return",A.ZP.get("https://m1-coin.littlebrother.icu/api/",{method:"GET",headers:{"X-MBX-APIKEY":t.ak,"X-URL":{SPOT:"https://api.binance.com",SPOT_TEST:"https://testnet.binance.vision",FUTURE:"https://dapi.binance.com",FUTURE_TEST:"https://testnet.binancefuture.com"}["FUTURE"+r]+"/dapi/v1/account"},params:{timestamp:n,recvWindow:5e3,signature:z().HmacSHA256("timestamp=".concat(n,"&recvWindow=5000"),t.sk).toString()}}));case 2:case"end":return s.stop()}},a)})),J.apply(this,arguments)}function q(a,t,r,n){return _.apply(this,arguments)}function _(){return _=(0,U.Z)((0,g.Z)().mark(function a(t,r,n,o){var s,u,l;return(0,g.Z)().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return s=Date.now(),n.timestamp=s,u=Object.keys(n).map(function(p){return"".concat(p,"=").concat(n[p])}).join("&"),l=z().HmacSHA256(u,o.sk).toString(),f.abrupt("return",(0,A.ZP)(r+"/api/?"+u+"&signature="+l,{method:"POST",headers:{"X-MBX-APIKEY":o.ak,"X-URL":t}}));case 5:case"end":return f.stop()}},a)})),_.apply(this,arguments)}function Ot(a,t,r,n,o,s){return tt.apply(this,arguments)}function tt(){return tt=(0,U.Z)((0,g.Z)().mark(function a(t,r,n,o,s,u){var l,d,f,p,v;return(0,g.Z)().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(l=Date.now(),d=n=="fromSpot"?3:4,f={asset:o,amount:s,type:d,timestamp:l,recvWindow:5e3},!(!u||!u.ak)){c.next=5;break}return c.abrupt("return",new Promise(function(h,x){x({data:"\u672A\u6DFB\u52A0\u8D26\u6237"})}));case 5:return p=Object.keys(f).map(function(h){return"".concat(h,"=").concat(f[h])}).join("&"),v=z().HmacSHA256(p,u.sk).toString(),c.abrupt("return",(0,A.ZP)(r+"/api/?"+p+"&signature="+v,{method:"POST",headers:{"X-MBX-APIKEY":u.ak,"X-URL":t+"/sapi/v1/futures/transfer"}}));case 8:case"end":return c.stop()}},a)})),tt.apply(this,arguments)}function wt(a,t,r,n,o){return et.apply(this,arguments)}function et(){return et=(0,U.Z)((0,g.Z)().mark(function a(t,r,n,o,s){var u,l,d,f;return(0,g.Z)().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:if(u=Date.now(),l={symbol:"BTCUSDT",side:"BUY",type:"MARKET",quantity:n,timestamp:u,recvWindow:5e3},!(!o||!o.ak)){v.next=4;break}return v.abrupt("return",new Promise(function(S,c){c({data:"\u672A\u6DFB\u52A0\u73B0\u8D27\u8D26\u6237"})}));case 4:return d=Object.keys(l).map(function(S){return"".concat(S,"=").concat(l[S])}).join("&"),f=z().HmacSHA256(d,o.sk).toString(),v.abrupt("return",(0,A.ZP)(r+"/api/?"+d+"&signature="+f,{method:"POST",headers:{"X-MBX-APIKEY":o.ak,"X-URL":t+(s?"/api/v3/order/test":"/api/v3/order")}}));case 7:case"end":return v.stop()}},a)})),et.apply(this,arguments)}function It(a,t,r,n,o,s){return at.apply(this,arguments)}function at(){return at=(0,U.Z)((0,g.Z)().mark(function a(t,r,n,o,s,u){return(0,g.Z)().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(!(!s||!s.ak)){d.next=2;break}return d.abrupt("return",new Promise(function(f,p){p("\u672A\u6DFB\u52A0\u671F\u8D27\u8D26\u6237")}));case 2:return d.abrupt("return",q(t+(u?"/dapi/v1/order/test":"/dapi/v1/order"),r,{symbol:n,side:"BUY",quantity:o,type:"MARKET"},s));case 3:case"end":return d.stop()}},a)})),at.apply(this,arguments)}function Mt(a,t,r,n,o,s,u){return nt.apply(this,arguments)}function nt(){return nt=(0,U.Z)((0,g.Z)().mark(function a(t,r,n,o,s,u,l){var d;return(0,g.Z)().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:if(!(!u||!u.ak)){p.next=2;break}return p.abrupt("return",new Promise(function(v,S){S("\u672A\u6DFB\u52A0\u671F\u8D27\u8D26\u6237")}));case 2:return p.next=4,q(t+"/dapi/v1/leverage",r,{symbol:n,leverage:o},u);case 4:return d=p.sent,p.abrupt("return",q(t+(l?"/dapi/v1/order/test":"/dapi/v1/order"),r,{symbol:n,side:"SELL",quantity:s,type:"MARKET"},u));case 6:case"end":return p.stop()}},a)})),nt.apply(this,arguments)}function kt(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:new Date,t=a.getFullYear(),r=a.getMonth()+1,n=29,o,s;r>=1&&r<=3?(o=new Date(t,2,n),s=new Date(t,5,n)):r>=4&&r<=6?(o=new Date(t,5,n),s=new Date(t,8,n)):r>=7&&r<=9?(o=new Date(t,8,n),s=new Date(t,11,n)):(o=new Date(t,11,n),s=new Date(t+1,2,n));var u=L()(a),l=L()(o),d=L()(s);return{quarter:[l.format("YYMMDD"),l.diff(u,"days")],nextQuarter:[d.format("YYMMDD"),d.diff(u,"days")]}}function ot(a,t){if(!t)return a.actuals_price;if(t==a.quarter)return a.futures_price;if(t==a.nextQuarter)return a.futures_next_price}function zt(a,t){return a.reduce(function(r,n,o){return r[n[t]]=n,r},{})}function lt(a){return a?a.reduce(function(t,r,n){return t[n]="[".concat(r.env,"]").concat(r.alias),t},{}):[]}function ct(a){if(a&&a.assets){var t=a.assets.find(function(r){return r.asset==="BTC"});return t}else return null}function pt(a){return a&&a.positions?a.positions.filter(function(t){return t.positionAmt!=0}):[]}function Qt(a){var t=new C.Z(0);return a&&a.positions?(t=a.positions.reduce(function(r,n){return n.symbol.startsWith("BTCUSD")&&n.positionAmt!=0&&(r=C.Z.add(r,n.notionalValue)),r},t),t.toString()):0}function Wt(a){if(a&&a.positions){var t=a.positions.filter(function(r){return r.symbol.startsWith("BTCUSD")});return t.reduce(function(r,n){return r[n.symbol]=n.symbol,r},{})}else return{}}function Xt(a){var t={};return t[a.quarter]=a.quarter,t[a.nextQuarter]=a.nextQuarter,t}var e=i(85893),dt=function(a){var t=a.accounts,r=a.updateKey,n=a.type;if(!t)return(0,e.jsx)(e.Fragment,{});var o=lt(t);return(0,e.jsx)(Pt.ZP,{submitter:!1,onValuesChange:function(u){Object.keys(u).length===0&&r(n,null),"account"in u&&r(n,{ak:t[u.account].ak,sk:t[u.account].sk})},children:(0,e.jsx)(Ut.Z,{name:"account",label:n=="spot"?"\u73B0\u8D27\u8D26\u6237":"\u5408\u7EA6\u8D26\u6237",valueEnum:o})})},$t=function(a){var t=a.accounts,r=a.updateKey,n=a.balances;return t?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(T.ZP,{ghost:!0,children:(0,e.jsx)(dt,{accounts:t,updateKey:r,type:"spot"})}),(!n||!n.USDT)&&(0,e.jsx)(H.Z,{active:!0}),n&&n.USDT&&(0,e.jsxs)(T.ZP,{wrap:!0,ghost:!0,children:[(0,e.jsx)(b.Z,{ghost:!0,statistic:{value:n.USDT.free,title:"USDT.free:"}}),(0,e.jsx)(b.Z,{ghost:!0,statistic:{value:n.BTC.free,title:"BTC.free:"}})]})]}):(0,e.jsx)(e.Fragment,{})},m=i(67294),Gt=function(a){var t=a.accounts,r=a.updateKey,n=a.balances;if(!t)return(0,e.jsx)(e.Fragment,{});var o=lt(t),s=[{dataIndex:"index",valueType:"indexBorder",width:48},{title:"\u5408\u7EA6",dataIndex:"symbol",copyable:!0},{title:"x",dataIndex:"leverage"},{title:"\u6570\u91CF",dataIndex:"positionAmt"},{title:"\u4FDD\u8BC1\u91D1\u5360\u7528",dataIndex:"notionalValue"},{title:"\u6301\u4ED3\u6210\u672C",dataIndex:"entryPrice"},{title:"\u7EF4\u6301\u4FDD\u8BC1\u91D1",dataIndex:"maintMargin"},{title:"\u672A\u5B9E\u73B0\u76C8\u4E8F",dataIndex:"unrealizedProfit"},{title:"\u6700\u5927\u53EF\u5F00\u4ED3\u6570",dataIndex:"maxQty"}],u=null,l=[];return n&&n.assets&&(u=ct(n),l=pt(n)),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(T.ZP,{ghost:!0,children:(0,e.jsx)(dt,{accounts:t,updateKey:r,type:"future"})}),(!n||!u)&&(0,e.jsx)(H.Z,{active:!0}),n&&u&&(0,e.jsxs)(T.ZP,{wrap:!0,ghost:!0,children:[(0,e.jsxs)(b.Z.Group,{children:[(0,e.jsx)(b.Z,{ghost:!0,statistic:{value:u.availableBalance,title:"\u53EF\u7528BTC:"}}),(0,e.jsx)(T.ZP.Divider,{}),(0,e.jsx)(b.Z,{ghost:!0,statistic:{value:u.maintMargin,title:"\u7EF4\u6301\u4FDD\u8BC1\u91D1:"}})]}),(0,e.jsxs)(b.Z.Group,{children:[(0,e.jsx)(b.Z,{ghost:!0,statistic:{value:u.marginBalance,title:"\u4FDD\u8BC1\u91D1\u4F59\u989D:"}}),(0,e.jsx)(T.ZP.Divider,{}),(0,e.jsx)(b.Z,{ghost:!0,statistic:{value:u.walletBalance,title:"\u94B1\u5305\u4F59\u989D:"}})]})]})]})},je=i(3515),Ht=i(44311),Vt=i(48717),I=b.Z.Statistic,Yt=function(a){var t=a.data,r=(0,m.useState)(!1),n=(0,Z.Z)(r,2),o=n[0],s=n[1];return(0,e.jsx)(Vt.Z,{onResize:function(l){s(l.width<692)},children:(0,e.jsx)(Ht.Z,{offsetTop:45,children:(0,e.jsxs)(b.Z.Group,{direction:o?"column":"row",span:24,children:[(0,e.jsx)(b.Z,{title:"\u73B0\u8D27\u4EF7\u683C",statistic:{value:(+t.actuals_price).toFixed(2),suffix:"USDT",valueStyle:{fontWeight:"bold"}}}),(0,e.jsx)(b.Z,{title:"\u5F53\u5B63: "+t.quarter,statistic:{value:((t.futures_price-t.actuals_price)*100*365/(t.actuals_price*t.left_days)).toFixed(2),prefix:(0,e.jsx)("span",{style:{fontSize:16},children:"\u5E74\u5316"}),valueStyle:{fontWeight:"bold"},suffix:"%"},extra:(0,e.jsx)(I,{value:t.left_days,title:"\u5269\u4F59\u5929\u6570: ",layout:"horizontal"}),footer:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(I,{value:(+t.futures_price).toFixed(2),suffix:"USDT",title:"\u671F\u8D27\u4EF7\u683C",layout:"horizontal"}),(0,e.jsx)(I,{value:((t.futures_price-t.actuals_price)*100/t.actuals_price).toFixed(2),suffix:"%",title:"margin",layout:"horizontal"})]})}),(0,e.jsx)(b.Z,{title:"\u6B21\u5B63: "+t.nextQuarter,statistic:{value:((t.futures_next_price-t.actuals_price)*100*365/(t.actuals_price*t.left_next_days)).toFixed(2),prefix:(0,e.jsx)("span",{style:{fontSize:16},children:"\u5E74\u5316"}),valueStyle:{fontWeight:"bold"},suffix:"%"},extra:(0,e.jsx)(I,{value:t.left_next_days,title:"\u5269\u4F59\u5929\u6570: ",layout:"horizontal"}),footer:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(I,{value:(+t.futures_next_price).toFixed(2),suffix:"USDT",title:"\u671F\u8D27\u4EF7\u683C",layout:"horizontal"}),(0,e.jsx)(I,{value:((t.futures_next_price-t.actuals_price)*100/t.actuals_price).toFixed(2),suffix:"%",title:"margin",layout:"horizontal"})]})})]})})},"resize-observer")},De=i(57663),Q=i(71577),Pe=i(71194),Lt=i(50146),Nt=i(57119),Jt=i(6723),qt=function(a){var t=a.balances,r=a.futureKey,n=a.futureUrl;if(!t)return(0,e.jsx)(e.Fragment,{});var o=Lt.Z.confirm,s=function(){o({title:"\u6CE8\u610F\uFF0C\u5207\u52FF\u91CD\u590D\u4E0B\u5355",icon:(0,e.jsx)(Nt.Z,{}),content:"\u4E00\u952E\u5E73\u4ED3\u5DF2\u4F7F\u7528\u5E02\u4EF7\u4E0B\u5355\uFF0C\u5207\u52FF\u91CD\u590D\u70B9\u51FB\uFF0C\u9632\u6B62\u91CD\u590D\u4E0B\u5355"})},u=function(p){var v=-1*p.positionAmt,S=It(n,"https://m1-coin.littlebrother.icu",p.symbol,v,r,!1);S.then(function(c){s(),j.Z.info({message:"\u4E00\u952E\u5E73\u4ED3\u5DF2\u4E0B\u5355",description:"",placement:"bottomRight",duration:15})}).catch(function(c){j.Z.warning({message:"\u4E00\u952E\u5E73\u4ED3\u4E0B\u5355\u5931\u8D25",description:JSON.stringify(c.data),placement:"bottomRight",duration:15})})},l=[{dataIndex:"index",valueType:"indexBorder",width:48},{title:"\u5408\u7EA6",dataIndex:"symbol",copyable:!0},{title:"x",dataIndex:"leverage"},{title:"\u6570\u91CF",dataIndex:"positionAmt"},{title:"\u4FDD\u8BC1\u91D1\u5360\u7528",dataIndex:"notionalValue"},{title:"\u6301\u4ED3\u6210\u672C",dataIndex:"entryPrice"},{title:"\u7EF4\u6301\u4FDD\u8BC1\u91D1",dataIndex:"maintMargin"},{title:"\u672A\u5B9E\u73B0\u76C8\u4E8F",dataIndex:"unrealizedProfit"},{title:"\u6700\u5927\u53EF\u5F00\u4ED3\u6570",dataIndex:"maxQty"},{title:"\u4E00\u952E\u5E73\u4ED3",valueType:"option",key:"option",render:function(p,v,S,c){return[(0,e.jsx)(Q.Z,{type:"link",onClick:function(){u(v)},children:"\u5E02\u4EF7"},"closePosition")]}}],d=[];return t&&t.assets&&(d=pt(t)),(0,e.jsx)(T.ZP,{span:{xs:24,l:12},collapsible:!0,title:"\u5408\u7EA6\u6301\u4ED3\u660E\u7EC6",defaultCollapsed:!0,children:t&&(0,e.jsx)(Jt.ZP,{columns:l,dataSource:d,rowKey:"symbol",search:!1,options:{setting:{listsHeight:400}},dateFormatter:"string"})})},Ue=i(22385),_t=i(45777),W=i(80996),V=i(60014),ft=i(25641),te=function(a){var t=a.marketData,r=a.spotKey,n=a.futureBtcSymbols,o=a.futureKey,s=a.spotUrl,u=a.futureUrl,l=(0,m.useRef)(),d=(0,m.useState)(!1),f=(0,Z.Z)(d,2),p=f[0],v=f[1],S=function(){var h,x,B=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;(h=l.current)===null||h===void 0||(x=h.validateFieldsReturnFormatValue)===null||x===void 0||x.call(h).then(function(K){v(!0);var X=ot(t,K.symbol),M=C.Z.floor(C.Z.div(C.Z.mul(K.btc,X),100)),O=wt(s,"https://m1-coin.littlebrother.icu",K.btc,r,B),Y=Mt(u,"https://m1-coin.littlebrother.icu",K.symbol,K.leverage,M.toString(),o,B);O.then(function(w){j.Z.info({message:(B?"[\u6D4B\u8BD5]":"")+"\u73B0\u8D27\u8D2D\u4E70\u5DF2\u4E0B\u5355",description:"",placement:"bottomRight",duration:15})}).catch(function(w){j.Z.warning({message:(B?"[\u6D4B\u8BD5]":"")+"\u73B0\u8D27\u8D2D\u4E70\u4E0B\u5355\u5931\u8D25",description:JSON.stringify(w.data),placement:"bottomRight",duration:15})}),Y.then(function(w){j.Z.info({message:(B?"[\u6D4B\u8BD5]":"")+"\u671F\u6743\u5DF2\u4E0B\u5355",description:"",placement:"bottomRight",duration:15})}).catch(function(w){j.Z.warning({message:(B?"[\u6D4B\u8BD5]":"")+"\u671F\u6743\u4E0B\u5355\u5931\u8D25",description:JSON.stringify(w.data),placement:"bottomRight",duration:15})}),Promise.all([O,Y]).finally(function(){v(!1)})})};return(0,m.useEffect)(function(){var c;l==null||(c=l.current)===null||c===void 0||c.setFieldsValue({symbol:n?Object.keys(n)[0]:""})},[n]),(0,e.jsxs)(W.A,{grid:!0,rowProps:{gutter:[16,16]},layout:"horizontal",submitter:!1,formRef:l,initialValues:{leverage:"1"},onValuesChange:function(h){if("btc"in h){var x,B=ot(t,h.symbol);l==null||(x=l.current)===null||x===void 0||x.setFieldsValue({btcAmt:h.btc,btcCont:C.Z.floor(C.Z.div(C.Z.mul(h.btc,B),100))})}},children:[(0,e.jsxs)(W.A.Group,{children:[(0,e.jsx)(V.Z,{label:"BTC",name:"btc",required:!0,colProps:{md:12,xl:8},rules:[{required:!0,message:"\u8F93\u5165\u6570\u5B57"}]}),(0,e.jsx)(ft.Z,{colProps:{md:12,xl:8},name:"leverage",label:"\u6760\u6746",valueEnum:Array.from({length:50}).reduce(function(c,h,x){return c[x+1]="x"+(x+1),c},{})}),(0,e.jsx)(ft.Z,{colProps:{md:12,xl:8},name:"symbol",label:"\u5408\u7EA6",valueEnum:n})]}),(0,e.jsxs)(W.A.Group,{children:[(0,e.jsx)(V.Z,{readonly:!0,label:"\u73B0\u8D27\u4E70\u5165BTC\u6570\u91CF",name:"btcAmt",colProps:{md:12,xl:8}}),(0,e.jsx)(V.Z,{colProps:{md:12,xl:8},readonly:!0,label:"\u671F\u8D27\u5356\u51FA\u5F20\u6570\uFF08100USD/\u5F20\uFF09",name:"btcCont"})]}),(0,e.jsxs)(W.A.Group,{children:[(0,e.jsx)(Q.Z,{type:"primary",loading:p,onClick:function(){S(!1)},children:"\u5E02\u4EF7\u4E70\u5165BTC\u73B0\u8D27\uFF0C\u5356\u51FABTC\u671F\u6743"}),(0,e.jsx)(_t.Z,{mouseEnterDelay:1,title:"\u7531\u4E8EAPI\u63A5\u53E3\u539F\u56E0\uFF0C\u6D4B\u8BD5\u5E76\u4E0D\u80FD\u68C0\u67E5\u51FA\u4F59\u989D\u4E0D\u8DB3\u7684\u95EE\u9898\uFF0C\u4E3B\u8981\u7528\u4E8E\u8D26\u6237\u72B6\u6001\u68C0\u67E5\uFF0C\u5B9E\u9645\u4EA4\u6613\u80FD\u5426\u6210\u529F\u4EE5\u5B9E\u9645\u4EA4\u6613\u4E3A\u51C6",children:(0,e.jsx)(Q.Z,{type:"link",loading:p,onClick:function(){S(!0)},children:"\u6D4B\u8BD5"})})]})]})},ee=i(11849),ae=i(65893),ne=function(a){var t=a.balances,r=null;if(t&&t.assets)r=ct(t);else return(0,e.jsx)(e.Fragment,{});var n={height:66,width:66,percent:r.maintMargin/r.marginBalance,type:"meter",innerRadius:.8,autoFit:!1,padding:0,appendPadding:0,range:{ticks:[0,1/3,2/3,1],color:["#30BF78","#FAAD14","#F4664A"]},indicator:{pointer:{style:{lineWidth:3,stroke:"#D0D0D0"}},pin:{style:{lineWidth:3,r:5,stroke:"#D0D0D0"}}},axis:{label:null,subTickLine:null}};return(0,e.jsx)(b.Z,{title:"\u5408\u7EA6\u4FDD\u8BC1\u91D1\u6C34\u4F4D",chartPlacement:"left",statistic:{value:(r.maintMargin*100/r.marginBalance).toFixed(2),valueStyle:{lineHeight:"66px"},suffix:"%"},chart:(0,e.jsx)(ae.Z,(0,ee.Z)({},n))})},re=i(86615),ue=function(a){var t=a.accounts,r=a.spotUrl,n=a.spotKey,o=a.futureKey,s=(0,m.useRef)(),u=(0,m.useState)(!1),l=(0,Z.Z)(u,2),d=l[0],f=l[1],p=function(S){var c,h;(c=s.current)===null||c===void 0||(h=c.validateFieldsReturnFormatValue)===null||h===void 0||h.call(c).then(function(x){f(!0);var B=x.quantity,K=x.asset,X=S=="fromSpot"?n:o,M=Ot(r,"https://m1-coin.littlebrother.icu",S,K,B,X);M.then(function(){j.Z.info({message:"\u4ECE "+(S=="fromSpot"?"\u73B0\u8D27":"\u5408\u7EA6")+" \u8F6C\u51FA\u6210\u529F",description:"",placement:"bottomRight",duration:15})}).catch(function(O){j.Z.warning({message:"\u4ECE "+(S=="fromSpot"?"\u73B0\u8D27":"\u5408\u7EA6")+" \u8F6C\u51FA\u5931\u8D25",description:JSON.stringify(O.data),placement:"bottomRight",duration:30})})})};return t?(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(W.A,{grid:!0,formRef:s,rowProps:{gutter:[16,16]},layout:"horizontal",submitter:!1,initialValues:{asset:"BTC"},children:[(0,e.jsx)(re.Z.Group,{name:"asset",radioType:"button",options:["BTC","USDT"]}),(0,e.jsx)("br",{}),(0,e.jsx)(V.Z,{name:"quantity",required:!0,rules:[{required:!0,message:"\u8F93\u5165\u6570\u5B57"}]}),(0,e.jsx)(Q.Z,{type:"primary",onClick:function(){p("fromSpot")},children:">>\u73B0\u8D27\u8F6C\u5408\u7EA6>>"}),(0,e.jsx)(Q.Z,{type:"primary",onClick:function(){p("fromFuture")},children:"<<\u5408\u7EA6\u8F6C\u73B0\u8D27<<"})]})}):(0,e.jsx)(e.Fragment,{})},se=function(){var a=(0,U.Z)((0,g.Z)().mark(function t(){return(0,g.Z)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,it.WY)("https://m1-coin.littlebrother.icu/account/",{method:"GET",headers:{"Content-Type":"application/json"}}));case 1:case"end":return n.stop()}},t)}));return function(){return a.apply(this,arguments)}}(),ie=function(){var a=(0,m.useState)("_TEST"),t=(0,Z.Z)(a,2),r=t[0],n=t[1],o=(0,m.useState)({actuals_price:0,futures_price:0,futures_next_price:0,left_days:10,left_next_days:10,quarter:"BTCUSD_",nextQuarter:"BTCUSD"}),s=(0,Z.Z)(o,2),u=s[0],l=s[1],d=function(){var E=kt(),P=A.ZP.get({SPOT:"https://api.binance.com",SPOT_TEST:"https://testnet.binance.vision",FUTURE:"https://dapi.binance.com",FUTURE_TEST:"https://testnet.binancefuture.com"}["SPOT"+r]+"/api/v3/ticker/price?symbol=BTCUSDT"),R=A.ZP.get({SPOT:"https://api.binance.com",SPOT_TEST:"https://testnet.binance.vision",FUTURE:"https://dapi.binance.com",FUTURE_TEST:"https://testnet.binancefuture.com"}["FUTURE"+r]+"/dapi/v1/ticker/price?symbol=BTCUSD_".concat(E.quarter[0])),G=A.ZP.get({SPOT:"https://api.binance.com",SPOT_TEST:"https://testnet.binance.vision",FUTURE:"https://dapi.binance.com",FUTURE_TEST:"https://testnet.binancefuture.com"}["FUTURE"+r]+"/dapi/v1/ticker/price?symbol=BTCUSD_".concat(E.nextQuarter[0]));Promise.all([P,R,G]).then(function(F){var y=(0,Z.Z)(F,3),Se=y[0],xe=y[1],ye=y[2],Te={actuals_price:Se.price,futures_price:xe[0].price,futures_next_price:ye[0].price,left_days:E.quarter[1],left_next_days:E.nextQuarter[1],quarter:"BTCUSD_"+E.quarter[0],nextQuarter:"BTCUSD_"+E.nextQuarter[0]};l(Te)})};(0,m.useEffect)(function(){var D=setInterval(function(){d()},1e3);return function(){return clearInterval(D)}},[r]);var f=(0,m.useState)(null),p=(0,Z.Z)(f,2),v=p[0],S=p[1];(0,m.useEffect)(function(){S(Xt(u))},[u.quarter]);var c=(0,it.QT)(se),h=(0,m.useState)(5),x=(0,Z.Z)(h,2),B=x[0],K=x[1],X=(0,m.useState)(0),M=(0,Z.Z)(X,2),O=M[0],Y=M[1],w=(0,m.useState)(0),mt=(0,Z.Z)(w,2),rt=mt[0],oe=mt[1],le=(0,m.useState)(null),vt=(0,Z.Z)(le,2),$=vt[0],ce=vt[1],pe=(0,m.useState)(null),ht=(0,Z.Z)(pe,2),k=ht[0],de=ht[1],gt=function(E,P){var R=E=="spot"?ce:de;R(P)},fe=(0,m.useState)({}),St=(0,Z.Z)(fe,2),me=St[0],xt=St[1],yt=function(){var D=(0,U.Z)((0,g.Z)().mark(function E(){var P,R;return(0,g.Z)().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:if($){F.next=2;break}return F.abrupt("return");case 2:return F.prev=2,F.next=5,At($,r);case 5:P=F.sent,R=zt(P.balances,"asset"),j.Z.close("updateSpotBalance"),xt(R),Y(R.BTC.free),F.next=17;break;case 12:F.prev=12,F.t0=F.catch(2),j.Z.warning({message:"\u73B0\u8D27\u8D26\u6237\u4FE1\u606F\u83B7\u53D6\u5931\u8D25",key:"updateSpotBalance",description:JSON.stringify(F.t0.data),placement:"bottomRight",duration:15}),console.log(F.t0.data),xt({});case 17:case"end":return F.stop()}},E,null,[[2,12]])}));return function(){return D.apply(this,arguments)}}();(0,m.useEffect)(function(){yt();var D=setInterval(yt,B*1e3);return function(){clearInterval(D)}},[$,r]);var ve=(0,m.useState)({}),Tt=(0,Z.Z)(ve,2),ut=Tt[0],Ft=Tt[1],Et=function(){var D=(0,U.Z)((0,g.Z)().mark(function E(){var P,R,G;return(0,g.Z)().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:if(k){y.next=2;break}return y.abrupt("return");case 2:return y.prev=2,y.next=5,Kt(k,r);case 5:P=y.sent,R=Wt(P),G=Qt(P),Ft(P),oe(G),j.Z.close("updateFutureBalance"),y.next=18;break;case 13:y.prev=13,y.t0=y.catch(2),j.Z.warning({message:"\u5408\u7EA6\u8D26\u6237\u4FE1\u606F\u83B7\u53D6\u5931\u8D25",key:"updateFutureBalance",description:JSON.stringify(y.t0.data),placement:"bottomRight",duration:15}),console.log(y.t0),Ft({});case 18:case"end":return y.stop()}},E,null,[[2,13]])}));return function(){return D.apply(this,arguments)}}();(0,m.useEffect)(function(){Et();var D=setInterval(Et,B*1e3);return function(){clearInterval(D)}},[k,r]);var he=(0,m.useState)(null),Zt=(0,Z.Z)(he,2),bt=Zt[0],ge=Zt[1];return(0,m.useEffect)(function(){typeof+O=="number"&&typeof+rt=="number"&&ge(C.Z.add(O,rt))},[O,rt,r]),(0,e.jsxs)(Dt.Z,{children:[r=="_TEST"&&(0,e.jsx)(jt.Z,{message:"\u6CE8\u610F\uFF1A\u5F53\u524D\u4E3A\u6D4B\u8BD5\u6A21\u5F0F\uFF0C\u8C03\u7528\u7684\u63A5\u53E3\u5747\u4E3A\u5E01\u5B89\u6D4B\u8BD5\u7F51\u7EDC\uFF0C\u6D4B\u8BD5\u73AF\u5883\u53EF\u80FD\u56E0\u4E3A\u4EF7\u683C\u5DEE\u8DDD\u8F83\u5927\u5BFC\u81F4\u4E0B\u5355\u5931\u8D25\uFF08PERCENT_PRICE filter limit\uFF09\u7B49\u5176\u4ED6\u5F02\u5E38\u73B0\u8C61",banner:!0}),(0,e.jsx)(T.ZP,{ghost:!0,style:{marginBottom:20},title:"\u73B0\u8D27\u671F\u8D27\u5BF9\u51B2\u5957\u5229(BTC)",extra:(0,e.jsx)(Bt.Z,{defaultChecked:r!="_TEST",checkedChildren:"\u7EBF\u4E0A",unCheckedChildren:"\u6D4B\u8BD5",onChange:function(E){n(E?"":"_TEST")}}),children:(0,e.jsx)(Yt,{data:u})}),c.loading==!1&&c.data&&(0,e.jsxs)(T.ZP,{wrap:!0,style:{marginBottom:20},bodyStyle:{padding:0},children:[(0,e.jsx)(T.ZP,{colSpan:10,children:(0,e.jsx)($t,{accounts:c.data,updateKey:gt,balances:me})}),(0,e.jsx)(T.ZP,{colSpan:4,children:(0,e.jsx)(ue,{accounts:c.data,spotKey:$,futureKey:k,spotUrl:{SPOT:"https://api.binance.com",SPOT_TEST:"https://testnet.binance.vision",FUTURE:"https://dapi.binance.com",FUTURE_TEST:"https://testnet.binancefuture.com"}["SPOT"+r]})}),(0,e.jsx)(T.ZP,{colSpan:10,children:(0,e.jsx)(Gt,{accounts:c.data,updateKey:gt,balances:ut})})]}),(0,e.jsx)(T.ZP,{ghost:!0,style:{marginBottom:20},children:(0,e.jsx)(qt,{balances:ut,futureUrl:{SPOT:"https://api.binance.com",SPOT_TEST:"https://testnet.binance.vision",FUTURE:"https://dapi.binance.com",FUTURE_TEST:"https://testnet.binancefuture.com"}["FUTURE"+r],futureKey:k})}),(0,e.jsxs)(T.ZP,{wrap:!0,style:{marginBottom:20},children:[(0,e.jsx)(T.ZP,{ghost:!0,colSpan:{xs:24,md:12,lg:12},children:(0,e.jsx)(b.Z,{title:"BTC\u98CE\u9669\u655E\u53E3",statistic:{value:bt&&bt.toString(),suffix:"BTC",valueStyle:{fontWeight:"bold",lineHeight:"66px"}}})}),(0,e.jsx)(T.ZP,{ghost:!0,colSpan:{xs:24,md:12,lg:12},children:(0,e.jsx)(ne,{balances:ut})})]}),(0,e.jsx)(T.ZP,{style:{marginBottom:20},children:(0,e.jsx)(te,{futureBtcSymbols:v,marketData:u,spotKey:$,futureKey:k,spotUrl:{SPOT:"https://api.binance.com",SPOT_TEST:"https://testnet.binance.vision",FUTURE:"https://dapi.binance.com",FUTURE_TEST:"https://testnet.binancefuture.com"}["SPOT"+r],futureUrl:{SPOT:"https://api.binance.com",SPOT_TEST:"https://testnet.binance.vision",FUTURE:"https://dapi.binance.com",FUTURE_TEST:"https://testnet.binancefuture.com"}["FUTURE"+r]})})]})}},42480:function(){}}]);
