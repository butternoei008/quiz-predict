function createProposition(proposis) {
   const proposition = proposis.proposition
   const rand_proposi = Math.floor((proposition.length - 1) * Math.random())
   const select_propsi = proposition[rand_proposi]
   
   $('#quiz_name').html(select_propsi.quiz)

   select_propsi.choice.map( choice => {
      $('#choice').append(`
         <div className="col-12">
            <button class="btn-choice" data-id="${choice.id}" data-proposi="${select_propsi.id}">${choice.name}</button>
         </div>
      `)
   })
}

function showResult(choice_id, proposi_id, proposits) {
   const proposi = proposits.proposition.filter( proposi => proposi.id == proposi_id)
   const choice = proposi[0].choice.filter( choice => choice.id == choice_id)
   const result = proposi[0].result.filter( result => result.id == choice_id)
   const predict = result[0]

   $('#choice').html(`
      <div>
         <h2><strong>คำตอบคุณคือ: </strong><span class="text-muted">${choice[0].name}</span></h2>
         <div class="img-predict">
            <img src="${predict.img}"/>
         </div>
         <div>
            <h2 class="text-muted text-regular">${predict.name}</h2>
            <div class="text-center">
               <a class="btn btn-primary" href="index.html">กลับหน้าแรก</a>
               <a class="btn btn-warning" href="">เล่นอีกครั้ง</a>
            </div>
         </div>
      </div>
   `)
}

$(document).ready(function() {
   const url_string = window.location.href
   const url = new URL(url_string)
   const quiz_id = url.searchParams.get('quiz_id')

   $(document).on('click', '.btn-choice', function() {
      const choice_id = $(this).data('id')
      const proposi_id = $(this).data('proposi')

      $.ajax({
         url: 'quiz.json',
         dataType: 'JSON',
         success: function(res) {
            const select_proposition = res.filter( quiz => quiz.category_id == quiz_id)
            showResult(choice_id, proposi_id, ...select_proposition)
         }
      })
   })

   $.ajax({
      url: 'quiz.json',
      dataType: 'JSON',
      success: function(res) {
         const select_proposition = res.filter( quiz => quiz.category_id == quiz_id)
         createProposition(...select_proposition)
      }
   })
})
