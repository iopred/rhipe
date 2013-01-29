var cf = cf || {};
cf.difficulty = [0.2, 0.4, 0.6, 0.8, 1]
cf.difficultyName = ["Amoeba", "Human", "Hero", "Superhuman", "Demigod"]
cf.exercises = [
	{"group": "row", "bumper": false, "weight": 1, "not-reps": false, "maxweight": 0, "name": "Inverted Row", "grp": 1, "maximum": 80, "multiple": 5},
	{"group": "snatch", "bumper": false, "weight": .25, "not-reps": false, "maxweight": 55, "name": "Kettle Bell Snatch (per arm)", "grp": 1, "maximum": 50, "multiple": 5},
	{"group": ["delts", "tricep"], "bumper": false, "weight": 1, "not-reps": false, "maxweight": 0, "name": "Handstand Pushups", "grp": 1, "maximum": 40, "multiple": 2},
	{"group": "backextension", "bumper": false, "weight": 1, "not-reps": false, "maxweight": 0, "name": "Back extension", "grp": 1, "maximum": 100, "multiple": 5},
	{"group": "swing", "bumper": false, "weight": .25, "not-reps": false, "maxweight": 55, "name": "2-Hand Kettle Bell Swings", "grp": 1, "maximum": 80, "multiple": 5},
	{"group": "jacks", "bumper": false, "weight": 1.5, "not-reps": false, "maxweight": 0, "name": "Jumping Jacks", "grp": 1, "maximum": 200, "multiple": 5},
	{"group": ["pullup", "bicep"], "bumper": false, "weight": 1, "not-reps": false, "maxweight": 0, "name": "Chins", "grp": 1, "maximum": 60, "multiple": 5},
	{"group": ["pullup", "bicep"], "bumper": false, "weight": 1, "not-reps": false, "maxweight": 0, "name": "Pullups", "grp": 1, "maximum": 60, "multiple": 5},
	{"group": ["pecs", "tricep"], "bumper": false, "weight": 1, "not-reps": false, "maxweight": 0, "name": "Press-ups", "grp": 1, "maximum": 80, "multiple": 5},
	{"group": ["delts", "tricep"], "bumper": false, "weight": 1, "not-reps": false, "maxweight": 135, "name": "Thrusters", "grp": 1, "maximum": 60, "multiple": 5},
	{"group": ["dip", "tricep"], "bumper": false, "weight": 1, "not-reps": false, "maxweight": 0, "name": "Dips", "grp": 1, "maximum": 60, "multiple": 5},
	{"group": "highpull", "bumper": false, "weight": .25, "not-reps": false, "maxweight": 55, "name": "Kettle Bell High Pull (per arm)", "grp": 1, "maximum": 40, "multiple": 5},
	{"group": "abs", "bumper": false, "weight": 1, "not-reps": false, "maxweight": 0, "name": "Crunches", "grp": 1, "maximum": 100, "multiple": 5},
	{"group": "abs", "bumper": false, "weight": 1, "not-reps": false, "maxweight": 0, "name": "Medicine ball crunch/throw", "grp": 1, "maximum": 100, "multiple": 5},
	{"group": ["hipflex", "abs"], "bumper": false, "weight": 1, "not-reps": false, "maxweight": 0, "name": "Leg raises", "grp": 1, "maximum": 100, "multiple": 5},
	{"group": "clean", "bumper": false, "weight": .25, "not-reps": false, "maxweight": 55, "name": "Kettle Bell Cleans (per arm)", "grp": 1, "maximum": 50, "multiple": 5},
	{"group": "squat", "bumper": false, "weight": 2, "not-reps": false, "maxweight": 0, "name": "Squats", "grp": 1, "maximum": 200, "multiple": 5},
	{"group": "deadlift", "bumper": false, "weight": 3, "not-reps": false, "maxweight": 225, "name": "Deadlift", "grp": 2, "maximum": 50, "multiple": 5},
	{"group": "deadlift", "bumper": false, "weight": 1.5, "not-reps": false, "maxweight": 315, "name": "Sumo Deadlift", "grp": 2, "maximum": 50, "multiple": 5},
	{"group": ["pecs", "tricep"], "bumper": false, "weight": 1.5, "not-reps": false, "maxweight": 185, "name": "Bench press", "grp": 2, "maximum": 80, "multiple": 5},
	{"group": ["pecs", "tricep"], "bumper": false, "weight": 1.5, "not-reps": false, "maxweight": 225, "name": "Bench press", "grp": 2, "maximum": 50, "multiple": 5},
	{"group": ["delts", "tricep"], "bumper": false, "weight": .25, "not-reps": false, "maxweight": 55, "name": "2-arm Kettle Bell Military Press", "grp": 1, "maximum": 50, "multiple": 5},
	{"group": "squat", "bumper": false, "weight": 2, "not-reps": false, "maxweight": 275, "name": "Back squat", "grp": 2, "maximum": 60, "multiple": 5},
	{"group": "squat", "bumper": false, "weight": 2, "not-reps": false, "maxweight": 185, "name": "Back squat", "grp": 2, "maximum": 100, "multiple": 5},
	{"group": ["delts", "tricep"], "bumper": false, "weight": 1.5, "not-reps": false, "maxweight": 185, "name": "Barbell push-press", "grp": 2, "maximum": 60, "multiple": 5},
	{"group": ["delts", "tricep"], "bumper": false, "weight": 2, "not-reps": false, "maxweight": 135, "name": "Barbell press", "grp": 2, "maximum": 60, "multiple": 5},
	{"group": "shrug", "bumper": false, "weight": 1, "not-reps": false, "maxweight": 225, "name": "Shrugs", "grp": 2, "maximum": 80, "multiple": 5},
	{"group": ["jacks", "jump", "pecs", "tricep"], "bumper": false, "weight": 1.5, "not-reps": false, "maxweight": 0, "name": "Burpees", "grp": 1, "maximum": 80, "multiple": 5},
	{"group": ["pullup", "dip", "tricep"], "bumper": false, "weight": 0.5, "not-reps": false, "maxweight": 0, "name": "Muscleups", "grp": 1, "maximum": 50, "multiple": 2},
	{"group": "jump", "bumper": false, "weight": 2, "not-reps": false, "maxweight": 0, "name": "Box jump", "grp": 1, "maximum": 100, "multiple": 5},
	{"group": ["row", "bicep"], "bumper": false, "weight": 2, "not-reps": false, "maxweight": 135, "name": "Barbell Row", "grp": 1, "maximum": 60, "multiple": 5},
	{"group": "lunge", "bumper": false, "weight": 1, "not-reps": false, "maxweight": 60, "name": "Dumbbell Lunge (per leg)", "grp": 1, "maximum": 40, "multiple": 2},
	{"group": "oblique", "bumper": false, "weight": 1, "not-reps": false, "maxweight": 55, "name": "Kettle Bell Twists", "grp": 1, "maximum": 100, "multiple": 2},
	{"group": "cleanpress", "bumper": false, "weight": .25, "not-reps": false, "maxweight": 55, "name": "Kettle Bell Clean/Press (per arm)", "grp": 1, "maximum": 40, "multiple": 5},
	{"group": "abs", "bumper": false, "weight": 1, "not-reps": false, "maxweight": 45, "name": "Weighted decline situp", "grp": 1, "maximum": 50, "multiple": 2},
	{"group": ["pecs", "tricep"], "bumper": false, "weight": 1, "not-reps": false, "maxweight": 0, "name": "Alternating-hand Ball Press-up", "grp": 1, "maximum": 40, "multiple": 2},
	{"group": "clean", "bumper": true, "weight": 1, "not-reps": false, "maxweight": 225, "name": "Cleans", "grp": 1, "maximum": 40, "multiple": 2},
	{"group": "snatch", "bumper": true, "weight": 1, "not-reps": false, "maxweight": 185, "name": "Snatches", "grp": 1, "maximum": 40, "multiple": 2},
	{"group": "clean", "bumper": true, "weight": 1, "not-reps": false, "maxweight": 225, "name": "Clean and Jerk", "grp": 1, "maximum": 40, "multiple": 2},
	{"group": "oblique", "bumper": false, "weight": 1, "not-reps": false, "maxweight": 55, "name": "Dumbell side raise (per side)", "grp": 1, "maximum": 40, "multiple": 2},
	{"group": ["pecs", "tricep"], "bumper": false, "weight": 2, "not-reps": false, "maxweight": 100, "name": "Dumbell floor press", "grp": 1, "maximum": 60, "multiple": 2},
	{"group": ["hamstring", "deadlift"], "bumper": false, "weight": 1, "not-reps": false, "maxweight": 135, "name": "RDL (Romanian Deadlift)", "grp": 1, "maximum": 80, "multiple": 2}
];
cf.workouts=[
	{"weight": 3, "calc-reps": true, "name": "3 Rounds for time", "repmod": [.2, .2, .3, .2, .2], "lbsmod": [1, 1, 1, 1, 1], "mod": 0, "round": true},
	{"weight": 2, "calc-reps": true, "name": "3 Rounds for time", "repmod": [.2, .4, .3, .2], "lbsmod": [1, 1, 1, 1], "mod": 0, "round": true},
	{"weight": 1, "calc-reps": true, "name": "3 Rounds for time", "repmod": [.4, .3, .4], "lbsmod": [1, 1, 1], "mod": 0, "round": true},
	{"weight": 1, "calc-reps": false, "name": "Triangulate (1-3-6-10-15)", "repmod": [0, 0], "lbsmod": [1, 1], "mod": 1, "round": true},
	{"weight": 5, "calc-reps": true, "name": "Exercises for time", "repmod": [.6, .4, .8, .4, .6], "lbsmod": [1, 1, 1, 1, 1], "mod": 1, "round": true},
	{"weight": 1, "calc-reps": false, "name": "10-9-8-7-6-5-4-3-2-1", "repmod": [0, 0], "lbsmod": [1, 1], "mod": 1, "round": true},
	{"weight": 1, "calc-reps": false, "name": "10-9-8-7-6-5-4-3-2-1", "repmod": [0, 0, 0], "lbsmod": [1, 1, 1], "mod": 1, "round": true},
	{"weight": 4, "calc-reps": true, "name": "5 Rounds for time", "repmod": [.2, .3, .2], "lbsmod": [1, 1, 1], "mod": 1, "round": true},
	{"weight": 3, "calc-reps": false, "name": "21-15-9", "repmod": [0, 0], "lbsmod": [1, 1], "mod": 1, "round": true},
	{"weight": 1, "calc-reps": false, "name": "21-15-9", "repmod": [0, 0, 0], "lbsmod": [1, 1, 1], "mod": 1, "round": true},
	{"weight": 1, "calc-reps": false, "name": "Cubication (1-8-27)", "repmod": [0, 0, 0], "lbsmod": [1, 1, 1], "mod": 1, "round": true},
	{"weight": 1, "calc-reps": true, "name": "10 Rounds", "repmod": [.08, .12], "mod": 0, "lbsmod": [1, 1], "round": true},
	{"weight": 1, "calc-reps": true, "name": "10 Rounds", "repmod": [.06, .08, .06], "mod": 0, "lbsmod": [1, 1, 1], "round": true},
	{"weight": 5, "calc-reps": true, "name": "On the minute for 30 mins", "repmod": [.05, .08, .06], "lbsmod": [1, 1, 1], "mod": 0, "round": false},
	{"weight": 2, "calc-reps": true, "name": "On the minute for 30 mins", "repmod": [.07, .13], "lbsmod": [1, 1], "mod": 0, "round": false},
	{"weight": 1, "calc-reps": false, "name": "Fibonacci (1-1-2-3-5-8-13)", "repmod": [0, 0, 0, 0], "lbsmod": [1, 1, 1, 1], "mod": 1, "round": true},
	{"weight": 1, "calc-reps": false, "name": "Fibonacci (1-1-2-3-5-8-13)", "repmod": [0, 0, 0], "lbsmod": [1, 1, 1], "mod": 1, "round": true},
	{"weight": 1, "calc-reps": true, "name": "Max rounds in 20 minutes", "repmod": [.05, .08, .06], "lbsmod": [1, 1, 1], "mod": 0, "round": false},
	{"weight": 5, "calc-reps": true, "name": "The 4 X 4 (four rounds of four)", "repmod": [.3, .2, .4, .2], "lbsmod": [1, 1, 1, 1], "mod": 1, "round": true},
	{"weight": 2, "calc-reps": true, "name": "Pyramid (for time)", "repmod": [.2, .4, .6, .8, .6, .4, .2], "lbsmod": [1, 1, 1, 1, 1, 1, 1], "mod": 1, "round": true},
	{"weight": 1, "calc-reps": true, "name": "Mach 2 (for time)", "repmod": [1, 1], "lbsmod": [1, 1], "mod": 1, "round": true},
	{"weight": 1, "calc-reps": true, "name": "Mach 3 (for time)", "repmod": [1, 1, 1], "lbsmod": [1, 1, 1], "mod": 1, "round": true},
	{"weight": 1, "calc-reps": true, "name": "Death by Doubling", "repmod": [2], "lbsmod": [1], "mod": 1, "round": true}			
];
cf.seedDate = new Date();

