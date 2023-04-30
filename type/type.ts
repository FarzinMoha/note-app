import { ReactNode, SetStateAction } from "react";

export type btnProps = {
  children: ReactNode;
  rootClass?: string;
  bgSecondColor?:boolean
};
export type inputProps = {
  rootClass?: string;
  label?: string;
  error?: string;
};

export type dropDownProps = {
  items: any[];
  rootClass?: string;
  selected?: string;
};

export type textListResponse = {
  id: string;
  category: string;
  text: string;
  status: boolean;
  date:string
};
export type CreateAndEditText = {
  state: { id: string; category: string; text: string; status: boolean , date:string };
  setState:React.Dispatch<SetStateAction<{ id: string; category: string; text: string; status: boolean, date:string }>>
  submitHandler:React.FormEventHandler<HTMLFormElement>
  onChangeHandler:React.ChangeEventHandler<HTMLInputElement> & React.ChangeEventHandler<HTMLTextAreaElement>
};

// , submitHandler , onChangeHandler
export type textEditResponse = {
  id:string;
  text:{
    id: string;
    category: string;
    text: string;
    status: boolean;
    date:string
  }
};
