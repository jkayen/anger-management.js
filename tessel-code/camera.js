// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
Create a server that responds to every request by taking a picture and piping it directly to the browser.
*********************************************/
var fs = require('fs');
var path = require('path');
var av = require('tessel-av');
var os = require('os');
var http = require('http');
var port = 8000;
var camera = new av.Camera();
var capture = camera.capture();

// capture.on('data', function(data) {
//   fs.writeFile(path.join(__dirname, 'captures/image.jpg'), data);
// });

// const image = './captures/image.jpg';



// process.on("SIGINT", _ => server.close());


const mood = () => {
  var server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "image/jpg" });

    camera.capture().pipe(response);

  }).listen(port, () => console.log(`http://${os.hostname()}.local:${port}`));
  var num = Math.random();
  return num > .75 ? 'angry' : 'happy';
}

module.exports = {mood};
// // Imports the Google Cloud client library
// const Vision = require('@google-cloud/vision');

// // Instantiates a client
// const vision = Vision();

// // The path to the local image file, e.g. "/path/to/image.png"
// const fileName = './captures/image.jpg';

// Performs face detection on the local file
// vision.detectFaces(fileName)
//   .then((results) => {
//     const faces = results[0];
//     console.log('Faces:');
//     faces.forEach((face, i) => {
//       console.log(`  Face #${i + 1}:`);
//       console.log(`    Joy: ${face.joy}`);
//       console.log(`    Anger: ${face.anger}`);
//       console.log(`    Sorrow: ${face.sorrow}`);
//       console.log(`    Surprise: ${face.surprise}`);
//     })
//   })


// var vision = require('@google-cloud/vision')({
//   keyFilename: './keyfile.json',
//   projectId: 'silicon-comfort-162119'
// });
