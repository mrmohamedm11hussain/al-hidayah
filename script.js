/* =========================================================
   الهداية
   Main Application
   ========================================================= */


/* -----------------------------
   STORIES DATABASE
----------------------------- */

const stories = [
  {
    id: "adam",
    title: "قصة آدم عليه السلام",
    category: "prophets",
    categoryName: "قصص الأنبياء",
    description: "بداية قصة الإنسان وما تحمله من معانٍ وعِبر.",
    symbol: "☾",
    intro:
      "قصة آدم عليه السلام من القصص التي تحمل معاني عظيمة عن بداية خلق الإنسان والتوبة والطاعة.",
    text:
      "هذه الصفحة مخصصة للمحتوى الموثق الذي سيُضاف إلى المنصة بعد مراجعته واعتماده.",
    source: "سيتم إضافة المصدر الموثق مع المحتوى النهائي."
  },

  {
    id: "ibrahim",
    title: "قصة إبراهيم عليه السلام",
    category: "prophets",
    categoryName: "قصص الأنبياء",
    description: "رحلة عظيمة في التوحيد والثبات والإيمان.",
    symbol: "✦",
    intro:
      "من القصص العظيمة التي ترتبط بالتوحيد والثبات أمام الابتلاء.",
    text:
      "سيتم إدراج النص الكامل بعد مراجعته من المصادر الموثوقة، ولن تتم إضافة أي أحداث غير موثقة.",
    source: "المصدر الموثق سيظهر هنا."
  },

  {
    id: "yusuf",
    title: "قصة يوسف عليه السلام",
    category: "quran",
    categoryName: "قصص القرآن",
    description: "قصة مليئة بالصبر والابتلاء والعفو.",
    symbol: "✧",
    intro:
      "قصة يوسف عليه السلام من أشهر القصص الواردة في القرآن الكريم.",
    text:
      "سيتم بناء النسخة التفصيلية من القصة لاحقًا، مشهدًا بعد مشهد، مع ذكر مصدر كل حدث.",
    source: "سورة يوسف — القرآن الكريم."
  },

  {
    id: "yunus",
    title: "قصة يونس عليه السلام",
    category: "prophets",
    categoryName: "قصص الأنبياء",
    description: "قصة تحمل معاني الصبر والرجوع إلى الله.",
    symbol: "◇",
    intro:
      "قصة نبي الله يونس عليه السلام وما تحمله من معانٍ وعِبر.",
    text:
      "سيتم إدراج المحتوى الموثق بعد مراجعته، مع فصل الأحداث عن التفسيرات والروايات غير المؤكدة.",
    source: "المصدر الموثق سيظهر هنا."
  },

  {
    id: "cave",
    title: "أصحاب الكهف",
    category: "quran",
    categoryName: "قصص القرآن",
    description: "قصة الفتية والثبات على الإيمان.",
    symbol: "◈",
    intro:
      "قصة أصحاب الكهف من القصص التي وردت في سورة الكهف.",
    text:
      "سيتم إعداد القصة بشكل تفصيلي مع ربط كل مشهد بالموضع الموثق من المصدر.",
    source: "سورة الكهف — القرآن الكريم."
  },

  {
    id: "migration",
    title: "الهجرة النبوية",
    category: "seerah",
    categoryName: "السيرة النبوية",
    description: "حدث مهم من أحداث السيرة النبوية.",
    symbol: "✦",
    intro:
      "الهجرة النبوية من أبرز الأحداث في السيرة، وسيتم عرضها بصورة مرتبة وموثقة.",
    text:
      "سيتم إدراج الأحداث بالتسلسل بعد مراجعتها من مصادر السيرة الموثوقة.",
    source: "سيتم إضافة المصادر المعتمدة."
  },

  {
    id: "companions",
    title: "قصص من حياة الصحابة",
    category: "companions",
    categoryName: "قصص الصحابة",
    description: "مساحة مخصصة لقصص الصحابة والعِبر المستفادة منها.",
    symbol: "✧",
    intro:
      "سيضم هذا القسم قصصًا مختارة من حياة الصحابة مع الحرص على التوثيق.",
    text:
      "المحتوى التفصيلي سيضاف بعد مراجعة المصادر والروايات.",
    source: "سيتم إضافة المصدر لكل قصة."
  },

  {
    id: "saba",
    title: "قصة سبأ",
    category: "quran",
    categoryName: "قصص القرآن",
    description: "قصة قرآنية تحمل الكثير من الدروس والعِبر.",
    symbol: "◇",
    intro:
      "قصة سبأ من القصص التي ورد ذكرها في القرآن الكريم.",
    text:
      "سيتم إعداد القصة بشكل موثق، مع عدم إضافة أي تفاصيل غير ثابتة.",
    source: "سورة سبأ — القرآن الكريم."
  }
];


