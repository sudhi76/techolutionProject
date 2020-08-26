var jsonData = [
  {
    name: "rajiv",
    marks: {
      Maths: "18",
      English: "21",
      Science: "45"
    },
    rollNumber: "KV2017-5A2"
  },
  {
    name: "abhishek",
    marks: {
      Maths: "43",
      English: "30",
      Science: "37"
    },
    rollNumber: "KV2017-5A1"
  },
  {
    name: "zoya",
    marks: {
      Maths: "42",
      English: "31",
      Science: "50"
    },
    rollNumber: "KV2017-5A3"
  }
];

var table = document.getElementById("scoreboard");

jsonData.sort((a, b) => {
  // Use toUpperCase() to ignore character casing
  const studentA = a.name.toUpperCase();
  const studentB = b.name.toUpperCase();

  let comparison = 0;
  if (studentA > studentB) {
    comparison = 1;
  } else if (studentA < studentB) {
    comparison = -1;
  }
  return comparison;
});

var topperMarks = -1;

jsonData.forEach((student) => {
  var totalMarks =
    student.marks.Maths + student.marks.English + student.marks.Science;
  if (totalMarks > topperMarks) {
    topperMarks = totalMarks;
  }
});

jsonData.forEach((student) => {
  var row = table.insertRow();
  var studentName = row.insertCell(0);
  var rollNumber = row.insertCell(1);
  var totalMarks = row.insertCell(2);
  var status = row.insertCell(3);

  studentName.innerText = student.name;
  studentName.className = "studentName";
  rollNumber.innerText = student.rollNumber;
  studentTotalMarks =
    student.marks.Maths + student.marks.English + student.marks.Science;
  totalMarks.innerText = studentTotalMarks;
  if (studentTotalMarks == topperMarks) {
    status.innerText = "Topper";
    row.className = "topper";
  } else if (
    student.marks.Maths < 20 ||
    student.marks.English < 20 ||
    student.marks.Science < 20
  ) {
    status.innerText = "Fail";
    row.className = "failed";
  } else {
    status.innerText = "Pass";
  }
});