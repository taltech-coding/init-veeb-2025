const timetable = {
    "vaheaeg": [
        {
            start: new Date("2024-10-21T00:00:00.000Z"),
            end: new Date("2024-10-27T23:59:59.000Z"),
        },
        {
            start: new Date("2024-12-23T00:00:00.000Z"),
            end: new Date("2025-01-05T23:59:59.000Z"),
        },
        {
            start: new Date("2025-02-24T00:00:00.000Z"),
            end: new Date("2025-03-02T23:59:59.000Z"),
        },
        {
            start: new Date("2025-04-14T00:00:00.000Z"),
            end: new Date("2025-04-20T23:59:59.000Z"),
        },
        {
            start: new Date("2025-06-10T00:00:00.000Z"),
            end: new Date("2025-08-31T23:59:59.000Z"),
        },
    ],
    "sünnipäev": [
        {
            start: new Date("2025-10-24T00:00:00.000Z"),
            end: new Date("2025-10-24T23:59:59.000Z"),
        }
    ],
    "nimepäev": [
        {
            start: new Date("2025-12-31T00:00:00.000Z"),
            end: new Date("2025-12-31T23:59:59.000Z"),
        }
    ],
    "kooli lõpp": [
        {
            start: new Date("2025-06-18T00:00:00.000Z"),
            end: new Date("2025-06-26T23:59:59.000Z"),
        }
    ],
};

const startEventNames = {
    "vaheaeg": "Vahe&shy;ajani",
    "sünnipäev": "Sünni&shy;päevani",
    "nimepäev": "Nime&shy;päevani",
    "kooli lõpp": "Kooli lõpuni"
}

const endEventNames = {
    "vaheaeg": "Vahe&shy;aja lõpuni",
    "sünnipäev": "Sünni&shy;päeva lõpuni",
    "nimepäev": "Nime&shy;päeva lõpuni",
    "kooli lõpp": "Kooli lõpu lõpuni"
}

function getDeltaTime(countdownDate) {
    const now = new Date().getTime();
    const timeDelta = countdownDate.getTime() - now;

    return timeDelta;
}

function updateDays(timeDelta) {
    const days = Math.floor(timeDelta / (1000 * 60 * 60 * 24));
    if (days === 1) {
        document.getElementById("daysLeftText").innerHTML = `${days} päev,`;
    } else {
        document.getElementById("daysLeftText").innerHTML = `${days} päeva,`;
    }
}

function updateHours(timeDelta) {
    const hours = Math.floor(
        (timeDelta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    if (hours === 1) {
        document.getElementById("hoursLeftText").innerHTML = `${hours} tund,`;
    } else {
        document.getElementById("hoursLeftText").innerHTML = `${hours} tundi,`;
    }
}

function updateMinutes(timeDelta) {
    const minutes = Math.floor((timeDelta % (1000 * 60 * 60)) / (1000 * 60));
    if (minutes === 1) {
        document.getElementById(
            "minutesLeftText"
        ).innerHTML = `${minutes} minut,`;
    } else {
        document.getElementById(
            "minutesLeftText"
        ).innerHTML = `${minutes} minutit,`;
    }
}

function updateSeconds(timeDelta) {
    const seconds = Math.floor((timeDelta % (1000 * 60)) / 1000);
    if (seconds === 1) {
        document.getElementById(
            "secondsLeftText"
        ).innerHTML = `${seconds} sekund.`;
    } else {
        document.getElementById(
            "secondsLeftText"
        ).innerHTML = `${seconds} sekundit.`;
    }
}

function getEventType() {
    return document.getElementById("event").value;
}

function updateNextEvent(date) {
    document.getElementById(
        "eventDate"
    ).innerHTML = `Järgmine ${getEventType()} on ${date.toLocaleDateString(
        "et-EE",
        { year: "numeric", month: "long", day: "numeric" }
    )}`;
}

function updateEndEvent(date) {
    document.getElementById(
        "eventDate"
    ).innerHTML = `See ${getEventType()} lõppeb ${date.toLocaleDateString(
        "et-EE",
        { year: "numeric", month: "long", day: "numeric" }
    )}`;
}

function updateEventTitle(isInProgress) {
    if (isInProgress) {
        document.getElementById("eventText").innerHTML = `${endEventNames[getEventType()]} on jäänud`
        document.title = `Päevi ${endEventNames[getEventType()].toLowerCase().replace("&shy;", "")}`
    } else {
        document.getElementById("eventText").innerHTML = `${startEventNames[getEventType()]} on jäänud`
        document.title = `Päevi ${startEventNames[getEventType()].toLowerCase().replace("&shy;", "")}`
    }
}

function updateCountdown() {
    let foundEvent = false;
    for (let event of timetable[getEventType()]) {
        if (foundEvent) {
            break;
        }
        const now = new Date();
        const d = event.start - now;
        const de = event.end - now;
        if (d > 0) {
            foundEvent = true;
            updateDays(d);
            updateHours(d);
            updateMinutes(d);
            updateSeconds(d);
            updateNextEvent(event.start);
            updateEventTitle(false);
        } else if (d < 0 && de > 0) {
            foundEvent = true;
            updateDays(de);
            updateHours(de);
            updateMinutes(de);
            updateSeconds(de);
            updateEndEvent(event.end);
            updateEventTitle(true);
        }
    }
    if (!foundEvent) {
        updateEventTitle(false);
        document.getElementById("daysLeftText").innerHTML = `päris kaua.`;
        document.getElementById("hoursLeftText").innerHTML = ``;
        document.getElementById("minutesLeftText").innerHTML = ``;
        document.getElementById("secondsLeftText").innerHTML = ``;
        document.getElementById("eventDate").innerHTML = ``;
    }
}

updateCountdown();
const x = setInterval(updateCountdown, 1000);

// Save selected event to local storage
document.getElementById("event").addEventListener("change", function (e) {
    const selectedEvent = e.target.value;
    localStorage.setItem("selectedEvent", selectedEvent);
    updateCountdown();
});

// Set the selected event from local storage
const savedEvent = localStorage.getItem("selectedEvent");
if (savedEvent) {
    document.getElementById("event").value = savedEvent;
    updateCountdown();
}

// Theme switching
const themeSwitch = document.getElementById("themeSwitch");

// Check for saved theme preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    themeSwitch.checked = savedTheme === "dark";
} else {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        themeSwitch.checked = true;
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
    }
}

// Listen for toggle changes
themeSwitch.addEventListener("change", function (e) {
    if (e.target.checked) {
        // Switch to dark mode
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    } else {
        // Switch to light mode
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
    }
});
