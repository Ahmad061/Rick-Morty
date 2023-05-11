import config from "../config";

export const generalService = {
  getData,
};

async function getData(query) {
  const requestOptions = {
    method: "POST",
    headers: { /* ...authHeader(), */ "Content-Type": "application/json" },
    body: JSON.stringify({ query: query }),
  };

  const response = await fetch(config.apiUrl, requestOptions);
  return handleResponse(response);
}

//____________________________________
function handleResponse(response) {
  return response.text().then((text) => {
    var data = text && JSON.parse(text);
    if (!response.ok) {
      /* ++++++++++++++++++++++++++++++++++ */
      console.log(data);
      if (data?.errors?.[0]) {
        let errors = {};
        errors.message = data.errors.map((err) => err.message)?.toString();
        return Promise.reject(errors);
      } else if (data.error) {
        let error = {};
        error.message = data.error.message;
        return Promise.reject(error);
      }
    }

    return data;
  });
}
