import eestecImg from "./images/eestec.jpg";

let count = 1;
let c = 1;



let eestec = {
    id: count++,
    img: eestecImg,
    title: "EESTEC",
    explain: "Dolor amet ipsum toler yow ye jov je mükemmel klüp sonsuz tavsiye kesinlikle katılın bize katılın backend eklemek gerekiyor hız hız gerek bize dostum",
    mission: "Başkan",
    year: "2",
    shortexp: "Bir yıl başkanlık ve bir yıl koordinatörlük yaptım. Gerçekten güzel zaman geçirdim, güzel arkadaşlar edindim ve organizasyon konusunda da gelişrim :)",
    events: [],
};

let musical = {
    id: count++,
    img: "",
    title: "Muzikal",
    explain: "Dolor amet ipsum toler yow ye jov je mükemmel klüp sonsuz tavsiye kesinlikle katılın bize katılın backend eklemek gerekiyor hız hız gerek bize dostum",
    mission: "Üye",
    year: "2",
    shortexp: "Uzun süre bu klüpte güzel işler yaptık arkadaşlarımla çok güzel vakit geçirdik ve kendimizi de geliştirdik.",
    events: [],
};

let tiyatro = {
    id: count++,
    img: "https://yt3.ggpht.com/a/AATXAJywRR_wKObHT_UGif3xMG4p8ZYrPfRp4hHcxMCa=s900-c-k-c0xffffffff-no-rj-mo",
    title: "Tiyatro",
    explain: "Dolor amet ipsum toler yow ye jov je mükemmel klüp sonsuz tavsiye kesinlikle katılın bize katılın backend eklemek gerekiyor hız hız gerek bize dostum",
    mission: "Üye",
    year: "2",
    shortexp: "Uzun süre bu klüpte güzel işler yaptık arkadaşlarımla çok güzel vakit geçirdik ve kendimizi de geliştirdik.",
    events: [],
};

let ieee = {
    id: count++,
    img: "https://cdn.imza.com/indirv2/img/istanbul-universitesi-kariyer-zirvesi-1552045457.jpg",
    title: "IEEE",
    explain: "Dolor amet ipsum toler yow ye jov je mükemmel klüp sonsuz tavsiye kesinlikle katılın bize katılın backend eklemek gerekiyor hız hız gerek bize dostum",
    mission: "Üye",
    year: "2",
    shortexp: "Uzun süre bu klüpte güzel işler yaptık arkadaşlarımla çok güzel vakit geçirdik ve kendimizi de geliştirdik.",
    events: [],
};

let estiem = {
    id: count++,
    img: "https://yt3.ggpht.com/a/AATXAJz0QerrpCcX-g9xn7WfXxxBp04XIPhf85C1LA=s900-c-k-c0xffffffff-no-rj-mo",
    title: "ESTIEM",
    explain: "Dolor amet ipsum toler yow ye jov je mükemmel klüp sonsuz tavsiye kesinlikle katılın bize katılın backend eklemek gerekiyor hız hız gerek bize dostum",
    mission: "Üye",
    year: "2",
    shortexp: "Uzun süre bu klüpte güzel işler yaptık arkadaşlarımla çok güzel vakit geçirdik ve kendimizi de geliştirdik.",
    events: [],
};

let dagcilik = {
    id: count++,
    img: "https://im0-tub-com.yandex.net/i?id=3e7c433adc4c4d82e58f5e4f5bd387e0&n=13",
    title: "Dagcilik",
    explain: "Dolor amet ipsum toler yow ye jov je mükemmel klüp sonsuz tavsiye kesinlikle katılın bize katılın backend eklemek gerekiyor hız hız gerek bize dostum",
    mission: "Üye",
    year: "2",
    shortexp: "Uzun süre bu klüpte güzel işler yaptık arkadaşlarımla çok güzel vakit geçirdik ve kendimizi de geliştirdik.",
    events: [],
};




let e1 = {
    id: c++,
    parent : eestec,
    img: "https://educationusarussia.org/wp-content/uploads/2017/10/Kruglyj-stol-900x900.jpg",
    title: 'Tanışma Toplantısı',
    date: '18/10/2021',
    exp: "Yurt dışına gitmek ister misiniz?",
};

let e2 = {
    id: c++,
    parent : ieee,
    img: "https://yt3.ggpht.com/a/AATXAJyTO6sIk_Dd_6KC207qib9UJd-GchD1FI09n2ss=s900-c-k-c0xffffffff-no-rj-mo",
    title: 'Hackathon',
    date: '18/12/2021',
    exp: "Yeni fikirler üretip yarışmanın tam zamanı",
};

let e3 = {
    id: c++,
    parent : musical,
    img: "https://yt3.ggpht.com/a/AGF-l7-lMzuPBTk0fmPqFyb0DTsCf03C1ALmC0Vdgg=s900-c-k-c0xffffffff-no-rj-mo",
    title: 'Tanışma Toplantısı',
    date: '20/10/2021',
    exp: "Company nin bir parçası olmak ister misiniz?",
};

let e4 = {
    id: c++,
    parent : eestec,
    img: "https://yt3.ggpht.com/a/AATXAJxTBv1lPEvTs1xzk0Beha_5Avbt1OISmMTAgFb7ag=s900-c-k-c0x00ffffff-no-rj",
    title: 'Python Workshop',
    date: '16/11/2021',
    exp: "Python üzerine yeteneklerimizi geliştirelim",
};

let e5 = {
    id: c++,
    parent : dagcilik,
    img: "https://yt3.ggpht.com/a/AGF-l7_8T6aMgkZp_-6_K1M0af6lh-LcvdQmDgsU5w=s900-c-k-c0xffffffff-no-rj-mo",
    title: 'Tanışma Yürüyüşü',
    date: '28/10/2021',
    exp: "Yürümeye hazır mısınız?",
};

let e6 = {
    id: c++,
    parent : estiem,
    img: "http://demo.lunartheme.com/lincoln/wp-content/uploads/2015/08/iStock_000044886808_Full-900x900.jpg",
    title: 'Tanışma Toplantısı',
    date: '18/10/2021',
    exp: "EESTEC no 1",
};

let events = [e1,e2,e3,e4,e5,e6];

let clubItems = [
    eestec,
    musical,
    tiyatro,
    ieee,
    estiem,
    dagcilik
];



export {clubItems, events};
