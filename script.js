/* =========================================================
   الهداية — المرحلة الثانية
   ========================================================= */


/* ================= DATA ================= */

const stories = [

    {
        id: "adam",
        title: "آدم عليه السلام",
        category: "prophets",
        categoryName: "قصص الأنبياء",
        symbol: "آ",
        coverA: "#496f5a",
        coverB: "#142f25",
        description: "بداية قصة الإنسان وخليفته في الأرض.",
        time: "6 دقائق قراءة",

        intro:
            "قصة آدم عليه السلام تحمل بدايات عظيمة عن خلق الإنسان والتوبة والرجوع إلى الله.",

        body: `
            <p>
                هذه الصفحة مخصصة لعرض القصة بصورة منظمة، مع الحفاظ على
                التمييز بين النصوص الثابتة وبين الشروحات الإضافية.
            </p>

            <h2>بداية الرحلة</h2>

            <p>
                تبدأ قصة الإنسان بقصة آدم عليه السلام، الذي خلقه الله
                وكرمه وعلّمه، وكانت قصته بداية رحلة الإنسان في الأرض.
            </p>

            <div class="lesson">
                <strong>العبرة:</strong>
                الإنسان يخطئ، ولكن باب التوبة والرجوع إلى الله مفتوح.
            </div>

            <h2>التوبة والرجوع</h2>

            <p>
                من أهم المعاني التي نتأملها في القصة أن الخطأ لا ينبغي
                أن يكون نهاية الطريق، بل يمكن أن يكون بداية للرجوع
                والإصلاح.
            </p>
        `
    },

    {
        id: "ibrahim",
        title: "إبراهيم عليه السلام",
        category: "prophets",
        categoryName: "قصص الأنبياء",
        symbol: "إ",
        coverA: "#7b6642",
        coverB: "#302519",
        description: "قصة التوحيد والثبات أمام الابتلاء.",
        time: "7 دقائق قراءة",

        intro:
            "من أعظم القصص التي تعلمنا معنى الثبات على الحق والثقة بالله.",

        body: `
            <p>
                قصة إبراهيم عليه السلام من القصص التي يظهر فيها معنى
                الإيمان والتوحيد والثبات أمام الابتلاء.
            </p>

            <h2>الثبات على الحق</h2>

            <p>
                كان إبراهيم عليه السلام مثالًا في قوة اليقين، فلم يكن
                يبحث عن رضا الناس عندما يتعارض ذلك مع الحق.
            </p>

            <div class="lesson">
                <strong>العبرة:</strong>
                قوة الإنسان الحقيقية ليست في عدد من حوله، بل في ثباته
                على ما يعتقد أنه حق.
            </div>

            <h2>الابتلاء</h2>

            <p>
                تتكرر في قصة إبراهيم عليه السلام معاني الابتلاء والصبر
                والثقة بالله، وهي معانٍ يحتاج إليها الإنسان في حياته.
            </p>
        `
    },

    {
        id: "yusuf",
        title: "يوسف عليه السلام",
        category: "prophets",
        categoryName: "قصص الأنبياء",
        symbol: "ي",
        coverA: "#586a65",
        coverB: "#182b27",
        description: "قصة الصبر والعفو وتدبير الله.",
        time: "9 دقائق قراءة",

        intro:
            "قصة يوسف عليه السلام رحلة طويلة من الابتلاء إلى التمكين، ومن الألم إلى الفرج.",

        body: `
            <p>
                قصة يوسف عليه السلام من أجمل القصص التي وردت في القرآن،
                وتظهر فيها معاني الصبر والعفو وحسن الظن بالله.
            </p>

            <h2>ابتلاءات متتابعة</h2>

            <p>
                مرت حياة يوسف عليه السلام بمراحل صعبة ومتغيرة، لكن
                الأحداث لم تكن نهاية القصة، بل كانت أجزاء من طريق طويل.
            </p>

            <div class="lesson">
                <strong>العبرة:</strong>
                قد لا نفهم الحكمة من بعض الأحداث أثناء وقوعها، لكن ذلك
                لا يعني أنها بلا حكمة.
            </div>

            <h2>العفو عند المقدرة</h2>

            <p>
                من المعاني العظيمة في القصة القدرة على العفو عندما تتغير
                الظروف ويصبح الإنسان قادرًا على الرد.
            </p>
        `
    },

    {
        id: "yunus",
        title: "يونس عليه السلام",
        category: "prophets",
        categoryName: "قصص الأنبياء",
        symbol: "ي",
        coverA: "#315b67",
        coverB: "#102b35",
        description: "قصة الدعاء والرجوع إلى الله.",
        time: "5 دقائق قراءة",

        intro:
            "قصة تعلمنا أن الرجوع إلى الله لا يغلق بابه، وأن الدعاء طريق من طرق الأمل.",

        body: `
            <p>
                تحمل قصة يونس عليه السلام معاني عظيمة عن الدعاء والرجوع
                إلى الله وعدم اليأس من رحمته.
            </p>

            <h2>الدعاء</h2>

            <p>
                عندما يمر الإنسان بضيق شديد قد يشعر أن الأبواب أغلقت،
                لكن القصة تذكرنا بأن باب الله لا يغلق أمام من يرجع إليه.
            </p>

            <div class="lesson">
                <strong>العبرة:</strong>
                لا تجعل شدة الموقف تمنعك من الدعاء والرجوع إلى الله.
            </div>
        `
    },

    {
        id: "nuh",
        title: "نوح عليه السلام",
        category: "prophets",
        categoryName: "قصص الأنبياء",
        symbol: "ن",
        coverA: "#496c75",
        coverB: "#172e35",
        description: "سنوات من الدعوة والصبر والثبات.",
        time: "7 دقائق قراءة",

        intro:
            "قصة نوح عليه السلام مثال واضح على الصبر الطويل والثبات على الدعوة.",

        body: `
            <p>
                عاش نوح عليه السلام مرحلة طويلة من الدعوة والصبر،
                وتظهر قصته قيمة الاستمرار في العمل الصالح حتى عندما
                تكون النتائج بطيئة.
            </p>

            <h2>الصبر</h2>

            <p>
                الصبر ليس مجرد انتظار، بل هو الاستمرار في الطريق الصحيح
                رغم صعوبة الظروف.
            </p>

            <div class="lesson">
                <strong>العبرة:</strong>
                النجاح الحقيقي ليس دائمًا في سرعة النتائج، بل في الثبات
                على الطريق الصحيح.
            </div>
        `
    },

    {
        id: "musa",
        title: "موسى عليه السلام",
        category: "quran",
        categoryName: "قصص القرآن",
        symbol: "م",
        coverA: "#496850",
        coverB: "#162d23",
        description: "قصة المواجهة والثقة بنصر الله.",
        time: "8 دقائق قراءة",

        intro:
            "من القصص التي تجمع بين الخوف والشجاعة، وبين الأخذ بالأسباب والثقة بالله.",

        body: `
            <p>
                قصة موسى عليه السلام مليئة بالمواقف التي يظهر فيها
                معنى الشجاعة والثقة بالله مع الأخذ بالأسباب.
            </p>

            <h2>مواجهة الخوف</h2>

            <p>
                الإنسان قد يشعر بالخوف حتى وهو يسير في الطريق الصحيح،
                لكن وجود الخوف لا يعني بالضرورة التراجع.
            </p>

            <div class="lesson">
                <strong>العبرة:</strong>
                الشجاعة ليست غياب الخوف، وإنما الاستمرار في الحق رغم الخوف.
            </div>
        `
    },

    {
        id: "cave",
        title: "أصحاب الكهف",
        category: "quran",
        categoryName: "قصص القرآن",
        symbol: "ك",
        coverA: "#564d67",
        coverB: "#201a2a",
        description: "قصة الفتية والثبات على الإيمان.",
        time: "6 دقائق قراءة",

        intro:
            "قصة أصحاب الكهف من القصص القرآنية التي تحمل معاني الثبات والإيمان.",

        body: `
            <p>
                يروي القرآن قصة مجموعة من الفتية الذين تمسكوا بإيمانهم
                في ظروف صعبة، واختاروا الابتعاد عن الفتنة حفاظًا على دينهم.
            </p>

            <h2>الثبات</h2>

            <p>
                من أهم المعاني التي نتوقف عندها أن الإيمان قد يحتاج إلى
                موقف واضح عندما تتعارض البيئة المحيطة مع القناعة.
            </p>

            <div class="lesson">
                <strong>العبرة:</strong>
                الحفاظ على المبادئ يحتاج أحيانًا إلى شجاعة ووضوح.
            </div>
        `
    },

    {
        id: "saba",
        title: "قصة سبأ",
        category: "quran",
        categoryName: "قصص القرآن",
        symbol: "س",
        coverA: "#765d38",
        coverB: "#302315",
        description: "قصة النعمة والشكر وتغير الأحوال.",
        time: "5 دقائق قراءة",

        intro:
            "قصة تحمل معاني مهمة حول النعم والشكر وعدم الاغترار بما نملك.",

        body: `
            <p>
                تذكر قصة سبأ جانبًا مهمًا من علاقة الإنسان بالنعم
                وكيف يمكن أن يتغير حال المجتمعات عندما تتغير طريقة
                تعاملها مع ما أنعم الله به عليها.
            </p>

            <h2>الشكر</h2>

            <p>
                النعمة ليست فقط شيئًا نملكه، بل مسؤولية تحتاج إلى شكر
                وحسن استخدام.
            </p>

            <div class="lesson">
                <strong>العبرة:</strong>
                المحافظة على النعمة تبدأ بمعرفة فضل الله وشكره.
            </div>
        `
    },

    {
        id: "migration",
        title: "الهجرة النبوية",
        category: "seerah",
        categoryName: "السيرة النبوية",
        symbol: "هـ",
        coverA: "#345d4b",
        coverB: "#112a20",
        description: "محطة عظيمة من السيرة النبوية.",
        time: "8 دقائق قراءة",

        intro:
            "الهجرة محطة تاريخية عظيمة في السيرة، تجمع بين التخطيط والتوكل والصبر.",

        body: `
            <p>
                الهجرة النبوية واحدة من أبرز المحطات في السيرة النبوية،
                وفيها تظهر أهمية التخطيط مع التوكل على الله.
            </p>

            <h2>الأخذ بالأسباب</h2>

            <p>
                التوكل لا يعني ترك الأسباب، بل يجمع بين الثقة بالله
                والعمل بما يستطيع الإنسان فعله.
            </p>

            <div class="lesson">
                <strong>العبرة:</strong>
                خطط جيدًا، وابذل ما تستطيع، ثم توكل على الله.
            </div>
        `
    }
];


