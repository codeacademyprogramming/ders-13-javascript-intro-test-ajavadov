alert("xoş gəlmişsiniz!")
if(confirm("hazırsınız?")){
alert("1ci- Üçbucaq düzəlməsi mümkünlüyünü yoxlaya bilməyimiz üçün, sıra ilə 3 ədəd tərəf uzunluğu daxil edin")
    var a=parseInt(prompt("1-ci tərəf"))
    var b=parseInt(prompt("2-ci tərəf"))
    var c=parseInt(prompt("3-cü tərəf"))
    var cavab1="mümkün deyil";
    var cavab2="mümkündür, bərabərtərəflidir";
    var cavab3="mümkündür, bərabəryanlıdır";
    var cavab4="mümkündür";
    var validate;
    
    if((a+b)<=c || (a+c)<=b || (b+c)<=a ){
        alert(cavab1);
        validate=cavab1;
    }
    else if(a==b && a==c){
    alert(cavab2);
    validate=cavab2;
    }
    else if((a==b && a!=c) || (a==c && a!=b) || (b==c && b!=a)){
    alert(cavab3);
    validate=cavab3;
    }
    else{
    alert(cavab4);
    validate=cavab4;
    }
    }
else
alert("o zaman hazır olanda səhifəni 'reload' edin")

document.getElementById("first").innerHTML="Daxil etdiyiniz üçbucaq tərəf qiymətləri:"+a+", "+b+", "+" və "+c+"-dir";

document.getElementById("second").innerHTML="Nəticə olaraq bu üçbucaq:"+ validate;

