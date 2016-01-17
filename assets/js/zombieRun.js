$( function() {
	var buttons = $(".section button");
	var status = $("#status");
	var life = 4;

	/*for (var life = 1; life <= 10; life++) {
		randomRunAway();
		var ranRun = life + Math.floor(Math.random() * 10);
		if (ranRun > 10) {
			//console.log(life + "=" + ranRun);
			//gotoSection("death");
		}

	};
	*/


	startGame();
	setLife();

	buttons.click( function() {
		var section_suivante = $(this).attr("go");
		if (section_suivante == "fuite") {
			randomRunAway();		
		}

		var etat = $(this).attr("life");
		var nb_fuite = $(this).attr("fuite");

		updateLife(etat);

		$('.section:visible').fadeOut('200', function() {
			if (life == 0 && section_suivante != "intro") {
				gotoSection("mort");

			} else if (nb_fuite == null) {
				gotoSection(section_suivante);

			} else {
				loseLife();
				if (nb_fuite !== "seconde_fuite") {
					gotoSection("fuite_safe");
				} else {
					gotoSection("fuite_safe_appart");

				}
			};
		});
	});



	$('.section').click(function() {
		setLife();
	});

	function randomRunAway() {
		var ranRun = life + Math.floor(Math.random() * 10);
		if (ranRun < 10) {
			life = 0;
		}

	}

	function updateLife(etat) {
		if ( etat == "win") {
			gainLife();
		} else if ( etat == "reset") {
			resetLife();
		};

	}
	
	function gotoSection(key) {
		var change_section = ('#' + key);
		$(change_section).show();
	}
	
	function resetLife() {
			life = 1;		

	}
	function loseLife() {
		life = life - Math.floor(Math.random() * 3) - 1 ;
		if (life < 0) {
			life = 10;
		}
	}
	
	function gainLife() {
		life = life + Math.floor(Math.random() * 4)  + 1;
		if (life > 10) {
			life = 10;
		}

	}

	function setLife(v) {
		
		$(".value").html(life);

	}
	
	
	
	function startGame() {
		
		$('.section').hide();
		$('#intro').show();
	}

	function endGame() {
		$('.section').hide();
		$('#death').show();
	}
	
} );