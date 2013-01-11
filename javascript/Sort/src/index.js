var columns_num = 200;

var finishSort = function(canvas){
	canvas.css("backgroundColor","#34e456");
}

var copyArray = function(L) {
    var newL = [];
    for (var i = 0; i < L.length; ++i) {
        newL[i] = L[i];
    }
    return newL;
}
var getRondamList = function(L, num, max) {
    for (var i = 0; i < num; ++i) {
        L[i] = parseInt(Math.random() * max);
    }
}
var To16 = function(n) { return (n < 16 ? '' : To16(parseInt(n / 16))) + '' + [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'][n % 16]; }
var setColums = function(canvas, L, width, height) {
    var len = L.length;
    width = width || 2;
    for (var i = 0; i < len; ++i) {
        var R = To16(parseInt(L[i] / height * 256));
        if (R.length == 1) {
            R = "0" + R;
        }
        var G = To16(i);
        if (G.length == 1) {
            G = "0" + G;
        }
        var color = "#" + R + G + G;
        var column = $("<span>").addClass("column").css({ "height": L[i], "width": width, "backgroundColor": color }).attr({ "title": L[i] });
        canvas.append(column);
    }
}
var updateColumns = function(canvas, newL) {
    var len = newL.length;
    //console.log(newL);
    var columns = canvas.find(".column");
    for (var i = 0; i < len; ++i) {
        columns[i].style.height = newL[i] + "px";
    }

}
var isNum = function(val){
    var pv = parseInt(val);
    if (pv.toString() === val && pv.toString() != "NaN") {
	return true;
    }else{
        return false;
    }
}

var setfpsTime = function(obj) {
    var t = $.trim(obj.value);
    var pt = parseInt(t);
    if (pt.toString() === t && pt.toString() != "NaN") {
        if (pt < 20) {
            obj.value = 20;
        }
        fpsTime = pt;
    }
}
var setcolumns_num = function(obj) {
    var c = $.trim(obj.value);
    var pc = parseInt(c);
    if (pc.toString() === c && pc.toString() != "NaN") {
		if(pc<1){
            obj.value = 1;
		}
        if (pc > 200) {
            obj.value = 200;
        }
        columns_num = pc;Initcanvas();
    }
}

var BeginSort = function() {
};
var SortType = HeapSort;
var width = 400, height = 300;

var Initcanvas = function() {
    var canvas = $(".canvas");
	var temp;

    for (var i = 0; i < Ti.length; ++i) {
        clearTimeout(Ti[i]);
    }
//fpsTime
	temp = $.trim($("#Mfps").val());
    if (isNum(temp)) {
		if(temp<20){
            $("#Mfps").val(20);
		}
        fpsTime = parseInt(temp);
    }
//columns_num
	temp = $.trim($("#Mnum").val());
    if (isNum(temp)) {
		if(temp<1){
            $("#Mnum").val(1);
		}
        if (temp > 200) {
            $("#Mnum").val(200);
        }
        columns_num =parseInt (temp);
    }
//width
    if (isNum($("#Mwidth").val())) {
        width = parseInt($("#Mwidth").val());
    }
//height
    if (isNum($("#Mheight").val())) {
        height = parseInt($("#Mheight").val());
    }

    canvas.remove();
    canvas = $("<div>").addClass("canvas").css({ "width": width, "height": height });

    $("body").append(canvas);
    var L = [];
    canvas.sorted = L;
    getRondamList(L, columns_num, height);
    setColums(canvas, L, width / columns_num, height);
    BeginSort = function() {
        SortType(canvas, L);
    };
}

Initcanvas();