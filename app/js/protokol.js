

var protokul = {
    id: '1',
    data_utworzenia: '',
    data_wystawienia: '',
    nr_dokumentu: '',
    miejscowosc: '',
    tytul: '',
    dane: [
        {
            nazwa: 'Informacje podstawowe',
            aktywny: true,
            szablon_edycji: 'partials/protokolTpls/informacje_podstawowe.html'},
        {
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
        {nazwa: "Kontrolujący",
            aktywny: false,
            szablon_edycji: 'partials/protokolTpls/kontrolujacy.html'},
        {nazwa: "Kontrolowani",
            aktywny: false,
            szablon_edycji: 'partials/protokolTpls/kontrolujacy.html'}


    ],
    objekty: [],
};