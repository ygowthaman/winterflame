import './RwCard.css';

function RwCard(props) {

  return (
    <div className="rw-card">
      <div className="rw-header"><b>{props.data.user.toUpperCase()}</b></div>
      <div className="rw-content">{props.data.thought}</div>
      <div className="rw-footer d-flex justify-content-end"><i>{props.data.created_time}</i></div>
    </div>
  )
}

export default RwCard;