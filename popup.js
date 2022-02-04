// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
    changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setPageBackgroundColor,
    });
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
    chrome.storage.sync.get("color", ({ color }) => {
        document.body.style.backgroundColor = color;
    });
}

// chrome.tabs.query(
//     {
//         active: true,
//         currentWindow: true
//     },
//     ([currentTab]) => {
//         const url = new URL(currentTab.url);
//         const domain = url.hostname;
//         console.log(domain);
//     }
// );

// let test = document.getElementById('domain');
// test.textContent('hello');

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var tab = tabs[0];
    var url = new URL(tab.url)
    var domain = url.hostname
    // `domain` now has a value like 'example.com'
})
