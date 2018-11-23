
import store from './../_store'
import getRandomRect from './getRandomRect'
import constants from './const'
import 'tracking'
import 'tracking/build/data/mouth'
import 'tracking/build/data/face'
import 'tracking/build/data/eye'
const { up, initialize, loading } = constants;
var FastTracker = function() {
  FastTracker.base(this, 'constructor');
};
window.tracking.inherits(FastTracker, window.tracking.Tracker);
window.tracking.Fast.THRESHOLD = 2;
FastTracker.prototype.threshold = window.tracking.Fast.THRESHOLD;
FastTracker.prototype.track = function(pixels, width, height) {
  var gray = window.tracking.Image.grayscale(pixels, width, height);
  var corners = window.tracking.Fast.findCorners(gray, width, height);
  console.log()
  this.emit('track', {
    data: corners
  });
};
export default canvasRef => {
  const canvas = canvasRef;
  const context = canvas.getContext('2d');
  var tracker = new window.tracking.ObjectTracker('face');
  tracker.setInitialScale(4);
  tracker.setStepSize(2);
  tracker.setEdgesDensity(0.1);
  window.tracking.track('#video', tracker, { camera: true });
  tracker.on('track', function(event) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    event.data.forEach(function(rect) {
      context.strokeStyle = '#a64ceb';
      context.strokeRect(rect.x, rect.y, rect.width, rect.height);
      context.font = '11px Helvetica';
      context.fillStyle = "#fff";
      context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
      context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
    });
  });
  // let [x1, x2, y1, y2, mainRectWith] = getRandomRect(context);
  // const tracker = new window.tracking.ObjectTracker(['eye', 'mouth']);
  // const tracker =  new FastTracker();
  // tracker.setInitialScale(1);
  // tracker.setStepSize(1);
  // tracker.setEdgesDensity(0.1);
  // store.dispatch({ type: initialize });
  // window.tracking.track('#video', tracker, { camera: true });
  // tracker.on('track', event =>
  
  //   event.data
  //     .forEach(async rect => {
  //       const a1 = rect.x,
  //         a2 = a1 + rect.width,
  //         o1 = rect.y,
  //         o2 = o1 + rect.height;
  //       context.strokeStyle = 'red';
  //       if (a1 > x1 && a2 < x2 && rect.width < mainRectWith) {
  //         if (o1 > y1 && o2 < y2 && rect.height < mainRectWith) {
  //           // Increase score 
  //           if(!store.getState().user.loading) 
  //             store.dispatch({ type: up });
  //           store.dispatch({ type: loading, payload: true })
  //           context.strokeStyle = "green";
  //           context.lineWidth = 2;
  //           context.strokeRect(a1, o1, rect.width, rect.height);
  //           context.lineWidth = 5;
  //           context.strokeStyle = '#003300';
  //           context.stroke();
  //           context.lineWidth = 8;
  //           context.strokeRect(x1, y1, mainRectWith, mainRectWith);
  //           context.font = '40px Helvetica';
  //           context.fillStyle = "green";
  //           setTimeout(() => {              
  //             context.clearRect(0, 0, canvas.width, canvas.height);
  //             store.dispatch({ type: loading, payload: false });

  //             return [x1, x2, y1, y2, mainRectWith] = getRandomRect(context);
  //           }, 10);
  //         }
  //       } else {
  //         context.lineWidth = 1;
  //         context.strokeStyle = 'red';
  //         context.strokeRect(rect.x, rect.y, rect.width, rect.height);
  //         setTimeout(() => {
  //           context.clearRect(rect.x, rect.y, rect.width, rect.height);
  //         }, 20)
  //       }
  //     })
  // );
}