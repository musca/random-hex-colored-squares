"use strict";

ready(function() {
  var div;
  var row = document.body.querySelector(".row");
  var randomize = row.querySelector(".randomize");
  
  randomize.addEventListener("click", paintSquares);
  
  init(function() {
    paintSquares();  
  });
  
  function init(callback) {
    var html = [];
    for (var i=0; i < 34; i++) {
      html.push('<div></div>');
    };
    row.insertAdjacentHTML("beforeend", html.join(''));
    div = row.querySelectorAll(".row > div:not(.float-right)");  
    // if callback exist execute it
    callback && callback();
  }
  
  function paintSquares() {
    for (var index = 0; index < div.length; index++) {
      randomColor(div[index]);
    }
  }

  function randomColor(el) {
    var color = "";
    var letters = '0123456789ABCDEF'.split('');
    //For loop that will create random hexadecimal value.
    for (var i = 0; i < 6; i++) {
      color += letters[Math.round(Math.random() * 15)];
    }
    el.style.background = '#'+color;
    el.innerHTML = "<div><p><span>#"+color+"<br>RGB("+hexToRgb(color)+")</span></p></div>";
  }

  function hexToRgb(hex) {
      var bigint = parseInt(hex, 16);
      var r = (bigint >> 16) & 255;
      var g = (bigint >> 8) & 255;
      var b = bigint & 255;

      return [r, g, b].join();
  }    
});

function ready(f){/in/.test(document.readyState)?setTimeout('ready('+f+')',9):f()}