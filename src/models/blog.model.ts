import { User } from './user.model';
export interface Blog {
    id: number;
    title: string;
    content: string;
    user: User;
    createdAt: Date;
    updatedAt: Date;
}