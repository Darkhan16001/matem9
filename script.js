
"use strict";

const $=id=>document.getElementById(id);
const M=String.raw;

const lesson={
 title:"Иррационал теңдеулер және олардың жүйелерін шешу",
 goal:"Иррационал теңдеудің мүмкін мәндер жиынын анықтау, теңдеуді дәрежелеу арқылы шешу, бөгде түбірлерді тексеру және теңдеулер жүйесін шешу."
};

// 5 ТЕОРИЯ, ӘРБІРІНІҢ СОҢЫНДА 2 ЕСЕП
const theory=[
 {
  title:"Иррационал теңдеу дегеніміз не?",
  definition:"Айнымалысы түбір таңбасының астында кездесетін теңдеу иррационал теңдеу деп аталады. Мұндай теңдеуді шешкенде ең алдымен түбірдің анықталу шартын ескеру керек.",
  explanation:"Мысалы, белгісіз санның квадрат түбірі төртке тең делік. Онда түбір астындағы сан он алты болуы тиіс. Екі жақты квадраттаймыз да, белгісіз санды табамыз. Соңында жауапты бастапқы теңдеуге қойып тексереміз.",
  rule:"Түбір астындағы өрнек теріс болмауы тиіс. Теңдеудің екі жағын квадраттағаннан кейін міндетті түрде тексеру жасалады.",
  formula:M`\sqrt{A(x)}=B(x)\Longrightarrow
   \begin{cases}A(x)\geq0\\B(x)\geq0\end{cases}`,
  worked:[
   M`\sqrt{x+7}=4`,
   M`x+7=16`,
   M`x=9`,
   M`\sqrt{9+7}=4`
  ],
  warning:"Түбірдің мәні теріс болмайды. Сондықтан квадрат түбір теріс санға тең болатын теңдеудің шешімі жоқ.",
  self:[
   {q:M`\sqrt{x+5}=3`,steps:[M`x+5=9`,M`x=4`,M`\sqrt{4+5}=3`],answer:M`\boxed{x=4}`},
   {q:M`\sqrt{x-2}=5`,steps:[M`x-2=25`,M`x=27`,M`\sqrt{27-2}=5`],answer:M`\boxed{x=27}`}
  ]
 },
 {
  title:"Мүмкін мәндер жиыны (ММЖ)",
  definition:"Мүмкін мәндер жиыны — өрнектің нақты сандарда анықталуына мүмкіндік беретін айнымалы мәндерінің жиыны. Квадрат түбір астындағы өрнек нөлден кем болмауы тиіс.",
  explanation:"Мысалы, түбір астында x−3 өрнегі тұрса, x саны кемінде үшке тең болуы керек. Ал теңдеудің оң жағы да теріс болмайтын шартты қарастырсақ, артық түбірлерді ертерек анықтай аламыз.",
  rule:"Алдымен барлық жұп дәрежелі түбірлердің астындағы өрнектер үшін теріс емес болу шарттарын жазамыз.",
  formula:M`\sqrt{x-3}\text{ анықталуы үшін }x\geq3`,
  worked:[
   M`\sqrt{2x-6}=4`,
   M`2x-6\geq0\Longrightarrow x\geq3`,
   M`2x-6=16`,
   M`x=11`,
   M`\sqrt{22-6}=4`
  ],
  warning:"ММЖ-ға кірмейтін санды жауап ретінде алуға болмайды.",
  self:[
   {q:M`\sqrt{x-4}=2`,steps:[M`x\geq4`,M`x-4=4`,M`x=8`],answer:M`\boxed{x=8}`},
   {q:M`\sqrt{3x-3}=3`,steps:[M`x\geq1`,M`3x-3=9`,M`x=4`],answer:M`\boxed{x=4}`}
  ]
 },
 {
  title:"Екі жағын квадраттау әдісі",
  definition:"Иррационал теңдеуді шешудің негізгі әдістерінің бірі — теңдеудің екі жағын квадраттау. Бұл тәсіл түбір таңбасын жоюға көмектеседі.",
  explanation:"Алдымен түбірді теңдеудің бір жағында қалдырамыз. Одан соң екі жақты квадраттаймыз, пайда болған теңдеуді шешеміз. Квадраттау кезінде бөгде түбір пайда болуы мүмкін болғандықтан, табылған барлық мәнді бастапқы теңдеуге қойып тексереміз.",
  rule:"Теңдеуді квадраттау — қажетті қадам, бірақ тексерусіз алынған мәндердің бәрін жауап деп қабылдауға болмайды.",
  formula:M`\sqrt{A(x)}=B(x)\Longrightarrow A(x)=B^2(x)`,
  worked:[
   M`\sqrt{x+5}=x-1`,
   M`x+5=(x-1)^2`,
   M`x^2-3x-4=0`,
   M`(x-4)(x+1)=0`,
   M`x=4\quad\text{немесе}\quad x=-1`,
   M`\sqrt{4+5}=4-1=3`,
   M`\boxed{x=4}`
  ],
  warning:"x=−1 мәні квадратталған теңдеуді қанағаттандырғанымен, бастапқы теңдеуге сәйкес келмейді.",
  self:[
   {q:M`\sqrt{x+2}=x`,steps:[M`x\geq0`,M`x+2=x^2`,M`(x-2)(x+1)=0`,M`x=2`],answer:M`\boxed{x=2}`},
   {q:M`\sqrt{x+6}=x`,steps:[M`x\geq0`,M`x^2-x-6=0`,M`(x-3)(x+2)=0`,M`x=3`],answer:M`\boxed{x=3}`}
  ]
 },
 {
  title:"Айнымалыны алмастыру әдісі",
  definition:"Егер теңдеуде бір түбірлі өрнек бірнеше рет кездессе, оны жаңа айнымалымен алмастыруға болады. Бұл әдіс күрделі өрнекті қарапайым теңдеуге айналдырады.",
  explanation:"Мысалы, квадрат түбірді t әрпімен белгілейміз. Онда t нөлден кем емес. Түбірі бар өрнектің квадраты t² болады. Жаңа теңдеуді шешкен соң, t арқылы бастапқы айнымалыны табамыз.",
  rule:"Айнымалыны алмастырудан кейін жаңа айнымалының анықталу шартын сақтаймыз және соңында бастапқы айнымалыға қайта ораламыз.",
  formula:M`t=\sqrt{x},\quad t\geq0,\quad x=t^2`,
  worked:[
   M`x-5\sqrt{x}+6=0`,
   M`t=\sqrt{x},\quad t\geq0`,
   M`t^2-5t+6=0`,
   M`(t-2)(t-3)=0`,
   M`t=2\quad\text{немесе}\quad t=3`,
   M`\boxed{x=4,\quad x=9}`
  ],
  warning:"t-ның теріс мәнін қабылдамаймыз, себебі t квадрат түбірге тең.",
  self:[
   {q:M`x-3\sqrt{x}+2=0`,steps:[M`t^2-3t+2=0`,M`t=1,\ 2`,M`x=1,\ 4`],answer:M`\boxed{x=1,\ 4}`},
   {q:M`x-4\sqrt{x}+3=0`,steps:[M`t^2-4t+3=0`,M`t=1,\ 3`,M`x=1,\ 9`],answer:M`\boxed{x=1,\ 9}`}
  ]
 },
 {
  title:"Иррационал теңдеулер жүйесі",
  definition:"Иррационал теңдеулер жүйесі — кемінде бір теңдеуінде айнымалысы түбір таңбасының астында болатын екі немесе одан да көп теңдеудің жиыны. Жүйенің шешімі барлық теңдеуді бір мезгілде қанағаттандыруы керек.",
  explanation:"Алдымен мүмкін мәндер жиынын табамыз. Одан кейін бір теңдеуден айнымалыны екіншісі арқылы өрнектейміз немесе жаңа айнымалы енгіземіз. Табылған шешімді жүйедегі екі теңдеуге де қойып тексереміз.",
  rule:"Жүйенің дұрыс шешімі әр теңдеуге сәйкес келуі тиіс. Бір теңдеуді ғана қанағаттандыратын мән жауап болмайды.",
  formula:M`\begin{cases}\sqrt{x}+y=5\\ \sqrt{x}-y=1\end{cases}`,
  worked:[
   M`\begin{cases}\sqrt{x}+y=5\\\sqrt{x}-y=1\end{cases}`,
   M`2\sqrt{x}=6`,
   M`\sqrt{x}=3\Longrightarrow x=9`,
   M`3+y=5\Longrightarrow y=2`,
   M`\boxed{(x,y)=(9,2)}`
  ],
  warning:"Жүйенің жауабын реттелген жұп түрінде жазып, екі теңдеуді де тексеріңдер.",
  self:[
   {q:M`\begin{cases}\sqrt{x}+y=6\\\sqrt{x}-y=2\end{cases}`,steps:[M`2\sqrt{x}=8`,M`x=16`,M`y=2`],answer:M`\boxed{(16,2)}`},
   {q:M`\begin{cases}\sqrt{x}+y=7\\\sqrt{x}-y=1\end{cases}`,steps:[M`2\sqrt{x}=8`,M`x=16`,M`y=3`],answer:M`\boxed{(16,3)}`}
  ]
 }
];

