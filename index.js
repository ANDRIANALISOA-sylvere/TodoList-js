var tache = document.getElementById("tache");
var render = document.getElementById("render");

//function d'ajout d'une nouvelle tache
function handleSubmit() {
  if (tache.value === "") {
    //si le champs est vide
    alert("Le champs est obligatoire");
  } else {
    //sinon si le champs contient une tâche
    //créer le tâche
    localStorage.setItem(
      "tache " + Math.random(100),
      JSON.stringify({
        tache: tache.value,
        checked: false,
      })
    );
    window.location.reload();
    //remettre le champs à  vide
    tache.value = "";
  }
}

//affichage des tâches
for (let i = 0; i < localStorage.length; i++) {
  //stocker le key de chaque item
  let localStorageName = localStorage.key(i);

  //création d'un div pour chaque tache ajoutée
  var div = document.createElement("div");
  div.setAttribute(
    "class",
    "bg-light col-md-6 p-2 m-2  ms-5 rounded d-flex justify-content-between"
  );
  div.style.maxHeight = "300px";
  div.style.overflow = "auto";

  //checkbox
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.setAttribute("class", "form-check-input m-1");
  checkbox.value = "";
  checkbox.id = Math.random(200) * 100;

  //création d'un span
  var span = document.createElement("span");
  span.id = checkbox.id + "span";
  span.innerHTML = JSON.parse(localStorage.getItem(localStorageName)).tache;

  //création de l'icone de suppression
  var iconsSuppr = document.createElement("span");
  iconsSuppr.setAttribute("class", "btn btn-danger btn-sm rounded");
  iconsSuppr.innerHTML = "X";
  iconsSuppr.style.maxHeight = "30px";

  // div de checkbox et le texte(tache)
  var divflex = document.createElement("div");
  divflex.setAttribute("class", "d-flex justify-content-left");

  divflex.appendChild(checkbox);
  divflex.appendChild(span);

  div.appendChild(divflex);
  div.appendChild(iconsSuppr);
  render.appendChild(div);

  //gérer le checkbox
  checkbox.oninput = () => {
    if (checkbox.checked) {
      //coché le texte span correspondant et mettre a jour le checked sur localStorage
    } else {
      //décoché le text span correspondant et mettre a jour le checked sur localStorage
    }
  };
  //fonction qui supprime une tâche
  iconsSuppr.onclick = () => {
    localStorage.removeItem(localStorageName);
    window.location.reload();
  };
}

function deleteAll() {
  if (localStorage.length === 0) {
    alert("pas de donnée à supprimer");
  } else {
    localStorage.clear();
    window.location.reload();
  }
}
