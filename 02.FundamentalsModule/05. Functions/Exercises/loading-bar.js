function loadingBar(percent) {
    let loadingBar = "[";
    function makeLoadingBar(percent) {
        for (let i = 1; i <= percent / 10; i++) {
            loadingBar += "%";
        }
        for (let j = loadingBar.length + 1; j < 12; j++) {
            loadingBar += ".";
        }
        loadingBar += "]";
    }
    makeLoadingBar(percent);
    if (percent === 100) {
        console.log("100% Complete!");
        console.log(loadingBar);
    } else {
        console.log(`${percent}% ${loadingBar}`);
        console.log("Still loading...");
    }
}

loadingBar(100);