var userAge = {}; //for keeping user month and day
var todayMonth = 1;
var today = new Date();
var userYear = today.getFullYear(); //keeping current day for using later
todayMonth += today.getMonth();
var todayDay = today.getDate();

$(function() {
  //catch event
  function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement;
  }
  //write user's month of birth
  $("#list-months").change(function() {
    userAge.month = this.value;
  });
  // dynamic creation li
  function autoCreateLi(currentYear) {
    var maxAgeEntry = currentYear - 100;
    for (var i = currentYear; i >= maxAgeEntry; i--) {
      var opt = document.createElement("li");
      opt.value = i;
      opt.innerHTML = i;
      $("#sub-list-year").append(opt);
    }
  }
  //toggle list
  $(".list-item").click(function(event) {
    $(this)
      .children("ul")
      .slideToggle();
    // event.stopPropagation();
  });
  $(".list-item-year").click(function(event) {
    autoCreateLi(userYear);
    $(this)
      .children("ul")
      .slideToggle();
    // event.stopPropagation();
  });
  //function for getting user's day of birth
  $("#sub-list").click(function(event) {
    var target = getEventTarget(event);
    var str = target.innerHTML;
    userAge.day = str;
    $("#list-date").html(str);
  });
  //function for get user year birth
  $("#sub-list-year").click(function(event) {
    var target = getEventTarget(event);
    var str = target.innerHTML;
    userYear -= str;
    $("#list-year-insert").html(str);
  });

  //function for checking user's day of birth and current day
  function checkDay(dayBirth, currentDay) {
    if (dayBirth < currentDay) {
      return alert("Отказано в доступе! Вам меньше 18 лет");
    } else {
      $("#age-control").hide();
    }
  }
  //function for checking user's month of birth and current month
  function checkMonth(month, currentMonth) {
    if (month < currentMonth) {
      return alert("Отказано в доступе! Вам меньше 18 лет месяц");
    } else if (month == currentMonth) {
      checkDay(userAge.day, todayDay);
    } else {
      $("#age-control").hide();
    }
  }
  //function for checking user's year of birth and current year
  function checkYear(year) {
    if (year < 18) {
      alert("Отказано в доступе! Вам меньше 18 лет год");
    } else if (year == 18) {
      checkMonth(todayMonth, userAge.month);
    } else {
      $("#age-control").hide();
      $(".main-form").css("display", block);
      $("footer").css("display", block);
    }
  }
  //turn on process of checking date of birth
  $("#check-age-button").click(function() {
    checkYear(userYear);
  });
});
//Start vue.js using
Vue.component("hello-world", {
  template:
    '<div class="col-4 main-form-left-input"><div class="d-flex flex-wrap justify-content-around main-form-order"><div class="col-6 justify-content-end"><input type="text" placeholder="ИМЯ*" reguared="reguared"></div><div class="col-6 justify-content-start"><span class="nikname">Достаточно написать свой никнейм</span><input type="text" placeholder="INSTAGRAM"></div><div class="col-6 justify-content-end"><input type="text" placeholder="ФАМИЛИЯ*" reguared="reguared"></div><div class="col-6 justify-content-start"><input type="text" placeholder="E-MAIL*" reguared="reguared"></div><div class="col-6 justify-content-end"><input type="text" placeholder="КОД"></div><div class="col-6 justify-content-start"><input type="text" placeholder="ДАТА ЗАПЛЫВА*" reguared="reguared"><span class="icon-clock"></span></div><div class="col-6 justify-content-end agrement one-guest"><span class="agrement-cube"></span><p>Нажимая «Подать заявку», я принимаю все условия <br> <a href="#">Согласия на обработку персональных данных</a> <br> <a href="#">и Обязательства об отказе от претензий.</a></p></div><div id="replaceBtn" class="col-6"><button class="w-100">ПОДАТЬ ЗАЯВКУ</button></div></div></div>',
  data() {
    return {
      msg: "Welcome"
    };
  }
});
new Vue({ el: "#former" });
