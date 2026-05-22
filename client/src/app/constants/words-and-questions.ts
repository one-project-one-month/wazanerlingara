import type { Category, Question, Word } from "@/types/game.type.ts";

//animals
import bearPic from "@/assets/images/ImagesForWords/Animals/Bear.png";
import birdPic from "@/assets/images/ImagesForWords/Animals/Bird.png";
import catPic from "@/assets/images/ImagesForWords/Animals/Cat.png";
import chickenPic from "@/assets/images/ImagesForWords/Animals/Chicken.png";
import cowPic from "@/assets/images/ImagesForWords/Animals/Cow.png";
import crocodilePic from "@/assets/images/ImagesForWords/Animals/Crocodile.png";
import dogPic from "@/assets/images/ImagesForWords/Animals/Dog.png";
import eaglePic from "@/assets/images/ImagesForWords/Animals/Eagle.png";
import elephantPic from "@/assets/images/ImagesForWords/Animals/Elephant.png";
import fishPic from "@/assets/images/ImagesForWords/Animals/Fish.png";
import frogPic from "@/assets/images/ImagesForWords/Animals/Frog.png";
import giraffePic from "@/assets/images/ImagesForWords/Animals/Giraffe.png";
import horsePic from "@/assets/images/ImagesForWords/Animals/Horse.png";
import kangarooPic from "@/assets/images/ImagesForWords/Animals/Kangaroo.png";
import leopardPic from "@/assets/images/ImagesForWords/Animals/Leopard.png";
import monkeyPic from "@/assets/images/ImagesForWords/Animals/Monkey.png";
import ostrichPic from "@/assets/images/ImagesForWords/Animals/Ostrich.png";
import penguinPic from "@/assets/images/ImagesForWords/Animals/Penguin.png";
import pigPic from "@/assets/images/ImagesForWords/Animals/Pig.png";
import snakePic from "@/assets/images/ImagesForWords/Animals/Snake.png";
import tigerPic from "@/assets/images/ImagesForWords/Animals/Tiger.png";
import turtlePic from "@/assets/images/ImagesForWords/Animals/Turtle.png";
import zebraPic from "@/assets/images/ImagesForWords/Animals/Zebra.png";

//foods
import montHinKharPic from "@/assets/images/ImagesForWords/Foods/mont-hin-khar.png";
import pizzaPic from "@/assets/images/ImagesForWords/Foods/pizza.png";
import burgerPic from "@/assets/images/ImagesForWords/Foods/burger.png";

//places
import schoolPic from "@/assets/images/ImagesForWords/Places(နေရာဒေသ)/School.png";
import hospitalPic from "@/assets/images/ImagesForWords/Places(နေရာဒေသ)/Hospital (1).jpg";
import marketPic from "@/assets/images/ImagesForWords/Places(နေရာဒေသ)/Market.jpg";
import airPortPic from "@/assets/images/ImagesForWords/Places(နေရာဒေသ)/Airport.jpg";

//countries
import myanmar from "@/assets/images/ImagesForWords/Countries/Myanmar.jpg";
import unitedStates from "@/assets/images/ImagesForWords/Countries/USA.jpg";
import china from "@/assets/images/ImagesForWords/Countries/China.jpg";
import japan from "@/assets/images/ImagesForWords/Countries/Japan.jpg";
import southKorea from "@/assets/images/ImagesForWords/Countries/Korea.jpg";
import england from "@/assets/images/ImagesForWords/Countries/England.jpg";
import france from "@/assets/images/ImagesForWords/Countries/Frence.jpg";
import germany from "@/assets/images/ImagesForWords/Countries/Germany.jpg";
import italy from "@/assets/images/ImagesForWords/Countries/Italy.jpg";
import spain from "@/assets/images/ImagesForWords/Countries/Spain.jpg";
import brazil from "@/assets/images/ImagesForWords/Countries/Brazil.jpg";
import argentina from "@/assets/images/ImagesForWords/Countries/Argentina.jpg";
import russia from "@/assets/images/ImagesForWords/Countries/Russia.jpg";
import india from "@/assets/images/ImagesForWords/Countries/India.jpg";
import thailand from "@/assets/images/ImagesForWords/Countries/Thailand.jpg";
import singapore from "@/assets/images/ImagesForWords/Countries/Singpore.jpg";
import malaysia from "@/assets/images/ImagesForWords/Countries/Malaysia.jpg";
import vietnam from "@/assets/images/ImagesForWords/Countries/Vietnam.jpg";
import canada from "@/assets/images/ImagesForWords/Countries/Canada flag_.jpg";
import saudiArabia from "@/assets/images/ImagesForWords/Countries/Saudi.jpg";
import egypt from "@/assets/images/ImagesForWords/Countries/Egypt.jpg";
import southAfrica from "@/assets/images/ImagesForWords/Countries/SouthAfrica.jpg";
import nepal from "@/assets/images/ImagesForWords/Countries/Nepal.jpg";
import pakistan from "@/assets/images/ImagesForWords/Countries/Pakistan.jpg";
import indonesia from "@/assets/images/ImagesForWords/Countries/Indonesia.jpg";

