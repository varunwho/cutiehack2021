import React, { useState } from 'react'
import { HiPlus } from 'react-icons/hi'
import styles from '../styles/Accordion.module.css'
import { motion } from 'framer-motion'

export default function FaqSection(props) {
  const [open, setOpen] = useState(false)

  const Toggle = () => {
    setOpen(!open)
  }

  return (
    <div
      className={
        open
          ? `${styles.accordionItem} ${styles.open}`
          : `${styles.accordionItem}`
      }
      onClick={() => Toggle()}
    >
      <motion.div
        whileHover={{ scale: 1.005 }}
        transition={{ ease: 'easeInOut', duration: 0.1 }}
        className={styles.accordionItemHeading}
      >
        <div className={styles.accordionItemButton}>
          <h3 className={styles.title}>{props.question}</h3>
          <HiPlus className={styles.arrow} />
        </div>
      </motion.div>
      <div className={styles.accordionItemPanel}>
        <p className={styles.answer}>{props.answer}</p>
      </div>
    </div>
  )
}
