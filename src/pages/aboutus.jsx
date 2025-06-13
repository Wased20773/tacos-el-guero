import { usePage } from '../context/PageProvider.jsx'
import { Link } from 'react-router-dom'
import '../styles/AboutUs.css'
function AboutUs() {
    const { setPage } = usePage();

    return (
        <>
            <div className='about-us-container'>
                {/* <Link to="/" className="header-button-menu">Homepage</Link> */}
                <div>About Us</div>
                
                {/* About Chef*/}
                <div className='about-me-card'>
                    <img 
                    className='about-me-image-left'
                    src='../src/assets/imgs/chef-template-photo.png'
                    alt='chef looking at camera smiling with glass wines infront of shot'
                    width={"300px"}
                    />
                    <div className='about-me-article-container'>
                        <article className='about-me-article-text'>
                            My name is Payo, but you can call me el Guero. I started my business over 10 years ago.
                            I am passionate about making amazing traditional mexican food the right way. come by my
                            taco truck to get a taste of my foods!
                        </article>
                    </div>
                </div>

                {/* About Chef Assistant */}
                <div className='about-me-card'>
                    <div className='about-me-article-container'>
                        <article className='about-me-article-text'>
                            Hello, my name is Araceli! I am the assistant of el Guero, who is also my husband. I help
                            him work with him everyday I can to support our business. We love making smiles on peoples
                            faces. Seeing new faces makes me and my husband very proud! We invite anyone to come and
                            taste our Mexican food, made with love.
                        </article>
                    </div>
                    <img 
                    className='about-me-image-right'
                    src='../src/assets/imgs/chef-assistant-template-photo.jpg'
                    alt='chef assistant looking at camera smiling with her arms holding each other near her chest'
                    width={"300px"}
                    />
                </div>

                {/* About Business */}


                {/* What was it like before 2016 - 2025 */}


            </div>
        </>
    )
}

export default AboutUs;