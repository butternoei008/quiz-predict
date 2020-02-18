function createQuiz(quizs) {
   quizs.map( quiz => {
      $('#quiz-content').append(`
         <div class="col-3">
            <a class="text-default" href="quiz.html?quiz_id=${quiz.category_id}">
               <div class="card">
                  <div class="card-body">
                     <p>${quiz.category_name}</p>
                  </div>
               </div>
            </a>
         </div>
      `)
   })
}

$(document).ready(function() {
   $.ajax({
      url: 'quiz.json',
      dataType: 'JSON',
      success: function(res) {
         createQuiz(res)
      }
   })
})
