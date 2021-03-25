export default function getGreeting(addEmoji) {  
  const date = new Date().getHours()
  const greetingWithEmoji = date < 12 ? 'Good Morning🌞' : date < 17 ? 'Good Afternoon⛅' : date < 20 ? 'Good Evening🌗' : 'Good Night🌑';
  const greetingWithoutEmoji = date < 12 ? 'Good Morning' : date < 17 ? 'Good Afternoon' : date < 20 ? 'Good Evening' : 'Good Night';
  // console.log(date);
  // console.log(greeting);
  return addEmoji ? greetingWithEmoji : greetingWithoutEmoji
}