import { type Message as TMessage } from "ai/react";
import { Message } from "./message";
import { MessageSquare } from "lucide-react";

type MessageProps = {
  messages: TMessage[];
};

export const Messages = ({ messages }: MessageProps) => {
  return (
    <div className="flex max-h-[cacl(100vh-3.5rem-7rem)] flex-1 flex-col overflow-y-auto">
      {messages.length ? (
        messages.map((message, i) => (
          <Message
            key={i}
            content={message.content}
            isUserMessage={message.role === "user"}
          />
        ))
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center gap-2">
          <MessageSquare className="size-8 text-blue-500" />
          <h3 className="font-semibold text-xl text-black dark:text-white">
            You&apos;re all set!
          </h3>
          <p className="text-muted-foreground text-sm">
            Ask your first question to get started.
          </p>
        </div>
      )}
    </div>
  );
};
