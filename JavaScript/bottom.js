document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('#action button').forEach(button => {
    button.addEventListener('click', () => {
      console.log('clicked!');
      const action = button.dataset.action;
      handleAction(action);
    });
  });

  function handleAction(action) {
    switch (action) {
      case 'eat':
        // // status up
        // hunger += 1;
        // updateStatus();

        // #food（opacity: 1 -> 0）
        document.querySelector('#food').style.opacity = '1';
        setTimeout(() => {
          document.querySelector('#food').style.opacity = '0';
        }, 2000);

        break;
      case 'sleep':
        console.log('😴 ねるアクション実行！');
        break;
      case 'game':
        console.log('🎮 あそぶアクション実行！');
        break;
      case 'medicine':
        console.log('💊 おくすりアクション実行！');
        break;
      case 'clean':
        console.log('🧼 そうじアクション実行！');
        break;
      case 'scale':
        console.log('⚖️ けいりょうアクション実行！');
        break;
      case 'education':
        console.log('📚 べんきょうアクション実行！');
        break;
      case 'conversation':
        console.log('💬 おはなしアクション実行！');
        break;
    }
  }
})
