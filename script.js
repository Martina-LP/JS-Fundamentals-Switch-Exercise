
let day = 'monday';

switch( day ) {
  case 'monday':
    console.log('Attend coding class');
    console.log('Perform coding exercises');
    console.log('Go to the gym');
    break;
  case 'tuesday':
    console.log('Attend coding class');
    console.log('Perform coding exercises');
    console.log('Go to friends meet up');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Attend coding class');
    console.log('Perform coding exercises');
    console.log('Read some books and watch tv series');
    break;
  case 'friday':
    console.log('Attend coding class');
    console.log('Perform coding exercises');
    console.log('Grab a drink with friends');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Relax and enjoy the weekend');
    break;
  default:
    console.log('Not a valid day!');
};

// Write the same schedule using if/else-if statement
day = 'friday';

if( day === 'monday' ) {
  console.log('Attend coding class');
  console.log('Perform coding exercises');
  console.log('Go to the gym');

} else if( day === 'tuesday' ) {
  console.log('Attend coding class');
  console.log('Perform coding exercises');
  console.log('Go to friends meet up');

} else if( day === 'wednesday' || day === 'thursday') {
  console.log('Attend coding class');
  console.log('Perform coding exercises');
  console.log('Read some books and watch tv series');
  
} else if( day === 'friday' ) {
  console.log('Attend coding class');
  console.log('Perform coding exercises');
  console.log('Grab a drink with friends');

} else if( day === 'saturday' || day === 'sunday') {
  console.log('Relax and enjoy the weekend');

} else {
  console.log('Not a valid day!');
};