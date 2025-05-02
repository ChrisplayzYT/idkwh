function changelink(id) {
    var element = document.getElementById(id);

    element.classList.remove('link');
    element.classList.add('visited');
}

function copy() {
    const text = "https://idkwhereisthis.name";
    let alertMsg = "username successfully copied to your clipboard!";
    let errMsg = "failed to copy to clipboard, please try again";

    navigator.clipboard.writeText(text).then(() => {
        alert(alertMsg);
    }).catch (err => {
        alert(errMsg);
    });
};

class Main {
    constructor() { };
}


class webSound {
    constructor() {
        var SE_Hover = 1;
        var SE_Coin = 2;
        var SE_Load = 3;
        var SE_Finish = 4;
        var SE_Back = 10;
        var SE_Init = 11;
        var SE_Back2 = 12;
        var SE_OldOK = 13;
        var SE_Error = 14;
    };
    playSound(id) {
        // for MP3 files
        let SE = new Audio('sound/' + id + '.mp3');
        SE.play();
    }
    playBackground() {
        let bgmPath = 'sound/bgm.mp3';
        let bgm = new Audio(bgmPath);

        bgm.play();
        bgm.loop = true;
    }
    stopBGM() {
        let bgmPath = 'sound/bgm.mp3';
        let bgm = new Audio(bgmPath);

        bgm.pause();
    }
    playStartupSound() {
        let sndPath = 'sound/startup.wav';
        let snd = new Audio(sndPath);

        snd.play();
        snd.loop = false;
    };
    playSE(id) {
        // for WAV files
        let SE = new Audio('sound/' + id + '.wav');
        SE.play();
    }
    Load() {
        let sepath = new Audio('sound/3.mp3');
        sepath.play();
        sepath.loop = true;
    }
    stopLoad() {
        let sepath = new Audio('sound/3.mp3');
        sepath.pause();
        sepath.loop = false;
    }
}
