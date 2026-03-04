const API_URL = "https://script.google.com/macros/s/AKfycbwlzBgQoST_MLC8nvPeJSMQBHnIFouiEB8MI6N2s-oObA0HP-X_txcevkIv8q7UFpfLJQ/exec";

// データの読み込み
async function getData() {
    const response = await fetch(API_URL);
    return await response.json();
}

// データの送信 (発行・更新)
async function sendData(payload) {
    await fetch(API_URL, {
        method: "POST",
        mode: "no-cors", // GASの仕様上、レスポンスを受け取らない設定が安定します
        body: JSON.stringify(payload)
    });
}

// 待ち時間計算 (5分/組)
function getWaitTime(count) {
    return count * 5;
}
