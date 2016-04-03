$(document).ready(function(){
	var gridnumber=2500;
	var newgrid = function(gridnumber){
		$(".square").remove();
		var count2=0;
		for (var count=0; count<gridnumber; count++) {
			if (count2===Math.sqrt(gridnumber)){
				$(".container").append("<br>");
				count2=0;
			}
			$(".container").append("<div class='square'></div>");
			count2++;
		};
		$(".square").mouseenter(function(){
			$(this).addClass("hovered");
		})
	}
	newgrid(gridnumber);
	$("#mybutton").click(function(){
		var squares=parseInt(prompt("Enter number of squares per row: " ,50),10);
		newgrid(squares*squares);
	});
});

