import { defineStore } from 'pinia'
import { config } from '../../config/config'
import { CampaignType, ChannelType } from './types'

const colors = ["light-blue", "green", "blue", 'teal']
export const useCreateCampaignFormStore = defineStore('createCampaignForm', {
    state: () => ({
        campaign: { name: "", channels: []} as CampaignType,
    }),
    actions: {
        createCompaign() {
            this.campaign = { name: "", channels: []};
            for(let item of config) {
                let channel: ChannelType = {name: item.name, checked: false, text: ""}
                if(item.keyboard) {
                    channel.isKeyboardInline = false;
                    channel.tips = []
                    if(item.keyboard.inline.isSupportURL || item.keyboard.standart.isSupportURL) {
                        channel.urls = []
                    }
                }
                this.addChannel(channel)
                
            }
            for(let i in this.campaign.channels) {
                this.campaign.channels[i].color = colors[i]
            }
        },
        addChannel(channel: ChannelType): void {
            if(this.campaign) {
                this.campaign.channels.push(channel);
            }
        },
        setCampaign(campaign: CampaignType) {
            this.campaign = campaign
            
        },
        clear() {
            this.createCompaign()
        },
        setCampaignName(name: string) {
            if(this.campaign) {
                this.campaign.name = name
            }
        },
        getTips(nameChannel: string) {
            // this.campaign.channels.find(nameChannel).tips;
        }
    },
    getters: {
        config() {
            return config
        }
    }
}) 