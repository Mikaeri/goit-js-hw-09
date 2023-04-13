import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCAL_STRAGE_PLAYER_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlayerTimeupdate, 1000));

function onPlayerTimeupdate(timer) {
  const currentTime = timer.seconds;

  localStorage.setItem(LOCAL_STRAGE_PLAYER_KEY, currentTime);
}

player.setCurrentTime(localStorage.getItem(LOCAL_STRAGE_PLAYER_KEY) || 0);