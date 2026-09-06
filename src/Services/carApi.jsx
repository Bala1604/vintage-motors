const API_URL = "https://jsonplaceholder.typicode.com/users";

export async function fetchCarArchive() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Unable to connect to the archive service.");
  }

  const data = await response.json();

  return data;
}