/* -----------------------------
   STATE
----------------------------- */

let currentStoryId = null;

let favorites =
  JSON.parse(localStorage.getItem("hidayaFavorites") || "[]");

let darkMode =
  localStorage.getItem("hidayaTheme") !== "light";


/* -----------------------------
   DOM
----------------------------- */

const body = document.body;

const homeView = document.getElementById("homeView");
const libraryView = document.getElementById("libraryView");
const favoritesView = document.getElementById("favoritesView");
const aboutView = document.getElementById("aboutView");
const readerView = document.getElementById("readerView");

const featuredStories =
  document.getElementById("featuredStories");

const latestStories =
  document.getElementById("latestStories");

const libraryStories =
  document.getElementById("libraryStories");

const favoriteStories =
  document.getElementById("favoriteStories");

const emptyFavorites =
  document.getElementById("emptyFavorites");

const mobileMenu =
  document.getElementById("mobileMenu");

const menuButton =
  document.getElementById("menuButton");

const searchButton =
  document.getElementById("searchButton");

const themeButton =
  document.getElementById("themeButton");

const searchOverlay =
  document.getElementById("searchOverlay");

const closeSearch =
  document.getElementById("closeSearch");

const searchInput =
  document.getElementById("searchInput");

const searchResults =
  document.getElementById("searchResults");

const toast =
  document.getElementById("toast");

const toastText =
  document.getElementById("toastText");


/* -----------------------------
   THEME
----------------------------- */

function applyTheme() {

  if (darkMode) {
    body.classList.remove("light");
  } else {
    body.classList.add("light");
  }
}

applyTheme();


themeButton.addEventListener("click", () => {

  darkMode = !darkMode;

  localStorage.setItem(
    "hidayaTheme",
    darkMode ? "dark" : "light"
  );

  applyTheme();

  showToast(
    darkMode
      ? "تم تفعيل الوضع الليلي"
      : "تم تفعيل الوضع الفاتح"
  );
});


/* -----------------------------
   VIEW NAVIGATION
----------------------------- */

function showView(viewName) {

  const views = {
    home: homeView,
    library: libraryView,
    favorites: favoritesView,
    about: aboutView,
    reader: readerView
  };

  Object.values(views).forEach(view => {
    if (view) {
      view.classList.remove("active-view");
    }
  });

  const selected = views[viewName];

  if (selected) {
    selected.classList.add("active-view");
  }

  document
    .querySelectorAll("[data-view]")
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.view === viewName
      );

    });

  mobileMenu.classList.remove("open");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  setTimeout(initReveal, 100);
}


document.addEventListener("click", event => {

  const button =
    event.target.closest("[data-view]");

  if (!button) return;

  showView(button.dataset.view);
});


/* -----------------------------
   MOBILE MENU
----------------------------- */

menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});


/* -----------------------------
   STORY CARD
----------------------------- */

