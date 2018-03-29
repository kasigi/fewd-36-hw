

jQuery(document).ready(function(){


    //When the concat button is clicked, combine the two strings and output the result
    jQuery("#concatButton").click(function(e){
        e.preventDefault();
        var concateOneValue = jQuery("#concatOne").val();
        var concatTwoValue = jQuery("#concatTwo").val();
        jQuery("#concatResult").text(concateOneValue + concatTwoValue);
    });

    // When the add20Button is clicked, get the value of the input, add 20 and place in add20Output
    jQuery("#add20Button").click(function(e){
        e.preventDefault;
        // Get the input value as a float
        var inputValue = jQuery("#add20Input").val();
        inputValue = parseFloat(inputValue) + 20;
        jQuery("#add20Output").text(inputValue);
    });

    // When the appendButton is clicked, get the value of the input, wrap in <p> tags and append it to the appendOutput
    jQuery("#appendButton").click(function(e){
        e.preventDefault;
        var sourceText = "<p>"+ jQuery("#appendInput").val() + "</p>";
        jQuery("#appendOutput").append(sourceText);
    });

});

