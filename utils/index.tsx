interface IDate { slug: string; blogData: { [key: string]: any; }; }

export const sortByDate = (a: IDate, b: IDate) => {
    return new Date(b.blogData.date).valueOf() - new Date(a.blogData.date).valueOf();
}