// 10 КОНСПЕКТ
const notes=[
 {
  title:"Иррационал теңдеудің анықтамасы",
  text:"Айнымалы түбір таңбасының астында орналасқан теңдеу иррационал теңдеу деп аталады. Мұндай теңдеулерді шешу үшін түбірдің анықталу шартын және алынған түбірлерді тексеру қажет.",
  formula:M`\sqrt{A(x)}=B(x)`,
  example:[M`\sqrt{x+3}=4`,M`x+3=16`,M`\boxed{x=13}`]
 },
 {
  title:"Мүмкін мәндер жиыны",
  text:"Квадрат түбірдің астындағы өрнек теріс болмауы тиіс. Осы шартты қанағаттандыратын мәндер мүмкін мәндер жиынына кіреді.",
  formula:M`A(x)\geq0`,
  example:[M`\sqrt{x-7}`,M`x-7\geq0`,M`x\geq7`]
 },
 {
  title:"Түбірдің теріс емес болуы",
  text:"Квадрат түбірдің мәні әрқашан нөлден үлкен немесе нөлге тең болады. Сондықтан теріс санға тең болатын квадрат түбірлі теңдеудің нақты шешімі жоқ.",
  formula:M`\sqrt{A(x)}\geq0`,
  example:[M`\sqrt{x+1}=-3`,M`\text{Шешімі жоқ}`]
 },
 {
  title:"Квадраттау тәсілі",
  text:"Түбірі бар теңдеудің екі жағын квадраттауға болады. Алайда мұндай түрлендіру кезінде бөгде түбір пайда болуы ықтимал. Сондықтан әр жауап міндетті түрде тексеріледі.",
  formula:M`\sqrt{A(x)}=B(x)\Longrightarrow A(x)=B^2(x)`,
  example:[M`\sqrt{x+4}=3`,M`x+4=9`,M`x=5`]
 },
 {
  title:"Бөгде түбір",
  text:"Түрлендірілген теңдеуді қанағаттандырып, бастапқы теңдеуге сәйкес келмейтін сан бөгде түбір деп аталады. Бөгде түбір жауапқа енгізілмейді.",
  formula:M`\sqrt{x+2}=x`,
  example:[M`x+2=x^2`,M`(x-2)(x+1)=0`,M`\boxed{x=2}`]
 },
 {
  title:"Түбірді жеке қалдыру",
  text:"Теңдеуді квадраттаудан бұрын түбірі бар өрнекті теңдеудің бір жағына жеке шығарамыз. Бұл квадраттауды дұрыс орындауға көмектеседі.",
  formula:M`\sqrt{x+1}+2=5`,
  example:[M`\sqrt{x+1}=3`,M`x+1=9`,M`\boxed{x=8}`]
 },
 {
  title:"Айнымалыны алмастыру",
  text:"Бір түбірлі өрнек бірнеше рет кездессе, оны жаңа айнымалымен алмастыру арқылы есеп жеңілдетіледі. Соңында бастапқы айнымалы қайта табылады.",
  formula:M`t=\sqrt{x},\qquad t\geq0`,
  example:[M`x-3\sqrt{x}+2=0`,M`t^2-3t+2=0`,M`\boxed{x=1,\ 4}`]
 },
 {
  title:"Түбір астындағы өрнекті түрлендіру",
  text:"Квадрат түбірдің қасиеттерін тек анықталу шарттары орындалған жағдайда қолданамыз. Теңдеуді ықшамдағаннан кейін барлық шешімді қайта тексереміз.",
  formula:M`\sqrt{a^2}=|a|`,
  example:[M`\sqrt{(x-2)^2}=3`,M`|x-2|=3`,M`\boxed{x=5,\ -1}`]
 },
 {
  title:"Жүйені алмастыру арқылы шешу",
  text:"Екі теңдеуден тұратын жүйеде бір айнымалыны екіншісі арқылы өрнектеп, оны басқа теңдеуге қоямыз. Сонда бір айнымалысы бар теңдеу алынады.",
  formula:M`\begin{cases}\sqrt{x}=y\\y+1=4\end{cases}`,
  example:[M`y=3`,M`\sqrt{x}=3`,M`\boxed{(x,y)=(9,3)}`]
 },
 {
  title:"Иррационал теңдеулер жүйесін тексеру",
  text:"Жүйенің жауабы барлық теңдеуді қанағаттандыратын реттелген сандар жұбы болады. Әрбір табылған жұпты жүйенің екі теңдеуіне де қойып тексереміз.",
  formula:M`\begin{cases}\sqrt{x}+y=5\\\sqrt{x}-y=1\end{cases}`,
  example:[M`\sqrt{x}=3,\quad y=2`,M`\boxed{(x,y)=(9,2)}`]
 }
];

