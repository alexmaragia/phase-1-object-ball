// src/00-objectball.js

// Step 1: Define the gameObject function
function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1,
          },
        },
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10,
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5,
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0,
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12,
          },
        },
      },
    };
  }
  
  // Step 2: Define functions that operate on the game object
  
  // Function to return the number of points scored by a given player
  function numPointsScored(playerName) {
    const game = gameObject();
    for (let team in game) {
      const players = game[team].players;
      if (players[playerName]) {
        return players[playerName].points;
      }
    }
    return null; // Player not found
  }
  
  // Function to return the shoe size of a given player
  function shoeSize(playerName) {
    const game = gameObject();
    for (let team in game) {
      const players = game[team].players;
      if (players[playerName]) {
        return players[playerName].shoe;
      }
    }
    return null; // Player not found
  }
  
  // Function to return the colors of a given team
  function teamColors(teamName) {
    const game = gameObject();
    for (let team in game) {
      if (game[team].teamName === teamName) {
        return game[team].colors;
      }
    }
    return null; // Team not found
  }
  
  // Function to return an array of team names
  function teamNames() {
    const game = gameObject();
    return Object.values(game).map(team => team.teamName);
  }
  
  // Function to return an array of jersey numbers for a given team
  function playerNumbers(teamName) {
    const game = gameObject();
    for (let team in game) {
      if (game[team].teamName === teamName) {
        return Object.values(game[team].players).map(player => player.number);
      }
    }
    return []; // Team not found or no players
  }
  
  // Function to return the stats of a given player
  function playerStats(playerName) {
    const game = gameObject();
    for (let team in game) {
      const players = game[team].players;
      if (players[playerName]) {
        return players[playerName];
      }
    }
    return null; // Player not found
  }
  
  // Function to return the number of rebounds of the player with the largest shoe size
  function bigShoeRebounds() {
    const game = gameObject();
    let largestShoe = 0;
    let rebounds = 0;
  
    for (let team in game) {
      const players = game[team].players;
      for (let player in players) {
        if (players[player].shoe > largestShoe) {
          largestShoe = players[player].shoe;
          rebounds = players[player].rebounds;
        }
      }
    }
  
    return rebounds;
  }
  
  // Bonus Functions
  
  // Function to find the player with the most points scored
  function mostPointsScored() {
    const game = gameObject();
    let maxPoints = 0;
    let topPlayer = "";
  
    for (let team in game) {
      const players = game[team].players;
      for (let player in players) {
        if (players[player].points > maxPoints) {
          maxPoints = players[player].points;
          topPlayer = player;
        }
      }
    }
  
    return topPlayer;
  }
  
  // Function to find the team with the most points
  function winningTeam() {
    const game = gameObject();
    let homePoints = 0;
    let awayPoints = 0;
  
    for (let player in game.home.players) {
      homePoints += game.home.players[player].points;
    }
  
    for (let player in game.away.players) {
      awayPoints += game.away.players[player].points;
    }
  
    return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
  }
  
  // Function to find the player with the longest name
  function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";
  
    for (let team in game) {
      const players = game[team].players;
      for (let player in players) {
        if (player.length > longestName.length) {
          longestName = player;
        }
      }
    }
  
    return longestName;
  }
  
  // Super Bonus Function
  
  // Function to determine if the player with the longest name also has the most steals
  function doesLongNameStealATon() {
    const game = gameObject();
    const longestNamePlayer = playerWithLongestName();
    let mostSteals = 0;
    let topPlayer = "";
  
    for (let team in game) {
      const players = game[team].players;
      for (let player in players) {
        if (players[player].steals > mostSteals) {
          mostSteals = players[player].steals;
          topPlayer = player;
        }
      }
    }
  
    return longestNamePlayer === topPlayer;
  }
  
  // Testing the functions in the console
  
  console.log("Points scored by Alan Anderson:", numPointsScored("Alan Anderson")); // Should log: 22
  console.log("Shoe size of Jason Terry:", shoeSize("Jason Terry")); // Should log: 15
  console.log("Colors of Brooklyn Nets:", teamColors("Brooklyn Nets")); // Should log: ["Black", "White"]
  console.log("Team names:", teamNames()); // Should log: ["Brooklyn Nets", "Charlotte Hornets"]
  console.log("Jersey numbers of Charlotte Hornets:", playerNumbers("Charlotte Hornets")); // Should log: [4, 0, 2, 8, 33]
  console.log("Stats for Ben Gordon:", playerStats("Ben Gordon")); // Should log the stats object for Ben Gordon
  console.log("Rebounds for player with largest shoe size:", bigShoeRebounds()); // Should log the number of rebounds
  console.log("Player with the most points scored:", mostPointsScored()); // Should log the player with the most points
  console.log("Winning team:", winningTeam()); // Should log the team with the most points
  console.log("Player with the longest name:", playerWithLongestName()); // Should log the player with the longest name
  console.log("Does the player with the longest name have the most steals?:", doesLongNameStealATon()); // Should log true or false
  