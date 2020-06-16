function urlChecker (newUrl) {
  console.log('::: Running urlChecker :::', newUrl)
  const url = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
  if (url.test(newUrl)) {
    return true
  } else {
    return false
  }
}

export { urlChecker }
