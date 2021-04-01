(function(doc, win) {
    var docE1 = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docE1.clientWidth;
            if (!clientWidth) return;
            if (clientWidth > 768) {
                docE1.style.fontSize = '20px'
                return
            }
            docE1.style.fontSize = 20 * (clientWidth / 320) + 'px';
        };

    if (!doc.addEventListener) return;
    recalc();
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);