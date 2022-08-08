function navHoverOnClick(navlist) {
    const elements = navlist.children;
    let arr = [];
    for (let i = 0; i < elements.length; i++) { 
        const el = navlist.children[i].children[1].children
        let items = Object.values(el);
        for (let j = 0; j < items.length; j++) {
            arr.push(items[j]);
         }
       
    }

    arr.forEach((items) => {

            items.onclick = (item) => {
                arr.forEach((v) => { 
                    if (items === v) {
                        v.classList.add('active-nav-click')
                    } else {
                        v.classList.remove('active-nav-click')
                    }
                }) 
            }
            
        })

}
export default navHoverOnClick;