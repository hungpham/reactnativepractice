const BASE_URL = 'http://fixiesvn.azurewebsites.net/api/';

export default class AuthenticationService {
  //Return an promise
  static signin(userCredentials) {
		const url = `${BASE_URL}trainees/login`;
    return AuthenticationService.postData(url, userCredentials);
  }

  static signup(userInfo) {
		const url = `${BASE_URL}trainees/register`;
    return AuthenticationService.postData(url, null, userInfo);
  }

	static postData(url, headers, body) {
		let defaulHeaders = {'Content-Type': 'application/json',
		'charset': 'utf-8'};
    for (let key in headers) {
      if (headers.hasOwnProperty(key)) {
        defaulHeaders[key] = headers[key];
      }
    }

		let myInit = {
			method: 'POST',
			headers: defaulHeaders
		};
    if (body) {
      myInit['body'] = JSON.stringify(body);
    }
		return fetch(url, myInit)
      .then(response => {
        if(response.ok) {
          return resolve(response.json());
        }
        let errorMessage = 'Network response was not ok.'
        reject(new Error(errorMessage));
      })
      .then(jsonData => {
        if(jsonData.hasOwnProperty('error')) {
          reject(new Error(jsonData['error']));
        } else {
          return resolve(jsonData);
        }
      })
      .catch(reject(new Error('unknown error')));
	}
}
