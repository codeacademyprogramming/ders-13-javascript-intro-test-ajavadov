day=parseInt(prompt("2-ci mesele: Heftenin gununun nomresin yazin"))
var validate;
if(day===1){
validate="bazar ertəsi";
alert(validate);
}
else if(day===2){
validate="cersenbe axsami";
alert(validate);
}
else if(day===3){
validate="cersenbe";
alert(validate);
}
else if(day===4){
validate="cume axsami";
alert(validate);}
else if(day===5){
validate="cume";
alert(validate);
}
else if(day===6){
validate="shenbe";
alert(validate);}
else if(day===7){
validate="bazar";
alert(validate);}

else{
validate="bele bir gun movcud deyil"
}

document.getElementById("third").innerHTML="Daxil etdiyiniz gün nömrəsi "+day+"-dır. Və "+validate+"dir."
