(this["webpackJsonpfootball-stats"]=this["webpackJsonpfootball-stats"]||[]).push([[0],{17:function(e,t,a){},27:function(e,t,a){e.exports=a(39)},32:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),s=a(22),r=a.n(s),c=(a(32),a(10)),o=a(11),u=(a(17),a(26)),i=a(23),m=a(6),h=a(7),d=a(9),p=a(8),b=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var l;return Object(m.a)(this,a),(l=t.call(this,e)).state={index:null},l}return Object(h.a)(a,[{key:"render",value:function(){var e=this;console.log("In Home render");var t,a=[],l=[],s=Object(i.a)(["https://humblefool01.github.io/Football-Stats-App/logos/laliga-logo.png","https://humblefool01.github.io/Football-Stats-App/logos/ucl-logo.png","https://humblefool01.github.io/Football-Stats-App/logos/bundesliga-logo.png","https://humblefool01.github.io/Football-Stats-App/logos/epl-logo.png","https://humblefool01.github.io/Football-Stats-App/logos/ligue1-logo.png","https://humblefool01.github.io/Football-Stats-App/logos/eredivise-logo.png"].entries());try{var r=function(){var s=Object(u.a)(t.value,2),r=s[0],o=s[1];r<3?a.push(n.a.createElement("a",{className:"column"},n.a.createElement(c.b,{to:{pathname:"/Football-Stats-App/result",data:r}},n.a.createElement("img",{src:o,className:"container",alt:""})))):l.push(n.a.createElement("button",{className:"column",key:r,onClick:function(){return e.ButtonClicked(r)}},n.a.createElement(c.b,{to:{pathname:"/Football-Stats-App/result",data:r}},n.a.createElement("img",{src:o,className:"container",alt:""}))))};for(s.s();!(t=s.n()).done;)r()}catch(o){s.e(o)}finally{s.f()}return n.a.createElement("div",{className:"Home"},n.a.createElement("nav",null,n.a.createElement("h1",null,"Football Stats")),n.a.createElement("div",{className:"row"},a),n.a.createElement("div",{className:"row"},l))}},{key:"ButtonClicked",value:function(e){var t=this;this.setState({index:e},(function(){console.log("Index: ",t.state.index)}))}}]),a}(n.a.Component),E=a(5),g=a.n(E),f=a(13),v=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var l;return Object(m.a)(this,a),(l=t.call(this,e)).state={teamClicked:!1},l}return Object(h.a)(a,[{key:"render",value:function(){var e,t=this,a=this.props.id,l=this.props.data,s=l.standings[0].table,r=[];switch(a){case 1:case 4:e=2;break;case 5:e=0;break;default:e=4}if(1!=a){r.push(this.TableHeader());for(var o=function(a){var l=[];a+1<=e?l.push(n.a.createElement("td",null,n.a.createElement("div",{className:"TdUcl"},a+1))):l.push(n.a.createElement("td",null,a+1)),l.push(n.a.createElement("td",null,n.a.createElement(c.b,{className:"LinkTag",to:{pathname:"/Football-Stats-App/TeamDetails",data:s[a].team.id}},n.a.createElement("button",{key:a+1,className:"TeamClass",onClick:function(){t.TeamButtonClicked(s,a)}},n.a.createElement("img",{className:"ImgLogo",src:s[a].team.crestUrl,alt:""}),n.a.createElement("span",{style:{fontSize:"120%"}},s[a].team.name))))),l.push(n.a.createElement("td",null,s[a].playedGames)),l.push(n.a.createElement("td",null,s[a].won)),l.push(n.a.createElement("td",null,s[a].draw)),l.push(n.a.createElement("td",null,s[a].lost)),l.push(n.a.createElement("td",null,s[a].points)),l.push(n.a.createElement("td",null,s[a].goalsFor)),l.push(n.a.createElement("td",null,s[a].goalsAgainst)),l.push(n.a.createElement("td",null,s[a].goalDifference)),r.push(n.a.createElement("tr",null,l))},u=0;u<s.length;u++)o(u);return n.a.createElement("div",null,n.a.createElement("table",{className:"TableCard"},n.a.createElement("tbody",null,r)))}for(var i=[],m=0;m<l.standings.length;m+=3){this.groupName=l.standings[m].group,(r=[]).push(this.TableHeader());for(var h=function(a){var s=l.standings[m].table,o=[];a+1<=e?o.push(n.a.createElement("td",null,n.a.createElement("div",{className:"TdUcl"},a+1))):o.push(n.a.createElement("td",null,a+1)),o.push(n.a.createElement("td",null,n.a.createElement(c.b,{className:"LinkTag",to:{pathname:"/Football-Stats-App/TeamDetails",data:s[a].team.id}},n.a.createElement("button",{className:"TeamClass",onClick:function(){t.TeamButtonClicked(s,a)}},n.a.createElement("img",{className:"ImgLogo",src:s[a].team.crestUrl,alt:""}),n.a.createElement("span",{style:{fontSize:"120%"}},s[a].team.name))))),o.push(n.a.createElement("td",null,s[a].playedGames)),o.push(n.a.createElement("td",null,s[a].won)),o.push(n.a.createElement("td",null,s[a].draw)),o.push(n.a.createElement("td",null,s[a].lost)),o.push(n.a.createElement("td",null,s[a].points)),o.push(n.a.createElement("td",null,s[a].goalsFor)),o.push(n.a.createElement("td",null,s[a].goalsAgainst)),o.push(n.a.createElement("td",null,s[a].goalDifference)),r.push(n.a.createElement("tr",null,o))},d=0;d<l.standings[m].table.length;d++)h(d);i.push(n.a.createElement("table",{className:"TableCard"},n.a.createElement("div",{className:"GroupName"},n.a.createElement("b",null,this.groupName)),n.a.createElement("tbody",null,r)))}return n.a.createElement("div",null,i)}},{key:"TeamButtonClicked",value:function(e,t){console.log(e[t].team.id,e[t].team.name),this.setState({teamClicked:!0})}},{key:"TableHeader",value:function(){var e=[],t=[];return t.push(n.a.createElement("th",null,"Pos")),t.push(n.a.createElement("th",{className:"Th_Team_name"},"Team")),t.push(n.a.createElement("th",null,"Matches")),t.push(n.a.createElement("th",null,"Won")),t.push(n.a.createElement("th",null,"Draw")),t.push(n.a.createElement("th",null,"Lost")),t.push(n.a.createElement("th",null,"Pts")),t.push(n.a.createElement("th",null,"GF")),t.push(n.a.createElement("th",null,"GA")),t.push(n.a.createElement("th",null,"GD")),e.push(n.a.createElement("tr",null,t)),e}}]),a}(n.a.Component),k=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var l;return Object(m.a)(this,a),(l=t.call(this,e)).data=null,l.buttonID=-1,l.url="",l.bundesliga="https://api.football-data.org/v2/competitions/2002/standings",l.ucl="https://api.football-data.org/v2/competitions/2001/standings",l.epl="https://api.football-data.org/v2/competitions/2021/standings",l.eredivise="https://api.football-data.org/v2/competitions/2003/standings",l.laliga="https://api.football-data.org/v2/competitions/2014/standings",l.ligue1="https://api.football-data.org/v2/competitions/2015/standings",l.seriea="https://api.football-data.org/v2/competitions/2034/standings",l.name="",l.state={received:!1},l}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=this.buttonID,e.next=0===e.t0?3:1===e.t0?6:2===e.t0?9:3===e.t0?12:4===e.t0?15:5===e.t0?18:21;break;case 3:return this.url=this.laliga,this.name="La Liga",e.abrupt("break",23);case 6:return this.url=this.ucl,this.name="UEFA Champions League",e.abrupt("break",23);case 9:return this.url=this.bundesliga,this.name="Bundesliga",e.abrupt("break",23);case 12:return this.url=this.epl,this.name="Premier League",e.abrupt("break",23);case 15:return this.url=this.ligue1,this.name="Ligue 1",e.abrupt("break",23);case 18:return this.url=this.eredivise,this.name="Eredivise",e.abrupt("break",23);case 21:return console.log("Switch case default error!"),e.abrupt("break",23);case 23:return e.next=25,this.fetchData();case 25:this.data=e.sent,null!=this.data&&this.setState({received:!0});case 27:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchData",value:function(){var e=Object(f.a)(g.a.mark((function e(){var t,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.url,{method:"GET",headers:{"X-AUTH-TOKEN":"2df120a38d634333bc4c7a5c2a0c4cba"}});case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=[];if(this.buttonID=this.props.location.data,null==this.data)return n.a.createElement("div",{className:"loader"});switch(this.buttonID){case 0:e.push(n.a.createElement("img",{className:"BackgroundImgLaliga"}));break;case 1:e.push(n.a.createElement("img",{className:"BackgroundImgUCL"}));break;case 2:e.push(n.a.createElement("img",{className:"BackgroundImgBundesliga"}));break;case 3:e.push(n.a.createElement("img",{className:"BackgroundImgEPL"}));break;case 4:e.push(n.a.createElement("img",{className:"BackgroundImgLigue1"}));break;case 5:e.push(n.a.createElement("img",{className:"BackgroundImgEredivise"}))}return n.a.createElement("div",null,n.a.createElement("nav",null,n.a.createElement("h1",null,this.name)),n.a.createElement("div",{className:"PointsTablePage"},n.a.createElement(v,{id:this.buttonID,data:this.data})))}}]),a}(n.a.Component),N=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var l;return Object(m.a)(this,a),(l=t.call(this,e)).data=null,l.url="https://api.football-data.org/v2//teams/",l.state={received:!1},l}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.location.data,this.url+=t,console.log(this.url),e.next=5,this.fetchData(this.url);case 5:this.data=e.sent,null!=this.data&&this.setState({received:!0});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchData",value:function(){var e=Object(f.a)(g.a.mark((function e(t){var a,l;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"GET",headers:{"X-AUTH-TOKEN":"2df120a38d634333bc4c7a5c2a0c4cba"}});case 2:return a=e.sent,e.next=5,a.json();case 5:return l=e.sent,console.log("JSON: ",l),e.abrupt("return",l);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(null==this.data)return n.a.createElement("div",{className:"loader"});var e=[],t=[],a=[],l=[],s=[],r=[],c=[],o=[],u=[],i=[];console.log(this.data.squad.length);for(var m=0;m<this.data.squad.length;m++)if("PLAYER"==this.data.squad[m].role)switch(this.data.squad[m].position){case"Goalkeeper":c.push(n.a.createElement("tr",{className:"TeamDetails-tr"},this.data.squad[m].name));break;case"Defender":o.push(n.a.createElement("tr",null,this.data.squad[m].name));break;case"Midfielder":u.push(n.a.createElement("tr",null,this.data.squad[m].name));break;default:i.push(n.a.createElement("tr",null,this.data.squad[m].name))}else"COACH"==this.data.squad[m].role&&r.push(n.a.createElement("tr",null,this.data.squad[m].name));return e.push(n.a.createElement("table",{className:"TeamDetailsCard"},n.a.createElement("h2",null,"Manager"),n.a.createElement("tbody",null,r),n.a.createElement("div",null))),t.push(n.a.createElement("table",{className:"TeamDetailsCard"},n.a.createElement("h2",null,"Goalkeepers"),n.a.createElement("tbody",null,c))),a.push(n.a.createElement("table",{className:"TeamDetailsCard"},n.a.createElement("h2",null,"Defenders"),n.a.createElement("tbody",null,o))),l.push(n.a.createElement("table",{className:"TeamDetailsCard"},n.a.createElement("h2",null,"Midfielders"),n.a.createElement("tbody",null,u))),s.push(n.a.createElement("table",{className:"TeamDetailsCard"},n.a.createElement("h2",null,"Attackers"),n.a.createElement("tbody",null,i))),n.a.createElement("div",null,n.a.createElement("nav",null,n.a.createElement("div",null,n.a.createElement("img",{className:"TeamDetailsLogo",src:this.data.crestUrl,alt:"",style:{float:"left"}}),n.a.createElement("h1",{style:{float:"right"}},this.data.name))),n.a.createElement("div",null,e),n.a.createElement("div",null,t),n.a.createElement("div",null,a),n.a.createElement("div",null,l),n.a.createElement("div",null,s))}}]),a}(n.a.Component);var y=function(){return n.a.createElement(c.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(o.c,null,n.a.createElement(o.a,{path:"/Football-Stats-App",exact:!0,component:b}),n.a.createElement(o.a,{path:"/Football-Stats-App/result",exact:!0,component:k}),n.a.createElement(o.a,{path:"/Football-Stats-App/TeamDetails",exact:!0,component:N}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.822584d6.chunk.js.map