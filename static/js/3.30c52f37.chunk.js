(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{175:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i.default}});var i=n(a(5635))},176:function(e,t,a){"use strict";var n=a(174);Object.defineProperty(t,"__esModule",{value:!0});var i={};Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l.default}});var l=n(a(5636));Object.keys(l).forEach(function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(i,e)||Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}}))})},5635:function(e,t,a){"use strict";var n=a(174),i=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(a(3)),r=i(a(0)),c=(i(a(2)),n(a(176))),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var a=e.breakpoint,n=void 0===a?"sm":a;return(0,c.default)()(function(e){return r.default.createElement(t,(0,l.default)({fullScreen:(0,c.isWidthDown)(n,e.width)},e))})}};t.default=o},5636:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.isWidthDown=t.isWidthUp=void 0;var i=n(a(3)),l=n(a(4)),r=n(a(11)),c=n(a(12)),o=n(a(13)),u=n(a(14)),m=n(a(15)),s=n(a(0)),d=(n(a(2)),n(a(46))),p=n(a(45)),f=(a(9),n(a(43))),h=n(a(52)),E=a(106),g=n(a(177));t.isWidthUp=function(e,t){return arguments.length>2&&void 0!==arguments[2]&&!arguments[2]?E.keys.indexOf(e)<E.keys.indexOf(t):E.keys.indexOf(e)<=E.keys.indexOf(t)};t.isWidthDown=function(e,t){return arguments.length>2&&void 0!==arguments[2]&&!arguments[2]?E.keys.indexOf(t)<E.keys.indexOf(e):E.keys.indexOf(t)<=E.keys.indexOf(e)};var v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var a=e.withTheme,n=void 0!==a&&a,v=e.noSSR,b=void 0!==v&&v,y=e.initialWidth,w=e.resizeInterval,C=void 0===w?166:w,k=function(e){function a(e){var t;return(0,r.default)(this,a),(t=(0,o.default)(this,(0,u.default)(a).call(this,e))).state={width:b?t.getWidth():void 0},"undefined"!==typeof window&&(t.handleResize=(0,p.default)(function(){var e=t.getWidth();e!==t.state.width&&t.setState({width:e})},C)),t}return(0,m.default)(a,e),(0,c.default)(a,[{key:"componentDidMount",value:function(){var e=this.getWidth();e!==this.state.width&&this.setState({width:e})}},{key:"componentWillUnmount",value:function(){this.handleResize.clear()}},{key:"getWidth",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.innerWidth,t=this.props.theme.breakpoints,a=null,n=1;null===a&&n<E.keys.length;){var i=E.keys[n];if(e<t.values[i]){a=E.keys[n-1];break}n+=1}return a=a||"xl"}},{key:"render",value:function(){var e=(0,g.default)({theme:this.props.theme,name:"MuiWithWidth",props:(0,i.default)({},this.props)}),a=e.initialWidth,r=e.theme,c=e.width,o=(0,l.default)(e,["initialWidth","theme","width"]),u=(0,i.default)({width:c||this.state.width||a||y},o);return void 0===u.width?null:(n&&(u.theme=r),s.default.createElement(s.default.Fragment,null,s.default.createElement(t,u),s.default.createElement(d.default,{target:"window",onResize:this.handleResize})))}}]),a}(s.default.Component);return(0,f.default)(k,t),(0,h.default)()(k)}};t.default=v},5637:function(e,t,a){"use strict";a.r(t);var n=a(44),i=a(29),l=a(30),r=a(32),c=a(31),o=a(33),u=a(17),m=a(0),s=a.n(m),d=a(16),p=a(5),f=a(113),h=a.n(f),E=a(107),g=a(175),v=a.n(g),b=a(34),y=Object(d.withStyles)(function(e){return{head:{backgroundColor:e.palette.primary.light,color:e.palette.common.white,textAlign:"center"},body:{fontSize:12,textAlign:"center"}}})(p.x);function w(e){return s.a.createElement(p.t,Object.assign({direction:"up"},e))}var C=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).state={open:!1},a.handleClick=function(){a.props.history.push("/")},a.handleClose=function(){a.setState({open:!1})},a.handleOpen=function(){a.setState({open:!0})},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.fullScreen,n=e.type,i=e.result,l=1===n?b.d:b.c;return s.a.createElement("main",{className:t.root},s.a.createElement("div",{className:t.fabContainer},s.a.createElement(p.f,{color:"secondary",className:t.fab,onClick:this.handleClick},s.a.createElement(E.b,null))),s.a.createElement(p.p,{className:t.paper,elevation:2},s.a.createElement(p.i,{container:!0,alignItems:"center",justify:"space-between",className:t.grid},s.a.createElement(p.i,{item:!0},s.a.createElement(p.C,{variant:"caption",gutterBottom:!0},1===n?"\u5e74\u5ea6\u7a0e\u524d(\u5143)":"\u7a0e\u524d\u6536\u5165(\u5143)"),s.a.createElement(p.C,{variant:"subtitle2"},i.income)),s.a.createElement(p.i,{item:!0},s.a.createElement(p.C,{variant:"caption",gutterBottom:!0},1===n?"\u5e74\u5ea6\u4e2a\u7a0e(\u5143)":"\u5e94\u7eb3\u4e2a\u7a0e(\u5143)"),s.a.createElement(p.C,{variant:"subtitle2",color:"secondary"},i.tax)),s.a.createElement(p.i,{item:!0},s.a.createElement(p.C,{variant:"caption",gutterBottom:!0},1===n?"\u5e74\u5ea6\u7a0e\u540e(\u5143)":"\u7a0e\u540e\u6536\u5165(\u5143)"),s.a.createElement(p.C,{variant:"subtitle2",color:"primary"},i.afterTax))),1===n&&s.a.createElement(s.a.Fragment,null,s.a.createElement(p.e,{className:t.divider}),s.a.createElement(p.l,{disablePadding:!0},s.a.createElement(p.m,{className:t.listItem},s.a.createElement(p.n,{primary:s.a.createElement(p.C,{variant:"caption"},"\u8d77\u5f81\u70b9(\u51cf\u9664\u8d39\u7528)")}),s.a.createElement(p.C,null,"60000")),s.a.createElement(p.m,{className:t.listItem},s.a.createElement(p.n,{primary:s.a.createElement(p.C,{variant:"caption"},"\u4e94\u9669\u4e00\u91d1(\u4e2a\u4eba\u7f34\u7eb3\u90e8\u5206)")}),s.a.createElement(p.C,null,i.totalInsurance)),s.a.createElement(p.m,{className:t.listItem},s.a.createElement(p.n,{primary:s.a.createElement(p.C,{variant:"caption"},"\u4e13\u9879\u62b5\u6263")}),s.a.createElement(p.C,null,i.additional))),s.a.createElement(p.b,{variant:"text",color:"primary",onClick:this.handleOpen},s.a.createElement(E.c,null),"\u67e5\u770b\u6bcf\u6708\u6536\u5165\u660e\u7ec6"))),1===n&&s.a.createElement(p.d,{fullScreen:a,fullWidth:!0,open:this.state.open,onClose:this.handleClose,"aria-labelledby":"month-tax",TransitionComponent:w},s.a.createElement(p.v,{padding:"none"},s.a.createElement(p.y,null,s.a.createElement(p.z,{className:t.tableRow},s.a.createElement(y,null,"\u6708\u4efd"),s.a.createElement(y,null,"\u7a0e\u524d"),s.a.createElement(y,null,"\u5f53\u6708\u4e2a\u7a0e"),s.a.createElement(y,null,"\u4e94\u9669\u4e00\u91d1"),s.a.createElement(y,null,"\u7a0e\u540e"))),s.a.createElement(p.w,null,i.aMonthTax.map(function(e,a){return s.a.createElement(p.z,{key:a,className:t.tableRow},s.a.createElement(y,null,"".concat(a+1,"\u6708")),s.a.createElement(y,null,e.income),s.a.createElement(y,null,e.tax),s.a.createElement(y,null,i.insurance),s.a.createElement(y,null,e.afterTax))}))),s.a.createElement(p.j,{color:"default",onClick:this.handleClose,className:t.button},s.a.createElement(E.a,null))),s.a.createElement(p.C,{variant:"button",className:t.detail},"\u8ba1\u7b97\u8be6\u60c5"),s.a.createElement(p.C,{className:t.fomular,variant:"overline"},1===n?"\u5e74\u5ea6\u4e2a\u7a0e = \uff08\u7d2f\u8ba1\u7a0e\u524d - \u7d2f\u8ba1\u4e94\u9669\u4e00\u91d1 - \u7d2f\u8ba1\u4e13\u9879\u9644\u52a0\u6263\u9664 - \u7d2f\u8ba1\u51cf\u9664\u8d39\u7528\uff09\xd7 \u7a0e\u7387 - \u901f\u7b97\u6263\u9664\u6570":"\u4e2a\u7a0e = \u7a0e\u524d x \u7a0e\u7387 - \u901f\u7b97\u6263\u9664\u6570"),s.a.createElement(p.l,null,s.a.createElement(p.m,null,s.a.createElement(p.n,{primary:s.a.createElement(p.C,{variant:"caption"},1===n?"(\u7d2f\u8ba1\u7a0e\u524d-\u7d2f\u8ba1\u4e94\u9669\u4e00\u91d1-\u7d2f\u8ba1\u4e13\u9879\u6263\u9664-\u7d2f\u8ba1\u51cf\u9664\u8d39\u7528)":"\u7a0e\u524d")}),s.a.createElement(p.C,null,1===n?(i.income-i.totalDeduction).toFixed(2):i.income)),s.a.createElement(p.m,null,s.a.createElement(p.n,{primary:s.a.createElement(p.C,{variant:"caption"},"\u7a0e\u7387")}),s.a.createElement(p.C,null,"\xd7".concat(i.taxRate,"%"))),s.a.createElement(p.m,{divider:!0},s.a.createElement(p.n,{primary:s.a.createElement(p.C,{variant:"caption"},"\u901f\u7b97\u6263\u9664\u6570")}),s.a.createElement(p.C,null,"-",i.quickDeduction)),s.a.createElement(p.m,null,s.a.createElement(p.n,{primary:s.a.createElement(p.C,{variant:"caption"},"\u4e2a\u7a0e")}),s.a.createElement(p.C,null,i.tax))),s.a.createElement(p.C,{variant:"button",className:t.detail},1===n?"\u5e74\u5ea6\u4e2a\u4eba\u6240\u5f97\u7a0e\u7a0e\u7387\u8868":"\u5e74\u7ec8\u5956\u4e2a\u4eba\u6240\u5f97\u7a0e\u7387\u8868",1!==n&&s.a.createElement(p.C,{variant:"caption",inline:!0},"\uff08* \u5e74\u7ec8\u5956/12\u83b7\u5f97\u7a0e\u7387\u548c\u901f\u7b97\u6570\uff09")),s.a.createElement(p.v,{padding:"none"},s.a.createElement(p.y,null,s.a.createElement(p.z,{className:t.tableRow},s.a.createElement(y,null,"\u7ea7\u6570"),s.a.createElement(y,null,"\u5e94\u7eb3\u7a0e\u6240\u5f97\u989d"),s.a.createElement(y,null,"\u7a0e\u7387(%)"),s.a.createElement(y,null,"\u901f\u7b97\u6263\u9664\u6570"))),s.a.createElement(p.w,null,l.map(function(e){return s.a.createElement(p.z,{key:e.id,className:t.tableRow},s.a.createElement(y,null,e.id),s.a.createElement(y,null,e.income),s.a.createElement(y,null,e.taxRate),s.a.createElement(y,null,e.deduction))}))),1!==n&&s.a.createElement(p.C,{variant:"caption",className:t.divider},"\u5e74\u7ec8\u5956\u6240\u5f97\uff0c\u5c06\u5e74\u7ec8\u5956\u91d1\u989d\u9664\u4ee512\u4e2a\u6708\uff0c\u4ee5\u6bcf\u6708\u5e73\u5747\u6536\u5165\u91d1\u989d\u6765\u786e\u5b9a\u7a0e\u7387\u548c\u901f\u7b97\u6263\u9664\u6570"))}}]),t}(m.Component),k=v()({breakpoint:"xs"})(Object(d.withStyles)(function(e){return{root:Object(u.a)({width:"auto",marginLeft:2*e.spacing.unit,marginRight:2*e.spacing.unit,paddingBottom:3*e.spacing.unit},e.breakpoints.up(600+2*e.spacing.unit*2),{width:600,marginLeft:"auto",marginRight:"auto",paddingBottom:6*e.spacing.unit}),fab:{position:"absolute",bottom:3*e.spacing.unit,right:2*e.spacing.unit,opacity:.8},fabContainer:Object(u.a)({position:"fixed",bottom:0,left:0,width:"100%",height:3*e.spacing.unit+56},e.breakpoints.up(600+2*e.spacing.unit*2),{width:600+2*e.spacing.unit*2,left:"auto"}),paper:Object(u.a)({marginTop:3*e.spacing.unit,marginBottom:2*e.spacing.unit,padding:2*e.spacing.unit},e.breakpoints.up(600+3*e.spacing.unit*2),{marginTop:6*e.spacing.unit,marginBottom:3*e.spacing.unit,padding:3*e.spacing.unit}),button:{margin:"".concat(e.spacing.unit,"px auto")},grid:{textAlign:"center"},divider:{marginTop:e.spacing.unit,marginBottom:e.spacing.unit},listItem:{padding:"".concat(e.spacing.unit,"px 0")},fomular:{color:h.a[800],background:h.a[100],textIndent:8*-e.spacing.unit,paddingLeft:9*e.spacing.unit},detail:{marginBottom:2*e.spacing.unit},tableRow:{height:5*e.spacing.unit,"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}}}})(C));t.default=Object(n.b)(function(e){return{result:e.calc.result,type:e.calc.type}},{})(k)}}]);