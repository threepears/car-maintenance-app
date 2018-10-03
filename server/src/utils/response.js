
module.exports = (payload = {}, error = {}, status = 200) => {

  return {
    payload,
    error,
    status
  }
}
