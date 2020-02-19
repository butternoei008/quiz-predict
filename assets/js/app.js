function createQuiz(quizs) {
   quizs.map( quiz => {
      $('#quiz-content').append(`
         <div class="col-3">
            <a class="text-default" href="quiz.html?quiz_id=${quiz.category_id}">
               <div class="card h-100">
                  <div class="card-img-top">
                     <img src="${quiz.category_img}" alt=""/>
                  </div>
                  <div class="card-body">
                     <div class="text-center">
                        <p class="font-quiz">${quiz.category_name}</p>
                     </div>
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
