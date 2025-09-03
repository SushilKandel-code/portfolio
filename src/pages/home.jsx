import '../styles/app.css'
import Profile from '../components/profileCard.jsx'

const Home = () => {
    return (
        <section id="home" className="section">

    

            <div className="homeContent">
                <div className='intro'>
                    <p style={{fontSize: '20px', textAlign: 'center'}}>Hi, I’m Sushil Kandel
                    </p>
                </div>
                <Profile />
                <div className='content'>
                    <br></br>
                    <br></br>
                   <p style={{fontSize: '20px', textAlign: 'justify', padding: '30px'}}>A passionate Developer who loves turning ideas into reality through clean code, user‑friendly interfaces, and scalable solutions.<br></br>
                     I specialize in building modern, responsive web applications using JavaScript, React, and Node.js. My mission is to create software that not only works, but also feels intuitive and enjoyable to use. </p>

                </div>


            </div>


        </section>
    )
}

export default Home;