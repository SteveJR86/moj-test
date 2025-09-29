export type TTaskItem = {
    id: string;
    title: string;
    description: string;
    status: string;
    dateDue: string;
}

export type TTaskItemNoDesc = Omit<TTaskItem, "description">