/* ================= STATE ================= */

let currentView = "home";
let currentStory = null;

let currentFilter = "all";
let searchTerm = "";

let favorites = JSON.parse(
    localStorage.getItem("alhidayah-favorites") || "[]"
);


/* ================= ELEMENTS ================= */

const views = {
    home: document.getElementById("homeView"),
    library: document.getElementById("libraryView"),
    favorites: document.getElementById("favoritesView"),
    about: document.getElementById("aboutView"),
    reader: document.getElementById("readerView")
};

const featuredGrid = document.getElementById("featuredGrid");
const latestGrid = document.getElementById("latestGrid");
const libraryGrid = document.getElementById("libraryGrid");
const favoritesGrid = document.getElementById("favoritesGrid");

const favoritesEmpty = document.getElementById("favoritesEmpty");
const libraryEmpty = document.getElementById("libraryEmpty");

const resultCount = document.getElementById("resultCount");
const favoriteCount = document.getElementById("favoriteCount");

const searchOverlay = document.getElementById("searchOverlay");
const globalSearch = document.getElementById("globalSearch");
const searchResults = document.getElementById("searchResults");

const librarySearch = document.getElementById("librarySearch");

const toast = document.getElementById("toast");
const toastText = document.getElementById("toastText");
const toastIcon = document.getElementById("toastIcon");


