setTimeout(() => {
    var buttonsGroup = document.getElementsByClassName("_1ljzS pnYZD")[0];
    var div = document.createElement("div");
    div.classList = "_2n-zq";
    div.id = "upload-all-contacts";
    div.addEventListener("click", openBulkSenderPopup, false)
    var button = `<div aria-disabled="false" role="button" tabindex="0" class="_1XaX-" data-tab="9" title="Download All Contacts" aria-label="Download All Contacts"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="30" height="30"><path fill="currentColor" d="M15.573,11.624c0.568-0.478,0.947-1.219,0.947-2.019c0-1.37-1.108-2.569-2.371-2.569s-2.371,1.2-2.371,2.569c0,0.8,0.379,1.542,0.946,2.019c-0.253,0.089-0.496,0.2-0.728,0.332c-0.743-0.898-1.745-1.573-2.891-1.911c0.877-0.61,1.486-1.666,1.486-2.812c0-1.79-1.479-3.359-3.162-3.359S4.269,5.443,4.269,7.233c0,1.146,0.608,2.202,1.486,2.812c-2.454,0.725-4.252,2.998-4.252,5.685c0,0.218,0.178,0.396,0.395,0.396h16.203c0.218,0,0.396-0.178,0.396-0.396C18.497,13.831,17.273,12.216,15.573,11.624 M12.568,9.605c0-0.822,0.689-1.779,1.581-1.779s1.58,0.957,1.58,1.779s-0.688,1.779-1.58,1.779S12.568,10.427,12.568,9.605 M5.06,7.233c0-1.213,1.014-2.569,2.371-2.569c1.358,0,2.371,1.355,2.371,2.569S8.789,9.802,7.431,9.802C6.073,9.802,5.06,8.447,5.06,7.233 M2.309,15.335c0.202-2.649,2.423-4.742,5.122-4.742s4.921,2.093,5.122,4.742H2.309z M13.346,15.335c-0.067-0.997-0.382-1.928-0.882-2.732c0.502-0.271,1.075-0.429,1.686-0.429c1.828,0,3.338,1.385,3.535,3.161H13.346z"></path></svg></span></div><span></span>`;
    div.innerHTML = button;
    buttonsGroup.insertBefore(div, buttonsGroup.children[0]);
    document.getElementsByClassName("JnmQF _3QmOg")[0].addEventListener('click', isGroupOrIndividual, false);
}, 25000);

function openBulkSenderPopup() {
    loadingDiv();
}

function isGroupOrIndividual() {
    //todo  :  have to check whether i clicked on group or individual.
    displayButton();
}

function displayButton() {

    try {

        const buttonExist = document.getElementById("download-all-contacts");

        if (!buttonExist) {

            setTimeout(() => {
                var buttonsGroup = document.getElementsByClassName("_1ljzS pnYZD")[1];
                var div = document.createElement("div");
                div.classList = "_2n-zq";
                div.id = "download-all-contacts";
                div.addEventListener("click", downloadAllContactsOfGroup, false)
                var button = `<div aria-disabled="false" role="button" tabindex="0" class="_1XaX-" data-tab="9" title="Download All Contacts" aria-label="Download All Contacts"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M15.608,6.262h-2.338v0.935h2.338c0.516,0,0.934,0.418,0.934,0.935v8.879c0,0.517-0.418,0.935-0.934,0.935H4.392c-0.516,0-0.935-0.418-0.935-0.935V8.131c0-0.516,0.419-0.935,0.935-0.935h2.336V6.262H4.392c-1.032,0-1.869,0.837-1.869,1.869v8.879c0,1.031,0.837,1.869,1.869,1.869h11.216c1.031,0,1.869-0.838,1.869-1.869V8.131C17.478,7.099,16.64,6.262,15.608,6.262z M9.513,11.973c0.017,0.082,0.047,0.162,0.109,0.226c0.104,0.106,0.243,0.143,0.378,0.126c0.135,0.017,0.274-0.02,0.377-0.126c0.064-0.065,0.097-0.147,0.115-0.231l1.708-1.751c0.178-0.183,0.178-0.479,0-0.662c-0.178-0.182-0.467-0.182-0.645,0l-1.101,1.129V1.588c0-0.258-0.204-0.467-0.456-0.467c-0.252,0-0.456,0.209-0.456,0.467v9.094L8.443,9.553c-0.178-0.182-0.467-0.182-0.645,0c-0.178,0.184-0.178,0.479,0,0.662L9.513,11.973z"></path></svg></span></div><span></span>`;
                div.innerHTML = button;
                buttonsGroup.insertBefore(div, buttonsGroup.children[0]);
            }, 700)
        }

    } catch (err) {
        //console.log("contact not found");
    }
}

