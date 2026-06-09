import styles from "./HomeCard.module.css";

export default function HomeCard({currentStep,setCurrentStep,page,setPage}) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.backArrow}>←</span>
        <h3>Home</h3>
      </div>

      <div className={styles.content}>
        <div className={styles.field}>
          <label>Pickup Address</label>

          <button className={styles.addressBtn}>
            <span>📍</span>
            Add Pickup Address
          </button>
        </div>

        <div className={styles.field}>
          <label>Delivery Address</label>

          <button className={styles.addressBtn}>
            <span>📍</span>
            Add Delivery Address
          </button>
        </div>
      </div>

      <div className={styles.footer}>
        <button className={styles.nextBtn} onClick={()=>{
                if (currentStep<4){
                    setCurrentStep(currentStep+1)
                }
                setPage(page+1)

        }}>
          Next
        </button>
      </div>
    </div>
  );
}