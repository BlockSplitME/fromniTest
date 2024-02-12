<template>
    <v-chip  @click="isActive = true" v-bind="props" text="+"/>
    <v-dialog width="500" v-model="isActive">
        <v-card title="Создайте подсказку">
            <v-card-text>
                <v-text-field
                    v-model="item"
                    hide-details
                    placeholder="Введите текст подсказки"
                    variant="outlined"
                    v-bind="itemAttrs"
                ></v-text-field>
                <div> {{ errors.item }}</div>
                <div v-if="mode">
                    <v-text-field 
                        v-model="url"
                        hide-details
                        placeholder="URL"
                        variant="outlined"
                        v-bind="urlAttrs"
                    ></v-text-field>
                    <div> {{ errors.url }}</div>
                </div>
            </v-card-text>
            <v-card-item> 
                <div>
                    <input type="radio" name="text" value="false" v-model="radio"/> 
                    <label for="text">Текст</label>
                </div>
                <div v-if="isSupportUrl">
                    <input type="radio" name="url" value="true" v-model="radio"> 
                    <label for="url">Ссылка</label>
                </div>
            </v-card-item>
            <v-card-actions>
                <v-btn text="Сохранить"
                @click="addTip(item, mode, url)"
                ></v-btn>
                <v-spacer></v-spacer>
                <v-btn text="Закрыть"
                @click="closeForm();"
                ></v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script lang="ts" setup>
    import { PropType, ref, watch } from 'vue';
    import { useForm } from 'vee-validate';
    import * as yup from 'yup';

    const MAX_LENGTH_TIP = 64

    const props = defineProps({
        textLength: Object as PropType<number>,
        isSupportUrl: Object as PropType<boolean>
    })
    
    let textLength = props.textLength
    if(!textLength ) {
        textLength = Infinity
    }

    const validationSchema = yup.object({
        item: yup.string().max(textLength).required("is required"),
        url: yup.string().url().required("url is required")
    })
    const { errors, defineField, handleSubmit } = useForm({
        validationSchema 
    });
    const [item, itemAttrs] = defineField('item')
    const [url, urlAttrs] = defineField('url')
    
    let mode = ref<boolean>(false)
    let radio = ref("false")
    let isActive = ref(false)
    const emit = defineEmits(['addTip', 'addUrl'])
    
   
    
    const addTip = (data: string, isURL: boolean, url?: string): void => {
        if(!data) return
        if(textLength) {
            if(data.length > MAX_LENGTH_TIP) {
                data = data.slice(0, MAX_LENGTH_TIP)
            }
        }
        console.log(errors.value);
        if(isURL) {
            if(errors.value.item || errors.value.url || !url) {
                return;
            }
        } else {
            if(errors.value.item) {
                return;
            } 
        }
        isURL ? emit('addUrl', data, url) : emit('addTip', data)
        closeForm(); 
    }
    
    watch(radio, (value: string) => {
        radio.value == "true" ? mode.value = true : mode.value = false;
    })
    const closeForm = () => {
        isActive.value = false;
        clearForm();
    }
    const clearForm = () => {
        item.value='';
        url.value='';
        mode.value = false
        radio.value = "false"
    }
</script>