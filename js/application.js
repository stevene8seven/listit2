

	// Validate text box, then add value in text box to list

	$('#add').click(function(event) {
		if( $('#input_text').val().trim().length == 0 ) {
				// alert("missing");
				$('#error').show();
				$('#input_text').val("");
		} else { 

		$('.items').append('<li class="item"><button class="remove">Mark Complete</button>' + $('#input_text').val() + '</li>');
		$('#input_text').val("");
		$('#error').hide();

		};	
		event.preventDefault();
	});

	// Change class when user clicks Mark Complete button	

	$('.items').on('click', '.remove', function() {
		
		var isComplete =
		$(this).closest('li').toggleClass('complete')
		.hasClass("complete");

		if(isComplete === false){
			$(this).text("Mark Complete")
		}
		else{
			$(this).text("Undo")
		}

	});
