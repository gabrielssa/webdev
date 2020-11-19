const people = [
    {name: "Richard Harris", street: "3525 Pointe Lane", city: "Miramar", state: "FL", country: "US", telephone: "440-655-5319", birthday: "12/3/1952"},
    {name: "Sabrina E Lopez", street: "2314 Diamond Street", city: "Waynesville", state: "North Carolina(NC)", country: "US", telephone: "828-454-8655", birthday: "3/31/1951"},
    {name: "Sarah J Williams", street: "33 Pleasant Hill Road", city: "Irvine", state: "California(CA)", country: "US", telephone: "562-209-1428", birthday: "6/22/1981"}
];

const pessoas = document.getElementById("pessoas");

people.map(function(pessoa, i){
  var pessoas = document.getElementById("pessoas");
  var li=document.createElement('li');
  var details=document.createElement('details');
  details.className = "detalhe";
  details.innerHTML = "<summary unselectable=\"on\" onselectstart=\"return false;\" >"+pessoa.name+"</summary>";

  details.addEventListener("click", () => {
    closeAll(details);
  });

  var moreInfo=document.createElement('ul');
  var street=document.createElement('li');
  street.innerHTML = "Street: "+pessoa.street;

  var city=document.createElement('li');
  city.innerHTML = "City: "+pessoa.city;

  var state=document.createElement('li');
  state.innerHTML = "State: "+pessoa.state;

  var country=document.createElement('li');
  country.innerHTML = "Country: "+pessoa.country;

  var telephone=document.createElement('li');
  telephone.innerHTML = "Telephone: "+pessoa.telephone;

  var birthday=document.createElement('li');
  birthday.innerHTML = "Birthday: "+pessoa.birthday;

  moreInfo.appendChild(street);
  moreInfo.appendChild(city);
  moreInfo.appendChild(country);
  moreInfo.appendChild(telephone);
  moreInfo.appendChild(birthday);

  moreInfo.className = 'moreInfo';
  details.appendChild(moreInfo);

  li.appendChild(details);
  pessoas.appendChild(li);
});

function closeAll(e) {
  var detalhes = document.getElementsByClassName("detalhe");
  for (let i = 0; i < detalhes.length; i++){
    if(detalhes[i] !== e){
      detalhes[i].removeAttribute("open");
    }
  }
}