var db = {};

db.spreadsheet = '';
db.sheet = '';

db.setSpreadsheet = function (spreadsheetId) {
  return this.spreadsheet = SpreadsheetApp.openById(spreadsheetId);
}

db.setSheet = function (sheetName) {
  if (!isset(this.spreadsheet)) {
    return false
  } else {
    return this.sheet = this.spreadsheet.getSheetByName(sheetName);
  }
};

db.save = function (data, row, col, numRows, numCols) {
  if (!isset(this.sheet)) return false;
  if (!isset(numRows)) numRows = 1;
  if (!isset(numCols)) numCols = 1;
  return this.sheet.getRange(row, col, numRows, numCols).setValues(data);
};

db.load = function (row, col, numRows, numCols) {
  if (!isset(this.sheet)) return false;
  if (!isset(numRows)) numRows = 1;
  if (!isset(numCols)) numCols = 1;
  return this.sheet.getRange(row, col, numRows, numCols).getValues();
}

db.init = function (spreadsheetId, sheetName) {
  this.spreadsheet = this.setSpreadsheet(spreadsheetId);
  this.sheet = this.setSheet(sheetName);
}