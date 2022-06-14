const btn = document.querySelector('#btn')
const url = 'http://localhost:3000'

btn.addEventListener('click', () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
    })
})
