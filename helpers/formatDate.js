'use strict'

function formatDate(dateAndTime){
    let date = dateAndTime.getDate()
    let month = dateAndTime.getMonth() + 1
    let year = dateAndTime.getFullYear()

    if (month < 10) {
        if (date < 10) {
            return `0${date}-0${month}-${year}`    
        } else {
            return `${date}-0${month}-${year}`    
        }
    } else {
        if (date < 10) {
            return `0${date}-${month}-${year}`    
        } else {
            return `${date}-${month}-${year}`    
        }
    }    
}

module.exports = formatDate