/* ================= INIT ================= */

document.addEventListener("DOMContentLoaded", () => {

    renderFeatured();
    renderLatest();
    renderLibrary();
    renderFavorites();

    updateFavoriteCount();

    setupNavigation();
    setupCategories();
    setupFilters();
    setupSearch();
    setupTheme();
    setupMenu();
    setupReader();

    setupReveal();

});


/* ================= NAVIGATION ================= */

function setupNavigation() {

    document.addEventListener("click", (event) => {

        const viewButton = event.target.closest("[data-view]");

        if (viewButton) {

            const view = viewButton.dataset.view;

            if (views[view]) {
                switchView(view);
            }

        }

        const scrollButton = event.target.closest("[data-scroll]");

        if (scrollButton) {

            const target = document.getElementById(
                scrollButton.dataset.scroll
            );

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        }

    });

}


function switchView(viewName) {

    if (!views[viewName]) {
        return;
    }

    currentView = viewName;

    Object.values(views).forEach(view => {
        view.classList.remove("active");
    });

    views[viewName].classList.add("active");

    document.querySelectorAll(".nav-link").forEach(link => {
        link.classList.toggle(
            "active",
            link.dataset.view === viewName
        );
    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    closeMobileMenu();

    if (viewName === "library") {
        renderLibrary();
    }

    if (viewName === "favorites") {
        renderFavorites();
    }

    setTimeout(setupReveal, 50);
}


/* ================= FEATURED ================= */

function renderFeatured() {

    const featured = [
        "yusuf",
        "musa",
        "ibrahim"
    ];

    featuredGrid.innerHTML = featured
        .map(id => createFeaturedCard(findStory(id)))
        .join("");

}


function createFeaturedCard(story) {

    return `
        <article
            class="featured-card"
            style="--card-image: linear-gradient(145deg, ${story.coverA}, ${story.coverB});"
            data-story="${story.id}"
        >

            <span class="card-tag">
                ${story.categoryName}
            </span>

            <h3>${story.title}</h3>

            <p>${story.description}</p>

            <span class="read-card">
                ابدأ القراءة ←
            </span>

        </article>
    `;

}


/* ================= LATEST ================= */

function renderLatest() {

    const latest = [
        "adam",
        "yunus",
        "cave",
        "saba",
        "migration",
        "nuh"
    ];

    latestGrid.innerHTML = latest
        .map(id => createStoryCard(findStory(id)))
        .join("");

    attachStoryEvents(latestGrid);
}


/* ================= LIBRARY ================= */

function renderLibrary() {

    let filtered = [...stories];

    if (currentFilter !== "all") {
        filtered = filtered.filter(
            story => story.category === currentFilter
        );
    }

    if (searchTerm.trim()) {

        const query = searchTerm
            .trim()
            .toLowerCase();

        filtered = filtered.filter(story => {

            return (
                story.title.toLowerCase().includes(query) ||
                story.description.toLowerCase().includes(query) ||
                story.categoryName.toLowerCase().includes(query)
            );

        });

    }

    resultCount.textContent = `${filtered.length} قصة`;

    libraryEmpty.classList.toggle(
        "hidden",
        filtered.length !== 0
    );

    libraryGrid.innerHTML = filtered
        .map(createStoryCard)
        .join("");

    attachStoryEvents(libraryGrid);

}


/* ================= FAVORITES ================= */

function renderFavorites() {

    const savedStories = stories.filter(
        story => favorites.includes(story.id)
    );

    favoritesEmpty.style.display =
        savedStories.length ? "none" : "block";

    favoritesGrid.innerHTML = savedStories
        .map(createStoryCard)
        .join("");

    attachStoryEvents(favoritesGrid);

}


function updateFavoriteCount() {

    favoriteCount.textContent = favorites.length;

}


function isFavorite(id) {

    return favorites.includes(id);

}


function toggleFavorite(id) {

    const index = favorites.indexOf(id);

    if (index === -1) {

        favorites.push(id);

        showToast(
            "تمت إضافة القصة إلى المفضلة",
            "♥"
        );

    } else {

        favorites.splice(index, 1);

        showToast(
            "تم حذف القصة من المفضلة",
            "✓"
        );

    }

    localStorage.setItem(
        "alhidayah-favorites",
        JSON.stringify(favorites)
    );

    updateFavoriteCount();

    renderLatest();
    renderLibrary();
    renderFavorites();

    updateReaderFavorite();

}


/* ================= STORY CARD ================= */

function createStoryCard(story) {

    const saved = isFavorite(story.id);

    return `
        <article class="story-card">

            <div
                class="story-cover"
                style="
                    --cover-a: ${story.coverA};
                    --cover-b: ${story.coverB};
                "
            >

                <div class="story-symbol">
                    ${story.symbol}
                </div>

                <span class="story-tag">
                    ${story.categoryName}
                </span>

                <button
                    class="favorite-btn ${saved ? "saved" : ""}"
                    data-favorite="${story.id}"
                    aria-label="حفظ القصة"
                >
                    ${saved ? "♥" : "♡"}
                </button>

            </div>

            <div class="story-info">

                <h3>${story.title}</h3>

                <p>
                    ${story.description}
                </p>

                <div class="story-footer">

                    <span>
                        ${story.time}
                    </span>

                    <button
                        class="read-btn"
                        data-story="${story.id}"
                    >
                        قراءة القصة ←
                    </button>

                </div>

            </div>

        </article>
    `;

}


function attachStoryEvents(container) {

    container.querySelectorAll("[data-story]")
        .forEach(button => {

            button.addEventListener("click", event => {

                event.stopPropagation();

                openStory(
                    button.dataset.story
                );

            });

        });


    container.querySelectorAll("[data-favorite]")
        .forEach(button => {

            button.addEventListener("click", event => {

                event.stopPropagation();

                toggleFavorite(
                    button.dataset.favorite
                );

            });

        });

}


/* ================= OPEN STORY ================= */

function openStory(id) {

    const story = findStory(id);

    if (!story) {
        return;
    }

    currentStory = story;

    document.getElementById("readerCategory")
        .textContent = story.categoryName;

    document.getElementById("readerTitle")
        .textContent = story.title;

    document.getElementById("readerIntro")
        .textContent = story.intro;

    document.getElementById("readerTime")
        .textContent = story.time;

    document.getElementById("readerBody")
        .innerHTML = story.body;

    updateReaderFavorite();

    renderNextStory();

    switchView("reader");

}


function updateReaderFavorite() {

    if (!currentStory) {
        return;
    }

    const button =
        document.getElementById("readerFavorite");

    const saved =
        isFavorite(currentStory.id);

    button.classList.toggle("saved", saved);

    button.innerHTML =
        saved
            ? "♥ <span>محفوظة</span>"
            : "♡ <span>حفظ</span>";

}


function setupReader() {

    document
        .getElementById("backFromReader")
        .addEventListener("click", () => {

            switchView("library");

        });


    document
        .getElementById("readerFavorite")
        .addEventListener("click", () => {

            if (currentStory) {
                toggleFavorite(currentStory.id);
            }

        });

}


function renderNextStory() {

    if (!currentStory) {
        return;
    }

    const index =
        stories.findIndex(
            story => story.id === currentStory.id
        );

    const next =
        stories[(index + 1) % stories.length];

    document.getElementById("nextStoryBox")
        .innerHTML = `
            <small>القصة التالية</small>

            <button data-next-story="${next.id}">
                ${next.title} ←
            </button>
        `;

    const button =
        document.querySelector("[data-next-story]");

    if (button) {

        button.addEventListener("click", () => {
            openStory(button.dataset.nextStory);
        });

    }

}


/* ================= FIND STORY ================= */

function findStory(id) {

    return stories.find(
        story => story.id === id
    );

}


/* ================= CATEGORIES ================= */

function setupCategories() {

    document
        .querySelectorAll("[data-category]")
        .forEach(button => {

            button.addEventListener("click", () => {

                currentFilter =
                    button.dataset.category;

                searchTerm = "";

                librarySearch.value = "";

                document
                    .querySelectorAll(".filter")
                    .forEach(filter => {

                        filter.classList.toggle(
                            "active",
                            filter.dataset.filter === currentFilter
                        );

                    });

                switchView("library");

            });

        });

}


/* ================= FILTERS ================= */

function setupFilters() {

    document
        .querySelectorAll(".filter")
        .forEach(button => {

            button.addEventListener("click", () => {

                currentFilter =
                    button.dataset.filter;

                document
                    .querySelectorAll(".filter")
                    .forEach(filter => {

                        filter.classList.toggle(
                            "active",
                            filter === button
                        );

                    });

                renderLibrary();

            });

        });


    document
        .getElementById("clearFilter")
        .addEventListener("click", () => {

            currentFilter = "all";
            searchTerm = "";

            librarySearch.value = "";

            document
                .querySelectorAll(".filter")
                .forEach(filter => {

                    filter.classList.toggle(
                        "active",
                        filter.dataset.filter === "all"
                    );

                });

            renderLibrary();

        });


    librarySearch.addEventListener(
        "input",
        () => {

            searchTerm =
                librarySearch.value;

            renderLibrary();

        }
    );

}


/* ================= SEARCH ================= */

function setupSearch() {

    document
        .getElementById("searchButton")
        .addEventListener("click", openSearch);

    document
        .getElementById("closeSearch")
        .addEventListener("click", closeSearch);


    searchOverlay.addEventListener(
        "click",
        event => {

            if (event.target === searchOverlay) {
                closeSearch();
            }

        }
    );


    globalSearch.addEventListener(
        "input",
        () => {

            renderSearchResults(
                globalSearch.value
            );

        }
    );


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "/" &&
                document.activeElement.tagName !== "INPUT"
            ) {

                event.preventDefault();

                openSearch();

            }

            if (event.key === "Escape") {
                closeSearch();
            }

        }
    );

}


