import {BallCanvas} from './canvas';
import {SectionWrapper} from '../hoc';
import {technologies} from '../constants';
import { fadeIn, textVariant } from '../utils/motion'
import { motion } from 'framer-motion'
import React from 'react'
import { Tilt } from 'react-tilt'
import { styles } from '../styles'
import { github } from '../assets'
import { projects } from '../constants'

const Tech = () => {
  return (
    <div className = "flex flex-row flex-wrap justify-center gap-10">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Technologies used
        </p>
        <p className={styles.sectionSubText}>
          for this portfolio
        </p>
        <h2 className={styles.sectionHeadText}>Tech.</h2>
      </motion.div>

      {technologies.map((technology) => (
        <div className="w-28 h-28" key = {technology.name}>
          <BallCanvas icon = {technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "");