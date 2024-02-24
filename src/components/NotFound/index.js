import Header from '../Header'
import './index.css'

const NotFound = () => (
  <div className="home-con">
    <Header />
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
        className="not-found-img"
      />
    </div>
    <h1>Lost Your Way?</h1>
    <p>
      Sorry, we cannot find that page. You will find lots to explore on the home
      page
    </p>
  </div>
)

export default NotFound
