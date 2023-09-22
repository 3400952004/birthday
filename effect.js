$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
			$('#b77').animate({top:240, left: vw+250},500);
			
		
		});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne() {
		var randright = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({right:randright,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randright = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({right:randright,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({right:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({right:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({right:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({right:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({right:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}
	function loopEight() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b8').animate({right:randleft,bottom:randtop},10000,function(){
			loopEight();
		});
	}
	function loopNine() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b9').animate({right:randleft,bottom:randtop},10000,function(){
			loopNine();
		});
	}
	function loopTen() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b10').animate({right:randleft,bottom:randtop},10000,function(){
			loopTen();
		});
	}
	function loopEleven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1100').animate({right:randleft,bottom:randtop},10000,function(){
			loopEleven();
		});
	}
	function loopTwelve() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b12').animate({right:randleft,bottom:randtop},10000,function(){
			loopTwelve();
		});
	}
	function loopThirteen() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b13').animate({right:randleft,bottom:randtop},10000,function(){
			loopThirteen();
		});
	}
	function loopFourteen() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b14').animate({right:randleft,bottom:randtop},10000,function(){
			loopFourteen();
		});
	}
	function loopFifteen() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b15').animate({right:randleft,bottom:randtop},10000,function(){
			loopFifteen();
		});
	}
	function loopSixteen() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b16').animate({right:randleft,bottom:randtop},10000,function(){
			loopSixteen();
		});
	}
	function loopSeventeen() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b17').animate({right:randleft,bottom:randtop},10000,function(){
			loopSeventeen();
		});
	}
	function loopEighteen() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b18').animate({right:randleft,bottom:randtop},10000,function(){
			loopEighteen();
		});
	}
	function loopNineteen() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b19').animate({right:randleft,bottom:randtop},10000,function(){
			loopNineteen();
		});
	}
	function loopTwenty() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b20').animate({right:randleft,bottom:randtop},10000,function(){
			loopTwenty();
		});
	}
	function loopTwentyOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b21').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwentyOne();
		});
	}
	function loopTwentyTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2200').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwentyTwo();
		});
	}
	function loopTwentyThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b23').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwentyThree();
		});
	}
	function loopTwentyFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b24').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwentyFour();
		});
	}
	function loopTwentyFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b25').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwentyFive();
		});
	}
	function loopTwentySix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b26').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwentySix();
		});
	}
	function loopTwentySeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b27').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwentySeven();
		});
	}
	function loopTwentyEight() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b28').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwentyEight();
		});
	}
	function loopTwentyNine() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b29').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwentyNine();
		});
	}
	function loopThirty() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b30').animate({left:randleft,bottom:randtop},10000,function(){
			loopThirty();
		});
	}
	function loopThirtyOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b31').animate({left:randleft,bottom:randtop},10000,function(){
			loopThirtyOne();
		});
	}
	function loopThirtyTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b32').animate({left:randleft,bottom:randtop},10000,function(){
			loopThirtyTwo();
		});
	}
	function loopThirtyThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3300').animate({left:randleft,bottom:randtop},10000,function(){
			loopThirtyThree();
		});
	}
	function loopThirtyFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b34').animate({left:randleft,bottom:randtop},10000,function(){
			loopThirtyFour();
		});
	}
	function loopThirtyFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b35').animate({left:randleft,bottom:randtop},10000,function(){
			loopThirtyFive();
		});
	}
	function loopThirtySix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b36').animate({left:randleft,bottom:randtop},10000,function(){
			loopThirtySix();
		});
	}
	function loopThirtySeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b37').animate({left:randleft,bottom:randtop},10000,function(){
			loopThirtySeven();
		});
	}
	function loopThirtyEight() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b38').animate({left:randleft,bottom:randtop},10000,function(){
			loopThirtyEight();
		});
	}
	function loopThirtyNine() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b39').animate({left:randleft,bottom:randtop},10000,function(){
			loopThirtyNine();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b3,#b5,#b7,#b9,#b1100,#b13,#b15,#b17,#b19,#b21,#b23,#b25,#b27,#b29,#b31,#b3300,#b35,#b37,#b39').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b4,#b6,#b8,#b9,#b10,#b12,#b14,#b16,#b18,#b20,#b2200,#b24,#b26,#b28,#b30,#b32,#b34,#b36,#b38').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		loopEight();
		loopTen();
		loopEleven();
		loopTwelve();
		loopThirteen();
		loopFourteen();
		loopFifteen();
		loopSixteen();
		loopSeventeen();
		loopEighteen();
		loopNineteen();
		loopTwenty();
		loopTwentyOne();
		loopTwentyTwo();
		loopTwentyThree();
		loopTwentyFour();
		loopTwentyFive();
		loopTwentySix();
		loopTwentySeven();
		loopTwentyEight();
		loopTwentyNine();
		loopThirty();
		loopThirtyOne();
		loopThirtyTwo();
		loopThirtyThree();
		loopThirtyFour();
		loopThirtyFive();
		loopThirtySix();
		loopThirtySeven();
		loopThirtyEight();
		loopThirtyNine();


		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');		
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('.balloons').css('opacity','0.1');
			$('.balloons1').css('opacity','0.1');
			$('#light_candle').fadeIn('slow');
		 });
		$(this).promise().done(function(){
			$('#light_candle');
		});

		
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		 $(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});

	});
	$('#wish_message').click(function(){
		 vw = $(window).width()/2;
		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		$('#b11').animate({top:240, left: vw-350},500);
		$('#b22').animate({top:240, left: vw-250},500);
		$('#b33').animate({top:240, left: vw-150},500);
		$('#b44').animate({top:240, left: vw-50},500);
		$('#b55').animate({top:240, left: vw+50},500);
		$('#b66').animate({top:240, left: vw+150},500);
		$('#b77').animate({top:240, left: vw+250},500);

		$('.balloons').css('opacity','0.9');
		
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('');
		$('.cake').fadeIn('slow').promise().done(function(){
			$('.message').fadeIn('slow');
		 });
		
		var i;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(3000).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('slow').delay(3000);
			if(i==30){
				i=i-1;
				$("p:nth-child("+i+")").fadeIn('slow').promise().done(function () {
					$('.cake').fadeIn('fast');
					// 测试结尾句
				});
				
			}
			else{
				msgLoop(i);
			}			

		});
			// body...
		}
		
		msgLoop(0);
		
	});
});




//alert('hello');
