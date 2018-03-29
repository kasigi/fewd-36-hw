var lights = "on";

function addMe(inputValue){
	console.log(inputValue + 2);
}



function switchLights(e) {
	e.preventDefault();


addMe(1);
addMe(5);

  // if lights are on
  if(lights == "on"){
  		// turn off
  		jQuery("body").addClass("dark");
  		lights = "off";
  }else{
  	// else
  		// turn on
  		 jQuery("body").removeClass("dark");
  		 lights = "on";
  }

}

jQuery('#light_switch').click(switchLights);
jQuery('#light_switch2').click(switchLights);