// 4 ДЕҢГЕЙ — 20 ЕСЕП
// Бірнеше түбірлі теңдеуде жауап саны емес,
// барлық шешімнің қосындысы енгізіледі.
const levels=[
 {
  name:"I деңгей — Жеңіл",points:5,
  items:[
   {q:M`\sqrt{x}=5`,answer:25,steps:[M`x=5^2`,M`x=25`]},
   {q:M`\sqrt{x+4}=3`,answer:5,steps:[M`x+4=9`,M`x=5`]},
   {q:M`\sqrt{x-2}=4`,answer:18,steps:[M`x-2=16`,M`x=18`]},
   {q:M`\sqrt{2x}=6`,answer:18,steps:[M`2x=36`,M`x=18`]},
   {q:M`\sqrt{3x+1}=4`,answer:5,steps:[M`3x+1=16`,M`x=5`]}
  ]
 },
 {
  name:"II деңгей — Орташа",points:10,
  items:[
   {q:M`\sqrt{x+1}+2=5`,answer:8,steps:[M`\sqrt{x+1}=3`,M`x=8`]},
   {q:M`\sqrt{2x+3}=5`,answer:11,steps:[M`2x+3=25`,M`x=11`]},
   {q:M`\sqrt{x+5}=x-1`,answer:4,steps:[M`x+5=(x-1)^2`,M`x=4\text{ немесе }-1`,M`\boxed{x=4}`]},
   {q:M`\sqrt{x+2}=x`,answer:2,steps:[M`x+2=x^2`,M`x=2\text{ немесе }-1`,M`\boxed{x=2}`]},
   {q:M`\sqrt{3x-2}=x`,answer:2,steps:[M`3x-2=x^2`,M`(x-1)(x-2)=0`,M`\boxed{x=1,\ 2}`],sum:true}
  ]
 },
 {
  name:"III деңгей — Қиын",points:15,
  items:[
   {q:M`\sqrt{x+6}=x`,answer:3,steps:[M`x+6=x^2`,M`(x-3)(x+2)=0`,M`x=3`]},
   {q:M`\sqrt{2x+1}=x-1`,answer:4,steps:[M`2x+1=(x-1)^2`,M`x(x-4)=0`,M`x=4`]},
   {q:M`x-5\sqrt{x}+6=0`,answer:13,steps:[M`t=\sqrt{x}`,M`t^2-5t+6=0`,M`t=2,\ 3`,M`x=4,\ 9`],sum:true},
   {q:M`x-4\sqrt{x}+3=0`,answer:10,steps:[M`t^2-4t+3=0`,M`t=1,\ 3`,M`x=1,\ 9`],sum:true},
   {q:M`\sqrt{x+9}=x-3`,answer:7,steps:[M`x+9=(x-3)^2`,M`x(x-7)=0`,M`x=7`]}
  ]
 },
 {
  name:"IV деңгей — Өте қиын",points:20,
  items:[
   {q:M`\begin{cases}\sqrt{x}+y=5\\\sqrt{x}-y=1\end{cases}`,answer:11,steps:[M`\sqrt{x}=3`,M`x=9,\ y=2`,M`x+y=11`],system:true},
   {q:M`\begin{cases}\sqrt{x}+y=6\\\sqrt{x}-y=2\end{cases}`,answer:18,steps:[M`\sqrt{x}=4`,M`x=16,\ y=2`,M`x+y=18`],system:true},
   {q:M`\begin{cases}\sqrt{x}=y+1\\y=3\end{cases}`,answer:19,steps:[M`\sqrt{x}=4`,M`x=16`,M`x+y=19`],system:true},
   {q:M`\begin{cases}\sqrt{x}+y=7\\\sqrt{x}-y=1\end{cases}`,answer:19,steps:[M`\sqrt{x}=4`,M`x=16,\ y=3`,M`x+y=19`],system:true},
   {q:M`\begin{cases}\sqrt{x}=y\\x+y=12\end{cases}`,answer:12,steps:[M`x=y^2`,M`y^2+y-12=0`,M`y=3,\ x=9`,M`x+y=12`],system:true}
  ]
 }
];

