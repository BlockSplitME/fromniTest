<template >
    <v-expansion-panel-title :ripple="{ class: 'text-'+channel.color }"  >
        {{ channel.name }} 
    </v-expansion-panel-title>
    <v-expansion-panel-text class="border border-primary">
        <v-row>
            <v-col>    
        <v-textarea
            v-model="channel.text"
            hide-details
            placeholder="Введите сообщение"
            variant="outlined"
            :maxlength="config.maxLength" 
        ></v-textarea>
    </v-col>
        <v-col class="flex-grow-0 order-2" style="max-width: 50%;">
                <Keyboard  v-if="channel.isKeyboardInline && config.keyboard"
                :tips="channel.tips" :urls="channel.urls" :keyboardConf="findConfKeyboard(true)"
                @add-text="addText"
                ></Keyboard>
            </v-col>
            </v-row>
            <div v-if="config.keyboard">
            <input type="checkbox" id="checkbox" v-model="channel.isKeyboardInline" />
            <label for="checkbox">Inline</label>
        </div>
        <Keyboard v-if="!channel.isKeyboardInline && config.keyboard" :tips="channel.tips" :urls="channel.urls" :keyboardConf="findConfKeyboard(false)" @add-text="addText"></Keyboard>
    </v-expansion-panel-text>
</template>

<script setup lang="ts">
    import { defineProps, PropType } from 'vue'
    import Keyboard from './Keyboard.vue'
    import { ChannelType, ConfigType } from '../types'
    
    const props = defineProps({
        channel: Object as PropType<ChannelType>,
        config: Object as PropType<ConfigType> 
    })
    let channel = props.channel
    let config = props.config
    if(channel == undefined) {
        channel = {name: "", checked: false, text: ""}
    }
    if(config == undefined) {
        config = {name: "", maxLength: 0}
    }

    const addText = (data: string): void => {
        console.log(data);
        
        if(data.length < (config.maxLength - channel.text.length)) {
            channel.text += data
        }
    }
    const findConfKeyboard = (inline: boolean) => {
        if(props.config) {
            return inline ? props.config.keyboard?.inline : props.config.keyboard?.standart
        }
    }
</script>