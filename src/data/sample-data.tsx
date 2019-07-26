import React from 'react';
import styled from 'styled-components';

let d = [
    {
        "id": 1,
        "fldWeek": "31",
        "fldTitle": "Восстановление работ",
        "fldDescrip": "1789-1797"
    },
    {
        "id": 2,
        "fldWeek": "31",
        "fldTitle": "",
        "fldDescrip": "1797-1801"
    },
    {
        "id": 3,
        "fldWeek": "31",
        "fldTitle": "Работа в ITSMic-Тестирование 1",
        "fldDescrip": "1801-1809"
    },
    {
        "id": 4,
        "fldWeek": "22",
        "fldTitle": "Восстановление работ",
        "fldDescrip": "1809-1817"
    },
    {
        "id": 5,
        "fldWeek": "22",
        "fldTitle": "Работа в ITSMic-Тестирование 1",
        "fldDescrip": "1817-1825"
    },
    {
        "id": 6,
        "fldWeek": "33",
        "fldTitle": "Восстановление работ",
        "fldDescrip": "1825-1829"
    },
    {
        "id": 7,
        "fldWeek": "22",
        "fldTitle": "Работа в ITSM",
        "fldDescrip": "1829-1837"
    },
    {
        "id": 8,
        "fldWeek": "32",
        "fldTitle": "Работа в ITSM",
        "fldDescrip": "1837-1841"
    },
    {
        "id": 9,
        "fldWeek": "21",
        "fldTitle": "Работа на дому",
        "fldDescrip": "1841"
    },
    {
        "id": 10,
        "fldWeek": "33",
        "fldTitle": "Восстановление работ",
        "fldDescrip": "1841-1845"
    },
    {
        "id": 11,
        "fldWeek": "22",
        "fldTitle": "Работа в ITSM",
        "fldDescrip": "1845-1849"
    },
    {
        "id": 12,
        "fldWeek": "31",
        "fldTitle": "Работа на дому",
        "fldDescrip": "1849-1850"
    },
    {
        "id": 13,
        "fldWeek": "21",
        "fldTitle": "Работа на дому",
        "fldDescrip": "1850-1853"
    },
    {
        "id": 14,
        "fldWeek": "31",
        "fldTitle": "Работа в ITSM",
        "fldDescrip": "1853-1857"
    },
    {
        "id": 15,
        "fldWeek": "22",
        "fldTitle": "Работа в ITSM",
        "fldDescrip": "1857-1861"
    },
    {
        "id": 16,
        "fldWeek": "33",
        "fldTitle": "Тестирование 1",
        "fldDescrip": "1861-1865"
    },
    {
        "id": 17,
        "fldWeek": "22",
        "fldTitle": "Продолжение работ",
        "fldDescrip": "1865-1869"
    },
    {
        "id": 18,
        "fldWeek": "33",
        "fldTitle": "Тестирование 1",
        "fldDescrip": "1869-1877"
    },
    {
        "id": 19,
        "fldWeek": "33",
        "fldTitle": "Тестирование 1",
        "fldDescrip": "1877-1881"
    },
    {
        "id": 20,
        "fldWeek": "22",
        "fldTitle": "Тестирование 1",
        "fldDescrip": "1881"
    },
    {
        "id": 21,
        "fldWeek": "22",
        "fldTitle": "Тестирование 1",
        "fldDescrip": "1881-1885"
    },
    {
        "id": 22,
        "fldWeek": "23",
        "fldTitle": "Работа в ITSM",
        "fldDescrip": "1885-1889"
    },
    {
        "id": 23,
        "fldWeek": "22",
        "fldTitle": "Тестирование 1",
        "fldDescrip": "1889-1893"
    },
    {
        "id": 24,
        "fldWeek": "33",
        "fldTitle": "Работа в ITSM",
        "fldDescrip": "1893-1897"
    },
    {
        "id": 25,
        "fldWeek": "31",
        "fldTitle": "Тестирование 1",
        "fldDescrip": "1897-1901"
    },
    {
        "id": 26,
        "fldWeek": "31",
        "fldTitle": "Тестирование 1",
        "fldDescrip": "1901-1909"
    },
    {
        "id": 27,
        "fldWeek": "31",
        "fldTitle": "Тестирование 1",
        "fldDescrip": "1909-1913"
    },
    {
        "id": 28,
        "fldWeek": "21",
        "fldTitle": "Работа в ITSM",
        "fldDescrip": "1913-1921"
    },
    {
        "id": 29,
        "fldWeek": "22",
        "fldTitle": "Тестирование 1",
        "fldDescrip": "1921-1923"
    },
    {
        "id": 30,
        "fldWeek": "17",
        "fldTitle": "Тестирование 1",
        "fldDescrip": "1923-1929"
    },
    {
        "id": 31,
        "fldWeek": "22",
        "fldTitle": "Тестирование 1",
        "fldDescrip": "1929-1933"
    },
    {
        "id": 32,
        "fldWeek": "33",
        "fldTitle": "Работа в ITSM",
        "fldDescrip": "1933-1945"
    },
    {
        "id": 33,
        "fldWeek": "22",
        "fldTitle": "Работа в ITSM",
        "fldDescrip": "1945-1953"
    },
    {
        "id": 34,
        "fldWeek": "22",
        "fldTitle": "Тестирование 1",
        "fldDescrip": "1953-1961"
    },
    {
        "id": 35,
        "fldWeek": "33",
        "fldTitle": "Работа в ITSM",
        "fldDescrip": "1961-1963"
    },
    {
        "id": 36,
        "fldWeek": "23",
        "fldTitle": "Работа в ITSM",
        "fldDescrip": "1963-1969"
    },
    {
        "id": 37,
        "fldWeek": "23",
        "fldTitle": "Тестирование 1",
        "fldDescrip": "1969-1974"
    },
    {
        "id": 38,
        "fldWeek": "21",
        "fldTitle": "Тестирование 1",
        "fldDescrip": "1974-1977"
    },
    {
        "id": 39,
        "fldWeek": "11",
        "fldTitle": "Работа в ITSM",
        "fldDescrip": "1977-1981"
    },
    {
        "id": 40,
        "fldWeek": "31",
        "fldTitle": "Тестирование 1",
        "fldDescrip": "1981-1989"
    },
    {
        "id": 41,
        "fldWeek": "13",
        "fldTitle": "Тестирование 1",
        "fldDescrip": "1989-1993"
    },
    {
        "id": 42,
        "fldWeek": "23",
        "fldTitle": "Работа в ITSM",
        "fldDescrip": "1993-2001"
    },
    {
        "id": 43,
        "fldWeek": "33",
        "fldTitle": "Тестирование 1",
        "fldDescrip": "2001-2009"
    },
    {
        "id": 44,
        "fldWeek": "21",
        "fldTitle": "Работа в ITSM",
        "fldDescrip": "2009-2016"
    }
]



