const drumTotal = document.querySelectorAll(".container > div");

var hiHatOpen = new Audio();
var hiHatClosed = new Audio();
var hiHatFoot = new Audio();
var crashCymbal = new Audio();
var snareDrum = new Audio();
var snareDrumCs = new Audio();
var highTom = new Audio();
var lowTom = new Audio();
var bassDrum = new Audio();
var floorTom = new Audio();
var rideCymbal = new Audio();

drumTotal[0].addEventListener("click", () => {
    hiHatOpen.src = "./sounds/hi-hat-open.mp3";
    hiHatOpen.play();
});
drumTotal[1].addEventListener("click", () => {
    hiHatClosed.src = "./sounds/hi-hat-closed.mp3";
    hiHatClosed.play();
});
drumTotal[2].addEventListener("click", () => {
    hiHatFoot.src = "./sounds/hi-hat-foot.mp3";
    hiHatFoot.play();
});
drumTotal[3].addEventListener("click", () => {
    crashCymbal.src = "./sounds/crash-cymbal.mp3";
    crashCymbal.play();
});
drumTotal[4].addEventListener("click", () => {
    snareDrum.src = "./sounds/snare-drum.mp3";
    snareDrum.play();
});
drumTotal[5].addEventListener("click", () => {
    snareDrumCs.src = "./sounds/snare-drum-cs.mp3";
    snareDrumCs.play();
});
drumTotal[6].addEventListener("click", () => {
    highTom.src = "./sounds/high-tom.mp3";
    highTom.play();
});
drumTotal[7].addEventListener("click", () => {
    lowTom.src = "./sounds/low-tom.mp3";
    lowTom.play();
});
drumTotal[8].addEventListener("click", () => {
    bassDrum.src = "./sounds/bass-drum.mp3";
    bassDrum.play();
});
drumTotal[9].addEventListener("click", () => {
    floorTom.src = "./sounds/floor-tom.mp3";
    floorTom.play();
});
drumTotal[10].addEventListener("click", () => {
    rideCymbal.src = "./sounds/ride-cymbal.mp3";
    rideCymbal.play();
});

document.addEventListener("keypress", (event) => {
    switch (event.key) {
        case "e": case "w":
            hiHatOpen.src = "./sounds/hi-hat-open.mp3";
            hiHatOpen.play();
            break;
        case "r": case "t":
            hiHatClosed.src = "./sounds/hi-hat-closed.mp3";
            hiHatClosed.play();
            break;
        case "c":
            hiHatFoot.src = "./sounds/hi-hat-foot.mp3";
            hiHatFoot.play();
            break;
        case "y":
            crashCymbal.src = "./sounds/crash-cymbal.mp3";
            crashCymbal.play();
            break;
        case "s": case "a":
            snareDrum.src = "./sounds/snare-drum.mp3";
            snareDrum.play();
            break;
        case "d": case "f":
            snareDrumCs.src = "./sounds/snare-drum-cs.mp3";
            snareDrumCs.play();
            break;
        case "g":
            highTom.src = "./sounds/high-tom.mp3";
            highTom.play();
            break;
        case "h":
            lowTom.src = "./sounds/low-tom.mp3";
            lowTom.play();
            break;
        case "x": case "z":
            bassDrum.src = "./sounds/bass-drum.mp3";
            bassDrum.play();
            break;
        case "j":
            floorTom.src = "./sounds/floor-tom.mp3";
            floorTom.play();
            break;
        case "u":
            rideCymbal.src = "./sounds/ride-cymbal.mp3";
            rideCymbal.play();
            break;
    }
});

const showShortcutsElement = document.querySelector(".show-shortcuts");
const shortcutsElements = document.querySelectorAll(".container span");
const shortcutsElementsCount = shortcutsElements.length;

for (let i = 0; i < shortcutsElementsCount; i++) {
    shortcutsElements[i].classList.add("hide-shortcuts");
}

showShortcutsElement.addEventListener("click", () => {
    if (showShortcutsElement.innerHTML === "Show shortcuts") {
        showShortcutsElement.innerHTML = "Hide shortcuts";
        for (let i = 0; i < shortcutsElementsCount; i++) {
            shortcutsElements[i].classList.remove("hide-shortcuts");
        }
    }
    else {
        showShortcutsElement.innerHTML = "Show shortcuts";
        for (let i = 0; i < shortcutsElementsCount; i++) {
            shortcutsElements[i].classList.add("hide-shortcuts");
        }
    }
});

const showRangesElement = document.querySelector(".show-ranges");
const rangesElements = document.querySelectorAll(".container > div");
const rangesElementsCount = rangesElements.length;

showRangesElement.innerHTML = "Show ranges";
for (let i = 0; i < rangesElementsCount; i++) {
    rangesElements[i].classList.add("hide-border");
}

showRangesElement.addEventListener("click", () => {
    if (showRangesElement.innerHTML === "Show ranges") {
        showRangesElement.innerHTML = "Hide ranges";
        for (let i = 0; i < rangesElementsCount; i++) {
            rangesElements[i].classList.remove("hide-border");
        }
    }
    else {
        showRangesElement.innerHTML = "Show ranges";
        for (let i = 0; i < rangesElementsCount; i++) {
            rangesElements[i].classList.add("hide-border");
        }
    }
});