/* Based on https://embed.im/snow which was inspired by https://codepen.io/alphardex/pen/dyPorwJ */
var talvesSnow = document.getElementById("talves--snow");
if (!talvesSnow) {
  function embRand(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
  }
  var embCSS = `
.talves-snow {
  position: absolute;
  width: 10px;
  height: 10px;
  background: transparent;
  border-radius: 50%;
  margin-top: -10px;
  color: white;
}
`
  var embHTML = "";
  for (i = 1; i < 200; i++) {
    embHTML += `<span class="talves-snow talves-snow-${i}">${i % 2 ? "&#x2745;" : "&#x2746;"}</span>`;

    var rndX = embRand(0, 1000000) * 0.0001,
      rndO = embRand(-100000, 100000) * 0.0001,
      rndT = (embRand(3, 8) * 10).toFixed(2),
      rndS = (embRand(0, 10000) * 0.0001).toFixed(2);

    embCSS += `
.talves-snow-${i} {
  opacity: ${(embRand(1, 10000) * 0.0001).toFixed(2)};
  transform: translate(${rndX.toFixed(2)}vw, -10px) scale(${rndS});
  animation: fall-${i} ${embRand(10, 30)}s -${embRand(0, 30)}s linear infinite
}

@keyframes fall-${i} {
  ${rndT}% {
    transform: translate(${(rndX + rndO).toFixed(2)}vw, ${rndT}vh) scale(${rndS})
  }
  to {
    transform: translate(${(rndX + rndO).toFixed(2)}vw, 105vh) scale(${rndS})
  }
}
`;
  }
  talvesSnow = document.createElement("div");
  talvesSnow.id = "talves--snow";
  talvesSnow.innerHTML = `
<style>
#talves--snow {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 9999999;
  pointer-events: none
}
${ embCSS }
</style>
${ embHTML }
`;
  document.body.appendChild(talvesSnow);
}