function downloadAllContactsOfGroup() {
    var tableData = "";
    var tableToExcel;
    var finalNumberArray = document.getElementsByClassName(" fKfSX")[0].innerText.split(",");

    function createExcelTemplate() {
        finalNumberArray.forEach((number) => {
            tableData += "<tr><td>" + number + "</tr></td>"
        });

        tableToExcel = (function () {
            var uri = 'data:application/vnd.ms-excel;base64,',
                template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>' + tableData + '</table></body></html>',
                base64 = function (s) {
                    return window.btoa(unescape(encodeURIComponent(s)))
                },
                format = function (s, c) {
                    return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; })
                }
            return function (table, name) {
                var ctx = { worksheet: 'Worksheet', table: "Contacts" }
                window.location.href = uri + base64(format(template, ctx))
            }
        })()
        tableToExcel();
    }

    createExcelTemplate();
}


var closeBtn;
var sendBtn;
var spinner;
var msg;
var msgType;
var mediaFile;
var caption;

function loadingDiv() {

    var strVar = "";
    strVar += "<div class=\"outer-box\">";
    strVar += "      <div class=\"top\">";
    strVar += "          <button class=\"cancle-btn\">x<\/button>";
    strVar += "      <\/div>";
    strVar += "      <div class=\"upper-box\">";
    strVar += "         <div id=\"radio-btn\" class=\"radio-btn\"> ";
    strVar += "         <input type=\"radio\" id=\"text\" name=\"msg-type\" value=\"text\" checked \"> ";
    strVar += "         <label for=\"text\" class=\"radio-lbl\">Text<\/label>";
    strVar += "         <input type=\"radio\" id=\"file\" name=\"msg-type\" value=\"file\" \">";
    strVar += "         <label for=\"file\" class=\"radio-lbl\">File<\/label><br> ";
    strVar += "         <\/div>";
    strVar += "         <textarea id=\"txt-msg\" class=\"mt-20\" autofocus placeholder=\"Enter your message here\"><\/textarea>";
    strVar += "         <span id=\"file-box\" class=\"file-box\">";
    strVar += "            <h4 style=\"margin-top: 5px\" class=\"slct-file\">Select your file<\/h4>";
    strVar += "            <input type=\"file\" id=\"media-file\" name=\"media-file\">";
    strVar += "            <textarea id=\"caption\" class=\"caption\" autofocus placeholder=\"Write caption here\"><\/textarea>";
    strVar += "        <\/span>";
    strVar += "      <\/div>";
    strVar += "      <div class=\"upper-box\">";
    strVar += "          <span class=\"heading\">";
    strVar += "              <h4>Please enter your number<\/h4>";
    strVar += "                <select name=\"cars\" id=\"seprator\">";
    strVar += "                <option value=\"comma\">Comma</option>";
    strVar += "                <option value=\"space\">Space</option>";
    strVar += "                <option value=\"seprator\" selected disabled>Seprator</option>";
    strVar += "                </select>";
    strVar += "          <\/span>";
    strVar += "         <textarea id=\"num-area\" type=\"number\" class=\"numbers-txtarea\" autofocus placeholder=\"Ex: +918696181616 +917023535423\"><\/textarea>";
    strVar += "         <hr>";
    strVar += "      <\/div>";
    strVar += "      <div class=\"lower-box\">";
    strVar += "        <span class=\"lower-box-span\">";
    strVar += "            <h4 style=\"margin-top: 5px\">OR Upload an excel sheet<\/h4>";
    strVar += "            <input type=\"file\" id=\"myfile\" class=\"myfile\" accept=\".csv\" name=\"myfile\">";
    strVar += "            <button id=\"send-btn\" class=\"send-btn\">Send<\/button>";
    strVar += "            <div id=\"spinner\" class=\"spinner\"></div>";
    strVar += "        <\/span>";
    strVar += "      <\/div>";
    strVar += "      <div class=\"lowest\"><\/div>";
    strVar += "    <\/div>";

    const loadingDiv = document.createElement("div");
    loadingDiv.innerHTML = strVar;
    loadingDiv.setAttribute("id", "loadingDiv");
    document.body.appendChild(loadingDiv);

    closeBtn = document.querySelector(".cancle-btn");
    sendBtn = document.getElementById("send-btn");
    closeBtn.addEventListener("click", cancelClose, false);
    document.getElementById("file").addEventListener("click", onFileMsgSelect, false);
    document.getElementById("text").addEventListener("click", onTextMsgSelect, false);
    sendBtn.addEventListener("click", sendMessage1, false);
    document.getElementById("myfile").addEventListener("change", loadContactCsv, false);    
}