// 15 КОМАНДАЛЫҚ СҰРАҚ
const quiz=[
 ["Иррационал теңдеу дегеніміз не?",["Айнымалысы түбір астында болатын теңдеу","Тек сызықтық теңдеу","Тек квадрат теңдеу","Тек сандық теңдік"],0],
 ["√x=4. x нешеге тең?",["4","8","16","2"],2],
 ["√(x−2) нақты болу шарты?",["x≤2","x≥2","x≠2","x<2"],1],
 ["√(x+5)=3. x мәні?",["3","9","5","4"],3],
 ["Теңдеуді квадраттаған соң не істейміз?",["Түбірді тексереміз","Жауапты бірден жазамыз","Шекара қосамыз","Таңбаны өзгертеміз"],0],
 ["√x=−2 теңдеуінің шешімі?",["4","−4","Шешімі жоқ","2"],2],
 ["√(x+1)=3. x мәні?",["9","8","3","2"],1],
 ["Бөгде түбір деген не?",["Жалғыз түбір","Оң түбір","Екі еселі түбір","Бастапқы теңдеуге сай келмейтін түбір"],3],
 ["t=√x болса, t қандай?",["t≥0","t<0","t≠0","Тек 1"],0],
 ["x−3√x+2=0 түбірлері?",["2 және 3","0 және 2","1 және 4","−1 және −4"],2],
 ["√(x−5)=0. x мәні?",["0","5","−5","10"],1],
 ["√(x+2)=x теңдеуінің шешімі?",["−1","1","3","2"],3],
 ["Екі теңдеулі жүйе шешімі?",["Екі теңдеуге де сәйкес келеді","Тек біріншісіне","Тек екіншісіне","Кез келген сан"],0],
 ["√x+y=5 және √x−y=1 болса, √x қанша?",["2","4","3","5"],2],
 ["√(x²) өрнегі неге тең?",["x²","|x|","−x","2x"],1]
];

const homework=[
 {
  title:"1. Теңдеулерді шешу",
  text:"Әр теңдеу үшін ММЖ көрсетіп, барлық табылған түбірді бастапқы теңдеуге қойып тексеріңдер.",
  formulas:[
   M`\sqrt{2x+7}=x`,
   M`\sqrt{x+12}=x-2`,
   M`x-7\sqrt{x}+12=0`
  ]
 },
 {
  title:"2. Иррационал теңдеулер жүйесі",
  text:"Алдымен мүмкін мәндер жиынын анықтаңдар. Жүйені шешіп, реттелген жұпты әр теңдеуге қойып тексеріңдер.",
  formulas:[
   M`\begin{cases}\sqrt{x}+y=8\\\sqrt{x}-y=2\end{cases}`,
   M`\begin{cases}\sqrt{x}=y+2\\x+y=28\end{cases}`
  ]
 },
 {
  title:"3. Қателерді талдау",
  text:"«Неліктен иррационал теңдеулерде бөгде түбір пайда болады?» деген сұраққа 8–10 сөйлеммен жауап беріңдер. Бір теңдеу құрастырып, тексерудің қажеттілігін мысалмен көрсетіңдер.",
  formulas:[M`\sqrt{x+5}=x-1`]
 }
];

// ======================================
// СЛАЙДТАРДЫ ҚҰРАСТЫРУ
// ======================================

// II деңгейдегі 5-есептің жарамды түбірлері
// 1 және 2. Олардың қосындысы 3.
levels[1].items[4].answer=3;

const slides=[{type:"intro",name:"Кіріспе"}];

theory.forEach((_,i)=>slides.push({
 type:"theory",index:i,name:`Түсіндірме ${i+1}`
}));

notes.forEach((_,i)=>slides.push({
 type:"notes",index:i,name:`Конспект ${i+1}`
}));

levels.forEach((_,i)=>slides.push({
 type:"levels",index:i,name:`${i+1}-деңгей`
}));

quiz.forEach((_,i)=>slides.push({
 type:"game",index:i,name:`${i%3+1}-топ, ${i+1}-сұрақ`
}));

slides.push(
 {type:"homework",name:"Үй жұмысы"},
 {type:"finish",name:"Қорытынды"}
);

let page=0;
let individualScore=0;
let teamScores=[0,0,0];
const completed=new Set();
const gameAnswers=new Map();

let secondsLeft=4800;
let timerID=null;
let timerEndAt=0;

// ======================================
// КӨМЕКШІ ФУНКЦИЯЛАР
// ======================================

function safe(value){
 return String(value).replace(/[&<>"']/g,c=>({
  "&":"&amp;","<":"&lt;",">":"&gt;",
  '"':"&quot;","'":"&#39;"
 }[c]));
}

