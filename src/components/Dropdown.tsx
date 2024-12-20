import { FC, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Dropdown: FC<{ placeholder?: string; options: string[] }> = ({
  placeholder,
  options,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Todos");

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div className="selected-option" onClick={toggling}>
        <span>
          {selectedOption
            ? selectedOption
            : placeholder
            ? placeholder
            : options[0]}
        </span>

        <i
          className="arrow"
          style={{
            transform: `rotate(${isOpen ? "0" : "180deg"}) translateY(${
              isOpen ? "-50%" : "50%"
            })`,
          }}
        >
          <FontAwesomeIcon icon={faChevronUp} />
        </i>
      </div>

      {isOpen && (
        <ul className="list">
          {options.map((option) => (
            <li
              className={`item ${selectedOption === option ? "selected" : ""}`}
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
