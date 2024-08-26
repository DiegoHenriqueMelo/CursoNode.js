function a() {
  console.log("imprimindo a()");
}

function b() {
  console.log("imprimindo b()");
}

function c() {
  console.log("imprimindo c()");
  a();
  b();
}

c();

