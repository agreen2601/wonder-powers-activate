const flightHandler = () => {
    let enablePower = document.getElementById("flight");
    document.querySelector("#activate-flight").addEventListener("click", function () {
        enablePower.classList.replace("disabled", "enabled");
    })
}
flightHandler();

const mindReadingHandler = () => {
    let enableMindReading = document.getElementById("mindreading");
    document.querySelector("#activate-mindreading").addEventListener("click", function () {
        enableMindReading.classList.replace("disabled", "enabled");
    })
}
mindReadingHandler();

const xrayHandler = () => {
    let enableXray = document.getElementById("xray");
    document.querySelector("#activate-xray").addEventListener("click", function () {
        enableXray.classList.replace("disabled", "enabled");
    })
}
xrayHandler();

const allPowersActivator = () => {
    let activateAllPowers = document.querySelectorAll(".power");
    document.querySelector("#activate-all").addEventListener("click", function () {
        for (let i = 0; i < activateAllPowers.length; i++) {
            activateAllPowers[i].classList.replace("disabled", "enabled");
        }
    })
}
allPowersActivator();

const allPowersDeactivator = () => {
    let deactivateAllPowers = document.querySelectorAll(".power");
    document.querySelector("#deactivate-all").addEventListener("click", function () {
        for (let i = 0; i < deactivateAllPowers.length; i++) {
            deactivateAllPowers[i].classList.replace("enabled", "disabled");
        }
    })
}
allPowersDeactivator();