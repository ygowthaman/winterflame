export async function getAllThoughts() {
  const response = await fetch('/api/thoughts');
  const jsonResponse = await response.json();
  return jsonResponse;
}