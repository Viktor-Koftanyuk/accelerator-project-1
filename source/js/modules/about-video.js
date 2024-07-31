const container = document.querySelector('.about__picture-video');
const button = container.querySelector('.about__play');
const picture = container.querySelector('picture');

// При клике на кнопку play убирает img и саму кнопку, запускает видео
function initVideo() {
  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    picture.style.display = 'none';
    button.style.display = 'none';
    iframeGenerate();
  });
}

function iframeGenerate() {
  const iframe = document.createElement('iframe');
  const src = 'https://www.youtube.com/embed/9TZXsZItgdw?si=y7n0gG-L0q01ziAJ?rel=0&showinfo=0&autoplay=1';

  iframe.setAttribute('src', src);
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('loading', 'lazy');
  iframe.setAttribute('playsinline', '1');
  container.append(iframe);

  return iframe;
}

initVideo();
