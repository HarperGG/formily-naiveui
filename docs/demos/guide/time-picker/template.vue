<template>
  <FormProvider :form="form">
    <Field
      name="time"
      title="时间"
      required
      :decorator="[FormItem]"
      :component="[
        TimePicker,
        {
          style: {
            width: '240px',
          },
        },
      ]"
    />
    <Submit @submit="log"> 提交 </Submit>
  </FormProvider>
</template>

<script lang="ts" setup>
import { createForm } from '@formily/core'
import { FormProvider, Field } from '@formily/vue'
import { FormItem, TimePicker, Submit } from '@formily/naive-ui'

const form = createForm()

const log = (value) => {
  console.log(value)
}
</script>
