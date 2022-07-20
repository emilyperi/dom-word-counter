class WordCounter {
    // Listen for input event of <textarea>
    constructor(inputText) {
        this.inputText = inputText;
        this.inputText.addEventListener('input', () => {this.count();});
    }

    count() {
        let wordStat = this.getWordStat(this.inputText.value.trim());
        this.emitEvent(wordStat);

    }
    getWordStat(str) {
        let matches = str.match(/\S+/g);
        return {
            characters: str.length,
            words: matches ? matches.length : 0,
        };
    }

    emitEvent(wordStat) {
        let countEvent = new CustomEvent('count', {
            bubbles: true,
            cancelable: true,
            detail: {
                wordStat
            }
        });
        this.inputText.dispatchEvent(countEvent);
    }

}