document.addEventListener('click', e => {
    // BTN CONTENT TYPE CHANGE
    if(e.target.matches('.content-type button')) {
        document.querySelectorAll('.content-type button').forEach(btn => {
            btn.classList.remove('btn-type-active')
        })
        e.target.classList.add('btn-type-active')

        getContent(e.target.dataset.content)
    }

    // BTN FOLLOW
    if(e.target.id === 'btnFollow'){
        e.target.classList.toggle('follow')
        e.target.classList.toggle('following')

        if(e.target.classList.contains('follow')) {
            e.target.textContent = 'Follow'
        } else {
            e.target.textContent = 'Following'
        }
    }

    // NAVBAR
    if(e.target.matches('.navbar ul li')){
        document.querySelectorAll('.navbar ul li').forEach(li => {
            li.classList.remove('nav-link-active')
        })

        e.target.classList.add('nav-link-active')
    }
})

function getContent(url){
    fetch(url)
        .then(res => res.text())
        .then(html => document.querySelector('.content').innerHTML = html)
}


document.addEventListener('DOMContentLoaded', () => {
    getContent('./content/posts.html')
})

document.addEventListener('mouseover', e => {
    if(e.target.tagName === 'VIDEO') e.target.play()
})

document.addEventListener('mouseout', e => {
    if(e.target.tagName === 'VIDEO') {
        e.target.currentTime = 0
        e.target.pause()
    }
})

document.addEventListener('scroll', e => {
    if(window.scrollY > 0) {
        document.querySelector('.info').classList.add('boxShadow')
    } else {
        document.querySelector('.info').classList.remove('boxShadow')
    }
})