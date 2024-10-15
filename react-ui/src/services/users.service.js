export async function getUsers() {
  const apiResponse = await fetch('/api/users');
  const jsonResponse = await apiResponse.json();
  return jsonResponse;
}