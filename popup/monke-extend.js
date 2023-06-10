document.addEventListener('DOMContentLoaded', function () {
  var monkifyButton = document.getElementById('monkifyButton');
  var monkified = false;

  monkifyButton.addEventListener('click', function () {
    if (monkified == false) {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(tabs[0].id, { file: 'monkify.js' });
      });
    } else {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(tabs[0].id, { file: 'unmonkify.js' });
      });
    }
    monkified = !monkified;
  });
});
