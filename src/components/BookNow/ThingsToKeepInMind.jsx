import styles from "./ThingsToKeepInMind.module.css";

const items = [
  {
    icon: "📦",
    title: "Package Weight",
    description: "We only deliver packages upto 50kg",
  },
  {
    icon: "🧾",
    title: "Packaging",
    description:
      "We do not provide packaging service. Please keep the items packed for our delivery executive to pickup",
  },
  {
    icon: "⚠️",
    title: "Restricted/Illegal item",
    description:
      "Please ensure you are not sending any restricted/illegal item",
  },
  {
    icon: "🚚",
    title: "Multiple packages",
    description:
      "We only allow one box/package/parcel per order",
  },
];

export default function ThingsToKeepInMind() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Things to keep in mind</h2>

      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          <div className={styles.iconWrapper}>
            <span className={styles.icon}>{item.icon}</span>
          </div>

          <div>
            <h4 className={styles.title}>{item.title}</h4>
            <p className={styles.description}>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}