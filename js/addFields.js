let numeroC = 1;
let carico;
let nomeroS = 1;
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
        "><div class=field><label for=nomeC" +
        numeroC +
        ">Nome</label> <input id=nomeC" +
        numeroC +
        " name=nomeC" +
        numeroC +
        " list=vettori><datalist id=vettori><option value=Edge><option value=Firefox><option value=Chrome><option value=Opera><option value=Safari></datalist></div><div class=field><label for=temperaturaC" +
        numeroC +
        ">Temp</label><div class=radio><input id=20c name=temperaturaC" +
        numeroC +
        " type=radio value=20c> <label for=20c>- 20°c</label><br></div><div class=radio><input id=4c name=temperaturaC" +
        numeroC +
        " type=radio value=4c> <label for=4c>+ 4°c</label><br></div><div class=radio><input id=420c name=temperaturaC" +
        numeroC +
        " type=radio value=420c> <label for=420c>+ 4/- 20°c</label><br></div><div class=radio><input id=ambient name=temperaturaC" +
        numeroC +
        " type=radio value=ambient> <label for=ambient>ambient</label><br></div></div><div class=field><label for=dataC" +
        numeroC +
        ">Data Carico</label> <input id=dataC" +
        numeroC +
        " name=dataC" +
        numeroC +
        ' type=datetime-local value="dd-mm-yyyy 00:00"></div></div>'
    );
  console.log(numeroC);
  console.log(carico);
}

function addScarico() {
  scarico = "scarico" + nomeroS;
  nomeroS++;
  document
    .getElementById(scarico)
    .insertAdjacentHTML(
      "afterend",
      "<!-- " +
        "scarico " +
        nomeroS +
        ' --><div class="carico fullWidth"id=' +
        "scarico" +
        nomeroS +
        "><div class=field><label for=nomeS" +
        nomeroS +
        ">Nome</label> <input id=nomeS" +
        nomeroS +
        "name=nomeS" +
        nomeroS +
        " list=vettori><datalist id=vettori><option value=Edge><option value=Firefox><option value=Chrome><option value=Opera><option value=Safari></datalist></div><div class=field><label for=temperaturaS" +
        nomeroS +
        ">Temp</label><div class=radio><input id=20c name=temperaturaS" +
        nomeroS +
        " type=radio value=20c> <label for=20c>- 20°c</label><br></div><div class=radio><input id=4c name=temperaturaS" +
        nomeroS +
        " type=radio value=4c> <label for=4c>+ 4°c</label><br></div><div class=radio><input id=420c name=temperaturaS" +
        nomeroS +
        " type=radio value=420c> <label for=420c>+ 4/- 20°c</label><br></div><div class=radio><input id=ambient name=temperaturaS" +
        nomeroS +
        " type=radio value=ambient> <label for=ambient>ambient</label><br></div></div><div class=field><label for=dataS" +
        nomeroS +
        ">Data Scarico</label> <input id=dataS" +
        nomeroS +
        " name=dataS" +
        nomeroS +
        ' type=datetime-local value="dd-mm-yyyy 00:00"></div></div>'
    );
  console.log(nomeroS);
  console.log(scarico);
}
