document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('#action button').forEach(button => {
    button.addEventListener('click', () => {
      const action = button.dataset.action;
      handleAction(action);
    });
  });

  function handleAction(action) {
    switch (action) {
      case 'eat':
        // #food（opacity: 1 -> 0）
        document.querySelector('#food').style.opacity = '1';
        setTimeout(() => {
          document.querySelector('#food').style.opacity = '0';
        }, 3000);
        break;
      case 'sleep':
          document.querySelector('#piyo').src = './assets/suibun.png';
          document.querySelector('#moon').style.opacity = '1';
          setTimeout(() => {
            document.querySelector('#piyo').src = './assets/piyopiyo.gif';
            document.querySelector('#moon').style.opacity = '0';
          }, 3000);
        break;
      case 'game':
        document.querySelector('#piyo').src = './assets/mizudeppou.png';
        setTimeout(() => {
            document.querySelector('#piyo').src = './assets/piyopiyo.gif';
          }, 3000);
        break;
      case 'medicine':
        document.querySelector('#piyo').src = './assets/megusuri-shippai.png';
        setTimeout(() => {
            document.querySelector('#piyo').src = './assets/piyopiyo.gif';
          }, 3000);
        break;
      case 'clean':
        // #clean（opacity: 0 -> 1）
        document.querySelector('#poop').style.opacity = '0';
        setTimeout(() => {
          document.querySelector('#poop').style.opacity = '1';
        }, 300000)
        break;
      case 'scale':
        document.querySelector('#piyo').src = './assets/taiju.png';
        setTimeout(() => {
            document.querySelector('#piyo').src = './assets/piyopiyo.gif';
          }, 3000);
        break;
      case 'education':
        document.querySelector('#piyo').src = './assets/study-piyoyo.png';
        setTimeout(() => {
            document.querySelector('#piyo').src = './assets/piyopiyo.gif';
          }, 3000);
        break;
      case 'conversation':
        document.querySelector('#piyo').src = './assets/missetu.png';
        setTimeout(() => {
            document.querySelector('#piyo').src = './assets/piyopiyo.gif';
          }, 3000);
        break;
    }
  }
})
