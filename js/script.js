import playList from "./playList.js"
const body = document.querySelector('body');
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');

const time = document.querySelector('.time');
const date = document.querySelector('.date');

const greetingContainer = document.querySelector('.greeting-container')
const greeting = document.querySelector('.greeting');
const userName = document.querySelector('.name');

const weather = document.querySelector('.weather');
const city = document.querySelector('.city');
const weatherContainer = document.querySelector('.description-container')
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const windSpeed = document.querySelector('.wind-speed');
const humidity = document.querySelector('.humidity');
const weatherError = document.querySelector('.weather-error');


const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');


const player = document.querySelector('.player');
const playListContainer = document.querySelector('.play-list');
const playButton = document.querySelector('.play');
const prevButton = document.querySelector('.play-prev');
const nextButton = document.querySelector('.play-next');

const songName = document.querySelector('.player-song_name');

const songTime = document.querySelector('.player-time');
const durationWrapper = document.querySelector('.player-duration_wrapper');
const soundStrip = document.querySelector('.player-duration_strip');

const fullTime = document.querySelector('.player-full_time');
const activeTime = document.querySelector('.player-active_time');

const volumeWrapper = document.querySelector('.player-volume_wrapper');
const volumeStrip = document.querySelector('.player-volume_strip');
const volumePic = document.querySelector('.player-volume_pic ');

const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');

// settings

const settings = document.querySelector('.settings');
const settingsWrapper = document.querySelector('.settings-wrapper');
const settingsIcon = document.querySelector('.settings-button');
const settingsMenu = document.querySelector('.settings-menu');
const languageText = document.querySelector('.settings-language_title')
const languageMenu = document.querySelector('.settings-language-menu');
const russianLanguageBtn = document.querySelector('.settings-language-menu-ru');
const englishLanguageBtn = document.querySelector('.settings-language-menu-en');

const visibilityMenu = document.querySelector('.visibles-menu-wrapper ');
const visibilityText = document.querySelector('.settings-visibles_title');

const backgroundMenu = document.querySelector('.background-menu-wrapper');
const backgroundText = document.querySelector('.background-menu_title');

const radioButtons = document.querySelectorAll('.background-sourse');

const backgroundTagsTitle = document.querySelector('.background-tags_title');
const backgroundTags = document.querySelectorAll('.background-tag');

let settingsOn = false;


// const todoList = document.querySelector('.todo-list_wrapper')

let hours = (new Date()).getHours();
let timeOfDay;
let isPlay = false;
const audio = new Audio();
let currentTime = 0;
let playNum = 0;
let interval;
let language;
language ? language = localStorage.getItem('language') : language = 'ru';

const enDictionary = {
  language: 'Language',
  visibility: 'Hide/Visible',
  background: 'Background Source',
  todolist: 'ToDo-List',
  tagTitle: 'Choose a theme for background images',
  tags: {
    timeOfDay: 'Time of Day',
    food: 'Food & Drinks',
    history: 'History'
  },
  checkbox: {
    time: 'Time',
    date: 'Date',
    greeting: 'Greeting',
    quote: 'Quote',
    weather: 'Weather',
    player: 'AudioPlayer',
    todo: 'Todo-List',
  },
  greetings: {
    night: 'Good night,',
    morning: 'Good morging,',
    afternoon: 'Good afternoon,',
    evening: 'Good evening,'
  },
  todoItem: {
    header: 'ToDo list for a day',
    placeholder: 'New task',
    button: 'Create'
  }
}

const ruDictionary = {
  language: 'Язык',
  visibility: 'Скрыть/Показать',
  background: 'Источник для фона',
  tagTitle: 'Выберите тему для фоновых изображений',
  todolist: 'Cписок дел',
  tags: {
    timeOfDay: 'Время суток',
    food: 'Еда и напитки',
    history: 'История',
  },
  checkbox: {
    time: 'Время',
    date: 'Дата',
    greeting: 'Приветствие',
    quote: 'Цитаты',
    weather: 'Прогноз погоды',
    player: 'Аудиоплеер',
    todo: 'Список дел',
  },
  greetings: {
    night: 'Доброй ночи,',
    morning: 'Доброе утро,',
    afternoon: 'Добрый день,',
    evening: 'Добрый вечер,'
  },
  todoItem: {
    header: 'Список дел на день',
    placeholder: 'Новая задача',
    button: 'Создать'
  }

}

