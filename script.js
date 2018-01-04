
// Set the user names for the messages
var i = 0;
function author(){
  return ['Me', 'Myself', 'I'][i++ % 3];
};
//Get current time
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes();

function lonely(){
  $.ajax({
  url:"https://api.icndb.com/jokes/random",
  success: function(r){
    const content = `<li class="message">
      <a class="delete" href='#'>Delete</a>
      <h3 class="author">Internet</h3>
      <p class="message-body">${r.value.joke}</p>
      <span class="timestamp">${time}</span>
      </li>`;
    $('#conversation').append(content);
  }
  });
};

$(function(){
  $('#lonely').on('click', function(){
    lonely()
    $('#new-message-body').val("");
  });
});






$(function(){
  $('#new-message-button').click(function(){
    const message = $('#new-message-body').val();
    const content = `<li class="message">
      <a class="delete" href='#'>Delete</a>
      <h3 class="author">${author()}</h3>
      <p class="message-body">${message}</p>
      <span class="timestamp">${time}</span>
      </li>`;
    $('#conversation').append(content);
    $('#new-message-body').val("");
  });

  $('#new-message-body').keypress(function( event ){
    if(event.keyCode === 13){
      console.log("you pressed enter")
      const message = $('#new-message-body').val();
      const content = `<li class="message">
        <a class="delete" href='#'>Delete</a>
        <h3 class="author">${author()}</h3>
        <p class="message-body">${message}</p>
        <span class="timestamp">${time}</span>
      </li>`;
      $('#conversation').append(content);
      $('#new-message-body').val("");
    }
  });

  $('#conversation').on('click', '.delete', function(e){
    const message = $('#new-message-body').val();
    const content = `<li class="message">
      <a class="delete" href='#'>Delete</a>
      <h3 class="author">${author()}</h3>
      <p class="message-body">${message}</p>
      <span class="timestamp">${time}</span>
    </li>`;
    $(this).parent().remove();
    e.preventDefault();
  });


  // $('author').on('click', function(){
  //   const usernames = ["Me", "Myself", "I"];
  //   const message = $('#new-message-body').val();
  //
  //   for(usernames i = 0, i < 3; i++){
  //     enterMessage('Hello');
  //     $(message)
  //
  //   }
  //
  // });


});
