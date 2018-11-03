const ENTER_KEYCODE = 13;

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const items = document.querySelector('.items');

  text.init(form, items);
});

const text = (() => {
  let items;

  function init(_form, _items) {
    items = _items;
    _form.addEventListener('submit', formHandler);
  
   
    let elem = items.querySelectorAll('.item');

    elem.forEach(function(element) {
      let btn = element.getElementsByClassName("item__button")[0];
      //let bton = element.getElementsByClassName('item__button')[0];
      btn.addEventListener('click', deleteItem);

      let chb = element.getElementsByClassName("item__checkbox")[0];
      chb.addEventListener('click', finish);

      let edt = element.getElementsByClassName("item__text")[0];
      edt.addEventListener('click', edit);

      edt.addEventListener('keydown', event => {
        if (event.key == ENTER_KEYCODE) {
          commit;
          console.log("ooky spooky");
        }
      });

    });
  }

  function formHandler(e) {
    e.preventDefault();

    let texti = document.getElementsByClassName("form__input")[0].value; 
    texti = texti.trim();

    let l = texti['length'];
    // console.log(texti + "length : " + l);
    if (l > 0){
      add(texti);
      // ÞAÐ VIRKARR !!! EEEEEE

      // console.log('halló heimur ' + texti);
    }
    document.getElementsByClassName("form__input")[0].value = "";
  }


  // event handler fyrir það að klára færslu
  function finish(e) {
    // console.log("ef ytt, strika yfir");
    let blu = e.target.parentElement;
    // console.log(blu);
    if (blu.className == "item item--done"){
      blu.className = "item";
    }
    else {
      blu.className = "item item--done";
    }
    // ÞETTA VIRRRKARRR!!! 10 sek partipása

  }

  // event handler fyrir það að breyta færslu
  function edit(e) {
    console.log("ef ytt, leyfa breytingar a faerslu " + e.target); 
    e.target.className = "item__edit"; 
    
    //<span class="item__text">Klára verkefni</span> ==> <input class="item__edit" type="text">
  
  }

  // event handler fyrir það að klára að breyta færslu
  function commit(e) {
    console.log("ef ytt a enter, vista breytta faerslu");
  }

  // fall sem sér um að bæta við nýju item
  function add(value) {
    // console.log("add value");
    items.appendChild(el(value, "checkbox", "deleteItem")); 
    
  }

  // event handler til að eyða færslu
  function deleteItem(e){
    console.log("ef ytt a eyða, eyða faerslu");
    //console.log("e = " + e);
    let bleu = e.target.parentElement;
    console.log(bleu);
    let pem = findIndex(bleu);
    console.log(pem);

  }

  function findIndex(elm){
    let intdexe = 0; 
    let iArray = items.getElementsByClassName("items");
    
    for(let i in iArray){
      console.log("item = " + i);
      //let k = i.getElementsByClassName("item__text")[0];
      let m = elm.getElementsByClassName("item__text")[0];

      //if(k.value == m.value){
      //  return intdexe;
      //}
      intdexe++;
    }
    return intdexe;
  }
  // hjálparfall til að útbúa element
  function el(value, className, clickHandler) {
    

    let inpu = document.createElement("input");
    inpu.setAttribute("class","item__checkbox");
    inpu.setAttribute("type", "checkbox");
    
    let spam = document.createElement("span");
    spam.setAttribute("class", "item__text");
    spam.innerHTML = value;
    
    let butt = document.createElement("button");
    butt.setAttribute("class","item__button");
    butt.innerHTML = "Eyða"; 
    butt.addEventListener('click', deleteItem);
    
    let ele = document.createElement("li");
    
    ele.appendChild(inpu);
    ele.appendChild(spam);
    ele.appendChild(butt);
    
    ele.setAttribute("class","item");
    
    return ele;
  }

  return {
    init: init
  }
})();
