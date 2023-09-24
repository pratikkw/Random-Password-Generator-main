"use strict";

const displayPass = document.querySelector(".display_pass_field");
const slider = document.getElementById("range");
const progressBar = document.querySelector(".progressbar");
const currentLen = document.querySelector(".current_len");
const generateBtn = document.querySelector(".gen_btn");
const option = document.querySelectorAll(".check");
const clickySound = new Audio("toggle-btn.mp3");

// Our Variables:-
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "1234567890";
let symbols = "!@#$%^&*+~";
let mixVari = [...upperCase, ...lowerCase, ...numbers, ...symbols];

// Set length:-
const diff = slider.max - slider.min;
currentLen.textContent = slider.value;
progressBar.style.width = ((slider.value - slider.min) / diff) * 100 + "%";

slider.oninput = function () {
  let per = ((this.value - this.min) / diff) * 100;
  progressBar.style.width = per + "%";
  currentLen.textContent = this.value;
};

// Apply Condition:-
option.forEach((item, ind) => {
  item.addEventListener("click", function () {
    clickySound.play();
    if (this.dataset.passtype === "Uppercase" && this.checked === true) {
      upperCase = "";
    } else if (
      this.dataset.passtype === "Uppercase" &&
      this.checked === false
    ) {
      upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else if (this.dataset.passtype === "Lowercase" && this.checked === true) {
      lowerCase = "";
    } else if (
      this.dataset.passtype === "Lowercase" &&
      this.checked === false
    ) {
      lowerCase = "abcdefghijklmnopqrstuvwxyz";
    } else if (this.dataset.passtype === "Numbers" && this.checked === true) {
      numbers = "";
    } else if (this.dataset.passtype === "Numbers" && this.checked === false) {
      numbers = "1234567890";
    } else if (this.dataset.passtype === "Symbols" && this.checked === true) {
      symbols = "";
    } else if (this.dataset.passtype === "Symbols" && this.checked === false) {
      symbols = "!@#$%^&*+~";
    }
  });
});

// Generate Password:-
const generatePass = function (len, ourvar) {
  let str = "";
  if (mixVari.length !== 0) {
    for (let i = str.length; i < len; i++) {
      str = str + ourvar[Math.trunc(Math.random() * mixVari.length)];
    }
    return str;
  } else {
    return "";
  }
};

// Generate Button:-
generateBtn.addEventListener("click", function () {
  mixVari = [...upperCase, ...lowerCase, ...numbers, ...symbols];
  let storePass = generatePass(+slider.value, mixVari);
  displayPass.value = storePass;
});