// time and date

function showTime() {
  time.textContent = (new Date()).toLocaleTimeString();
  if (language === 'ru') {
    showDate('ru');
  } else {
    showDate('en');
  }

  getTimeOfDay(ruDictionary, enDictionary);
  setTimeout(showTime, 1000)
}
showTime();
let globalTag = timeOfDay;

function showDate(lang) {
  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  };
  date.textContent = (new Date()).toLocaleDateString(`${lang}-Ru`, options);
  date.textContent = date.textContent[0].toLocaleUpperCase() + date.textContent.slice(1);
}

// greetings


function getTimeOfDay(ru, en) {
  hours = (new Date()).getHours();

  if (hours >= 0 && hours < 6) {
    timeOfDay = 'night';
    if (language === 'ru') {
      return greeting.textContent = ru.greetings.night
    }
    if (language === 'en') {
      return greeting.textContent = en.greetings.night
    }
  }

  if (hours >= 6 && hours < 12) {
    timeOfDay = 'morning';
    if (language === 'ru') {
      return greeting.textContent = ru.greetings.morning
    }
    if (language === 'en') {
      return greeting.textContent = en.greetings.morning
    }
  }

  if (hours >= 12 && hours < 18) {
    timeOfDay = 'afternoon';
    if (language === 'ru') {
      return greeting.textContent = ru.greetings.afternoon
    }
    if (language === 'en') {
      return greeting.textContent = en.greetings.afternoon
    }
  }

  if (hours >= 18 && hours < 24) {
    timeOfDay = 'evening';
    if (language === 'ru') {
      return greeting.textContent = ru.greetings.evening
    }
    if (language === 'en') {
      return greeting.textContent = en.greetings.evening
    }
  };
}

userName.value = localStorage.getItem('userName');

userName.addEventListener('change', () => {
  localStorage.setItem('userName', userName.value);
})

function setLocalStorage() {
  localStorage.setItem('userName', userName.value);
  localStorage.setItem('city', city.value);
  localStorage.setItem('language', language);
}
window.addEventListener('beforeunload', setLocalStorage);


function getLocalStorage() {
  if (localStorage.getItem('userName')) {
    userName.value = localStorage.getItem('userName');
  }
  if (localStorage.getItem('city')) {
    city.value = localStorage.getItem('city');
  }
  if (localStorage.getItem('language')) {
    language = localStorage.getItem('language');
  }

  if (language === 'en') {
    englishLanguageBtn.classList.add('lang-active');
    russianLanguageBtn.classList.remove('lang-active')
  } else {
    language = 'ru'
    russianLanguageBtn.classList.add('lang-active');
    englishLanguageBtn.classList.remove('lang-active')
  }
  slideNext.removeEventListener('click', getSlideNext)
  slidePrev.removeEventListener('click', getSlidePrev)
  slideNext.removeEventListener('click', getLinktoImageFlickr)
  slidePrev.removeEventListener('click', getLinktoImageFlickr)
  globalTag = timeOfDay;
  setGitHubBackground();
  if (localStorage.getItem('radio1') == true) hideTags();
  backgroundTags.forEach(elem => {
    elem.classList.remove('background-tag_active')
  });
  backgroundTags[0].classList.add('background-tag_active');
}
window.addEventListener('load', getLocalStorage);

// background images

const backgroundLabels = document.querySelectorAll('.background-menu label')

backgroundLabels.forEach(label => {
  label.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('background-sourse') && label === backgroundLabels[0]) {
      slideNext.removeEventListener('click', getSlideNext)
      slidePrev.removeEventListener('click', getSlidePrev)
      slideNext.removeEventListener('click', getLinktoImageFlickr)
      slidePrev.removeEventListener('click', getLinktoImageFlickr)
      globalTag = timeOfDay;
      setGitHubBackground()
      hideTags();
      backgroundTags.forEach(elem => {
        elem.classList.remove('background-tag_active')
      });
      backgroundTags[0].classList.add('background-tag_active');
    }
    if (target.classList.contains('background-sourse') && label === backgroundLabels[1]) {
      slideNext.removeEventListener('click', getLinkToImageUnsplash)
      slidePrev.removeEventListener('click', getLinkToImageUnsplash)
      slideNext.removeEventListener('click', getLinktoImageFlickr)
      slidePrev.removeEventListener('click', getLinktoImageFlickr)
      setUnsplashBackground()
      showTags()
    }

    if (target.classList.contains('background-sourse') && label === backgroundLabels[2]) {
      slideNext.removeEventListener('click', getSlideNext)
      slidePrev.removeEventListener('click', getSlidePrev)
      slideNext.removeEventListener('click', getLinkToImageUnsplash)
      slidePrev.removeEventListener('click', getLinkToImageUnsplash)
      setFlickrBackground()
      showTags()
    }

  })
})

