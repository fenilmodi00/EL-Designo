export type NavItem = {
  name: string;
  href: string;
  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
};

export type ImageAreaProps = {
  title: string;
  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
};

export type MediaData = {
  data: string;
  mimeType: string;
};

export type GeneralSettings = {
  temperature: number;
  maxLength: number;
  topP: number;
  topK: number;
};

export type SafetySettings = {
  harassment: number;
  hateSpeech: number;
  sexuallyExplicit: number;
  dangerousContent: number;
};
