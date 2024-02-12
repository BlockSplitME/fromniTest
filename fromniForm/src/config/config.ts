export type KeyboardType = {
    isSupportURL: boolean,
    capacity?: number,
    textLength?: number,
    countMaxURL?: number,
}
export type ConfigType = {
    name: string,
    maxLength: number,
    keyboard?: {
        standart: KeyboardType,
        inline: KeyboardType
    }
}

export const config: ConfigType[] = [
    {
        "name": "Вконтакте",
        "maxLength": 4096,
        "keyboard": {
            "standart": {
                "capacity": 40,
                "isSupportURL": true,
            },
            "inline": {
                "capacity": 10,
                "isSupportURL": true,
            }
        }
    },
    {
        "name": "WhatsApp",
        "maxLength": 1000,
        "keyboard": {
            "standart": {
                "capacity": 10,
                "textLength": 20,
                "isSupportURL": false,
            },
            "inline": {
                "capacity": 3,
                "textLength": 20,
                "isSupportURL": true,
                "countMaxURL": 1
            }
        }
    },
    {
        "name": "Telegram",
        "maxLength": 4096,
        "keyboard": {
            "standart": {
                "isSupportURL": false,
            },
            "inline": {
                "textLength": 64,
                "isSupportURL": true,
            }
        }
    },
    {
        "name": "SMS",
        "maxLength": 0,
    }
]