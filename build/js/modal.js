//Модальное окно формы.

  "use strict";

  var link = document.querySelector(".header-top__button");
  var popup = document.querySelector(".modal-wrapper");
  var close = popup.querySelector(".modal__close");
  var login = popup.querySelector("[name=login-name]");
  var form = popup.querySelector("form");
  var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }


  link.addEventListener("click", function(evt) {
       evt.preventDefault();
       popup.classList.add("modal--show");

       if (storage) {
          login.value = storage;
       } else {
        login.focus();
       }

      });

  close.addEventListener("click", function(evt) {
        evt.preventDefault();
        popup.classList.remove("modal--show");

      });

  form.addEventListener("submit", function(evt) {
        evt.preventDefault();

        if (!login.value) {
          evt.preventDefault();
          console.log("Нужно ввести имя");

        } else {
          if (isStorageSupport) {
          localStorage.setItem("login", login.value);
          }
          popup.classList.remove("modal--show");
      }});

   window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal--show")) {
        popup.classList.remove("modal--show");
      }
    }
  });
