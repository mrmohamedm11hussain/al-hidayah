const categories = [

  [
    "morning",
    "أذكار الصباح",
    "ابدأ يومك بالذكر"
  ],

  [
    "evening",
    "أذكار المساء",
    "اختم يومك بالطمأنينة"
  ],

  [
    "sleep",
    "أذكار النوم",
    "أذكار قبل النوم"
  ],

  [
    "wake",
    "أذكار الاستيقاظ",
    "حين تستيقظ من نومك"
  ],

  [
    "prayer",
    "بعد الصلاة",
    "أذكار ما بعد الصلاة"
  ],

  [
    "mosque-in",
    "دخول المسجد",
    "ذكر دخول المسجد"
  ],

  [
    "mosque-out",
    "الخروج من المسجد",
    "ذكر الخروج من المسجد"
  ],

  [
    "home-in",
    "دخول المنزل",
    "ذكر دخول البيت"
  ],

  [
    "home-out",
    "الخروج من المنزل",
    "ذكر الخروج من البيت"
  ],

  [
    "food",
    "أذكار الطعام",
    "قبل الطعام وبعده"
  ],

  [
    "travel",
    "أذكار السفر",
    "عند السفر"
  ],

  [
    "wudu",
    "أذكار الوضوء",
    "ما يتعلق بالوضوء"
  ],

  [
    "illness",
    "أذكار المرض",
    "دعاء للمريض"
  ],

  [
    "misc",
    "أذكار متنوعة",
    "أدعية وأذكار نافعة"
  ]

];


const texts = {

  morning: [
    "أصبحنا وأصبح الملك لله، والحمد لله.",
    "اللهم بك أصبحنا وبك أمسينا وبك نحيا وبك نموت وإليك النشور."
  ],

  evening: [
    "أمسينا وأمسى الملك لله، والحمد لله.",
    "اللهم بك أمسينا وبك أصبحنا وبك نحيا وبك نموت وإليك المصير."
  ],

  sleep: [
    "باسمك اللهم أموت وأحيا.",
    "اللهم قني عذابك يوم تبعث عبادك."
  ],

  wake: [
    "الحمد لله الذي أحيانا بعدما أماتنا وإليه النشور."
  ],

  prayer: [
    "أستغفر الله.",
    "اللهم أنت السلام ومنك السلام، تباركت يا ذا الجلال والإكرام."
  ],

  "mosque-in": [
    "اللهم افتح لي أبواب رحمتك."
  ],

  "mosque-out": [
    "اللهم إني أسألك من فضلك."
  ],

  "home-in": [
    "بسم الله ولجنا، وبسم الله خرجنا، وعلى ربنا توكلنا."
  ],

  "home-out": [
    "بسم الله، توكلت على الله، ولا حول ولا قوة إلا بالله."
  ],

  food: [
    "بسم الله.",
    "الحمد لله الذي أطعمني هذا ورزقنيه من غير حول مني ولا قوة."
  ],

  travel: [
    "سبحان الذي سخر لنا هذا وما كنا له مقرنين وإنا إلى ربنا لمنقلبون."
  ],

  wudu: [
    "أشهد أن لا إله إلا الله وحده لا شريك له، وأشهد أن محمدًا عبده ورسوله."
  ],

  illness: [
    "أسأل الله العظيم رب العرش العظيم أن يشفيك."
  ],

  misc: [
    "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير."
  ]

};


const grid =
  document.querySelector("#adhkarGrid");


const reader =
  document.querySelector("#reader");


grid.innerHTML =
  categories
    .map(category => {

      const [
        id,
        name,
        description
      ] = category;


      return `

        <a
          href="#reader"
          class="feature"
          onclick="openCategory('${id}', '${name}')"
        >

          <span class="icon">
            ☾
          </span>

          <div>

            <h3>
              ${name}
            </h3>

            <p>
              ${description}
            </p>

          </div>

          <span class="arrow">
            ←
          </span>

        </a>

      `;

    })
    .join("");


function openCategory(id, name) {

  const items =
    texts[id] ||
    [
      "سيُضاف محتوى موثق لهذا الباب."
    ];


  reader.style.display =
    "block";


  reader.innerHTML = `

    <div class="section-head">

      <div>

        <span class="eyebrow">
          ${name}
        </span>

        <h2>
          ${name}
        </h2>

      </div>

    </div>


    <div class="read-box">

      ${items
        .map(
          (text, index) => `

            <div
              style="
                padding:20px 0;
                border-bottom:1px solid var(--line)
              "
            >

              <b
                style="
                  color:#b08b4a
                "
              >
                ${index + 1}
              </b>


              <p
                style="
                  font:24px/2 Amiri;
                  margin:7px 0
                "
              >
                ${text}
              </p>


              <button
                class="btn ghost"
                onclick='speak(${JSON.stringify(text)})'
              >
                🔊 قراءة
              </button>

            </div>

          `
        )
        .join("")}

    </div>

  `;


  reader.scrollIntoView({
    behavior: "smooth"
  });

}


function speak(text) {

  if (!("speechSynthesis" in window)) {
    return;
  }


  speechSynthesis.cancel();


  const utterance =
    new SpeechSynthesisUtterance(text);


  utterance.lang =
    "ar-SA";


  utterance.rate =
    .85;


  speechSynthesis.speak(utterance);

}
