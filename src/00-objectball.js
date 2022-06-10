// Step 1: Building the object

function gameObject() {

    return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: 'Charlotte Hornets',
            // index: 0,          1
            colors: ['Turquoise', 'Purple'],
            players: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                'DeSagna Diop': {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                'Ben Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                'Brendan Haywood': {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    }
}

// Step 2: Building functions

// 1. Build a function, numPointsScored that takes in an argument of a player's name and returns the number of points scored for that player.

function homeTeam() {
    return gameObject().home
}

function awayTeam() {
    return gameObject().away
}

function players() {
    return Object.assign({}, homeTeam().players, awayTeam().players)
}

function numPointsScored(playerName) {
    
    const playerArrays = Object.entries(players())
    const player = playerArrays.find(playerArray => playerArray[0] === playerName)

    return player[1].points
}
console.log('Brook Lopez\'s number of points', numPointsScored('Brook Lopez'))
// debugger


// 2. Build a function, shoeSize, that takes in an argument of a player's name and returns the shoe size for that player.

function shoeSize(playerName) {
    return players()[playerName].shoe
}

console.log('Shoe size is ', shoeSize('Brendan Haywood'))

// 3. Build a function, teamColors, that takes in an argument of the team name and returns an array of that teams colors.

function teamColors(teamName) {
    const team = teamName === 'home' ? homeTeam() : awayTeam()
    return team.colors
}

console.log('Team colors are ', teamColors('Brooklyn Nets'))

// 4. Build a function, teamNames, that operates on the game object to return an array of the team names.

function teamNames() {
    return [homeTeam().teamName, awayTeam().teamName]
}

// debugger
console.log('team names ', teamNames())

// 5. Build a function, playerNumbers, that takes in an argument of a team name and returns an array of the jersey number's for that team.

function playerNumbers(theTeam) {
    const team = theTeam === 'home' ? homeTeam() : awayTeam()
    const playerNumbers = Object.keys(team.players).map(player => team.players[player].number)
    return playerNumbers
}

console.log('player numbers ', playerNumbers('home'))

// 6. Build a function, playerStats, that takes in an argument of a player's name and returns a object of that player's stats.

function playerStats(playerName) {
    return players()[playerName]
}

console.log('player stats ', playerStats('Jeff Adrien'))

// 7. Build a function, bigShoeRebounds, that will return the number of rebounds associated with the player that has the largest shoe size.

function bigShoeRebounds() {

}