$(function() {
	function seedWorkout() {
		var customSeed = $("#custom-seed").val();
		customSeed ? Math.seedrandom(customSeed) : Math.seedrandom();
		cf.currentWorkout = newWorkout();
	};
	
	$("#newworkout").button().on("click", seedWorkout);
	$("#newwod").button().on("click", function(e) {
		Math.seedrandom(cf.seedDate.toDateString());
		cf.currentWorkout = newWorkout();
	});
    $("#slider").slider({
		min: 0, 
		max: 4,
		step: 1,
		change: function(event, ui) {
			cf.currentWorkout = setDifficulty(cf.currentWorkout);
		},
		value: 2
	});
	var urlSeed = getUrlParam("seed");
	if (urlSeed) {$("#custom-seed").val(urlSeed)};
	var wod = getUrlParam("wod");
	var seed = (urlSeed || wod) && (wod ? cf.seedDate.toDateString() : urlSeed);
	if (seed) {
		Math.seedrandom(seed);
	};
	$("#custom-seed").keypress(function(e) {
		code = (e.keyCode ? e.keyCode : e.which);
		if (code == 13) {
			seedWorkout();
		}
	});
	cf.currentWorkout = newWorkout();
});

function newWorkout() {
	var numWorkouts = getWeightedWorkoutCount();
	var workout = getWeightedWorkout(numWorkouts);
	var routine = [];
	var routineExercises = [];
	var numExercises = getWeightedExerciseCount();
	while (routine.length < workout["repmod"].length) {
		var exercise = getWeightedExercise(numExercises);
		if (workout["calc-reps"] == false && exercise["not-reps"] == true) {
			continue;
		};
		var group = exercise["group"] instanceof Array ? exercise["group"] : [exercise["group"]];
		var valid = true;
		for (var i=0; i < group.length; i++) {
			if ($.inArray(group[i], routineExercises) >= 0) {
				valid = false;
				break;
			};
		};
		if (valid) {
			routineExercises = routineExercises.concat(group)
			routine.push(exercise);
		};
	};
	workout["routine"] = routine;
	$("#reset").click();
	return setDifficulty(workout);
};

