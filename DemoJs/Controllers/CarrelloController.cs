using System.Collections.Generic;
using System.Net;
using System.Web.Http;
using System.Web.Mvc;

namespace DemoJs.Controllers
{
    public class CarrelloController : ApiController
    {
        //
        // GET: /Default/

        public Prodotto GetProdotto(int codice)
        {
            var prodotti = new Dictionary<int, Prodotto>();
            prodotti.Add(1001, new Prodotto { ean = "1001", descrizione = "SOFFISOF PANN RETT C/BARRI 30P", ditta = "SILC SpA" });


            prodotti.Add(1001, new Prodotto { ean = "1001", descrizione = "SOFFISOF PANN RETT C/BARRI 30P", ditta = "SILC SpA" });
            prodotti.Add(1002, new Prodotto { ean = "1002", descrizione = "RENILON 4.0 ALBICOCCA 6X125ML", ditta = "NUTRICIA ITALIA SpA" });
            prodotti.Add(1003, new Prodotto { ean = "1003", descrizione = "BIAGLUT PANCARRE 250G", ditta = "BIAGLUT (HEINZ ITALIA SpA)" });
            prodotti.Add(1004, new Prodotto { ean = "1004", descrizione = "TENA PANTS DISCREET PANN L10PZ", ditta = "SCA HYGIENE PRODUCTS SpA" });
            prodotti.Add(1005, new Prodotto { ean = "1005", descrizione = "TENA PANTS DISCREET PANN L12PZ", ditta = "SCA HYGIENE PRODUCTS SpA" });
            prodotti.Add(1006, new Prodotto { ean = "1006", descrizione = "COLOPLAST DREN STER MINI 2210", ditta = "COLOPLAST SpA" });
            prodotti.Add(1007, new Prodotto { ean = "1007", descrizione = "BUONAPASTA FARFALLE 500G", ditta = "KI GROUP SpA" });
            prodotti.Add(1008, new Prodotto { ean = "1008", descrizione = "CATETERE NELATON MASC CH10 30P", ditta = "SAFETY SpA" });
            prodotti.Add(1009, new Prodotto { ean = "1009", descrizione = "HOLLI CATET ISTANT D CH14 30PZ", ditta = "HOLLISTER SpA" });
            prodotti.Add(1010, new Prodotto { ean = "1010", descrizione = "ALTERNA MIO MAXI TR RIT 46326", ditta = "COLOPLAST SpA" });
            prodotti.Add(1011, new Prodotto { ean = "1011", descrizione = "ALTERNA SAC SCAR 40MM 30 12834", ditta = "COLOPLAST SpA" });
            prodotti.Add(1012, new Prodotto { ean = "1012", descrizione = "EASIFLEX SET PRO SAC CH TNT 50", ditta = "COLOPLAST SpA" });
            prodotti.Add(1013, new Prodotto { ean = "1013", descrizione = "BD MICROFINE+ LANC G30 200PZ", ditta = "COLOPLAST SpA" });
            prodotti.Add(1014, new Prodotto { ean = "1014", descrizione = "EASIFLEX SET PRO MX CH TNT 50", ditta = "COLOPLAST SpA" });
            prodotti.Add(1015, new Prodotto { ean = "1015", descrizione = "EASIFLEX SET PRO MX CH TR15/50", ditta = "COLOPLAST SpA" });

            if (prodotti.ContainsKey(codice))
                return prodotti[codice];

            throw new HttpResponseException(HttpStatusCode.NotFound);
        }

        public class Prodotto
        {
            public string ean { get; set; }
            public string descrizione { get; set; }
            public string ditta { get; set; }
        }
    }
}
