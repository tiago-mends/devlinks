function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('light');

  const image = document.querySelector("#profile img");

  if (html.classList.contains('light')) {
    image.setAttribute('src', './assets/avatar-light.png');
    trans();
  } else {
    image.setAttribute('src', './assets/avatar.png');
    trans();
  }

  let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 1000)
}
}