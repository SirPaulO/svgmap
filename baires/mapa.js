
$('#sarasa').children('svg').children('g').children('path').each(function () {
    $(this).hover(
        function() {
            $( this ).addClass( "hover" );
        }, function() {
            $( this ).removeClass( "hover" );
        }
    );

    $(this).click(function() {
      getData($(this).attr('id'));
    });
});

$('#sarasa').children('svg').children('g#gba').click(function(){
    $('#sarasa').css('display', 'none');
    $('#sapanga').css('display', 'block');
});

$('#sapanga').children('svg').children('g').children('path').each(function () {
    $(this).hover(
        function() {
            $( this ).addClass( "hover" );
        }, function() {
            $( this ).removeClass( "hover" );
        }
    );

    $(this).click(function() {
      getData($(this).attr('id'));
    });
});

$('#sapanga').children('svg').children('g#Boton').click(function(){
    $('#sarasa').css('display', 'block');
    $('#sapanga').css('display', 'none');
});


function showData( localidad ) {

    console.log(localidad);

    $('#entidadTitle').html(localidad.ENTIDAD_TXT);
    $('#entidadBody').html(
        "<p>" + localidad.FUNDACION_TXT + "</p>" +
        "<p>" + localidad.CARGO_TXT + "</p>" +
        "<p>" + localidad.DIRECCION_TXT + "</p>" +
        "<p>" + localidad.LOCALIDAD_TXT + "</p>" +
        "<p>" + localidad.TELEFONOS_TXT + "</p>" +
        "<p>" + localidad.EMAIL_TXT + "</p>" +
        "<p>" + localidad.WEB_TXT + "</p>"
    );

    $('#mostrarInfo').modal('show');
}

function stringToObj(string) {
    var properties = string.split('&');
    var obj = {};
    properties.forEach(function(property) {
        if(property.indexOf('=') > -1) {
            var tup = property.split('=');
            obj[tup[0]] = tup[1];
        }
    });
    return obj;
}

function getData(locid) {
    var id = loc[locid];

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = "&ENTIDAD_TXT=Asociación Médica cnel Brandsen (I)&FUNDACION_TXT=Fundada el 22/11/1972&CARGO_TXT=Presidente: Dra. Vanesa Etcheverry&DIRECCION_TXT=Direccion: Rivadavia 45&TELEFONOS_TXT=Teléfono: 02223-442679 &EMAIL_TXT=amebran@speedy.com.ar&WEB_TXT=&LOCALIDAD_TXT=Brandsen&PARTIDO_NOMBRE_TXT=&done=yes";
            console.log(this.responseText);
            showData(stringToObj(this.responseText));
        }
    };
    xhttp.open("GET", "http://www.femeba.org.ar/mapa/getdata?partido=" + id, true);
    xhttp.send();
}

//MODIFICAR CARLOS CASARES, PILAR, DOLORES, salliquelo, gral-la-madrid, gonzalez-chaves, tres-arroyos, carmen-de-patagones, cnel-rosales y PELLEGRINI

loc = [];

loc['ensenada'] = -1;
loc['la-plata'] = -1;
loc['lezama'] = -1;
loc['trenque-lauquen'] = -1;
loc['tordillo'] = -1;
loc['balcarce'] = -1;
loc['gral-pueyrredon'] = -1;
loc['monte-hermoso'] = -1;
loc['gral-san-martin'] = -1;
loc['_3-febrero'] = -1;
loc['hurlingam'] = -1;
loc['moron'] = -1;
loc['la-matanza'] = -1;
loc['lomas-de-zamora'] = -1;
loc['esteban-echeverria'] = -1;
loc['ezeiza'] = -1;


loc['san-fernando'] = 7;
loc['san-isidro'] = 10;
loc['vicente-lopez'] = 10;
loc['marcos-paz'] = 17;
loc['san-fernando-2'] = 7;


