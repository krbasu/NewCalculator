const onebtn = () => {
  let text = document.getElementsByClassName('area')
  const onebutton = document.getElementsByClassName('btn')[0]
  text[0].value += onebutton.innerHTML
}
const twobtn = () => {
  let text = document.getElementsByClassName('area')
  const twobutton = document.getElementsByClassName('btn')[1].innerHTML
  text[0].value += twobutton
}
const threebtn = () => {
  let text = document.getElementsByClassName('area')
  const threebutton = document.getElementsByClassName('btn')[2].innerHTML
  text[0].value += threebutton
}
const fourbtn = () => {
  let text = document.getElementsByClassName('area')
  const fourbutton = document.getElementsByClassName('btn')[3].innerHTML
  text[0].value += fourbutton
}
const fivebtn = () => {
  let text = document.getElementsByClassName('area')
  const fivebutton = document.getElementsByClassName('btn')[4].innerHTML
  text[0].value += fivebutton
}
const sixbtn = () => {
  let text = document.getElementsByClassName('area')
  const sixbutton = document.getElementsByClassName('btn')[5].innerHTML
  text[0].value += sixbutton
}
const sevenbtn = () => {
  let text = document.getElementsByClassName('area')
  const sevenbutton = document.getElementsByClassName('btn')[6].innerHTML
  text[0].value += sevenbutton
}
const eightbtn = () => {
  let text = document.getElementsByClassName('area')
  const eightbutton = document.getElementsByClassName('btn')[7].innerHTML
  text[0].value += eightbutton
}
const ninebtn = () => {
  let text = document.getElementsByClassName('area')
  const ninebutton = document.getElementsByClassName('btn')[8].innerHTML
  text[0].value += ninebutton
}
const zerobtn = () => {
  let text = document.getElementsByClassName('area')
  const zerobutton = document.getElementsByClassName('btn')[9].innerHTML
  text[0].value += zerobutton
}
const plusbtn = () => {
  let text = document.getElementsByClassName('area')
  const plusbutton = '+'
  text[0].value += plusbutton
}

const minusbtn = () => {
  let text = document.getElementsByClassName('area')
  const minusbutton = '-'
  text[0].value += minusbutton
}

const multiplybtn = () => {
  let text = document.getElementsByClassName('area')
  const multiplybutton = '*'
  text[0].value += multiplybutton
}
const dividebtn = () => {
  let text = document.getElementsByClassName('area')
  const dividebutton = '/'
  text[0].value += dividebutton
}

const equalbtn = () => {
  let text = document.getElementsByClassName('area')[0].value
  let val = eval(text)
  document.getElementsByClassName('area')[0].value = val
}

const clearbtn = () => {
  let text = document.getElementsByClassName('area')
  text[0].value = ''
}
const text = document.getElementsByClassName('area')
const del = () => {
  let val = text[0].value
  let arr = val.split('')
  arr.pop()
  let arrjoin = arr.join('')
  text[0].value = arrjoin
}
const lbracket = () => {
  let text = document.getElementsByClassName('area')
  const lbracket = '('
  text[0].value += lbracket
}
const rbracket = () => {
  let text = document.getElementsByClassName('area')
  const rbracket = ')'
  text[0].value += rbracket
}
const percent = () => {
  let text = document.getElementsByClassName('area')
  const percentbutton = '/100'
  text[0].value += percentbutton
}

const sinbtn = () => {
  let text = document.getElementsByClassName('area')
  const sinbutton = 'Math.sin('
  text[0].value += sinbutton
}
const cosbtn = () => {
  let text = document.getElementsByClassName('area')
  const cosbutton = 'Math.cos('
  text[0].value += cosbutton
}
const tanbtn = () => {
  let text = document.getElementsByClassName('area')
  const tanbutton = 'Math.tan('
  text[0].value += tanbutton
}

const sqrtbtn = () => {
  let text = document.getElementsByClassName('area')
  const sqrtbutton = 'Math.sqrt('
  text[0].value += sqrtbutton
}

window.addEventListener('keydown', (event) => {
  event.preventDefault()
  if (event.keyCode == 49 || event.keyCode == 97) {
    onebtn()
  } else if (event.keyCode == 50 || event.keyCode == 98) {
    twobtn()
  } else if (event.keyCode == 51 || event.keyCode == 99) {
    threebtn()
  } else if (event.keyCode == 52 || event.keyCode == 100) {
    fourbtn()
  } else if (event.key == '5' || event.keyCode == 101) {
    fivebtn()
  } else if (event.keyCode == 54 || event.keyCode == 102) {
    sixbtn()
  } else if (event.keyCode == 55 || event.keyCode == 103) {
    sevenbtn()
  } else if (event.key == '8' || event.keyCode == 104) {
    eightbtn()
  } else if (event.key == '9' || event.keyCode == 105) {
    console.log('oip')
    ninebtn()
  } else if (event.key == '0' || event.keyCode == 96) {
    zerobtn()
  } else if (event.keyCode == 8) {
    del()
  } else if (event.key == '+' || event.keyCode == 107) {
    plusbtn()
  } else if (event.keyCode == 189 || event.keyCode == 109) {
    minusbtn()
  } else if (event.key === '=') {
    equalbtn()
  } else if (event.key === '(') {
    lbracket()
  } else if (event.key === ')') {
    rbracket()
  } else if (event.key === '%') {
    percent()
  } else if (event.keyCode === 191 || event.keyCode === 111) {
    dividebtn()
  } else if (event.key === '*' || event.keyCode === 106) {
    multiplybtn()
  }
})
