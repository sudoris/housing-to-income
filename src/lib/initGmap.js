import API_KEY from '../../config/gmap.js'

const CALLBACK_NAME = 'gmapCallback'

let initialized = !!window.google
let resolveInitPromise
let rejectInitPromise

const initPromise = new Promise((res, rej) => {
  resolveInitPromise = res
  rejectInitPromise = rej
})

export default function initGmap() {
  if (initialized) return initPromise
  initialized = true
  window[CALLBACK_NAME] = () => resolveInitPromise(window.google)
  const script = document.createElement('script')
  script.async = true
  script.defer = true
  script.onerror = rejectInitPromise
  script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=${CALLBACK_NAME}`
  document.querySelector('head').appendChild(script)
  return initPromise
}
