class GamesAdapter {
  constructor() {
    this.baseURL = "http://localhost:3000/api/v1/games/leaderboard"
  }

  getGames() {
    return fetch(this.baseURL).then(res => res.json())
  }

  createGame(data) {
    return fetch(this.baseURL, {
      method: 'POST',
      headers: {
         'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
  }

}
