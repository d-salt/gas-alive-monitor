function main () {
 var sheetId = id.getSheetId();
  db.init(sheetId, 'Sites');
  
  var sites = getSiteList();
  var data = [];
  
  sites.forEach(function (site) {
    var status = site.status;
    var currentStatus = watchServer(site.url);
    if (status !== currentStatus) {
      slack.push('site: ' + site.url + ' is now ' + currentStatus);
    }
    data.push([currentStatus]);
  });
  
  db.save(data, 2, 3, sites.length, 1);
}

var watchServer = function (url) {
  try {
    var response = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
    var responseCode = response.getResponseCode();
    
    if (responseCode === 200) {
      return 'available';
    } else {
      return 'disable (responce code: ' + responseCode + ')';
    }
  } catch (err) {
    return 'disable (error: ' + err + ')';
  }
}

var getSiteList = function () {
  return valuesToObject(db.load(1, 1, db.sheet.getLastRow(), db.sheet.getLastColumn()));
};