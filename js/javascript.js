const toastTrigger = document.getElementById('sendmessagebtn')
const toastLiveExample = document.getElementById('sendmessage')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}
