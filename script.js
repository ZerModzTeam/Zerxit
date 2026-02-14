// Splash + Voice
window.onload = function() {

    // Suara cewek (pakai Web Speech API)
    let msg = new SpeechSynthesisUtterance("ZeroXiterz Cheat");
    msg.lang = "en-US";
    msg.pitch = 1.5; 
    msg.rate = 1;

    setTimeout(() => {
        speechSynthesis.speak(msg);
    }, 500);

    // Hilangin splash setelah 3 detik
    setTimeout(() => {
        document.getElementById("splash").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
    }, 3000);
};

// Order WA
function order(product) {
    let nomor = "6285721057014";
    let pesan = `Halo kak, saya mau order ${product}`;
    let url = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;
    window.open(url, "_blank");
}
