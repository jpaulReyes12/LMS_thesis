
angular.module('lmsApp')

.factory('File', [function () {

  var file,
      storageRef,
      task,
      dl_URL;

  function getFile(aFile) {
    file = aFile;
    console.log(file);
  }

  function setStorage(path, filename) {
    storageRef = firebase.storage().ref(path + filename);
    console.log(path);
  }


  function upload() {
    task = storageRef.put(file);
    return task;
  }

  function progress(snapshot) {
    var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    return percentage;
  }

  function getURL() {
    return storageRef.getDownloadURL();
  }

  return{
    getFile: getFile,
    setStorage: setStorage,
    upload: upload,
    progress: progress,
    getURL:getURL
  }

}]);
