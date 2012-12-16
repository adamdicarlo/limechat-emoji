document.addEventListener('DOMNodeInserted', function(e) {
  var line = e.target;
  if (line.getAttribute('type') == 'privmsg') {
    var replace = '<span class="emoji" style="background-image: url(\'' +
        'https://raw.github.com/arvida/emoji-cheat-sheet.com/master/public' +
        '/graphics/emojis/$1.png\')"></span>';
    var msg = line.getElementsByClassName('message').item(0);
    msg.innerHTML = msg.innerHTML.replace(/:([\w\d+\-_]+):/g, replace);
  }
}, false);
