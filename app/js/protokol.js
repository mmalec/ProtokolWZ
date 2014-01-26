/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var objekt = {
            id: "1",
            nazwa:''
        };
        
var przepis = {
    nazwa:'',
    czy_wybrany:''
    
}

var rozdzial={
    nazwa:'',
    nazwa_krotka:'',
    podrozdzialy:[]
}




        
 var protokul={
     id:'1',
     data_utworzenia:'',
     data_wystawienia:'',
     nr_dokumentu:'',
     miejscowosc:'',
     tytul:'',
     przepisy:[
         {nazwa:"aartykul pierwszy", czy_wybrany:''},
         {nazwa:"artykuł drugi", czy_wybrany:''}
     ],
     rozdzialy:[],
     objekty:[],
     rodzaje_kontroli:[],
     kontrolujacy:[],
     kontrolowani:[]
         };