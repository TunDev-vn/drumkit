const drumTotal = document.querySelectorAll(".container > div");

const drumCount = drumTotal.length;
for (let i = 0; i < drumCount; i++) {
    drumTotal[i].addEventListener("click", () => {
        makeSounds(drumTotal[i].dataset.keypress);
    });
}

document.addEventListener("keypress", (event) => {
    makeSounds(event.key);
});

function makeSounds(keypress) {
    switch (keypress) {
        case "e": case "w":
            var hiHatOpen = new Audio("./sounds/hi-hat-open.mp3");
            hiHatOpen.play();
            break;
        case "r": case "t":
            var hiHatClosed = new Audio("./sounds/hi-hat-closed.mp3");
            hiHatClosed.play();
            break;
        case "c":
            var hiHatFoot = new Audio("./sounds/hi-hat-foot.mp3");
            hiHatFoot.play();
            break;
        case "y":
            var crashCymbal = new Audio("./sounds/crash-cymbal.mp3");
            crashCymbal.play();
            break;
        case "s": case "a":
            var snareDrum = new Audio("./sounds/snare-drum.mp3");
            snareDrum.play();
            break;
        case "d": case "f":
            var snareDrumCs = new Audio("./sounds/snare-drum-cs.mp3");
            snareDrumCs.play();
            break;
        case "g":
            var highTom = new Audio("./sounds/high-tom.mp3");
            highTom.play();
            break;
        case "h":
            var lowTom = new Audio("./sounds/low-tom.mp3");
            lowTom.play();
            break;
        case "x": case "z":
            var bassDrum = new Audio("./sounds/bass-drum.mp3");
            bassDrum.play();
            break;
        case "j":
            var floorTom = new Audio("./sounds/floor-tom.mp3");
            floorTom.play();
            break;
        case "u":
            var rideCymbal = new Audio("./sounds/ride-cymbal.mp3");
            rideCymbal.play();
            break;
    }
}

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