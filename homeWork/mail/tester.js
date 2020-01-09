"use strict";
import { selectionSort } from "./sort.js";
let cards = [
  {
    dep: "Roza Khutor",
    dest: "Gornaya Karusel",
    seat: "no",
    transType: "bus",
    depPoint: "follow the signs",
    transNumb: 105,
    baggage: "no"
  },
  {
    dep: "Gornaya Karusel",
    dest: "Rixos hotel",
    seat: "no",
    transType: "cable car",
    depPoint: "walk from the cable car to the hotel",
    transNumb: "any",
    baggage: "no"
  },
  {
    dep: "metro station Moscow",
    dest: "Pulkovo airport",
    seat: "no",
    transType: "bus",
    depPoint: "exit the metro at the signs for the bus stop",
    transNumb: 55,
    baggage: "baggage is paid separately"
  },
  {
    dep: "Adler airport",
    dest: "Roza Khutor",
    seat: "no",
    transType: "train Lastochka",
    depPoint: "folow the signs",
    transNumb: "no",
    baggage: "no"
  },
  {
    dep: "Pulkovo airport",
    dest: "Adler airport",
    seat: "46d",
    transType: "flight",
    depPoint: "gate 8",
    transNumb: "472G",
    baggage: "Baggage drop at ticket counter 344"
  }
];
selectionSort(cards);
