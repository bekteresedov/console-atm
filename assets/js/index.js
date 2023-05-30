var oldName = "Baktar";
var oldSurname = "Asadov";
var oldPassword = "Baktar12";

oldName = oldName.toLocaleLowerCase();
oldPassword = oldPassword.toLocaleLowerCase();
oldSurname = oldSurname.toLocaleLowerCase();

var girishhaqqi = 3;

var balance = 5000;

while (girishhaqqi > 0) {
  var newName = prompt("Enter your  name:");
  var newSurname = prompt("Enter your  surname:");
  var newPassword = prompt("Enter your  password:");

  newName = newName.toLocaleLowerCase();
  newPassword = newPassword.toLocaleLowerCase();
  newSurname = newSurname.toLocaleLowerCase();

  if (
    newName == oldName &&
    newSurname == oldSurname &&
    newPassword == oldPassword
  ) {
    alert("Welcome to ATM");
    var emeliyyat = prompt(
      "1-Pul chekmek 2. Pul daxil Elemek 3. Kredit elde elemek. 4 Sistemden chixish etmek."
    );
    if (emeliyyat == "1") {
      alert("pul chekildi");
    } else if (emeliyyat == "2") {
      alert("pul daxil edirem");
    } else if (emeliyyat == "3") {
      alert("kredit elde edirem");
    } else if (emeliyyat == "4") {
      alert("Sistemden chixish olunur...");
      break;
    } else {
      alert("Zehmet olmasa emeliyyati duzgun daxil edin!");
    }

    break;
  } else if (newName != oldName) {
    girishhaqqi--;
    alert(
      newName +
        ", Zehmet olmasa adinizi duzgun daxil edin! sizin giris haqqiniz: " +
        girishhaqqi
    );
  } else if (newPassword != oldPassword) {
    girishhaqqi--;
    alert(
      newName +
        ", Zehmet olmasa shifrenizi duzgun daxil edin! sizin giris haqqiniz: " +
        girishhaqqi
    );
  } else if (oldSurname != newSurname) {
    girishhaqqi--;

    alert(
      newName +
        ",Zehmet olmasa soyadinizi duzgun daxil edin! sizin giris haqqiniz: " +
        girishhaqqi
    );
  }
}

if (girishhaqqi == 0) {
  alert(newName + ", Sistemden chixis olundu...");
}
