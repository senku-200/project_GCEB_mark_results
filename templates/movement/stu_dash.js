document.querySelector('.header_menu_icon').addEventListener('click',()=>{
    document.querySelector('header').classList.toggle('header_active')
    document.querySelector('aside').classList.toggle('active')
    document.querySelector('main').classList.toggle('main_active')
    document.querySelector('footer').classList.toggle('footer_active')
})

document.querySelector('.navigtion_con').children[0].classList.add('focused_navigator')
var prev= document.querySelector('.navigtion_con').children[0]

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

var collapse =()=>{
    document.querySelector('#stu_table').style.display = 'none'
    document.querySelector('.collapse').style.display = 'none'
    document.querySelector('.expand').style.display = 'block'
}
var expand=()=>{
    document.querySelector('#stu_table').style.display = 'table'
    document.querySelector('.collapse').style.display = 'block'
    document.querySelector('.expand').style.display = 'none'
}
