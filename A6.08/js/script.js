let Total = 0;

function Persent(buttonNum) {
	Total = Total + buttonNum;

	if (Total > 100) {
        Total = 100
        $("button").prop("disabled", true);
    }

	$("#progressbox").css('width', String(Total) + "%");
	console.log("Total " + Total + "%");
}

function init() {

    $("button#btn1").click(function () {Persent(1)});
    $("button#btn3").click(function () {Persent(3)});
    $("button#btn7").click(function () {Persent(7)});

    console.log("File ready");
}

$(document).ready(init);
