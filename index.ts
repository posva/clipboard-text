/**
 * Copy arbitrary text to the clipboard
 *
 * @param input text t ocopy
 * @param parentElement element where the textarea should be inserted. Defaults
 * to body. You should provide a value if at the time the function is called,
 * the focus is trapped in a modal. The value should be the element where the
 * focus is trapped. Otherwise the browser may prevent the copy command
 */
export function copy(input: string, parentElement?: Element) {
  const element = document.createElement('textarea')

  element.value = input

  // Prevent keyboard from showing on mobile
  element.setAttribute('readonly', '')

  // @ts-ignore
  element.style.contain = 'strict'
  element.style.position = 'absolute'
  element.style.left = '-9999px'
  element.style.fontSize = '12pt' // Prevent zooming on iOS

  const selection = document.getSelection()
  let originalRange: boolean | Range = false
  if (selection && selection.rangeCount > 0) {
    originalRange = selection.getRangeAt(0)
  }

  parentElement = parentElement || document.body

  parentElement.appendChild(element)
  element.select()

  // Explicit selection workaround for iOS
  element.selectionStart = 0
  element.selectionEnd = input.length

  let isSuccess = false
  try {
    isSuccess = document.execCommand('copy')
  } catch (_) {}

  parentElement.removeChild(element)

  if (originalRange && selection) {
    selection.removeAllRanges()
    selection.addRange(originalRange)
  }

  return isSuccess
}
