import './footer.css'

export default function Footer( title, pic, text) {


    return(
        <div className='Footer'>
            <div className='Footer-Line'> </div>
            <p className='Footer-Copyright'>© Liam Beresford 2024</p>

            <div className='Socials'>
                <a href='https://www.linkedin.com/in/liam-beresford/'>
                    <img className='Social-Img' src='https://cdn-icons-png.flaticon.com/512/61/61109.png' alt='NO ?'/>
                </a>
                <a href='https://github.com/wlhberesford'>
                    <img className='Social-Img' src='https://static-00.iconduck.com/assets.00/github-fill-icon-2048x1998-6810ky6f.png' alt='NO ?'/>
                </a>
                <a href='mailto:wlhberesford@gmail.com'>
                    <img className='Social-Img' src='https://seeklogo.com/images/M/mail-envelope-symbol-logo-4AB011B4E0-seeklogo.com.png' alt='NO ?'/>
                </a>
            </div>
        </div>
    );

}

