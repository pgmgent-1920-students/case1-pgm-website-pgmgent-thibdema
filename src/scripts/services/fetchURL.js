// Get data objects from url via fetch API
export async function getDATA(url) {
  const content = await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
  return content;
}

// Post data objects to url via fetch API
export async function postDATA(url, obj) {
  const content = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  })
    .then((response) => response.text())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
    
  return content;
}

