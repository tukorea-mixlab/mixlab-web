import React from "react";
import styles from './FacultyCard.module.css'


export default function FacultyCard(props) {
  return (
    <div className={styles.FacultyCard}>
      <div className={styles.Photo}>
        <img src={props.data.image} alt="" />
      </div>
      <div className={styles.Content}>
          <h1>{props.data.name}</h1>
        <div className={styles.Info}>
          <div className={styles.professor}>
            <div>
              <b>{props.data.position}</b>
              <br/>
              {props.data.division}
            </div>
            <b>
            {props.data.major}
            </b>
          </div>

          <div className={styles.History}>
            {props.data.history[0]}<br/>
            {props.data.history[1]}<br/>
            {props.data.history[2]}
          </div>
        </div>
      </div>
    </div>
  );
}
