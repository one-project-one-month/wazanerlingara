import type { Category, Question, Word } from "@/types/game.type.ts";

import birdPic from "@/assets/images/ImagesForWords/Animals/Bird.png";
import catPic from "@/assets/images/ImagesForWords/Animals/Cat.png";
import chickenPic from "@/assets/images/ImagesForWords/Animals/Chicken.png";
import cowPic from "@/assets/images/ImagesForWords/Animals/Cow.png";
import dogPic from "@/assets/images/ImagesForWords/Animals/Dog.png";
import elephantPic from "@/assets/images/ImagesForWords/Animals/Elephant.png";
import frogPic from "@/assets/images/ImagesForWords/Animals/Frog.png";
import horsePic from "@/assets/images/ImagesForWords/Animals/Horse.png";
import leopardPic from "@/assets/images/ImagesForWords/Animals/Leopard.png";
import pigPic from "@/assets/images/ImagesForWords/Animals/Pig.png";
import snakePic from "@/assets/images/ImagesForWords/Animals/Snake.png";
import tigerPic from "@/assets/images/ImagesForWords/Animals/Tiger.png";



export const GAME_CATEGORIES: Category[] = [
  { id: "animals", name: "တိရစ္ဆာန်များ", imageId: "animals" },
  { id: "foods", name: "အစားအသောက်", imageId: "foods" },
  { id: "locations", name: "နေရာဒေသ", imageId: "locations" },
  { id: "countries", name: "နိုင်ငံများ", imageId: "countries" },
  { id: "movies", name: "ရုပ်ရှင်", imageId: "movies" },
  { id: "jobs", name: "အလုပ်အကိုင်", imageId: "jobs" },
  { id: "technologies", name: "နည်းပညာ", imageId: "technologies" },
  { id: "imaginations", name: "စိတ်ကူးယဉ် အရာများ", imageId: "imaginations" },
  { id: "superheroes", name: "စူပါဟီးရိုးများ", imageId: "superheroes" },
  { id: "nature", name: "သဘာဝ", imageId: "nature" },
  { id: "histories", name: "သမိုင်း", imageId: "histories" },
  { id: "sports", name: "အားကစား", imageId: "sports" },
];


