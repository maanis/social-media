const tl = gsap.timeline()
var annimation
document.querySelector('.createPost').addEventListener('click', () => {
    annimation = tl.to('.postSmt', {
        display: 'flex',
        opacity: 1,
        duration: .2
    }).to('.postContainer', {
        scale: 1,
        duration: .3
    })
    console.log('hii')
})

document.querySelector('.fa-xmark').addEventListener('click', () => {
    gsap.to('.postContainer', {
        scale: 0,
    })
    gsap.to('.postSmt', {
        opacity: 0,
        display: 'none'
    })
})