function createStoryCard(story) {

  const isFavorite =
    favorites.includes(story.id);

  return `
    <article class="story-card reveal">

      <div class="story-visual">
        <div class="visual-symbol">
          ${story.symbol}
        </div>
      </div>

      <div class="story-content">

        <span class="story-category">
          ${story.categoryName}
        </span>

        <h3>${story.title}</h3>

        <p>
          ${story.description}
        </p>

        <div class="story-footer">

          <button
            class="read-button"
            data-read-story="${story.id}"
          >
            اقرأ القصة ←
          </button>

          <button
            class="favorite-button ${isFavorite ? "active" : ""}"
            data-favorite="${story.id}"
            aria-label="إضافة إلى المفضلة"
          >
            ${isFavorite ? "♥" : "♡"}
          </button>

        </div>

      </div>

    </article>
  `;
}


/* -----------------------------
   RENDER
----------------------------- */

function renderFeatured() {

  featuredStories.innerHTML =
    stories
      .slice(0, 3)
      .map(createStoryCard)
      .join("");

  initReveal();
}


function renderLatest() {

  latestStories.innerHTML =
    stories
      .slice(3, 6)
      .map(createStoryCard)
      .join("");

  initReveal();
}


function renderLibrary(filter = "all") {

  const filtered =
    filter === "all"
      ? stories
      : stories.filter(
          story => story.category === filter
        );

  libraryStories.innerHTML =
    filtered.length
      ? filtered.map(createStoryCard).join("")
      : `
        <div class="empty-state">
          <div>✦</div>
          <h3>لا توجد قصص هنا بعد</h3>
          <p>سيتم إضافة المحتوى قريبًا.</p>
        </div>
      `;

  initReveal();
}


function renderFavorites() {

  const favoriteItems =
    stories.filter(story =>
      favorites.includes(story.id)
    );

  favoriteStories.innerHTML =
    favoriteItems
      .map(createStoryCard)
      .join("");

  emptyFavorites.style.display =
    favoriteItems.length ? "none" : "flex";

  initReveal();
}


/* -----------------------------
   INITIAL RENDER
----------------------------- */

renderFeatured();
renderLatest();
renderLibrary();
renderFavorites();


/* -----------------------------
   FAVORITES
----------------------------- */

document.addEventListener("click", event => {

  const button =
    event.target.closest("[data-favorite]");

  if (!button) return;

  const id = button.dataset.favorite;

  if (favorites.includes(id)) {

    favorites =
      favorites.filter(item => item !== id);

    showToast("تمت إزالة القصة من المفضلة");

  } else {

    favorites.push(id);

    showToast("تمت إضافة القصة إلى المفضلة");
  }

  localStorage.setItem(
    "hidayaFavorites",
    JSON.stringify(favorites)
  );

  renderFeatured();
  renderLatest();

  const activeFilter =
    document.querySelector(".filter.active");

  renderLibrary(
    activeFilter
      ? activeFilter.dataset.filter
      : "all"
  );

  renderFavorites();

  if (currentStoryId === id) {
    updateReaderFavoriteButton();
  }
});


/* -----------------------------
   OPEN STORY
----------------------------- */

document.addEventListener("click", event => {

  const button =
    event.target.closest("[data-read-story]");

  if (!button) return;

  openStory(button.dataset.readStory);
});


function openStory(id) {

  const story =
    stories.find(item => item.id === id);

  if (!story) return;

  currentStoryId = id;

  document.getElementById("readerCategory")
    .textContent = story.categoryName;

  document.getElementById("readerNumber")
    .textContent =
      String(stories.indexOf(story) + 1)
        .padStart(2, "0");

  document.getElementById("readerTitle")
    .textContent = story.title;

  document.getElementById("readerIntro")
    .textContent = story.intro;

  document.getElementById("readerText")
    .textContent = story.text;

  document.getElementById("readerSource")
    .textContent = `المصدر: ${story.source}`;

  document.getElementById("readerCover")
    .querySelector(".reader-cover-symbol")
    .textContent = story.symbol;

  updateReaderFavoriteButton();

  showView("reader");
}


