import { FC, useState } from "react";


export interface ChatInputProps {
  sendMessage: (message: string) => {}
}

const ChatInput: FC<ChatInputProps> = (props) => {
  const { sendMessage } = props;

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleMessageSubmit();
    }
  };

  const handleMessageSubmit = () => {
    const message = inputValue.trim()
    if (message === "") return;

    sendMessage(message);
    setInputValue("");
  }

  return (
    <div className="bg-gray-300 py-4 px-4" role="form">
      <div className="flex">
        <div className="flex-grow mr-2">
          <input
            type="text"
            className="border-2 border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-600"
            placeholder="Type a message..."
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        <button
          className="rounded-full h-10 w-10 bg-blue-600 flex items-center justify-center text-white"
          onClick={handleMessageSubmit}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default ChatInput