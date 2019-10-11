var slack = {};

slack.url = id.getWebhookUrl();

slack.push = function (message) {
  const WEBHOOK_URL = this.url;
  
  var options = {
    "method": "post",
    "contentType": "application/json",
    "payload": JSON.stringify({ "text": message })
  };

  UrlFetchApp.fetch(WEBHOOK_URL, options); 
};
