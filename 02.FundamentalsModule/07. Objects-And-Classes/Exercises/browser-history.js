function browserHistory(browserInfo, commands) {
    while (commands.length > 0) {
        let token = commands.shift().split(" ");
        let command = token.shift();
        let tab = token.join(" ");
        
        if (command === "Open") {
            browserInfo["Open Tabs"].push(tab);
            browserInfo["Browser Logs"].push(`Open ${tab}`);
        } else if (command === "Close") {
            if (browserInfo["Open Tabs"].includes(tab)) {
                let i = browserInfo["Open Tabs"].indexOf(tab);
                browserInfo["Open Tabs"].splice(i, 1);
                browserInfo["Recently Closed"].push(tab);
                browserInfo["Browser Logs"].push(`Close ${tab}`);
            }
        } else if (command + " " + tab === "Clear History and Cache") {
            browserInfo["Open Tabs"] = [];
            browserInfo["Recently Closed"] = [];
            browserInfo["Browser Logs"] = [];
        }
    }
    console.log(browserInfo["Browser Name"]);
    console.log(`Open Tabs: ${browserInfo["Open Tabs"].join(", ")}`);
    console.log(`Recently Closed: ${browserInfo["Recently Closed"].join(", ")}`);
    console.log(`Browser Logs: ${browserInfo["Browser Logs"].join(", ")}`);
}

browserHistory({"Browser Name":"Mozilla Firefox",
"Open Tabs":["YouTube"],
"Recently Closed":["Gmail", "Dropbox"],
"Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
);