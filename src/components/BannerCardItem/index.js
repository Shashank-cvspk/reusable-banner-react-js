// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {banner} = props
  const {headerText, description, className} = banner

  return (
    <li className={`${className} list-items`}>
      <h1 className="heading">{headerText}</h1>
      <p>{description}</p>
      <button type="button" className="show-more-btn">
        Show More
      </button>
    </li>
  )
}

export default BannerCardItem
