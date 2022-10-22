document.getElementById('submit_btn').addEventListener('click', (e) => {
  e.preventDefault();
})

/*Contact Form*/

function send_message() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;
  var db = firebase.database();
  db.ref("users")
  .push({
    username: name,
    subject: subject,
    email: email,
    message: message
  })
  .then(
    (onResolved) => {
      window.alert("Message sent succefully.")
      document.getElementById("name").value = null;
      document.getElementById("email").value = null;
      document.getElementById("subject").value = null;
      document.getElementById("message").value = null;
    }
  );
}