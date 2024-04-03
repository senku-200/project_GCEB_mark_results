document.querySelector('.header_menu_icon').addEventListener('click',()=>{
    document.querySelector('header').classList.toggle('header_active')
    document.querySelector('aside').classList.toggle('active')
    document.querySelector('main').classList.toggle('main_active')
    document.querySelector('footer').classList.toggle('footer_active')
})
document.querySelector('.navigtion_con').children[4].classList.add('focused_navigator')
var prev= document.querySelector('.navigtion_con').children[4]

document.addEventListener('click',(e)=>{
    e.preventDefault()
})
var change_color = (element)=>{
    if (prev!==null){
        prev.classList.toggle('focused_navigator')
    }
    element.classList.add('focused_navigator')
    prev = element
}