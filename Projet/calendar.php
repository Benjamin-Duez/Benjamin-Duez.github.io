<link rel="stylesheet" href="calendar.css" media="screen" type="text/css" />
<script type="text/javascript" src="calendar.js" defer></script>
<div id="calendar">
    <div class="center" id="View"></div>
    <div class="button-group">
        <button type="button" class ="left" id="prec" onclick="prec()"><span><</span></button>
        <button type="button" class ="left" id="suiv" onclick="suiv()"><span>></span></button>
        <button type="button" class ="left" id="today" onclick="today()">Aujourd'hui</button>
        
        <button type="button" class ="right" id="mois" onclick="mois()">Mois</button>
        <button type="button" class ="right" id="semaine" onclick="semaine()">Semaine</button>
        <button type="button" class ="right" id="jour" onclick="jour()">Jour</button>
    </div>
    <br/><br/>
    <div id="app-calendar"></div>
</div>
