//"use strict";

function clickFn(e) {
  console.info(this, e, this, window.event);
}

function onload() {
  document.getElementById("123").addEventListener(
    "click",
    function(e) {
      console.info(this, e);
    },
    true
  );
}
// this 指向的问题
var lang = 1;

function fn1() {
  console.info(this.lang);
}

var obj = {
  lang: 2,
  method1: function(fn) {
    fn();
    fn.call(this);
    arguments[0]();
  },
  mtehod2: function(fn) {
    document.addEventListener(
      "click",
      function() {
        fn();
      },
      true
    );
  }
};

obj.method1(fn1);
obj.mtehod2(fn1);


//变量提升问题
var a = 10;
function test() {
  if (!a) {
    var a = 100;
  }
  console.info(a);
}

test()

{
  let a ='123'
  let b = '456'
  console.info('dadf',a)
  
}


console.info('dadf',a)