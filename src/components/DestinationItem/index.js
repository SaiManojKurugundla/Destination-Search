// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {imgUrl, name} = destinationDetails

  return (
    <li className="list-container">
      <div>
        <img src={imgUrl} alt={name} className="imgstyle" />
        <p className="heading">{name}</p>
      </div>
    </li>
  )
}

export default DestinationItem