function openSearch() {

    searchOverlay.classList.add("open");

    setTimeout(() => {
        globalSearch.focus();
    }, 200);

}


function closeSearch() {

    searchOverlay.classList.remove("open");

    globalSearch.value = "";

    searchResults.innerHTML = "";

}


function renderSearchResults(value) {

    const query =
        value.trim().toLowerCase();

    if (!query) {

        searchResults.innerHTML = `
            <div class="search-result">
                <span>ابدأ بكتابة اسم القصة</span>
                <small>${stories.length} قصص متاحة</small>
            </div>
        `;

        return;
    }


    const results =
        stories.filter(story => {

            return (
                story.title.toLowerCase().includes(query) ||
                story.description.toLowerCase().includes(query) ||
                story.categoryName.toLowerCase().includes(query)
            );

        });


    if (!results.length) {

        searchResults.innerHTML = `
            <div class="search-result">
                <span>لا توجد نتائج</span>
                <small>جرّب كلمة أخرى</small>
            </div>
        `;

        return;
    }


    searchResults.innerHTML =
        results
            .map(story => `
                <button
                    class="search-result"
                    data-search-story="${story.id}"
                >
                    <span>${story.title}</span>
                    <small>${story.categoryName}</small>
                </button>
            `)
            .join("");


    searchResults
        .querySelectorAll("[data-search-story]")
        .forEach(button => {

            button.addEventListener("click", () => {

                closeSearch();

                openStory(
                    button.dataset.searchStory
                );

            });

        });

}


