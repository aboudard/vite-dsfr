import { ReactNode } from "react";

type GreeterProps = { children?: ReactNode };
export const Greeter = ({ children }: GreeterProps) => (
  <div className="fr-highlight fr-mb-2v">
    <p>{children}</p>
    <button
      className="fr-btn fr-btn--secondary fr-icon-chat-3-fill fr-btn--icon-left"
      id="greet-btn"
      onClick={() => alert("hello world")}
    >
      greet
    </button>
  </div>
);