function setDifficulty(workout) {
	var difficultyFactor = getDifficulty();
	for (var i=0; i < workout.routine.length; i++) {
		var exercise = workout["routine"][i]
		var multiple = workout["round"] ? exercise["multiple"] : 0;
		if (workout["calc-reps"]) {
			exercise["reps"] = roundToMultiple(
				(exercise["maximum"] * workout["repmod"][i] * difficultyFactor) / ((workout["mod"] == 1) ? 1 : exercise["grp"]),
				multiple);
		} else {
			exercise["reps"] = ""
		}
		exercise["weight"] = exercise["maxweight"] ? roundToMultiple(
			(exercise["maxweight"] * workout["lbsmod"][i] * difficultyFactor), 5) : '--';
	};
	return renderWorkout(workout, difficultyFactor);
};

function renderWorkout(workout) {
	$("#workout-data").empty().append("<p><b>" + workout.name + " (" + getDifficultyName() + ") </b></p>");
	var $table = $("<table/>");
	var $trh = $("<tr/>");
	$trh.append("<th>Exercise</th>");
	if (workout["calc-reps"]) {
		$trh.append("<th>Reps</th>");
	}
	$trh.append("<th>Lbs</th>");
	$table.append($trh);
	for (var i=0; i < workout.routine.length; i++) {
		var exercise = workout.routine[i];
		var $tr = $("<tr/>");
		$tr.append("<td>" + getYouTubeLink(exercise["name"]) + "</td>");
		if (workout["calc-reps"]) {
			$tr.append("<td>" + exercise["reps"] + "</td>");
		}
		$tr.append("<td>" + exercise["weight"] + "</td>");
		$table.append($tr);
	};
	$("#workout-data").append($table);
	return workout;
};