const animals = [
  {
    id: "",
    text: "ကြောင်",
    imageId: catPic,
    categoryId: "animals",
    hint: "အိမ်မွေး",
  },
  {
    id: "",
    text: "ခွေး",
    imageId: dogPic,
    categoryId: "animals",
    hint: "လုံခြုံရေး",
  },
  {
    id: "",
    text: "ကျား",
    imageId: tigerPic,
    categoryId: "animals",
    hint: "တော",
  },
  {
    id: "",
    text: "ဆင်",
    imageId: elephantPic,
    categoryId: "animals",
    hint: "ကြီးမား",
  },
  {
    id: "",
    text: "နွား",
    imageId: cowPic,
    categoryId: "animals",
    hint: "နို့",
  },
  {
    id: "",
    text: "မြင်း",
    imageId: horsePic,
    categoryId: "animals",
    hint: "မြန်",
  },
  {
    id: "",
    text: "ဝက်",
    imageId: pigPic,
    categoryId: "animals",
    hint: "စားသုံး",
  },
  {
    id: "",
    text: "ကျားသစ်",
    imageId: leopardPic,
    categoryId: "animals",
    hint: "စက်ကွက်",
  },
  {
    id: "",
    text: "ကြက်",
    imageId: chickenPic,
    categoryId: "animals",
    hint: "ဥ",
  },
  {
    id: "",
    text: "ငှက်",
    imageId: birdPic,
    categoryId: "animals",
    hint: "ပျံ",
  },
  {
    id: "",
    text: "မြွေ",
    imageId: snakePic,
    categoryId: "animals",
    hint: "ရှည်",
  },
  {
    id: "",
    text: "ဖား",
    imageId: frogPic,
    categoryId: "animals",
    hint: "ခုန်",
  },
  // { id: "", text: "ငါး", imageId: fishPic, categoryId: "animals", hint: "ရေ" },
  // {
  //   id: "",
  //   text: "ကလေးငယ် (လင်းယုန်)",
  //   imageId: eaglePic,
  //   categoryId: "animals",
  //   hint: "အားကြီး",
  // },
  // {
  //   id: "",
  //   text: "လိပ်",
  //   imageId: turtlePic,
  //   categoryId: "animals",
  //   hint: "အကာ",
  // },
  // {
  //   id: "",
  //   text: "သစ်ကုလားအုတ်",
  //   imageId: giraffePic,
  //   categoryId: "animals",
  //   hint: "လည်ရှည်",
  // },
  // {
  //   id: "",
  //   text: "ဇီးဘရာ",
  //   imageId: zebraPic,
  //   categoryId: "animals",
  //   hint: "ကြားကြား",
  // },
  // { id: "", text: "ဝံ", imageId: bearPic, categoryId: "animals", hint: "တော" },
  // {
  //   id: "",
  //   text: "မြွေချောင်း",
  //   imageId: crocodilePic,
  //   categoryId: "animals",
  //   hint: "ရေတော",
  // },
  // {
  //   id: "",
  //   text: "တိမ်ကြီး (ခေါင်းကြီးငှက်)",
  //   imageId: ostrichPic,
  //   categoryId: "animals",
  //   hint: "မပျံ",
  // },
  // {
  //   id: "",
  //   text: "မျောက်",
  //   imageId: monkeyPic,
  //   categoryId: "animals",
  //   hint: "တက်",
  // },
  // {
  //   id: "",
  //   text: "ကန်ဂရူး",
  //   imageId: kangarooPic,
  //   categoryId: "animals",
  //   hint: "ခုန်",
  // },
  // {
  //   id: "",
  //   text: "ပင်ဂွင်း",
  //   imageId: penguinPic,
  //   categoryId: "animals",
  //   hint: "အအေး",
  // },
  // {
  //   id: "",
  //   text: "ဝါးပန်ဒါ",
  //   imageId: pandaPic,
  //   categoryId: "animals",
  //   hint: "ဝါး",
  // },
  // {
  //   id: "",
  //   text: "မြေခွေး",
  //   imageId: foxPic,
  //   categoryId: "animals",
  //   hint: "လှည့်စား",
  // },
  // {
  //   id: "",
  //   text: "ဝံပုလွေ",
  //   imageId: wolfPic,
  //   categoryId: "animals",
  //   hint: "အုပ်စု",
  // },
  // {
  //   id: "",
  //   text: "ကြောင်လေး (မောက်စ်)",
  //   imageId: mousePic,
  //   categoryId: "animals",
  //   hint: "သေးငယ်",
  // },
  // {
  //   id: "",
  //   text: "ပျား",
  //   imageId: beePic,
  //   categoryId: "animals",
  //   hint: "ပျားရည်",
  // },
  // {
  //   id: "",
  //   text: "ပုစွန်",
  //   imageId: shrimpPic,
  //   categoryId: "animals",
  //   hint: "ရေ",
  // },
  // {
  //   id: "",
  //   text: "ကဏန်း",
  //   imageId: crabPic,
  //   categoryId: "animals",
  //   hint: "ဘေးဘက်",
  // },
  // {
  //   id: "",
  //   text: "ဆိတ်",
  //   imageId: goatPic,
  //   categoryId: "animals",
  //   hint: "တောင်",
  // },
  // {
  //   id: "",
  //   text: "သိုး",
  //   imageId: sheepPic,
  //   categoryId: "animals",
  //   hint: "မွေး",
  // },
  // {
  //   id: "",
  //   text: "နွားထီး",
  //   imageId: bullPic,
  //   categoryId: "animals",
  //   hint: "အားကြီး",
  // },
  // {
  //   id: "",
  //   text: "မြင်းကျား",
  //   imageId: donkeyPic,
  //   categoryId: "animals",
  //   hint: "သယ်ယူ",
  // },
];
const foods = [
  {
    id: "",
    text: "မုန့်ဟင်းခါး",
    imageId: null,
    categoryId: "foods",
    hint: "မနက်စာ",
  },

  {
    id: "",
    text: "ပီဇာ",
    imageId: null,
    categoryId: "foods",
    hint: "အနောက်တိုင်း",
  },
  {
    id: "",
    text: "ဟမ်ဘာဂါ",
    imageId: null,
    categoryId: "foods",
    hint: "fast food",
  },
];
const places = [
  {
    id: "",
    text: "ကျောင်း",
    imageId: null,
    categoryId: "locations",
    hint: "သင်ကြား",
  },
  {
    id: "",
    text: "ဆေးရုံ",
    imageId: null,
    categoryId: "locations",
    hint: "ကျန်းမာရေး",
  },
  {
    id: "",
    text: "စျေး",
    imageId: null,
    categoryId: "locations",
    hint: "ဝယ်ယူ",
  },
  {
    id: "",
    text: "လေဆိပ်",
    imageId: null,
    categoryId: "locations",
    hint: "လေယာဉ်",
  },
];
const countries = [
  {
    id: "",
    text: "မြန်မာ",
    imageId: null,
    categoryId: "countries",
    hint: "အာရှ",
  },
  {
    id: "",
    text: "ဂျပန်",
    imageId: null,
    categoryId: "countries",
    hint: "နည်းပညာ",
  },
  {
    id: "",
    text: "အမေရိကန်",
    imageId: null,
    categoryId: "countries",
    hint: "ကြီးမား",
  },
  {
    id: "",
    text: "ကိုရီးယား",
    imageId: null,
    categoryId: "countries",
    hint: "K-pop",
  },
];
const movies = [
  {
    id: "",
    text: "Titanic",
    imageId: null,
    categoryId: "movies",
    hint: "သင်္ဘော",
  },
  {
    id: "",
    text: "Avengers",
    imageId: null,
    categoryId: "movies",
    hint: "hero",
  },
  {
    id: "",
    text: "Harry Potter",
    imageId: null,
    categoryId: "movies",
    hint: "magic",
  },
  { id: "", text: "Frozen", imageId: null, categoryId: "movies", hint: "snow" },
];
const jobs = [
  { id: "", text: "ဆရာဝန်", imageId: null, categoryId: "jobs", hint: "ဆေးရုံ" },
  { id: "", text: "ဆရာ", imageId: null, categoryId: "jobs", hint: "ကျောင်း" },
  { id: "", text: "ရဲ", imageId: null, categoryId: "jobs", hint: "လုံခြုံရေး" },
  {
    id: "",
    text: "အင်ဂျင်နီယာ",
    imageId: null,
    categoryId: "jobs",
    hint: "တည်ဆောက်",
  },
];
const technologies = [
  {
    id: "",
    text: "မိုဘိုင်းဖုန်း",
    imageId: null,
    categoryId: "technologies",
    hint: "ဆက်သွယ်",
  },
  {
    id: "",
    text: "လက်ပ်တော့",
    imageId: null,
    categoryId: "technologies",
    hint: "အလုပ်",
  },
  {
    id: "",
    text: "အင်တာနက်",
    imageId: null,
    categoryId: "technologies",
    hint: "online",
  },
  {
    id: "",
    text: "AI",
    imageId: null,
    categoryId: "technologies",
    hint: "smart",
  },
];
const imaginations = [
  {
    id: "",
    text: "နဂါး",
    imageId: null,
    categoryId: "imaginations",
    hint: "ပျံနိုင်",
  },
  {
    id: "",
    text: "ဝိညာဉ်",
    imageId: null,
    categoryId: "imaginations",
    hint: "မမြင်ရ",
  },
  {
    id: "",
    text: "မယ်မင်း",
    imageId: null,
    categoryId: "imaginations",
    hint: "ပုံပြင်",
  },
  {
    id: "",
    text: "ဒိုင်နိုဆော",
    imageId: null,
    categoryId: "imaginations",
    hint: "ရှေးခေတ်",
  },
];
const superHeroes = [
  { id: "", text: "Superman", imageId: null, categoryId: "supes", hint: "ပျံ" },
  { id: "", text: "Batman", imageId: null, categoryId: "supes", hint: "dark" },
  {
    id: "",
    text: "Spider-Man",
    imageId: null,
    categoryId: "supes",
    hint: "web",
  },
  {
    id: "",
    text: "Iron Man",
    imageId: null,
    categoryId: "supes",
    hint: "tech suit",
  },
];
const nature = [
  { id: "", text: "တောင်", imageId: null, categoryId: "nature", hint: "မြင့်" },
  { id: "", text: "မြစ်", imageId: null, categoryId: "nature", hint: "ရေ" },
  { id: "", text: "သစ်တော", imageId: null, categoryId: "nature", hint: "အပင်" },
  {
    id: "",
    text: "ပင်လယ်",
    imageId: null,
    categoryId: "nature",
    hint: "ကြီးမား",
  },
];
const histories = [
  {
    id: "",
    text: "ဘုရင့်နောင်",
    imageId: null,
    categoryId: "histories",
    hint: "ဘုရင်",
  },
  {
    id: "",
    text: "ပုဂံ",
    imageId: null,
    categoryId: "histories",
    hint: "ရှေးဟောင်း",
  },
  {
    id: "",
    text: "တော်လှန်ရေး",
    imageId: null,
    categoryId: "histories",
    hint: "ပြောင်းလဲ",
  },
  {
    id: "",
    text: "အင်္ဂလိပ်ခေတ်",
    imageId: null,
    categoryId: "histories",
    hint: "ကိုလိုနီ",
  },
];
const sports = [
  { id: "", text: "ဘောလုံး", imageId: null, categoryId: "sports", hint: "ကန်" },
  {
    id: "",
    text: "ဘတ်စကက်ဘော",
    imageId: null,
    categoryId: "sports",
    hint: "ခုန်",
  },
  {
    id: "",
    text: "တင်နစ်",
    imageId: null,
    categoryId: "sports",
    hint: "ရိုက်",
  },
  { id: "", text: "ပြေး", imageId: null, categoryId: "sports", hint: "မြန်" },
];