interface EventListI {
    id: number;
    fldWeek: string;
    fldTitle: string;
    fldDescrip: string;
}

function createKey(input: string) {
    return input ? input.replace(/^(the|a|an)/, '').replace(/\s/g, '') : input;
}

const NameWrapper = styled.span`
  display: flex;
  align-items: center;
`;

const AvatarWrapper = styled.div`
  margin-right: 8px;
`;

export const caption = 'Представление списка мероприятий';

export const createHead = (withWidth: boolean) => {
    return {
        cells: [
            {
                key: 'id',
                content: 'id',
                isSortable: true,
                width: withWidth ? 2 : undefined,
            },
            {
                key: 'week',
                content: 'Неделя',
                shouldTruncate: true,
                isSortable: true,
                width: withWidth ? 5 : undefined,
            },
            {
                key: 'fldTitle',
                content: 'Имя задачи',
                shouldTruncate: true,
                isSortable: true,
                width: withWidth ? 10 : undefined,
            },
            {
                key: 'content',
                content: 'Планируемая дата выполнеения',
                shouldTruncate: true,
            },
            {
                key: 'content',
                content: 'Кому назначено',
                shouldTruncate: true,
            },
            {
                key: 'content',
                content: 'Подразделение',
                shouldTruncate: true,
            },
            {
                key: 'content',
                content: 'Важность',
                shouldTruncate: true,
            },
            {
                key: 'content',
                content: 'Площадка',
                shouldTruncate: true,
            },
            {
                key: 'content',
                content: 'Состояние задачи',
                shouldTruncate: true,
            },
            {
                key: 'content',
                content: 'Вид',
                shouldTruncate: true,
            },
        ],
    };
};

export const head = createHead(true);

export const rows = d.map((EventListI: EventListI, index: number) => ({
    key: `row-${index}-${EventListI.id}`,
    cells: [
        {
            key: EventListI.id,
            // key: createKey(EventListI.id),
            content: EventListI.id,
        },
        {
            key: EventListI.id,
            content: EventListI.fldWeek,
        },
        {
            key: EventListI.id,
            content: EventListI.fldTitle,
        },
    ],
}));
