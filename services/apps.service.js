var mock = require('../mock')


var new_games = function (res) {
    res.send(mock.newGames)
}

var top_games = function (res) {
    res.send(mock.topGames)
}

var home_games = function (res) {
    res.send(mock.home)
}


module.exports = {
    newGameService: new_games,
    topGameService: top_games,
    homeGameService: home_games
}