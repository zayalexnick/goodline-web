export default interface NewsItemInterface {
    id: number;
    title: string;
    description: string;
    content: string;
    image: string;
    categoryId: number;
    category: {
        id: number;
        category: string;
    }
}