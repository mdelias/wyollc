

var email = "";

console.log("here");

function sendEmail(){

  email = document.getElementById("Email").value;
  console.log(email);

  var form_id_js = "javascript_form";

  var data_js = {
      "access_token": "rqv6nnxxv77pmjdkhy0892bw"
  };

  function js_onSuccess() {
      // remove this to avoid redirect
      window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
  }

  function js_onError(error) {
      // remove this to avoid redirect
      window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
  }

  function js_send() {
      sendButton.value='Sending…';
      sendButton.disabled=true;
      var request = new XMLHttpRequest();
      request.onreadystatechange = function() {
          if (request.readyState == 4 && request.status == 200) {
              js_onSuccess();
          } else
          if(request.readyState == 4) {
              js_onError(request.response);
          }
      };

      var subject = "WYO.LLC Series Formation";
      var message = "Dear Esteemed Business Partner,

You are receiving this email on behalf of WYO.LLC in regards to creating a subsidiary Series LLC in Wyoming for your cryptocurrency investment needs. This entity offers the maximum legal protection available in the United States for investing in Utility Tokens, as defined by Wyoming state legislature. In the following forms you will be asked to provide:

Your contact information and agreement to our terms and conditions. Do not attempt to make a payment before accepting the terms. Doing so could result in loss of funds. Payment of the WYO.LLC Series Formation Fee, 0.002 LTC, to the following series address 3HFNieWCfpRiJHkejwWFDzB8f6U9T3nQBk.

To proceed with WYO.LLC series formation, go to http://wyo.llc/submit.html within 24 hours of receiving this email.

Sincerely,
WYO.LLC Team";
      data_js['subject'] = subject;
      data_js['text'] = message;
      var params = toParams(data_js);

      request.open("POST", "https://postmail.invotes.com/send", true);
      request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

      request.send(params);

      return false;
  }

  js_send();

  function toParams(data_js) {
      var form_data = [];
      for ( var key in data_js ) {
          form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
      }

      return form_data.join("&");
  }

  var js_form = document.getElementById(form_id_js);
  js_form.addEventListener("submit", function (e) {
      e.preventDefault();
  });


}

//get_selections()
