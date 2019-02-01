$(function() {

	// Custom JS
	$("#main-form").submit(function() {
    $.ajax({
      type: "POST",
      url: "./mail.php",
      data: $(this).serialize()
    }).done(function() {
      $(this)
        .find("input")
        .val("");
      alert("Спасибо за заявку! Мы ответим Вам в течении 10 минут");
      $("#main-form").trigger("reset");
    });
    return false;
	});
	$("#call-me").submit(function() {
    $.ajax({
      type: "POST",
      url: "./mail-modal.php",
      data: $(this).serialize()
    }).done(function() {
      $(this)
        .find("input")
        .val("");
      alert("Спасибо за заявку! Мы ответим Вам в течении 10 минут");
      $("#call-me").trigger("reset");
    });
    return false;
  });
});
