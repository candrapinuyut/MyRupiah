(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),i=a.n(o),s=a(1),u=a(2),l=a(4),c=a(3),p=a(5),h=(a(14),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"ToRupiah",value:function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}},{key:"render",value:function(){var e=this,t=this.props,a=t.data,n=t.error,o=t.searchInput,i=t.errorData;return r.a.createElement("div",{className:"item-container"},0!=a.length&&0==n?r.a.createElement("span",{className:"status sukses"},"Found result for : Rp",r.a.createElement("strong",null," ",o.old,"  ")," "):null,1==n?r.a.createElement("span",{className:"status error"},"Sorry, ",i[0]):null,0!=a.length&&0==n?a.map(function(t,n){return r.a.createElement("div",{className:"item",key:n},r.a.createElement("span",{className:"uang"},"Rp. ",e.ToRupiah(t.data.fraction)," "),r.a.createElement("span",{className:"mount"},t.data.used," x"),n==a.length-1&&0!=t.total_sisa?r.a.createElement("span",{className:"sisa"},"Sisa : (Rp. ",t.total_sisa," ) no available fraction"):null)}):null)}}]),t}(n.Component)),f=function(e,t){for(var a=1,n=0;;){if(!(e*a<=t))break;n++,a++}return n},d=function(e){return!(e.split(".").filter(function(e,t){var a=0==t&&parseInt(e).toString().length<=3;return 3!=e.length&&0==a}).length>0)},m=function(e){var t=new Array(1e5,5e4,2e4,1e4,5e3,2e3,1e3,500,100,50),a=0,n=e,r=[];return t.filter(function(t){return t<=e}).filter(function(e,t){return e-t}).map(function(e){var t=f(e,n),o=n-t*e;n=o,a+=t*e;var i={fraction:e,used:t,sisa:o};r.push({data:i,total_sum:a,total_sisa:o,fraction_clear:0==o})}),r.filter(function(e){return 0!=e.data.used})},v=function(e){var t=[];if(/^[0-9.rpRP, ]+$/.test(e))if(-1==e.toLocaleLowerCase().indexOf("rp")&&-1==e.toLocaleLowerCase().indexOf(","))0==/^[0-9.]+$/.test(e)?t.push("Your Rupiah  Invalid Separator"):-1!=e.toLocaleLowerCase().indexOf(".")&&0==d(e)&&t.push("Your Rupiah  Invalid Separator");else{if(-1!=e.toLocaleLowerCase().indexOf("rp")&&-1!=e.toLocaleLowerCase().indexOf(",")&&-1!=e.toLocaleLowerCase().indexOf(".")&&0==d(e.substring(2,e.length-3))&&t.push("Your Rupiah  Invalid Separator"),-1!=e.toLocaleLowerCase().indexOf("rp"))if(2==e.trim().length)t.push("Your Input Rupiah is Missing Value ");else if(0==/^([rpRP]{0,2})([0-9. ,]+)$/.test(e))t.push("valid character in wrong position");else if(-1!=e.toLocaleLowerCase().indexOf(".")&&-1!=e.toLocaleLowerCase().indexOf("rp")){var a=0==(-1==e.indexOf(","))?e.length-3:23;0==d(e.substring(2,a))&&t.push("Your Rupiah  Invalid Separator")}if(-1!=e.toLocaleLowerCase().indexOf(","))if(0==/^([0-9. ,RPrp]+)\,([0]{2})$/.test(e))t.push("Your Rupiah  Invalid Separator");else if(-1!=e.toLocaleLowerCase().indexOf(".")&&-1!=e.toLocaleLowerCase().indexOf(",")){var n=0==(-1==e.toLocaleLowerCase().indexOf("rp"))?2:0;0==d(e.substring(n,e.length-3))&&t.push("Your Rupiah  Invalid Separator")}}else t.push("Input value was bad format Rupiah..");return t},O=function(e){return-1!=e.toLocaleLowerCase().indexOf(",")&&(e=e.substring(0,e.indexOf(","))),parseInt(e.replace(/[^\d]/g,""),10)},b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={error:0,errorData:[],searchInput:{old:0,new:0},data:[]},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"search",value:function(){var e=this.state.searchInput.new,t=v(e);if(this.setState({data:[]}),t.length>0)console.log(t),this.setState({error:1,errorData:t});else{var a=m(O(e));this.setState({data:a,error:0,errorData:[]}),console.log(a)}this.setState({searchInput:{old:e,new:e}})}},{key:"updateInput",value:function(e){this.setState({searchInput:{new:e.trim(),old:this.state.searchInput.old}})}},{key:"render",value:function(){var e=this,t=this.state,a=t.errorData,n=t.error,o=t.data,i=t.searchInput;return r.a.createElement("div",{id:"searchbox",className:"row "},r.a.createElement("h2",null,"My",r.a.createElement("span",null,"Rupiah")),r.a.createElement("p",null,"Simpe Application that given a number of rupiahs will calculate the minimum number of rupiahs needed to make that amount"),r.a.createElement("input",{onInput:function(t){return e.updateInput(t.target.value)},className:"input-text",placeholder:"Enter your Rupiahs here...",type:"text",onKeyPress:function(t){"Enter"==t.key&&e.search()}}),r.a.createElement("button",{onClick:function(){return e.search()},className:"hijau btn"},"Cari"),r.a.createElement(h,{errorData:a,error:n,data:o,searchInput:i}))}}]),t}(n.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"content "},r.a.createElement("div",{className:"container "},r.a.createElement(b,null)))}}]),t}(n.Component),w=(a(15),function(){return r.a.createElement("nav",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{id:"logo"},"MyRupiah")))}),E=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(w,null)}}]),t}(n.Component);a(16);var L=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,null),r.a.createElement(g,null))};i.a.render(r.a.createElement(L,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.4e605260.chunk.js.map