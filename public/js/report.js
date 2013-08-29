$(function(){
	$('table tr td:nth-child(7)').each(function(){$(this).css('display','none')});
	$('table tr td:nth-child(8)').each(function(){$(this).css('display','none')});
	$('table tr td:nth-child(9)').each(function(){$(this).css('display','none')});
	$('#submit').click(function(){
		$('table tbody td:nth-child(3)').each(function(){
				$(this).css("color","black");
				var begin_age = parseInt($('.from.age').val())||0;
				var end_age = parseInt($('.to.age').val())||100;
				if(begin_age< parseInt(this.innerHTML) && parseInt(this.innerHTML)<end_age) {
					$(this).css("color","red");
				}
		})

		$('table tbody td:nth-child(7)').each(function(){
			 $(this).css("color","black");
			if (this.innerHTML==$('#income').val()) $(this).css("color","red");
		})

		$('table tbody td:nth-child(7)').each(function(){
			 $(this).css("color","black");
			if (this.innerHTML==$('#income').val()) $(this).css("color","red");
		})

		$('table tbody td:nth-child(8)').each(function(){
			 $(this).css("color","black");
			if (this.innerHTML==$('#risk').val()) $(this).css("color","red");
		})

		$('table tr td:nth-child(7)').each(function(){$(this).css('display','')});
		$('table tr td:nth-child(8)').each(function(){$(this).css('display','')});
		$('table tr td:nth-child(9)').each(function(){$(this).css('display','')});
	});
});