// GitHub
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return `${Math.floor(rand)}`.padStart(2, 0);
}
let bgNum = randomInteger(1, 20);

function getSlideNext() {
  bgNum < 20 ? bgNum = (String((+bgNum) + 1)).padStart(2, 0) : bgNum = '01';
  setBg();
}

function getSlidePrev() {
  bgNum > 1 ? bgNum = (String((+bgNum) - 1)).padStart(2, 0) : bgNum = '20';
  setBg();
}

function setBg() {
  const img = new Image();
  img.src = `https://raw.githubusercontent.com/MaDKnighT404/momentum-BGcollection/main/images/${globalTag}/${bgNum}.webp`
  img.addEventListener('load', () => {
    body.style.backgroundImage = `url("${img.src}")`;
  })
  slideNext.addEventListener('click', getSlideNext);
  slidePrev.addEventListener('click', getSlidePrev);
}


function setGitHubBackground() {
  slideNext.removeEventListener('click', getLinkToImageUnsplash)
  slidePrev.removeEventListener('click', getLinkToImageUnsplash)
  setBg();
}

//Unsplash
async function getLinkToImageUnsplash() {
  const url = `https://api.unsplash.com/photos/random?query=${globalTag}&client_id=13qczEijUkip4Y63A6FWjrDMbmiOduQVC6UWVpgdE5Q`;
  const res = await fetch(url);
  const data = await res.json();
  const img = new Image();
  img.src = data.urls.regular;
  img.addEventListener('load', () => {
    body.style.backgroundImage = `url("${img.src}")`;
  })
  slideNext.addEventListener('click', getLinkToImageUnsplash)
  slidePrev.addEventListener('click', getLinkToImageUnsplash)
}

function setUnsplashBackground() {
  slideNext.removeEventListener('click', getSlideNext)
  slidePrev.removeEventListener('click', getSlidePrev)
  getLinkToImageUnsplash()
}

// flickr
async function getLinktoImageFlickr() {
  const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=cce5d4a63b44c87db7fbc6a59a5d4026&tags=${globalTag}&extras=url_l&format=json&nojsoncallback=1`;
  const res = await fetch(url);
  const data = await res.json();
  const img = new Image();
  img.src = data.photos.photo[randomInteger(0, 100)].url_l;
  img.addEventListener('load', () => {
    body.style.backgroundImage = `url("${img.src}")`;
  })
  slideNext.addEventListener('click', getLinktoImageFlickr)
  slidePrev.addEventListener('click', getLinktoImageFlickr)
}

function setFlickrBackground() {
  slideNext.removeEventListener('click', getSlideNext);
  slidePrev.removeEventListener('click', getSlidePrev);
  slideNext.removeEventListener('click', getLinkToImageUnsplash);
  slidePrev.removeEventListener('click', getLinkToImageUnsplash);
  getLinktoImageFlickr()
}


function showTags() {
  backgroundTags[1].classList.remove('background-tag_hide')
  backgroundTags[2].classList.remove('background-tag_hide')
}

function hideTags() {
  backgroundTags[1].classList.add('background-tag_hide')
  backgroundTags[2].classList.add('background-tag_hide')
}

// choose backgrounds on start
if (localStorage.getItem('radio1') === 'true') {
  setGitHubBackground();
  hideTags()
}

if (localStorage.getItem('radio2') === 'true') {
  setUnsplashBackground();
  showTags()
}

if (localStorage.getItem('radio3') === 'true') {
  setFlickrBackground();
  showTags()
}

window.addEventListener('unload', () => {
  if (localStorage.getItem('radio1') === 'true') {
    body.style.backgroundImage = `url("https://raw.githubusercontent.com/MaDKnighT404/momentum-BGcollection/main/images/${globalTag}/${bgNum}.webp")`;
  }

  if (localStorage.getItem('radio2') === 'true') {
    body.style.backgroundImage = `url("https://api.unsplash.com/photos/random?query=${globalTag}&client_id=13qczEijUkip4Y63A6FWjrDMbmiOduQVC6UWVpgdE5Q")`;
  }

  if (localStorage.getItem('radio3') === 'true') {
    body.style.backgroundImage = `url("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=cce5d4a63b44c87db7fbc6a59a5d4026&tags=${globalTag}&extras=url_l&format=json&nojsoncallback=1`;
  }
})


