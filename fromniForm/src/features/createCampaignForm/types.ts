import { ConfigType, KeyboardType } from '../../config/config'

export type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
}: T;

export { ConfigType }
export { KeyboardType }

export type UrlType = {
    tip: string,
    url: string
}
export type ChannelType = {
    name: string,
    checked: boolean,
    text: string
    isKeyboardInline?: boolean,
    tips?: string[],
    urls?: UrlType[],
    color?: string
}

export type CampaignType = {
    name: string ,
    channels: ChannelType[]
}
