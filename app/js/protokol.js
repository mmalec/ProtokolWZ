

var protokol = {
    id: '1',
    data_utworzenia: '',
    data_wystawienia: '',
    nr_dokumentu: '',
    miejscowosc: '',
    tytul: '',
    dane: {
        informacje_podstawowe:{
            nazwa: 'Informacje podstawowe',
            komunikat:'Informacje podstawowe',
            aktywny: true,
            valid:false,
            szablon_edycji: 'partials/protokolTpls/informacje_podstawowe.html'},
        podstawa_prawna:{
            nazwa: 'Podstawa prawna',
            komunikat: "Podstawa prawna. (Wybrać właściwe podstawy)",
            aktywny: false,
            valid:false,
            szablon_edycji: 'partials/protokolTpls/podstawa_prawna.html',
            przepisy: [
                {nazwa: "Art.23.1. Ustawy z dnia 24 sierpnia 1991 roku o Państwowej Straży Pożarnej (Dz.U. z 2009 roku Nr 12,poz.68 ze zmianami) oraz", wybrany: false, wymagany: true,
                    paragrafy: [
                        {nazwa: 'Art. 23. ust. 2 pkt 1', wybrany: false, wymagany: false},
                        {nazwa: 'Art. 23. ust. 2 pkt 2', wybrany: false, wymagany: false},
                        {nazwa: 'Art. 23. ust. 2 pkt 3', wybrany: false, wymagany: false},
                        {nazwa: 'Art. 23. ust. 2 pkt 4', wybrany: false, wymagany: false},
                        {nazwa: 'Art. 23. ust. 2 pkt 5', wybrany: false, wymagany: false},
                        {nazwa: 'Art. 23. ust. 2 pkt 6', wybrany: false, wymagany: false},
                        {nazwa: 'Art. 23. ust. 2 pkt 7', wybrany: false, wymagany: false}
                    ]},
                {nazwa: "Ustawa z dnia 27 kwietnia 2001 roku Prawo ochrony środowiska(Dz. U. z 2008 roku Nr 25, poz. 150 ze zmianami)", wybrany: false, wymagany: true,
                    paragrafy: [
                        {nazwa: 'Art. 269', wybrany: false, wymagany: false},
                    ]
                },
                {nazwa: "§2. ust.1 rozporządzenia Ministra Spraw Wewnętrznych i Administracji z dnia 24 października 2005 r. w sprawie czynności kontrolno-rozpoznawczych przeprowadzanych przez Państwową Straż Pożarną (Dz. U. Nr 225, poz. 1934)", wybrany: false, wymagany: true,
                    
                }
            ]},
        rodzaj_kontroli:{
            nazwa: 'Rodzaj kontroli',
            komunikat:'Rodzaj kontroli (wybrać właściwą)',
            aktywny: false,
            valid:false,
            szablon_edycji: 'partials/protokolTpls/rodzaj_kontroli.html',
            rodzaje_kontroli:[
                {nazwa:'podstawowa', wybrany:false, wymagany:true},
                {nazwa:'problemowa', wybrany:false, wymagany:true},
                {nazwa:'doraźna', wybrany:false, wymagany:true},
                {nazwa:'sprawdzająca', wybrany:false, wymagany:true},
                {nazwa:'odbiór', wybrany:false, wymagany:true},
                
            ]},
        kontrolujacy:{nazwa: "Kontrolujący",
            aktywny: false,
            szablon_edycji: 'szablony/protokol/lista_kontrolujacych.html',
            lista_kontrolujacych:[],
            valid:false
        },
        kontrolowani:{nazwa: "Kontrolowani",
            type:'kontrolujacy',
            aktywny: false,
            szablon_edycji: 'szablony/protokol/lista_kontrolowanych.html',
            lista_kontrolowanych:[],
            valid:false,
            dane:{
                wladajacy:{
                    type:'wladajacy',
                    nazwa:'Władający',
                    szablon_edycji:'szablony/protokol/lista_wladajacych.html',
                    lista_wladajacych:[],
                    wymagany:false,
                    aktywny:false,
                    valid:false,
                    
                },
                
                reprezentujacy:{
                    type:'reprezentujacy',
                    nazwa:"Reprezentujący kontrolowanego",
                    szablon_edycji:'szablony/protokol/lista_reprezentujacych_kontrolowanego.html',
                    lista_reprezentujacych:[],
                    wymagany:false,
                    aktywny:false,
                    valid:false,
                },
                adresat_decyzji:{
                    type:'adresat',
                    nazwa:"Adresaci decyzji",
                    szablon_edycji:'szablony/protokol/lista_adresatow_decyzji.html',
                    lista_adresatow_decyzji:[],
                    wymagany:false,
                    aktywny:false,
                    valid:false,
                },
                 inne_osoby:{
                    type:'inne_osoby',
                    nazwa:"Inne osoby",
                    szablon_edycji:'szablony/protokol/lista_innych_osob.html',
                    notatka:'',
                    wymagany:true,
                    aktywny:false,
                    valid:false,
                }
            }
        }


    },
    objekty: [],
};