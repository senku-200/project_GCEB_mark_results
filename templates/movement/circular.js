document.querySelector('.header_menu_icon').addEventListener('click',()=>{
    document.querySelector('header').classList.toggle('header_active')
    document.querySelector('aside').classList.toggle('active')
    document.querySelector('main').classList.toggle('main_active')
    document.querySelector('footer').classList.toggle('footer_active')
})
document.querySelector('.navigtion_con').children[1].classList.add('focused_navigator')
var prev= document.querySelector('.navigtion_con').children[1]

document.addEventListener('click',(e)=>{
    e.preventDefault()
})
document.querySelector('.circular_navigator').classList.add('focused_navigator')
var change_color = (element)=>{
    if (prev!==null){
        prev.classList.toggle('focused_navigator')
    }
    element.classList.add('focused_navigator')
    prev = element
}

document.querySelectorAll('.collapse_hidden').forEach((element,index)=>{
    element.addEventListener('click',()=>{
        element.style.display = 'none'
        element.nextElementSibling.style.display = 'block'
        element.parentElement.parentElement.parentElement.lastElementChild.style.display = 'none'
    })    
})

document.querySelectorAll('.expand_hidden').forEach((element,index)=>{
    element.addEventListener('click',()=>{
        element.style.display = 'none'
        element.previousElementSibling.style.display = 'block'
        element.parentElement.parentElement.parentElement.lastElementChild.style.display = 'flex'
    })
})

