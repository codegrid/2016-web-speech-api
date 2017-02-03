var _console = console;
var console = {
  _org: _console,
  log: function(){
    _console.log.apply(_console, arguments);
    var el = document.createElement('div');
    el.textContent = [].join.apply(arguments,[' ']);
    document.querySelector('.console-Area').appendChild(el);
    document.body.scrollTop = 100000;
  }
};
