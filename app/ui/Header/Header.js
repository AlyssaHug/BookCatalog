import styles from "@/app/ui/Header/Header.module.css";
import classNames from "classnames";

export default function Header({ type, size, value }) {
    const headerClasses = classNames(styles.header, {
        [styles.small]: size === "small",
        [styles.large]: size === "large",
    });
    return <header className={headerClasses}>{value}</header>;
}
