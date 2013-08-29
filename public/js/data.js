$(function() {
  setInterval(function() {
    $.ajax({
      url: '/data',
      type: 'GET',
      success: function(data) {
        var source = $('#data').html();
        var template = Handlebars.compile(source);
        var html = template(data);
        $('.data tbody').html(html);
      }
    });
  }, 1000);
});