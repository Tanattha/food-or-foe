class Emojis {
  constructor() {
    this.emojis = []
    this.adapter = new EmojisAdapter()
    this.fetchAndLoadEmojis()
    this.length()
  }

  fetchAndLoadEmojis() {
    console.log("Loading emoji :P")
    this.adapter.getEmojis()
    .then(emojis => {
      emojis.forEach(emoji => this.emojis.push(emoji))
      // return console.log(emojis)
    })
    .then(() => {
      this.render()
      this.randomEmoji()
    })
  }

  render() {
    console.log("Rendering emojis...")
    const emojiArray = this.emojis.map(emoji => emoji.character)
    console.log(emojiArray)
  }

  randomEmoji() {
    this.emojis[Math.floor(Math.random() * this.emojis.length)]
  }

  length() {
    this.emojis.length
  }

}