/* -----------------------------
   READER FAVORITE
----------------------------- */

const favoriteReaderButton =
  document.getElementById("favoriteReaderButton");


function updateReaderFavoriteButton() {

  if (!currentStoryId) return;

  const active =
    favorites.includes(currentStoryId);

  favoriteReaderButton.textContent =
    active
      ? "♥ في المفضلة"
      : "♡ المفضلة";
}


favoriteReaderButton.addEventListener("click", () => {

  if (!currentStoryId) return;

  const id = currentStoryId;

  if (favorites.includes(id)) {

    favorites =
      favorites.filter(item => item !== id);

    showToast("تمت إزالة القصة من المفضلة");

  } else {

    favorites.push(id);

    showToast("تمت إضافة القصة إلى المفضلة");
  }

  localStorage.setItem(
    "hidayaFavorites",
    JSON.stringify(favorites)
  );

  updateReaderFavoriteButton();

  renderFavorites();
  renderFeatured();
  renderLatest();
  renderLibrary();
});


/* -----------------------------
   READER NAVIGATION
----------------------------- */

document
  .getElementById("backFromReader")
  .addEventListener("click", () => {
    showView("library");
  });


document
  .getElementById("previousStory")
  .addEventListener("click", () => {

    const index =
      stories.findIndex(
        story => story.id === currentStoryId
      );

    const previous =
      index > 0
        ? stories[index - 1]
        : stories[stories.length - 1];

    openStory(previous.id);
  });


document
  .getElementById("nextStory")
  .addEventListener("click", () => {

    const index =
      stories.findIndex(
        story => story.id === currentStoryId
      );

    const next =
      index < stories.length - 1
        ? stories[index + 1]
        : stories[0];

    openStory(next.id);
  });


/* -----------------------------
   TEXT TO SPEECH
----------------------------- */

let speechActive = false;

document
  .getElementById("readStoryButton")
  .addEventListener("click", () => {

    if (!("speechSynthesis" in window)) {

      showToast(
        "القراءة الآلية غير مدعومة في هذا المتصفح"
      );

      return;
    }

    if (speechActive) {

      speechSynthesis.cancel();

      speechActive = false;

      document
        .getElementById("readStoryButton")
        .textContent = "▶ قراءة النص";

      return;
    }

    const text =
      document
        .getElementById("readerText")
        .textContent;

    const utterance =
      new SpeechSynthesisUtterance(text);

    utterance.lang = "ar-SA";
    utterance.rate = 0.9;
    utterance.pitch = 1;

    utterance.onstart = () => {

      speechActive = true;

      document
        .getElementById("readStoryButton")
        .textContent = "■ إيقاف القراءة";
    };

    utterance.onend = () => {

      speechActive = false;

      document
        .getElementById("readStoryButton")
        .textContent = "▶ قراءة النص";
    };

    utterance.onerror = () => {

      speechActive = false;

      document
        .getElementById("readStoryButton")
        .textContent = "▶ قراءة النص";

      showToast("حدثت مشكلة أثناء القراءة");
    };

    speechSynthesis.cancel();

    speechSynthesis.speak(utterance);
  });


/* -----------------------------
   STOP SPEECH WHEN LEAVING
----------------------------- */

function stopSpeech() {

  if ("speechSynthesis" in window) {
    speechSynthesis.cancel();
  }

  speechActive = false;

  const button =
    document.getElementById("readStoryButton");

  if (button) {
    button.textContent = "▶ قراءة النص";
  }
}


document.addEventListener("click", event => {

  const viewButton =
    event.target.closest("[data-view]");

  if (
    viewButton &&
    viewButton.dataset.view !== "reader"
  ) {
    stopSpeech();
  }
});


/* -----------------------------
   CATEGORY FILTER
----------------------------- */

