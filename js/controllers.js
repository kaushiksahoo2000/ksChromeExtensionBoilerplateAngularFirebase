angular.module('angularFirebaseChromeExtension.controllers', [])

.factory('Submissions', function($firebaseArray){ //creates a firebase array store in your firebase database
  // var ref = new Firebase(input your firebase URL here);
  // return $firebaseArray(ref)
})

.controller('IndexCtrl', function(Submissions){

  this.submission = '';
  // this.submissionsArr = Submissions;

  this.submitAction = function(){
    console.log("this is the input", this.submission);
    // this.submissionsArr.$add({submission: this.submission}) adds the submission to the firebaseArray
  }

})
