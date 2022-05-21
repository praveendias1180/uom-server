let ascii_text_generator = require('ascii-text-generator');

let input_text = "Range \\nQuest";
let text ="\n\n" + ascii_text_generator(input_text,"2") + "\n\n";
 
console.log(text)