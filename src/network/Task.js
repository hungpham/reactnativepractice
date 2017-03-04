const BASE_URL = 'https://taskmanagerhapi.herokuapp.com/';

export default class Task {
  //Return an promise
	userCredentials = {
		username: 'fakeUsername',
		password: 'fakePassword'
	}
  static getTasks(userCredentials) {
		const url = `${BASE_URL}tasks`;
    return Task.fetchAPI(url, userCredentials);
  }
	static fetchAPI(url, headers, body) {
		let defaulHeaders = {'Content-Type': 'application/json',
		'charset': 'utf-8'};
    for (let key in headers) {
      if (headers.hasOwnProperty(key)) {
        defaulHeaders[key] = headers[key];
      }
    }

		let myInit = {
			headers: defaulHeaders
		};
    if (body) {
      myInit['body'] = JSON.stringify(body);
    }
		return fetch(url, myInit)
      .then(response => {
        if(response.ok) {
          return response.json();
        }
        let errorMessage = 'Network response was not ok.'
        throw new Error(errorMessage);
      })
      .then(jsonData => {
        if(jsonData.hasOwnProperty('error')) {
          throw new Error(jsonData['error']);
        } else {
          return jsonData;
        }
      });
	}
}
