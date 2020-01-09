"use strict";
/**
 * Сортировщик карточек путешественника
 * Автор: Сергей Виногоров
 */
/**
 * Создание массива для хранения сортированных карточек
 * путешественника
 */
const factory = [];
/**
 * Класс сортировки Карточек
 */
class TravelSorted {
  //Поиск отправной точки в переданном массиве
  selectionSort(arr) {
    let withFirst = [];
    let len = arr.length;

    for (let i = 0; i < len - 1; i++) {
      let counter = 0;
      for (let j = 0; j < len - 1; j++) {
        if (arr[j].departure === arr[j + 1].destination) {
          counter++;
        }
        if (counter == 0) {
          let temp = arr[0];
          arr[0] = arr[j];
          arr[j] = temp;
        }
      }
    }
    withFirst = arr;
    this.sortCards(withFirst);
  }
  // Сортировка от первой карточки с поиском места
  // назначения у одной карточки и местом прибытия у другой
  sortCards(arr) {
    let sortedAndReady = [];
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
      for (let j = i + 1; j < len; j++) {
        if (arr[i].destination === arr[j].departure) {
          let temp = arr[i + 1];
          arr[i + 1] = arr[j];
          arr[j] = temp;
        }
      }
    }
    sortedAndReady = arr;
    sortedAndReady.forEach(function(element, index) {
      factory.push(new FilterCard(element));
    });
  }
  // вызов  метода сортировки и обратботки карточек по очереди
  getCardFilter() {
    factory.forEach(k => {
      console.log(k.logToResult());
    });
  }
}
/**
 * Класс отвечающий за фильтрацию карточек внутри
 */
class FilterCard {
  constructor(obj, index) {
    this.list = obj;
    this.index = index;
    this.text = [];
    this.result = "";
    this.beforeAirport = "from ";
    this.beforeTransport = "take ";
    this.beforeDestination = "to ";
  }

  static first = null;
  // метов позволяющий установить значение по умолчанию если значение не задано
  makeDefaultValues(findKey, value) {
    for (let key in this.list) {
      if (key === findKey) {
        if (this.list[key] === false || "no") {
          this.list[key] = value;
        }
      }
    }
  }
  // Вставка дополнительных указателей слов к значению в
  // карточке. Например: "Take", "From" и т.д.
  findKey(find, insertedVar) {
    for (let key in this.list) {
      if (key === find) {
        insertedVar += this.list[key];
        return (this.list[key] = insertedVar);
      }
    }
  }
  // Сортировка значений по не заполненным полям с установкой пустой строки
  checkNoValues() {
    for (let key in this.list) {
      if (this.list[key] === false || this.list[key] === "no") {
        this.list[key] = "";
      }
    }
  }
  // Метод установки очередности выдачи результата
  makeQueue(find) {
    for (let key in this.list) {
      if (key === find) {
        this.text.push(this.list[key]);
      }
    }
  }
  //Метод фильтрации массива на не используемые значения
  filterText() {
    this.text = this.text.filter(item => item);
  }
  //Метод записи результата в переменную
  makeResult(arr) {
    let result = "";
    arr.forEach(function(element, index) {
      if (index == 0) {
        result += `${element}`;
      } else {
        result += ` ${element}`;
      }
    });
    return result;
  }
  //Метод устанавливающий заглавную букву в начале строки
  ucFirst(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
  }
  //Метод хранящий в себе вызов всех методов
  logToResult() {
    this.makeDefaultValues("seat", "No seat assignment");
    this.findKey("departure", this.beforeAirport);
    this.findKey("destinatioin", this.beforeDestination);
    this.findKey("transportType", this.beforeTransport);
    this.checkNoValues();
    //проверка есть ли в карточке путешествие самолетом
    // если да то выводит другой порядок записи результата
    if (this.list.transportType === "take flight") {
      this.makeQueue("departure");
      this.makeQueue("transportType");
      this.makeQueue("transportNumb");
      this.makeQueue("destination");
      this.makeQueue("departurePoint");
      this.makeQueue("seat");
      this.makeQueue("baggage");
    } else {
      this.makeQueue("transportType");
      this.makeQueue("departurePoint");
      this.makeQueue("departure");
      this.makeQueue("transportNumb");
      this.makeQueue("destination");
      this.makeQueue("seat");
      this.makeQueue("baggage");
    }
    this.filterText();
    this.result = this.makeResult(this.text);
    this.result = this.ucFirst(this.result);
    return this.result;
  }
}
