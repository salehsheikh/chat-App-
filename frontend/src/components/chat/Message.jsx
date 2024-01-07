import { format } from "timeago.js";

export default function Message({ message, self }) {
  const messageContainerClass = [
    self !== message.sender ? "justify-start" : "justify-end",
    "flex",
  ].filter(Boolean).join(" ");

  const messageBubbleClass = [
    self !== message.sender
      ? "text-gray-700 dark:text-gray-400 bg-white border border-gray-200 shadow-md dark:bg-gray-900 dark:border-gray-700"
      : "bg-blue-600 dark:bg-blue-500 text-white",
    "relative max-w-xl px-4 py-2 rounded-lg shadow",
  ].filter(Boolean).join(" ");

  return (
    <>
      <li className={messageContainerClass}>
        <div>
          <div className={messageBubbleClass}>
            <span className="block font-normal">{message.message}</span>
          </div>
          <span className="block text-sm text-gray-700 dark:text-gray-400">
            {format(message.createdAt)}
          </span>
        </div>
      </li>
    </>
  );
}
