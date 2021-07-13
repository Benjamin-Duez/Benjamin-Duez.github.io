const calendar= document.querySelector("#app-calendar");
const View = document.querySelector("#View");
var date_actuel = new Date();
var tab;
var date;
var etat= "mois";

function lastday(y,m){
return  new Date(y, m+1, 0).getDate();
}

function prec(){
    switch(etat){
        case "mois":date.setMonth(date.getMonth()-1);break;
        case "semaine":
            if(date.getDate() < 7){
                var temp=7-date.getDate();
                date.setMonth(date.getMonth()-1);
                date.setDate(lastday(date.getYear(),date.getMonth())-temp);
            }
            else {
                var temp;
                if(date.getDay()==0)temp=6;
                else temp=7+(date.getDay()-1);
                date.setDate(date.getDate()-temp);
            }
            break;
        case "jour":date.setDate(date.getDate()-1);break;
    }
    charger();
}

function suiv(){
    switch(etat){
        case "mois":date.setMonth(date.getMonth()+1);break;
        case "semaine":
            if(lastday(date.getYear(),date.getMonth()) - date.getDate() < 7 ){
                var temp=7-(lastday(date.getYear(),date.getMonth())-date.getDate());
                date.setMonth(date.getMonth()+1);
                date.setDate(temp)
            }
            else {
                var temp;
                if(date.getDay()==0)temp=1;
                else temp=7-(date.getDay()-1);
                date.setDate(date.getDate()+temp);
            }
            break;
        case "jour":date.setDate(date.getDate()+1);break;
    }
    charger();
}

function today(){
    date=new Date();
    charger();
}

function mois(){
    etat= "mois";
    charger();
}

function semaine(){
    etat= "semaine";
    charger();
}

function jour(){
    etat= "jour";
    charger();
}

function isToday(d){
    var b1=d.getDate()==date_actuel.getDate();
    var b2=d.getMonth()==date_actuel.getMonth();
    var b3=d.getYear()==date_actuel.getYear();
    return b1&&b2&&b3;
}

function toggleToday(){
    var today= document.querySelector("#today");
    switch(etat){
        case "mois":
            if(date.getMonth()==date_actuel.getMonth() && date.getFullYear() == date_actuel.getFullYear()){
                today.disabled=true;
            }
            else{
                today.disabled=false;
            }
            break;
        case "semaine":
            var b=false;
            for (let j=0; j<7; j++){
                if(isToday(tab[j])){b=true;}
            }
            today.disabled=b;
            break;
        case "jour":
            if(isToday(date)){
                today.disabled=true;
            }
            else{
                today.disabled=false;
            }
    }
}

function toggleButton(s){
    var b= document.querySelector(`#${s}`);
    if(etat==s){
        b.disabled=true;
    }
    else{
        b.disabled=false;
    }   
}

