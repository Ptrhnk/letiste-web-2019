// PÁTEK hlavní stage:
// Ešli
// Tony a Hovorka
// Kittchen
// DEADBEATZ
// Citty
// PÁTEK vedlejší stage:
// Aid Kid
// Jeffology
// Imateva
// METRO Family

// sobota hlavni
// DivoDej
// V2SDG (film+diskuze)
// NGO (Prales dětem)
// Frederico
// Humdrum Lighthouse
// Runway session (jam)
// Prago Union
// Lebanon + Diesel Diesel Max
// SOBOTA vedlejší stage:
// uchoff
// sabrehart
// Ringo Slyng
// Petr Hanak
// Andrea Dare
// ÉTER Kolektiv

// Covers
import Esli from "../img/artists/patek/Ashley002-low.png";
import TonyJen from "../img/artists/patek/TonyJenPR-low.png";
// import Kittchen from "../img/artists/patek/Kittchen-low.png";
import DeadBeatz from "../img/artists/patek/DeadBeatzv003-low.png";
import Citty from "../img/artists/patek/citty-low.png";

import AidKid from "../img/artists/patek/aidkidv001-low.png";
// import Jeffology from "../img/artists/patek/jeffology-low.png";
// import Imateva from "../img/artists/patek/imateva-low.png";
// import MetroFamily from "../img/artists/patek/MetroFamily-low.png";

// DivoDej
// V2SDG (film+diskuze)
// NGO (Prales dětem)
import Frederico from "../img/artists/sobota/frederico-low.png";
import Humdrum from "../img/artists/sobota/humdrumlighthouse-low.png";
// Runway session (jam)
import PragoUnion from "../img/artists/sobota/pragounion-low.png";
import Lebanon from "../img/artists/sobota/lebanon-low.png";

// uchoff
import Sabrehart from "../img/artists/sobota/Sabrehart-low.png";
// Ringo Slyng
import PetrHa from "../img/artists/sobota/petrHa-low.png";
// Andrea Dare
// ÉTER Kolektiv

