$(".message").hide();

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
      gradeArrayNoZeros = [];

  $(".message").hide();
  howManyCourses = function() {   	
    for (i = 0; i < gradeArray.length; i++) {
      if (gradeArray[i] > 4) {
        $(".message").show()
      }
      else if (gradeArray[i] !== 0){
        gradeArrayNoZeros.push(gradeArray[i])
      }
    }  
  };

  howManyCourses();

  totalCredits= (Math.floor($C1Cr + $C2Cr + $C3Cr + $C4Cr + $C5Cr)).toFixed(2);
  gradePoints = (Math.floor($C1Gr + $C2Gr + $C3Gr + $C4Gr + $C5Gr)).toFixed(2);
  weighedGpa  = ((Math.floor($C1Cr * $C1Gr + $C2Cr * $C2Gr + $C3Cr * $C3Gr + $C4Cr * $C4Gr + $C5Cr * $C5Gr)) / totalCredits).toFixed(2);
  gpa         = (gradePoints / gradeArrayNoZeros.length).toFixed(2);

	$("#gradepointsOutput").empty().append("<span class='resultValue'>" + gradePoints + " </span class='resultValue'>");
	$("#totalcreditsOutput").empty().append("<span class='resultValue'>" + totalCredits + " </span class='resultValue'>");
  $("#gpa").empty().append("<span class='resultValue'>" + gpa + "</span class='resultValue'>");
  $("#weighGpa").empty().append("<span class='resultValue'>" + weighedGpa + "</span class='resultValue'>");
}

$("#calculateButton").on("click", calculate);

// $("#addLineButton").one("click", function(){
//   $("form") .append('<div>Course 6 \
//           <input placeholder="Add credits" type="number" class="credit" id="c6" name="CourseNcredit"> \
//           <input placeholder="Add grade" type="number" class="grade" id="g6" name="CourseNgrade"> \
//           </div>');
// });