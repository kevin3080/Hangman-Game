<template>
    <div class="keyboard">
        <div>
            <div class="keyboard__row">
                <div class="key--letter" data-char="Q">Q</div>
                <div class="key--letter" data-char="W">W</div>
                <div class="key--letter" data-char="E">E</div>
                <div class="key--letter" data-char="R">R</div>
                <div class="key--letter" data-char="T">T</div>
                <div class="key--letter" data-char="Y">Y</div>
                <div class="key--letter" data-char="U">U</div>
                <div class="key--letter" data-char="I">I</div>
                <div class="key--letter" data-char="O">O</div>
                <div class="key--letter" data-char="P">P</div>
            </div>
            <div class="keyboard__row">
                <div class="key--letter" data-char="A">A</div>
                <div class="key--letter" data-char="S">S</div>
                <div class="key--letter" data-char="D">D</div>
                <div class="key--letter" data-char="F">F</div>
                <div class="key--letter" data-char="G">G</div>
                <div class="key--letter" data-char="H">H</div>
                <div class="key--letter" data-char="J">J</div>
                <div class="key--letter" data-char="K">K</div>
                <div class="key--letter" data-char="L">L</div>
            </div>
            <div class="keyboard__row">
                <div class="key--letter" data-char="Z">Z</div>
                <div class="key--letter" data-char="X">X</div>
                <div class="key--letter" data-char="C">C</div>
                <div class="key--letter" data-char="V">V</div>
                <div class="key--letter" data-char="B">B</div>
                <div class="key--letter" data-char="N">N</div>
                <div class="key--letter" data-char="N">Ñ</div>
                <div class="key--letter" data-char="M">M</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .keyboard {
        text-align: center;
        font-size: 14px;
        font-family: sans-serif;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        & > div {
            display: grid;
            grid-template-columns: 1fr;
            place-items: center;
            width: 80%;
        }
    }

    .keyboard__row {
        display: inline-block;
        height: 3em;
        margin: 0.2em;
    }

    .keyboard__row > * {
        position: relative;
        background: #333;
        text-align: center;
        color: #eee;
        float: left;
        border-radius: 0.3em;
        margin: 0.2em;
        padding: 0.2em;
        width: 3.3em;
        height: 100%;
        box-sizing: border-box;
        cursor: pointer;
        -webkit-user-select: none;
        border: 1px solid #444;
        box-shadow: 0 0.2em 0 0.05em #222;
        border-bottom-color: #555;
    }

    .keyboard__row > div[data-pressed],
    .keyboard__row > div:active {
        background: #2a2a2a;
        color: #aaa;
        position: relative;
        top: 0.2em;
        box-shadow: 0 0 0 0.05em black;
    }

    .key--letter {
        line-height: 2.8em;
    }
</style>