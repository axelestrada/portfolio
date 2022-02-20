import { FC, useState } from "react";
import styles from "./styles/Dropdown.module.sass";

import ChevronUp from "/assets/icons/chevron-up.svg";

const Dropdown: FC<{ placeholder?: string; options: string[] }> = ({
  placeholder,
  options,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <div className={styles["dropdown"]}>
      <div className={styles["dropdown__selected-option"]} onClick={toggling}>
        <span>
          {selectedOption
            ? selectedOption
            : placeholder
            ? placeholder
            : options[0]}
        </span>

        <i
          className={styles["dropdown__arrow"]}
          style={{
            transform: `rotate(${isOpen ? "0" : "180deg"}) translateY(${
              isOpen ? "-50%" : "50%"
            })`,
          }}
        >
          <ChevronUp />
        </i>
      </div>

      {isOpen && (
        <ul className={styles["dropdown__list"]}>
          {options.map((option) => (
            <li
              className={`${styles["dropdown__item"]} ${
                selectedOption === option && styles["dropdown__item--selected"]
              }`}
              onClick={() => onOptionClicked(option)}
              key={Math.random()}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