function math(tex){
 return `<div class="math">\\[${tex}\\]</div>`;
}

function card(color,title,body){
 return `<section class="card ${color}">
   <h3>${safe(title)}</h3>${body}
 </section>`;
}

function stepHTML(steps){
 return steps.map((s,i)=>`
   <div class="step">
     <strong>${i+1}-қадам</strong>
     ${math(s)}
   </div>`).join("");
}

function workHTML(items,prefix){
 return items.map((item,i)=>{
  const id=prefix+"_"+i;
  return `
  <section class="work">
    <h3>✏️ Өзіндік жұмыс — ${i+1}-есеп</h3>
    ${math(item.q)}
    <p>Алдымен дәптерге өз беттеріңмен шығарыңдар.</p>

    <button class="action" data-toggle="${id}">
      Шешу жолы мен жауапты көрсету
    </button>

    <div class="solution" id="${id}" hidden>
      ${stepHTML(item.steps)}
      <h3>Дұрыс жауап</h3>
      ${math(item.answer)}
    </div>
  </section>`;
 }).join("");
}

// ======================================
// САБАҚ БӨЛІМДЕРІ
// ======================================

function renderIntro(){
 return `<div class="slide">
  <div class="eyebrow">МАТЕМАТИКА • 1 КУРС • 80 МИНУТ</div>
  <h1 class="gradient">§8. Иррационал теңдеулер және олардың жүйелерін шешу</h1>

  ${card("blue","Сабақ мақсаты",`<p>${safe(lesson.goal)}</p>`)}

  ${card("yellow","Негізгі мысал",
    math(M`\sqrt{x+5}=x-1\quad\Longrightarrow\quad x=4`))}

  ${card("green","Сабақтың құрылымы",`
    <p>5 түсіндірме және 10 өзіндік жұмыс</p>
    <p>10 толық конспект және шығарылған мысал</p>
    <p>4 деңгейлік 20 есеп</p>
    <p>3 топқа 15 ойын сұрағы</p>
    <p>Үй жұмысы және қорытынды</p>
  `)}

  ${card("purple","80 минуттық жоспар",`
    <p>Кіріспе — 5 минут</p>
    <p>Теория және өзіндік жұмыс — 20 минут</p>
    <p>Конспект — 15 минут</p>
    <p>4 деңгей — 20 минут</p>
    <p>Топтық ойын — 15 минут</p>
    <p>Үй жұмысы, қорытынды — 5 минут</p>
  `)}
 </div>`;
}

function renderTheory(i){
 const t=theory[i];
 return `<div class="slide">
  <div class="eyebrow">ТҮСІНДІРМЕ ${i+1} / 5</div>
  <h2>${safe(t.title)}</h2>

  ${card("blue","Анықтама",`<p>${safe(t.definition)}</p>`)}
  ${card("purple","Қарапайым түсіндірме",`<p>${safe(t.explanation)}</p>`)}
  ${card("green","Ереже",`<p>${safe(t.rule)}</p>`)}
  ${card("yellow","Формула",math(t.formula))}
  ${card("red","Маңызды ескерту",`<p>${safe(t.warning)}</p>`)}
  ${card("green","Толық шығарылған мысал",stepHTML(t.worked))}

  <div class="eyebrow">ӨЗІНДІК ЖҰМЫС</div>
  <h2>✏️ Түсіндірмені бекіту</h2>
  ${workHTML(t.self,"theory_"+i)}
 </div>`;
}

function renderNote(i){
 const n=notes[i];
 return `<div class="slide">
  <div class="eyebrow">КОНСПЕКТ ${i+1} / 10</div>
  <h2>${safe(n.title)}</h2>

  <div class="notebook">
   <h3>✍ Дәптерге жазып алыңдар</h3>
   <p>${safe(n.text)}</p>
  </div>

  ${card("yellow","Негізгі формула",math(n.formula))}
  ${card("green","Шығарылған мысал",stepHTML(n.example))}
  ${card("blue","Ауызша тапсырма",`
    <p>Есепті қалай шығарғанымызды өз сөздеріңмен түсіндіріңдер.</p>
  `)}
 </div>`;
}

function renderLevel(i){
 const level=levels[i];

 return `<div class="slide">
  <div class="eyebrow">4 ДЕҢГЕЙ • ${i+1}/4</div>
  <h2>📐 ${safe(level.name)}</h2>

  <div class="level-header">
   <span>5 есеп</span>
   <span>Дұрыс жауап: +${level.points} ұпай</span>
  </div>

  <p>
   ${i===3
     ?"Жүйені шешіп, x+y қосындысын енгізіңдер."
     :"Теңдеуді толық шығарып, түбірді тексеріңдер."}
   ${i===1 || i===2
     ?" Бірнеше жарамды түбірі бар есепте олардың қосындысын енгізіңдер."
     :""}
  </p>

  <div class="level-grid">
   ${level.items.map((item,j)=>{
    const key=i+"_"+j;
    const done=completed.has(key);
    const instruction=item.system
      ?"Жауап: x+y"
      :item.sum
        ?"Жауап: түбірлер қосындысы"
        :"Жауап: x";

    return `<div class="level-task">
      <h3>${j+1}-есеп</h3>
      ${math(item.q)}
      <p>${instruction}</p>

      <div class="answer-row">
       <input id="answer_${key}"
         type="text"
         inputmode="decimal"
         placeholder="Сандық жауап"
         ${done?"disabled":""}>
       <button data-check="${key}"
         ${done?"disabled":""}>
         ${done?"✓ Дұрыс":"Тексеру"}
       </button>
      </div>

      <div id="feedback_${key}"
       class="feedback ${done?"correct":""}">
       ${done?`✓ +${level.points} ұпай`:"Жауабыңды енгіз."}
      </div>

      <button class="action" data-toggle="solution_${key}">
       Шешу жолын көрсету
      </button>

      <div id="solution_${key}" class="solution" hidden>
       ${stepHTML(item.steps)}
       <h3>Дұрыс жауап</h3>
       ${math(item.system?
          M`x+y=`+item.answer:
          item.sum?
          M`\text{Түбірлер қосындысы}=`+item.answer:
          M`x=`+item.answer)}
      </div>
    </div>`;
   }).join("")}
  </div>
 </div>`;
}

