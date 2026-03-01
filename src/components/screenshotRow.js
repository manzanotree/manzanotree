import * as React from "react"
import * as styles from "./screenshotRow.module.css"

export default function ScreenshotRow({ items, caption }) {
  // items: [{ src, alt }, ...] length 1–4
  return (
    <figure className={styles.figure}>
      <div
        className={styles.grid}
        data-count={Math.min(items?.length ?? 0, 4)}
      >
        {items?.slice(0, 4).map((it, idx) => (
          <img
            key={idx}
            className={styles.img}
            src={it.src}
            alt={it.alt}
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>

      {caption ? <figcaption className={styles.caption}>{caption}</figcaption> : null}
    </figure>
  )
}