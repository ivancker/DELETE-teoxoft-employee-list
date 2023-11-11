<template>
  <div>
    <employee-form />
    <employee-list />
  </div>
</template>

<script>
import EmployeeList from '@/components/EmployeeList.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {
    EmployeeList,

  },
}
</script>