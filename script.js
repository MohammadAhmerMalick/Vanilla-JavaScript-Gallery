const button = document.querySelectorAll(".filter-button")

const handleClick = (e) => {
  const filter = e.target.attributes['data-filter'].value
  const allItems = document.querySelectorAll(`.gallery-item`)
  const items = document.querySelectorAll(`.gallery-item.${filter}`)

  if (filter !== 'all') {
    Array.from(allItems).map(item => {
      item.classList.add('w-0')
    })

    Array.from(items).map(item => {
      item.classList.remove('w-0')
    })
  }

  else {
    Array.from(allItems).map(item => {
      item.classList.remove('w-0')
    })
  }
}

Array.from(button).map(button => button.addEventListener('click', handleClick))