var theScore = 0;


// Function to add 5
function addFive(){
	theScore = 5 + theScore;
	jQuery("#result").text(theScore);
}

// Function to add 10
function addTen(){
	theScore += 10;
	jQuery("#result").text(theScore);
}

// Function to subtract 1
function subTractOne(){
	theScore = theScore - 1;
	jQuery("#result").text(theScore);
}

// Function to reset to zero
function resetToZero(){
	theScore = 0;	
	jQuery("#result").text(theScore);

}

jQuery(document).ready(function(){

	jQuery("#add5").click(function(){
		addFive();
	});
	jQuery("#zero").click(function(){
		resetToZero();
	});
	jQuery("#add10").click(function(){
		addTen();
	});
	jQuery("#sub1").click(function(){
		
	});

});


