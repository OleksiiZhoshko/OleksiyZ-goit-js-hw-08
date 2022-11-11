import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframeVideoplayer = document.querySelector('#vimeo-player');
const player = new Player(iframeVideoplayer);
const CURRENT_TIME = 'videoplayer-current-time';

if (localStorage.getItem(CURRENT_TIME)) {
  player.setCurrentTime(localStorage.getItem(CURRENT_TIME));
}

player.on('timeupdate', throttle(onUpdateTime, 1000));

function onUpdateTime(data) {
  localStorage.setItem(CURRENT_TIME, JSON.stringify(data.seconds));
}
