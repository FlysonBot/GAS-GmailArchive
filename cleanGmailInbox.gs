function emailArchive() {
  archiveOldEmailPrimary();
  cleanInboxPrimary();
  archiveOldEmailUpdate();
  archiveOldEmailOther();
}

function archiveOldEmailPrimary() {
  var keepDay = 10;  // Emails older than x days in the inbox in primary category will be archived, default 10 days
  var thresholdDate = new Date(new Date().setDate((new Date).getDate() - keepDay));
  var dateInArray = thresholdDate.toDateString().split(" ");
  var month = dateInArray[1];
  ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].forEach((value,i) => {month = month.replace(value,(i+1))})
  var convertThresholdDate = dateInArray[3] + "/" + month + "/" + dateInArray[2]; Logger.log("Archive email earlier than "  + convertThresholdDate);

  var oldEmailThreads = GmailApp.search("in:inbox category:primary -is:starred before:" + convertThresholdDate);
  GmailApp.moveThreadsToArchive(oldEmailThreads);
}

function cleanInboxPrimary() {
  var maxInboxEmailsLimit = 15;  // Eamils that is not the first x in the primary inbox will be archived, x is 15 by default
  var primaryInboxThreads = GmailApp.search("in:inbox category:primary -is:starred");
  var cleanThreadsList = primaryInboxThreads.slice(maxInboxEmailsLimit-1);
  GmailApp.moveThreadsToArchive(cleanThreadsList);
}

function archiveOldEmailUpdate() {
  var keepDay = 7;  // Emails older than x days in the inbox in update category will be archived, default 7 days
  var thresholdDate = new Date(new Date().setDate((new Date).getDate() - keepDay));
  var dateInArray = thresholdDate.toDateString().split(" ");
  var month = dateInArray[1];
  ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].forEach((value,i) => {month = month.replace(value,(i+1))})
  var convertThresholdDate = dateInArray[3] + "/" + month + "/" + dateInArray[2];

  var oldEmailThreads = GmailApp.search("in:inbox category:updates before:" + convertThresholdDate);
  GmailApp.moveThreadsToArchive(oldEmailThreads);
}

function archiveOldEmailOther() {
  var keepDay = 7;  // Emails older than x days in the inbox in other categories will be archived, default 7 days
  var thresholdDate = new Date(new Date().setDate((new Date).getDate() - keepDay));
  var dateInArray = thresholdDate.toDateString().split(" ");
  var month = dateInArray[1];
  ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].forEach((value,i) => {month = month.replace(value,(i+1))})
  var convertThresholdDate = dateInArray[3] + "/" + month + "/" + dateInArray[2];

  var oldEmailThreads = GmailApp.search("in:inbox category:social OR category:promotions OR category:forum before:" + convertThresholdDate);
  GmailApp.moveThreadsToArchive(oldEmailThreads);
}
