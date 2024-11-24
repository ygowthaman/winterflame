import ThoughtsService from '../../../services/thoughts.service';
import './ThoughtCard.css';

function ThoughtCard(props) {

  const deleteRambling = () => {
    ThoughtsService.deleteRambling(props.data.id).then();
  }

  return (
    <div className="rw-card">
      <div className="rw-header d-flex justify-content-between">
        <span><b>{props.data.user.toUpperCase()}</b></span>
        <div><i class="bi bi-trash-fill" onClick={deleteRambling}></i></div>
      </div>
      <div className="rw-content">{props.data.thought}</div>
      <div className="rw-footer d-flex justify-content-end"><i>{props.data.createdAt}</i></div>
    </div>
  )
}

export default ThoughtCard;