/* ================= THEME ================= */

function setupTheme() {

    const savedTheme =
        localStorage.getItem("alhidayah-theme");

    if (savedTheme === "dark") {
        document.documentElement.dataset.theme = "dark";
    }


    document
        .getElementById("themeButton")
        .addEventListener("click", () => {

            const dark =
                document.documentElement.dataset.theme === "dark";

            if (dark) {

                delete document.documentElement.dataset.theme;

                localStorage.setItem(
                    "alhidayah-theme",
                    "light"
                );

            } else {

                document.documentElement.dataset.theme = "dark";

                localStorage.setItem(
                    "alhidayah-theme",
                    "dark"
                );

            }

        });

}


/* ================= MENU ================= */

function setupMenu() {

    document
        .getElementById("menuButton")
        .addEventListener("click", () => {

            document
                .getElementById("mobileMenu")
                .classList.toggle("open");

        });

}


function closeMobileMenu() {

    document
        .getElementById("mobileMenu")
        .classList.remove("open");

}


/* ================= TOAST ================= */

let toastTimer;

function showToast(message, icon = "✓") {

    toastText.textContent = message;
    toastIcon.textContent = icon;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}


/* ================= REVEAL ================= */

function setupReveal() {

    const elements =
        document.querySelectorAll(".reveal");

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: .08
            }
        );


    elements.forEach(element => {

        if (!element.classList.contains("visible")) {
            observer.observe(element);
        }

    });

}


/* ================= CARD GLOBAL CLICK ================= */

document.addEventListener("click", event => {

    const card =
        event.target.closest(".featured-card");

    if (!card) {
        return;
    }

    openStory(card.dataset.story);

}); 
