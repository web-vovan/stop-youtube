let changeButton = document.getElementById("changeButton");

chrome.storage.sync.get("active", function({ active }) {
    if (active === true) {
        changeButton.textContent = "Выключить"
    } else {
        changeButton.textContent = "Включить"
    }

    changeButton.addEventListener('click', function () {
        chrome.storage.sync.set({
            active: !active
        })
    })
});
