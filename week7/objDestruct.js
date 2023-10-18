const mail = {
  sender: 'SIT, KMUTT',
  recipent: {
    firstname: 'Natthaphol',
    lastname: 'Nirattisaikul'
  },
  title: 'Welcome to KMUTT',
  sentDetail: {
    sentDate: new Date(Date.now()),
    host: {
      name: '@sit.kmutt.ac.th'
    }
  }
}

//firstname,lastname
let {
  recipent: { firstname, lastname }
} = mail
console.log(firstname)
console.log(lastname)
//host name
let {
  sentDetail: {
    host: { name: hostname }
  }
} = mail
console.log(hostname)
