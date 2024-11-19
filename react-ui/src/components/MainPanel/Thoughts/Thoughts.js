import { useEffect, useState } from 'react';
import ThoughtsService from '../../../services/thoughts.service';
import RwCard from '../../common/RwCard/RwCard';
import { getUsers } from '../../../services/users.service';
import './Thoughts.css';

function Thoughts() {

  const [ramblings, setRamblings] = useState([]);
  const [users, setUsers] = useState([]);
  const [inputs, setInputs] = useState({});

  useEffect(() => {
    ThoughtsService.getAllRamblings().then((data) => {
      setRamblings(data);
    });
  }, []);

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
    })
  }, []);

  const handleChange = (event) => {
    if (event.target.name === 'ramblingEntry') {
      setInputs({ ...inputs, thought: event.target.value })
    }
    if (event.target.name === 'selectUser') {
      setInputs({ ...inputs, user: event.target.value })
    }
  }

  const addRambling = () => {
    ThoughtsService.addRambling(inputs).then((response) => {
      console.log(response);
    })
  }

  return (
    <div>
      <header className="thought-form d-flex flex-row">
        <div>
          <select className="form-select" onChange={handleChange} name="selectUser">
            <option value={null}>Select User</option>
            {
              users.map(u => {
                return <option value={u.user} key={u.user}>{u.user}</option>
              })
            }
          </select>
        </div>
        <div className="thought-textarea flex-grow-1">
          <textarea className="form-control" id="thoughtTextarea" rows="1" maxLength="240" name="ramblingEntry"
            onChange={handleChange}></textarea>
        </div>
        <div>
          <button className="btn btn-primary" disabled={!inputs.user || !inputs.thought}
            onClick={addRambling}>Add</button>
        </div>
      </header>
      <div className="row">
        {
          ramblings.map((r) => {
            return <div className="col-sm-4" key={r.id}>
              <RwCard data={r} />
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Thoughts;