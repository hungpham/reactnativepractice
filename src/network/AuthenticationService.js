const BASE_URL = 'http://fixiesvn.azurewebsites.net/api/';

export default class AuthenticationService {
  //Return an promise
  static signin(userCredentials) {
    const url = `${BASE_URL}trainees/login`;
    return AuthenticationService.postData(url, userCredentials, null, 'POST');
  }
  
  static signout(token) {
    const url = `${BASE_URL}trainees/logout`;
    const headers = {
      'x-access-token': token
    }
    return AuthenticationService.postData(url, headers, null, 'POST');
  }

  static getTrainees(token) {
    const url = `${BASE_URL}trainees/`;
    const headers = {
      'x-access-token': token
    }

    return AuthenticationService.postData(url, headers, null, 'GET');
  }

  static signup(userInfo) {
    console.log("userInfo", userInfo)
    const url = `${BASE_URL}trainees/register`;
    return AuthenticationService.postData(url, null, userInfo, 'POST');
  }

  static postData(url, headers, body, method) {
    let defaulHeaders = {
      'Content-Type': 'application/json',
      'charset': 'utf-8'
    };
    for (let key in headers) {
      if (headers.hasOwnProperty(key)) {
        defaulHeaders[key] = headers[key];
      }
    }
    console.log("Fetch Headers", defaulHeaders)
    let myInit = {
      method: method,
      headers: defaulHeaders
    };
    if (body) {
      myInit['body'] = JSON.stringify(body);
    }
    return fetch(url, myInit)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        let errorMessage = 'Network response was not ok.'
        throw new Error(errorMessage);
      })
      .then(jsonData => {
        if (jsonData.hasOwnProperty('error')) {
          throw new Error(jsonData['error']);
        } else {
          console.log("jsonData", jsonData);
          return jsonData;
        }
      });
  }
}