function updateTimeAndDate() {
  const now = new Date();
  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = now.toLocaleDateString("en-GB"); // Format: DD-MM-YYYY

  document.getElementById("time").textContent = time;
  document.getElementById("date").textContent = date;
}

// Update time and date every second
setInterval(updateTimeAndDate, 1000);

// Initial call to set the  value2s right away
updateTimeAndDate();

// Open the popup window on clicking the Windows icon----------------------------------------------------------------
let clickCount = 0;
var windows_popup = document.querySelector(".windows_popup");
var fa_windows = document.querySelector(".fa-windows");
var icons = document.querySelector(".icons");
var windows = document.querySelector(".windows");
const hover = document.querySelector(".hover");
var value = 0;

icons.addEventListener("click", function open_popup() {
  clickCount++; // Increment the click count for tracking
  // Add the transition class every time the icon is clicked
  fa_windows.classList.add("transition_icons");
  // Check if the windows_popup is currently open or closed
  if (value === 0 && clickCount % 2 !== 0) {
    // If it's closed and we have an odd number of clicks, open the popup
    windows_popup.classList.add("open_popup");
    hover.style.background = "rgb(77, 106, 103)";
    hover.style.borderRadius = "5px";
    // windows.setAttribute(".hover" );
    value = 1; // Set  value2 to indicate popup is open
  } else {
    // If it's open, close the popup
    windows_popup.classList.remove("open_popup");
    hover.style.background = "";
    hover.style.borderRadius = "";
    value = 0; // Set  value2 to indicate popup is closed
  }
  // Optionally, you may want to remove the transition class after a delay
  // This ensures that the class is removed after the transition effect.
  setTimeout(() => {
    fa_windows.classList.remove("transition_icons");
  }, 300); // Adjust the timeout duration (300ms) to match your CSS transition duration
});

//This code is on if i click on the windows button then the popup will be hidden----------------------------------------------------------------

// windows.addEventListener('click', function(event) {
//     if (event.target == windows && windows_popup.classList.contains("open_popup")) {
//         windows_popup.classList.remove('open_popup');
//     }
// });
windows.addEventListener("click", function close(event) {
  // Check if the clicked element is not the popup or its children
  if (!windows_popup.contains(event.target)) {
    // Close the popup if it's open
    if (windows_popup.classList.contains("open_popup")) {
      windows_popup.classList.remove("open_popup");
      hover.style.background = "";
      hover.style.borderRadius = "";
    }
  }
});
//This function based on if i click on the windows_popup container then the popup is not closed----------------------------------------------------------------
windows_popup.addEventListener("click", function (event) {
  event.stopPropagation();
});
//The following code clicking on the wifi_volu_battery button-----------------------------------------------------------------------
let isOpen = false; // Change to a more descriptive variable name
var wifi_vol_battery = document.querySelector(".wifi-volu-battery");
var container = document.querySelector(".container");

wifi_vol_battery.addEventListener("click", function () {
  isOpen = !isOpen; // Toggle the state

  if (isOpen) {
    container.classList.add("open_popup1"); // Open Popup
  } else {
    container.classList.remove("open_popup1"); // Close Popup
  }
});
// This function based on the task_view container ----------------------------------------------------------------
var task_view = document.querySelector(".task_view");
var desktop_container = document.querySelector(".desktop-container");
task_view.addEventListener("mouseover", function (e) {
  if (e.target === task_view) {
    desktop_container.classList.add("open_popup2");
  }
});
task_view.addEventListener("mouseout", function (e) {
  if (e.target !== task_view) {
    desktop_container.classList.remove("open_popup2");
  }
});

//Function based on notification bar and datetime popup------------------------------------------------

