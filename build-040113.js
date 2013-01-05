(function(a){function b(a){return"object"==typeof a?a:{top:a,left:a}}var c=a.scrollTo=function(b,c,d){a(window).scrollTo(b,c,d)};c.defaults={axis:"xy",duration:1.3<=parseFloat(a.fn.jquery)?0:1};c.window=function(){return a(window)._scrollable()};a.fn._scrollable=function(){return this.map(function(){if(this.nodeName&&-1==a.inArray(this.nodeName.toLowerCase(),["iframe","#document","html","body"]))return this;var b=(this.contentWindow||this).document||this.ownerDocument||this;return a.browser.safari||
"BackCompat"==b.compatMode?b.body:b.documentElement})};a.fn.scrollTo=function(g,f,d){"object"==typeof f&&(d=f,f=0);"function"==typeof d&&(d={onAfter:d});"max"==g&&(g=9E9);d=a.extend({},c.defaults,d);f=f||d.speed||d.duration;d.queue=d.queue&&1<d.axis.length;d.queue&&(f/=2);d.offset=b(d.offset);d.over=b(d.over);return this._scrollable().each(function(){function m(a){n.animate(j,f,d.easing,a&&function(){a.call(this,g,d)})}var p=this,n=a(p),h=g,l,j={},s=n.is("html,body");switch(typeof h){case "number":case "string":if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(h)){h=
b(h);break}h=a(h,this);case "object":if(h.is||h.style)l=(h=a(h)).offset()}a.each(d.axis.split(""),function(a,b){var g="x"==b?"Left":"Top",f=g.toLowerCase(),k="scroll"+g,u=p[k],v=c.max(p,b);l?(j[k]=l[f]+(s?0:u-n.offset()[f]),d.margin&&(j[k]-=parseInt(h.css("margin"+g))||0,j[k]-=parseInt(h.css("border"+g+"Width"))||0),j[k]+=d.offset[f]||0,d.over[f]&&(j[k]+=h["x"==b?"width":"height"]()*d.over[f])):(g=h[f],j[k]=g.slice&&"%"==g.slice(-1)?parseFloat(g)/100*v:g);/^\d+$/.test(j[k])&&(j[k]=0>=j[k]?0:Math.min(j[k],
v));!a&&d.queue&&(u!=j[k]&&m(d.onAfterFirst),delete j[k])});m(d.onAfter)}).end()};c.max=function(b,c){var d="x"==c?"Width":"Height",m="scroll"+d;if(!a(b).is("html,body"))return b[m]-a(b)[d.toLowerCase()]();var d="client"+d,p=b.ownerDocument.documentElement,n=b.ownerDocument.body;return Math.max(p[m],n[m])-Math.min(p[d],n[d])}})(jQuery);(function(a){function b(a,b){if(!(1<a.originalEvent.touches.length)){a.preventDefault();var c=a.originalEvent.changedTouches[0],g=document.createEvent("MouseEvents");g.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null);a.target.dispatchEvent(g)}}a.support.touch="ontouchend"in document;if(a.support.touch){var c=a.ui.mouse.prototype,g=c._mouseInit,f;c._touchStart=function(a){!f&&this._mouseCapture(a.originalEvent.changedTouches[0])&&(f=!0,this._touchMoved=!1,
b(a,"mouseover"),b(a,"mousemove"),b(a,"mousedown"))};c._touchMove=function(a){f&&(this._touchMoved=!0,b(a,"mousemove"))};c._touchEnd=function(a){f&&(b(a,"mouseup"),b(a,"mouseout"),this._touchMoved||b(a,"click"),f=!1)};c._mouseInit=function(){this.element.bind("touchstart",a.proxy(this,"_touchStart")).bind("touchmove",a.proxy(this,"_touchMove")).bind("touchend",a.proxy(this,"_touchEnd"));g.call(this)}}})(jQuery);var cf=cf||{};cf.difficulty=[0.2,0.4,0.6,0.8,1];cf.difficultyName=["Amoeba","Human","Hero","Superhero","Godlike"];
cf.exercises=[{group:"row",bumper:!1,weight:1,"not-reps":!1,maxweight:0,name:"Reverse Pushups",grp:1,maximum:80,multiple:5},{group:"snatch",bumper:!1,weight:0.25,"not-reps":!1,maxweight:55,name:"Kettle Bell Snatch (per arm)",grp:1,maximum:50,multiple:5},{group:"spress",bumper:!1,weight:1,"not-reps":!1,maxweight:0,name:"Handstand Pushups",grp:1,maximum:40,multiple:2},{group:"pullup",bumper:!1,weight:0.5,"not-reps":!1,maxweight:0,name:"Towel pullups",grp:1,maximum:40,multiple:2},{group:"backextension",
bumper:!1,weight:1,"not-reps":!1,maxweight:0,name:"Back extension",grp:1,maximum:100,multiple:5},{group:"cardio",bumper:!1,weight:0.5,"not-reps":!0,maxweight:0,name:"Jump Rope",grp:1,maximum:500,multiple:10},{group:"swing",bumper:!1,weight:0.25,"not-reps":!1,maxweight:55,name:"2-Hand Kettle Bell Swings",grp:1,maximum:80,multiple:5},{group:"jacks",bumper:!1,weight:1,"not-reps":!1,maxweight:0,name:"Jumping Jacks",grp:1,maximum:100,multiple:5},{group:"pullup",bumper:!1,weight:0.5,"not-reps":!1,maxweight:0,
name:"Chins",grp:1,maximum:60,multiple:5},{group:"pullup",bumper:!1,weight:0.5,"not-reps":!1,maxweight:0,name:"Pullups",grp:1,maximum:60,multiple:5},{group:"pressup",bumper:!1,weight:1,"not-reps":!1,maxweight:0,name:"Press-ups",grp:1,maximum:80,multiple:5},{group:"pushpress",bumper:!1,weight:1,"not-reps":!1,maxweight:135,name:"Thrusters",grp:1,maximum:60,multiple:5},{group:"dip",bumper:!1,weight:1,"not-reps":!1,maxweight:0,name:"Dips",grp:1,maximum:60,multiple:5},{group:"highpull",bumper:!1,weight:0.25,
"not-reps":!1,maxweight:55,name:"Kettle Bell High Pull (per arm)",grp:1,maximum:40,multiple:5},{group:"crunches",bumper:!1,weight:1,"not-reps":!1,maxweight:0,name:"Crunches",grp:1,maximum:100,multiple:5},{group:"crunchthrow",bumper:!1,weight:1,"not-reps":!1,maxweight:0,name:"Medicine ball crunch/throw",grp:1,maximum:100,multiple:5},{group:"hipflex",bumper:!1,weight:1,"not-reps":!1,maxweight:0,name:"Leg raises",grp:1,maximum:100,multiple:5},{group:"clean",bumper:!1,weight:0.25,"not-reps":!1,maxweight:55,
name:"Kettle Bell Cleans (per arm)",grp:1,maximum:50,multiple:5},{group:"squat",bumper:!1,weight:1,"not-reps":!1,maxweight:0,name:"Squats",grp:1,maximum:100,multiple:5},{group:"deadlift",bumper:!1,weight:1,"not-reps":!1,maxweight:225,name:"Deadlift",grp:2,maximum:50,multiple:5},{group:"deadlift",bumper:!1,weight:1,"not-reps":!1,maxweight:315,name:"Sumo Deadlift",grp:2,maximum:50,multiple:5},{group:"benchpress",bumper:!1,weight:1,"not-reps":!1,maxweight:185,name:"Bench press",grp:2,maximum:80,multiple:5},
{group:"benchpress",bumper:!1,weight:0.5,"not-reps":!1,maxweight:225,name:"Heavy Bench press",grp:2,maximum:50,multiple:5},{group:"spress",bumper:!1,weight:0.25,"not-reps":!1,maxweight:55,name:"2-arm Kettle Bell Military Press",grp:1,maximum:50,multiple:5},{group:"squat",bumper:!1,weight:0.75,"not-reps":!1,maxweight:225,name:"Back squat",grp:2,maximum:60,multiple:5},{group:"squat",bumper:!1,weight:0.75,"not-reps":!1,maxweight:135,name:"Back squat",grp:2,maximum:100,multiple:5},{group:"spress",bumper:!1,
weight:0.75,"not-reps":!1,maxweight:185,name:"Barbell push-press",grp:2,maximum:60,multiple:5},{group:"spress",bumper:!1,weight:0.75,"not-reps":!1,maxweight:135,name:"Barbell press",grp:2,maximum:60,multiple:5},{group:"shrug",bumper:!1,weight:1,"not-reps":!1,maxweight:225,name:"Shrugs",grp:2,maximum:80,multiple:5},{group:"jacks",bumper:!1,weight:1,"not-reps":!1,maxweight:0,name:"Burpees",grp:1,maximum:80,multiple:5},{group:"pullup",bumper:!1,weight:1,"not-reps":!1,maxweight:0,name:"Muscleups",grp:1,
maximum:60,multiple:2},{group:"boxjump",bumper:!1,weight:1,"not-reps":!1,maxweight:0,name:"Box jump",grp:1,maximum:100,multiple:5},{group:"cardio",bumper:!1,weight:0.5,"not-reps":!0,maxweight:0,name:"Rowing (meters)",grp:1,maximum:2400,multiple:400},{group:"cardio",bumper:!1,weight:0.5,"not-reps":!0,maxweight:0,name:"Running (meters)",grp:1,maximum:1600,multiple:400},{group:"row",bumper:!1,weight:1,"not-reps":!1,maxweight:135,name:"Barbell Row",grp:1,maximum:60,multiple:5},{group:"lunge",bumper:!1,
weight:1,"not-reps":!1,maxweight:60,name:"Dumbbell Lunge (per leg)",grp:1,maximum:40,multiple:2},{group:"twists",bumper:!1,weight:1,"not-reps":!1,maxweight:55,name:"Kettle Bell Twists",grp:1,maximum:100,multiple:2},{group:"spress",bumper:!1,weight:0.25,"not-reps":!1,maxweight:55,name:"Kettle Bell Clean/Press (per arm)",grp:1,maximum:40,multiple:5},{group:"ghr",bumper:!1,weight:1,"not-reps":!1,maxweight:0,name:"GHR Sit-up",grp:1,maximum:50,multiple:2},{group:"pressup",bumper:!1,weight:1,"not-reps":!1,
maxweight:0,name:"Alternating-hand Ball Press-up",grp:1,maximum:40,multiple:2},{group:"grip",bumper:!1,weight:1,"not-reps":!1,maxweight:185,name:"Spiders",grp:1,maximum:100,multiple:5},{group:"clean",bumper:!0,weight:1,"not-reps":!1,maxweight:225,name:"Cleans",grp:1,maximum:40,multiple:2},{group:"snatch",bumper:!0,weight:1,"not-reps":!1,maxweight:185,name:"Snatches",grp:1,maximum:40,multiple:2},{group:"clean",bumper:!0,weight:1,"not-reps":!1,maxweight:225,name:"Clean and Jerk",grp:1,maximum:40,multiple:2},
{group:"oblique",bumper:!1,weight:1,"not-reps":!1,maxweight:55,name:"Dumbell side raise (per side)",grp:1,maximum:40,multiple:2}];
cf.workouts=[{"calc-reps":!0,name:"3 Rounds for time",repmod:[0.2,0.2,0.3,0.2,0.2],lbsmod:[1,1,1,1,1],mod:0,round:!0},{"calc-reps":!0,name:"3 Rounds for time",repmod:[0.2,0.4,0.3,0.2],lbsmod:[1,1,1,1],mod:0,round:!0},{"calc-reps":!0,name:"3 Rounds for time",repmod:[0.4,0.3,0.4],lbsmod:[1,1,1],mod:0,round:!0},{"calc-reps":!1,name:"Triangulate (1-3-6-10-15)",repmod:[0,0],lbsmod:[1,1],mod:1,round:!0},{"calc-reps":!0,name:"Exercises for time",repmod:[0.6,0.4,0.8,0.4,0.6],lbsmod:[1,1,1,1,1],mod:1,round:!0},
{"calc-reps":!1,name:"10-9-8-7-6-5-4-3-2-1",repmod:[0,0],lbsmod:[1,1],mod:1,round:!0},{"calc-reps":!1,name:"10-9-8-7-6-5-4-3-2-1",repmod:[0,0,0],lbsmod:[1,1,1],mod:1,round:!0},{"calc-reps":!0,name:"5 Rounds for time",repmod:[0.1,0.3,0.2],lbsmod:[1,1,1],mod:1,round:!0},{"calc-reps":!1,name:"21-15-9",repmod:[0,0],lbsmod:[1,1],mod:1,round:!0},{"calc-reps":!1,name:"21-15-9",repmod:[0,0,0],lbsmod:[1,1,1],mod:1,round:!0},{"calc-reps":!1,name:"Cubication (1-8-27)",repmod:[0,0,0],lbsmod:[1,1,1],mod:1,round:!0},
{"calc-reps":!0,name:"10 Rounds",repmod:[0.08,0.12],mod:0,lbsmod:[1,1],round:!0},{"calc-reps":!0,name:"10 Rounds",repmod:[0.06,0.08,0.06],mod:0,lbsmod:[1,1,1],round:!0},{"calc-reps":!0,name:"On the 30s for 30 mins",repmod:[0.05,0.08,0.06],lbsmod:[1,1,1],mod:0,round:!1},{"calc-reps":!0,name:"On the 30s for 30 mins",repmod:[0.07,0.13],lbsmod:[1,1],mod:0,round:!1},{"calc-reps":!1,name:"Fibonacci (1-1-2-3-5-8-13)",repmod:[0,0,0,0],lbsmod:[1,1,1,1],mod:1,round:!0},{"calc-reps":!1,name:"Fibonacci (1-1-2-3-5-8-13)",
repmod:[0,0,0],lbsmod:[1,1,1],mod:1,round:!0},{"calc-reps":!0,name:"Max rounds in 20 minutes",repmod:[0.05,0.08,0.06],lbsmod:[1,1,1],mod:0,round:!1},{"calc-reps":!0,name:"The 4 X 4 (four rounds of four)",repmod:[0.3,0.2,0.4,0.2],lbsmod:[1,1,1,1],mod:1,round:!0},{"calc-reps":!0,name:"Pyramid (for time)",repmod:[0.1,0.3,0.6,0.8,0.6,0.3,0.1],lbsmod:[1,1,1,1,1,1,1],mod:1,round:!0},{"calc-reps":!0,name:"Mach 2 (for time)",repmod:[1,1],lbsmod:[1,1],mod:1,round:!0},{"calc-reps":!0,name:"Mach 3 (for time)",
repmod:[1,1,1],lbsmod:[1,1,1],mod:1,round:!0},{"calc-reps":!0,name:"Death by Doubling",repmod:[2],lbsmod:[1],mod:1,round:!0}];cf.seedDate=new Date;
$(function(){function a(){var a=$("#custom-seed").val();a?Math.seedrandom(a):Math.seedrandom();cf.currentWorkout=newWorkout()}$("#newworkout").button().on("click",a);$("#newwod").button().on("click",function(){Math.seedrandom(cf.seedDate.toDateString());cf.currentWorkout=newWorkout()});$("#slider").slider({min:0,max:4,step:1,change:function(){cf.currentWorkout=setDifficulty(cf.currentWorkout)},value:2});var b=getUrlParam("seed");b&&$("#custom-seed").val(b);var c=getUrlParam("wod");(b=(b||c)&&(c?cf.seedDate.toDateString():
b))&&Math.seedrandom(b);$("#custom-seed").keypress(function(b){code=b.keyCode?b.keyCode:b.which;13==code&&a()});cf.currentWorkout=newWorkout()});function newWorkout(){for(var a=cf.workouts,b=Math.floor(Math.random()*a.length),a=$.extend(!0,{},a[b]),b=[],c=[],g=getWeightedExerciseCount();b.length<a.repmod.length;){var f=getWeightedExercise(g);!(!1==a["calc-reps"]&&!0==f["not-reps"])&&-1==c.indexOf(f.group)&&(c.push(f.group),b.push(f))}a.routine=b;$("#reset").click();return setDifficulty(a)}
function setDifficulty(a){for(var b=getDifficulty(),c=0;c<a.routine.length;c++){var g=a.routine[c],f=a.round?g.multiple:0;g.reps=a["calc-reps"]?roundToMultiple(g.maximum*a.repmod[c]*b/(1==a.mod?1:g.grp),f):"";g.weight=g.maxweight?roundToMultiple(g.maxweight*a.lbsmod[c]*b,5):"--"}return renderWorkout(a,b)}
function renderWorkout(a){$("#workout-data").empty().append("<p><b>"+a.name+" ("+getDifficultyName()+") </b></p>");var b=$("<table/>"),c=$("<tr/>");c.append("<th>Exercise</th>");a["calc-reps"]&&c.append("<th>Reps</th>");c.append("<th>Lbs</th>");b.append(c);for(c=0;c<a.routine.length;c++){var g=a.routine[c],f=$("<tr/>");f.append("<td>"+g.name+"</td>");a["calc-reps"]&&f.append("<td>"+g.reps+"</td>");f.append("<td>"+g.weight+"</td>");b.append(f)}$("#workout-data").append(b);return a}
function getDifficulty(a){a=void 0==a?$("#slider").slider("value"):a;return cf.difficulty[a]}function getDifficultyName(a){a=void 0==a?$("#slider").slider("value"):a;return cf.difficultyName[a]}function roundToMultiple(a,b){return 0<b?b*Math.round(a/b)||b:Math.round(a)||1}function getUrlParam(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");a=RegExp("[\\?&]"+a+"=([^&#]*)").exec(window.location.search);return null==a?"":decodeURIComponent(a[1].replace(/\+/g," "))}
function getWeightedExerciseCount(){var a=0,b;for(e in cf.exercises)b=cf.exercises[e],b.bumper||(a+=parseFloat(b.weight));return a}function getWeightedExercise(a){a*=Math.random();var b=0,c;for(e in cf.exercises)if(c=$.extend(!0,{},cf.exercises[e]),!c.bumper&&(b+=parseFloat(c.weight),b>=a))return c};(function(a,b,c,g,f,d,m){function p(a){var b,f,d=this,g=a.length,h=0,q=d.i=d.j=d.m=0;d.S=[];d.c=[];for(g||(a=[g++]);h<c;)d.S[h]=h++;for(h=0;h<c;h++)b=d.S[h],q=q+b+a[h%g]&c-1,f=d.S[q],d.S[h]=f,d.S[q]=b;d.g=function(a){var b=d.S,f=d.i+1&c-1,g=b[f],h=d.j+g&c-1,j=b[h];b[f]=j;b[h]=g;for(var l=b[g+j&c-1];--a;)f=f+1&c-1,g=b[f],h=h+g&c-1,j=b[h],b[f]=j,b[h]=g,l=l*c+b[g+j&c-1];d.i=f;d.j=h;return l};d.g(c)}function n(a,b,c,d,f){c=[];f=typeof a;if(b&&"object"==f)for(d in a)if(5>d.indexOf("S"))try{c.push(n(a[d],
b-1))}catch(g){}return c.length?c:a+("string"!=f?"\x00":"")}function h(a,b,d,f){a+="";for(f=d=0;f<a.length;f++){var g=b,h=f&c-1,q=(d^=19*b[f&c-1])+a.charCodeAt(f);g[h]=q&c-1}a="";for(f in b)a+=String.fromCharCode(b[f]);return a}b.seedrandom=function(l,j){var s=[],r;l=h(n(j?[l,a]:arguments.length?l:[(new Date).getTime(),a,window],3),s);r=new p(s);h(r.S,a);b.random=function(){for(var a=r.g(g),b=m,h=0;a<f;)a=(a+h)*c,b*=c,h=r.g(1);for(;a>=d;)a/=2,b/=2,h>>>=1;return(a+h)/b};return l};m=b.pow(c,g);f=b.pow(2,
f);d=2*f;h(b.random(),a)})([],Math,256,6,52);var $start=$("#start"),startText=$start.text(),stopText=$start.attr("alternate"),$split=$("#split"),$reset=$("#reset"),$timer=$("#timer"),$splits=$("#splits"),$help=$("#help"),$helpSwitch=$("#help-switch"),$helpDiv=$help.find("div"),t=[0,0,0,0,0,0,0,0],format=function(a){var b=(new Date(a+t[5])).toString().replace(/.*(\d{2}:\d{2}:\d{2}).*/,"$1");for(a=String(a%1E3);3>a.length;)a="0"+a;b+="."+a;return b.substr(0,b.length-1)},zero=function(a){if(0>parseInt(a))var b=!0;10>Math.abs(parseInt(a))&&(a="0"+
Math.abs(a));b&&(a="-"+a);return a},startStop=function(){t[t[2]]=(+new Date).valueOf();t[2]=1-t[2];0==t[2]?(clearInterval(t[4]),t[3]+=t[1]-t[0],$start.text(startText),t[7]++,$splits.show(),$("<li><span>"+zero(t[7])+"</span> "+format(t[3])+"</li>").appendTo($splits).slideDown("fast"),$splits.find("li").removeClass("first last"),$splits.find("li:first").addClass("first").end().find("li:last").addClass("last"),t[4]=t[1]=t[0]=0,display()):($start.text(stopText),t[4]=setInterval(display,43));return!1},
reset=function(){t[2]&&startStop();t[4]=t[3]=t[2]=t[1]=t[0]=0;display();$start.text(startText);$splits.slideUp("fast",function(){$splits.empty()});t[7]=0;return!1},display=function(){t[2]&&(t[1]=(new Date).valueOf());$timer.text(format(t[3]+t[1]-t[0]))},split=function(){0!==t[2]&&(t[7]++,$splits.show(),$("<li><span>"+zero(t[7])+"</span> "+format(t[3]+t[1]-t[0])+"</li>").appendTo($splits).slideDown("fast"),$splits.find("li").removeClass("first last"),$splits.find("li:first").addClass("first").end().find("li:last").addClass("last"));
return!1},load=function(){t[5]=(new Date(1970,1,1,0,0,0,0)).valueOf();display()};$(function(){$splits.empty();load();$start.click(startStop);$split.click(split);$reset.click(reset);$helpSwitch.click(function(){$helpDiv.slideToggle("fast",function(){$helpDiv.filter(":visible")&&$.scrollTo($helpSwitch,500)});return!1});$("#controls li:last").addClass("last")});