let numeroC = 1;
let carico;
let numeroS = 1;
let scarico;
function addCarico() {
  carico = "carico" + numeroC;
  numeroC++;
  document
    .getElementById(carico)
    .insertAdjacentHTML(
      "afterend",
      "<!-- " +
        "carico " +
        numeroC +
        ' --><div class="carico fullWidth"id=' +
        "carico" +
        numeroC +
        '><div class=field><label for=vettore>Nome</label> <input id=vettore name=vettore list=vettori><datalist id=vettori><option value=Edge><option value=Firefox><option value=Chrome><option value=Opera><option value=Safari></datalist></div><div class=field><label for=temperatura>Temp</label><div class=radio><input id=20c name=temperatura type=radio value=20c> <label for=20c>- 20°c</label><br></div><div class=radio><input id=4c name=temperatura type=radio value=4c> <label for=4c>+ 4°c</label><br></div><div class=radio><input id=420c name=temperatura type=radio value=420c> <label for=420c>+ 4/- 20°c</label><br></div><div class=radio><input id=ambient name=temperatura type=radio value=ambient> <label for=ambient>ambient</label><br></div></div><div class=field><label for=birthdaytime>Birthday (date and time):</label> <input id=birthdaytime name=birthdaytime type=datetime-local value="dd-mm-yyyy 00:00"></div></div>'
    );
  console.log(numeroC);
  console.log(carico);
}
function addScarico() {
  scarico = "scarico" + numeroS;
  numeroS++;
  document
    .getElementById(scarico)
    .insertAdjacentHTML(
      "afterend",
      "<!-- " +
        "scarico " +
        numeroS +
        ' --><div class="carico fullWidth"id=' +
        "scarico" +
        numeroS +
        '><div class=field><label for=vettore>Nome</label> <input id=vettore name=vettore list=vettori><datalist id=vettori><option value=Edge><option value=Firefox><option value=Chrome><option value=Opera><option value=Safari></datalist></div><div class=field><label for=temperatura>Temp</label><div class=radio><input id=20c name=temperatura type=radio value=20c> <label for=20c>- 20°c</label><br></div><div class=radio><input id=4c name=temperatura type=radio value=4c> <label for=4c>+ 4°c</label><br></div><div class=radio><input id=420c name=temperatura type=radio value=420c> <label for=420c>+ 4/- 20°c</label><br></div><div class=radio><input id=ambient name=temperatura type=radio value=ambient> <label for=ambient>ambient</label><br></div></div><div class=field><label for=birthdaytime>Birthday (date and time):</label> <input id=birthdaytime name=birthdaytime type=datetime-local value="dd-mm-yyyy 00:00"></div>'
    );
  console.log(numeroS);
  console.log(scarico);
}
