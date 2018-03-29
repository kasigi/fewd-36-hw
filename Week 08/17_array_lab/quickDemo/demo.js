var myBigDataObject = {
	"food":['gouda','brie','gorgonzola','cheddar','manchego','pepperjack'],
	"servingdish":'Cheese Board'
}


jQuery(document).ready(function(){

	var mystring="";
	jQuery.each(myBigDataObject['food'],function(index,value){
		mystring += "<li>"+value+"</li>";
	});
	console.log(mystring);
	mystring = "<ul>"+mystring+"</ul>";
	mystring = "<h2>" + myBigDataObject['servingdish'] + "</h2>" + mystring;
	console.log(mystring);

	jQuery('.demoContainer').prepend(mystring);

});