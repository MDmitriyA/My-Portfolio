// доделать = добавление нескольких фото, поворота этих фото и проверка числа в градусах

var imgName = document.getElementById ('myimg')
imgName.src = String(prompt('Введите сюда ссылку на картинку'))
var degImg = Number(prompt('на сколько нужно повернуть картинку'))
imgName.style.transform = `rotate(${degImg}deg)`

if(imgName.src.startsWith("http")) {
  console.log('Это картинка')
}

if(myInput.startsWith('http://') || myInput.startsWith('https://')) {
  console.log('Eto http!!')
}

/* var i = 0;
var rotate = setInterval(() => {
  imgName.style.transform = `rotate(${degImg}deg)`;
  deg += 90;
  i++;
  if (i >= 5) {
    clearInterval(rotate)
    };
}, 1000) */


//

function createDomTag(tagName) {
  return document.createElement(tagName)
}

function insertTag(tag) {
  document.body.appendChild(tag)
}

var testTag = createDomTag('div')

/* function create() {
  return element = document.createElement('tagName')
}
document.body.appendChild(this.element) */


//

function idSearch() {
  if (id.startsWith("#")) {
     var deleteId =  document.getElementById(`${id.slice(1, id.length)}`)
     document.body.removeChild(deleteId)
  } else {
      console.log("Увы, такого ID нет и по этому его нельзя удалить")
  }
}


// 

function getInnerTextOfElement() {
  if (id.startsWith("#")) {
    var element =  document.getElementById(`${id.slice(1, id.length)}`)
    return console.log(element.innerText)
  } else if (id.startsWith(".")) {
    var element =  document.getElementsByClassName(`${id.slice(1, id.length)}`)
    return console.log(element.innerText)
  }
}


//

function $() {
  if(arg.startsWith(".")){
    var res = document.getElementsByClassName(`${arg.slice(1, arg.length)}`)
    console.log(res)
  } else if (arg.startsWith("#")) {
    var res = document.getElementById(`${arg.slice(1, arg.length)}`)
    console.log(res)
  } else {
    var res = document.getElementsByTagName(`${arg}`)
    console.log(res)
  }
} 