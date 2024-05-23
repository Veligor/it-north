import React, { useState } from "react";
import styles from "./users.module.css";


const Paginator = ({totalUserCount, pageSize, onPageChange, currentPage, portionSize = 10 }) => {

   let pageCount = Math.ceil(totalUserCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
 
  let portionCount = Math.ceil(pageCount / portionSize)
  let [portionNumber, setPortionNumber] = useState(1)
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  let rightPortionPageNumber = portionNumber * portionSize

  return (
    <div className={styles.paginator}>
      {  portionNumber > 1 && 
      <button className={styles.prev} onClick={() => {setPortionNumber(portionNumber - 1)}}> Previous</button>  }

        {pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map((p) => {
          return (
            <span className={currentPage === p && styles.act}
            key={p}
              onClick={() => {
                onPageChange(p)}}>
             <span className={styles.numberPaginator}>{p}</span>
            </span>
            
          );
        })}
        { portionCount > portionNumber && 
            <button className={styles.next} onClick={() => {setPortionNumber(portionNumber + 1)}}>Next</button> }
      </div>
  );
};

export default Paginator;
