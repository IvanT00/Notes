export interface Note {
    id: string;
    title: string;
    description: string;
    time: string;
}

export type Notes = Note[];

export const formatTime = (date: Date): string => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
};

export const formatDate = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    const time = formatTime(date);
    return `${time} ${day}/${month}/${year}`;
};

export const createInitialNote = (): Note => {
    const now = new Date();
    return {
        id: crypto.randomUUID(),
        title: "Новая заметка",
        description: "Нет дополнительного текста",
        time: formatDate(now)
    };
};

export const initData = (): Notes => {
    try {
        const raw: string | null = localStorage.getItem("notes");

        if (!raw || raw.trim() === "" || raw === "[]") {
            const initialNote = createInitialNote();
            localStorage.setItem("notes", JSON.stringify([initialNote]));
            return [initialNote];
        }

        const parsed = JSON.parse(raw);

        if (!Array.isArray(parsed)) {
            const initialNote = createInitialNote();
            localStorage.setItem("notes", JSON.stringify([initialNote]));
            return [initialNote];
        }

        return parsed;
    } catch (error) {
        console.error('Initialization failed:', error);
        const initialNote = createInitialNote();
        localStorage.setItem("notes", JSON.stringify([initialNote]));
        return [initialNote];
    }
};