// weather 

city.addEventListener('change', () => {
  localStorage.setItem('city', `${city.value}`);
  getWeather()
})

async function getWeather(lang = 'ru') {
  lang = localStorage.getItem('language');
  language = lang;
  try {
    if (localStorage.getItem('city')) {
      city.value = `${localStorage.getItem('city')}`;
    } else {
      city.value = `Минск`;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${lang}&appid=35a51d7cc666d297665f22fb0617a5bc&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    weatherContainer.classList.remove('hide')
    weatherError.textContent = '';
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    if (language === 'ru') {
      windSpeed.textContent = `Скорость ветра: ${Math.round(data.wind.speed)} м/c`;
      humidity.textContent = `Влажность: ${Math.round(data.main.humidity)}%`
    } else {
      windSpeed.textContent = `Wind speed: ${Math.round(data.wind.speed)} м/c`;
      humidity.textContent = `Humidity: ${Math.round(data.main.humidity)}%`
    }
  } catch (err) {
    if (language === 'ru') {
      weatherError.textContent = `Ошибка! Невозможно найти город "${city.value}" !`;
    } else {
      weatherError.textContent = `Error! Can't find city "${city.value}" !`;
    }
    weatherContainer.classList.add('hide')
  }
}
getWeather()

// quotes

async function getQuotes() {
  let quotes = ''
  let qoteIndex;
  if (language === 'ru') {
    quotes = `./js/quotesRu.json`;
    qoteIndex = randomIndex(0, 61);
  }
  if (language === 'en') {
    quotes = `./js/quotesEn.json`;
    qoteIndex = randomIndex(0, 1641);
  }

  const res = await fetch(quotes);
  const data = await res.json();

  quote.textContent = data[qoteIndex].text;
  author.textContent = data[qoteIndex].author;
};
getQuotes();


function randomIndex(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}


changeQuote.addEventListener('mousedown', getQuotes)


// audioplayer


const liArray = []
playList.forEach((_, index) => {
  const li = document.createElement('li');
  li.classList.add('play-item');
  li.textContent = playList[index].title;
  liArray.push(li)
  playListContainer.append(li);
})


function playAudio() {
  setTimerAndSongName();
  if (!isPlay) {
    audio.src = playList[playNum].src;
    audio.currentTime = currentTime;
    audio.play();
    isPlay = true;
    liArray[playNum].classList.add('item-active')
    playButton.classList.add('pause');
    startSongPlay()

  } else {
    audio.pause();
    isPlay = false;
    playButton.classList.remove('pause');
    currentTime = audio.currentTime;
  }

  playButton.removeEventListener('click', playAudio);
  setTimeout(addOneSecondPause, 500);
}

function addOneSecondPause() {
  playButton.addEventListener('click', playAudio);
}

playButton.addEventListener('click', playAudio);

function playNext() {

  if (playNum < playList.length - 1) {
    playNum++;
    liArray[playNum - 1].classList.remove('item-active')
  } else {
    liArray[playNum].classList.remove('item-active')
    playNum = 0;
  }

  if (isPlay) {
    playAudio()
    currentTime = 0;
  }

  convertDuration()
  setTimerAndSongName()
  playAudio()
}

function playPrev() {


  if (playNum > 0) {
    playNum--;
    liArray[playNum + 1].classList.remove('item-active')
  } else {
    liArray[playNum].classList.remove('item-active')
    playNum = playList.length - 1
  }

  if (isPlay) {
    playAudio()
    currentTime = 0;
  }


  convertDuration()
  setTimerAndSongName()
  playAudio()
}

nextButton.addEventListener('click', playNext);
prevButton.addEventListener('click', playPrev);

liArray.forEach((elem, index) => {
  elem.addEventListener('click', (event) => {
    if (event.target) {
      liArray.forEach(li => li.classList.remove('item-active'))
      playNum = index;
      elem.classList.add('item-active');
      isPlay = false;
      currentTime = 0;
      secondsReal = 0;
      minutesReal = 0;
      setTimerAndSongName();
      convertDuration();
      playAudio()
    }

  })
})

let seconds = 0
let minutes = 0

let secondsReal = 0
let minutesReal = 0

let stripTime = 0;

function convertDuration() {
  seconds = +playList[playNum].duration.slice(3, 5) + 1;
  minutes = +playList[playNum].duration.slice(0, 2);
  secondsReal = -1;
  minutesReal = 0;
  stripTime = (minutes * 60) + seconds
}
convertDuration()

function setStrip() {
  soundStrip.style.width = audio.currentTime / stripTime * 100 + "%";
  if (seconds === 0 && minutes === 0) {
    clearInterval(stripMoving)
  }
}
const stripMoving = setInterval(setStrip, 100)

durationWrapper.addEventListener('click', event => {
  try {
    const timeLineWidth = window.getComputedStyle(durationWrapper).width
    const timeToSeek = event.offsetX / parseInt(timeLineWidth) * audio.duration;
    audio.currentTime = timeToSeek;
    setTimefromNum(audio.currentTime)
  } catch {
    return
  }
})

function setTimefromNum(num) {
  seconds = +playList[playNum].duration.slice(3, 5) - parseInt(num % 60);
  minutes = +playList[playNum].duration.slice(0, 2) - parseInt(num / 60);

  secondsReal = parseInt(num % 60);
  minutesReal = parseInt(num / 60);
  if (seconds < 0) {
    seconds = 60 - Math.abs(seconds);
    minutes -= minutes
  }
  currentTime = audio.currentTime;
  songTime.textContent = `${minutes.toString().padStart(2,0)}:${seconds.toString().padStart(2,0)}`
  activeTime.textContent = `${minutesReal.toString().padStart(2,0)}:${secondsReal.toString().padStart(2,0)}`
}

function setTimerAndSongName() {
  songName.textContent = playList[playNum].title;
  fullTime.textContent = `/ ${playList[playNum].duration}`
}

function startSongPlay() {
  clearInterval(interval)
  if (isPlay) {
    interval = setInterval(startSongPlay, 1000)

    if (secondsReal < 59) {
      secondsReal++
    } else {
      secondsReal = 0;
      minutesReal++
    }

    if (seconds <= 0) {
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }
    songTime.textContent = `${minutes.toString().padStart(2,0)}:${seconds.toString().padStart(2,0)}`
    activeTime.textContent = `${minutesReal.toString().padStart(2,0)}:${secondsReal.toString().padStart(2,0)}`
  }

  if ((seconds === 0 && minutes === 0)) {
    clearInterval(interval)
    playNext()
  }
}

// volume

let playMusic = true;
let volumeWhenDisable = 1;
let volumeStripWhenDisable = '';
volumePic.addEventListener('click', () => {
  volumePic.classList.toggle('player-novolume_pic');
  if (playMusic) {
    audio.volume = 0.0;
    volumeStrip.style.width = `0`;
    playMusic = false
  } else {
    playMusic = true;
    audio.volume = volumeWhenDisable;
    volumeStrip.style.width = volumeStripWhenDisable;
  }
})

volumeWrapper.addEventListener('click', (event) => {
  if (!event.target.classList.contains('player-volume_pic')) {
    const newVolume = event.offsetX / 100;
    audio.volume = newVolume;
    volumeWhenDisable = newVolume;
    volumeStrip.style.width = `${newVolume * 100}%`;
    volumeStripWhenDisable = `${newVolume * 100}%`;
    if (volumePic.classList.contains('player-novolume_pic')) {
      volumePic.classList.toggle('player-novolume_pic');
      playMusic = false
    }
    if (volumePic.classList.contains('player-volume_pic')) {
      playMusic = true;
    }
  }
})

// settings

settingsIcon.addEventListener('click', () => {
  showSettingsMenu();
})

settingsWrapper.addEventListener('click', (event) => {
  if (event.target.classList.contains('settings-wrapper') && settingsOn) {
    showSettingsMenu();
  }
})

settings.addEventListener('click', (event) => {
  let target = event.target;

  if (target.classList.contains('settings')) {
    settingsMenu.style.transform = 'translateY(-200%)';
    languageMenu.classList.toggle('settings-language-active');
    settingsOn = false;
    visibilityMenu.classList.remove('visibles-active');
    languageMenu.classList.remove('settings-language-active');
    backgroundMenu.classList.remove('background-menu-active');
  }

  if (target.classList.contains('settings-menu')) {
    visibilityMenu.classList.remove('visibles-active');
    languageMenu.classList.remove('settings-language-active');
    backgroundMenu.classList.remove('background-menu-active');
  }
  //language
  if (target.classList.contains('settings-language') || target.classList.contains('settings-language_title')) {
    languageMenu.classList.toggle('settings-language-active');
    visibilityMenu.classList.remove('visibles-active');
    backgroundMenu.classList.remove('background-menu-active');
  }

  if (target.classList.contains('settings-language-menu-ru')) {
    russianLanguageBtn.classList.add('lang-active');
    englishLanguageBtn.classList.remove('lang-active')
  }

  if (target.classList.contains('settings-language-menu-en')) {
    englishLanguageBtn.classList.add('lang-active');
    russianLanguageBtn.classList.remove('lang-active')
  }

  //visibles
  if (target.classList.contains('settings-visibles') || target.classList.contains('settings-visibles_title')) {
    visibilityMenu.classList.toggle('visibles-active');
    languageMenu.classList.remove('settings-language-active');
    backgroundMenu.classList.remove('background-menu-active');
  }

  // source
  if (target.classList.contains('settings-background') || target.classList.contains('background-menu_title')) {
    backgroundMenu.classList.toggle('background-menu-active');
    languageMenu.classList.remove('settings-language-active');
    visibilityMenu.classList.remove('visibles-active');
  }
})

englishLanguageBtn.addEventListener('click', () => {
  language = 'en';
  localStorage.setItem('language', language);
  getTimeOfDay(ruDictionary, enDictionary);
  showDate('en');
  userName.placeholder = '[Your Name]';
  getQuotes();
  getWeather('en');
  setTextContentLanguage(enDictionary);
})

russianLanguageBtn.addEventListener('click', () => {
  language = 'ru';
  localStorage.setItem('language', language);
  getTimeOfDay(ruDictionary, enDictionary);
  showDate('ru')
  userName.placeholder = '[Ваше имя]';
  getQuotes();
  getWeather('ru')
  setTextContentLanguage(ruDictionary);
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    settingsMenu.style.transform = 'translateY(-200%)';
    settingsWrapper.classList.remove('settings-wrapper_active')
    settingsOn = false;
  }
})

