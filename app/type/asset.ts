interface valueProps {
    amount: number;
    date: Date;
}

interface paymentProps {
    mode: string;
    amount: number;
    date: Date;
}

export interface asset {
  name: string;
  cost: number;
  value?: valueProps[];
  aquiredDate: string;
  assetType: string;
  payment?: paymentProps[];
};

export interface assetState extends Omit<asset, 'value' | 'payment'> {
    value: number;
}