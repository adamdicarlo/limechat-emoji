String.prototype.startsWith = function (s) {
    return this.indexOf(s) == 0;
}

Element.prototype.empty = function() {
    while (this.firstChild) this.removeChild(this.firstChild);
}

document.addEventListener("DOMNodeInserted", function(e) {
    var line = e.target;
    if (line.getAttribute('type') == 'privmsg') {
        var imgbase = 'https://raw.github.com/tmitz/rails_emoji/master/vendor/assets/images/emojis/';
        var msg = line.getElementsByClassName('message').item(0);

        var html = msg.innerHTML;
        while (emoji = html.match(/:([\d\w+-_]+):/)) {
            var url = imgbase + emoji[1] + '.png';
            var icon = '<span class="emoji" style="background-image: url(' + url + ')"></span>';
            html = html.replace(':' + emoji[1] + ':', icon);
        }
        msg.innerHTML = html;
    }
}, false);
