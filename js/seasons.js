var fesil=prompt("3-cü məsələ: Fəsil adını daxil edin");
var validate;
var flag=0;
if(fesil=="yay"){
    validate="iyun, iyul, avqust";
    alert(validate);
}
else if((fesil=="payiz") || (fesil=="payız")){
    validate="sentyabr, oktyabr, noyabr";
    alert(validate);
}
else if((fesil=="qish") || (fesil=="qis") || (fesil=="qış")){
    validate="dekabr, yanvar, fevral";
    alert(validate);
}
else if((fesil=="yaz") || (fesil=="bahar")){
    validate="mart, aprel, may";
    alert(validate);
}
else{
    validate=" ,bele bir fesil yoxdur";
    flag=1;
    alert(validate);
}
if(flag)
document.getElementById('third').innerHTML="Daxil etdiyiniz fesil adı:"+fesil+validate;
else
document.getElementById('third').innerHTML="Daxil etdiyiniz fesil adı:"+fesil+", və bu fəsildəki ayların adı: <br/> "+validate
