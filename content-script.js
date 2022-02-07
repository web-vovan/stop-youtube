chrome.storage.sync.get(['active', 'startTime', 'endTime'], function({active, startTime, endTime}) {
    let today = new Date()
    let time = today.getHours() + ':' + today.getMinutes()

    if (active === true && time <= endTime && time >=startTime) {
        blockYoutubePage(endTime)
    }
});

function blockYoutubePage(endTime)
{
    let htmlElement = document.querySelector("html");
    htmlElement.innerHTML = '<body></body><div class="wrap"><div class="title">Stop Youtube</div></div>';
    window.stop()
}
