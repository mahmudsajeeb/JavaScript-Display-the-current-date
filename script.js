let today = new Date()
let date = today.getDate()
let month = today.getMonth() +1
let years = today.getUTCFullYear()

if(date <10){
  date = "0" + date
}
if(month < 10){
  month = "0" + month
}

today = month+ '-'+ date + '-'+years
document.write(today);


