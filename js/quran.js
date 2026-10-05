const select =
  document.querySelector("#surahSelect");

const list =
  document.querySelector("#ayahs");

const state =
  document.querySelector("#quranState");

const player =
  document.querySelector("#player");

const title =
  document.querySelector("#audioTitle");


let current = [];


async function loadSurahs() {

  try {

    const response =
      await fetch(
        "https://api.alquran.cloud/v1/surah"
      );


    const data =
      await response.json();


    data.data.forEach(surah => {

      const option =
        document.createElement("option");


      option.value =
        surah.number;


      option.textContent =
        `${surah.number}. ${surah.name}`;


      select.appendChild(option);

    });


    select.value = "1";

    loadSurah(1);

  } catch (error) {

    state.textContent =
      "تعذر الاتصال بمصدر القرآن. تأكد من اتصال الإنترنت.";

  }

}


async function loadSurah(number) {

  state.textContent =
    "جاري تحميل السورة…";


  list.innerHTML = "";


  try {

    const response =
      await fetch(
        `https://api.alquran.cloud/v1/surah/${number}/ar.quran-uthmani`
      );


    const data =
      await response.json();


    current =
      data.data.ayahs;


    current.forEach(ayah => {

      const row =
        document.createElement("article");


      row.className =
        "ayah-item";


      row.innerHTML = `

        <span class="ayah-num">
          ${ayah.numberInSurah}
        </span>


        <div class="ayah-text">
          ${ayah.text}
        </div>


        <button
          class="play-ayah"
          aria-label="استماع"
        >
          ▶
        </button>

      `;


      row
        .querySelector("button")
        .onclick = () => {

          playAyah(ayah);

        };


      list.appendChild(row);

    });


    state.textContent =
      `${data.data.name} — ${data.data.numberOfAyahs} آية`;


    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  } catch (error) {

    state.textContent =
      "تعذر تحميل السورة الآن. تأكد من اتصال الإنترنت ثم أعد المحاولة.";

  }

}


function playAyah(ayah) {

  const audioUrl =
    `https://cdn.islamic.network/quran/audio/128/ar.alafasy/${ayah.number}.mp3`;


  player.src =
    audioUrl;


  title.textContent =
    `الآية ${ayah.numberInSurah}`;


  player.play().catch(() => {});


  document
    .querySelectorAll(".ayah-item")
    .forEach(item => {

      item.classList.remove("playing");

    });

}


select.addEventListener(
  "change",
  event => {

    loadSurah(event.target.value);

  }
);


loadSurahs();
