const scriptURL =
  'https://script.google.com/macros/s/AKfycbw1hjfbyKhKIehqDpXyVNDAkT3katXNbO6vBCqx4JwPYAte0h9FQMPivrVWagMnEptMqw/exec'
const form = document.forms['colleger-form-contact']
const btnKirim = document.querySelector('.btn-kirim')
const btnLoading = document.querySelector('.btn-loading')
const myAlert = document.querySelector('.myAlert')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  btnLoading.classList.toggle('d-none')
  btnKirim.classList.toggle('d-none')

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      btnLoading.classList.toggle('d-none')
      btnKirim.classList.toggle('d-none')
      myAlert.classList.toggle('d-none')
      form.reset()
      console.log('Success!', response)
    })

    .catch((error) => console.error('Error!', error.message))
})

var owl = $('.owl-carousel')
owl.owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 2500,
  autoplayHoverPause: true,
})