function showSettingsMenu() {
  if (!settingsOn) {
    settingsMenu.style.transform = 'translateY(20%)';
    settingsWrapper.classList.add('settings-wrapper_active')
    settingsOn = true;
  } else {
    settingsMenu.style.transform = 'translateY(-200%)';
    settingsWrapper.classList.remove('settings-wrapper_active')
    settingsOn = false;
  }
  visibilityMenu.classList.remove('visibles-active');
  backgroundMenu.classList.remove('background-menu-active');
  languageMenu.classList.remove('settings-language-active');
}

//visibles menu

const checkboxes = document.querySelectorAll('.visibles-menu-checkbox');
const visibleLabels = document.querySelectorAll('.visibles-menu label');
const titles = document.querySelectorAll('.visibles-menu-title')

const todoWrapper = document.querySelector('.todo_list_wrapper');
const visiblesElements = [time, date, greetingContainer, footer, weather, player, todoWrapper]


function setTextContentLanguage(dictionary = ruDictionary) {
  languageText.textContent = `${dictionary.language}`;
  visibilityText.textContent = `${dictionary.visibility}`;
  backgroundText.textContent = `${dictionary.background}`;
  backgroundTagsTitle.textContent = `${dictionary.tagTitle}`;
  backgroundTags[0].textContent = `${dictionary.tags.timeOfDay}`;
  backgroundTags[1].textContent = `${dictionary.tags.food}`;
  backgroundTags[2].textContent = `${dictionary.tags.history}`;
  titles[0].textContent = `${dictionary.checkbox.time}`;
  titles[1].textContent = `${dictionary.checkbox.date}`;
  titles[2].textContent = `${dictionary.checkbox.greeting}`;
  titles[3].textContent = `${dictionary.checkbox.quote}`;
  titles[4].textContent = `${dictionary.checkbox.weather}`;
  titles[5].textContent = `${dictionary.checkbox.player}`;
  titles[6].textContent = `${dictionary.checkbox.todo}`;
  todoHeader.textContent = `${dictionary.todoItem.header}`;
  todoPlaceholder.placeholder = `${dictionary.todoItem.placeholder}`;
  btnAddTask.textContent = `${dictionary.todoItem.button}`;
}

