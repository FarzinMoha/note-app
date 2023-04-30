import { ReactNode, SetStateAction } from "react";

export type btnProps = {
  children: ReactNode;
  rootClass?: string;
};
export type inputProps = {
  rootClass?: string;
  label?: string;
  error?: string;
};

export type dropDownProps = {
  items: any[];
  rootClass?: string;
};

export type textListResponse = {
  id: string;
  category: string;
  text: string;
  status: boolean;
};
export type CreateAndEditText = {
  state: { id: string; category: string; text: string; status: boolean };
  setState:React.Dispatch<SetStateAction<{ id: string; category: string; text: string; status: boolean }>>
  submitHandler:React.FormEventHandler<HTMLFormElement>
  onChangeHandler:React.ChangeEventHandler<HTMLInputElement> & React.ChangeEventHandler<HTMLTextAreaElement>
};

// , submitHandler , onChangeHandler
