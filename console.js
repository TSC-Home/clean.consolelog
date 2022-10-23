var _nodejs = (
  typeof process !== 'undefined' && process.versions && process.versions.node);
if (_nodejs) {
  _nodejs = {
    version: process.versions.node
  };
}
//debuglog
export const log = {
    info(msg) {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        var _browser = !_nodejs &&
        (typeof window !== 'undefined' || typeof self !== 'undefined');
        if (_browser) {
            console.log(`%c[${(hours<10?"0":"")+hours}:${(minutes<10?"0":"")+minutes}]`+ " " + msg, "color: blue"); 
        } else {
            console.log('\x1b[36m%s\x1b[0m',`[${(hours<10?"0":"")+hours}:${(minutes<10?"0":"")+minutes}]`+ " " + msg);
        }
        
    },
    err(msg) {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        var _browser = !_nodejs &&
        (typeof window !== 'undefined' || typeof self !== 'undefined');
        if (_browser) {
            console.log(`%c[${(hours<10?"0":"")+hours}:${(minutes<10?"0":"")+minutes}]`+ " " + msg, "color: red");
        } else {
            console.log('\x1b[31m%s\x1b[0m',`[${(hours<10?"0":"")+hours}:${(minutes<10?"0":"")+minutes}]`+ " " + msg);
        }
    },
    warn(msg) {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        var _browser = !_nodejs &&
        (typeof window !== 'undefined' || typeof self !== 'undefined');
        if (_browser) {
            console.log(`%c[${(hours<10?"0":"")+hours}:${(minutes<10?"0":"")+minutes}]`+ " " + msg, "color: yellow");
        } else {
            console.log('\x1b[33m%s\x1b[0m',`[${(hours<10?"0":"")+hours}:${(minutes<10?"0":"")+minutes}]`+ " " + msg);
        }
    },
    success(msg) {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        var _browser = !_nodejs &&
        (typeof window !== 'undefined' || typeof self !== 'undefined');
        if (_browser) {
            console.log(`%c[${(hours<10?"0":"")+hours}:${(minutes<10?"0":"")+minutes}]`+ " " + msg, "color: green");
        } else {
            console.log('\x1b[32m%s\x1b[0m',`[${(hours<10?"0":"")+hours}:${(minutes<10?"0":"")+minutes}]`+ " " + msg);
        }
    },
}
//server massage
export const server = {
    info(server, msg) {
        var _browser = !_nodejs &&
            (typeof window !== 'undefined' || typeof self !== 'undefined');
        if (_browser) {
            console.log(`%c[${server}]`+ " " + msg, "color: blue");
        } else {
            console.log('\x1b[36m%s\x1b[0m',`[${server}]`+ " " + msg);
        }
    },
    err(server, msg) {
        var _browser = !_nodejs &&
            (typeof window !== 'undefined' || typeof self !== 'undefined');
        if (_browser) {
            console.log(`%c[${server}]`+ " " + msg, "color: red");
        } else {
            console.log('\x1b[31m%s\x1b[0m',`[${server}]`+ " " + msg);
        }
    },
    warn(server, msg) {
        var _browser = !_nodejs &&
            (typeof window !== 'undefined' || typeof self !== 'undefined');
        if (_browser) {
            console.log(`%c[${server}]`+ " " + msg, "color: yellow");
        } else {
            console.log('\x1b[33m%s\x1b[0m',`[${server}]`+ " " + msg);
        }
    },
    success(server, msg) {
        var _browser = !_nodejs &&
            (typeof window !== 'undefined' || typeof self !== 'undefined');
        if (_browser) {
            console.log(`%c[${server}]`+ " " + msg, "color: green");
        } else {
            console.log('\x1b[32m%s\x1b[0m',`[${server}]`+ " " + msg);
        }
    }
}
export const time = {
    time() {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        console.log(`[${(hours < 10 ? "0" : "") + hours}:${(minutes < 10 ? "0" : "") + minutes}]`);
    },
    timemsg(msg) {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        console.log(`[${(hours < 10 ? "0" : "") + hours}:${(minutes < 10 ? "0" : "") + minutes}]` + " " + msg);
    },
    hours() {
        const date = new Date();
        const hours = date.getHours();
        console.log(`[${(hours < 10 ? "0" : "") + hours}]`);
    },
    hoursmsg(msg) {
        const date = new Date();
        const hours = date.getHours();
        console.log(`[${(hours < 10 ? "0" : "") + hours}]` + " " + msg);
    },
    minutes() {
        const date = new Date();
        const minutes = date.getMinutes();
        console.log(`[${(minutes < 10 ? "0" : "") + minutes}]`);
    },
    minutesmsg(msg) {
        const date = new Date();
        const minutes = date.getMinutes();
        console.log(`[${(minutes < 10 ? "0" : "") + minutes}]` + " " + msg);
    },
    seconds() {
        const date = new Date();
        const seconds = date.getSeconds();
        console.log(`[${(seconds < 10 ? "0" : "") + seconds}]`);
    },
} 
export const emotji = {
    smile() {
        console.log("😀");
    },
    smilemsg(msg) {
        console.log("😀" + " " + msg);
    },
    sad() {
        console.log("😔");
    },
    sadmsg(msg) {
        console.log("😔" + " " + msg);
    },
    angry() {
        console.log("😡");
    },
    angrymsg(msg) {
        console.log("😡" + " " + msg);
    },
    happy() {
        console.log("😃");
    },
    happymsg(msg) {
        console.log("😃" + " " + msg);
    },
    wink() {
        console.log("😉");
    },
    winkmsg(msg) {
        console.log("😉" + " " + msg);
    },
    cry() {
        console.log("😢");
    },
    crymsg(msg) {
        console.log("😢" + " " + msg);
    },
    laugh() {
        console.log("😆");
    },
    laughmsg(msg) {
        console.log("😆" + " " + msg);
    },
    love() {
        console.log("😍");
    },
    lovemsg(msg) {
        console.log("😍" + " " + msg);
    },
    heart() {
        console.log("❤️");
    },
    heartmsg(msg) {
        console.log("❤️" + " " + msg);
    },
    star() {
        console.log("⭐");
    },
    starmsg(msg) {
        console.log("⭐" + " " + msg);
    },
    rocket() {
        console.log("🚀");
    },
    rocketmsg(msg) {
        console.log("🚀" + " " + msg);
    },
    fire() {
        console.log("🔥");
    },
    firemsg(msg) {
        console.log("🔥" + " " + msg);
    },
    snow() {
        console.log("❄️");
    },
    snowmsg(msg) {
        console.log("❄️" + " " + msg);
    },
    sun() {
        console.log("☀️");
    },
    sunmsg(msg) {
        console.log("☀️" + " " + msg);
    },
    moon() {
        console.log("🌙");
    },
    moonmsg(msg) {
        console.log("🌙" + " " + msg);
    },
    cloud() {
        console.log("☁️");
    },
    cloudmsg(msg) {
        console.log("☁️" + " " + msg);
    },
    rain() {
        console.log("🌧️");
    },
    rainmsg(msg) {
        console.log("🌧️" + " " + msg);
    },
    thunder() {
        console.log("⚡");
    },
    thundermsg(msg) {
        console.log("⚡" + " " + msg);
    },
    water() {
        console.log("💧");
    },
    watermsg(msg) {
        console.log("💧" + " " + msg);
    },
    leaf() {
        console.log("🍃");
    },
    leafmsg(msg) {
        console.log("🍃" + " " + msg);
    },
    flower() {
        console.log("🌸");
    },
    flowermsg(msg) {
        console.log("🌸" + " " + msg);
    },
    tree() {
        console.log("🌲");
    },
    treemsg(msg) {
        console.log("🌲" + " " + msg);
    },
    grass() {
        console.log("🌱");
    },
    grassmsg(msg) {
        console.log("🌱" + " " + msg);
    },
    snowman() {
        console.log("⛄");
    },
    snowmanmsg(msg) {
        console.log("⛄" + " " + msg);
    },
    snowflake() {
        console.log("❄️");
    },
    snowflakemsg(msg) {
        console.log("❄️" + " " + msg);
    },
    snowflake2() {
        console.log("❅");
    },
    snowflake2msg(msg) {
        console.log("❅" + " " + msg);
    },
    snowflake3() {
        console.log("❆");
    },
    snowflake3msg(msg) {
        console.log("❆" + " " + msg);
    },
    pig() {
        console.log("🐷");
    },
    pigmsg(msg) {
        console.log("🐷" + " " + msg);
    },
    pig2() {
        console.log("🐖");
    },
    pig2msg(msg) {
        console.log("🐖" + " " + msg);
    },
    pig3() {
        console.log("🐽");
    },
    pig3msg(msg) {
        console.log("🐽" + " " + msg);
    },
    wildpig() {
        console.log("🐗");
    },
    wildpigmsg(msg) {
        console.log("🐗" + " " + msg);
    },
    bug() {
        console.log("🐛");
    },
    bugmsg(msg) {
        console.log("🐛" + " " + msg);
    },
    bug2() {
        console.log("🐜");
    },
    bug2msg(msg) {
        console.log("🐜" + " " + msg);
    },
    bug3() {
        console.log("🐞");
    },
    bug3msg(msg) {
        console.log("🐞" + " " + msg);
    },
}