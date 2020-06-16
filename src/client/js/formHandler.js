function handleSubmit (event) {
  event.preventDefault()

  const newUrl = document.getElementById('url').value

  if (Client.urlChecker(newUrl)) {
    console.log('::: Form Submitted :::')
    document.getElementById('error').innerText = ''
    postUrl('http://localhost:3000/addArticle', { url: newUrl })
      .then(
        updateUI()
      )
  } else {
    document.getElementById('error').innerText = 'Invalid URL, please try again'
  }
}

const postUrl = async (url = '', data = {}) => {
  const res = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  try {
    const newData = await res.json()
    return newData
  } catch (error) {
    console.log('error', error)
  }
}

const updateUI = async () => {
  const res = await fetch('http://localhost:3000/getAnalysis')
  try {
    const data = await res.json()
    document.getElementById('polarity').innerText = (data.polarity.charAt(0).toUpperCase() + data.polarity.slice(1))
    document.getElementById('polarityConfidence').innerText = data.polarity_confidence
    document.getElementById('subjectivity').innerText = (data.subjectivity.charAt(0).toUpperCase() + data.subjectivity.slice(1))
    document.getElementById('subjectivityConfidence').innerText = data.subjectivity_confidence
    document.getElementById('excerpt').innerText = data.text
  } catch (error) {
    console.log('error', error)
  }
}

export { handleSubmit }
