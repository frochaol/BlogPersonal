/* Evento que agrega clase al ul dentro del nav */
addEventListener('DOMContentLoaded', () =>{
    const menu_btn = document.querySelector('.menu_btn')
    if (menu_btn) {
        menu_btn.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('menu_show')
        })
    }
})