function Navbar() {
    return (
        <section className="nav">

<div id="button">
                <input placeholder="Text"></input>
            <button type="submit"><i class="fa fa-search"></i></button>
            </div>

            <div >
                <img className='homeImg' src='/home.png' width={35} />
                <span> Home </span>
            </div>

            <div>
                <img className='NetworkImg' src='/people.png' width={35} />
                <span> My Network </span>
            </div>

            <div>
                <img className='JobsImg' src='/suitcase.png' width={35} />
                <span> Jobs </span>
            </div>
            <div>
                <img className='MessagingImg' src='/chat-bubble.png' width={35}/>
                <span> Messaging </span>
            </div>

            <div>
                <img className='NotificationImg' src='/bell.png' width={35} />
                <span> My Notification </span>
            </div>




        </section>
    )

}

export default Navbar;