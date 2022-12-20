const day = prompt("Lutfen Bir Gun Giriniz:").toLocaleLowerCase();
switch (day) {
  case "pazartesi":
  case "sali":
  case "carsamba":
  case "persembe":
    console.log("inclass");
    break;
  case "cuma":
    console.log("teamwork");
    break;

  case "cumartesi":
    console.log("inclass and workshop");
    break;

  case "pazar":
    console.log("self study");
    break;
  default:
    console.log("incorrect day");
}
