export interface Puppy{
    id?: string; 
    breed: string; 
    motherId: string; 
    fatherId: string; 
    birth: Date; 
    sex: string; 
    price: number;
    available: boolean;
}