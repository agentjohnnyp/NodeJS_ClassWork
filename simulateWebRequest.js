function longRunningOperation(callback) {
    setTimeout(callback, 5000);
}

function webRequest(request) {
    console.log('starting a long operation for request:', request.id);
    longRunningOperation(function () {
        console.log('ending  a long operation for request:', request.id);
    });
}

// simulate a web request
webRequest( {id: 1} );
// simulate a second we request
webRequest( {id: 2} );