/*function loadjs() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://cdn.jsdelivr.net/gh/amankdl/mycdn/try1.js";
    script.onload = function(){

    };
    document.body.appendChild(script);
 }*/

function cancelClose() {
    const loadingDiv = document.getElementById("loadingDiv");
    loadingDiv.remove();
}

function onTextMsgSelect() {
    document.getElementById("file-box").style.display = "none";
    document.getElementById("txt-msg").style.display = "inline-block";
}

function onFileMsgSelect() {
    document.getElementById("txt-msg").style.display = "none";
    document.getElementById("file-box").style.display = "flex";
}

function sendMessage1() {
    sendMessage();
}

var count = 0;
function grabNumber() {
    if (contactsArray.length-1 >= count) {
        setTimeout(() => {
            console.log(contactsArray[count], " => ", count);
            let num = contactsArray[count].replace(/^\D+/g, '');
            if (msgType == "text") {                
                smP(num, msg);
            }else{
                window.sendImage(num+"@c.us",mediaFile,caption);
            }
            ++count;
            grabNumber();
        }, 1000)
    }else{
        count = 0;
        sendBtn.style.display = "block";
        spinner.style.display = "none";
    }
}

var contactsArray;
const sendMessage = () => {
    //check whether it is a text message or file message
    //if text message than our code will be as follows
    //var message = document.getElementById("txt-msg").value;
    var numbersInTextArea = (document.getElementById("num-area").value).trim();
    msgType = document.querySelector('input[name="msg-type"]:checked').value;
    var seprator = document.getElementById("seprator").value;
    contactsArray = seprator == "space" ? numbersInTextArea.split(" ") : (numbersInTextArea.match(/\n/g) || []).length > 0 ? numbersInTextArea.split("\n") : numbersInTextArea.split(",");
    console.log(contactsArray);
    sendBtn.style.display = "none";
    spinner = document.getElementById('spinner');
    spinner.style.display = "block";  
    if (msgType == "text") {
        msg = encodeURIComponent(document.getElementById("txt-msg").value);
    }else{
        mediaFile = document.getElementById("media-file").files[0]
        caption = document.getElementById("caption").value;
    } 
    grabNumber();    
}

async function smP(nm, sm) {
    return new Promise(async (resolve, reject) => {
        waLinkCrt(nm, sm).then(() => {
            setTimeout(async function () {
                let result = false;
                result = await frd_clk();
                console.log(result);
                resolve(result)
            }, 600)
        })
    })
}

async function frd_clk() {
    let result = false;
    await sbs();
    if (document.querySelector("[data-icon=send]")) {
        document.querySelector("[data-icon=send]").click();
        result = true
    }
    return result
}

async function sbs() {
    if (!document.querySelector("[data-icon=send]")) {
        setTimeout(async function () {
            await sbs()
        }, 500)
    }
}

async function waLinkCrt(n, et) {

    return new Promise((resolve, reject) => {
        const bulkWhatsappLink = document.getElementById("blkwhattsapplink");
        if (bulkWhatsappLink) {
            bulkWhatsappLink.setAttribute("href", `https://wa.me/${n}?text=${et}`)
        } else {
            var spanHtml = `<a href="https://wa.me/${n}?text=${et}" id= "blkwhattsapplink"></a>`;
            var spans = document.querySelector("#app .app-wrapper-web span");
            spans.innerHTML = spanHtml;
        }
        setTimeout(() => {
            document.getElementById("blkwhattsapplink").click();
            resolve()
        }, 1000)
    })
}

