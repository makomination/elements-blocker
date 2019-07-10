let fckingQuerys = [
    'yt-live-chat-upsell-dialog-renderer'
];

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

document.addEventListener('readystatechange', event => {
    if (event.target.readyState == "complete") {
        fckingQuerys.forEach(
            val => {
                sleep(2450).then(() => { // set 6500 with inspector
                    let iframe = document.getElementById('chatframe');
                    let fckingElement = iframe.contentDocument.querySelector(val);
                    if (fckingElement) {
                        fckingElement.parentElement.removeChild(fckingElement);
                    }
                });
            }
        );
    }
});
