let fckingQuerys = [
    '#chat',
    // '#contents > yt-live-chat-renderer',
    // 'yt-live-chat-app',
];

document.addEventListener('readystatechange', event => {
    if (event.target.readyState == "complete") {
        fckingQuerys.forEach(
            val => {
                window.setTimeout(() => {
                    let iframe = document.getElementById('chatframe');
                    let fckingElement = iframe.contentWindow.document.querySelector(val);
                    if (fckingElement) {
                        fckingElement.parentElement.removeChild(fckingElement);
                    }
                }, 1600);

            }
        );
    }
});

