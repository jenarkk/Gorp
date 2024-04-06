/// <reference types="../../../CTAutocomplete" />
/// <reference lib="es2015" />
import axios from "../../../axios"
import variables from "../../utils/variables"
import { request } from "../../../requestV2"

function upload(image) {
    return request({
        url: "https://api.imgur.com/3/image",
        method: "POST",
        headers: {
            Authorization: `Client-ID 753009b038bd28d`
        },
        body: {
            image
        },
        json: true
    });
};

// Waifu stuff >.<
let waifu = "";
let imgur = "";
function setWaifu() {
    axios.get("https://api.waifu.im/search?is_nsfw=true").then((link) => {
        waifu = link.data.images[0].url;
    })
    setTimeout(() => {
        upload(waifu).then(({ data: { link } }) => {
            imgur = link;
        })
    }, 1000);
}
setWaifu();

register("command", () => {
    ChatLib.chat(`\n${variables.PREFIX}${waifu} &7has been uploaded to Imgur&r ${imgur}\n`);
    setWaifu();
}).setCommandName("wgorp")