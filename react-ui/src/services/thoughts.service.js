import { Thought } from "../models/thoughts.model";

const httpHeaders = new Headers({ 'content-type': 'application/json' })

const ThoughtsService = {

  getAllRamblings: async () => {
    const apiResponse = await fetch('/api/thoughts');
    const response = await apiResponse.json();
    return response.map(r => new Thought(r));
  },

  addRambling: async (rambling) => {
    const apiResponse = await fetch('/api/thought', {
      method: 'POST',
      body: JSON.stringify(rambling),
      headers: httpHeaders,
    })
    const response = await apiResponse.json();
    return response.map(r => new Thought(r));
  },

  deleteRambling: async (ramblingUuid) => {
    const apiResponse = await fetch(`/api/thought/${ramblingUuid}`, {
      method: 'DELETE',
      headers: httpHeaders
    })
    return apiResponse.json();
  }

}

export default ThoughtsService;