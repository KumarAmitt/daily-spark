import {computed} from 'vue'

export const useFormatDate = (date) => {
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return computed(() => new Intl.DateTimeFormat('en-IN', options).format(date))
}


