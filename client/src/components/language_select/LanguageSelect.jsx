import { GrLanguage } from "react-icons/gr";
const LanguageSelect = ({ handleModal }) => {
  return (
    <>
      <GrLanguage size={20} onClick={handleModal} />
    </>
  );
};

export default LanguageSelect;
