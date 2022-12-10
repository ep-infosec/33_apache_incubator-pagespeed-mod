(function(){var f=Object,g=document,h="appendChild",l="evaluate",n="createElement",p="setAttribute",q="propertyIsEnumerable",r="push",s="length",t="prototype",u="call",v="",w=" != ",x="#.###%",y="#4ECDC4",z="#556270",A="#C7F464",B="#E5E5E5",C="#F2F2F2",D="% (",E="&end_time=",aa="&granularity=",ba="&start_time=",ca="&var_titles=",F=")",da=",",ea=": ",fa="?json",ga="CSS files not rewritten because of parse errors",ha="Cache lookups that were expired",ia="Cache misses",ja="Data failed to load for graph ",ka="GET",
la="Image rewrite failures",ma="JSON data missing required variable.",na="JSON response is malformed. (",oa="JavaScript minification failures",pa="MMM d, y hh:mma",qa="Resources not loaded because of fetch failures",ra="Resources not rewritten because domain wasn't authorized",sa="Resources not rewritten because of restrictive Cache-Control headers",ta="Time",ua="XHR request failed.",va="[object Array]",wa="[object Function]",xa="[object Window]",ya="a",G="array",za="bottom",Aa="cache-control",Ba=
"cache-expired",Ca="cache-miss",Da="cache_backend_hits",H="cache_backend_misses",Ea="cache_expirations",Fa="call",I="class",Ga="css-error",Ha="css_filter_blocks_rewritten",Ia="css_filter_parse_failures",Ja="datetime",J="div",Ka="doc",La="explicit",Ma="fetch-failure",K="function",Na="href",Oa="https://modpagespeed.com/doc/console#",Pa="id",Qa="image-error",Ra="image_norewrites_high_resolution",Sa="image_rewrites",Ta="image_rewrites_dropped_decode_failure",Ua="image_rewrites_dropped_due_to_load",
Va="image_rewrites_dropped_mime_type_unknown",Wa="image_rewrites_dropped_nosaving_noresize",Xa="image_rewrites_dropped_nosaving_resize",Ya="image_rewrites_dropped_server_write_fail",Za="javascript_blocks_minified",$a="javascript_minification_failures",ab="js-error",bb="not-authorized",cb="null",db="num_cache_control_not_rewritable_resources",eb="num_cache_control_rewritable_resources",L="number",fb="o",M="object",gb="pagespeed-graph",hb="pagespeed-graphs-container",N="pagespeed-title",ib="pagespeed-widgets",
jb="pagespeed-widgets-topbar",kb="resource_url_domain_acceptances",lb="resource_url_domain_rejections",mb="serf_fetch_failure_count",nb="serf_fetch_request_count",ob="span",pb="splice",qb="string",rb="{",O,sb=function(a){var b=typeof a;if(b==M)if(a){if(a instanceof Array)return G;if(a instanceof f)return b;var c=f[t].toString[u](a);if(c==xa)return M;if(c==va||typeof a[s]==L&&"undefined"!=typeof a.splice&&"undefined"!=typeof a[q]&&!a[q](pb))return G;if(c==wa||"undefined"!=typeof a[u]&&"undefined"!=
typeof a[q]&&!a[q](Fa))return K}else return cb;else if(b==K&&"undefined"==typeof a[u])return M;return b},P="closure_uid_"+(1E9*Math.random()>>>0),tb=0;var Q="StopIteration"in this?this.StopIteration:Error("StopIteration"),R=function(){};R[t].next=function(){throw Q;};R[t].l=function(){return this};var S=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b};var T=function(a,b){this.b={};this.a=[];this.g=this.f=0;var c=arguments[s];if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.e(a)};O=T[t];O.h=function(){this.k();for(var a=[],b=0;b<this.a[s];b++)a[r](this.b[this.a[b]]);return a};O.w=function(){this.k();return this.a.concat()};
O.k=function(){if(this.f!=this.a[s]){for(var a=0,b=0;a<this.a[s];){var c=this.a[a];f[t].hasOwnProperty[u](this.b,c)&&(this.a[b++]=c);a++}this.a.length=b}if(this.f!=this.a[s]){for(var d={},b=a=0;a<this.a[s];)c=this.a[a],f[t].hasOwnProperty[u](d,c)||(this.a[b++]=c,d[c]=1),a++;this.a.length=b}};O.set=function(a,b){f[t].hasOwnProperty[u](this.b,a)||(this.f++,this.a[r](a),this.g++);this.b[a]=b};
O.e=function(a){var b;if(a instanceof T)b=a.w(),a=a.h();else{b=[];var c=0,d;for(d in a)b[c++]=d;a=S(a)}for(c=0;c<b[s];c++)this.set(b[c],a[c])};O.l=function(a){this.k();var b=0,c=this.a,d=this.b,e=this.g,k=this,m=new R;m.next=function(){for(;;){if(e!=k.g)throw Error("The map has changed since the iterator was created");if(b>=c[s])throw Q;var m=c[b++];return a?m:d[m]}};return m};var ub=function(a){if(typeof a.h==K)return a.h();if(typeof a==qb)return a.split(v);var b=sb(a);if(b==G||b==M&&typeof a[s]==L){for(var b=[],c=a[s],d=0;d<c;d++)b[r](a[d]);return b}return S(a)};var U=function(a){this.b=new T;a&&this.e(a)},vb=function(a){var b=typeof a;return b==M&&a||b==K?fb+(a[P]||(a[P]=++tb)):b.substr(0,1)+a};U[t].add=function(a){this.b.set(vb(a),a)};U[t].e=function(a){a=ub(a);for(var b=a[s],c=0;c<b;c++)this.add(a[c])};U[t].h=function(){return this.b.h()};U[t].l=function(){return this.b.l(!1)};google.load("visualization","1.0",{packages:["corechart"]});
var V=function(a){window.console&&console.error(a)},W=function(){this.a=[];this.g=new U;this.b=this.f=null;this.q={width:900,height:255,colors:[y,z,A],legend:{position:za},hAxis:{format:pa,gridlines:{color:C},baselineColor:B},vAxis:{format:x,minValue:0,viewWindowMode:La,viewWindow:{min:0},gridlines:{color:C},baselineColor:B},chartArea:{left:60,top:20,width:800},pointSize:2}},X=function(a){var b={};b.c=new U([a]);b.evaluate=function(b){return b(a)};return b},Y=function(a){var b={};b.c=new U;for(var c=
0;c<a[s];c++)b.c.e(a[c].c);b.evaluate=function(b){for(var c=0,k=0;k<a[s];k++)c+=a[k][l](b);return c};return b},Z=function(a,b){var c={};c.c=new U;c.c.e(a.c);c.c.e(b.c);c.evaluate=function(c){var e=b[l](c);return 0==e?0:a[l](c)/e};return c},$=function(a,b){return Z(a,Y([a,b]))};O=W[t];
O.A=function(){this.d(qa,Ma,Z(X(mb),X(nb)));this.d(ra,bb,$(X(lb),X(kb)));this.d(sa,Aa,$(X(db),X(eb)));var a=Y([X(H),X(Da)]);this.d(ia,Ca,Z(X(H),a));this.d(ha,Ba,Z(X(Ea),a));this.d(ga,Ga,$(X(Ia),X(Ha)));this.d(oa,ab,$(X($a),X(Za)));var a=Y([X(Sa),X(Xa),X(Wa)]),b=Y([X(Ra),X(Ta),X(Ua),X(Va),X(Ya)]);this.d(la,Qa,$(b,a))};O.d=function(a,b,c){var d={};d.title=a;d.o=Oa+b;d.value=c;d.p=this.a[s];d.i=null;d.j=null;d.m=null;d.n=null;this.a[r](d);this.g.e(c.c);return d};
O.B=function(){var a=new Date;this.D(new Date(a-864E5),a,6E4)};O.u=function(a,b,c,d){var e=pagespeedStatisticsUrl+fa,e=e+(ba+b.getTime()),e=e+(E+c.getTime()),e=e+(aa+d)+ca;for(b=0;b<a[s];b++)e+=a[b]+da;return e};O.D=function(a,b,c){var d=new XMLHttpRequest,e=this;a=this.u(this.g.h(),a,b,c);d.onreadystatechange=function(){if(4==this.readyState)if(200!=this.status||1>this.responseText[s]||this.responseText[0]!=rb)V(ua);else{var a=JSON.parse(this.responseText);e.v(a)}};d.open(ka,a);d.send()};
O.v=function(a){this.f=a.variables;this.b=a.timestamps;this.s(this.b,this.f);for(a=0;a<this.a[s];a++){for(var b=[],c=0;c<this.b[s];c++)b[r](this.a[a].value[l](function(a){return function(b){if(b in a)return a[b][c];V(ma)}}(this.f)));this.a[a].i=b[b[s]-1];this.a[a].j=this.a[a].i;this.a[a].m=this.r(this.a[a].title,this.b,b)}this.a.sort(function(a,b){return b.j-a.j});for(a=0;a<this.a[s];a++)this.t(this.a[a])};O.s=function(a,b){for(var c in b)a[s]!=b[c][s]&&V(na+a[s]+w+b[c][s]+F)};
O.r=function(a,b,c){for(var d=this.C(a),e=0;e<b[s];e++)d.addRow([new Date(b[e]),c[e]]);0==d.getNumberOfRows()&&V(ja+a);return d};O.C=function(a){var b=new google.visualization.DataTable;b.addColumn(Ja,ta);b.addColumn(L,a);return b};O.t=function(a){var b=google.visualization.LineChart,c=a.title,d=a.i,e=a.o,k=a.p,m=g[n](J);m[p](I,ib);m[h](wb(c,d,e,k));c=g[n](J);c[p](I,gb);m[h](c);g.getElementById(hb)[h](m);a.n=new b(c);a.n.draw(a.m,this.q)};
var wb=function(a,b,c,d){var e=g[n](J);e[p](I,jb);var k=g[n](ob);k[p](I,N);k[p](Pa,N+d);k[h](g.createTextNode(a+ea+(100*b).toFixed(2)+D));a=g[n](ya);a[p](Na,c);a[h](g.createTextNode(Ka));k[h](a);k[h](g.createTextNode(F));e[h](k);return e};google.setOnLoadCallback(function(){var a=new W;a.A();a.B();return a});})();