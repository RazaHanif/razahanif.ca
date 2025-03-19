const main = document.querySelector('.main')
const cursor = document.querySelector('.cursor')

if (main && cursor) {
    if (!window.matchMedia('(any-pointer: coarse)').matches) {
        main.addEventListener('mousemove', (e) => {
            const x = e.clientX
            const y = e.clientY
            cursor.style.background = `radial-gradient(circle 300px at ${x}px ${y}px, #031E35, #010B13)`
        })
    
        main.addEventListener('mouseenter', () => {
            cursor.style.opacity = 1
        })
    
        main.addEventListener('mouseleave', () => {
            cursor.style.opacity = 0
            // cursor.style.background = ''
        })
    } else {
        cursor.style.opacity = 0
        cursor.style.background = ''
        cursor.style.left = '-9999px'
        cursor.style.top = '-9999px'
    }
}