function getDifficulty(index) {
	index = (index == undefined) ? $("#slider").slider("value") : index;
	return cf.difficulty[index];
};

function getDifficultyName(index) {
	index = (index == undefined) ? $("#slider").slider("value") : index;
	return cf.difficultyName[index];
};

function roundToMultiple(number, multiple) {
	if (multiple > 0) {
	    return multiple * Math.round(number / multiple) || multiple; 
	} else {
		return Math.round(number) || 1;
	}
};

function getUrlParam(name) {
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	var regexS = "[\\?&]" + name + "=([^&#]*)";
	var regex = new RegExp(regexS);
	var results = regex.exec(window.location.search);
	if (results == null) {
		return "";
	} else {
		return decodeURIComponent(results[1].replace(/\+/g, " "));
	}
};

function getWeightedExerciseCount() {
	var count = 0;
	var exercise;
	for (e in cf.exercises) {
		exercise = cf.exercises[e];
		if (!exercise["bumper"]) {
			count += parseFloat(exercise["weight"]);
		}
	}
	return count;
};

function getWeightedExercise(numExercises) {
	var choice = Math.random() * numExercises;
	var count = 0;
	var exercise;
	for (e in cf.exercises) {
		exercise = $.extend(true, {}, cf.exercises[e]);
		if (!exercise["bumper"]) {
			count += parseFloat(exercise["weight"]);
			if (count >= choice) {
				return exercise;
			}
		}
	}
};

