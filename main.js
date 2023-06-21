const importObject = {
    env: {},
  };
let counter = 0;
WebAssembly.instantiateStreaming(fetch("increment.wasm"), importObject).then((results) => {
    const increment = results.instance.exports.increment;
    console.log('increment',increment)
    document.getElementById("counter-btn").addEventListener("click", () => {
        counter = increment(counter)
        document.getElementById("counter").innerHTML = counter;
      });
  });