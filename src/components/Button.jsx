const Button = ({ label, iconURL, backgroundColor, borderColor, textColor }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 rounded-full font-montserrat text-lg leading-none
      ${backgroundColor ? backgroundColor : "bg-coral-red"}
      ${textColor ? textColor : "text-white"}
      ${borderColor ? `border ${borderColor}` : "border-coral-red"}
      `}
    >
      {label}
      {iconURL && <img src={iconURL} alt="arrowrighticon" className="ml-2 w-5 h-5" />}
    </button>
  );
}

export default Button;
