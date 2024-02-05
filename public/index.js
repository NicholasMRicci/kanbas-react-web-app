function setNavigationActive() {
    let elems = [...document.querySelectorAll(".wd-kanbas-navigation > li")]
    let id = window.location.pathname.split("/")[2];
    elems.forEach((elem) => {
        if (elem.id.toLowerCase() == id.toLowerCase()) {
            elem.className = "wd-active"
        }
    })
}

async function setTriFold(nodes) {
    let elems = [...nodes]
    let promises = []

    for (const elem of elems) {
        promises.push(fetch(elem.id).then((resp) => {
            return resp.text();
        }).then((html) => {
            elem.innerHTML = html;
        }))
    }

    await Promise.all(promises)
}

async function setCourseNavigationActive() {
    let elems = [...document.querySelectorAll(".wd-navigation > li")]
    let id = window.location.pathname.split("/")[3];
    elems.forEach((elem) => {
        if (elem.id.toLowerCase() == id.toLowerCase()) {
            elem.className = "wd-active"
        }
    })
}