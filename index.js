
function capitalize(string) {
 

}


class Formatter {
  //add static methods here

  static capitalize(string) {
    const firstLetter = string.charAt(0).toUpperCase()
    let newString = string.slice(1)
    const endString = firstLetter + newString
    return endString
   
  }

  static sanitize (string) {
    return string.replace(/[~!@#$%^&*+(){}]/g, "")
  }

  static titleize (string) {
   const unsuedWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const splitSentence = string.split(" ")
    const newSentence = []
    splitSentence.forEach(word => {
      if (word == splitSentence[0]){
        newSentence.push(this.capitalize(word))
      } else {
        if (unsuedWords.includes(word)){
          newSentence.push(word)
        }else {
          newSentence.push(this.capitalize(word))
        }
      }
    })

    return newSentence.join(" ")
  }
}