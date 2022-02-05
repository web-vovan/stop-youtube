chrome.storage.sync.get("active", function({ active }) {
    if (active === true) {
        document.body.innerHTML = '<div class="wrap"><div class="title">Stop youtube</div></div>';
    }
});




// chrome.storage.sync.get("color", function({ color }) {
//     console.log('Значение переменной: ' + color);
// });


