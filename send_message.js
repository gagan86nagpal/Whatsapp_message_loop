function irritate()
{
function dispatch(target, eventType, char) {
            var evt = document.createEvent("TextEvent");
            evt.initTextEvent (eventType, true, true, window, char, 0, "en-US");
            target.focus();
            target.dispatchEvent(evt);
        }


        dispatch(document.querySelector(".input-container > .input-emoji .input"), "textInput", "Default Text");

        function triggerClick() {
            var event = new MouseEvent('click', {
                'view': window,
                'bubbles': true,
                'cancelable': true
            });
            document.querySelector(".icon.btn-icon.icon-send").dispatchEvent(event)
        }
        triggerClick();
};
var close=setInterval(irritate,2000);