function renderGame(i){
 const [question,options,correct]=quiz[i];
 const team=i%3;
 const selected=gameAnswers.get(i);

 return `<div class="slide">
  <div class="eyebrow">ТОПТЫҚ ОЙЫН • ${i+1}/15</div>
  <h2>🏆 ${team+1}-топ жауап береді</h2>

  <div class="scores">
   ${teamScores.map((points,j)=>`
     <div class="team ${j===team?"current":""}">
      ${j+1}-топ<strong>${points}</strong>
     </div>`).join("")}
  </div>

  ${card("yellow",`${i+1}-сұрақ`,`
   <p>${safe(question)}</p>

   <div class="answers">
    ${options.map((option,j)=>{
     let cls="";
     if(selected!==undefined){
      if(j===correct)cls="correct";
      else if(j===selected)cls="wrong";
     }
     return `<button class="${cls}" data-choice="${j}"
        ${selected!==undefined?"disabled":""}>
       ${"ABCD"[j]}. ${safe(option)}
     </button>`;
    }).join("")}
   </div>

   <p>${selected===undefined
     ?"Бір жауапты таңдаңдар."
     :selected===correct
       ?"✓ Дұрыс! +10 ұпай."
       :"Дұрыс жауап: "+safe(options[correct])}</p>
  `)}

  ${card("blue","Ойын ережесі",`
   <p>1-топ → 2-топ → 3-топ кезегімен ауысады.</p>
   <p>Әр дұрыс жауапқа 10 ұпай қосылады.</p>
   <p>Жауаптан кейін «Келесі» батырмасын басыңдар.</p>
  `)}
 </div>`;
}

function renderHomework(){
 return `<div class="slide">
  <div class="eyebrow">ҮЙ ТАПСЫРМАСЫ</div>
  <h2>📚 Үй жұмысы</h2>
  ${homework.map((h,i)=>card(
   ["blue","yellow","green"][i],
   h.title,
   `<p>${safe(h.text)}</p>`+h.formulas.map(math).join("")
  )).join("")}
 </div>`;
}

function renderFinish(){
 const max=Math.max(...teamScores);
 const winners=teamScores
  .map((s,i)=>s===max?`${i+1}-топ`:null)
  .filter(Boolean);

 return `<div class="slide">
  <div class="eyebrow">ҚОРЫТЫНДЫ</div>
  <h1 class="gradient">Сабақ аяқталды!</h1>

  <div class="scores">
   ${teamScores.map((s,i)=>`
    <div class="team">${i+1}-топ<strong>${s}</strong></div>
   `).join("")}
  </div>

  ${card("green","Топтық ойын нәтижесі",`
   <p>${winners.join(", ")}
   ${winners.length===1?"— жеңімпаз!":"— бірдей ұпай жинады!"}</p>
  `)}

  ${card("blue","Деңгейлік жұмыс",`
   <p>Орындалған есеп: ${completed.size} / 20</p>
   <p>Жинаған жеке ұпай: ${individualScore}</p>
  `)}

  ${card("yellow","Сабақтан не үйрендік?",`
   <p>Мүмкін мәндер жиынын анықтадық.</p>
   <p>Иррационал теңдеулерді шештік.</p>
   <p>Бөгде түбірлерді тексердік.</p>
   <p>Иррационал теңдеулер жүйесін шештік.</p>
  `)}

  <h2>Сау болыңыздар!</h2>
 </div>`;
}

// ======================================
// СЛАЙДТАРДЫ КӨРСЕТУ
// ======================================

let mathQueue=Promise.resolve();

function renderMath(){
 if(!window.MathJax)return;
 mathQueue=mathQueue.then(async()=>{
  await MathJax.startup.promise;
  MathJax.typesetClear?.([$("content")]);
  await MathJax.typesetPromise([$("content")]);
 }).catch(e=>console.warn("MathJax:",e));
}

function render(){
 const s=slides[page];

 const html={
  intro:()=>renderIntro(),
  theory:()=>renderTheory(s.index),
  notes:()=>renderNote(s.index),
  levels:()=>renderLevel(s.index),
  game:()=>renderGame(s.index),
  homework:()=>renderHomework(),
  finish:()=>renderFinish()
 }[s.type]();

 $("content").innerHTML=html;
 $("content").scrollTop=0;

 $("pageCounter").textContent=
  `${page+1} / ${slides.length}`;
 $("pageTitle").textContent=s.name;
 $("pageProgress").style.width=
  ((page+1)/slides.length*100)+"%";

 $("totalScore").textContent=
  individualScore+teamScores.reduce((a,b)=>a+b,0);

 $("prevPage").disabled=page===0;
 $("nextPage").disabled=page===slides.length-1;

 document.querySelectorAll("[data-section]").forEach(btn=>{
  btn.classList.toggle("active",btn.dataset.section===s.type);
 });

 renderMath();
}

function nextPage(){
 if(page<slides.length-1){page++;render();}
}
function prevPage(){
 if(page>0){page--;render();}
}
function jumpTo(section){
 const i=slides.findIndex(s=>s.type===section);
 if(i!==-1){page=i;render();}
}

