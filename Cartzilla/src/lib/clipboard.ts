export const copyToClipboard = (event: React.MouseEvent<HTMLButtonElement>) => {
  const button = event.currentTarget
  const copyToClipboard = button.getAttribute('data-copy-to-clipboard')

  if (!copyToClipboard) return

  let target: HTMLElement | null
  try {
    target = document.querySelector(copyToClipboard)
  } catch (error) {
    target = null
  }

  const contentToCopy = target ? target.textContent || target.innerText : copyToClipboard

  navigator.clipboard
    .writeText(contentToCopy)
    .then(() => {
      button.classList.remove('btn-outline-secondary')
      button.classList.add('btn-outline-success', 'text-success')
      button.innerHTML = `<i class="ci-check fs-sm me-1"></i> ${button.dataset.copiedLabel}`

      setTimeout(() => {
        button.classList.remove('btn-outline-success', 'text-success')
        button.classList.add('btn-outline-secondary')
        button.innerHTML = `<i class="ci-copy fs-sm me-1"></i> ${button.dataset.idleLabel}`
      }, 2000)
    })
    .catch((err) => {
      console.error('Failed to copy code: ', err)
    })
}
