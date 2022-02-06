chrome.storage.sync.get(['active', 'startTime', 'endTime'], function({active, startTime, endTime}) {
    let today = new Date()
    let time = today.getHours() + ':' + today.getMinutes()

    if (active === true && time <= endTime && time >=startTime) {
        blockYoutubePage()
    }
});

function blockYoutubePage()
{
    document.body.innerHTML = '<div class="wrap"><div class="title">Stop youtube</div></div>';
}