$("nextPage").onclick=nextPage;
$("prevPage").onclick=prevPage;

document.querySelectorAll("[data-section]").forEach(btn=>{
 btn.onclick=()=>jumpTo(btn.dataset.section);
});

$("content").addEventListener("click",event=>{
 const toggle=event.target.closest("[data-toggle]");
 if(toggle){
  const block=$(toggle.dataset.toggle);
  if(block)block.hidden=!block.hidden;
  return;
 }

 const check=event.target.closest("[data-check]");
 if(check){checkLevel(check.dataset.check);return;}

 const choice=event.target.closest("[data-choice]");
 if(choice)chooseAnswer(Number(choice.dataset.choice));
});

function checkLevel(key){
 if(completed.has(key))return;

 const [i,j]=key.split("_").map(Number);
 const task=levels[i].items[j];
 const input=$("answer_"+key);
 const feedback=$("feedback_"+key);

 if(!input.value.trim()){
  feedback.textContent="Алдымен жауапты енгіз.";
  return;
 }

 let value;
 try{
  value=calculate(input.value);
 }catch(error){
  feedback.textContent="Санды немесе бөлшекті дұрыс енгіз.";
  return;
 }

 if(Math.abs(value-task.answer)<1e-7){
  completed.add(key);
  individualScore+=levels[i].points;
  input.disabled=true;
  const btn=document.querySelector(`[data-check="${key}"]`);
  if(btn){btn.disabled=true;btn.textContent="✓ Дұрыс";}
  feedback.textContent=`✓ Дұрыс! +${levels[i].points} ұпай`;
  feedback.classList.add("correct");
  $("totalScore").textContent=
   individualScore+teamScores.reduce((a,b)=>a+b,0);
 }else{
  feedback.textContent="Қате. Қайта тексеріп көр.";
 }
}

function chooseAnswer(choice){
 const s=slides[page];
 if(s.type!=="game" || gameAnswers.has(s.index))return;

 gameAnswers.set(s.index,choice);

 if(quiz[s.index][2]===choice){
  teamScores[s.index%3]+=10;
 }
 render();
}

$("resetGame").onclick=()=>{
 teamScores=[0,0,0];
 gameAnswers.clear();
 render();
};

// ======================================
// ТОЛЫҚ ЭКРАН, ТАЙМЕР, САҒАТ
// ======================================

$("fullscreenBtn").onclick=async()=>{
 try{
  if(document.fullscreenElement)await document.exitFullscreen();
  else await document.documentElement.requestFullscreen();
 }catch(e){console.warn(e);}
};

function formatTime(s){
 return String(Math.floor(s/60)).padStart(2,"0")+
  ":"+String(s%60).padStart(2,"0");
}

function updateTimer(){
 $("remaining").textContent=formatTime(secondsLeft);
 $("elapsed").textContent=formatTime(4800-secondsLeft);
 $("timeProgress").style.width=
  ((4800-secondsLeft)/4800*100)+"%";
}

function startTimer(){
 if(timerID!==null || secondsLeft<=0)return;
 timerEndAt=Date.now()+secondsLeft*1000;
 timerID=setInterval(()=>{
  secondsLeft=Math.max(
   0,Math.ceil((timerEndAt-Date.now())/1000)
  );
  updateTimer();
  if(secondsLeft===0)pauseTimer();
 },250);
}

function pauseTimer(){
 if(timerID!==null)clearInterval(timerID);
 timerID=null;
}

function resetTimer(){
 pauseTimer();
 secondsLeft=4800;
 updateTimer();
}

$("timerStart").onclick=startTimer;
$("timerPause").onclick=pauseTimer;
$("timerReset").onclick=resetTimer;

function updateClock(){
 $("clock").textContent=new Intl.DateTimeFormat("kk-KZ",{
  timeZone:"Asia/Almaty",
  hour:"2-digit",minute:"2-digit",second:"2-digit",
  hour12:false
 }).format(new Date());
}

updateClock();
setInterval(updateClock,1000);

// ======================================
// КАЛЬКУЛЯТОР БАТЫРМАЛАРЫ
// ======================================

const calcValues={basic:"",science:""};

const calcKeys={
 basic:[
  "C","⌫","(",")",
  "7","8","9","÷",
  "4","5","6","×",
  "1","2","3","−",
  "%","0",".","+","="
 ],
 science:[
  "C","⌫","(",")",
  "sin","cos","tg","ctg",
  "√","∛","x²","xʸ",
  "log","ln","π","e",
  "7","8","9","÷",
  "4","5","6","×",
  "1","2","3","−",
  "%","0",".","+","="
 ]
};

const calcMap={
 "×":"*","÷":"/","−":"-",
 "√":"sqrt(","∛":"cbrt(",
 "sin":"sin(","cos":"cos(",
 "tg":"tan(","ctg":"ctg(",
 "log":"log(","ln":"ln(",
 "π":"pi","x²":"^2","xʸ":"^"
};

function makeCalculator(type){
 const grid=$("keys-"+type);
 calcKeys[type].forEach(key=>{
  const btn=document.createElement("button");
  btn.type="button";
  btn.textContent=key;

  if(key==="C")btn.classList.add("clear");
  if(key==="=")btn.classList.add("equal");
  if(["sin","cos","tg","ctg","log","ln"].includes(key)){
   btn.classList.add("trig");
  }
  if(["+","−","×","÷","√","∛","x²","xʸ"].includes(key)){
   btn.classList.add("op");
  }

  btn.addEventListener("click",()=>pressCalc(type,key));
  grid.appendChild(btn);
 });
}

