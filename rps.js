let choices = ['ROCK', 'PAPER', 'SCISSORS']
function computerPlay() {
    return choices[~~(Math.random() * choices.length)];
}
function playRound(user, computer){
    if (user == computer) {
        return 'TIE! NO POINT'
    }
    if (user == 'PAPER' && computer == 'ROCK'){
        return 'You win, paper beats rock :)'
    }
    if (user == 'PAPER' && computer == 'SCISSORS'){
        return 'You lost, paper loses to scissors :C'
    }
    if (user == 'ROCK' && computer == 'PAPER'){
        return 'You lost, rock loses to paper :C'
    }
    if (user == 'ROCK' && computer == 'SCISSORS'){
        return 'You win, rock beat scissors :)'
    }
    if (user == 'SCISSORS' && computer == 'ROCK'){
        return 'You lost, scissors loses to rock'
    }
    if (user == 'SCISSORS' && computer == 'PAPER'){
        return 'You win, scissors beats paper'
    }
}
function game(){
    let c = 0
    let u = 0
    for (let i = 0; i < 5; i++){
        let userchoice = prompt('Pick rock, paper, or scissors: ').toUpperCase()
        let p = playRound(userchoice, computerPlay())
        console.log(p)
        if (p.slice(0, 5) == 'You w'){
            u++;
        }else if(p.slice(0, 5) == 'You l'){
            c++;
        }
        console.log('the score is user:'+ u + ' to computer:'+ c) 
    }
    if (u > c){
        console.log('USER WINS!')
    }else if (c > u){
        console.log('COMPUTER WINS!')
    }
    else{
        console.log('tie!')
    }
    console.log('thanks for playing')
}
window.onload = function(){
    let c = 0
    let u = 0
    const ROCK = document.querySelector('#ROCK')
    const PAPER = document.querySelector('#PAPER')
    const SCISSORS = document.querySelector('#SCISSORS')
    const result = document.querySelector('.result')
    const user = document.querySelector('#user')
    const computer = document.querySelector('#computer')
    ROCK.addEventListener('click', () => {
        result.innerHTML = (playRound('ROCK', computerPlay()))
        if (result.innerHTML.slice(0, 5) == 'You w'){
            u++;
        }else if(result.innerHTML.slice(0, 5) == 'You l'){
            c++;
        }
        user.innerHTML = 'USER: '+ u
        computer.innerHTML = 'COMPUTER: '+ c
    });
    SCISSORS.addEventListener('click', () => {
        result.innerHTML = (playRound('SCISSORS', computerPlay()))
        if (result.innerHTML.slice(0, 5) == 'You w'){
            u++;
        }else if(result.innerHTML.slice(0, 5) == 'You l'){
            c++;
        }
        user.innerHTML = 'USER: '+ u
        computer.innerHTML = 'COMPUTER: '+ c
    });
    PAPER.addEventListener('click', () => {
        result.innerHTML = (playRound('PAPER', computerPlay()))
        if (result.innerHTML.slice(0, 5) == 'You w'){
            u++;
        }else if(result.innerHTML.slice(0, 5) == 'You l'){
            c++;
        }
        user.innerHTML = 'USER: '+ u
        computer.innerHTML = 'COMPUTER: '+ c
    });
};
