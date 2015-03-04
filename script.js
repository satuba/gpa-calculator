

function calculate() {
	var $C1Cr = $("#c1").val()*1,
		$C1Gr = $("#g1").val()*1,
		$C2Cr = $("#c2").val()*1,
		$C2Gr = $("#g2").val()*1,
		$C3Cr = $("#c3").val()*1,
		$C3Gr = $("#g3").val()*1,
		$C4Cr = $("#c4").val()*1,
		$C4Gr = $("#g4").val()*1,
		$C5Cr = $("#c5").val()*1,
		$C5Gr = $("#g5").val()*1,
		gradePoints,	
		totalCredits,
		weighedGpa,
    gpa,
    gradeArray = [$C1Gr, $C2Gr, $C3Gr, $C4Gr, $C5Gr],
    gradeArrayNoNulls = [],
    howManyGrades;
    totalCredits= (Math.floor($C1Cr + $C2Cr + $C3Cr + $C4Cr + $C5Cr)).toFixed(2);
    gradePoints = (Math.floor($C1Gr + $C2Gr + $C3Gr + $C4Gr + $C5Gr)).toFixed(2);
    howManyCourses = function(){   	
      for (i = 0; i < gradeArray.length; i++) {
        if (gradeArray[i] !== 0){
          gradeArrayNoNulls.push(gradeArray[i])
        }
      }  
    };
    howManyCourses();
    weighedGpa = ((Math.floor($C1Cr * $C1Gr + $C2Cr * $C2Gr + $C3Cr * $C3Gr + $C4Cr * $C4Gr + $C5Cr * $C5Gr)) / totalCredits).toFixed(2);
    gpa = (gradePoints / gradeArrayNoNulls.length).toFixed(2);
	$("#gradepointsOutput").append("<p>" + gradePoints + " </p>");
	$("#totalcreditsOutput").append("<p>" + totalCredits + " </p>");
  $("#gpa").append("<p>" + gpa + "</p>");
  $("#weighGpa").append("<p>" + weighedGpa + "</p>");
}

$("#calculateButton").on("click", calculate);