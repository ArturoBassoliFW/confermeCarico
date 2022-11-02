window.jsPDF = window.jspdf.jsPDF;

function prova() {
  console.log("ciao");
}

/* Get Data */
function getData(form) {
  const formData = Object.fromEntries(new FormData(form));

  /* Dati singoli */
  const data_vettore = formData.vettore;
  const data_tipoCamion = formData.tipoCamion;
  const data_tipoMerce = formData.merce;
  const data_numPlt = formData.numPallet;
  const data_tipoPlt = formData.tipoPallet;
  const data_scambioEpal = formData.scambioEpal;
  const data_caricoPerContoDi = formData.caricoPerContoDi;
  const data_nolo = formData.nolo;
  const data_fatturazione = formData.fatturazione;
  const data_tempCamion = formData.temperaturaCamion;

  makePdf(formData);
}

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  getData(event.target);
});

/* Make PDF */
function makePdf(formData) {
  const doc = new jsPDF();

  console.log(formData);
  console.log(numeroC);
  console.log(Object.values(formData)[0]);

/*   doc.text(Object.values(formData)[0], 10, 10);
  doc.text(Object.values(formData)[1], 10, 20);
  doc.text(Object.values(formData)[2], 10, 30);
  doc.text(Object.values(formData)[3], 10, 40);
  doc.text(Object.values(formData)[4], 10, 50);
  doc.text(Object.values(formData)[5], 10, 60);
  doc.text(Object.values(formData)[6], 10, 70);
  doc.text(Object.values(formData)[7], 10, 80);
  doc.text(Object.values(formData)[8], 10, 90);
  doc.text(Object.values(formData)[9], 10, 100);
  doc.text(Object.values(formData)[10], 10, 110);
  doc.text(Object.values(formData)[11], 10, 120);
  doc.text(Object.values(formData)[12], 10, 130);
  doc.text(Object.values(formData)[13], 10, 140);
  doc.text(Object.values(formData)[14], 10, 150); */

  Object.values(formData).forEach((value, index) => doc.text(value, 10, (index+1)*10));

  console.log(Object.values(formData)[5] === "Sì");

  doc.save();
}
