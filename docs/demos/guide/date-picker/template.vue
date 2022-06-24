<template>
  <Form :form="form">
    <Field
      name="date"
      title="普通日期"
      :decorator="[FormItem]"
      :component="[DatePicker]"
    />
    <Field
      name="month"
      title="月"
      :decorator="[FormItem]"
      :component="[
        DatePicker,
        {
          type: 'month',
        },
      ]"
    />
    <Field
      name="year"
      title="年"
      :decorator="[FormItem]"
      :component="[
        DatePicker,
        {
          type: 'year',
        },
      ]"
    />
    <Field
      name="dateTime"
      title="日期时间"
      :decorator="[FormItem]"
      :component="[
        DatePicker,
        {
          type: 'datetime',
        },
      ]"
    />
    <!-- <ArrayField
      name="dateRange"
      title="日期范围"
      :decorator="[FormItem]"
      :component="[
        DatePicker,
        {
          type: 'daterange',
        },
      ]"
    />
    <ArrayField
      name="monthRange"
      title="月范围"
      :decorator="[FormItem]"
      :component="[
        DatePicker,
        {
          type: 'monthrange',
        },
      ]"
    />
    <ArrayField
      name="dateTimeRange"
      title="日期时间范围"
      :decorator="[FormItem]"
      :component="[
        DatePicker,
        {
          type: 'datetimerange',
        },
      ]"
    /> -->
    <Submit @submit="onSubmit">提交</Submit>
  </Form>
</template>

<script lang="ts" setup>
import { createForm } from '@formily/core'
import { Field, ArrayField } from '@formily/vue'
import { Form, FormItem, DatePicker, Submit } from '@formily/naive-ui'

const form = createForm()

const onSubmit = (value) => {
  console.log(value)
}
</script>
