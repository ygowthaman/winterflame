import './RwCard.css';

function RwCard(props) {

  return (
    <div className="grid-wrapper">
      <div className="rw-card">{props.message}</div>
    </div>
  )
}

export default RwCard;