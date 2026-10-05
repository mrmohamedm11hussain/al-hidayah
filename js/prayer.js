const button =
  document.querySelector("#loc");

const status =
  document.querySelector("#status");

const grid =
  document.querySelector("#prayGrid");


button.onclick = () => {

  if (!navigator.geolocation) {

    status.textContent =
      "المتصفح لا يدعم تحديد الموقع.";

    return;
  }


  status.textContent =
    "نطلب إذن الموقع من جهازك…";


  navigator.geolocation.getCurrentPosition(

    async position => {

      try {

        const {
          latitude,
          longitude
        } = position.coords;


        const date =
          new Date();


        const timestamp =
          Math.floor(
            date.getTime() / 1000
          );


        const url =
          `https://api.aladhan.com/v1/timings/${timestamp}?latitude=${latitude}&longitude=${longitude}&method=5`;


        const response =
          await fetch(url);


        const data =
          await response.json();


        const times =
          data.data.timings;


        status.textContent =
          "تم حساب المواقيت حسب موقعك.";


        const prayers = [

          ["الفجر", times.Fajr],

          ["الشروق", times.Sunrise],

          ["الظهر", times.Dhuhr],

          ["العصر", times.Asr],

          ["المغرب", times.Maghrib],

          ["العشاء", times.Isha]

        ];


        grid.innerHTML =
          prayers
            .map(
              prayer => `

                <div class="pray">

                  <b>
                    ${prayer[0]}
                  </b>

                  <strong>
                    ${prayer[1]}
                  </strong>

                </div>

              `
            )
            .join("");


      } catch (error) {

        status.textContent =
          "تعذر جلب المواقيت الآن. حاول مرة أخرى.";

      }

    },


    () => {

      status.textContent =
        "لم يتم السماح بالموقع. يمكنك استخدام المنصة بدون تحديد موقعك.";

    }

  );

};