// -------------------- ARTISTS --------------------
const artists = {
  friday: [
    {
      id: 10,
      name: "Ešli",
      image: Esli,
      links: [
        "https://www.facebook.com/hashesman/",
        "https://www.instagram.com/hashesman/"
      ]
    },
    {
      id: 11,
      name: "Tony a Hovorka",
      image: TonyJen
    },
    {
      id: 12,
      name: "Kittchen",
      text:
        "Kuchyňský industriál mixnutý s postapo folkem. To je tajemný hrající anonym KITTCHEN, který vznikl v roce 2011 jako jednočlenný anonymní hudební projekt. Se svou druhou upečenou deskou RADIO vyhrál v roce 2013 Ceny Anděl. Na Letiště Karnevalu uvaří v pátek večer před půlnocí.",
      website: "http://www.kucharkittchen.cz",
      links: [
        "https://www.facebook.com/kittchen33/",
        "https://soundcloud.com/kittchen",
        "https://www.instagram.com/kittchen33/"
      ]
      // image: Kittchen
    },
    {
      id: 13,
      name: "DEADBEATZ",
      image: DeadBeatz,
      links: [
        "https://www.facebook.com/deadbeatzmusic/",
        "https://www.youtube.com/channel/UC97Ni03vr-zW7UDVgqQuh4w"
      ]
    },
    {
      id: 14,
      name: "Citty",
      image: Citty,
      links: ["https://www.facebook.com/cittymodular/"]
    },
    {
      id: 15,
      name: "Aid Kid",
      text:
        "Ondra Mikula aka Aid Kid staví své živé sety na improvizaci vlastních tracků, na kombinaci emotivních beatů a gradujících struktur. Hraje živě, vystupuje jako DJ, věnuje se scénické hudbě, skládá spoty, znělky, hudbu pro videomapping a interaktivní instalace. ",
      image: AidKid,
      links: ["https://www.facebook.com/aidkid/"]
    },
    {
      id: 15,
      name: "DJ Jeffology",
      // image: Jeffology,
      text:
        "Diagnostikovaný sběratel vinylů a hledač na poli hudebním nehledě na žánry. Člen kapely Champion Sound která stála po boku Prago Union celých šest let přičemž stihla doprovázet většinu domácí hip hopové scény a také umělce ze zahraníčí.",
      // image: Jeffology,
      links: ["https://soundcloud.com/jeffology"]
    },
    {
      id: 16,
      name: "Imateva"
      // image: Imateva
    },
    {
      id: 17,
      name: "METRO Family"
      // image: MetroFamily
    }
  ],
  saturday: [
    {
      id: 50,
      name: "DivoDej",
      text:
        "DivoDej je projekt, za kterým stojí dvě ženy, které se vydaly na cestu za poznávaním dramaterapie. Skrze vlastní zkušenost pociťují léčivé rozměry, které dramaterapeutické techniky nabízí. Proto se rozhodli šírit tento prožitek dále.",
      links: ["https://www.facebook.com/DivoDejom/"]
    },
    {
      id: 51,
      name: "V4SDG"
    },
    {
      id: 52,
      name: "NGO"
    },
    {
      id: 53,
      name: "Frederico DeVittor",
      image: Frederico,
      text:
        "Jak říká zpěvačka Sisa Feherová: ”Když Federico hraje, andělíčci zpívají.”",
      // image: Viktor_Lesque,
      links: [
        "https://open.spotify.com/artist/4yQpQQndwMOWt6pXvXzATg?si=e5SpR4v5T8OPshUpUuba8w",
        "https://www.facebook.com/Victorlesque/",
        "https://soundcloud.com/user-412342058"
      ]
    },
    {
      id: 54,
      name: "Humdrum Lighthouse",
      text: "",
      image: Humdrum,
      links: ["https://www.facebook.com/humdrumlighthouse/"]
    },
    {
      id: 55,
      name: "Runway session (jam)",
      text: ""
      // image: jam,
    },
    {
      id: 56,
      name: "Prago Union",
      text:
        "Nehrajou je rádia a na trpitele to neuhrají – dramaturgové je nebojkotují, tyhle dva světy se prostě jen naprosto míjí. Jejich muzika tam nepatří, má tak daleko k “populární”, jak to jen jde. Nemají hit a pozor: nemají ani pořádný skandál. Jsou dřevní, jsou zemitý, páchnou člověčinou a fanoušky maj skalní. Na těch Prago Union musí něco bejt. Přijďte se na ně podívat.",
      image: PragoUnion,
      website: "http://www.pragounion.cz/",
      links: ["https://www.facebook.com/pragounion/"]
    },
    {
      id: 57,
      name: "Lebanon + Diesel Diesel Max",
      text: "",
      image: Lebanon
      // image: jam,
    },
    {
      id: 58,
      name: "uchoff",
      text: ""
      // image: jam,
    },
    {
      id: 59,
      name: "sabrehart",
      text: "",
      image: Sabrehart
    },
    {
      id: 60,
      name: "Ringo Slyng",
      text: ""
    },
    {
      id: 61,
      name: "petr.ha",
      text:
        "Petr Hanák působí jako bubeník a hudební producent hned v několika autorských projektech. Na koncertních pódiích ho můžete spatřit např. s elektro-akustickým seskupením Fallgrapp se kterými nyní spolupracuje na chystaném albu, které bude vycházet konci tohoto roku. Jeho tvorbu můžete slyšet mimo jiné třeba na posledním albu Katarzie s názvem Antigona. Společně se slovenským producentem Pjonim Katarzii letos doprovází v audio-vizuální show na turné k poslední desce.",
      image: PetrHa
    },
    {
      id: 62,
      name: "Andrea Dare",
      text: ""
    },
    {
      id: 63,
      name: "ÉTER Kolektiv",
      text: ""
    },
    {
      id: 3,
      name: "Miltz",
      text:
        "Členka brněnského ÉTERu s přesahem i za hranici své domoviny. Tato čarodějnice svou hudbou a rituály zpomaluje tok času. Uleťte si s námi do jiného prostoru. Jane zahraje nad legendárním nedělním ránem. Na samotném vrcholu letošního karnevalu."
    },
    {
      id: 4,
      name: "Prozac",
      text:
        "Kdo zná Brno, zná i Bastl Instruments. A právě z tohoto kolektivu k nám zavítá modulárový mág PROZAC a představí znovuobjevený styl EBM s prvky chytlavého acidu. Na závěr akce bude liveshow na modulární syntezátor! Odpálí tím nedělní ÉTER afterparty ve stanu."
    }
  ]
};

// sabrehart
// Ringo Slyng
// Petr Hanak
// Andrea Dare
// ÉTER Kolektiv

export default artists;
