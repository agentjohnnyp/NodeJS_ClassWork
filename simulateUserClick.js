function longRunningOperation(callback) {
    setTimeout(callback, 5000);
}

function userClicked() {
    console.log('starting a long operation');
    longRunningOperation(function () {
        console.log('ending a long operation');
    });
}

userClicked();
