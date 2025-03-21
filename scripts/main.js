document.addEventListener("DOMContentLoaded", function () {
    var taskAssignedElement = document.getElementById("taskAssigned");
    var completedTaskElement = document.getElementById("CompletedTaskAssigned");
    var completeButtons = document.querySelectorAll(".bg-blue-500");
    var activityLog = document.getElementById("activity-log");
    var clearButton = document.getElementById("clearAlldata");
  
    for (var i = 0; i < completeButtons.length; i++) {
      completeButtons[i].addEventListener("click", function () {
        var taskTitle = this.parentElement.parentElement.querySelector("h3").innerText;
  
        var now = new Date();
        var timeText = now.toLocaleTimeString();
  
        alert("Task Completed!");
  
        this.disabled = true;
        this.innerText = "Completed";
        this.classList.add("opacity-50", "cursor-not-allowed");
  
        var assigned = taskAssignedElement.innerText;
        var assignedNumber = Number(assigned);
        var newAssigned = assignedNumber - 1;
        taskAssignedElement.innerText = newAssigned;
  
        var completed = completedTaskElement.innerText;
        var completedNumber = Number(completed);
        var newCompleted = completedNumber + 1;
        completedTaskElement.innerText = newCompleted;
  
        var newLog = document.createElement("div");
        newLog.className = "space-y-2 text-sm bg-[#F4F7FF] rounded-lg p-3 text-gray-600 mb-2";
        newLog.innerHTML = '<p>You have completed the task "<strong>' + taskTitle + '</strong>" at ' + timeText + '</p>';
  
        activityLog.appendChild(newLog);
  
        if (newAssigned === 0) {
          alert("🎉 Congratulations! All tasks are completed!");
        }
      });
    }
  
  
    clearButton.addEventListener("click", function () {
      var confirmClear = confirm("All Activity Log will be cleared. Are you sure?");
      if (confirmClear) {
        var logs = activityLog.querySelectorAll("div.space-y-2");
        for (var j = 0; j < logs.length; j++) {
          logs[j].remove();
        }
      }
    });
  });
  