function pressCalc(type,key){
 let v=calcValues[type];

 if(key==="C")v="";
 else if(key==="⌫")v=v.slice(0,-1);
 else if(key==="="){
  try{
   v=String(Number(calculate(v).toPrecision(12)));
  }catch(e){
   v="Қате";
  }
 }else{
  if(v==="Қате")v="";
  v+=calcMap[key]??key;
 }

 calcValues[type]=v;
 const display=$("display-"+type);
 display.textContent=v||"0";
 display.scrollLeft=display.scrollWidth;
}

// ======================================
// ЕСЕПТЕУ: DEG, ДӘРЕЖЕ, ТҮБІР
// ======================================

function calculate(input){
 const source=String(input)
  .replace(/\s+/g,"")
  .replace(/,/g,".");

 let pos=0;
 const rad=x=>x*Math.PI/180;

 const funcs={
  sin:x=>Math.sin(rad(x)),
  cos:x=>Math.cos(rad(x)),
  tan:x=>{
   if(Math.abs(Math.cos(rad(x)))<1e-12){
    throw Error("Тангенс анықталмаған");
   }
   return Math.tan(rad(x));
  },
  ctg:x=>{
   if(Math.abs(Math.sin(rad(x)))<1e-12){
    throw Error("Котангенс анықталмаған");
   }
   return Math.cos(rad(x))/Math.sin(rad(x));
  },
  sqrt:Math.sqrt,
  cbrt:Math.cbrt,
  log:Math.log10,
  ln:Math.log
 };

 function take(ch){
  if(source[pos]===ch){pos++;return true;}
  return false;
 }

 function atom(){
  if(take("(")){
   const v=expr();
   if(!take(")"))throw Error("Жақша");
   return v;
  }

  const rest=source.slice(pos);
  const number=rest.match(/^(?:\d+\.?\d*|\.\d+)/);

  if(number){
   pos+=number[0].length;
   return Number(number[0]);
  }

  if(rest.startsWith("pi")){
   pos+=2;return Math.PI;
  }
  if(rest.startsWith("e")){
   pos++;return Math.E;
  }

  for(const name of Object.keys(funcs)){
   if(rest.startsWith(name+"(")){
    pos+=name.length+1;
    const x=expr();
    if(!take(")"))throw Error("Жақша");
    return funcs[name](x);
   }
  }

  throw Error("Дұрыс емес өрнек");
 }

 function postfix(){
  let v=atom();
  while(take("%"))v/=100;
  return v;
 }

 function power(){
  let v=postfix();
  if(take("^"))v=Math.pow(v,unary());
  return v;
 }

 function unary(){
  if(take("+"))return unary();
  if(take("-"))return -unary();
  return power();
 }

 function term(){
  let v=unary();
  while(true){
   if(take("*"))v*=unary();
   else if(take("/")){
    const d=unary();
    if(d===0)throw Error("Нөлге бөлу");
    v/=d;
   }else break;
  }
  return v;
 }

 function expr(){
  let v=term();
  while(true){
   if(take("+"))v+=term();
   else if(take("-"))v-=term();
   else break;
  }
  return v;
 }

 if(!source)throw Error("Бос өрнек");
 const result=expr();

 if(pos!==source.length || !Number.isFinite(result)){
  throw Error("Есептеу қатесі");
 }

 return Math.abs(result)<1e-12?0:result;
}

// ======================================
// АШУ ЖӘНЕ ЖАБУ
// ======================================

function toggleCalc(type){
 const element=$("calc-"+type);
 const other=type==="basic"?"science":"basic";
 const opening=!element.classList.contains("visible");

 $("calc-"+other).classList.remove("visible");
 element.classList.toggle("visible",opening);

 if(opening){
  const rect=element.getBoundingClientRect();
  element.style.left=Math.max(0,Math.min(
   innerWidth-element.offsetWidth,rect.left
  ))+"px";
  element.style.top=Math.max(0,Math.min(
   innerHeight-element.offsetHeight,rect.top
  ))+"px";
 }
}

$("basicLaunch").onclick=()=>toggleCalc("basic");
$("scienceLaunch").onclick=()=>toggleCalc("science");

document.querySelectorAll("[data-close]").forEach(btn=>{
 btn.onclick=()=>{
  $("calc-"+btn.dataset.close).classList.remove("visible");
 };
});

// ======================================
// КАЛЬКУЛЯТОРДЫ ЖЫЛЖЫТУ
// ТЕК ҮСТІҢГІ ПАНЕЛЬДЕН
// ======================================

function makeDraggable(element){
 const handle=element.querySelector(".calc-head");
 let drag=null;

 handle.addEventListener("pointerdown",event=>{
  if(event.target.closest("button"))return;
  if(event.pointerType==="mouse"&&event.button!==0)return;

  const rect=element.getBoundingClientRect();

  drag={
   id:event.pointerId,
   x:event.clientX,
   y:event.clientY,
   left:rect.left,
   top:rect.top
  };

  handle.setPointerCapture(event.pointerId);
 });

 handle.addEventListener("pointermove",event=>{
  if(!drag||event.pointerId!==drag.id)return;

  const dx=event.clientX-drag.x;
  const dy=event.clientY-drag.y;

  element.style.left=Math.max(0,Math.min(
   innerWidth-element.offsetWidth,drag.left+dx
  ))+"px";

  element.style.top=Math.max(0,Math.min(
   innerHeight-element.offsetHeight,drag.top+dy
  ))+"px";
 });

 handle.addEventListener("pointerup",()=>{drag=null;});
 handle.addEventListener("pointercancel",()=>{drag=null;});
}

// ======================================
// ІСКЕ ҚОСУ
// ======================================

makeCalculator("basic");
makeCalculator("science");

makeDraggable($("calc-basic"));
makeDraggable($("calc-science"));

updateTimer();
render();
