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
    img: "https://thumbnailer.mixcloud.com/unsafe/900x900/extaudio/6/7/9/0/98b7-b0ee-4349-85ad-4325d3472168",
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

let clubItems = [
    eestec,
    musical,
    tiyatro,
    ieee,
    estiem,
    dagcilik
];



let e1 = {
    id: c++,
    parent : eestec,
    title: 'Tanışma Toplantısı',
    date: '18/10/2021',
    exp: "Yurt dışına gitmek ister misiniz?",
};

let e2 = {
    id: c++,
    parent : ieee,
    title: 'Hackathon',
    date: '18/12/2021',
    exp: "Yeni fikirler üretip yarışmanın tam zamanı",
};

let e3 = {
    id: c++,
    parent : musical,
    title: 'Tanışma Toplantısı',
    date: '20/10/2021',
    exp: "Company nin bir parçası olmak ister misiniz?",
};

let e4 = {
    id: c++,
    parent : eestec,
    title: 'Python Workshop',
    date: '16/11/2021',
    exp: "Python üzerine yeteneklerimizi geliştirelim",
};

let e5 = {
    id: c++,
    parent : dagcilik,
    title: 'Tanışma Yürüyüşü',
    date: '28/10/2021',
    exp: "Yürümeye hazır mısınız?",
};

let e6 = {
    id: c++,
    parent : estiem,
    title: 'Tanışma Toplantısı',
    date: '18/10/2021',
    exp: "EESTEC no 1",
};

let events = [e1,e2,e3,e4,e5,e6];




export {clubItems, events};