function affiche(){
    View.innerHTML="";
    switch(etat){
        case "mois":
            switch (date.getMonth()){
                case 0: View.insertAdjacentHTML("beforeend", `Janvier ${date.getFullYear()}`);break;
                case 1: View.insertAdjacentHTML("beforeend", `Février ${date.getFullYear()}`);break;
                case 2: View.insertAdjacentHTML("beforeend", `Mars ${date.getFullYear()}`);break;
                case 3: View.insertAdjacentHTML("beforeend", `Avril ${date.getFullYear()}`);break;
                case 4: View.insertAdjacentHTML("beforeend", `Mai ${date.getFullYear()}`);break;
                case 5: View.insertAdjacentHTML("beforeend", `Juin ${date.getFullYear()}`);break;
                case 6: View.insertAdjacentHTML("beforeend", `Juillet ${date.getFullYear()}`);break;
                case 7: View.insertAdjacentHTML("beforeend", `Août ${date.getFullYear()}`);break;
                case 8: View.insertAdjacentHTML("beforeend", `Septembre ${date.getFullYear()}`);break;
                case 9: View.insertAdjacentHTML("beforeend", `Octobre ${date.getFullYear()}`);break;
                case 10: View.insertAdjacentHTML("beforeend", `Novembre ${date.getFullYear()}`);break;
                case 11: View.insertAdjacentHTML("beforeend", `Décembre ${date.getFullYear()}`);break;
            default: View.insertAdjacentHTML("beforeend", `Error`);break;
            }
            break;
        case "semaine":
            if(tab[0].getMonth()==tab[6].getMonth()){
                switch (tab[0].getMonth()){
                    case 0: View.insertAdjacentHTML("beforeend", `${tab[0].getDate()}-${tab[6].getDate()} Janvier ${date.getFullYear()}`);break;
                    case 1: View.insertAdjacentHTML("beforeend", `${tab[0].getDate()}-${tab[6].getDate()} Février ${date.getFullYear()}`);break;
                    case 2: View.insertAdjacentHTML("beforeend", `${tab[0].getDate()}-${tab[6].getDate()} Mars ${date.getFullYear()}`);break;
                    case 3: View.insertAdjacentHTML("beforeend", `${tab[0].getDate()}-${tab[6].getDate()} Avril ${date.getFullYear()}`);break;
                    case 4: View.insertAdjacentHTML("beforeend", `${tab[0].getDate()}-${tab[6].getDate()} Mai ${date.getFullYear()}`);break;
                    case 5: View.insertAdjacentHTML("beforeend", `${tab[0].getDate()}-${tab[6].getDate()} Juin ${date.getFullYear()}`);break;
                    case 6: View.insertAdjacentHTML("beforeend", `${tab[0].getDate()}-${tab[6].getDate()} Juillet ${date.getFullYear()}`);break;
                    case 7: View.insertAdjacentHTML("beforeend", `${tab[0].getDate()}-${tab[6].getDate()} Août ${date.getFullYear()}`);break;
                    case 8: View.insertAdjacentHTML("beforeend", `${tab[0].getDate()}-${tab[6].getDate()} Septembre ${date.getFullYear()}`);break;
                    case 9: View.insertAdjacentHTML("beforeend", `${tab[0].getDate()}-${tab[6].getDate()} Octobre ${date.getFullYear()}`);break;
                    case 10: View.insertAdjacentHTML("beforeend", `${tab[0].getDate()}-${tab[6].getDate()} Novembre ${date.getFullYear()}`);break;
                    case 11: View.insertAdjacentHTML("beforeend", `${tab[0].getDate()}-${tab[6].getDate()} Décembre ${date.getFullYear()}`);break;
                default: View.insertAdjacentHTML("beforeend", `Error`);break;
                }
            }
            else{
                switch (tab[6].getMonth()){
                    case 0: View.insertAdjacentHTML("beforeend", `${tab[0].getDate()} Décembre - ${tab[6].getDate()} Janvier ${date.getFullYear()}`);break;
                    case 1: View.insertAdjacentHTML("beforeend", `${tab[0].getDate()} Janvier - ${tab[6].getDate()} Février ${date.getFullYear()}`);break;
                    case 2: View.insertAdjacentHTML("beforeend", `${tab[0].getDate()} Février - ${tab[6].getDate()} Mars ${date.getFullYear()}`);break;
                    case 3: View.insertAdjacentHTML("beforeend", `${tab[0].getDate()} Mars - ${tab[6].getDate()} Avril ${date.getFullYear()}`);break;
                    case 4: View.insertAdjacentHTML("beforeend", `${tab[0].getDate()} Avril - ${tab[6].getDate()} Mai ${date.getFullYear()}`);break;
                    case 5: View.insertAdjacentHTML("beforeend", `${tab[0].getDate()} Mai - ${tab[6].getDate()} Juin ${date.getFullYear()}`);break;
                    case 6: View.insertAdjacentHTML("beforeend", `${tab[0].getDate()} Juin - ${tab[6].getDate()} Juillet ${date.getFullYear()}`);break;
                    case 7: View.insertAdjacentHTML("beforeend", `${tab[0].getDate()} Juillet - ${tab[6].getDate()} Août ${date.getFullYear()}`);break;
                    case 8: View.insertAdjacentHTML("beforeend", `${tab[0].getDate()} Août - ${tab[6].getDate()} Septembre ${date.getFullYear()}`);break;
                    case 9: View.insertAdjacentHTML("beforeend", `${tab[0].getDate()} Septembre - ${tab[6].getDate()} Octobre ${date.getFullYear()}`);break;
                    case 10: View.insertAdjacentHTML("beforeend", `${tab[0].getDate()} Octobre - ${tab[6].getDate()} Novembre ${date.getFullYear()}`);break;
                    case 11: View.insertAdjacentHTML("beforeend", `${tab[0].getDate()} Novembre - ${tab[6].getDate()} Décembre ${date.getFullYear()}`);break;
                default: View.insertAdjacentHTML("beforeend", `Error`);break;
                }
            }
            break;
        case "jour":
            switch (date.getMonth()){
                case 0: View.insertAdjacentHTML("beforeend", `${date.getDate()} Janvier ${date.getFullYear()}`);break;
                case 1: View.insertAdjacentHTML("beforeend", `${date.getDate()} Février ${date.getFullYear()}`);break;
                case 2: View.insertAdjacentHTML("beforeend", `${date.getDate()} Mars ${date.getFullYear()}`);break;
                case 3: View.insertAdjacentHTML("beforeend", `${date.getDate()} Avril ${date.getFullYear()}`);break;
                case 4: View.insertAdjacentHTML("beforeend", `${date.getDate()} Mai ${date.getFullYear()}`);break;
                case 5: View.insertAdjacentHTML("beforeend", `${date.getDate()} Juin ${date.getFullYear()}`);break;
                case 6: View.insertAdjacentHTML("beforeend", `${date.getDate()} Juillet ${date.getFullYear()}`);break;
                case 7: View.insertAdjacentHTML("beforeend", `${date.getDate()} Août ${date.getFullYear()}`);break;
                case 8: View.insertAdjacentHTML("beforeend", `${date.getDate()} Septembre ${date.getFullYear()}`);break;
                case 9: View.insertAdjacentHTML("beforeend", `${date.getDate()} Octobre ${date.getFullYear()}`);break;
                case 10: View.insertAdjacentHTML("beforeend", `${date.getDate()} Novembre ${date.getFullYear()}`);break;
                case 11: View.insertAdjacentHTML("beforeend", `${date.getDate()} Décembre ${date.getFullYear()}`);break;
            default: View.insertAdjacentHTML("beforeend", `Error`);break;
            }
            break;
    }
}

