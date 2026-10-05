/* =========================================================
   AL-HIDAYAH
   Main JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     STORY DATABASE
     ======================================================= */

  const stories = {

    adam: {
      title: "قصة آدم عليه السلام",
      subtitle: "نبي الله",
      category: "قصص الأنبياء",
      text: `
        <h3>بداية قصة الإنسان</h3>

        <p>
          آدم عليه السلام هو أبو البشر، وقد أخبرنا القرآن الكريم
          عن خلقه وابتلاءه وما جرى له في الجنة ثم هبوطه إلى الأرض.
        </p>

        <p>
          وتعلمنا قصته معاني عظيمة من أهمها طاعة الله، والاعتراف
          بالخطأ، والرجوع إليه سبحانه وتعالى.
        </p>

        <div class="story-note">
          هذه الصفحة نموذج لتصميم مكتبة القصص. سيتم لاحقًا
          إدخال النصوص الكاملة من مصادر موثوقة ومراجعتها قبل نشرها.
        </div>
      `
    },

    ibrahim: {
      title: "قصة إبراهيم عليه السلام",
      subtitle: "نبي الله وخليله",
      category: "قصص الأنبياء",
      text: `
        <h3>رحلة التوحيد</h3>

        <p>
          إبراهيم عليه السلام من الأنبياء الذين ذكر القرآن الكريم
          قصصهم ومواقفهم في الدعوة إلى توحيد الله سبحانه وتعالى.
        </p>

        <p>
          وتظهر في قصته معاني الثبات والشجاعة في الحق، والتوكل
          على الله، والصبر أمام الابتلاء.
        </p>

        <div class="story-note">
          سيتم تطوير هذه القصة وإضافة أحداثها ومصادرها الموثوقة
          في النسخة القادمة من المنصة.
        </div>
      `
    },

    yunus: {
      title: "قصة يونس عليه السلام",
      subtitle: "نبي الله",
      category: "قصص الأنبياء",
      text: `
        <h3>قصة الدعاء والرجوع إلى الله</h3>

        <p>
          ذكر القرآن الكريم قصة يونس عليه السلام، وهي قصة تحمل
          معاني عظيمة في الصبر والرجوع إلى الله سبحانه وتعالى.
        </p>

        <p>
          وتذكرنا القصة بأهمية الدعاء، والافتقار إلى الله،
          وعدم اليأس من رحمته.
        </p>

        <div class="story-note">
          النص الكامل سيضاف بعد تجهيز المحتوى من مصادر موثوقة.
        </div>
      `
    },

    yusuf: {
      title: "قصة يوسف عليه السلام",
      subtitle: "نبي الله",
      category: "قصص الأنبياء",
      text: `
        <h3>قصة الصبر والعفو</h3>

        <p>
          قصة يوسف عليه السلام من القصص التي وردت بتفصيل كبير
          في القرآن الكريم، وتحمل أحداثًا كثيرة من الابتلاء
          والصبر ثم الفرج.
        </p>

        <p>
          ومن أبرز المعاني التي تظهر فيها الصبر، وحسن الظن بالله،
          والعفو عند القدرة.
        </p>

        <div class="story-note">
          ستتم إضافة القصة كاملة بصورة منظمة مع الإشارة إلى
          الآيات والمصادر ذات الصلة.
        </div>
      `
    },

    musa: {
      title: "قصة موسى عليه السلام",
      subtitle: "نبي الله",
      category: "قصص الأنبياء",
      text: `
        <h3>رحلة مليئة بالابتلاء</h3>

        <p>
          من أكثر قصص الأنبياء حضورًا في القرآن الكريم قصة موسى
          عليه السلام، وقد تضمنت مراحل متعددة من حياته ودعوته.
        </p>

        <p>
          وتظهر في قصته معاني الثبات والصبر والتوكل على الله
          ومواجهة الصعوبات في سبيل الحق.
        </p>

        <div class="story-note">
          هذه نسخة مختصرة للعرض التجريبي. سيتم وضع المحتوى الكامل
          والمراجع عند بناء مكتبة القصص النهائية.
        </div>
      `
    },

    nuh: {
      title: "قصة نوح عليه السلام",
      subtitle: "نبي الله",
      category: "قصص الأنبياء",
      text: `
        <h3>سنوات من الصبر</h3>

        <p>
          ذكر القرآن الكريم دعوة نوح عليه السلام إلى قومه،
          وصبره الطويل في دعوتهم إلى عبادة الله وحده.
        </p>

        <p>
          وتعلمنا قصته أن النتائج ليست دائمًا بيد الإنسان،
          وأن واجبه أن يؤدي ما عليه ويثبت على الحق.
        </p>

        <div class="story-note">
          سيتم توسيع القصة وإضافة المصادر والآيات المتعلقة بها
          في مرحلة إعداد المحتوى.
        </div>
      `
    },

    cave: {
      title: "أصحاب الكهف",
      subtitle: "قصة من القرآن الكريم",
      category: "قصص من القرآن",
      text: `
        <h3>فتية آمنوا بربهم</h3>

        <p>
          ذكر القرآن الكريم قصة أصحاب الكهف، وهم فتية آمنوا بربهم
          وتمسكوا بإيمانهم في مواجهة قومهم.
        </p>

        <p>
          وتظهر في القصة معاني الثبات على الإيمان واللجوء إلى الله
          والثقة برحمته.
        </p>

        <div class="story-note">
          ستتم إضافة تفاصيل القصة ومراجع الآيات بصورة دقيقة
          في النسخة النهائية.
        </div>
      `
    },

    saba: {
      title: "قصة أصحاب سبأ",
      subtitle: "قصة من القرآن الكريم",
      category: "قصص من القرآن",
      text: `
        <h3>النعمة والشكر</h3>

        <p>
          تحدث القرآن الكريم عن قوم سبأ وما أنعم الله عليهم به،
          ثم ذكر ما حدث لهم عندما أعرضوا عن شكر النعمة.
        </p>

        <p>
          وتحمل القصة تذكيرًا بأهمية شكر نعم الله وعدم الاغترار
          بها.
        </p>

        <div class="story-note">
          المحتوى التفصيلي سيضاف بعد تجهيز المادة العلمية
          ومراجعتها.
        </div>
      `
    },

    migration: {
      title: "الهجرة النبوية",
      subtitle: "من السيرة النبوية",
      category: "السيرة النبوية",
      text: `
        <h3>رحلة إلى المدينة</h3>

        <p>
          الهجرة النبوية حدث عظيم في السيرة النبوية، انتقل فيه
          النبي ﷺ وأصحابه من مكة إلى المدينة في مرحلة مهمة من
          تاريخ الدعوة الإسلامية.
        </p>

        <p>
          وتحمل أحداث الهجرة معاني عظيمة في الأخذ بالأسباب،
          والتوكل على الله، والصبر والثبات.
        </p>

        <div class="story-note">
          سيتم إعداد صفحة كاملة للهجرة تتضمن الأحداث والمراجع
          بصورة مرتبة وموثوقة.
        </div>
      `
    }

  };


  /* =======================================================
     ELEMENTS
     ======================================================= */

  const header = document.getElementById("header");
  const mobileMenu = document.getElementById("mobileMenu");
  const mainNav = document.getElementById("mainNav");

  const themeButton = document.getElementById("themeButton");

  const searchButton = document.getElementById("searchButton");
  const searchOverlay = document.getElementById("searchOverlay");
  const closeSearch = document.getElementById("closeSearch");
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");

  const storyModal = document.getElementById("storyModal");
  const modalClose = document.getElementById("modalClose");
  const modalCloseBottom = document.getElementById("modalCloseBottom");

  const modalTitle = document.getElementById("modalTitle");
  const modalSubtitle = document.getElementById("modalSubtitle");
  const modalCategory = document.getElementById("modalCategory");
  const modalContent = document.getElementById("modalContent");
  const modalFavorite = document.getElementById("modalFavorite");

  const toast = document.getElementById("toast");
  const toastText = document.getElementById("toastText");

  let currentStoryId = null;


  /* =======================================================
     HEADER SCROLL
     ======================================================= */

  function updateHeader() {

    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

  }

  window.addEventListener("scroll", updateHeader);

  updateHeader();


  /* =======================================================
     MOBILE MENU
     ======================================================= */

  mobileMenu.addEventListener("click", () => {

    mainNav.classList.toggle("open");

  });


  document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

      mainNav.classList.remove("open");

    });

  });


  /* =======================================================
     DARK MODE
     ======================================================= */

  const savedTheme = localStorage.getItem("hidayah-theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }

  themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    localStorage.setItem(
      "hidayah-theme",
      isDark ? "dark" : "light"
    );

    showToast(
      isDark
        ? "تم تفعيل الوضع الليلي"
        : "تم تفعيل الوضع النهاري"
    );

  });


  /* =======================================================
     SEARCH
     ======================================================= */

  function openSearch() {

    searchOverlay.classList.add("open");

    setTimeout(() => {
      searchInput.focus();
    }, 200);

    document.body.classList.add("modal-open");

  }


  function closeSearchOverlay() {

    searchOverlay.classList.remove("open");

    document.body.classList.remove("modal-open");

    searchInput.value = "";

    searchResults.innerHTML = "";

  }


  searchButton.addEventListener("click", openSearch);

  closeSearch.addEventListener(
    "click",
    closeSearchOverlay
  );


  searchOverlay.addEventListener("click", event => {

    if (event.target === searchOverlay) {
      closeSearchOverlay();
    }

  });


  document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

      closeSearchOverlay();
      closeStoryModal();

    }

  });


  searchInput.addEventListener("input", () => {

    const query = searchInput.value.trim().toLowerCase();

    if (!query) {
      searchResults.innerHTML = "";
      return;
    }

    const matches = Object.entries(stories)
      .filter(([id, story]) => {

        return (
          story.title.toLowerCase().includes(query) ||
          story.category.toLowerCase().includes(query)
        );

      });


    if (matches.length === 0) {

      searchResults.innerHTML = `
        <div style="padding:20px;text-align:center;color:var(--text-secondary);font-size:12px;">
          لا توجد نتائج مطابقة.
        </div>
      `;

      return;

    }


    searchResults.innerHTML = matches
      .map(([id, story]) => {

        return `
          <div class="search-result">

            <div>
              <strong>${story.title}</strong>
              <small>${story.category}</small>
            </div>

            <button
              type="button"
              data-search-story="${id}">
              قراءة
            </button>

          </div>
        `;

      })
      .join("");

  });


  searchResults.addEventListener("click", event => {

    const button =
      event.target.closest("[data-search-story]");

    if (!button) return;

    const id = button.dataset.searchStory;

    closeSearchOverlay();

    openStory(id);

  });


  /* =======================================================
     STORY MODAL
     ======================================================= */

  function openStory(id) {

    const story = stories[id];

    if (!story) return;

    currentStoryId = id;

    modalTitle.textContent = story.title;
    modalSubtitle.textContent = story.subtitle;
    modalCategory.textContent = story.category;
    modalContent.innerHTML = story.text;

    updateModalFavoriteButton();

    storyModal.classList.add("open");
    document.body.classList.add("modal-open");

  }


  function closeStoryModal() {

    storyModal.classList.remove("open");

    document.body.classList.remove("modal-open");

    currentStoryId = null;

  }


  document.querySelectorAll("[data-story]").forEach(button => {

    button.addEventListener("click", () => {

      const id = button.dataset.story;

      openStory(id);

    });

  });


  modalClose.addEventListener(
    "click",
    closeStoryModal
  );

  modalCloseBottom.addEventListener(
    "click",
    closeStoryModal
  );


  storyModal.addEventListener("click", event => {

    if (event.target === storyModal) {
      closeStoryModal();
    }

  });


  /* =======================================================
     FAVORITES
     ======================================================= */

  function getFavorites() {

    try {

      return JSON.parse(
        localStorage.getItem("hidayah-favorites") || "[]"
      );

    } catch {

      return [];

    }

  }


  function saveFavorites(favorites) {

    localStorage.setItem(
      "hidayah-favorites",
      JSON.stringify(favorites)
    );

  }


  function isFavorite(id) {

    return getFavorites().includes(id);

  }


  function toggleFavorite(id) {

    let favorites = getFavorites();

    if (favorites.includes(id)) {

      favorites = favorites.filter(
        item => item !== id
      );

      showToast("تمت إزالة القصة من المفضلة");

    } else {

      favorites.push(id);

      showToast("تم حفظ القصة في المفضلة");

    }

    saveFavorites(favorites);

    updateFavoriteButtons();

    updateModalFavoriteButton();

  }


  function updateFavoriteButtons() {

    const favorites = getFavorites();

    document
      .querySelectorAll("[data-favorite]")
      .forEach(button => {

        const id = button.dataset.favorite;

        const saved = favorites.includes(id);

        button.classList.toggle("saved", saved);

        button.textContent = saved ? "♥" : "♡";

      });

  }


  function updateModalFavoriteButton() {

    if (!currentStoryId) return;

    const saved = isFavorite(currentStoryId);

    modalFavorite.textContent = saved
      ? "♥ إزالة من المفضلة"
      : "♡ حفظ في المفضلة";

  }


  document
    .querySelectorAll("[data-favorite]")
    .forEach(button => {

      button.addEventListener("click", event => {

        event.stopPropagation();

        toggleFavorite(
          button.dataset.favorite
        );

      });

    });


  modalFavorite.addEventListener("click", () => {

    if (currentStoryId) {
      toggleFavorite(currentStoryId);
    }

  });


  updateFavoriteButtons();


  /* =======================================================
     FILTERS
     ======================================================= */

  const filterButtons =
    document.querySelectorAll(".filter-button");

  const storyCards =
    document.querySelectorAll(".story-card");

  const emptyState =
    document.getElementById("emptyState");


  function filterStories(filter) {

    let visibleCount = 0;

    storyCards.forEach(card => {

      const category = card.dataset.category;

      const shouldShow =
        filter === "all" ||
        category === filter;

      if (shouldShow) {

        card.style.display = "";

        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, 10);

        visibleCount++;

      } else {

        card.style.display = "none";

      }

    });


    emptyState.classList.toggle(
      "show",
      visibleCount === 0
    );

  }


  filterButtons.forEach(button => {

    button.addEventListener("click", () => {

      filterButtons.forEach(btn =>
        btn.classList.remove("active")
      );

      button.classList.add("active");

      filterStories(
        button.dataset.filter
      );

      document
        .getElementById("stories")
        .scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

    });

  });


  /* =======================================================
     CATEGORY CARDS
     ======================================================= */

  document
    .querySelectorAll("[data-filter]")
    .forEach(button => {

      if (
        !button.classList.contains("filter-button")
      ) {

        button.addEventListener("click", () => {

          const filter =
            button.dataset.filter;

          const targetButton =
            document.querySelector(
              `.filter-button[data-filter="${filter}"]`
            );

          if (targetButton) {

            targetButton.click();

          } else {

            filterButtons.forEach(btn =>
              btn.classList.remove("active")
            );

            const allButton =
              document.querySelector(
                '.filter-button[data-filter="all"]'
              );

            if (allButton) {
              allButton.classList.add("active");
            }

            filterStories("all");

          }

        });

      }

    });


  /* =======================================================
     TOAST
     ======================================================= */

  let toastTimer = null;

  function showToast(message) {

    toastText.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {

      toast.classList.remove("show");

    }, 2600);

  }


  /* =======================================================
     REVEAL ANIMATION
     ======================================================= */

  const revealElements =
    document.querySelectorAll(".reveal");


  const revealObserver =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            revealObserver.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: 0.12
      }
    );


  revealElements.forEach(element => {

    revealObserver.observe(element);

  });


  /* =======================================================
     ACTIVE NAVIGATION
     ======================================================= */

  const sections =
    document.querySelectorAll("main section[id]");

  const navLinks =
    document.querySelectorAll(".nav-link");


  const sectionObserver =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            navLinks.forEach(link =>
              link.classList.remove("active")
            );

            const activeLink =
              document.querySelector(
                `.nav-link[href="#${entry.target.id}"]`
              );

            if (activeLink) {
              activeLink.classList.add("active");
            }

          }

        });

      },
      {
        rootMargin: "-35% 0px -55% 0px"
      }
    );


  sections.forEach(section => {

    sectionObserver.observe(section);

  });


  /* =======================================================
     KEYBOARD SEARCH
     ======================================================= */

  document.addEventListener("keydown", event => {

    if (
      event.key === "/" &&
      document.activeElement.tagName !== "INPUT"
    ) {

      event.preventDefault();

      openSearch();

    }

  });


  /* =======================================================
     INITIAL STATE
     ======================================================= */

  filterStories("all");

});
