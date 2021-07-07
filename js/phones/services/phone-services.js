
   
let API_URL = 'https://mate-academy.github.io/phone-catalogue-static/api'

let PhonesService = {
   getAll({query='', order=''} = {})  {
    // let filteredPhones = phonesFromServer.filter(phone => {
    //   return phone.name.toLowerCase().includes(query.toLowerCase())
    // }) 
    
    // let sortedPhone = filteredPhones.sort((phone1, phone2) => {
    //   if (typeof phone1[order] == 'string') {
    //     return phone1[order].localeCompare(phone2[order])
    //   } else if (typeof phone1[order] == 'number') {
    //     return phone1[order] - phone2[order]
    //   }
    // })
    // return sortedPhone
    
    return fetch(API_URL + '/phones.json').then((response) => response.json())
  },
  getById(id) {
    return fetch(API_URL + `/phones/${id}.json`).then((response) => response.json())
  }
}

export default PhonesService

