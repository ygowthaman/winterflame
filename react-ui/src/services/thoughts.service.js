const httpHeaders = new Headers({'content-type': 'application/json'})

const ThoughtsService = {

  getAllRamblings: async () => {
    const apiResponse = await fetch('/api/thoughts');
    return apiResponse.json();
  },

  addRambling: async (rambling) => {
    const apiResponse = await fetch('/api/thought', {
      method: 'POST',
      body: JSON.stringify(rambling),
      headers: httpHeaders,
    })
    return await apiResponse.json();
  }

}

export default ThoughtsService;