function chargerNomJour(div){
    div.insertAdjacentHTML("beforeend",`
        <div class="day name">Lundi</div>
        <div class="day name">Mardi</div>
        <div class="day name">Mercredi</div>
        <div class="day name">Jeudi</div>
        <div class="day name">Vendredi</div>
        <div class="day name">Samedi</div>
        <div class="day name">Dimanche</div>`);
}

function charger(){
    tab = new Array();
    calendar.innerHTML="";
    switch (etat){
        case "mois":chargerMois();break;
        case "semaine":chargerSemaine();break;
        case "jour":chargerJour();break;
    }
    affiche();
    toggleButton("mois");
    toggleButton("semaine");
    toggleButton("jour");
    toggleToday();
}

function chargerMois(){
    date.setDate(1);
    var d= new Date(date);
    if(d.getDay()>1 || d.getDay()==0){
        var temp=d.getDay();
        if(temp==0)temp=7;
        d.setDate(d.getDate()-(temp-1));
    }
    calendar.insertAdjacentHTML("beforeend", `<div id="month"></div>`);
    var month=document.querySelector("#month");
    chargerNomJour(month);
    for (var i=0; i< 42 ; i++){
        var temp= new Date(d);
        tab[i]=temp;
        var b1=tab[i].getMonth()==date.getMonth();
        month.insertAdjacentHTML("beforeend",`<div class="day ${b1 ? "" : "notmonth"}${isToday(tab[i]) ? "today" : ""}"><div class="number"> ${tab[i].getDate()}</div></div>`);
        d.setDate(d.getDate()+1);
    }
}

function chargerSemaine(){
    calendar.insertAdjacentHTML("beforeend", `<div id="week"></div>`);
    var semaine=document.querySelector("#week");
    semaine.insertAdjacentHTML("beforeend",`<div class="day"></div>`);
    semaine.addEventListener('click', event => {
      semaine.innerHTML = semaine.innerHTML + `Nombre de clics : ${event.detail}`;
    });
    chargerNomJour(semaine);
    for(let i=0;i<24;i++){
        semaine.insertAdjacentHTML("beforeend",`<div class="hour">${i.toFixed(2)}h</div>`);
        var d= new Date(date);
        if(d.getDay()>1 || d.getDay()==0){
            var temp=d.getDay();
            if(temp==0)temp=7;
            d.setDate(d.getDate()-(temp-1));
        }
        for(let k=0;k<7;k++){
            var temp= new Date(d);
            tab[k]=temp;
            tab[k].setHours(i);tab[k].setMinutes(0);tab[k].setSeconds(0);
            semaine.insertAdjacentHTML("beforeend", `<div class="day ${isToday(tab[k]) ? "today" : ""}" id:"${tab[k]}"></div>`);
            
            d.setDate(d.getDate()+1);
        }
    }
}

function chargerJour(){
    calendar.insertAdjacentHTML("beforeend", `<div id="day"></div>`);
    var jour=document.querySelector("#day");
    jour.insertAdjacentHTML("beforeend",`<div class="day"></div>`);
    switch(date.getDay()){
        case 1:jour.insertAdjacentHTML("beforeend",`<div class="day name">Lundi</div>`);break;
        case 2:jour.insertAdjacentHTML("beforeend",`<div class="day name">Mardi</div>`);break;
        case 3:jour.insertAdjacentHTML("beforeend",`<div class="day name">Mercredi</div>`);break;
        case 4:jour.insertAdjacentHTML("beforeend",`<div class="day name">Jeudi</div>`);break;
        case 5:jour.insertAdjacentHTML("beforeend",`<div class="day name">Vendredi</div>`);break;
        case 6:jour.insertAdjacentHTML("beforeend",`<div class="day name">Samedi</div>`);break;
        case 0:jour.insertAdjacentHTML("beforeend",`<div class="day name">Dimanche</div>`);break;  
    }
    date.setHours(0);date.setMinutes(0);date.setSeconds(0);
    var d= new Date(date);
    for(let i=0;i<24;i++){
        var temp= new Date(d);
        tab[i]=temp;
        jour.insertAdjacentHTML("beforeend",`<div class="hour">${i.toFixed(2)}h</div><div class="day ${isToday(date) ? "today" : ""}"></div>`);
        d.setHours(i);
    }
}

today();