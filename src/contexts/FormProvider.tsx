import { createContext, PropsWithChildren, useContext, useState } from "react";
import * as z from "zod";

type FormContextType = {
    personalInfo?: PersonalInfo;
    setPersonalInfo: (info: PersonalInfo) => void;
    paymentInfo?: PaymentInfo;
    setPaymentInfo: (info: PaymentInfo) => void;
}

const FormContext = createContext<FormContextType>({
    setPersonalInfo: () => { },
    setPaymentInfo: () => { },
});

export const personalInfoSchema = z.object({
    name: z.string({ message: 'Name is required' }).min(2).trim(),
    address: z.string({ message: 'Address is required' }).nonempty(),
    city: z.string({ message: 'City is required' }).nonempty(),
    postCode: z.string({ message: 'Post code is required' }).nonempty(),
    phoneNumber: z.string({ message: 'Phone number is required' }).nonempty(),
    country: z.string({ message: 'Country is required' }).nonempty(),
    dob: z.string({ message: 'Date of birth is required' }).nonempty(),
})
export type PersonalInfo = z.infer<typeof personalInfoSchema>

export const paymentInfoSchema = z.object({
    cardNumber: z.coerce.number({ message: 'Card number is required' }),
    expires: z.string({ message: 'Expires is required' }).regex(new RegExp('^(0[1-9]|1[0-2])\/[0-9]{2}$'), { message: 'Please use the MM/YY format' }),
    cvv: z.coerce.number({ message: 'CVV is required' }).min(100).max(999),
})

export type PaymentInfo = z.infer<typeof paymentInfoSchema>

export default function FormProvider({ children }: PropsWithChildren) {

    const [personalInfo, setPersonalInfo] = useState<PersonalInfo | undefined>();
    const [paymentInfo, setPaymentInfo] = useState<PaymentInfo | undefined>();

    return <FormContext.Provider value={{
        personalInfo,
        setPersonalInfo,
        paymentInfo,
        setPaymentInfo
    }}>{children}</FormContext.Provider>;
}

export const useCheckoutForm = () => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error('useForm must be used within a FormProvider');
    }
    return context;
}


