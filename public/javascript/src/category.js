if (window.NodeList && !NodeList.prototype.forEach) { // TODO - add shim to babel
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (let i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

const body = document.querySelector('body');

document.querySelectorAll('.card').forEach((card) => {
  card.addEventListener('click', imageHandler);
});

function imageHandler(e) {
  e.preventDefault();
  e.stopPropagation();
  imageModal(e.target.parentElement.href);
}

function imageModal(link) {
  const overlay = document.createElement('div');
  body.appendChild(overlay);
  overlay.classList.add('overlay');

  const image = document.createElement('img');
  overlay.appendChild(image);
  image.src = link;

  body.addEventListener('click', removeModal);
}

function removeModal(e) {
  body.removeEventListener('click', removeModal);
  document.querySelector('.overlay').remove();
}
