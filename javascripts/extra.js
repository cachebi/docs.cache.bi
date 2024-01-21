window.addEventListener('message', ({ data }) => {
  if (data === 'switch-on-embed-mode') {
    const btn = document.getElementById('closeBtn')
    btn.classList.remove('hidden')
    btn.addEventListener('click', () => {
      window.parent.postMessage('close-help', '*')
    })
    document.getElementById('docFooter').classList.add('hidden')
  }
})
