import styles from "@/app/ui/Cards/Card.module.css";
import Button from "@/app/ui/buttons/Buttons";
import classNames from "classnames";

export default function ShopItem({
    type,
    onClick,
    href,
    author,
    value,
    imageSrc,
}) {
    const CardClasses = classNames(styles.Card);
    {
        return (
            <div className={styles.container}>
                <img src={imageSrc}></img>
                <h3 className={styles.cardName}>{author}</h3>
                <Button
                    href={href}
                    onClick={onClick}
                    value='Learn More'
                    size='small'
                />
            </div>
        );
    }
}
