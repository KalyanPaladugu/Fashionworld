(function(){function loadJSON(file, callback) {
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET", file, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status == "200") {
      callback(xhr.responseText);
    }
  };
  xhr.send();
}
loadJSON("resource/data.json", function(text) {

  let output = JSON.parse(text);
  //console.log(output);
 jeanslist(output.jeans);
  casuallist(output.casualdress);

});




var jeansv = document.querySelector('#mainjeans');

function jeanslist(alljeanslist) {
  for (var i = 0; i <= alljeanslist.length - 1; i++) {
    var card = document.createElement("div");
    card.classList.add("jeanscard");
    jeansv.appendChild(card);
    var image = document.createElement("img");
    image.src = alljeanslist[i].image;
    card.appendChild(image);
    var break1 = document.createElement("br");
    image.appendChild(break1);
    var head = document.createElement("p");
    head.textContent = alljeanslist[i].name;
    card.appendChild(head);


  }
}
  var casualshirt = document.querySelector('.casuallist');

  function casuallist(allcasuallist) {
    for (var i = 0; i <= allcasuallist.length - 1; i++) {
      var card = document.createElement("div");
      card.classList.add("casualcard");
  casualshirt.appendChild(card);
      var image = document.createElement("img");
      image.src = allcasuallist[i].image;
      card.appendChild(image);
      var break1 = document.createElement("br");
      image.appendChild(break1);
      var head = document.createElement("p");
      head.textContent = allcasuallist[i].name;
      card.appendChild(head);
      var link=document.createElement("a");
      link.textContent="Buy This Product";
      link.href="selection.html?id="+allcasuallist[i].id;
      card.appendChild(link);

    }


}
})();
