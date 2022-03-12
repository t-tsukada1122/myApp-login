'use strict';

const userID = document.getElementById('user-id');
const userPassword = document.getElementById('user-password');
const login = document.getElementById('login');
const message = document.getElementById('message');

userID.focus();

login.addEventListener('click', (e) => {
    if (userID.value === '' || userPassword.value === '') {
        // 入力されていない場合は、メッセージを表示
        message.style.visibility = 'visible';
    } else if (userID.value === 'Nakayama' && userPassword.value === 'Kinni-kun') {
        // 打刻画面へ
        e.preventDefault();
        window.location.href = '../time/index.html';
    } else {
        alert('IDまたはパスワードが間違っています。');
    }
});

