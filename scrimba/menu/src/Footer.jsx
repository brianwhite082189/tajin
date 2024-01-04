

function Footer(){
    const hours = new Date().getHours()
    const openHour = 12
    const closeHour = 22
    const isOpen = hours >= openHour && hours<= closeHour

// if (hours >= openHour && hours<= closeHour){
//  alert('We are currently open')
// } else {
//     alert('Sorry we are closed')
// }

    return(
    < div className='footer'>
        <footer>{new Date().toLocaleTimeString()}. We are currently open</footer>
        <button></button>
    </div>
    )
}
export default Footer;