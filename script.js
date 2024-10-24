function updateTimeAndDate() {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const date = now.toLocaleDateString('en-GB'); // Format: DD-MM-YYYY

    document.getElementById('time').textContent = time;
    document.getElementById('date').textContent = date;
}

// Update time and date every second
setInterval(updateTimeAndDate, 1000);

// Initial call to set the values right away
updateTimeAndDate();

// Open the popup window on clicking the Windows icon----------------------------------------------------------------
let clickCount = 0;
var windows_popup=document.querySelector(".windows_popup");
var fa_windows=document.querySelector(".fa-windows");
var icons=document.querySelector(".icons");
var windows=document.querySelector(".windows");
const hover=document.querySelector(".hover");
var value=0;

 icons.addEventListener("click", function open_popup() {
    clickCount++; // Increment the click count for tracking
    // Add the transition class every time the icon is clicked
    fa_windows.classList.add("transition_icons");
    // Check if the windows_popup is currently open or closed
    if (value === 0 && (clickCount % 2 !== 0)) {
        // If it's closed and we have an odd number of clicks, open the popup
        windows_popup.classList.add("open_popup");
        hover.style.background='rgb(77, 106, 103)';
        hover.style.borderRadius='5px';
        // windows.setAttribute(".hover" );
        value = 1; // Set value to indicate popup is open
    } else {
        // If it's open, close the popup
        windows_popup.classList.remove("open_popup");
        hover.style.background='';
        hover.style.borderRadius='';
        value = 0; // Set value to indicate popup is closed
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
windows.addEventListener('click', function close(event) {
    // Check if the clicked element is not the popup or its children
    if (!windows_popup.contains(event.target)) {
        // Close the popup if it's open
        if (windows_popup.classList.contains("open_popup")) {
            windows_popup.classList.remove('open_popup');
            hover.style.background='';
            hover.style.borderRadius='';
        }
    }
});
//This function based on if i click on the windows_popup container then the popup is not closed----------------------------------------------------------------
windows_popup.addEventListener('click', function(event) {
    event.stopPropagation();
});
//The following code clicking on the wifi_volu_battery button-----------------------------------------------------------------------
let isOpen = false; // Change to a more descriptive variable name
var wifi_vol_battery = document.querySelector(".wifi-volu-battery");
var container = document.querySelector(".container");

wifi_vol_battery.addEventListener("click", function() {
    isOpen = !isOpen; // Toggle the state

    if (isOpen) {
        container.classList.add("open_popup1"); // Open Popup
    } else {
        container.classList.remove("open_popup1"); // Close Popup
    }
    
});
// This function based on the task_view container ----------------------------------------------------------------
var task_view=document.querySelector(".task_view");
var desktop_container=document.querySelector(".desktop-container");
task_view.addEventListener("mouseover", function (e){
    if(e.target ===task_view){
        desktop_container.classList.add("open_popup2");
    }
     
});
task_view.addEventListener("mouseout", function(e) {
    if (e.target !== task_view) {
        desktop_container.classList.remove("open_popup2");
    }
});

