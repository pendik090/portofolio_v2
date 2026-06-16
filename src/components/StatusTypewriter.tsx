import * as React from "react"

export interface StatusTypewriterProps {
  texts?: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
  loop?: boolean
  showCursor?: boolean
  cursorChar?: string
  cursorBlinkSpeed?: number
  className?: string
}

export default function StatusTypewriter({
  texts = [
    "Available for new projects",
    "Open to collaboration",
    "Let's work together",
  ],
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
  loop = true,
  showCursor = true,
  cursorChar = "|",
  cursorBlinkSpeed = 530,
  className = "",
}: StatusTypewriterProps) {
  const [text, setText] = React.useState("")
  const [textIndex, setTextIndex] = React.useState(0)
  const [charIndex, setCharIndex] = React.useState(0)
  const [isDeleting, setIsDeleting] = React.useState(false)
  const [cursorVisible, setCursorVisible] = React.useState(true)

  const currentText = texts[textIndex % texts.length] ?? ""

  React.useEffect(() => {
    if (!loop && textIndex >= texts.length) return
    if (!currentText) return

    const isComplete = charIndex === currentText.length
    const isEmpty = charIndex === 0

    if (!isDeleting && isComplete) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseDuration)
      return () => clearTimeout(timeout)
    }

    if (isDeleting && isEmpty) {
      setIsDeleting(false)
      setTextIndex(prev => prev + 1)
      setCharIndex(0)
      return
    }

    const timeout = setTimeout(
      () => {
        const next = isDeleting ? charIndex - 1 : charIndex + 1
        setCharIndex(next)
        setText(currentText.substring(0, next))
      },
      isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [
    charIndex,
    isDeleting,
    textIndex,
    currentText,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    loop,
    texts.length,
  ])

  React.useEffect(() => {
    if (!showCursor) return

    const interval = setInterval(() => {
      setCursorVisible(v => !v)
    }, cursorBlinkSpeed)

    return () => clearInterval(interval)
  }, [showCursor, cursorBlinkSpeed])

  return (
    <p className={`font-mono text-sm text-muted-foreground ${className}`}>
      <span className="mr-2 inline-block size-3 translate-y-px rounded-full bg-foreground" />
      <span>{text || "\u00A0"}</span>
      {showCursor && (
        <span
          className="ml-0.5 font-mono"
          style={{ opacity: cursorVisible ? 1 : 0 }}
        >
          {cursorChar}
        </span>
      )}
    </p>
  )
}
