'use strict';

const userID = document.getElementById('user-id');
const userPassword = document.getElementById('user-password');
const login = document.getElementById('login');
const message = document.getElementById('message');


login.addEventListener('click', (e) => {
    if (userID.value === '' || userPassword.value === '') {
        // 入力されていない場合は、メッセージを表示
        message.style.display = 'block';
    } else {
        // 入力できている場合は、打刻画面へ
        e.preventDefault();
        window.location.href = 'https://t-tsukada1122.github.io/myApp-time/';
    }
});

