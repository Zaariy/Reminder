function addClass(element , classname) {
    const item = document.querySelector(element);
    item.classList.toggle(classname)

}

export default addClass;