loc['pilar'] = 1;
loc['escobar'] = 2;
//loc['alejandro-korn'] = 3;
loc['san-vicente'] = 3;
loc['moreno'] = 4;
loc['tigre'] = 7;
//loc['villa-de-mayo'] = 8;
loc['malvinas-argentinas'] = 8;
loc['martinez'] = 9;
loc['martinez'] = 10;
loc['j-c-paz'] = 11;
loc['san-miguel'] = 12;
loc['merlo'] = 17;
loc['gral-las-heras'] = 17;
loc['lanus'] = 24;
loc['avellaneda'] = 25;
loc['quilmes'] = 26;
//loc['guernica'] = 27;
loc['pte-peron'] = 27;
//loc['marmol'] = 28;
loc['alte-brown'] = 28;
loc['florencio-varela'] = 29;
loc['berazategui'] = 30;
loc['junin'] = 31;
loc['san-nicolas'] = 32;
loc['san-pedro'] = 33;
loc['ramallo'] = 34;
loc['arrecifes'] = 35;
loc['salto'] = 36;
loc['chacabuco'] = 37;
loc['rojas'] = 38;
loc['baradero'] = 39;
loc['colon'] = 40;
loc['sarmiento'] = 41;
loc['san-antonio-de-areco'] = 42;
loc['gral-arenales'] = 43;
loc['pergamino'] = 44;
//loc['vedia'] = 45;
loc['leandro-n-alem'] = 45;
loc['gral-pinto'] = 46;
loc['florentino-ameghino'] = 47;
loc['los-toldos'] = 48;
loc['gral-viamonte'] = 48;
loc['lincoln'] = 49;
loc['gral-villegas'] = 50;
loc['carlos-tejedor'] = 51;
loc['rivadavia'] = 52;
loc['pehuajo'] = 53;
loc['_9-de-julio'] = 54;
loc['alberti'] = 55;
loc['bragado'] = 56;
loc['pellegrini'] = 57;
loc['tres-lomas'] = 58;
loc['salliquelo'] = 59;
loc['hipolito-yrigoyen'] = 60;
loc['_25-de-mayo'] = 61;
loc['chivilcoy'] = 62;
//loc['carhue'] = 63;
loc['adolfo_alsina'] = 63;
//loc['darregueira'] = 64;
loc['puan'] = 64;
//loc['mayor-buratovich'] = 65;
loc['villarino'] = 65;
loc['carmen-de-patagones'] = 66;
loc['guamini'] = 67;
//loc['pigue'] = 68;
loc['saavedra'] = 68;
loc['cnel-suarez'] = 69;
loc['tornquist'] = 70;
loc['bahia-blanca'] = 71;
loc['cnel-pringles'] = 72;
loc['gral-la-madrid'] = 73;
loc['gonzalez-chaves'] = 74;
loc['tres-arroyos'] = 75;
loc['cnel-dorrego'] = 76;
//loc['punta-alta'] = 77;
loc['cnel-rosales'] = 77;
loc['canuelas'] = 79;
loc['brandsen'] = 80;
loc['magdalena'] = 81;
loc['punta-indio'] = 82;
loc['lujan'] = 83;
loc['navarro'] = 84;
loc['suipacha'] = 85;
loc['mercedes'] = 86;
loc['carmen-de-areco'] = 87;
loc['san-andres-de-giles'] = 88;
loc['zarate'] = 89;
loc['campana'] = 90;
//loc['capilla-del-señor'] = 91;
loc['exaltacion'] = 91;
loc['tandil'] = 92;
loc['azul'] = 93;
loc['olavarria'] = 94;
loc['benito-juarez'] = 95;
loc['laprida'] = 96;
loc['bolivar'] = 97;
loc['tapalque'] = 98;
loc['gral-alvear'] = 99;
loc['saladillo'] = 100;
loc['rauch'] = 101;
loc['las-flores'] = 102;
loc['gral-belgrano'] = 103;
loc['monte-grande'] = 104;
loc['roque-perez'] = 105;
loc['lobos'] = 106;
loc['gral-paz'] = 107;
loc['san-cayetano'] = 108;
loc['necochea'] = 109;
loc['loberia'] = 110;
//loc['miramar'] = 111;
loc['gral-alvarado'] = 111;
//loc['cnel-vidal'] = 112;
loc['mar-chiquita'] = 112;
loc['ayacucho'] = 113;
loc['maipu'] = 114;
loc['gral-madariaga'] = 115;
loc['villa-gesell'] = 116;
loc['pinamar'] = 117;
loc['santa-teresita'] = 118;
//loc['santa-teresita'] = 119;
loc['de-la-costa'] = 119;
loc['gral-lavalle'] = 119;
loc['dolores'] = 121;
loc['gral-guido'] = 122;
loc['castelli'] = 124;
loc['chascomus'] = 126;
loc['carlos-casares'] = 132;
loc['gral-rodriguez'] = 133;
loc['daireaux'] = 134;
loc['berisso'] = 136;