import { useEffect, useState } from 'react';
import ThoughtsService from '../../../services/thoughts.service';
import ThoughtCard from '../../common/ThoughtCard/ThoughtCard';
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
      ramblings.push(response);
      setInputs({ ...inputs, user: '', thought: '' })
    })
  }

  return (
    <div className="container">
      <form>
        <div className="row align-items-center">
          <div className="col-md-4 mt-3">
            <select className="form-select" onChange={handleChange} name="selectUser" value={inputs.user}>
              <option value="">Select User</option>
              {
                users.map(u => {
                  return <option value={u.user} key={u.user}>{u.user}</option>
                })
              }
            </select>
          </div>
          <div className="col-md-6 mt-3">
            <textarea className="form-control" id="thoughtTextarea" rows="1" maxLength="480" name="ramblingEntry"
              onChange={handleChange} value={inputs.thought}></textarea>
          </div>
          <div className="col-md-2 mt-3">
            <button className="btn btn-primary" disabled={!inputs.user || !inputs.thought}
              onClick={addRambling}>Add</button>
          </div>
        </div>
      </form>
      <div className="row mt-3">
        {
          ramblings.map((r) => {
            return <div className="col-sm-4" key={r.id}>
              <ThoughtCard data={r} />
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Thoughts;