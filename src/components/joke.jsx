import React from 'react'
import styles from '../modules/nav.module.css'
const joke = (props) => {
  return (
   <>
   <details>
   {props.setUp &&
    <summary className={styles.setUp}>
   <h2>{props.setUp}</h2>
   </summary>}

{props.punchline &&
<p className={styles.punchline}>{props.punchline}</p>}
  
  <section id={styles.info}>
  <div><span>UpVote</span> : {props.upVote}</div>
  <div><span>DownVote</span> : {props.downVote}</div>
  <div><span>IsPun</span> : {props.pun?"Yes":"No"}</div>
  <section >
    <div><span>comments</span> : {props.comments.join(", ")}</div>
  </section>
  </section>
  </details>
   </>
  )
}

export default joke
