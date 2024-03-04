function addRecommendation() {
  // ID´s: nueva_recomendacion
  let recommendation = document.getElementById("nueva_recomendacion");
  // CODIGO DE POPUP
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("Nueva recomendacion");
    showPopup(true);

    // SE CREA VALOR A LA RECOMENCAIÓN Y SE AGREGA A LA PAGINA , ID´s: all_recommendations
    var element = document.createElement("div");
    element.setAttribute("class","recommendation");
    element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
    document.getElementById("all_recommendations").appendChild(element);

    // RESET AL AREA DE TEXTO DE RECOMENDACIONES
    recommendation.value = "";
  }
}

//MOSTRAR o NO POPUP
function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}
