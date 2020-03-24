const Tuple = require('../../Tuple')

const Status = Tuple(Boolean, String);

// trim :: String -> String
const trim = (str) => str.replace(/^\s*|\s*$/g, '');
// normalize :: String -> String
const normalize = (str) => str.replace(/\-/g, '');

// isValid :: String -> Status
const isValid = str => {
  if(str.length === 0) {
    return new Status(false, 'Invald input. Expected non-empty value!')
  } else {
    return new Status(true, 'Succress!');
  }
}


isValid(normalize(trim('444-44-4444')));
