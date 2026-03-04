const API_URL = "https://script.google.com/macros/s/AKfycbwlzBgQoST_MLC8nvPeJSMQBHnIFouiEB8MI6N2s-oObA0HP-X_txcevkIv8q7UFpfLJQ/exec";

// データを取得する関数
async function fetchSheetData() {
    try {
        const response = await fetch(API_URL);
        return await response.json();
    } catch (e) {
        console.error("データ取得失敗:", e);
        return [];
    }
}

// データを送信する関数
async function postToSheet(payload) {
    await fetch(API_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(payload)
    });
}

// 自動採番ロジック (例: 001S, 002A)
function generateNextID(data, type) {
    const sameTypeIds = data
        .filter(d => d.id.endsWith(type))
        .map(d => parseInt(d.id.replace(type, "")));
    
    const maxNum = sameTypeIds.length > 0 ? Math.max(...sameTypeIds) : 0;
    const nextNum = (maxNum + 1).toString().padStart(3, '0');
    return nextNum + type;
}
