import Recipies from './Recipies';
import sword from '../images/swc-sword.png'
import swordSVG from '../images/sword.svg'
import swordPNG from '../images/sword-32x32.png'
import swordJPG from '../images/swc-banner.jpg'
import neumodoro from '../images/neumodoro.gif'

function App() {
  return (
    <div>
      <h1>This is react heading</h1>
      <section className='hero'></section>
      <>
        <main>
          <section>
            <p>This is react paragraph</p>
            <img src={sword} alt="sword" />
            <img src={swordSVG} alt="swordSVG" />
            <img src={swordPNG} alt="swordPNG" />
            <img src={swordJPG} alt="swordJPG" />
            <img src={neumodoro} alt="neumodoro" />
            <ul>
              <li>
                Item one
              </li>
              <li>
                Item two
              </li>
            </ul>
          </section>
        </main>
        <Recipies />
      </>
    </div>
  )
}

export default App