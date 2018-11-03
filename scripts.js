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

    // TODO láta hluti í _items virka
  }

  function formHandler(e) {
    e.preventDefault();

    let texti = document.getElementsByClassName("form__input")[0].value;
    

    let l = texti['length'];
    
    console.log(texti + "length : " + l);
    if (l > 0){
    add(texti);
      // ÞAÐ VIRKARR !!! EEEEEE

      console.log('halló heimur ' + texti);
    
      document.getElementsByClassName("form__input")[0].value = ""; 
    }
  }


  // event handler fyrir það að klára færslu
  function finish(e) {
    console.log("ef ytt, strika yfir");
  }

  // event handler fyrir það að breyta færslu
  function edit(e) {
    console.log("ef ytt, leyfa breytingar a faerslu");
  }

  // event handler fyrir það að klára að breyta færslu
  function commit(e) {
    console.log("ef ytt a enter, vista breytta faerslu");
  }

  // fall sem sér um að bæta við nýju item
  function add(value) {
    // console.log("add value");
    items.appendChild(el(value, "checkbox", "deleteItem")); 
    // items.push(?);
    //Hreinsa glugga eftir að búið er að ýta
  }

  // event handler til að eyða færslu
  function deleteItem(e) {
    console.log("ef ytt a eyða, eyða faerslu");
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
