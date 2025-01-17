import { isFn } from '@formily/shared'
import { autorun, batch } from '@formily/reactive'
import { Form } from '../models'
import { LifeCycleTypes } from '../types'
import { createEffectHook } from '../shared/effective'

function createFormEffect(type: LifeCycleTypes) {
  return createEffectHook(
    type,
    // 通过闭包，前一个函数传入发布订阅的payLoad，后一个函数触发包含payload的回调
    (form: Form) => (callback: (form: Form) => void) => {
      batch(() => {
        callback(form)
      })
    }
  )
}

export const onFormInit = createFormEffect(LifeCycleTypes.ON_FORM_INIT)
export const onFormMount = createFormEffect(LifeCycleTypes.ON_FORM_MOUNT)
export const onFormUnmount = createFormEffect(LifeCycleTypes.ON_FORM_UNMOUNT)
export const onFormValuesChange = createFormEffect(
  LifeCycleTypes.ON_FORM_VALUES_CHANGE
)
export const onFormInitialValuesChange = createFormEffect(
  LifeCycleTypes.ON_FORM_INITIAL_VALUES_CHANGE
)
export const onFormInputChange = createFormEffect(
  LifeCycleTypes.ON_FORM_INPUT_CHANGE
)
export const onFormSubmit = createFormEffect(LifeCycleTypes.ON_FORM_SUBMIT)
export const onFormReset = createFormEffect(LifeCycleTypes.ON_FORM_RESET)
export const onFormSubmitStart = createFormEffect(
  LifeCycleTypes.ON_FORM_SUBMIT_START
)
export const onFormSubmitEnd = createFormEffect(
  LifeCycleTypes.ON_FORM_SUBMIT_END
)
export const onFormSubmitSuccess = createFormEffect(
  LifeCycleTypes.ON_FORM_SUBMIT_SUCCESS
)
export const onFormSubmitFailed = createFormEffect(
  LifeCycleTypes.ON_FORM_SUBMIT_FAILED
)
export const onFormSubmitValidateStart = createFormEffect(
  LifeCycleTypes.ON_FORM_SUBMIT_VALIDATE_START
)
export const onFormSubmitValidateSuccess = createFormEffect(
  LifeCycleTypes.ON_FORM_SUBMIT_VALIDATE_SUCCESS
)
export const onFormSubmitValidateFailed = createFormEffect(
  LifeCycleTypes.ON_FORM_SUBMIT_VALIDATE_FAILED
)
export const onFormSubmitValidateEnd = createFormEffect(
  LifeCycleTypes.ON_FORM_SUBMIT_VALIDATE_END
)
export const onFormValidateStart = createFormEffect(
  LifeCycleTypes.ON_FORM_VALIDATE_START
)
export const onFormValidateSuccess = createFormEffect(
  LifeCycleTypes.ON_FORM_VALIDATE_SUCCESS
)
export const onFormValidateFailed = createFormEffect(
  LifeCycleTypes.ON_FORM_VALIDATE_FAILED
)
export const onFormValidateEnd = createFormEffect(
  LifeCycleTypes.ON_FORM_VALIDATE_END
)
export const onFormGraphChange = createFormEffect(
  LifeCycleTypes.ON_FORM_GRAPH_CHANGE
)
export const onFormLoading = createFormEffect(LifeCycleTypes.ON_FORM_LOADING)
export function onFormReact(callback?: (form: Form) => void) {
  let dispose = null
  onFormInit((form) => {
    dispose = autorun(() => {
      if (isFn(callback)) callback(form)
    })
  })
  onFormUnmount(() => {
    dispose()
  })
}
