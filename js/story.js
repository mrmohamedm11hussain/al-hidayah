const stories = {

  adam: {
    name: "آدم عليه السلام",

    intro:
      "بداية الخلق، والتوبة، وكيف يتعلم الإنسان من خطئه ويرجع إلى الله.",

    video: "kf0thyXnv0Y",

    source:
      "دار البلاغ — قصص الأنبياء للأطفال",

    lesson: [
      "الاعتراف بالخطأ والتوبة طريق خير.",
      "طاعة الله أصل النجاة.",
      "رحمة الله واسعة لمن رجع إليه."
    ],

    ayah:
      "ثُمَّ اجْتَبَاهُ رَبُّهُ فَتَابَ عَلَيْهِ وَهَدَىٰ",

    ref:
      "طه: 122"
  },


  yunus: {
    name: "يونس عليه السلام",

    intro:
      "قصة نبي كريم تذكرنا بالدعاء والصبر والرجوع إلى الله وقت الشدة.",

    video: "PJn8xuBwmSs",

    source:
      "دار البلاغ — قصص الأنبياء للأطفال",

    lesson: [
      "لا نيأس من رحمة الله.",
      "الدعاء والرجوع إلى الله من أسباب الفرج.",
      "الصبر والثبات مهمان في الشدائد."
    ],

    ayah:
      "فَنَادَىٰ فِي الظُّلُمَاتِ أَن لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",

    ref:
      "الأنبياء: 87"
  },


  musa: {
    name: "موسى عليه السلام",

    intro:
      "قصة الثبات أمام الخوف والظلم، والثقة بنصر الله.",

    video: "AuNcSZD4dK8",

    source:
      "Broccole — قصص الأنبياء للأطفال",

    lesson: [
      "الثبات وقت الخوف.",
      "الثقة بالله مع الأخذ بالأسباب.",
      "الحق يحتاج إلى شجاعة وصبر."
    ],

    ayah:
      "قَالَ كَلَّا إِنَّ مَعِيَ رَبِّي سَيَهْدِينِ",

    ref:
      "الشعراء: 62"
  },


  yusuf: {
    name: "يوسف عليه السلام",

    intro:
      "قصة الصبر والعفو وحسن الظن بالله، من المحنة إلى التمكين.",

    video: "ZubVqCRp_Kc",

    source:
      "Kids Zone — قصص الأنبياء للأطفال",

    lesson: [
      "الصبر لا يضيع عند الله.",
      "العفو قوة وأخلاق.",
      "قد يأتي الخير بعد طريق طويل من الابتلاء."
    ],

    ayah:
      "إِنَّهُ مَن يَتَّقِ وَيَصْبِرْ فَإِنَّ اللَّهَ لَا يُضِيعُ أَجْرَ الْمُحْسِنِينَ",

    ref:
      "يوسف: 90"
  }

};


const id =
  new URLSearchParams(location.search).get("id") || "adam";


const story =
  stories[id] || stories.adam;


document.title =
  story.name + " | الهداية";


const container =
  document.querySelector("#story");


container.innerHTML = `

  <div class="story-hero">

    <div>

      <a class="back" href="stories.html">
        → العودة للقصص
      </a>

      <span class="eyebrow">
        قصة نبي
      </span>

      <h1>
        ${story.name}
      </h1>

      <p>
        ${story.intro}
      </p>

      <div class="actions">

        <a
          class="btn primary"
          href="#read"
        >
          قراءة القصة
        </a>

        <a
          class="btn ghost"
          href="#watch"
        >
          مشاهدة القصة
        </a>

      </div>

    </div>


    <div class="story-symbol">
      هـ
    </div>

  </div>


  <section
    id="watch"
    class="content-section"
  >

    <div class="section-head">

      <div>

        <span class="eyebrow">
          مشاهدة
        </span>

        <h2>
          القصة بالفيديو
        </h2>

      </div>

    </div>


    <div class="video">

      <iframe
        src="https://www.youtube-nocookie.com/embed/${story.video}?rel=0"
        title="${story.name}"
        allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
        allowfullscreen
      ></iframe>

    </div>


    <small class="source">
      المصدر: ${story.source}.
      الفيديو مضمّن من YouTube وليس مستضافًا على المنصة.
    </small>

  </section>


  <section
    id="read"
    class="content-section reading"
  >

    <span class="eyebrow">
      قراءة واستماع
    </span>

    <h2>
      فهم مبسط للقصة
    </h2>

    <p>
      هذا نص تعليمي مختصر يساعد على فهم الفكرة العامة،
      وليس تفسيرًا أو فتوى.
    </p>


    <div class="read-box">

      <p id="narration">
        ${story.intro}

        وتعلّمنا القصة أن المؤمن يرجع إلى الله،
        ويصبر، ويأخذ بالأسباب،
        ولا يفقد الأمل في رحمته.
      </p>


      <button
        class="btn primary"
        id="speak"
      >
        ▶ قراءة آلية
      </button>


      <button
        class="btn ghost"
        id="stop"
      >
        إيقاف
      </button>


      <span
        id="voiceState"
        class="voice-state"
      ></span>

    </div>

  </section>


  <section class="content-section">

    <span class="eyebrow">
      من القرآن
    </span>

    <div class="ayah">

      <p>
        ${story.ayah}
      </p>

      <small>
        سورة ${story.ref}
      </small>

    </div>

  </section>


  <section class="content-section">

    <span class="eyebrow">
      دروس مستفادة
    </span>

    <div class="lessons">

      ${story.lesson
        .map(
          (lesson, index) => `

            <div>

              <b>
                0${index + 1}
              </b>

              <span>
                ${lesson}
              </span>

            </div>

          `
        )
        .join("")}

    </div>

  </section>

`;


const narration =
  document.querySelector("#narration").innerText;


const speakButton =
  document.querySelector("#speak");


const stopButton =
  document.querySelector("#stop");


const voiceState =
  document.querySelector("#voiceState");


speakButton.onclick = () => {

  if (!("speechSynthesis" in window)) {

    voiceState.textContent =
      "ميزة القراءة الآلية غير متاحة في هذا المتصفح.";

    return;
  }


  speechSynthesis.cancel();


  const utterance =
    new SpeechSynthesisUtterance(narration);


  utterance.lang = "ar-SA";

  utterance.rate = .9;


  utterance.onstart = () => {

    voiceState.textContent =
      "جاري القراءة…";

  };


  utterance.onend = () => {

    voiceState.textContent =
      "انتهت القراءة.";

  };


  speechSynthesis.speak(utterance);

};


stopButton.onclick = () => {

  speechSynthesis.cancel();

  voiceState.textContent =
    "تم الإيقاف.";

};
