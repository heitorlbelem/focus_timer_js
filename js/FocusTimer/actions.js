import { state } from "./state.js"
import * as timer from "./timer.js"
import * as elements from "./elements.js"
import * as sounds from "./sounds.js"

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running")
  sounds.btnPressAudio.play()
  timer.countdown()
}

export function set() {
  elements.minutes.setAttribute("contenteditable", true)
  elements.minutes.focus()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove("running")
  sounds.btnPressAudio.play()
  timer.updateDisplay()
}

export function toggleMusic() {
  state.isMuted = document.documentElement.classList.toggle("music-on")

  if (state.isMuted) {
    sounds.bgAudio.play()
    return
  }

  sounds.bgAudio.pause()
}
