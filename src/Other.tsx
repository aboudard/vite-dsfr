import { ReactNode } from "react";

type OtherProps = { children?: ReactNode };
export const Other = ({ children }: OtherProps) => (
  <div className="fr-alert fr-alert--info fr-mb-2v">
    <h3 className="fr-alert__title">Titre du message d'information</h3>
    <div className="fr-alert__body">
      <p>{children}</p>
    </div>
  </div>
);
