import { Question, Answer } from './question';

export const QUESTIONS: Question[] = [{
		person: "Ojciec Rydzyk",
		pysk:"Ojciec_Rydzyk.jpg",
		post: "Ludzie pokazują palcami, jakim ja samochodem jeżdżę. Że Mercedesem klasy S. A niby czym mam jeździć? Na krowie mam jeździć? Głupoty takie gadają... mogę na krowie, ale gdzie ja bym tę krowę trzymał w Radiu Maryja?",
		source: "",
		answers: [{
				correct: false,
				text: "Jeżdżenie na krowie jest OK.",
				reply: "Nie no, serio..?!"
			},
			{
				correct: false,
				text: "Nie da się jeździć na krowie.",
				reply: "no co ty, patrz! (TU BĘDZIE OBRAZEK)"
			},
			{
				correct: true,
				text: "Mercedes i krowa to nie są jedyne opcje.",
				reply: "Słuszna obserwacja!"
			},
			{
				correct: false,
				text: "Krowa się spokojnie spokojnie zmieści w Radiu Maryja.",
				reply: "I co z tego?"
			},
			{
				correct: true,
				text: "O. Rydzyk udaje że jego krytykom chodzi o to, że ma nie jeździć samochodem, a nie że ma nie jeździć bardzo drogim samochodem.",
				reply: "Zdecydowanie!"
			}
		],
		video: "https://www.youtube.com/embed/4cqFp_lvb0o"
	},
	{
		person: "Wujek Staszek",
		pysk: "Wujek_Staszek.jpg",
		post: "Kiedy wyszło na jaw, że w Polsce były tajne więzienia w których CIA torturowało więźniów pojmanych w Iraku, Leszek Miller bronił swojej decyzji mówiąc: “Albo jesteśmy po stronie ofiar, albo morderców.”",
		source: "",
		answers: [{
				correct: true,
				text: "W więzieniu są nie tylko mordercy.",
				reply: "Prawda prawda."
			},
			{
				correct: true,
				text: "On ściemnia, że jak ktoś jest przeciwko torturom to jest po stronie morderców.",
				reply: "Masz absolutną rację."
			},
			{
				correct: false,
				text: "Mówi, że jak budujemy więzienia to jesteśmy po stronie morderców. To bez sensu!",
				reply: "Pysiu, Leszek Miller to premier który wydał zgodę na budowę tych więzień."
			},
		],
		conclusion: "Miller chce tu wzbudzić poczucie winy u krytyków, że jak będą krytykować jego decyzję żeby pozwolić na tortury to sa po stronie “morderców.” Ma nadzieje że, wtedy zamilkną bo nie chcą być wrzuceni do jednego worka z terrorystami."
	},
	{
		person: "Karo",
		pysk:"Karo.jpg",
		post: "W odpowiedzi na zarzuty, że jego partia nie ma wizji Polski którą by chcieli zbudować Donald Tusk powiedział ,,jak ktoś ma wizje, niech idzie do lekarza''. ",
		source: "",
		answers: [{
				correct: false,
				text: "On myśli, że wszyscy mają poczucie humoru.",
				reply: "Nie no, nie myśli..."
			},
			{
				correct: true,
				text: "Wizja może znaczyć dwie różne rzeczy.",
				reply: "Ano."
			},
			{
				correct: false,
				text: "Do lekarza trzeba się zapisywać z wyprzedzeniem..",
				reply: "Chyba jednak nie o to mu chodziło."
			},
			{
				correct: true,
				text: "Odpowiada nie na temat.",
				reply: "Świetna uwaga!"
			},
		],
		conclusion: "Tusk tak naprawdę nie odpowiedział na krytykę, tylko zbył ją żartem. Wykorzystał przy tym to, że “wizja” może znaczyć coś innego niż to co mieli na myśli jego krytycy. (opcja: to się nazywa ekwiwokacja)"
	},
	{
		person: "Fakt",
		pysk:"Fakt.jpg",
		post: "",
		source: "",
		picture: "fakt.jpg",
		answers: [{
				correct: true,
				text: "Miesza aktora i postać, którą gra.",
				reply: "Racja, racja."
			},
			{
				correct: false,
				text: "Nazywa Leonardo DiCaprio niedźwiedziem żeby zwrócić uwagę czytelnika.",
				reply: "Nie no przeczytaj jeszcze raz."
			},
			{
				correct: false,
				text: "To nie był prawdziwy Oscar.",
				reply: "huh?"
			},
		],
		video: "https://youtu.be/3hM70BC2qQI"
	},
	{
		person: "Krystyna Pawłowicz",
		pysk:"Krystyna_Pawłowicz.jpg",
		post: "",
	    picture: "krysia.png",
		source: "",
		answers: [{
				correct: true,
				text: "Normalną wypowiedź przedstawia jako skrajnie negatywną.",
				reply: "Prawda!"
			},
			{
				correct: true,
				text: "Przezywa Schetynę zamiast argumentować.",
				reply: "Jak to Krysia."
			},
			{
				correct: false,
				text: "Dobrze mówi, polać jej.",
				reply: "Usuwam Cię ze znajomych."
			},
		    {
				correct: true,
				text: "Nie ,rząd cieni' tylko ,gabinet cieni.'",
				reply: "Masz rację."
			},
		    {
				correct: false,
				text: "Co to jest rząd cieni?",
				reply: "Tak naprawdę 'gabinet cieni,' inaczej nazywany 'rzadem oczekującym.' Tak sie nazywa grupę ludzi których opozycja przygotowuje do objęcia władzy w razie wygrania wyborów. To normalne zachowanie w demokracji."
			},
		],
		conclusion: "Zamiast mówić dlaczego opozycja nie ma racji, Prof. Pawłowicz atakuje i przezywa ludzi z których składa się opozycja."
	},
	{
		person: "Ciocia Emilka:",
		pysk:"Ciocia_Emilka.jpg",
		post: "Trzebe jeść więcej czekolady, to może dostaniesz Nobla.",
	    picture: "nobel.png",
		source: "",
		answers: [{
				correct: false,
				text: "Jak zacznę jeść czekoladę to przytyję, a to ważniejsze niż nagroda Nobla.",
				reply: "przytulasy, wiem co czujesz"
			},
			{
				correct: true,
				text: "To, ze te same kraje maja wiecej nagrod i jedza wiecej czekolady nie musi jedno wynikać z drugiego. Na przykład, może chodzić o to że te kraje są bogate.",
				reply: "Sprytne."
			},
			{
				correct: true,
				text: "Na wykresie jest tylko kilka krajów. Ktoś kto zrobił wykres mógł wybrać te, które pasują do tego co chciał pokazać.",
				reply: "Hmmmm to prawda"
			},
			{
				correct: false,
				text: "Ja i tak nie mam szans na Nobla więc mnie to nie obchodzi.",
				reply: ":(((((("
			},
			{
				correct: false,
				text: "Co to jest Nobel?",
				reply: "Nagroda Nobla to prestiżowe wyróżnienie dla naukowców, pisarzy, lekarzy i działaczy społecznych."
			},
		],
		video: "https://www.youtube.com/watch?v=hLqg-GFm1X4"
	},
	{
		person: "Bank",
		pysk:"Bank.jpg",
		post: "",
		source: "",
		picture: "malysz.jpg",
		answers: [{
				correct: true,
				text: "Małysz nie jest ekspertem od bankowości.",
				reply: "Masz rację."
			},
			{
				correct: false,
				text: "Czerwone karty są lamerskie.",
				reply: "A ja mam. Usuwam Cię ze znajomych."
			},
			{
				correct: false,
				text: "Małysz jest kiepskim skoczkiem.",
				reply: "Usuwam Cie ze znajomych i moja ciocia też."
			},
		],
		video: "https://youtu.be/cJXe-kIKVbQ"
	},
	{
		person: "Pudelek",
		pysk:"Pudelek.jpg",
		post: "",
		source: "",
		picture: "misiewicz.png",
		answers: [{
				correct: false,
				text: "Jeśli Macierewicz lubi młodszych panów to jego sprawa. ",
				reply: "Racja, ale manipulacja Pudelka ma też cel polityczny."
			},
			{
				correct: true,
				text: "Celowo sugerują, że Macierewicz leci na swoich młodych pracowników żeby go osłabić.",
				reply: "W punkt."
			},
			{
				correct: true,
				text: "Misiewicz miał zupełnie inne stanowisko. To zestawienie jest bez sensu.",
				reply: "Więc o co w nim chodzi?"
			},
		    {
				correct: false,
				text: "Biedny Misiewicz.",
				reply: ":("
			},
		],
		conclusion: "W ten sposób właśnie wpływa się na pozycję osób publicznych. Zestawienie z newsem o dniu singla pod spodem też może być celowe - przed wojną w Iraku, w USA New York Times i inne gazety składały wiadomości o rzekomej broni masowego rażenia w Iraku z wiadomościami o jedenastym września. Według sondaży wielu Amerykanów myślało potem, że dyktator Iraku Saddam Hussein miał coś wspólnego z jedenastym września. Potem się okazało, że broni masowego rażenia też nie było."
	},
	{
		person: "wpolityce.pl",
		pysk:"wpolityce.pl.jpg",
		post: "Frasyniuk ma sprawę o “naruszenie nietykalności policjanta” podczas protestu politycznego. Nie stawił się do prokuratury, więc o świcie policja zjawiła się w jego mieszkaniu i odprowadziła w kajdankach.",
		picture: "sonda.png",
		source: "",
		answers: [{
				correct: false,
				text: "Są też inne powody dla których można lubić albo nie lubić Frasyniuka.",
				reply: "Hmmmmm"
			},
			{
				correct: true,
				text: "Nie ma możliwości, że demonstrowanie jest prawem w ramach wolności słowa.",
				reply: "Coś w tym jest."
			},
			{
				correct: true,
				text: "To czy jesteś za postępowaniem policji czy przeciw nie da się w tej sondzie oddzielić od tego czy uważasz, że wszyscy są równi wobec prawa.",
				reply: "Prosto w punkt. Jestes mózgiem. <3"
			},
		],
		conclusion: "Takie manipulacje zdarzają się często. Nawet w ustawach politycy często mieszają popularne i niepopularne zmiany, żeby podzielić opozycję."
	},
  {
		person: "Pepsi",
		pysk:"Pepsi.jpg",
		post: "",
		picture: "pepsi.png",
		source: "",
		answers: [{
				correct: false,
				text: "Fajne kolorki.",
				reply: ":D"
			},
			{
				correct: true,
				text: "Pół miliona wybrało, ale czy wybrało Pepsi?",
				reply: "Dobre pytanie!"
			},
			{
				correct: false,
				text: "Ale nie jesteśmy na plaży.",
				reply: "Kręcisz bekę."
			},
		],
		video: "https://youtu.be/OlE4P04t_Ag"
	},
];