let dateTimeNotification = document.querySelector(".datetime_notification");
let notifi_date_popup = document.querySelector(".notifi_date_popup");
let currentDate = document.querySelector(".current-date");
let currentyear = document.querySelector(".current-year");
let calendarBody = document.querySelector(".calendar-body");
let dropdownBtn = document.querySelector(".dropdown-btn");
let monthDropBtn = document.querySelector(".month-drop-btn");
let monthDropBtns = document.querySelectorAll(
  ".month-dropdown-btn, .month-dropup-btn"
);
let changeTimeBtns = document.querySelectorAll(".minus-btn, .plus-btn");
let timeBtn = document.querySelector(".time-btn");
const calendarDays = document.getElementById("calendar-days");

const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

const weekName = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};
const months = [
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
  "December",
];
currentDate.innerHTML = `${weekName[today.getDay()]}, ${today.getDate()} ${
  months[today.getMonth()]
}`;
function generateCalendar(month, year) {
  calendarDays.innerHTML = "";
  const firstDay = new Date(year, month).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  currentyear.innerHTML = `${months[month]}, ${year}`;
  let date = 1;
  for (let i = 0; i < 6; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < 7; j++) {
      const cell = document.createElement("td");
      if (i === 0 && j < firstDay) {
        cell.innerHTML = "";
      } else if (date > daysInMonth) {
        break;
      } else {
        cell.innerHTML = date;
        if (
          date === today.getDate() &&
          year === today.getFullYear() &&
          month === today.getMonth()
        ) {
          cell.classList.add("today");
        }
        date++;
      }
      row.appendChild(cell);
    }
    calendarDays.appendChild(row);
  }
}
generateCalendar(currentMonth, currentYear);

monthDropBtns.forEach((icon) => {
  icon.addEventListener("click", () => {
    // Check if it's the up or down button
    if (icon.classList.contains("month-dropup-btn")) {
      currentMonth--; // previous month
    } else if (icon.classList.contains("month-dropdown-btn")) {
      currentMonth++; // next month
    }

    // Adjust year if the month goes out of bounds
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    } else if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }

    generateCalendar(currentMonth, currentYear); // Update calendar with new month/year
  });
});

dropdownBtn.addEventListener("click", () => {
  // Toggle the visibility of the calendar body
  calendarBody.hidden = !calendarBody.hidden;
});

let value2 = 0;

dateTimeNotification.addEventListener("click", function () {
  let currentMonth = today.getMonth();
  let currentYear = today.getFullYear();
  if (value2 === 0) {
    notifi_date_popup.classList.add("open_popup3");
    dateTimeNotification.style.background = "rgb(77, 106, 103)";
    dateTimeNotification.style.borderRadius = "5px";
    value2 = 1;
  } else {
    notifi_date_popup.classList.remove("open_popup3");
    generateCalendar(currentMonth, currentYear);
    timeBtn.innerHTML = "30 mins";
    dateTimeNotification.style.background = "";
    dateTimeNotification.style.borderRadius = "";
    value2 = 0;
  }
});
notifi_date_popup.addEventListener("click", function (event) {
  event.stopPropagation();
});
windows.addEventListener("click", function close(event) {
  // Check if the clicked element is not the popup or its children
  if (!notifi_date_popup.contains(event.target)) {
    // Close the popup if it's open
    if (notifi_date_popup.classList.contains("open_popup3")) {
      notifi_date_popup.classList.remove("open_popup3");
      dateTimeNotification.style.background = "";
      dateTimeNotification.style.borderRadius = "";
    }
  }
});
let timeValue = 30; // Start with an initial time value

changeTimeBtns.forEach((icon) => {
  icon.addEventListener("click", () => {
    // Check if it's the up or down button
    if (icon.classList.contains("plus-btn")) {
      if (timeValue >= 30) {
        timeValue += 15; // Increase by 30 minutes
      } else {
        timeValue += 5;
      }
    } else if (icon.classList.contains("minus-btn")) {
      if (timeValue > 30) {
        timeValue = Math.max(15, timeValue - 15); // Decrease by 30, but do not go below 15 minutes
      } else {
        timeValue = Math.max(5, timeValue - 5); // Decrease by 5, but do not go below 5 minutes
      }
    }
    // Update the text of timeBtn
    timeBtn.innerHTML = `${timeValue} mins`;
  });
});