document.addEventListener("click", event => {

  const filter =
    event.target.closest(".filter");

  if (!filter) return;

  document
    .querySelectorAll(".filter")
    .forEach(button =>
      button.classList.remove("active")
    );

  filter.classList.add("active");

  renderLibrary(filter.dataset.filter);
});


/* -----------------------------
   CATEGORY CARDS
----------------------------- */

document.addEventListener("click", event => {

  const category =
    event.target.closest("[data-category]");

  if (!category) return;

  showView("library");

  const wanted =
    category.dataset.category;

  document
    .querySelectorAll(".filter")
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.filter === wanted
      );

    });

  renderLibrary(wanted);
});


/* -----------------------------
   SEARCH
----------------------------- */

function openSearch() {

  searchOverlay.classList.add("open");

  searchInput.value = "";

  searchResults.innerHTML = `
    <p style="color:var(--muted);font-size:12px;">
      اكتب اسم القصة للبحث...
    </p>
  `;

  setTimeout(() => {
    searchInput.focus();
  }, 100);
}


function closeSearchBox() {

  searchOverlay.classList.remove("open");

  searchInput.blur();
}


searchButton.addEventListener("click", openSearch);

closeSearch.addEventListener("click", closeSearchBox);


searchOverlay.addEventListener("click", event => {

  if (event.target === searchOverlay) {
    closeSearchBox();
  }
});


searchInput.addEventListener("input", () => {

  const query =
    searchInput.value
      .trim()
      .toLowerCase();

  if (!query) {

    searchResults.innerHTML = `
      <p style="color:var(--muted);font-size:12px;">
        اكتب اسم القصة للبحث...
      </p>
    `;

    return;
  }

  const results =
    stories.filter(story =>
      (
        story.title +
        " " +
        story.categoryName +
        " " +
        story.description
      )
      .toLowerCase()
      .includes(query)
    );

  if (!results.length) {

    searchResults.innerHTML = `
      <p style="color:var(--muted);font-size:12px;">
        لم نجد قصة بهذا الاسم.
      </p>
    `;

    return;
  }

  searchResults.innerHTML =
    results.map(story => `
      <div
        class="search-result"
        data-search-story="${story.id}"
      >
        <strong>${story.title}</strong>
        <small>${story.categoryName}</small>
      </div>
    `).join("");
});


document.addEventListener("click", event => {

  const result =
    event.target.closest("[data-search-story]");

  if (!result) return;

  closeSearchBox();

  openStory(result.dataset.searchStory);
});


/* -----------------------------
   KEYBOARD SEARCH
----------------------------- */

document.addEventListener("keydown", event => {

  if (
    event.key === "/" &&
    document.activeElement.tagName !== "INPUT"
  ) {

    event.preventDefault();

    openSearch();
  }

  if (event.key === "Escape") {
    closeSearchBox();
  }
});


/* -----------------------------
   TOAST
----------------------------- */

let toastTimer = null;

function showToast(message) {

  toastText.textContent = message;

  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer =
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2500);
}


/* -----------------------------
   REVEAL ANIMATION
----------------------------- */

function initReveal() {

  const elements =
    document.querySelectorAll(
      ".active-view .reveal"
    );

  if (!("IntersectionObserver" in window)) {

    elements.forEach(element =>
      element.classList.add("visible")
    );

    return;
  }

  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);
          }

        });

      },
      {
        threshold: .08
      }
    );

  elements.forEach(element =>
    observer.observe(element)
  );
}


setTimeout(initReveal, 200);


/* -----------------------------
   CLOSE MOBILE MENU ON OUTSIDE
----------------------------- */

document.addEventListener("click", event => {

  if (
    !mobileMenu.contains(event.target) &&
    !menuButton.contains(event.target)
  ) {
    mobileMenu.classList.remove("open");
  }
});


/* -----------------------------
   PAGE LOAD
----------------------------- */

window.addEventListener("load", () => {

  applyTheme();

  renderFeatured();
  renderLatest();
  renderLibrary();
  renderFavorites();

  initReveal();
}); 
