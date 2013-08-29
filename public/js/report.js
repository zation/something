$(function() {
  var $extendedColumns = $('table tr td:nth-child(7), table tr td:nth-child(8), table tr td:nth-child(9)');

  $extendedColumns.each(function() {
    $(this).hide();
  });

  $('#submit').on('click', function() {
    var highLightClassName = 'text-danger';
    var begin_age = parseInt($('.from.age').val()) || 0;
    var end_age = parseInt($('.to.age').val()) || 100;

    $('table tbody tr').each(function() {
      var value = 0;
      var $this = $(this);
      var $age = $this.children('td:nth-child(3)');
      var $income = $this.children('td:nth-child(7)');
      var $risk = $this.children('td:nth-child(8)');
      var $value = $this.children('td:nth-child(9)');
      $this.removeClass('danger, warning');

      var age = parseInt($age.html());
      if (begin_age < age && age < end_age) {
        $age.addClass(highLightClassName);
        value++;
      }

      var income = $income.html();
      if($('#income').val() == income) {
        $income.addClass(highLightClassName);
        value++;
      }

      var risk = $risk.html();
      if($('#risk').val() == risk) {
        $risk.addClass(highLightClassName);
        value++;
      }

      if (value > 2) {
        $value.html('hot');
        $this.addClass('danger');
      } else if (value > 0) {
        $value.html('warm');
        $this.addClass('warning');
      } else {
        $value.html('cold');
      }
    });

    $extendedColumns.each(function() {
      $(this).show();
    });
  });
});