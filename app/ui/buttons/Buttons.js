"use client";
import styles from "@/app/ui/buttons/Buttons.module.css";
import classNames from "classnames";
import React from "react";

export default function Button({
    type = "button",
    size,
    value,
    onClick,
    href,
    alt,
    target = "_self",
}) {
    function handleClick() {
        if (href) {
            window.open(href, target);
            return;
        }
        if (onClick) {
            onClick();
        }
    }
    const buttonClasses = classNames(styles.button, {
        [styles.small]: size === "small",
        [styles.large]: size === "large",
    });

    return (
        <button
            className={buttonClasses}
            onClick={handleClick}
            href={href}>
            <p>{value}</p>
        </button>
    );
}
