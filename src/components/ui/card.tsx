import React from "react";
import '../components_css/card.css'

type CardProps = {
  className?: string;
};

function Card({ className }: CardProps) {
  return (
    <>
        <div className={`card ${className}`}></div>
    </>
  );
}

export default Card;
