import React from 'react'
import styles from "../styles/blog.module.css";

const SkillCard = (props: {skills: string[] })=> {
  const { skills } = props;
  return (
    <div>
        <div className={styles.text}>
              {skills.map((skill: string, index: any) => (
                <p key={index}>{skill}</p>
          ))}
              </div>
  </div>
  )
}

SkillCard.propTypes = {}

export default SkillCard