//movies
import harryPotter from "@/assets/images/ImagesForWords/Movies/HarryPotter.jpg";
import frozen from "@/assets/images/ImagesForWords/Movies/Frozen.jpg";
import titanic from "@/assets/images/ImagesForWords/Movies/Titanic.jpg";
import avengers from "@/assets/images/ImagesForWords/Movies/Avengers.jpg";

//jobs
import doctor from "@/assets/images/ImagesForWords/Jobs/Doctor.png";
import teacher from "@/assets/images/ImagesForWords/Jobs/Teacher.png";
import engineer from "@/assets/images/ImagesForWords/Jobs/Engineer.png";
import police from "@/assets/images/ImagesForWords/Jobs/Police.png";

//technologies
import mobilePhone from "@/assets/images/ImagesForWords/Technologies/MobilePhone.png";
import laptop from "@/assets/images/ImagesForWords/Technologies/Laptop.png";
import ai from "@/assets/images/ImagesForWords/Technologies/Ai.png";
import internet from "@/assets/images/ImagesForWords/Technologies/Internet.jpg";

//imaginations
import dragon from "@/assets/images/ImagesForWords/Imaginations(စိတ်ကူးယဉ်အရာများ)/Dragon.png";
import dinosaur from "@/assets/images/ImagesForWords/Imaginations(စိတ်ကူးယဉ်အရာများ)/Dinossaur.png";
import beluu from "@/assets/images/ImagesForWords/Imaginations(စိတ်ကူးယဉ်အရာများ)/BeLuu.png";
import ghost from "@/assets/images/ImagesForWords/Imaginations(စိတ်ကူးယဉ်အရာများ)/Ghost.png";
import godzilla from "@/assets/images/ImagesForWords/Imaginations(စိတ်ကူးယဉ်အရာများ)/Godzilla.png";

//superheros
import superman from "@/assets/images/ImagesForWords/SuperHeros/superman.png";
import batman from "@/assets/images/ImagesForWords/SuperHeros/batman.png";
import spiderman from "@/assets/images/ImagesForWords/SuperHeros/spiderman.png";
import ironMan from "@/assets/images/ImagesForWords/SuperHeros/ironman.png";
import captainAmerica from "@/assets/images/ImagesForWords/SuperHeros/captainamerica.png";
import thor from "@/assets/images/ImagesForWords/SuperHeros/thor.png";
import hulk from "@/assets/images/ImagesForWords/SuperHeros/hulk.png";
import doctorStrange from "@/assets/images/ImagesForWords/SuperHeros/doctorstrange.png";
import blackPanther from "@/assets/images/ImagesForWords/SuperHeros/blackpanther.png";
import flash from "@/assets/images/ImagesForWords/SuperHeros/flash.png";
import wonderWoman from "@/assets/images/ImagesForWords/SuperHeros/wonderwoman.png";
import aquaman from "@/assets/images/ImagesForWords/SuperHeros/aquaman.png";
import greenLantern from "@/assets/images/ImagesForWords/SuperHeros/greenlantern.jpg";
import wolverine from "@/assets/images/ImagesForWords/SuperHeros/wolverine.png";
import deadpool from "@/assets/images/ImagesForWords/SuperHeros/deadpool.png";
import antMan from "@/assets/images/ImagesForWords/SuperHeros/antman.png";
import captainMarvel from "@/assets/images/ImagesForWords/SuperHeros/captainmarvel.png";
import blackWidow from "@/assets/images/ImagesForWords/SuperHeros/blackwidow.png";
import shazam from "@/assets/images/ImagesForWords/SuperHeros/shazam.png";
import loki from "@/assets/images/ImagesForWords/SuperHeros/loki.png";

