import { useState } from "react";
import InputField from "@/components/FormFields/InputField";
import { useFormContext } from "@/Context/FormContext";
import { createWithEmailUrl } from "@/utils/constants";
import axios from "axios";

interface Props {
  placeholder: string;
  buttonText: string;
}

const EnterEmail: React.FC<Props> = ({ buttonText, placeholder }) => {
  const [inputValue, setInputValue] = useState("");
  const {
    //toggleModal,
    handleInputChange,
    //setHasSubmittedEmail,
    setIsLoading,
  } = useFormContext();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const postData = {
      email: inputValue,
    };

    try {
      setIsLoading(true);

      const response = await axios.post(createWithEmailUrl, postData);
      // toggleModal();
      // setInputValue("");
      // setHasSubmittedEmail(true);

      console.log("POST request successful:", response.data);
    } catch (error) {
      if (error?.response?.data?.error) {
        console.log("Error:", error.response);
        // Display the error message to the user as needed
      } else {
        console.log("An unexpected error occurred:", error);
        // Handle other types of errors
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="pt-5" onSubmit={handleSubmit}>
      <div className="">
        <InputField
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => {
            handleInputChange(e);
            setInputValue(e.target.value);
          }}
          hasButton={true}
          buttonText={buttonText}
          type="email"
          name="email"
        />
      </div>
    </form>
  );
};
export default EnterEmail;
