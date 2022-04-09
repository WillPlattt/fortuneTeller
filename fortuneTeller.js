const randAdj = [['incredible', 'optimistic', 'good', 'interesting', 'great', 'brilliant', 'fantastic', 'rich',' amazing', 'fine'], ['bad', 'sad', 'dismal', 'rubbish', 'terrible', 'awful', 'horrific', 'scary', 'frightening', 'dark']]

const randParagraph = [
'Advice, when most needed, is least heeded.', 'All the effort you are making will ultimately pay off.', 'All the troubles you have will pass away very quickly.', 'All will go well with your new project.', 'All your hard work will soon pay off.', 'Allow compassion to guide your decisions.', 'An acquaintance of the past will affect you in the near future.', 'An agreeable romance might begin to take on the appearance.', 'An important person will offer you support.', 'An inch of time is an inch of gold.', 'Any day above ground is a good day.', 'Any decision you have to make tomorrow is a good decision.', 'At the touch of love, everyone becomes a poet.', 'Be careful or you could fall for some tricks today.', 'Beauty in its various forms appeals to you.', 'Because you demand more from yourself, others respect you deeply.', 'Believe in yourself and others will too.', 'Believe it can be done.', 'Better ask twice than lose yourself once.', 'Bide your time, for success is near.', 'Carve your name on your heart and not on marble.', 'Chance favors those in motion.', 'Change is happening in your life, so go with the flow!', 'Competence like yours is underrated.', 'Congratulations! You are on your way.', 'Could I get some directions to your heart?', 'Courtesy begins in the home.'];
// GENERATES A RANDOM NUMBER BETWEEN 0 AND 10
var randNumber = Math.floor(Math.random() * 11);
// GENERATES A RANDOM NUMBER BETWEEN 0 AND 27
var randParaNumber = Math.floor(Math.random() * 28);
console.log('Your Fortune is being calculated.....?')
console.log('........................................................')

var fortune = '';

let answer1 = randAdj[0][randNumber]
let answer2 = randAdj[1][randNumber]

//Fortune
console.log(`Your future is looking ${answer1}.`)
console.log(`However your past looks ${answer2}`)

console.log(`My Advise ...${randParagraph[randParaNumber]}`);