//nature
import mountain from "@/assets/images/ImagesForWords/Nature/mountain.png";
import river from "@/assets/images/ImagesForWords/Nature/river.jpg";
import forest from "@/assets/images/ImagesForWords/Nature/forest.jpg";
import sea from "@/assets/images/ImagesForWords/Nature/sea.jpg";

//histories
import bagan from "@/assets/images/ImagesForWords/History/Bagan.jpg";
import bayinnaung from "@/assets/images/ImagesForWords/History/Bayinnaung.png";
import kyansitthar from "@/assets/images/ImagesForWords/History/KyanSittThar.png";

//sports
import football from "@/assets/images/ImagesForWords/Sports/footabll.png";
import basketball from "@/assets/images/ImagesForWords/Sports/basketball.png";
import run from "@/assets/images/ImagesForWords/Sports/run.png";
import tennis from "@/assets/images/ImagesForWords/Sports/tennis.png";

export const GAME_CATEGORIES: Category[] = [
  { id: "all", name: "အားလုံး", imageId: "all" },
  { id: "animals", name: "တိရစ္ဆာန်များ", imageId: "animals" },
  { id: "foods", name: "အစားအသောက်", imageId: "foods" },
  { id: "locations", name: "နေရာဒေသ", imageId: "locations" },
  { id: "countries", name: "နိုင်ငံများ", imageId: "countries" },
  { id: "movies", name: "ရုပ်ရှင်", imageId: "movies" },
  { id: "jobs", name: "အလုပ်အကိုင်", imageId: "jobs" },
  { id: "technologies", name: "နည်းပညာ", imageId: "technologies" },
  { id: "imaginations", name: "စိတ်ကူးယဉ် အရာများ", imageId: "imaginations" },
  { id: "supes", name: "စူပါဟီးရိုးများ", imageId: "superheroes" },
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
  { id: "", text: "ငါး", imageId: fishPic, categoryId: "animals", hint: "ရေ" },
  {
    id: "",
    text: "လင်းယုန်",
    imageId: eaglePic,
    categoryId: "animals",
    hint: "ပျံ",
  },
  {
    id: "",
    text: "လိပ်",
    imageId: turtlePic,
    categoryId: "animals",
    hint: "ယက်",
  },
  {
    id: "",
    text: "သစ်ကုလားအုတ်",
    imageId: giraffePic,
    categoryId: "animals",
    hint: "ရှည်",
  },
  {
    id: "",
    text: "မြင်းကျား",
    imageId: zebraPic,
    categoryId: "animals",
    hint: "ကြား",
  },
  {
    id: "",
    text: "ဝက်ဝံ",
    imageId: bearPic,
    categoryId: "animals",
    hint: "တော",
  },
  {
    id: "",
    text: "မိကျောင်း",
    imageId: crocodilePic,
    categoryId: "animals",
    hint: "ရေ",
  },
  {
    id: "",
    text: "ငှက်ကုလားအုတ်",
    imageId: ostrichPic,
    categoryId: "animals",
    hint: "မြန်",
  },
  {
    id: "",
    text: "မျောက်",
    imageId: monkeyPic,
    categoryId: "animals",
    hint: "တက်",
  },
  {
    id: "",
    text: "သားပိုက်ကောင်",
    imageId: kangarooPic,
    categoryId: "animals",
    hint: "ခုန်",
  },
  {
    id: "",
    text: "ပင်ဂွင်း",
    imageId: penguinPic,
    categoryId: "animals",
    hint: "အေး",
  },
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
    imageId: montHinKharPic,
    categoryId: "foods",
    hint: "မနက်စာ",
  },

  {
    id: "",
    text: "ပီဇာ",
    imageId: pizzaPic,
    categoryId: "foods",
    hint: "အနောက်တိုင်း",
  },
  {
    id: "",
    text: "ဟမ်ဘာဂါ",
    imageId: burgerPic,
    categoryId: "foods",
    hint: "fast food",
  },
];
const places = [
  {
    id: "",
    text: "ကျောင်း",
    imageId: schoolPic,
    categoryId: "locations",
    hint: "သင်ကြား",
  },
  {
    id: "",
    text: "ဆေးရုံ",
    imageId: hospitalPic,
    categoryId: "locations",
    hint: "ကျန်းမာရေး",
  },
  {
    id: "",
    text: "စျေး",
    imageId: marketPic,
    categoryId: "locations",
    hint: "ဝယ်ယူ",
  },
  {
    id: "",
    text: "လေဆိပ်",
    imageId: airPortPic,
    categoryId: "locations",
    hint: "လေယာဉ်",
  },
];
const countries = [
  {
    id: "",
    text: "အမေရိကန်",
    imageId: unitedStates,
    categoryId: "countries",
    hint: "Hollywood",
  },
  {
    id: "",
    text: "တရုတ်",
    imageId: china,
    categoryId: "countries",
    hint: "လူဦးရေများ",
  },
  {
    id: "",
    text: "ဂျပန်",
    imageId: japan,
    categoryId: "countries",
    hint: "Anime",
  },
  {
    id: "",
    text: "ကိုရီးယား",
    imageId: southKorea,
    categoryId: "countries",
    hint: "K-pop",
  },
  {
    id: "",
    text: "အင်္ဂလန်",
    imageId: england,
    categoryId: "countries",
    hint: "Premier League",
  },
  {
    id: "",
    text: "ပြင်သစ်",
    imageId: france,
    categoryId: "countries",
    hint: "Eiffel Tower",
  },
  {
    id: "",
    text: "ဂျာမနီ",
    imageId: germany,
    categoryId: "countries",
    hint: "BMW",
  },
  {
    id: "",
    text: "အီတလီ",
    imageId: italy,
    categoryId: "countries",
    hint: "Pizza",
  },
  {
    id: "",
    text: "စပိန်",
    imageId: spain,
    categoryId: "countries",
    hint: "Real Madrid",
  },
  {
    id: "",
    text: "ဘရာဇီး",
    imageId: brazil,
    categoryId: "countries",
    hint: "Football",
  },
  {
    id: "",
    text: "အာဂျင်တီးနား",
    imageId: argentina,
    categoryId: "countries",
    hint: "Messi",
  },
  {
    id: "",
    text: "ရုရှား",
    imageId: russia,
    categoryId: "countries",
    hint: "အေး",
  },
  {
    id: "",
    text: "အိန္ဒိယ",
    imageId: india,
    categoryId: "countries",
    hint: "Bollywood",
  },
  {
    id: "",
    text: "ထိုင်း",
    imageId: thailand,
    categoryId: "countries",
    hint: "ခရီးသွား",
  },
  {
    id: "",
    text: "စင်ကာပူ",
    imageId: singapore,
    categoryId: "countries",
    hint: "Marina Bay",
  },
  {
    id: "",
    text: "မလေးရှား",
    imageId: malaysia,
    categoryId: "countries",
    hint: "Twin Towers",
  },
  {
    id: "",
    text: "ဗီယက်နမ်",
    imageId: vietnam,
    categoryId: "countries",
    hint: "Pho",
  },
  {
    id: "",
    text: "ကနေဒါ",
    imageId: canada,
    categoryId: "countries",
    hint: "Maple",
  },
  {
    id: "",
    text: "ဆော်ဒီအာရေးဗီးယား",
    imageId: saudiArabia,
    categoryId: "countries",
    hint: "ရေနံ",
  },
  {
    id: "",
    text: "အီဂျစ်",
    imageId: egypt,
    categoryId: "countries",
    hint: "Pyramid",
  },
  {
    id: "",
    text: "တောင်အာဖရိက",
    imageId: southAfrica,
    categoryId: "countries",
    hint: "Safari",
  },
  {
    id: "",
    text: "မြန်မာ",
    imageId: myanmar,
    categoryId: "countries",
    hint: "ရွှေတိဂုံ",
  },
  {
    id: "",
    text: "နီပေါ",
    imageId: nepal,
    categoryId: "countries",
    hint: "Everest",
  },
  {
    id: "",
    text: "ပါကစ္စတန်",
    imageId: pakistan,
    categoryId: "countries",
    hint: "Cricket",
  },
  {
    id: "",
    text: "အင်ဒိုနီးရှား",
    imageId: indonesia,
    categoryId: "countries",
    hint: "ကျွန်းများ",
  },
];
const movies = [
  {
    id: "",
    text: "Titanic",
    imageId: titanic,
    categoryId: "movies",
    hint: "သင်္ဘော",
  },
  {
    id: "",
    text: "Avengers",
    imageId: avengers,
    categoryId: "movies",
    hint: "hero",
  },
  {
    id: "",
    text: "Harry Potter",
    imageId: harryPotter,
    categoryId: "movies",
    hint: "magic",
  },
  {
    id: "",
    text: "Frozen",
    imageId: frozen,
    categoryId: "movies",
    hint: "snow",
  },
];
const jobs = [
  {
    id: "",
    text: "ဆရာဝန်",
    imageId: doctor,
    categoryId: "jobs",
    hint: "ဆေးရုံ",
  },
  {
    id: "",
    text: "ဆရာ",
    imageId: teacher,
    categoryId: "jobs",
    hint: "ကျောင်း",
  },
  {
    id: "",
    text: "ရဲ",
    imageId: police,
    categoryId: "jobs",
    hint: "လုံခြုံရေး",
  },
  {
    id: "",
    text: "အင်ဂျင်နီယာ",
    imageId: engineer,
    categoryId: "jobs",
    hint: "တည်ဆောက်",
  },
];
const technologies = [
  {
    id: "",
    text: "မိုဘိုင်းဖုန်း",
    imageId: mobilePhone,
    categoryId: "technologies",
    hint: "ဆက်သွယ်",
  },
  {
    id: "",
    text: "လက်ပ်တော့",
    imageId: laptop,
    categoryId: "technologies",
    hint: "အလုပ်",
  },
  {
    id: "",
    text: "အင်တာနက်",
    imageId: internet,
    categoryId: "technologies",
    hint: "online",
  },
  {
    id: "",
    text: "AI",
    imageId: ai,
    categoryId: "technologies",
    hint: "smart",
  },
];
const imaginations = [
  {
    id: "",
    text: "နဂါး",
    imageId: dragon,
    categoryId: "imaginations",
    hint: "ပျံနိုင်",
  },
  {
    id: "",
    text: "ဝိညာဉ်",
    imageId: ghost,
    categoryId: "imaginations",
    hint: "မမြင်ရ",
  },
  {
    id: "",
    text: "ဘီလူး",
    imageId: beluu,
    categoryId: "imaginations",
    hint: "ပုံပြင်",
  },
  {
    id: "",
    text: " ဂေါ်ဇီလာ",
    imageId: godzilla,
    categoryId: "imaginations",
    hint: "မွန်းစတား",
  },
  {
    id: "",
    text: "ဒိုင်နိုဆော",
    imageId: dinosaur,
    categoryId: "imaginations",
    hint: "ရှေးခေတ်",
  },
];
const superHeroes = [
  {
    id: "",
    text: "Superman",
    imageId: superman,
    categoryId: "supes",
    hint: "ပျံ",
  },
  {
    id: "",
    text: "Batman",
    imageId: batman,
    categoryId: "supes",
    hint: "dark",
  },
  {
    id: "",
    text: "Spider-Man",
    imageId: spiderman,
    categoryId: "supes",
    hint: "web",
  },
  {
    id: "",
    text: "Iron Man",
    imageId: ironMan,
    categoryId: "supes",
    hint: "tech suit",
  },
  {
    id: "",
    text: "Captain America",
    imageId: captainAmerica,
    categoryId: "supes",
    hint: "shield",
  },
  {
    id: "",
    text: "Thor",
    imageId: thor,
    categoryId: "supes",
    hint: "hammer",
  },
  {
    id: "",
    text: "Hulk",
    imageId: hulk,
    categoryId: "supes",
    hint: "green",
  },
  {
    id: "",
    text: "Doctor Strange",
    imageId: doctorStrange,
    categoryId: "supes",
    hint: "magic",
  },
  {
    id: "",
    text: "Black Panther",
    imageId: blackPanther,
    categoryId: "supes",
    hint: "Wakanda",
  },
  {
    id: "",
    text: "Flash",
    imageId: flash,
    categoryId: "supes",
    hint: "speed",
  },
  {
    id: "",
    text: "Wonder Woman",
    imageId: wonderWoman,
    categoryId: "supes",
    hint: "lasso",
  },
  {
    id: "",
    text: "Aquaman",
    imageId: aquaman,
    categoryId: "supes",
    hint: "ocean",
  },
  {
    id: "",
    text: "Green Lantern",
    imageId: greenLantern,
    categoryId: "supes",
    hint: "ring",
  },
  {
    id: "",
    text: "Wolverine",
    imageId: wolverine,
    categoryId: "supes",
    hint: "claws",
  },
  {
    id: "",
    text: "Deadpool",
    imageId: deadpool,
    categoryId: "supes",
    hint: "funny",
  },
  {
    id: "",
    text: "Ant-Man",
    imageId: antMan,
    categoryId: "supes",
    hint: "small",
  },
  {
    id: "",
    text: "Captain Marvel",
    imageId: captainMarvel,
    categoryId: "supes",
    hint: "cosmic",
  },
  {
    id: "",
    text: "Black Widow",
    imageId: blackWidow,
    categoryId: "supes",
    hint: "spy",
  },
  {
    id: "",
    text: "Shazam",
    imageId: shazam,
    categoryId: "supes",
    hint: "lightning",
  },
  {
    id: "",
    text: "Loki",
    imageId: loki,
    categoryId: "supes",
    hint: "trickster",
  },
];
const nature = [
  {
    id: "",
    text: "တောင်",
    imageId: mountain,
    categoryId: "nature",
    hint: "မြင့်",
  },
  { id: "", text: "မြစ်", imageId: river, categoryId: "nature", hint: "ရေ" },
  {
    id: "",
    text: "သစ်တော",
    imageId: forest,
    categoryId: "nature",
    hint: "အပင်",
  },
  {
    id: "",
    text: "ပင်လယ်",
    imageId: sea,
    categoryId: "nature",
    hint: "ကြီးမား",
  },
];
const histories = [
  {
    id: "",
    text: "ဘုရင့်နောင်",
    imageId: bayinnaung,
    categoryId: "histories",
    hint: "ဘုရင်",
  },
  {
    id: "",
    text: "ပုဂံ",
    imageId: bagan,
    categoryId: "histories",
    hint: "ရှေးဟောင်း",
  },
  {
    id: "",
    text: "ကျန်စစ်သား",
    imageId: kyansitthar,
    categoryId: "histories",
    hint: "ဘုရင်",
  },
];
const sports = [
  {
    id: "",
    text: "ဘောလုံး",
    imageId: football,
    categoryId: "sports",
    hint: "ကန်",
  },
  {
    id: "",
    text: "ဘတ်စကက်ဘော",
    imageId: basketball,
    categoryId: "sports",
    hint: "ခုန်",
  },
  {
    id: "",
    text: "တင်းနစ်",
    imageId: tennis,
    categoryId: "sports",
    hint: "ရိုက်",
  },
  { id: "", text: "ပြေး", imageId: run, categoryId: "sports", hint: "မြန်" },
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
