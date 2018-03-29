// Create a function that determines the computer choice.  It should return one of the three values: 'rock', 'paper', or 'scissors'
function computerChoice() {
    var random = Math.random();
    if (random < 0.333) {
        return  'rock';
    } else if(random < 0.67777) {
        return 'paper';
    } else {
        return 'scissors';
    }
};


/* Create a function that compares the user's selection to the computer's selection.  It should then output the opponent's choice to #computerSelection and display who is the winner.

 */
function compare(me, opponent) {

    jQuery('#computerSelection').text(opponent);

    if(me===opponent){
        return 'Tie';
    } else{
        return 'There is a winner';
    }
};


jQuery( document ).ready(function() {

    // Bind a click event onto each of the three buttons.  It should run the compare function and then put the result to the #decsision id in the html
jQuery("#scissors").on('click', function(){


  jQuery("#decision").html(compare('scissors', computerChoice()));
});

jQuery('#rock').on('click', function(){
  var result = compare('rock', computerChoice());
  jQuery("#decision").html(result);
});

jQuery('#paper').on('click', function(){
  var result = compare('paper', computerChoice());
  jQuery("#decision").html(result);
});

});
