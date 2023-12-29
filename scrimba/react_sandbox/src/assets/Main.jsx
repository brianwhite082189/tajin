import bgicon from './images/Group.png';


export default function Main () {
    return(
        <section className='main-container'>
            <div className="main">
                <h1>Fun Facts About React</h1>
                <ul>
                    <li>Was first released in 2013.</li>
                    <li>Was originally created by Jordan Walke.</li>
                    <li>Has well over 100K stars on GitHub.</li>
                    <li>Is Maintained by Facebook.</li>
                    <li>Powers thousands of enerprise apps, including mobil apps.</li>
                </ul>
            </div>

                <div className='bgicon'>
                    <img src={bgicon} />
                </div>
            
      </section>
    )
}