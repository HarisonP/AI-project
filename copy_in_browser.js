// $('.fbNubFlyoutInner textarea')
// jquery and after that....:

$('.fbDockChatTabFlyout').on("DOMSubtreeModified",'.conversation', function(e) { 
	if($(e.target).eq(0).is('div') && $($(e.target)[0].lastChild).find('a').length != 0){
		$.get('http://localhost:3000/',{message:message},function(response){
			console.log(response)
		})
		var o = document.getElementsByClassName("uiTextareaAutogrow _552m");
		// set the chat textbox
		var chatTextBox = o[0];
		// set the message value
		chatTextBox.value = $($(e.target)[0].lastChild).text();
		// create a keydown event    
		var e = new Event("keydown");
		// it has to simulate the Enter press (key code is 13)
		e.keyCode = 13;
		// trigger it
		chatTextBox.dispatchEvent(e);
	}
	
});




// var o = document.getElementsByClassName("uiTextareaAutogrow _552m");
// // set the chat textbox
// var chatTextBox = o[0];
// // set the message value
// chatTextBox.value = "Hello";
// // create a keydown event    
// var e = new Event("keydown");
// // it has to simulate the Enter press (key code is 13)
// e.keyCode = 13;
// // trigger it
// chatTextBox.dispatchEvent(e);