$(function() {
  $('input, #personalDetails_title').on('change', function() {
    var value = $(this).val();
    if (value === '') {
      return;
    }
    var key = $(this).attr('id');
    if (key !== 'personalDetails_permanentResident_radioNo' && $('#personalDetails_permanentResident_radioNo').is(':checked')) {
      return;
    }
    var data = {};
    data[key] = value;
    $.ajax({
      url: '/save',
      type: 'POST',
      data: data
    });
  });
});