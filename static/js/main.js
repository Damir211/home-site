"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var searchButtonOpen = document.querySelectorAll('.search__button');
  searchButtonOpen.forEach(function (item) {
    var searchContainer = item.parentElement;
    item.addEventListener('click', function () {
      item.nextElementSibling.classList.add('active');
      document.addEventListener('click', function (e) {
        if (!searchContainer.contains(e.target)) {
          item.nextElementSibling.classList.remove('active');
        }
      });
    });
  });
});
var mobileDropdownButtons = document.querySelectorAll('.mobile .dropdown__button');
mobileDropdownButtons.forEach(function (item) {
  item.addEventListener('click', function () {
    var dropdownContainer = item.nextElementSibling;

    if (!dropdownContainer.classList.contains('active')) {
      dropdownContainer.classList.add('active');
      dropdownContainer.style.height = 'auto';
      var height = dropdownContainer.clientHeight + 'px';
      dropdownContainer.style.height = '0px';
      setTimeout(function () {
        dropdownContainer.style.height = height;
      }, 0);
    } else {
      dropdownContainer.style.height = '0px';
      dropdownContainer.addEventListener('transitionend', function () {
        dropdownContainer.classList.remove('active');
      }, {
        once: true
      });
    }
  });
});
var mobileButton = document.querySelector('.menu-button');
var mobileMenuContainer = document.querySelector('.mobile');
var mobileMenuClose = document.querySelector('.mobile__close');
mobileButton.addEventListener('click', function () {
  document.body.classList.add('no-scroll');
  mobileMenuContainer.classList.add('active');
});
mobileMenuClose.addEventListener('click', function () {
  document.body.classList.remove('no-scroll');
  mobileMenuContainer.classList.remove('active');
});