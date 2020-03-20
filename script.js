let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


// Function to generate new target number per round.
const generateTarget = () => 
{	
	return Math.floor(Math.random() * 9);
};

//Function to calc. distance from guess to target
const getAbsoluteDistance = (guess, target) => 
{
	return Math.abs(target - guess);
};

//Function to compare Guesses made
const compareGuesses = (humanGuess, computerGuess, secretTarget) =>
{	
	//To point error if humanGuess is out of range

	if(humanGuess > 9 || humanGuess < 0)
	{
		alert('Error! Guess out of range');
	}
	let human = getAbsoluteDistance(humanGuess, secretTarget);
	let computer = getAbsoluteDistance(computerGuess, secretTarget);
	if(human < computer)
	{
		return true;
	} else if(human === computer)
	{
		return 'human wins';
	} else
	{
		return false;
	}

};

//Function to update the winner's score
const updateScore = (winner) =>
{
	winner === 'human'? humanScore ++ : computerScore ++;
};


const advanceRound = () =>
{
	currentRoundNumber += 1;
};