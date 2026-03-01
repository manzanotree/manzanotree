import * as React from "react"
import * as styles from "./screenshot.module.css"

export default function Screenshot({
  src,
  alt,
  caption,
  width = 960,
  bleed = false,
}) {
  return (
    <figure className={`${styles.figure} ${bleed ? styles.bleed : ""}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        style={{ maxWidth: width }}
        className={styles.img}
      />
      {caption ? <figcaption className={styles.caption}>{caption}</figcaption> : null}
    </figure>
  )
}