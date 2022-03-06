/*eslint-disable no-extend-native */

import { MAX_HINTS } from "../../next.config"

Array.prototype.findWordsWithLettersInSlots = function (letterSlotPairs){
  if( letterSlotPairs.length === 0 ) return this
  if( Object.keys(letterSlotPairs).length === 0 ) return this

  return this.filter( word => {
    return letterSlotPairs.every( (pair) => {
      return word.charAt(pair.slot) === pair.letter 
    })
  })
}

export const getKeyValueFromPair = (pair) => {
  const char = Object.keys(pair)[0]
  const slot = pair[char]
  return [char, slot]
}

export const getLetterSlotPairsByStatusFromCharsArray = (chars, status) =>{
  return chars
    .filter( c => c.status === status) // 3 means its a pair
    .map( c => { return { letter: c.letter, slot: c.slot }})
}


const formatWordListAsHints = (wordList) =>{

  const requiresElipses = wordList.length > MAX_HINTS
  const hintList = wordList.slice(0,MAX_HINTS).join(" ")

  if(requiresElipses){
    return {
      hintInfo: `Showing ${MAX_HINTS} of ${wordList.length} hints:`, 
      hintList: `${hintList}...`
    }
  }

  return {
    hintInfo: `${wordList.length} hints:`,
    hintList: hintList
  }
}

export const getHints = (wordList, chars) =>{
  const hintList = filterWordList(wordList, chars) 
  return formatWordListAsHints(hintList)
}

export const filterWordList = (wordList, chars) => {
  

  const inSlotList = getLetterSlotPairsByStatusFromCharsArray(chars, 3)
  const excludedList =  getLetterSlotPairsByStatusFromCharsArray(chars, 1)
  const excludedCharString = excludedList.map( c => c.letter ).join("")
  const includedList =  getLetterSlotPairsByStatusFromCharsArray(chars, 2)
  // [{letter: "h", slot:0},{letter: "i", slot:1}] -> "hi"
  
  console.log(`****** FILTERING ******`)
  console.log(`finding words with with letter in slot: ${JSON.stringify(inSlotList)}`)
  console.log(`finding words excluding: ${JSON.stringify(excludedCharString)}`)
  console.log(`finding words including: ${JSON.stringify(includedList)}`)
  

  return wordList
    .findWordsWithLettersInSlots(inSlotList)
    .findWordsWithCharsButNotInSlot(includedList)
    .findWordsWithoutChars(excludedCharString)
}