function showBlock(block) {
  block.classList.add('show')
  block.classList.remove('hide')
}

function hideBlock(block) {
  block.classList.add('hide')
  block.classList.remove('show')
}

visibleLabels.forEach(label => {
  label.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('visibles-menu-checkbox')) {
      checkboxes.forEach((box, index) => {
        if (box === target && box.checked) {
          showBlock(visiblesElements[index])
        }
        if (box === target && !box.checked) {
          hideBlock(visiblesElements[index])
        }
      })
    }
  });
})

function save() {
  for (let i = 1; i <= checkboxes.length; i++) {
    const checkbox = document.getElementById(`checkbox${i}`);
    localStorage.setItem(`checkbox${i}`, checkbox.checked);
  }

  for (let j = 1; j <= radioButtons.length; j++) {
    const radio = document.getElementById(`radio${j}`);
    localStorage.setItem(`radio${j}`, radio.checked);
  }
}

// for loading
for (let i = 1; i <= checkboxes.length; i++) {
  if (localStorage.length > 4) {
    const checked = JSON.parse(localStorage.getItem(`checkbox${i}`));
    document.getElementById(`checkbox${i}`).checked = checked;
  } else {
    checkboxes.forEach(elem => {
      elem.checked = true;
    })
  }
}

for (let j = 1; j <= radioButtons.length; j++) {
  if (localStorage.length > 4) {
    const checked = JSON.parse(localStorage.getItem(`radio${j}`));
    document.getElementById(`radio${j}`).checked = checked;
  } else {
    radioButtons[0].checked = true;
  }
}

