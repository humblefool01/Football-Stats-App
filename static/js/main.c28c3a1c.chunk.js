(this["webpackJsonpfootball-stats"]=this["webpackJsonpfootball-stats"]||[]).push([[0],{17:function(e,t,a){},27:function(e,t,a){e.exports=a(39)},32:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(22),s=a.n(r),c=(a(32),a(10)),u=a(11),i=(a(17),a(26)),o=a(23),m=a(6),h=a(7),d=a(9),p=a(8),E=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={index:null},n}return Object(h.a)(a,[{key:"render",value:function(){var e=this;console.log("In Home render");var t,a=[],n=[],r=Object(o.a)(["logos/laliga-logo.png","logos/ucl-logo.png","logos/bundesliga-logo.png","logos/epl-logo.png","logos/ligue1-logo.png","logos/eredivise-logo.png"].entries());try{var s=function(){var r=Object(i.a)(t.value,2),s=r[0],u=r[1];s<3?a.push(l.a.createElement("button",{className:"column",key:s,onClick:function(){return e.ButtonClicked(s)}},l.a.createElement(c.b,{to:{pathname:"/result",data:s}},l.a.createElement("img",{src:u,className:"container",alt:""})))):n.push(l.a.createElement("button",{className:"column",key:s,onClick:function(){return e.ButtonClicked(s)}},l.a.createElement(c.b,{to:{pathname:"/result",data:s}},l.a.createElement("img",{src:u,className:"container",alt:""}))))};for(r.s();!(t=r.n()).done;)s()}catch(u){r.e(u)}finally{r.f()}return l.a.createElement("div",{className:"Home"},l.a.createElement("nav",null,l.a.createElement("h1",null,"Football Stats")),l.a.createElement("div",{className:"row"},a),l.a.createElement("div",{className:"row"},n))}},{key:"ButtonClicked",value:function(e){var t=this;this.setState({index:e},(function(){console.log("Index: ",t.state.index)}))}}]),a}(l.a.Component),g=a(5),b=a.n(g),f=a(13),v=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={teamClicked:!1},n}return Object(h.a)(a,[{key:"render",value:function(){var e,t=this,a=this.props.id,n=this.props.data,r=n.standings[0].table,s=[];switch(a){case 1:case 4:e=2;break;case 5:e=0;break;default:e=4}if(1!=a){s.push(this.TableHeader());for(var u=function(a){var n=[];a+1<=e?n.push(l.a.createElement("td",null,l.a.createElement("div",{className:"TdUcl"},a+1))):n.push(l.a.createElement("td",null,a+1)),n.push(l.a.createElement("td",null,l.a.createElement(c.b,{className:"LinkTag",to:{pathname:"/TeamDetails",data:r[a].team.id}},l.a.createElement("button",{key:a+1,className:"TeamClass",onClick:function(){t.TeamButtonClicked(r,a)}},l.a.createElement("img",{className:"ImgLogo",src:r[a].team.crestUrl,alt:""}),l.a.createElement("span",{style:{fontSize:"120%"}},r[a].team.name))))),n.push(l.a.createElement("td",null,r[a].playedGames)),n.push(l.a.createElement("td",null,r[a].won)),n.push(l.a.createElement("td",null,r[a].draw)),n.push(l.a.createElement("td",null,r[a].lost)),n.push(l.a.createElement("td",null,r[a].points)),n.push(l.a.createElement("td",null,r[a].goalsFor)),n.push(l.a.createElement("td",null,r[a].goalsAgainst)),n.push(l.a.createElement("td",null,r[a].goalDifference)),s.push(l.a.createElement("tr",null,n))},i=0;i<r.length;i++)u(i);return l.a.createElement("div",null,l.a.createElement("table",{className:"TableCard"},l.a.createElement("tbody",null,s)))}for(var o=[],m=0;m<n.standings.length;m+=3){this.groupName=n.standings[m].group,(s=[]).push(this.TableHeader());for(var h=function(a){var r=n.standings[m].table,u=[];a+1<=e?u.push(l.a.createElement("td",null,l.a.createElement("div",{className:"TdUcl"},a+1))):u.push(l.a.createElement("td",null,a+1)),u.push(l.a.createElement("td",null,l.a.createElement(c.b,{className:"LinkTag",to:{pathname:"/TeamDetails",data:r[a].team.id}},l.a.createElement("button",{className:"TeamClass",onClick:function(){t.TeamButtonClicked(r,a)}},l.a.createElement("img",{className:"ImgLogo",src:r[a].team.crestUrl,alt:""}),l.a.createElement("span",{style:{fontSize:"120%"}},r[a].team.name))))),u.push(l.a.createElement("td",null,r[a].playedGames)),u.push(l.a.createElement("td",null,r[a].won)),u.push(l.a.createElement("td",null,r[a].draw)),u.push(l.a.createElement("td",null,r[a].lost)),u.push(l.a.createElement("td",null,r[a].points)),u.push(l.a.createElement("td",null,r[a].goalsFor)),u.push(l.a.createElement("td",null,r[a].goalsAgainst)),u.push(l.a.createElement("td",null,r[a].goalDifference)),s.push(l.a.createElement("tr",null,u))},d=0;d<n.standings[m].table.length;d++)h(d);o.push(l.a.createElement("table",{className:"TableCard"},l.a.createElement("div",{className:"GroupName"},l.a.createElement("b",null,this.groupName)),l.a.createElement("tbody",null,s)))}return l.a.createElement("div",null,o)}},{key:"TeamButtonClicked",value:function(e,t){console.log(e[t].team.id,e[t].team.name),this.setState({teamClicked:!0})}},{key:"TableHeader",value:function(){var e=[],t=[];return t.push(l.a.createElement("th",null,"Pos")),t.push(l.a.createElement("th",{className:"Th_Team_name"},"Team")),t.push(l.a.createElement("th",null,"Matches")),t.push(l.a.createElement("th",null,"Won")),t.push(l.a.createElement("th",null,"Draw")),t.push(l.a.createElement("th",null,"Lost")),t.push(l.a.createElement("th",null,"Pts")),t.push(l.a.createElement("th",null,"GF")),t.push(l.a.createElement("th",null,"GA")),t.push(l.a.createElement("th",null,"GD")),e.push(l.a.createElement("tr",null,t)),e}}]),a}(l.a.Component),k=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).data=null,n.buttonID=-1,n.url="",n.bundesliga="http://api.football-data.org/v2/competitions/2002/standings",n.ucl="http://api.football-data.org/v2/competitions/2001/standings",n.epl="http://api.football-data.org/v2/competitions/2021/standings",n.eredivise="http://api.football-data.org/v2/competitions/2003/standings",n.laliga="http://api.football-data.org/v2/competitions/2014/standings",n.ligue1="http://api.football-data.org/v2/competitions/2015/standings",n.seriea="http://api.football-data.org/v2/competitions/2034/standings",n.name="",n.state={received:!1},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=this.buttonID,e.next=0===e.t0?3:1===e.t0?6:2===e.t0?9:3===e.t0?12:4===e.t0?15:5===e.t0?18:21;break;case 3:return this.url=this.laliga,this.name="La Liga",e.abrupt("break",23);case 6:return this.url=this.ucl,this.name="UEFA Champions League",e.abrupt("break",23);case 9:return this.url=this.bundesliga,this.name="Bundesliga",e.abrupt("break",23);case 12:return this.url=this.epl,this.name="Premier League",e.abrupt("break",23);case 15:return this.url=this.ligue1,this.name="Ligue 1",e.abrupt("break",23);case 18:return this.url=this.eredivise,this.name="Eredivise",e.abrupt("break",23);case 21:return console.log("Switch case default error!"),e.abrupt("break",23);case 23:return e.next=25,this.fetchData();case 25:this.data=e.sent,null!=this.data&&this.setState({received:!0});case 27:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchData",value:function(){var e=Object(f.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.url,{method:"GET",headers:{"X-AUTH-TOKEN":"2df120a38d634333bc4c7a5c2a0c4cba"}});case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=[];if(this.buttonID=this.props.location.data,null==this.data)return l.a.createElement("div",{className:"loader"});switch(this.buttonID){case 0:e.push(l.a.createElement("img",{className:"BackgroundImgLaliga"}));break;case 1:e.push(l.a.createElement("img",{className:"BackgroundImgUCL"}));break;case 2:e.push(l.a.createElement("img",{className:"BackgroundImgBundesliga"}));break;case 3:e.push(l.a.createElement("img",{className:"BackgroundImgEPL"}));break;case 4:e.push(l.a.createElement("img",{className:"BackgroundImgLigue1"}));break;case 5:e.push(l.a.createElement("img",{className:"BackgroundImgEredivise"}))}return l.a.createElement("div",null,l.a.createElement("nav",null,l.a.createElement("h1",null,this.name)),l.a.createElement("div",{className:"PointsTablePage"},l.a.createElement(v,{id:this.buttonID,data:this.data})))}}]),a}(l.a.Component),N=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).data=null,n.url="http://api.football-data.org/v2//teams/",n.state={received:!1},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.location.data,this.url+=t,console.log(this.url),e.next=5,this.fetchData(this.url);case 5:this.data=e.sent,null!=this.data&&this.setState({received:!0});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchData",value:function(){var e=Object(f.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"GET",headers:{"X-AUTH-TOKEN":"2df120a38d634333bc4c7a5c2a0c4cba"}});case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,console.log("JSON: ",n),e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(null==this.data)return l.a.createElement("div",{className:"loader"});var e=[],t=[],a=[],n=[],r=[],s=[],c=[],u=[],i=[],o=[];console.log(this.data.squad.length);for(var m=0;m<this.data.squad.length;m++)if("PLAYER"==this.data.squad[m].role)switch(this.data.squad[m].position){case"Goalkeeper":c.push(l.a.createElement("tr",{className:"TeamDetails-tr"},this.data.squad[m].name));break;case"Defender":u.push(l.a.createElement("tr",null,this.data.squad[m].name));break;case"Midfielder":i.push(l.a.createElement("tr",null,this.data.squad[m].name));break;default:o.push(l.a.createElement("tr",null,this.data.squad[m].name))}else"COACH"==this.data.squad[m].role&&s.push(l.a.createElement("tr",null,this.data.squad[m].name));return e.push(l.a.createElement("table",{className:"TeamDetailsCard"},l.a.createElement("h2",null,"Manager"),l.a.createElement("tbody",null,s),l.a.createElement("div",null))),t.push(l.a.createElement("table",{className:"TeamDetailsCard"},l.a.createElement("h2",null,"Goalkeepers"),l.a.createElement("tbody",null,c))),a.push(l.a.createElement("table",{className:"TeamDetailsCard"},l.a.createElement("h2",null,"Defenders"),l.a.createElement("tbody",null,u))),n.push(l.a.createElement("table",{className:"TeamDetailsCard"},l.a.createElement("h2",null,"Midfielders"),l.a.createElement("tbody",null,i))),r.push(l.a.createElement("table",{className:"TeamDetailsCard"},l.a.createElement("h2",null,"Attackers"),l.a.createElement("tbody",null,o))),l.a.createElement("div",null,l.a.createElement("nav",null,l.a.createElement("div",null,l.a.createElement("img",{className:"TeamDetailsLogo",src:this.data.crestUrl,alt:"",style:{float:"left"}}),l.a.createElement("h1",{style:{float:"right"}},this.data.name))),l.a.createElement("div",null,e),l.a.createElement("div",null,t),l.a.createElement("div",null,a),l.a.createElement("div",null,n),l.a.createElement("div",null,r))}}]),a}(l.a.Component);var y=function(){return l.a.createElement(c.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(u.c,null,l.a.createElement(u.a,{path:"/",exact:!0,component:E}),l.a.createElement(u.a,{path:"/result",exact:!0,component:k}),l.a.createElement(u.a,{path:"/TeamDetails",exact:!0,component:N}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.c28c3a1c.chunk.js.map