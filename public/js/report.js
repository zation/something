$(function() {
	$('table tr td:nth-child(7), table tr td:nth-child(8), table tr td:nth-child(9)').each(function() {
		$(this).hide();
	});

	$('#submit').on('click', function() {
		var highLightClassName = 'text-danger';

		$('table tbody td').removeClass(highLightClassName);
		$('table tbody td').removeClass('text-warning');
		$('table tbody td').removeClass('text-muted');
		$('table tbody td:nth-child(3)').each(function() {
			var begin_age = parseInt($('.from.age').val()) || 0;
			var end_age = parseInt($('.to.age').val()) || 100;
			if (begin_age < parseInt(this.innerHTML) && parseInt(this.innerHTML) < end_age) {
				$(this).addClass(highLightClassName);
			}
		});

		$('table tbody td:nth-child(7)').each(function() {
			if (this.innerHTML == $('#income').val()) {
				$(this).addClass(highLightClassName);
			}
		});

		$('table tbody td:nth-child(8)').each(function() {
			if (this.innerHTML == $('#risk').val()) {
				$(this).addClass(highLightClassName);
			}
		});

		$('table tbody td:nth-child(9)').each(function() {
			var highLightCount = $(this).parent().find('.' + highLightClassName).length;
			if (highLightCount > 2) {
				$(this).html('hot');
				$(this).addClass(highLightClassName);
			} else if (highLightCount > 0) {
				$(this).html('warm');
				$(this).addClass('text-warning');
			} else {
				$(this).html('cold');
				$(this).addClass('text-muted');
			}
		});

		$('table tr td:nth-child(7), table tr td:nth-child(8), table tr td:nth-child(9)').each(function() {
			$(this).show();
		});
	});
});