function getWeightedWorkoutCount() {
	var count = 0;
	var workout;
	for (e in cf.workouts) {
		workout = cf.workouts[e];
		count += parseFloat(workout["weight"]);
	}
	return count;
};

function getWeightedWorkout(numWorkouts) {
	var choice = Math.random() * numWorkouts;
	var count = 0;
	var workout;
	for (e in cf.workouts) {
		workout = $.extend(true, {}, cf.workouts[e]);
		count += parseFloat(workout["weight"]);
		if (count >= choice) {
			return workout;
		}
	}
};

function getYouTubeLink(name) {
	return '<a href="http://www.youtube.com/results?search_query='+encodeURI(name)+'" target="_new">'+name+'</a>';
};

// Seed Random Min
(function(j,i,g,m,k,n,o){function q(b){var e,f,a=this,c=b.length,d=0,h=a.i=a.j=a.m=0;a.S=[];a.c=[];for(c||(b=[c++]);d<g;)a.S[d]=d++;for(d=0;d<g;d++)e=a.S[d],h=h+e+b[d%c]&g-1,f=a.S[h],a.S[d]=f,a.S[h]=e;a.g=function(b){var c=a.S,d=a.i+1&g-1,e=c[d],f=a.j+e&g-1,h=c[f];c[d]=h;c[f]=e;for(var i=c[e+h&g-1];--b;)d=d+1&g-1,e=c[d],f=f+e&g-1,h=c[f],c[d]=h,c[f]=e,i=i*g+c[e+h&g-1];a.i=d;a.j=f;return i};a.g(g)}function p(b,e,f,a,c){f=[];c=typeof b;if(e&&c=="object")for(a in b)if(a.indexOf("S")<5)try{f.push(p(b[a],e-1))}catch(d){}return f.length?f:b+(c!="string"?"\0":"")}function l(b,e,f,a){b+="";for(a=f=0;a<b.length;a++){var c=e,d=a&g-1,h=(f^=e[a&g-1]*19)+b.charCodeAt(a);c[d]=h&g-1}b="";for(a in e)b+=String.fromCharCode(e[a]);return b}i.seedrandom=function(b,e){var f=[],a;b=l(p(e?[b,j]:arguments.length?b:[(new Date).getTime(),j,window],3),f);a=new q(f);l(a.S,j);i.random=function(){for(var c=a.g(m),d=o,b=0;c<k;)c=(c+b)*g,d*=g,b=a.g(1);for(;c>=n;)c/=2,d/=2,b>>>=1;return(c+b)/d};return b};o=i.pow(g,m);k=i.pow(2,k);n=k*2;l(i.random(),j)})([],Math,256,6,52); 

