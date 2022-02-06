let changeButton = document.getElementById("changeButton");
let startTimeField = document.getElementById("startTimeField");
let endTimeField = document.getElementById("endTimeField");

chrome.storage.sync.get(['active', 'startTime', 'endTime'], function({active, startTime, endTime}) {
    changeButton.classList.add('active')

    changeButton.addEventListener('click', function () {
        chrome.storage.sync.set({
            active: !active
        })

        changeButton.classList.toggle('active')
    })

    startTimeField.value = startTime

    startTimeField.addEventListener('change', function () {
        chrome.storage.sync.set({
            startTime: startTimeField.value,
        })
    })

    endTimeField.value = endTime

    endTimeField.addEventListener('change', function () {
        chrome.storage.sync.set({
            endTime: endTimeField.value,
        })
    })
})