checkboxes.forEach((box, index) => {
  if (box.checked === false) {
    visiblesElements[index].classList.add('hide')
  }
})

window.addEventListener('change', save);


backgroundTags.forEach(tag => {
  tag.addEventListener('click', (event) => {
    const target = event.target;
    if (target) {
      backgroundTags.forEach(elem => {
        elem.classList.remove('background-tag_active')
      })
      target.classList.add('background-tag_active')
    }

    if (target === backgroundTags[0]) {
      globalTag = timeOfDay;
    }

    if (target === backgroundTags[1]) {
      globalTag = 'food-drink';
    }

    if (target === backgroundTags[2]) {
      globalTag = 'history';
    }
  })
})

if (localStorage.length === 0) {
  language = 'ru';
  localStorage.setItem('language', language);
  getTimeOfDay(ruDictionary, enDictionary);
  showDate('ru')
  userName.placeholder = '[Ваше имя]';
  getQuotes();
  getWeather('ru')
  setTextContentLanguage(ruDictionary);
  setGitHubBackground()
}


//todo list 


const todoList = document.querySelector('.todo_list_container');

const taskMessage = document.querySelector('.task_message');
const btnAddTask = document.querySelector('.task_btn_add');
const newTaskList = document.querySelector('.new_tasks_list');
const taskWrapper = document.querySelector('.new_tasks_wrapper')
const btnOpenClose = document.querySelector('.todo_list_btn');
let todolistOpen = false;

const todoHeader = document.querySelector('.todo_list_container h1');
const todoPlaceholder = document.querySelector('.task_message');
const numberOfTasks = document.querySelector('.todo_list_number');



function Task(description) {
  this.description = description;
  this.completed = false;
}

let allTasks;
!localStorage.tasks ? allTasks = [] : allTasks = JSON.parse(localStorage.getItem('tasks'))


function setClosedPic() {
  btnOpenClose.classList.remove('todo_open');
  btnOpenClose.classList.add('todo_closed');
  todolistOpen = false;
  hideBlock(taskWrapper);
  hideBlock(taskMessage);
  hideBlock(btnAddTask);
  todoList.style.boxShadow = '';
  todoWrapper.style.background = 'none';
  changeQuote.style.visibility = 'visible';
  userName.style.zIndex = '999'
}

setClosedPic()

