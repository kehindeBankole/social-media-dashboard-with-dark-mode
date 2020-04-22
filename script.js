function my() {
  document.body.classList.toggle("light")
  document.getElementById('header').classList.toggle('lightheader')
  let card = document.getElementsByClassName('card')

  for (let i = 0; i < card.length; i++) {
    card[i].classList.toggle("lightcard")
  }
}