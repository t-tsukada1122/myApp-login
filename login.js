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
    } else if (userID.value === 'nakayama' || userPassword.value === 'kinni-kun') {
        // 打刻画面へ
        e.preventDefault();
        window.location.href = 'https://t-tsukada1122.github.io/myApp-time/';
    } else {
        alert('IDまたはパスワードが間違っています。');
    }
});