function setOpenPic() {
  btnOpenClose.classList.remove('todo_closed')
  btnOpenClose.classList.add('todo_open')
  todolistOpen = true;
  showBlock(taskWrapper);
  showBlock(taskMessage);
  showBlock(btnAddTask);
  todoList.style.boxShadow = '0 2px 15px 0 #00060a'
  todoWrapper.style.background = 'rgba(215, 204, 165, 0.2)'
  changeQuote.style.visibility = 'hidden'
  userName.style.zIndex = '-1'
}



btnOpenClose.addEventListener('click', () => {
  if (todolistOpen === true) {
    setClosedPic();
    showBlock(numberOfTasks)
    showBlock(time)
    showBlock(date)
    showBlock(greetingContainer)
    footer.style.opacity = '1'
    footer.style.zIndex = '1'
    setNumberOfNotCompletedTasks()
  } else {
    setOpenPic();
    hideBlock(numberOfTasks)
    hideBlock(time)
    hideBlock(date)
    hideBlock(greetingContainer)
    footer.style.opacity = '0.1'
    footer.style.zIndex = '-1'
  }
})

body.addEventListener('click', (event) => {
  if (event.target === footer || event.target === header || event.target === main && todolistOpen === true) {
    setClosedPic();
    showBlock(numberOfTasks)
    showBlock(time)
    showBlock(date)
    showBlock(greetingContainer)
    footer.style.opacity = '1'
    footer.style.zIndex = '1'
  }
})

createNewTasks();

btnAddTask.addEventListener('click', () => {

  if (!taskMessage.value) return
  const newTask = {
    description: taskMessage.value,
    checked: false,
  }
  filterTasks()
  allTasks.push(newTask)
  createNewTasks();
  filterTasks()
  updateLocalStorage()
  createNewTasks()
  taskMessage.value = ''

  setOpenPic();

  animatedNotCompletedTask()

});

function createNewTasks() {

  newTaskList.innerHTML = ''
  allTasks.forEach((element, index) => {

    newTaskList.innerHTML += ` 
        <li class="task ${element.checked ? 'completed': 'notcompleted'} " >
            <input type="checkbox" class="task_checkbox" id="${index}" ${element.checked ? 'checked': ''}>
            <label for="${index}" class="new_task_text">${index + 1}. ${element.description[0].toUpperCase() + element.description.slice(1)}</label> 
            <button class="task_delete" id='d${index}' ></button>
        </li>
        `
  })

}

let notCompeletedTasks = document.querySelectorAll('.notcompleted');


function setNumberOfNotCompletedTasks() {
  notCompeletedTasks = document.querySelectorAll('.notcompleted');
  numberOfTasks.textContent = notCompeletedTasks.length
}
setNumberOfNotCompletedTasks()


console.log(notCompeletedTasks.length)

function animatedNotCompletedTask() {
  notCompeletedTasks = document.querySelectorAll('.notcompleted');
  notCompeletedTasks[notCompeletedTasks.length - 1].classList.add('appear')
}


function updateLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(allTasks))
}


newTaskList.addEventListener('click', (event) => {
  allTasks.forEach((item, index) => {
    if (event.target.getAttribute('id') == index) {
      item.checked = !item.checked
      filterTasks()
      updateLocalStorage()
      createNewTasks()
      const completed = document.querySelectorAll('.completed');
      if (completed.length > 0 && item.checked)
        completed[0].classList.add('appear')

      if (completed.length > 0 && !item.checked)
        animatedNotCompletedTask()
      setNumberOfNotCompletedTasks()
    }
    if (event.target.getAttribute('id') == `d${index}`) {
      const tasks = document.querySelectorAll('.task');
      tasks[index].classList.add('disappear')

      setTimeout(() => {
        allTasks.splice(index, 1);
        updateLocalStorage();
        createNewTasks();
        setNumberOfNotCompletedTasks()
      }, 400);
    }

    if (event.target.getAttribute('id') == `d0` && allTasks.length < 1) {
      setClosedPic();
      setNumberOfNotCompletedTasks()
    }
  })

})


function filterTasks() {
  if (allTasks.length) {
    const completedTasks = allTasks.filter(item => item.checked == true);
    const notCompletedTasks = allTasks.filter(item => item.checked == false);
    allTasks = [...notCompletedTasks, ...completedTasks]
  }
}
filterTasks()
updateLocalStorage()


function clearAll() {
  language === 'en' ? setTextContentLanguage(enDictionary) : setTextContentLanguage(ruDictionary);
  setGitHubBackground()
}

clearAll();