import './index.css'

const DestinationItem = props => {
  const {destinationsDetails} = props
  const {imgUrl, name} = destinationsDetails

  return (
    <li className="list-items">
      <img src={imgUrl} className="image" alt={name} />
      <p className="description">{name}</p>
    </li>
  )
}

export default DestinationItem
