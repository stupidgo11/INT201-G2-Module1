const keywords = ['destructuring', 'spread', 'rest', 'prototypes', 'function']
const mails = [
  {
    id: 105,
    sender: {
      firstname: 'Natthaphol',
      lastname: 'Nira'
    },
    subject: 'welcome to SIT,KMUTT'
  },
  {
    id: 124,
    sender: {
      firstname: 'Pasit',
      lastname: 'Winy'
    },
    subject: 'Reminder: INT201 Class'
  }
]
//forEach() Examples : no return
keywords.forEach((keyword) => console.log(keyword))
mails.forEach((mail) => console.log(mail))

//1. string contains the first charactor of each keyword
let firstChar = ''
// keywords.forEach((keyword) => firstChar += keyword.slice(0,1))
keywords.forEach((keyword) => (firstChar += keyword.charAt(0)))
console.log(firstChar)
keywords.push('optional chaining')
console.log(keywords)

//2. all mail ids of mails array
const mailIds = []
mails.forEach((mail) => mailIds.push(mail.id))
console.log(mailIds)

//filter() Examples : return new array that contain values that true in expression
//3. return array that contains keywords which includes 'es' (case insensitive)
//to use filter() : expression return boolean only
const esKeywords = keywords.filter((keyword) =>
  keyword.toLocaleLowerCase().includes('es')
)
console.log(esKeywords)

//map() Examples : return new array on every element in the array
//map() better than forEach()
//map() like where clause in sql you can select some property in array
//4. array that contains all senders'firstname'
const mailSenders = mails.map((mail) => mail.sender.firstname)
console.log(mailSenders)

//5. array that contains all mailids that start with 'logId-'
const logMailIds = mails.map((mail) => 'logId-' + mail.id)
console.log(logMailIds)
