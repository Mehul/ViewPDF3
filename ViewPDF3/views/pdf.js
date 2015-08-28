ViewPDF3.pdf = function (params) {

    var viewModel = {
//  Put the binding properties here
    };

    window.handleDocumentWithURL(
      function (msg) { console.log('success: ' + msg) }, // success handler
      function (msg) { console.log('error: ' + msg) },   // error handler
      'http://cdn.mozilla.net/pdfjs/helloworld.pdf' // the URL
    );

    //window.open('http://devexpress.com');

    return viewModel;
};