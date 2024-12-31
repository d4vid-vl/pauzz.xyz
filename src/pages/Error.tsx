import '../styles/Error.css'
import E404 from '../assets/404.gif'

function ErrorPage() {
  return (
    <div className="errorPage">
      <div className="headerError">
        <h2>404 - ???</h2>
        <p>Don't try to look for other secret links or smth</p>
        <img src={E404} />
      </div>
    </div>
  )
}

export default ErrorPage