const rawWords: Word[] = [
  ...animals,
  ...foods,
  ...places,
  ...countries,
  ...movies,
  ...jobs,
  ...technologies,
  ...imaginations,
  ...superHeroes,
  ...nature,
  ...histories,
  ...sports,
];

const rawQuestions: Question[] = [
  // animals
  {
    id: "",
    text: "ဘယ်တိရစ္ဆာန်တွေကို အိမ်မှာမွေးကြလဲ",
    imageId: null,
    categoryId: "animals",
    hint: "တိရစ္ဆာန်",
  },
  {
    id: "",
    text: "တောထဲမှာ ဘာတိရစ္ဆာန်တွေရှိလဲ",
    imageId: null,
    categoryId: "animals",
    hint: "wild",
  },
  {
    id: "",
    text: "ဘယ်တိရစ္ဆာန်က ကြီးမားဆုံးလဲ",
    imageId: null,
    categoryId: "animals",
    hint: "big",
  },
  {
    id: "",
    text: "ဘယ်တိရစ္ဆာန်က အမြန်ဆုံးလဲ",
    imageId: null,
    categoryId: "animals",
    hint: "fast",
  },

  // foods
  {
    id: "",
    text: "မနက်စာအတွက် ဘာစားကြလဲ",
    imageId: null,
    categoryId: "foods",
    hint: "စား",
  },
  {
    id: "",
    text: "နွေရာသီမှာ ဘာအစားအစာစားကြလဲ",
    imageId: null,
    categoryId: "foods",
    hint: "အေး",
  },
  {
    id: "",
    text: "fast food တွေက ဘာတွေရှိလဲ",
    imageId: null,
    categoryId: "foods",
    hint: "quick",
  },
  {
    id: "",
    text: "သင်ကြိုက်တဲ့ အစားအစာကဘာလဲ",
    imageId: null,
    categoryId: "foods",
    hint: "ကြိုက်",
  },

  // locations
  {
    id: "",
    text: "စာသင်ဖို့ ဘယ်နေရာကို သွားလဲ",
    imageId: null,
    categoryId: "locations",
    hint: "study",
  },
  {
    id: "",
    text: "နာမကျန်းရင် ဘယ်သွားလဲ",
    imageId: null,
    categoryId: "locations",
    hint: "health",
  },
  {
    id: "",
    text: "ဝယ်ယူဖို့ ဘယ်နေရာကို သွားလဲ",
    imageId: null,
    categoryId: "locations",
    hint: "buy",
  },
  {
    id: "",
    text: "လေယာဉ်စီးဖို့ ဘယ်သွားလဲ",
    imageId: null,
    categoryId: "locations",
    hint: "travel",
  },

  // countries
  {
    id: "",
    text: "သင်ဘယ်နိုင်ငံမှာနေသလဲ",
    imageId: null,
    categoryId: "countries",
    hint: "country",
  },
  {
    id: "",
    text: "နည်းပညာကောင်းတဲ့နိုင်ငံကဘာလဲ",
    imageId: null,
    categoryId: "countries",
    hint: "tech",
  },
  {
    id: "",
    text: "အကြီးဆုံးနိုင်ငံကဘာလဲ",
    imageId: null,
    categoryId: "countries",
    hint: "big",
  },
  {
    id: "",
    text: "K-pop က ဘယ်နိုင်ငံကလဲ",
    imageId: null,
    categoryId: "countries",
    hint: "music",
  },

  // movies
  {
    id: "",
    text: "သင်ကြိုက်တဲ့ ရုပ်ရှင်ကဘာလဲ",
    imageId: null,
    categoryId: "movies",
    hint: "movie",
  },
  {
    id: "",
    text: "superhero movie တွေကဘာလဲ",
    imageId: null,
    categoryId: "movies",
    hint: "hero",
  },
  {
    id: "",
    text: "magic ပါတဲ့ ရုပ်ရှင်တွေကဘာလဲ",
    imageId: null,
    categoryId: "movies",
    hint: "magic",
  },
  {
    id: "",
    text: "animation movie တွေကဘာလဲ",
    imageId: null,
    categoryId: "movies",
    hint: "cartoon",
  },

  // jobs
  {
    id: "",
    text: "ဆေးရုံမှာ ဘယ်သူအလုပ်လုပ်လဲ",
    imageId: null,
    categoryId: "jobs",
    hint: "health",
  },
  {
    id: "",
    text: "ကျောင်းမှာ ဘယ်သူသင်ပေးလဲ",
    imageId: null,
    categoryId: "jobs",
    hint: "teach",
  },
  {
    id: "",
    text: "လုံခြုံရေးကို ဘယ်သူတာဝန်ယူလဲ",
    imageId: null,
    categoryId: "jobs",
    hint: "safe",
  },
  {
    id: "",
    text: "တည်ဆောက်တဲ့အလုပ်ကဘာလဲ",
    imageId: null,
    categoryId: "jobs",
    hint: "build",
  },

  // technologies
  {
    id: "",
    text: "ဆက်သွယ်ဖို့ ဘာအသုံးပြုလဲ",
    imageId: null,
    categoryId: "technologies",
    hint: "phone",
  },
  {
    id: "",
    text: "အလုပ်လုပ်ဖို့ laptop ကို ဘာကြောင့်သုံးလဲ",
    imageId: null,
    categoryId: "technologies",
    hint: "work",
  },
  {
    id: "",
    text: "internet က ဘာအတွက်လဲ",
    imageId: null,
    categoryId: "technologies",
    hint: "online",
  },
  {
    id: "",
    text: "AI ဆိုတာဘာလဲ",
    imageId: null,
    categoryId: "technologies",
    hint: "smart",
  },

  // imaginations
  {
    id: "",
    text: "ပျံနိုင်တဲ့ စိတ်ကူးယဉ်အရာတွေကဘာလဲ",
    imageId: null,
    categoryId: "imaginations",
    hint: "fly",
  },
  {
    id: "",
    text: "မမြင်ရတဲ့အရာတွေကဘာလဲ",
    imageId: null,
    categoryId: "imaginations",
    hint: "invisible",
  },
  {
    id: "",
    text: "ပုံပြင်ထဲက အရာတွေကဘာလဲ",
    imageId: null,
    categoryId: "imaginations",
    hint: "story",
  },
  {
    id: "",
    text: "ရှေးခေတ်သတ္တဝါတွေကဘာလဲ",
    imageId: null,
    categoryId: "imaginations",
    hint: "ancient",
  },

  // supes
  {
    id: "",
    text: "ဘယ်ဟီးရိုးက ပျံနိုင်လဲ",
    imageId: null,
    categoryId: "supes",
    hint: "fly",
  },
  {
    id: "",
    text: "dark hero က ဘယ်သူလဲ",
    imageId: null,
    categoryId: "supes",
    hint: "night",
  },
  {
    id: "",
    text: "web သုံးတဲ့ hero ကဘယ်သူလဲ",
    imageId: null,
    categoryId: "supes",
    hint: "spider",
  },
  {
    id: "",
    text: "tech suit ဝတ်တဲ့ hero ကဘယ်သူလဲ",
    imageId: null,
    categoryId: "supes",
    hint: "iron",
  },

  // nature
  {
    id: "",
    text: "မြင့်တဲ့သဘာဝအရာကဘာလဲ",
    imageId: null,
    categoryId: "nature",
    hint: "high",
  },
  {
    id: "",
    text: "ရေစီးတဲ့အရာကဘာလဲ",
    imageId: null,
    categoryId: "nature",
    hint: "water",
  },
  {
    id: "",
    text: "အပင်များများရှိတဲ့နေရာကဘာလဲ",
    imageId: null,
    categoryId: "nature",
    hint: "forest",
  },
  {
    id: "",
    text: "ကြီးမားတဲ့ရေကဘာလဲ",
    imageId: null,
    categoryId: "nature",
    hint: "sea",
  },

  // histories
  {
    id: "",
    text: "ရှေးခေတ်ဘုရင်ကဘယ်သူလဲ",
    imageId: null,
    categoryId: "histories",
    hint: "king",
  },
  {
    id: "",
    text: "ရှေးဟောင်းမြို့ကဘာလဲ",
    imageId: null,
    categoryId: "histories",
    hint: "ancient",
  },
  {
    id: "",
    text: "ပြောင်းလဲမှုဖြစ်တဲ့အရာကဘာလဲ",
    imageId: null,
    categoryId: "histories",
    hint: "change",
  },
  {
    id: "",
    text: "ကိုလိုနီခေတ်ဆိုတာဘာလဲ",
    imageId: null,
    categoryId: "histories",
    hint: "colonial",
  },

  // sports
  {
    id: "",
    text: "ဘယ်အားကစားကို ကန်ကစားလဲ",
    imageId: null,
    categoryId: "sports",
    hint: "kick",
  },
  {
    id: "",
    text: "ဘယ်အားကစားမှာ လှန်ရလဲ",
    imageId: null,
    categoryId: "sports",
    hint: "basket",
  },
  {
    id: "",
    text: "ဘယ်အားကစားမှာ ရိုက်ရလဲ",
    imageId: null,
    categoryId: "sports",
    hint: "hit",
  },
  {
    id: "",
    text: "ဘယ်အားကစားမှာ ပြေးရလဲ",
    imageId: null,
    categoryId: "sports",
    hint: "run",
  },
];

export const words = rawWords.map((word: Word, index) => ({
  ...word,
  id: `${word.categoryId}-${word.text}-${index}`,
}));

export const questions = rawQuestions.map((question: Question, index) => ({
  ...question,
  id: `${question.categoryId}-${question.text}-${index}`,
}));
