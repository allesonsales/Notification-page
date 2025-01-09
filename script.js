const markAllRead = document.getElementById ('markall')
let notificationBox = document.querySelectorAll ('.notification__container')
let notifiUnread = document.getElementById ('unreadnumber')

function updateCount() {
    const unreadNotifi = document.querySelectorAll ('.notification__container.unread')
    notifiUnread.textContent = unreadNotifi.length
    
    if (unreadNotifi.length===0) {
        notifiUnread.style.display = 'none'
    }
}

function markAll() {
    notificationBox.forEach (notification => {
        notification.classList.remove ('unread')
    })

    notifiUnread.textContent === 0
    notifiUnread.style.display = 'none'
}


notificationBox.forEach (notification => {
    notification.addEventListener ('click', () => {
        notification.classList.remove ('unread');
        updateCount()
    })
})


markAllRead.addEventListener ('click', markAll)


updateCount()