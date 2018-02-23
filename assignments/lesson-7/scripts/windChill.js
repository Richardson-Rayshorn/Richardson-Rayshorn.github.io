var windChill, t ,s;
//f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16 
t = (90 + 66) / 2;
s = Math.pow(5,0.16);
windChill = Math.round(((35.74 + 0.6215 * t) - 35.75) * (s + (0.4275 * t) * s));

document.getElementById("windChill").innerHTML = windChill;