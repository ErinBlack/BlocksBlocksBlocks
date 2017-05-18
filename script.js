$(onReady);

function onReady(){

//creating box
$('.button').on('click', createBox);

// change color to black
$('.boxContainer').on('click','.box', changeColor);

//deletee div

$('.boxContainer').on('click','.deleteButton', deleteDiv);

}

// function to create box
  function createBox(){
    console.log('createBox activated');
    var $div = $('<div class="box">' + '<button class="deleteButton">x</button>' + '</div>');
    $('.boxContainer').append($div);
    var random = randomNumber(0,4);
    console.log(random);

    randomColor($div)
    function randomColor(newBox){
      var colors = ['blue', 'red','orange','green','purple'];
      $(newBox).css('background-color',colors[random]);
      console.log(colors[random]);
    }



} //end createBox()

//function to delete div
  function deleteDiv(){
    console.log('delete div activted');
    $(this).parent().remove();
  }

// function to change color

  function changeColor(){
    console.log('change color activated');

    $(this).css('background-color','black');
  } // end changeColor

  //random color function
  function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
// end random color function
