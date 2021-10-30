function requestValidator(req) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validUri = /^[A-Za-z0-9.*]+$/;
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const specialCharsPattern = /[<>\\&'"]/;

    if (!validMethods.includes(req.method) || req.method == undefined) {
        throw Error('Invalid request header: Invalid Method');
    }

    if (!validUri.test(req.uri) || req.uri == undefined) {
        throw Error('Invalid request header: Invalid URI');
    }

    if (!validVersions.includes(req.version) || req.version == undefined) {
        throw Error('Invalid request header: Invalid Version');
    }

    if (specialCharsPattern.test(req.message) || req.message == undefined) {
        throw Error('Invalid request header: Invalid Message');
    }

    return req;
}

/*
•	method - can be GET, POST, DELETE or CONNECT
•	uri - must be a valid resource address or an asterisk (*); a resource address is a combination of alphanumeric characters and periods; all letters are Latin; the URI cannot be an empty string
•	version - can be HTTP/0.9, HTTP/1.0, HTTP/1.1 or HTTP/2.0 supplied as a string
•	message - may contain any number or non-special characters;special characters are <, >, \, &, ', "

*/

console.log(requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  }
  ));

  console.log(requestValidator({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
  }
  ));