function loadContactCsv() {
    console.log("working");
    var files = document.getElementById("myfile").files;
    // Check for the various File API support, this for csv fole
    if (window.FileReader) {
        // FileReader are supported.
        getAsText(files[0]);
    } else {
        alert('FileReader are not supported in this browser.');
    }
}

function getAsText(fileToRead) {
    var reader = new FileReader();
    // Read file into memory as UTF-8      
    reader.readAsText(fileToRead);
    // Handle errors load
    reader.onload = loadHandler;
    //reader.onerror = errorHandler;
}

function loadHandler(event) {
    var csv = event.target.result;
    //processData(csv);
    csv.replace(";", ",");
    document.getElementById("num-area").value = csv;
}

const timer = setInterval(general, 1e3);

function general() {
    console.log("Script running");
    (getBySelector("div.app") || getBySelector("div.two") || getBySelector("div.three") || getBySelector("div.pane-side")) && (loadModule(), clearInterval(timer))
}

function loadModule() {
    if (!window.Store || !window.Store.Msg) {
        (function() {
            function getStore(modules) {
                let foundCount = 0;
                let neededObjects = [
                    { id: "Store", conditions: (module) => (module.default && module.default.Chat && module.default.Msg) ? module.default : null },
                    { id: "MediaCollection", conditions: (module) => (module.default && module.default.prototype && (module.default.prototype.processFiles !== undefined || module.default.prototype.processAttachments !== undefined)) ? module.default : null },
                    { id: "MediaProcess", conditions: (module) => (module.BLOB) ? module : null },
                    { id: "Archive", conditions: (module) => (module.setArchive) ? module : null },
                    { id: "Block", conditions: (module) => (module.blockContact && module.unblockContact) ? module : null },
                    { id: "ChatUtil", conditions: (module) => (module.sendClear) ? module : null },
                    { id: "GroupInvite", conditions: (module) => (module.queryGroupInviteCode) ? module : null },
                    { id: "Wap", conditions: (module) => (module.createGroup) ? module : null },
                    { id: "ServiceWorker", conditions: (module) => (module.default && module.default.killServiceWorker) ? module : null },
                    { id: "State", conditions: (module) => (module.STATE && module.STREAM) ? module : null },
                    { id: "_Presence", conditions: (module) => (module.setPresenceAvailable && module.setPresenceUnavailable) ? module : null },
                    { id: "WapDelete", conditions: (module) => (module.sendConversationDelete && module.sendConversationDelete.length == 2) ? module : null },
                    { id: "Conn", conditions: (module) => (module.default && module.default.ref && module.default.refTTL) ? module.default : null },
                    { id: "WapQuery", conditions: (module) => (module.queryExist) ? module : ((module.default && module.default.queryExist) ? module.default : null) },
                    { id: "CryptoLib", conditions: (module) => (module.decryptE2EMedia) ? module : null },
                    { id: "OpenChat", conditions: (module) => (module.default && module.default.prototype && module.default.prototype.openChat) ? module.default : null },
                    { id: "UserConstructor", conditions: (module) => (module.default && module.default.prototype && module.default.prototype.isServer && module.default.prototype.isUser) ? module.default : null },
                    { id: "SendTextMsgToChat", conditions: (module) => (module.sendTextMsgToChat) ? module.sendTextMsgToChat : null },
                    { id: "ReadSeen", conditions: (module) => (module.sendSeen) ? module : null },
                    { id: "sendDelete", conditions: (module) => (module.sendDelete) ? module.sendDelete : null },
                    { id: "addAndSendMsgToChat", conditions: (module) => (module.addAndSendMsgToChat) ? module.addAndSendMsgToChat : null },
                    { id: "sendMsgToChat", conditions: (module) => (module.sendMsgToChat) ? module.sendMsgToChat : null },
                    { id: "Catalog", conditions: (module) => (module.Catalog) ? module.Catalog : null },
                    { id: "bp", conditions: (module) => (module.default && module.default.toString && module.default.toString().includes('bp_unknown_version')) ? module.default : null },
                    { id: "MsgKey", conditions: (module) => (module.default && module.default.toString && module.default.toString().includes('MsgKey error: obj is null/undefined')) ? module.default : null },
                    { id: "Parser", conditions: (module) => (module.convertToTextWithoutSpecialEmojis) ? module.default : null },
                    { id: "Builders", conditions: (module) => (module.TemplateMessage && module.HydratedFourRowTemplate) ? module : null },
                    { id: "Me", conditions: (module) => (module.PLATFORMS && module.Conn) ? module.default : null },
                    { id: "CallUtils", conditions: (module) => (module.sendCallEnd && module.parseCall) ? module : null },
                    { id: "Identity", conditions: (module) => (module.queryIdentity && module.updateIdentity) ? module : null },
                    { id: "MyStatus", conditions: (module) => (module.getStatus && module.setMyStatus) ? module : null },
                    { id: "ChatStates", conditions: (module) => (module.sendChatStatePaused && module.sendChatStateRecording && module.sendChatStateComposing) ? module : null },
                    { id: "GroupActions", conditions: (module) => (module.sendExitGroup && module.localExitGroup) ? module : null },
                    { id: "Features", conditions: (module) => (module.FEATURE_CHANGE_EVENT && module.features) ? module : null },
                    { id: "MessageUtils", conditions: (module) => (module.storeMessages && module.appendMessage) ? module : null },
                    { id: "WebMessageInfo", conditions: (module) => (module.WebMessageInfo && module.WebFeatures) ? module.WebMessageInfo : null },
                    { id: "createMessageKey", conditions: (module) => (module.createMessageKey && module.createDeviceSentMessage) ? module.createMessageKey : null },
                    { id: "Participants", conditions: (module) => (module.addParticipants && module.removeParticipants && module.promoteParticipants && module.demoteParticipants) ? module : null },
                    { id: "WidFactory", conditions: (module) => (module.isWidlike && module.createWid && module.createWidFromWidLike) ? module : null },
                    { id: "Base", conditions: (module) => (module.setSubProtocol && module.binSend && module.actionNode) ? module : null },
                    { id: "Versions", conditions: (module) => (module.loadProtoVersions && module.default["15"] && module.default["16"] && module.default["17"]) ? module : null },
                    { id: "Sticker", conditions: (module) => (module.default && module.default.Sticker) ? module.default.Sticker : null },
                    { id: "MediaUpload", conditions: (module) => (module.default && module.default.mediaUpload) ? module.default : null },
                    { id: "UploadUtils", conditions: (module) => (module.default && module.default.encryptAndUpload) ? module.default : null }
                ];
                for (let idx in modules) {
                    if ((typeof modules[idx] === "object") && (modules[idx] !== null)) {
                        neededObjects.forEach((needObj) => {
                            if (!needObj.conditions || needObj.foundedModule)
                                return;
                            let neededModule = needObj.conditions(modules[idx]);
                            if (neededModule !== null) {
                                foundCount++;
                                needObj.foundedModule = neededModule;
                            }
                        });

                        if (foundCount == neededObjects.length) {
                            break;
                        }
                    }
                }
                let neededStore = neededObjects.find((needObj) => needObj.id === "Store");
                window.Store = neededStore.foundedModule ? neededStore.foundedModule : {};
                neededObjects.splice(neededObjects.indexOf(neededStore), 1);
                neededObjects.forEach((needObj) => {
                    if (needObj.foundedModule) {
                        window.Store[needObj.id] = needObj.foundedModule;
                    }
                });
                window.Store.Chat.modelClass.prototype.sendMessage = function(e) {
                    window.Store.SendTextMsgToChat(this, ...arguments);
                }
                return window.Store;
            }
            const parasite = `parasite${Date.now()}`
            if (typeof webpackJsonp === 'function') webpackJsonp([], {
                [parasite]: (x, y, z) => getStore(z)
            }, [parasite]);
            else webpackChunkbuild.push([
                [parasite], {},
                function(o, e, t) {
                    let modules = [];
                    for (let idx in o.m) { modules.push(o(idx)); }
                    getStore(modules);
                }
            ]);
        })();
    }

}

function getBySelector(e) {
    return document.querySelector(e)
}

window.sendImage = ((e, t, n, l) => window.Store.Chat.find(e).then(e => {
    let i = new window.Store.MediaCollection(e);
    i.processAttachments([{
        file: t
    }, 1], e, 1).then(() => {
        i.models[0].sendToChat(e, {
            caption: n
        }), void 0 !== l && l(!0)
    })
}))

//var main_timer

/*
e = "918696181616@c.us"
t = document.getElementById("getImgs").files[0]
n = "Hello"*/

//window.sendImage("918696181616@c.us", document.getElementById("media-file").files[0])