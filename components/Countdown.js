import React, { useState, useEffect } from 'react'
import Countdown from 'react-countdown'
import { motion } from 'framer-motion'

import styles from '../styles/Countdown.module.css'

const Completionist = () => <span>You are good to go!</span>

var buttonVariants = {}

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />
  } 
  else {
    // Render a countdown
    const numDays = days < 10 ? String(`0${days}`) : String(days)
    const numHours = hours < 10 ? String(`0${hours}`) : String(hours)
    const numMinutes = minutes < 10 ? String(`0${minutes}`) : String(minutes)
    const numSeconds = seconds < 10 ? String(`0${seconds}`) : String(seconds)

    return (
      <div className={styles.container}>
        <div className={styles.header}>
          days left until start
        </div>
        <div className={styles.row}>      
          { 
            days > 0 &&
              <>
                <div className={styles.stack}>
                  <div className={styles.number}>
                    { Array.from(numDays).map(n =>
                      <motion.div variants={buttonVariants} whileHover="hover">{n}</motion.div>
                    )}
                  </div>
                  <div className={styles.label}>days</div>
                </div>
                <div className={styles.separator}>:</div>
              </>
          }
          {
            ( days > 0 || hours > 0 ) &&
              <>
                <div className={styles.stack}>
                  <div className={styles.number}>
                    { Array.from(numHours).map(n =>
                      <motion.div variants={buttonVariants} whileHover="hover">{n}</motion.div>
                    )}
                  </div>
                  <div className={styles.label}>hours</div>
                </div>
                <div className={styles.separator}>:</div>
              </>
          }
          {
            ( days > 0 || hours > 0 || minutes > 0 ) &&
              <>
                <div className={styles.stack}>
                  <div className={styles.number}>
                    { Array.from(numMinutes).map(n =>
                      <motion.div variants={buttonVariants} whileHover="hover">{n}</motion.div>
                    )}
                  </div>
                  <div className={styles.label}>minutes</div>
                </div>
                <div className={styles.separator}>:</div>
              </>
          }
          {
            ( days > 0 || hours > 0 || minutes > 0 || seconds > 0 ) &&
              <div className={styles.stack}>
                <div className={styles.number}>
                  { Array.from(numSeconds).map(n => 
                    <motion.div variants={buttonVariants} whileHover="hover">{n}</motion.div>
                  )}
                </div>
                <div className={styles.label}>seconds</div>
              </div>
          }
        </div>
      </div>
    )
  }
}

export default function CountdownWrapper() {
  const [isMobile, setIsMobile] = useState(false)
  
  if (!isMobile)
    buttonVariants = {
      hover: { scale: 1.1 }
    }
  else
    buttonVariants = {}

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 720)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  })

  return (
    <h2 className={styles.countdown}>
      <Countdown date="2021-11-06T00:00:00" renderer={renderer} />
    </h2>
  )
}
