import { useEffect, useState } from "react";
import styles from "./CandidateCard.module.css";

function CandidateCard(item) {
 
  return (
    <div data-testid="candidate-container" className={styles.container}>
      <img src={item.item.avatar}  width="100px" height="100px" />
      <div>
        <div>Name:{item.item.name}</div>
        <div>Title & Company Name:{item.item.company_name}</div>
      </div>
      <div>$ Salary:{item.item.salary}</div>
    </div>
  );
}

export default CandidateCard;
