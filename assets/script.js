
var game = {
    wins: 0,
    losses: 0,
    ties:0,
    userInput: null,
    compInput: null,
    options: ["R", "P", "S"],
    getUserInput: function () {
        var input = window.prompt("Choose your weapon: R, P, S")
        if (input) {
            return input.toUpperCase()
        } else {
            return false
        }
    },
    getComputerInput: function() {
        var index = Math.floor(Math.random() * this.options.length)
        return this.options[index]
    },
    getWinner: function() {
        // user === computer -> tie
        if( this.userInput === this.compInput ) {
            this.ties++
            alert('its a tie!')
        }else if (
            // user === "R" && Compuer === "S" -> win
            // user === "S" && Compuer === "P" -> win
            // user === "P" && Compuer === "R" -> win
            (this.userInput === "R" && this.compInput === "S") ||
            (this.userInput === "S" && this.compInput === "P") ||
            (this.userInput === "P" && this.compInput === "R") 
        ){
            this.wins++
            alert('your enemy has been vanquished!')
        } else {
            this.losses++
            alert('YOU HAVE BEEN VANQUISHED!')
        }
    },
    logStats: function() {
        // print stats
        window.alert(`
            losses: ${this.losses}
            wins: ${this.wins}
            ties: ${this.ties}
        `)
    },
    playAgain: function() {
        var playAgain = window.confirm('Would you like to play again?')

        if (playAgain) {
            this.play()
        } else {
            window.alert('Thank you for Playing')
            window.alert(`
                Your final tally:
            `)
            this.logStats()
        }
    },
    play: function() {
        // getting user input
        this.userInput = this.getUserInput()

        if (!this.userInput) {
            return alert('User has gone to battle unarmed and died')
        }
        // generate a computer input
        this.compInput =this.getComputerInput()
        alert(`Your enemy has chosen ${this.compInput}`)

        this.getWinner()
        // print stats
        this.logStats()

        // if true play else end
        this.playAgain()
    }
}

game.play()