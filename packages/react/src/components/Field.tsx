import React from 'react'
import { useField, useForm } from '../hooks'
import { useAttach } from '../hooks/useAttach'
import { ReactiveField } from './ReactiveField'
import { FieldContext } from '../shared'
import { JSXComponent, IFieldProps } from '../types'

export const Field = <D extends JSXComponent, C extends JSXComponent>(
  props: IFieldProps<D, C>
) => {
  console.log('hi field')
  const form = useForm()
  const parent = useField()
  const field = useAttach(
    form.createField({ basePath: parent?.address, ...props })
  )
  console.log('hi fiel2')
  return (
    <FieldContext.Provider value={field}>
      <ReactiveField field={field}>{props.children}</ReactiveField>
    </FieldContext.Provider>
  )
}

Field.displayName = 'Field'
